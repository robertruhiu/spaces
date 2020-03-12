<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
        <CandidateSider/>
        <a-layout>

            <a-layout-content style="background-color: white">
                <DevHeader/>
                <div :style="{ padding: '6px 20px', background: '#fff', minHeight: '75vh',
                marginTop:'0%',marginLeft: '1%',marginRight:'1%' }">

                    <a-row gutter="8">
                        <a-col :xs="{span: 24, offset: 0  }" :sm="{span: 24, offset: 0 }" :md="{span: 24, offset: 0 }"
                               :lg="{span: 14, offset: 0 }" :xl="{span: 14,offset: 0 }" style="margin-bottom: 1rem">
                            <show-at breakpoint="mediumAndBelow">
                                <div v-if="application.project.hasvideo === false">

                                    <div v-if="application.project.projectimage1 "><img style="width: 100%"
                                                                                        :src="application.project.projectimage1"/>
                                    </div>
                                </div>
                                <div v-else>
                                    <youtube :video-id="videoid" :width="300"
                                             :player-vars="playerVars" @playing="playing"></youtube>
                                </div>


                            </show-at>


                            <hide-at breakpoint="mediumAndBelow">
                                <div v-if="application.project.hasvideo === false">

                                    <div v-if="application.project.projectimage1 "><img style="width: 100%"
                                                                                        :src="application.project.projectimage1"/>
                                    </div>


                                </div>
                                <div v-else>
                                    <youtube :video-id="videoid" width="600"
                                             :player-vars="playerVars" @playing="playing"></youtube>
                                </div>

                            </hide-at>
                            <div style="border:1px solid #e8e8e8;padding: 2%;margin-top: 2%;">
                                <h4><strong>Project name:</strong> {{application.project.name}}</h4>
                                <p>{{application.project.description}}</p>

                            </div>


                        </a-col>
                        <a-col :xs="{span: 24, offset: 0  }" :sm="{span: 24, offset: 0 }" :md="{span: 24, offset: 0 }"
                               :lg="{span: 10, offset: 0 }" :xl="{span: 10,offset: 0 }" style="padding: 0 1%;">
                            <div style="border:1px solid #e8e8e8;;padding: 2%;">

                                <div v-if="csa">

                                    <div v-if="codelink">
                                        Demo link :
                                        <a target="_blank" :href="sanboxlink"> {{sanboxlink}}</a>

                                    </div>
                                    <div v-else>
                                        <p>Please use one the following sites to host your code .It will enable your
                                            peers in
                                            your cohort to learn from you and see your demo</p>
                                        <p><a href="https://codepen.io/" target="_blank">Codepen</a></p>
                                        <p><a href="https://codesandbox.io/" target="_blank">Sandbox.io</a></p>
                                        <div v-if="saving">
                                            <a-spin/>
                                        </div>
                                        <div v-else>
                                            <div v-if="basic">
                                                <a-form
                                                        :form="form"

                                                >
                                                    <a-form-item
                                                            label="Code link and demo"
                                                            :label-col="{ span: 24 }"
                                                            :wrapper-col="{ span: 24 }"
                                                    >
                                                        <a-input v-model="sanboxlink"
                                                                 v-validate.disable="{required: true,url: {require_protocol: true }}"
                                                                 name="code_link"

                                                        />
                                                        <span style="color: #f5222d;" v-show="errors.has('code_link')"
                                                              class="help is-danger">{{ errors.first('code_link') }}</span>
                                                    </a-form-item>
                                                </a-form>
                                                <div v-if="submit">
                                                    <a-spin/>
                                                </div>
                                                <div v-else>

                                                    <a-button key="submit" type="primary" @click="SavenewProject">
                                                        Submit
                                                    </a-button>
                                                </div>
                                            </div>
                                            <div v-else>
                                                <a-form
                                                        :form="form"

                                                >
                                                    <a-form-item
                                                            label="Code link and demo"

                                                    >
                                                        <a-input v-model="sanboxlink"
                                                                 v-validate.disable="{required: true,url: {require_protocol: true }}"
                                                                 name="code_link"

                                                        />
                                                        <span style="color: #f5222d;" v-show="errors.has('code_link')"
                                                              class="help is-danger">{{ errors.first('code_link') }}</span>
                                                    </a-form-item>
                                                </a-form>
                                                <div v-if="submit">
                                                    <a-spin/>
                                                </div>
                                                <div v-else>

                                                    <a-button key="submit" type="primary" @click="SavenewProject">
                                                        Submit
                                                    </a-button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>


                                </div>

                                <div v-else>
                                    <div style="margin-bottom: 2%"
                                         v-if="application.stage==='invite_accepted'">
                                        <p>Pick Date and time of choice to take the project</p>
                                        <a-date-picker
                                                format="YYYY-MM-DD HH:mm:ss"
                                                :disabledDate="disabledDate"
                                                v-model="projectstarttime"

                                                :showTime="{ defaultValue: moment('00:00', 'HH:mm') }"
                                                style="margin-bottom: 1rem"
                                        />
                                        <a-button type="primary" style="margin-left: 2%"
                                                  @click="Settime(application.id)">
                                            Submit
                                        </a-button>
                                        <br>
                                        <span v-if="timeseterror">
                                    <span style="color:red ">* Please pick a time to continue</span>
                                </span>

                                    </div>
                                    <div style="margin-bottom: 2%" v-if="application.stage ==='time_set'">

                                        <p>Current scheduled date:: {{application.projectstarttime}}</p>
                                        <p>Reschedule assesment date/time</p>
                                        <a-date-picker
                                                format="YYYY-MM-DD HH:mm:ss"
                                                :disabledDate="disabledDate"
                                                v-model="projectstarttime"

                                                :showTime="{ defaultValue: moment('00:00', 'HH:mm') }"
                                                style="margin-bottom: 1rem"
                                        />
                                        <a-button type="primary" style="margin-left: 2%"
                                                  @click="Settime(application.id)">
                                            Submit
                                        </a-button>


                                        <p>IDE link</p>
                                        <a target="_blank" :href="server_url">{{server_url}}</a>
                                        <br>
                                        <a-button type="primary" @click="Finish(application.id)">Close/Finish project
                                        </a-button>


                                    </div>
                                    <div style="margin-bottom: 2%" v-if="application.stage ==='project_completed'">
                                        <p>Project analysis</p>
                                        <span>We are currently analysing the project and a report will be generated</span>
                                    </div>
                                </div>


                                <div>
                                    <p><strong>Requirements</strong></p>
                                    <ol>
                                        <li v-if="application.project.requirement1">
                                            {{application.project.requirement1}}
                                        </li>
                                        <li v-if="application.project.requirement2">
                                            {{application.project.requirement2}}
                                        </li>
                                        <li v-if="application.project.requirement3">
                                            {{application.project.requirement3}}
                                        </li>
                                        <li v-if="application.project.requirement4">
                                            {{application.project.requirement4}}
                                        </li>
                                        <li v-if="application.project.requirement5">
                                            {{application.project.requirement5}}
                                        </li>
                                        <li v-if="application.project.requirement6">
                                            {{application.project.requirement6}}
                                        </li>
                                        <li v-if="application.project.requirement7">
                                            {{application.project.requirement7}}
                                        </li>
                                        <li v-if="application.project.requirement8">
                                            {{application.project.requirement8}}
                                        </li>
                                        <li v-if="application.project.requirement9">
                                            {{application.project.requirement9}}
                                        </li>
                                        <li v-if="application.project.requirement10">
                                            {{application.project.requirement10}}
                                        </li>


                                    </ol>
                                </div>


                            </div>


                        </a-col>
                    </a-row>


                </div>
            </a-layout-content>

        </a-layout>
    </a-layout>


