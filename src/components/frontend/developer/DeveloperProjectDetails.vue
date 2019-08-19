<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
        <CandidateSider/>

        <a-layout-content>
            <div style="max-width: 1000p; margin: auto; padding: 0px 0;">
                <div class="hero" :style="{width: '100%',backgroundColor:'#004ec7',height:'250px',padding: '1px 30px 0',borderBottom: '1px solid #e8e8e8',}">
                    <div class="hero-body">
                        <div class="container">
                            <h1 class="title">
                                {{selected_project.name}}
                            </h1>
                            <h2 class="subtitl">
                                Brief : {{selected_project.brief}}
                                <br>
                                Description : {{selected_project.description}}
                                <br>
                                Level : {{selected_project.level}}
                                <br>
                                Concepts Tested : {{selected_project.concept}}
                            </h2>
                        </div>
                    </div>
                </div>
                <!--                {{selected_project}}-->

                <div class="container" style="background-color: white; padding: 24px; max-width: 1000px; margin-top: 12px">
                    <div class="columns">
                        <div class="column is-8">
                            <div class="container">
                                <h5 class="title">Project Details</h5>
                                <a-carousel arrows>
                                    <div
                                            slot="prevArrow" slot-scope="props"
                                            class="custom-slick-arrow"
                                            style="left: 10px;zIndex: 1"
                                    >
                                        <a-icon type="left-circle"/>
                                    </div>
                                    <div
                                            slot="nextArrow" slot-scope="props"
                                            class="custom-slick-arrow"
                                            style="right: 10px"
                                    >
                                        <a-icon type="right-circle"/>
                                    </div>
                                    <div><img alt="example" :src=selected_project.projectimage1
                                              slot="cover"/></div>
                                    <div><img alt="example" :src=selected_project.projectimage2
                                              slot="cover"/></div>
                                </a-carousel>

                            </div>
                            <div>
                                <a-tabs defaultActiveKey="1">
                                    <!--                                    <a-tab-pane tab="Project Overview" key="1" style="height: 200px">-->

                                    <!--                                    </a-tab-pane>-->
                                    <!--                            <a-tab-pane tab="Project Resources" key="2" forceRender>Content of Tab Pane 2</a-tab-pane>-->
                                    <a-tab-pane tab="Project Requirements" key="1">
                                        {{selected_project.requirement1}}<br>
                                        {{selected_project.requirement2}}<br>
                                        {{selected_project.requirement3}}<br>
                                        {{selected_project.requirement4}}<br>
                                        {{selected_project.requirement5}}<br>
                                        {{selected_project.requirement6}}<br>
                                        {{selected_project.requirement7}}<br>
                                        {{selected_project.requirement8}}<br>
                                        {{selected_project.requirement9}}<br>
                                        {{selected_project.requirement10}}<br>
                                    </a-tab-pane>
                                    <a-tab-pane tab="Environment Variables" key="2" forceRender>
                                        {{selected_project.framework.name}} <br>
                                        {{selected_project.framework.language.name}}

                                    </a-tab-pane>

                                    <template slot="renderTabBar" slot-scope="props, DefaultTabBar">
                                        <component :is="DefaultTabBar" {...props}/>
                                    </template>
                                </a-tabs>
                            </div>
                            <!--                            {{ selected_project}}-->
                        </div>
                        <div class="column is-4">

                            <div v-if='project_stage == "invite_accepted"'>
                                <h1 class="subtitle"> Set Time to take test</h1>
                                <h3>Select Date and Time of the test</h3>
                                <a-date-picker
                                        showTime
                                        format="YYYY-MM-DD HH:mm:ss"
                                        placeholder="Select Date and Time"
                                        @change="onChange"
                                        @ok="onOk"
                                />
                            </div>
                            <div v-else-if='project_stage=="time_set"'>
                                <h1 class="subtitle">Date Information</h1>
                                You are set to take this test at {{ date}}.
                                An email has been sent to you with access information to your workspace
                            </div>
                            <div v-else-if='project_stage=="link_available"'>
                                <h1 class="subtitle">Link Information</h1>
                                Follow this <a :href="server_url">link</a> to access your workspace.
                                <a :href="server_url">Workspace</a>.
                                <a-button @click="setProjectStage('project_completed')">End Test</a-button>

                            </div>
                            <div v-else-if='project_stage=="project_completed"'>
                                <h1 class="subtitle">Project Completed</h1>
                                Congratulations on completing your test.
                                Your project has been submitted for analysis
                                <a-button @click="checkReportStatus">Check report status</a-button>
                            </div>
                            <div v-else-if='project_stage=="analysis_complete"'>
                                <h1 class="subtitle">Report</h1>
                                Follow this link to view the report.
                                <a href="https://beta.codeln.com/sample">Report </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </a-layout-content>
    </a-layout>
</template>

<script>

    import UsersService from '@/services/UsersService'
    import Projects from '@/services/Projects'
    import CandidateSider from "../../layout/CandidateSider";
    import CandidateHeader from "../../layout/CandidateHeader";

    export default {
        name: "DeveloperProjectDetails",
        data() {
            return {
                currentUserProfile: {},
                project: [
                    {
                        "id": 1,
                        "name": "Travely App",
                        "owner": 1,
                        "brief": "Market place for rentals and housing bookings.",
                        "description": "You have been approached by a client to design an online marketplace that allows users to discover and book rental homes and apartments.",
                        "level": "Basic",
                        "concept": null,
                        "projectimage1": "https://preview.ibb.co/kkJyUq/travel1.png",
                        "projectimage2": "https://preview.ibb.co/iicspq/travel2.png",
                        "projectimage3": null,
                        "projectimage4": null,
                        "projectimage5": null,
                        "projectimage6": null,
                        "projectimage7": null,
                        "projectimage8": null,
                        "projectimage9": null,
                        "projectimage10": null,
                        "requirement1": "Replicate the designs in each of the sample screenshot",
                        "requirement2": "Use javascript and Css effects to ensure your design stands out.",
                        "requirement3": "Present an improved UI/UX for the Application (interactive design)",
                        "requirement4": "Stock images will be provided to replicate UI",
                        "requirement5": "Design should be responsive across devices and browsers",
                        "requirement6": "Feel free to use dummy text",
                        "requirement7": null,
                        "requirement8": null,
                        "requirement9": null,
                        "requirement10": null,
                        "framework": 6,
                        "devtype": 1,
                        "projecttype": 1,
                        "hasvideo": false
                    },
                ],
                selected_project: [],
                project_stage: 'invite_accepted',
                date: Date(),
                report: [],
                server_url: "http://codelnide.codeln.com:8080/dashboard/#/ide/che/Elohor-Thomas",
            }
        },
        components: {
            CandidateHeader,
            CandidateSider,
        },
        async mounted() {
            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}

            };
            if (this.$store.state.user.pk) {
                this.currentUserProfile = (await UsersService.currentuser(this.$store.state.user.pk, auth)).data
                const projectId = this.$store.state.route.params.projectId;
                this.selected_project = (await Projects.projectdetails(projectId, auth)).data;

            }
        },
        methods: {
            navigateTo(route) {
                this.$router.push(route);
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
                // console.log(this.report);
                // console.log(this.project_stage);


            },

            onChange(value, dateString) {
                // eslint-disable-next-line no-console
                console.log('Selected Time: ', value);
                console.log('Formatted Selected Time: ', dateString);
            },
            onOk(value) {
                this.date = value;
                this.project_stage = 'link_available';
                // console.log('onOk: ', value);
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
