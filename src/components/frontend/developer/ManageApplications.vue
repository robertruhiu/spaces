<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
        <CandidateSider/>
        <a-layout>

            <a-layout-content style="background-color: white">
                <DevHeader/>
                <div :style="{ padding: '5px', background: '#fff', }">
                    <a-row style="margin-top: 1%">
                        <a-col span="24">
                            <h3 style="margin-left: 1.5rem;color: #1976D2;font-weight: bold">
                                Track your applications through the stages
                            </h3>
                        </a-col>


                    </a-row>

                    <a-row :gutter="8" style="padding: 2%">


                        <a-col span="6">
                            <a-card class='managecard' style="border-top-color: #3A61CC;padding: 0">


                                <p slot="title" style="color: #1976D2;font-weight: bold;text-align: center">
                                    Applications</p>
                                <a-timeline v-if="active.length>0">
                                    <a-timeline-item v-for="application in active" v-bind:key="application">
                                        <a><strong>{{application.title}}</strong></a>
                                        <br>
                                        <div class="text-muted">
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


                            </a-card>

                        </a-col>

                        <a-col span="6">
                            <a-card class='managecard' style="border-top-color: #fa5580;">

                                <p slot="title" style="color: #1976D2;font-weight: bold;text-align: center">
                                    Testing</p>

                                <a-timeline v-if="testing.length>0">
                                    <a-timeline-item v-for="application in testing" v-bind:key="application">
                                        <a><strong>{{application.title}}</strong></a>
                                        <br>
                                        <div class="text-muted">
                                            Company : {{application.company}}

                                            <br>
                                            <div v-if="application.project">
                                                <p>
                                                    Project assigned: <span></span>
                                                    <a  @click="navigateTo({name:'assignedproject',params:{projectId:application.project.id,applicationId:application.key,type:application.type}})">
                                                        {{application.project.name}}
                                                    </a>
                                                </p>


                                            </div>
                                            <div v-else>
                                                <p>Project assignment pending</p>


                                            </div>

                                        </div>


                                    </a-timeline-item>

                                </a-timeline>
                            </a-card>

                        </a-col>

                        <a-col span="6">
                            <a-card class='managecard' style="border-top-color: #1C9DDF;">

                                <p slot="title" style="color: #1976D2;font-weight: bold;text-align: center">
                                    Interview</p>

                                <a-timeline v-if="interview.length >0">
                                    <a-timeline-item v-for="application in interview" v-bind:key="application">
                                        <a><strong>{{application.title}}</strong></a>
                                        <br>
                                        <div class="text-muted">
                                            Company : {{application.company}}

                                            <br>
                                            <div v-if="application.start">
                                                <p>Interview:<span>{{application.start}}</span></p>


                                            </div>
                                            <div v-else>
                                                <p>Interview time not yet set</p>


                                            </div>
                                        </div>

                                    </a-timeline-item>

                                </a-timeline>
                            </a-card>

                        </a-col>

                        <a-col span="6">
                            <a-card class='managecard' style="border-top-color: #3FCE9D;">

                                <p slot="title" style="color: #1976D2;font-weight: bold;text-align: center">
                                    Offers</p>

                                <a-timeline v-if="offers.length >0">
                                    <a-timeline-item v-for="application in offers" v-bind:key="application">
                                        <a><strong>{{application.title}}</strong></a>
                                        <br>
                                        <div class="text-muted">
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


                            </a-card>

                        </a-col>


                    </a-row>


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
                active:[],
                testing: [],
                interview:[],
                offers:[]

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

            this.alldevjobs = (await Marketplace.candidatejobs(this.$store.state.user.pk, auth)).data
            this.alldevjobpicked = (await Marketplace.pickedapplications(this.$store.state.user.pk, auth)).data

            // application creation for jobs applied or picked from recommended list
            for (let i = 0; i < this.alldevjobs.length; i++) {


                let id = this.alldevjobs[i].id
                let title = this.alldevjobs[i].job.title
                let company = this.alldevjobs[i].recruiter.company
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
            for(let i =0;i<this.applications.length;i++){
                if(this.applications[i].stage === 'active' || this.applications[i].stage === 'new' ){
                    this.active.push(this.applications[i])
                }else if (this.applications[i].stage ==='test'){
                    this.testing.push(this.applications[i])
                }else if (this.applications[i].stage ==='interview'){
                    this.interview.push(this.applications[i])
                }else if (this.applications[i].stage ==='offer'){
                    this.offers.push(this.applications[i])
                }

            }
        },
        methods :{
            navigateTo(route) {
                this.$router.push(route)
            },
        }

    }
</script>

<style scoped>
    .managecard {
        height: 100%;
        border-top-width: thick;

    }

    .text-muted {
        color: rgba(0, 0, 0, 0.45);
    }

</style>