</template>

<script>
    import Projects from '@/services/Projects'
    import CandidateSider from "../../layout/CandidateSider";
    import DevHeader from "../../layout/DevHeader";
    import moment from 'moment';
    import {showAt, hideAt} from 'vue-breakpoints'
    import VeeValidate from 'vee-validate';
    import UsersService from '@/services/UsersService'

    export default {
        name: "SelfverifyProject",
        data() {
            return {
                application: {},
                projectstarttime: null,
                timeseterror: false,
                server_url: "will be sent to you",
                videoid: '',
                reset: false,
                basic: false,
                csa: false,
                sanboxlink: '',
                saving: false,
                codelink: false,
                submit: false
            }
        },
        components: {
            DevHeader,
            CandidateSider,
            showAt, hideAt,

        },
        async mounted() {
            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}

            };
            Projects.myprojectdetails(this.$store.state.route.params.applicationId, auth)
                .then(resp => {
                        this.application = resp.data,
                            this.videoid = this.application.project.projectimage2
                        this.csa = this.application.csa
                        if (this.application.frameworktested === 'html') {
                            this.basic = true
                        }
                        if (this.application.portfolio) {
                            this.codelink = true
                            this.sanboxlink = this.application.portfolio.demo_link
                        }

                    }
                )
                .catch()


        },
        methods: {
            moment,
            navigateTo(route) {
                this.$router.push(route)
            },
            range(start, end) {
                const result = [];
                for (let i = start; i < end; i++) {
                    result.push(i);
                }
                return result;
            },
            disabledDate(current) {
                // Can not select days before today and today
                return current && current < moment().endOf('day');
            },
            async Settime(application_id) {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                };
                this.reset = true

                if (this.projectstarttime !== null) {
                    this.application.stage = 'time_set'
                    Projects.myprojectdetailspatch(application_id, {
                        stage: 'time_set',
                        projectstarttime: this.projectstarttime
                    }, auth).then(resp => {
                            this.application.projectstarttime = resp.data.projectstarttime
                            Projects.newselfverify(this.application.id, auth)
                                .then()
                                .catch()

                        }
                    )
                } else {
                    this.timeseterror = true
                }


            },
            async Finish(application_id) {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                };
                this.application.stage = 'project_completed'
                Projects.myprojectdetailspatch(application_id, {stage: 'project_completed'}, auth)
            },
            SavenewProject() {


                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                this.$validator.validate().then(valid => {
                    if (valid) {
                        this.saving = true
                        this.submit = true

                        UsersService.newportfolio(
                            {
                                candidate: this.$store.state.user.pk,
                                title: this.application.project.name,
                                description: this.application.project.description,
                                repository_link: this.sanboxlink,
                                demo_link: this.sanboxlink,
                                tech_tags: this.application.frameworktested,
                                csa: true,
                                project: this.application.project.id

                            },
                            auth)
                            .then(resp => {
                                    Projects.myprojectdetailspatch(this.application.id, {portfolio: resp.data.id}, auth)
                                    this.codelink = true


                                }
                            )
                            .catch()
                        this.submit = false
                        this.saving = false


                    }
                })


            },
        }
    }
</script>

<style scoped>
    #components-layout-demo-side .logo {
        height: 32px;
        background: rgba(255, 255, 255, .2);
        margin: 16px;
    }

    .ant-carousel >>> .slick-slide {
        text-align: center;
        height: 25rem;
        line-height: 160px;
        background: #364d79;
        overflow: hidden;

    }

    .ant-carousel >>> .slick-slide h3 {
        color: #fff;
    }
</style>
