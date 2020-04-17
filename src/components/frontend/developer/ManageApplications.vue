<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
        <CandidateSider/>
        <a-layout>

            <a-layout-content style="background-color: white">
                <DevHeader/>
                <div :style="{ padding: '5px', background: '#fff',marginTop:'0rem' }">
                    <a-row style="margin-top: 1%">
                        <a-col :xs="{span: 24, offset: 1 }" :sm="{span: 24, offset: 1 }" :md="{span: 24, offset: 1 }"
                               :lg="{span: 24, offset: 0 }" :xl="{span: 24, offset: 0}">
                            <h3 style="color: #1976D2;font-weight: bold;margin-left: 1rem">
                                Track your applications through the stages
                            </h3>
                        </a-col>


                    </a-row>
                    <div>
                        <a-tabs defaultActiveKey="1" @change="callback">
                            <a-tab-pane tab="Active applications" key="1">
                                <a-row :gutter="16" style="padding: 2%">


                                    <a-col class="tracker" :xs="{span: 24, offset: 0  }" :sm="{span: 12, offset: 0 }"
                                           :md="{span: 12, offset: 0 }"
                                           :lg="{span: 6, offset: 0 }" :xl="{span: 6,offset: 0 }">
                                        <a-row class='managecard'>
                                            <a-col span="24">
                                                <div style="text-align:center;padding: 5%;">
                                                    <p style="color: #1976D2;font-weight: bold;text-align: center;font-size: 1rem">
                                                        Applications</p>
                                                </div>
                                                <a-progress :percent="100" strokeColor="#4DB3D3" :showInfo="false"/>

                                            </a-col>
                                            <a-col span="24">
                                                <div style="padding: 5%">
                                                    <div v-if="waiting">
                                                        <div style="text-align: center">
                                                            <a-spin/>
                                                        </div>
                                                    </div>
                                                    <div v-else>
                                                        <a-timeline v-if="active.length>0">
                                                            <a-timeline-item v-for="application in active"
                                                                             v-bind:key="application">
                                                                <a><strong>{{application.title}}</strong></a>
                                                                <br>
                                                                <div style="color: black">
                                                                    Company : {{application.company}}

                                                                    <br>
                                                                    <span>
                                                Stage:
                                            <a-tag color="#9C27B0"
                                                   style="text-align: center;width: 4rem;">
                                                {{application.stage}}
                                            </a-tag>

                                                <p v-if="application.stage === 'pending'">
                                                    <span><a
                                                            @click="acceptapplication(application.key,application.type)">accept</a></span>
                                                    <a style="color: red;margin-left: 1rem"
                                                       @click="showModal(application.key,application.type,application.stage)">
                                                withdraw
                                            </a>
                                                </p>
                                                    <p v-else>

                                                    <a
                                                            @click="showModal(application.key,application.type,application.stage)">
                                                withdraw
                                            </a>
                                                </p>


                                            </span>

                                                                </div>


                                                            </a-timeline-item>

                                                        </a-timeline>
                                                    </div>

                                                </div>

                                            </a-col>
                                        </a-row>


                                    </a-col>

                                    <a-col class="tracker" :xs="{span: 24, offset: 0  }" :sm="{span: 12, offset: 0 }"
                                           :md="{span: 12, offset: 0 }"
                                           :lg="{span: 6, offset: 0 }" :xl="{span: 6,offset: 0 }">
                                        <a-row class='managecard'>
                                            <a-col span="24">
                                                <div style="text-align:center;padding: 5%;">
                                                    <p style="color: #1976D2;font-weight: bold;text-align: center;font-size: 1rem">
                                                        Testing</p>
                                                </div>
                                                <a-progress :percent="100" strokeColor="#4DB3D3" :showInfo="false"/>

                                            </a-col>
                                            <a-col span="24">
                                                <div style="padding: 5%">
                                                    <div v-if="waiting">
                                                        <div style="text-align: center">
                                                            <a-spin/>
                                                        </div>
                                                    </div>
                                                    <div v-else>
                                                        <a-timeline v-if="testing.length>0">
                                                            <a-timeline-item v-for="application in testing"
                                                                             v-bind:key="application">
                                                                <a><strong>{{application.title}}</strong></a>
                                                                <br>
                                                                <div style="color: black">
                                                                    Company : {{application.company}}

                                                                    <br>
                                                                    <div v-if="application.project">

                                                                        Project assigned: <span></span>
                                                                        <a @click="navigateTo({name:'assignedproject',params:{projectId:application.project.id,applicationId:application.key,type:application.type}})">
                                                                            {{application.project.name}}
                                                                        </a>


                                                                    </div>
                                                                    <div v-else>
                                                                        Project assignment pending


                                                                    </div>
                                                                    <a
                                                                            @click="showModal(application.key,application.type,application.stage)">
                                                                        withdraw

                                                                    </a>

                                                                </div>


                                                            </a-timeline-item>

                                                        </a-timeline>
                                                    </div>
                                                </div>

                                            </a-col>
                                        </a-row>


                                    </a-col>

                                    <a-col class="tracker" :xs="{span: 24, offset: 0  }" :sm="{span: 12, offset: 0 }"
                                           :md="{span: 12, offset: 0 }"
                                           :lg="{span: 6, offset: 0 }" :xl="{span: 6,offset: 0 }">
                                        <a-row class='managecard'>
                                            <a-col span="24">
                                                <div style="text-align:center;padding: 5%;">
                                                    <p style="color: #1976D2;font-weight: bold;text-align: center;font-size: 1rem">
                                                        Interview</p>
                                                </div>
                                                <a-progress :percent="100" strokeColor="#0868AC" :showInfo="false"/>

                                            </a-col>
                                            <a-col span="24">
                                                <div style="padding: 5%">
                                                    <div v-if="waiting">
                                                        <div style="text-align: center">
                                                            <a-spin/>
                                                        </div>
                                                    </div>
                                                    <div v-else>
                                                        <a-timeline v-if="interview.length >0">
                                                            <a-timeline-item v-for="application in interview"
                                                                             v-bind:key="application">
                                                                <a><strong>{{application.title}}</strong></a>
                                                                <br>
                                                                <div style="color: black">
                                                                    Company : {{application.company}}

                                                                    <br>
                                                                    <div v-if="application.start !=='Invalid date'">
                                                                        Interview: <span><a style="margin-left: 2%"
                                                                                            type="primary"
                                                                                            size="small"
                                                                                            @click="showEvent(application.key,application)"><a-icon
                                                                            type="calendar"/>View</a></span>


                                                                    </div>
                                                                    <div v-else>
                                                                        Interview time not yet set


                                                                    </div>

                                                                </div>

                                                            </a-timeline-item>

                                                        </a-timeline>
                                                    </div>
                                                </div>

                                            </a-col>
                                        </a-row>


                                    </a-col>

                                    <a-col :xs="{span: 24, offset: 0  }" :sm="{span: 12, offset: 0 }"
                                           :md="{span: 12, offset: 0 }"
                                           :lg="{span: 6, offset: 0 }" :xl="{span: 6,offset: 0 }" class="tracker">
                                        <a-row class='managecard'>
                                            <a-col span="24">
                                                <div style="text-align:center;padding: 5%;">
                                                    <p style="color: #1976D2;font-weight: bold;text-align: center;font-size: 1rem">
                                                        Offers</p>
                                                </div>
                                                <a-progress :percent="100" strokeColor="#084081" :showInfo="false"/>

                                            </a-col>
                                            <a-col span="24">
                                                <div style="padding: 5%">
                                                    <div v-if="waiting">
                                                        <div style="text-align: center">
                                                            <a-spin/>
                                                        </div>
                                                    </div>
                                                    <div v-else>
                                                        <a-timeline v-if="offers.length >0">
                                                            <a-timeline-item v-for="application in offers"
                                                                             v-bind:key="application">
                                                                <a><strong>{{application.title}}</strong></a>
                                                                <br>
                                                                <div style="color: black">
                                                                    Company : {{application.company}}

                                                                    <br>
                                                                    Stage:
                                                                    <a-tag color="#9C27B0"
                                                                           style="text-align: center;width: 4rem;">
                                                                        {{application.stage}}
                                                                    </a-tag>
                                                                </div>
                                                                <a-button type="primary" size="small"
                                                                          @click="showModal(application.key,application.type,application.stage)">
                                                                    withdraw
                                                                </a-button>


                                                            </a-timeline-item>

                                                        </a-timeline>
                                                    </div>
                                                </div>

                                            </a-col>
                                        </a-row>


                                    </a-col>


                                </a-row>
                            </a-tab-pane>
                            <a-tab-pane tab="Withdrawn applications" key="2" forceRender>
                                <div v-if="withdrawn.length > 0">
                                    <a-row :gutter="16" style="padding: 2%">
                                        <a-col :xs="{span: 24, offset: 0  }" :sm="{span: 12, offset: 0 }"
                                               :md="{span: 12, offset: 0 }"
                                               :lg="{span: 6, offset: 0 }" :xl="{span: 6,offset: 0 }" class="tracker">
                                            <a-row class='managecard'>
                                                <a-col span="24">
                                                    <div style="text-align:center;padding: 5%;">
                                                        <p style="color: #1976D2;font-weight: bold;text-align: center;font-size: 1rem">
                                                            Withdrawn</p>
                                                    </div>
                                                    <a-progress :percent="100" strokeColor="#084081" :showInfo="false"/>

                                                </a-col>
                                                <a-col span="24">
                                                    <div style="padding: 5%">
                                                        <div v-if="waiting">
                                                            <div style="text-align: center">
                                                                <a-spin/>
                                                            </div>
                                                        </div>
                                                        <div v-else>
                                                            <a-timeline v-if="withdrawn.length >0">
                                                                <a-timeline-item v-for="application in withdrawn"
                                                                                 v-bind:key="application">
                                                                    <a><strong>{{application.title}}</strong></a>
                                                                    <br>
                                                                    <div style="color: black">
                                                                        Company : {{application.company}}

                                                                        <br>
                                                                        Stage:
                                                                        <a-tag color="#9C27B0"
                                                                               style="text-align: center;width: 4rem;">
                                                                            {{application.stage}}
                                                                        </a-tag>
                                                                    </div>


                                                                </a-timeline-item>

                                                            </a-timeline>
                                                        </div>
                                                    </div>

                                                </a-col>
                                            </a-row>


                                        </a-col>
                                    </a-row>
                                </div>
                                <a-empty v-else/>
                            </a-tab-pane>

                        </a-tabs>
                    </div>


                    <a-modal
                            :title="currentinterview.company"
                            v-model="visible"
                            @ok="handleOk"

                    >
                        <p>Interview starttime : {{currentinterview.start}}</p>
                        <p>Interview endtime {{currentinterview.end}}</p>
                        <template slot="footer">
                            <a-button key="submit" type="danger" ghost :loading="loading"
                                      @click="Withdrawapplicationinterview(currentinterview.key,currentinterview.type)">
                                reject invite
                            </a-button>
                            <a-button
                                    type="primary"
                                    html-type="submit"
                                    @click="saveEvent(interviewerapplicationid,interviewstart,interviewend)"
                            >
                                Accept
                            </a-button>

                        </template>
                    </a-modal>

                    <a-modal title="" v-model="check">
                        <template slot="footer">


                            <a-button v-if="stage==='new' || stage === 'active' || stage === 'pending'" key="submit"
                                      type="primary" :loading="loading" @click="Withdrawapplication(key,type)">
                                Submit
                            </a-button>
                            <a-button v-else-if="stage === 'test'" key="submit" type="primary" :loading="loading"
                                      @click="Withdrawapplicationtest(key,type)">
                                Submit
                            </a-button>
                            <a-button v-else-if="stage === 'interview'" key="submit" type="primary" :loading="loading"
                                      @click="Withdrawapplicationinterview(key,type)">
                                Submit
                            </a-button>
                            <a-button v-else-if="stage === 'offer'" key="submit" type="primary" :loading="loading"
                                      @click="Withdrawapplicationoffer(key,type)">
                                Submit
                            </a-button>
                        </template>
                        <p>Are you sure you want to withdraw your application</p>

                    </a-modal>


                </div>
            </a-layout-content>
        </a-layout>
    </a-layout>

