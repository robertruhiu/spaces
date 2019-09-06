<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
        <CandidateSider/>

        <a-layout-content style="background-color: white">
            <DevHeader/>

            <div :style="{ padding: '6px 20px', background: '#fff', minHeight: '75vh',maxWidth:'72rem',
                marginTop:'0%',marginLeft: '1%',marginRight:'1%' }">

                <a-row gutter="8">
                    <a-col :span="14">
                        <a-carousel v-if="project.hasvideo === false" autoplay style="border:1px solid #e8e8e8;">
                            <div v-if="project.projectimage1 "><img style="width: 100%" :src="project.projectimage1"/>
                            </div>
                            <div v-if="project.projectimage2 "><img style="width: 100%" :src="project.projectimage2"/>
                            </div>
                            <div v-if="project.projectimage3 "><img style="width: 100%" :src="project.projectimage3"/>
                            </div>
                            <div v-if="project.projectimage4 "><img :src="project.projectimage4"/></div>
                            <div v-if="project.projectimage5 "><img :src="project.projectimage5"/></div>
                            <div v-if="project.projectimage6 "><img :src="project.projectimage6"/></div>
                            <div v-if="project.projectimage7 "><img :src="project.projectimage7"/></div>
                            <div v-if="project.projectimage8 "><img :src="project.projectimage8"/></div>
                            <div v-if="project.projectimage9 "><img :src="project.projectimage9"/></div>
                            <div v-if="project.projectimage10 "><img :src="project.projectimage10"/></div>
                        </a-carousel>
                        <div v-if="project.hasvideo">
                            <youtube :video-id="project.projectimage2" :player-vars="playerVars"></youtube>
                        </div>
                        <div style="border:1px solid #e8e8e8;padding: 2%;margin-top: 2%;">
                            <h4><strong>Project name:</strong> {{project.name}}</h4>
                            <p>{{project.description}}</p>

                        </div>
                    </a-col>
                    <a-col :span="10" style="padding: 0 1%;">
                        <div style="border:1px solid #e8e8e8;;padding: 2%;">
                            <div style="margin-left: 5%;margin-bottom: 2%"
                                 v-if="application.test_stage==='invite_sent'">
                                <p>Accept Project invitation(This will allow you to set time and get access to our
                                    IDE</p>
                                <a-button type="primary" @click="Accept(application.id)">Accept</a-button>
                            </div>
                            <div style="margin-left: 5%;margin-bottom: 2%" v-if="application.test_stage==='accepted'">
                                <p>Pick Date and time of choice to take the project</p>
                                <a-date-picker
                                        format="YYYY-MM-DD HH:mm:ss"
                                        :disabledDate="disabledDate"
                                        v-model="projectstarttime"

                                        :showTime="{ defaultValue: moment('00:00', 'HH:mm') }"
                                />
                                <a-button type="primary" style="margin-left: 2%" @click="Settime(application.id)">
                                    Submit
                                </a-button>
                                <br>
                                <span v-if="timeseterror">
                                    <span style="color:red ">* Please pick a time to continue</span>
                                </span>

                            </div>
                            <div style="margin-left: 5%;margin-bottom: 2%" v-if="application.test_stage ==='timeset'">
                                <p>IDE link</p>
                                <a target="_blank" :href="server_url">{{server_url}}</a>
                                <br>
                                <a-button type="primary" @click="finish(application.id)">Close/Finish project</a-button>
                            </div>
                            <div>
                                <p style="margin-left: 5%"><strong>Requirements</strong></p>
                                <ol>
                                    <li v-if="project.requirement1">{{project.requirement1}}</li>
                                    <li v-if="project.requirement2">{{project.requirement2}}</li>
                                    <li v-if="project.requirement3">{{project.requirement3}}</li>
                                    <li v-if="project.requirement4">{{project.requirement4}}</li>
                                    <li v-if="project.requirement5">{{project.requirement5}}</li>
                                    <li v-if="project.requirement6">{{project.requirement6}}</li>
                                    <li v-if="project.requirement7">{{project.requirement7}}</li>
                                    <li v-if="project.requirement8">{{project.requirement8}}</li>
                                    <li v-if="project.requirement9">{{project.requirement9}}</li>
                                    <li v-if="project.requirement10">{{project.requirement10}}</li>


                                </ol>
                            </div>
                        </div>
                    </a-col>
                </a-row>
            </div>
        </a-layout-content>
    </a-layout>
</template>

<script>
    import Projects from '@/services/Projects'
    import CandidateSider from "../../layout/CandidateSider";
    import DevHeader from "../../layout/DevHeader";
    import Marketplace from '@/services/Marketplace'
    import moment from 'moment';
    export default {
        name: "DeveloperProjectDetails",
        data() {
            return {
                application: {},
                project: null,
                report: [],
                server_url: "http://codelnide.codeln.com:8080/dashboard/#/ide/che/Elohor-Thomas",
                projectstarttime: null,
                timeseterror: false,
                type: ''
            }
        },
        components: {
            DevHeader,
            CandidateSider,
        },
        async mounted() {
            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}
            };
            if (this.$store.state.user.pk) {
                const projectId = this.$store.state.route.params.projectId;
                this.type = this.$store.state.route.params.type
                this.project = (await Projects.projectdetails(projectId, auth)).data;
                if (this.$store.state.route.params.type === 'job') {
                    this.application = (await Marketplace.jobmanagerview(this.$store.state.route.params.applicationId, auth)).data

                } else {
                    this.application = (await Marketplace.talentpickedmanagerview(this.$store.state.route.params.applicationId, auth)).data
                }
            }
        },
        methods: {
            moment,
            navigateTo(route) {
                this.$router.push(route);
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
            callback(key) {
                console.log(key);
            },
            setProjectStage(stage) {
                return this.project_stage = stage;
            },
            checkReportStatus() {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}
                };
                console.log('reached');
                const projectId = this.$store.state.route.params.projectId;
                console.log(Projects.developerprojectreport(this.currentUserProfile.user, projectId, auth));
                this.setProjectStage('analysis_complete');


            },
            async Accept(application_id) {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}
                };
                this.application.test_stage = 'accepted'
                if (this.type === 'job') {
                    Marketplace.pickreject(application_id, {test_stage: 'accepted'}, auth)

                } else {
                    Marketplace.candidatemanager(application_id, {test_stage: 'accepted'}, auth)
                }
            },
            async Settime(application_id) {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}
                };
                if (this.projectstarttime !== null) {
                    this.application.test_stage = 'timeset'
                    if (this.type === 'job') {
                        Marketplace.pickreject(application_id, {
                            test_stage: 'timeset',
                            projectstarttime: this.projectstarttime
                        }, auth)
                    } else {
                        Marketplace.candidatemanager(application_id, {
                            test_stage: 'timeset',
                            projectstarttime: this.projectstarttime
                        }, auth)
                    }
                } else {
                    this.timeseterror = true
                }
            },
            async finish(application_id) {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}
                };
                this.application.test_stage = 'complete'
                if (this.type === 'job') {
                    Marketplace.pickreject(application_id, {test_stage: 'complete'}, auth)
                } else {
                    Marketplace.candidatemanager(application_id, {test_stage: 'complete'}, auth)
                }
            },
            onChange(value, dateString) {

                console.log('Selected Time: ', value);
                console.log('Formatted Selected Time: ', dateString);
            },
            onOk(value) {
                this.date = value;
                this.project_stage = 'link_available';

            }
        },
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
        height: 338px;
        line-height: 160px;
        background: #364d7;
        overflow: hidden;
    }

    .ant-carousel >>> .custom-slick-arrow {
        width: 25px;
        height: 25px;
        font-size: 25px;
        color: black;
        background-color: rgba(31, 45, 61, .11);
        opacity: 0.3;
    }

    .ant-carousel >>> .custom-slick-arrow:before {
        display: none;
    }

    .ant-carousel >>> .custom-slick-arrow:hover {
        opacity: 1.0;
    }

    .ant-carousel >>> .slick-slide h3 {
        color: #fff;
    }
</style>
