<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
        <RecruiterSider/>

        <a-layout-content :style="{backgroundColor:'#ffffff' }">
            <CandidateHeader/>
            <div style="padding: 1%">
                <a-tabs defaultActiveKey="1"
                        style="z-index: 0;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);min-height: 70vh;padding: 1%">
                    <a-tab-pane key="1">
                    <span slot="tab">
                        <a-icon type="file-done"/>
                        Report Overview
                    </span>
                        <div style="padding: 1%">

                            <p><strong>Key competiences</strong></p>
                            <a-card>
                                <a-row :gutter="8">

                                    <div v-for="(value, name) in report.competency" v-bind:key="name">

                                        <a-col span="6" v-if="name === 'deliverables'">
                                            <div style="text-align: center">
                                                <p>Deliverables</p>
                                                <img style="width: 25%" src="../../../assets/images/delivery.svg">
                                                <p>{{value}}</p>
                                                <p>Metric used: Deliverables</p>
                                            </div>

                                        </a-col>
                                        <a-col span="6" v-if="name === 'code_readability'">
                                            <div style="text-align: center">
                                                <p>Code quality</p>
                                                <img style="width: 25%" src="../../../assets/images/laptop.svg">
                                                <p>{{value}}</p>
                                                <p>Metric used : Quality gates</p>
                                            </div>

                                        </a-col>
                                        <a-col span="6" v-if="name === 'error_handling'">
                                            <div style="text-align: center">
                                                <p>Error handling</p>
                                                <img style="width: 25%" src="../../../assets/images/404.svg">
                                                <p>{{value}}</p>
                                                <p>Metric used: Errors</p>
                                            </div>

                                        </a-col>
                                        <a-col span="6" v-if="name === 'project_security'">
                                            <div style="text-align: center">
                                                <p>Project security</p>
                                                <img style="width: 25%" src="../../../assets/images/security.svg">
                                                <p>{{value}}</p>
                                                <p>Metric used: Vulnerabilities</p>
                                            </div>

                                        </a-col>
                                    </div>

                                </a-row>
                            </a-card>
                            <br>
                            <p><strong>Project deliverables</strong></p>
                            <a-list
                                    itemLayout="horizontal"
                                    style="padding-right: 3%"
                            >

                                <div v-for="(value, name) in report.requirements" v-bind:key="name">
                                    <a-list-item slot="renderItem">
                                        <a-list-item-meta
                                                description=""
                                        >
                                            <p slot="title">{{name}}</p>

                                        </a-list-item-meta>
                                        <div>
                                            <a-tag color="#87d068" v-if="value === 'success'">complete</a-tag>
                                            <a-tag color="#f50" v-else>incomplete</a-tag>
                                        </div>

                                    </a-list-item>
                                    <br>


                                </div>
                            </a-list>


                        </div>

                    </a-tab-pane>
                    <a-tab-pane key="2" forceRender>
                        <span slot="tab">
                        <a-icon type="area-chart"/>
                        Grading criteria
                    </span>
                        <div style="padding: 1%;text-align: center">

                            <a-row :gutter="8">
                                <div v-for="(value, name) in report.grading" v-bind:key="name">
                                    <a-col :span="6" style="margin-bottom: 1%">
                                        <a-card :title="name">


                                            <p style="font-size: 2rem;font-weight: bold">{{value}}</p>

                                        </a-card>
                                    </a-col>
                                </div>


                            </a-row>
                        </div>

                    </a-tab-pane>

                    <a-tab-pane key="3" forceRender>
                        <span slot="tab">
                        <a-icon type="book"/>
                        Project
                    </span>
                        <a-row gutter="8">
                            <a-col :span="14">


                                <div style="text-align: center" v-if="project.projectimage1 "><img style="width: 75%"
                                                                                                   :src="project.projectimage1"/>
                                </div>
                                <div style="border:1px solid #e8e8e8;padding: 2%;margin-top: 2%;">
                                    <h4><strong>Project name:</strong> {{project.name}}</h4>
                                    <p>{{project.description}}</p>

                                </div>


                            </a-col>
                            <a-col :span="10" style="padding: 0 1%;">
                                <div style="border:1px solid #e8e8e8;;padding: 3%;">
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


                            </a-col>
                        </a-row>
                    </a-tab-pane>

                </a-tabs>
            </div>


        </a-layout-content>

    </a-layout>
</template>

<script>
    import ACol from "ant-design-vue/es/grid/Col";

    class Requirements {
        constructor(title, status) {
            this.title = title;
            this.status = status;

        }
    }

    const requirements = [
        {
            title: 'Create an easy to understand Ui Ux of a shopping experience.',
            status: 'complete'
        },
        {
            title: 'Create a login and signup page use Allauth(django) or Auth(laravel) or Passportjs(express) package to manage this.User model(id,email,password).' +
                'Use package as per framework assigned to build on.',
            status: 'incomplete'
        },
        {
            title: 'Create an index page that shows the houses on sale their pictures, prices and descriptions style it to make it appealing as possible.' +
                ' Fetch house details from the database.',
            status: 'complete'
        },
        {
            title: 'Create the backend page for the app. This is to be used to edit, update, create or delete houses to be sold.' +
                'House model(id,item_name,description,price,pictures).You can have several pictures for the house',
            status: 'incomplete'
        },
        {
            title: 'User should be able to pick an item and add to cart.Use session cart to store items chosen temporarily.' +
                'Don\'t save cart data in database.Cart model(id,item_id,item_name,user_id)',
            status: 'complete'
        },
    ]
    import UsersService from '@/services/UsersService'
    import RecruiterSider from "../../layout/RecruiterSider";
    import CandidateHeader from "../../layout/ReportHeader";
    import Projectsservice from '@/services/Projects'
    import Marketplace from '@/services/Marketplace'

    export default {
        name: "DeveloperProjectReport",
        data() {
            return {
                currentUserProfile: {},
                report: {},
                project: {},
                playerVars: {
                    autoplay: 1
                },
                Requirementslist: [],
                requirements

            }
        },
        components: {
            ACol,
            RecruiterSider,
            CandidateHeader
        },
        async mounted() {
            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}

            };
            if (this.$store.state.user.pk) {
                this.currentUserProfile = (await UsersService.currentuser(this.$store.state.user.pk, auth)).data
                const projectId = this.$store.state.route.params.projectId;
                const reportId = this.$store.state.route.params.reportId;
                this.project = (await Projectsservice.projectdetails(projectId, auth)).data
                this.report = (await Marketplace.getreport(reportId, auth)).data
                for (let i = 0; i < this.report.requirements.length; i++) {
                    this.Requirementslist.push(this.report.requirements[i])


                }

            }
        }
        ,

        methods: {
            navigateTo(route) {
                this.$router.push(route);
            }
            ,
            callback(key) {
                console.log(key);
            }
            ,

        }
        ,
    }
</script>

<style scoped>
    .reportdiv {
        background-color: white;
        padding: 24px;
    }
</style>
