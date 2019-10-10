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
                            <div v-if="application.project.hasvideo">
                                <youtube :video-id="videoid" :width="270"
                                         :player-vars="playerVars" @playing="playing"></youtube>
                            </div>


                            </show-at>


                            <hide-at breakpoint="mediumAndBelow">
                                <div v-if="application.project.hasvideo === false">

                                <div v-if="application.project.projectimage1 "><img style="width: 100%"
                                                                        :src="application.project.projectimage1"/>
                                </div>

                            <div v-if="application.project.hasvideo">
                                <youtube :video-id="videoid" width="600"
                                         :player-vars="playerVars"  @playing="playing"></youtube>
                            </div>
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
                                    <a-button type="primary" style="margin-left: 2%" @click="Settime(application.id)">
                                        Submit
                                    </a-button>
                                    <br>
                                    <span v-if="timeseterror">
                                    <span style="color:red ">* Please pick a time to continue</span>
                                </span>

                                </div>
                                <div style="margin-bottom: 2%" v-if="application.stage ==='time_set'">
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

                                <div>
                                    <p ><strong>Requirements</strong></p>
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

    export default {
        name: "SelfverifyProject",
        data() {
            return {
                application: {},
                projectstarttime: null,
                timeseterror: false,
                server_url: "will be sent to you",
                videoid:''
            }
        },
        components: {
            DevHeader,
            CandidateSider,
            showAt, hideAt

        },
        async mounted() {
            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}

            };
            Projects.myprojectdetails(this.$store.state.route.params.applicationId, auth)
                .then(resp =>
                    {
                        this.application = resp.data,
                            this.videoid = this.application.project.projectimage2
                     }
                )
                .catch()

        },
        methods: {
            moment,
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
                if (this.projectstarttime !== null) {
                    this.application.stage = 'time_set'
                    Projects.myprojectdetailspatch(application_id, {
                        stage: 'time_set',
                        projectstarttime: this.projectstarttime
                    }, auth)
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