</template>

<script>
    class Application {
        constructor(id, title, company, stage, type, start, end, color, project) {
            this.key = id;
            this.title = title
            this.company = company
            this.stage = stage
            this.type = type
            this.start = start
            this.end = end
            this.color = color
            this.project = project


        }
    }

    import CandidateSider from "../../layout/CandidateSider";
    import DevHeader from "../../layout/DevHeader";
    import ARow from "ant-design-vue/es/grid/Row";
    import ACol from "ant-design-vue/es/grid/Col";
    import Marketplace from '@/services/Marketplace'
    import moment from 'moment';

    export default {
        name: "ManageApplications",
        data() {
            return {
                applications: [],
                active: [],
                testing: [],
                interview: [],
                offers: [],
                visible: false,
                currentinterview: {},
                waiting: false,
                withdrawn: [],
                check: false,
                stage: '',
                type: '',
                key: '',
                loading: false


            }
        },
        components: {
            ACol,
            ARow,
            DevHeader,
            CandidateSider,


        },
        async mounted() {
            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}

            }
            this.waiting = true

            this.alldevjobs = (await Marketplace.candidatejobs(this.$store.state.user.pk, auth)).data


            this.alldevjobpicked = (await Marketplace.pickedapplications(this.$store.state.user.pk, auth)).data
            // application creation for jobs applied or picked from recommended list
            for (let i = 0; i < this.alldevjobs.length; i++) {


                let id = this.alldevjobs[i].id
                let title = this.alldevjobs[i].job.title
                let company = this.alldevjobs[i].job.company
                let stage = this.alldevjobs[i].stage
                let type = 'job'
                let project = this.alldevjobs[i].project
                let start = moment(this.alldevjobs[i].interviewstarttime).format("YYYY-MM-DD HH:mm:ss")
                let end = moment(this.alldevjobs[i].interviewendtime).format("YYYY-MM-DD HH:mm:ss")
                let color = this.alldevjobs[i].eventcolor
                let one_job_applied = new Application(
                    id, title, company, stage, type, start, end, color, project
                );
                this.applications.push(one_job_applied)

            }

            // applications creation for pick instance by recruiter
            for (let i = 0; i < this.alldevjobpicked.length; i++) {


                let id = this.alldevjobpicked[i].id
                let title = 'Talent pool pick'
                let company = this.alldevjobpicked[i].owner.company
                let stage = this.alldevjobpicked[i].stage
                let type = 'talent'
                let project = this.alldevjobpicked[i].project
                let start = moment(this.alldevjobpicked[i].interviewstarttime).format("YYYY-MM-DD HH:mm:ss")
                let end = moment(this.alldevjobpicked[i].interviewendtime).format("YYYY-MM-DD HH:mm:ss")
                let color = this.alldevjobpicked[i].eventcolor
                let one_job_applied = new Application(
                    id, title, company, stage, type, start, end, color, project
                );
                this.applications.push(one_job_applied)

            }
            // sort out the varios applications to active,testing,active,offer
            for (let i = 0; i < this.applications.length; i++) {
                if (this.applications[i].stage === 'active' || this.applications[i].stage === 'new' || this.applications[i].stage === 'pending') {
                    this.active.push(this.applications[i])
                } else if (this.applications[i].stage === 'test') {
                    this.testing.push(this.applications[i])
                } else if (this.applications[i].stage === 'interview') {
                    this.interview.push(this.applications[i])
                } else if (this.applications[i].stage === 'offer') {
                    this.offers.push(this.applications[i])
                } else if (this.applications[i].stage === 'rejected') {
                    this.withdrawn.push(this.applications[i])
                }

            }
            this.waiting = false


        },

        methods: {
            navigateTo(route) {
                this.$router.push(route)
            },
            showEvent(application_id, application) {
                this.visible = true
                this.currentinterview = application
            },
            showModal(key, type, stage) {
                this.key = key
                this.type = type
                this.stage = stage

                this.check = true;
            },

            // set of withdraws per stage
            Withdrawapplication(application, type) {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                };
                this.loading = true;
                if (type === 'job') {
                    Marketplace.pickreject(application, {
                        stage: 'rejected',
                        selected: false,
                    }, auth)
                        .then(resp => {
                                Marketplace.acceptreject(application, auth)
                                    .then()
                                    .catch()
                                for (let i = 0; i < this.active.length; i++) {
                                    if (this.active[i].key === application) {
                                        this.active[i].stage = 'rejected'
                                        this.withdrawn.push(this.active[i])
                                        let index = this.active.indexOf(this.active[i]);
                                        this.active.splice(index, 1);

                                    }
                                }
                                return resp

                            }
                        )
                        .catch()

                } else {
                    Marketplace.candidatemanager(application, {
                        stage: 'rejected',
                        interviewstarttime: null,
                        interviewendtime: null,
                        test_stage: null,
                        project: null,
                        report: null,
                        interviewstatus: null,
                        projectstarttime: null,
                        offerstatus: null,
                        offerletter: null,
                        demolink: null
                    }, auth)
                        .then(resp => {
                                for (let i = 0; i < this.active.length; i++) {
                                    if (this.active[i].key === application) {
                                        this.active[i].stage = 'rejected'
                                        this.withdrawn.push(this.active[index])
                                        let index = this.active.indexOf(this.active[i]);
                                        this.active.splice(index, 1);

                                    }
                                }
                                return resp

                            }
                        )
                        .catch()

                }
                this.loading = false;
                this.check = false;


            },
            acceptapplication(application, type) {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                };
                if (type === 'job') {
                    Marketplace.pickreject(application, {
                        stage: 'active',

                    }, auth)
                        .then(resp => {
                            for (let i = 0; i < this.active.length; i++) {
                                if (this.active[i].key === application) {
                                    this.active[i].stage = 'active'

                                }
                            }
                                Marketplace.acceptreject(application, auth)
                                    .then()
                                    .catch()

                                return resp

                            }
                        )
                        .catch()

                } else {
                    Marketplace.candidatemanager(application, {
                        stage: 'active',
                        interviewstarttime: null,
                        interviewendtime: null,
                        test_stage: null,
                        project: null,
                        report: null,
                        interviewstatus: null,
                        projectstarttime: null,
                        offerstatus: null,
                        offerletter: null,
                        demolink: null
                    }, auth)
                        .then(resp => {

                                return resp

                            }
                        )
                        .catch()

                }

            },

            Withdrawapplicationtest(application, type) {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                };
                this.loading = true;
                if (type === 'job') {
                    Marketplace.pickreject(application, {
                        stage: 'rejected',
                        selected: false,
                    }, auth)
                        .then(resp => {
                                for (let i = 0; i < this.testing.length; i++) {
                                    if (this.testing[i].key === application) {
                                        this.testing[i].stage = 'rejected'
                                        this.withdrawn.push(this.testing[i])
                                        let index = this.testing.indexOf(this.testing[i]);
                                        this.testing.splice(index, 1);
                                    }
                                }
                                return resp

                            }
                        )
                        .catch()

                } else {
                    Marketplace.candidatemanager(application, {
                        stage: 'rejected',
                        interviewstarttime: null,
                        interviewendtime: null,
                        test_stage: null,
                        project: null,
                        report: null,
                        interviewstatus: null,
                        projectstarttime: null,
                        offerstatus: null,
                        offerletter: null,
                        demolink: null
                    }, auth)
                        .then(resp => {
                                for (let i = 0; i < this.testing.length; i++) {
                                    if (this.testing[i].key === application) {
                                        this.testing[i].stage = 'rejected'
                                        this.withdrawn.push(this.testing[i])
                                        let index = this.testing.indexOf(this.testing[i]);
                                        this.testing.splice(index, 1);
                                    }
                                }
                                return resp

                            }
                        )
                        .catch()

                }
                this.loading = false;
                this.check = false;


            },

            Withdrawapplicationinterview(application, type) {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                };
                this.loading = true;
                if (type === 'job') {
                    Marketplace.pickreject(application, {
                        stage: 'rejected',
                        selected: false,
                    }, auth)
                        .then(resp => {
                                for (let i = 0; i < this.interview.length; i++) {
                                    if (this.interview[i].key === application) {
                                        this.interview[i].stage = 'rejected'
                                        this.withdrawn.push(this.interview[i])
                                        let index = this.interview.indexOf(this.interview[i]);
                                        this.interview.splice(index, 1);
                                    }
                                }
                                return resp

                            }
                        )
                        .catch()

                } else {
                    Marketplace.candidatemanager(application, {
                        stage: 'rejected',
                        interviewstarttime: null,
                        interviewendtime: null,
                        test_stage: null,
                        project: null,
                        report: null,
                        interviewstatus: null,
                        projectstarttime: null,
                        offerstatus: null,
                        offerletter: null,
                        demolink: null
                    }, auth)
                        .then(resp => {
                                for (let i = 0; i < this.interview.length; i++) {
                                    if (this.interview[i].key === application) {
                                        this.interview[i].stage = 'rejected'
                                        this.withdrawn.push(this.interview[i])
                                        let index = this.interview.indexOf(this.interview[i]);
                                        this.interview.splice(index, 1);
                                    }
                                }
                                return resp

                            }
                        )
                        .catch()

                }
                this.loading = false;
                this.check = false;


            },

            Withdrawapplicationoffer(application, type) {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                };
                this.loading = true;
                if (type === 'job') {
                    Marketplace.pickreject(application, {
                        stage: 'rejected',
                        selected: false,
                    }, auth)
                        .then(resp => {
                                for (let i = 0; i < this.offers.length; i++) {
                                    if (this.offers[i].key === application) {
                                        this.offers[i].stage = 'rejected'
                                        this.withdrawn.push(this.offers[i])
                                        let index = this.offers.indexOf(this.offers[i]);
                                        this.offers.splice(index, 1);
                                    }
                                }
                                return resp

                            }
                        )
                        .catch()

                } else {
                    Marketplace.candidatemanager(application, {
                        stage: 'rejected',
                        interviewstarttime: null,
                        interviewendtime: null,
                        test_stage: null,
                        project: null,
                        report: null,
                        interviewstatus: null,
                        projectstarttime: null,
                        offerstatus: null,
                        offerletter: null,
                        demolink: null


                    }, auth)
                        .then(resp => {
                                for (let i = 0; i < this.offers.length; i++) {
                                    if (this.offers[i].key === application) {
                                        this.offers[i].stage = 'rejected'
                                        this.withdrawn.push(this.offers[i])
                                        let index = this.offers.indexOf(this.offers[i]);
                                        this.offers.splice(index, 1);
                                    }
                                }
                                return resp

                            }
                        )
                        .catch()

                }
                this.loading = false;
                this.check = false;


            }
        }

    }
</script>

<style scoped>
    .managecard {
        border: 1px solid #1876d21c;
        min-height: 65vh;
        box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;

    }

    .text-muted {
        color: rgba(0, 0, 0, 0.45);
    }

    .tracker {
        margin-bottom: 1rem;
    }

    .headers {
        border-bottom: 1px solid #e8e8e8;
    }

</style>
