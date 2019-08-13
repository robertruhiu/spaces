<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
        <CandidateSider/>
        <a-layout>

            <a-layout-content>
                <DevHeader/>
                <div :style="{ padding: '5px', background: '#fff', }">
                    <a-row :gutter="16" style="padding-right: 2rem;padding-left: 1.5rem;padding-bottom: 1.5rem;">
<!--                        <router-link to="/quizes">-->
<!--                            <a-col class="boxes" :span="6">-->
<!--                                <a-row class="ant-card actioncards">-->
<!--                                    <a-col span="8">-->
<!--                                        <img class="poolavatar" src="../../../assets/images/star.svg">-->
<!--                                    </a-col>-->
<!--                                    <a-col span="16">-->
<!--                                        <p>Take a Quiz</p>-->
<!--                                        <p style="margin: 0;"> Test your skills by taking a quiz</p>-->
<!--                                    </a-col>-->
<!--                                </a-row>-->
<!--                            </a-col>-->
<!--                        </router-link>-->
                        <router-link to="/developerprojects">
                            <a-col class="boxes" :span="6" >
                                <a-row class="ant-card actioncards" style="height: 120px">
                                    <a-col span="8">
                                        <img class="poolavatar" src="../../../assets/images/star.svg">
                                    </a-col>
                                    <a-col span="16">
                                        <p>Build a Project</p>
                                        <p style="margin: 0;">Test your skills by building a project</p>
                                    </a-col>
                                </a-row>
                            </a-col>
                        </router-link>
                         <router-link to="/jobs">
                            <a-col class="boxes" :span="6" >
                                <a-row class="ant-card actioncards" style="height: 120px">
                                    <a-col span="8">
                                        <img class="poolavatar" src="../../../assets/images/star.svg">
                                    </a-col>
                                    <a-col span="16">
                                        <p>Job Board</p>
                                        <h2></h2>

                                        <p style="margin: 0;"> View and apply for jobs</p>
                                    </a-col>
                                </a-row>
                            </a-col>
                        </router-link>
                    </a-row>

                </div>

                <div style="max-width: 800px; margin: auto; padding: 10px 0">
                    <div class="columns">
                        <div class="column is-7">
                            <div style="padding: 16px">
                                <h2>Recommended Projects</h2>
                                <a-card class="projcard" v-for="(project) in allprojects">
                                    <h2>
                                        Codeln Inc.
                                    </h2>
                                    <router-link to="{ name: 'ProjectProjectDetails', params: { projectId:project.id, projectName: project.name}"><h2>{{project.name}}</h2></router-link>
                                    {{project.brief}}
                                    {{project.description}}
                                </a-card>
                            </div>
                        </div>
                    </div>
                </div>
            </a-layout-content>


        </a-layout>
    </a-layout>
</template>

<script>
    class Project {
        constructor(id, name, skills, image, framework, duration, brief) {
            this.id = id;
            this.name = name;
            this.skills = skills;
            this.image = image;
            this.framework = framework;
            this.duration = duration;
            this.brief = brief;
        }
    }

    import UsersService from '@/services/UsersService';
    import Projects from '@/services/Projects';

    import CandidateSider from "../../layout/CandidateSider";
    import DevHeader from "../../layout/DevHeader";
    import ACol from "ant-design-vue/es/grid/Col";
    import ARow from "ant-design-vue/es/grid/Row";

    export default {
        name: "Assesment",
        data() {
            return {
                currentUserProfile: {},
                recommendedprojects: [],
                allprojects: [
                    {
                        "id": 2,
                        "name": "Social login",
                        "owner": 1,
                        "brief": "Multichannel implementation of various login types via social platforms.",
                        "description": "Social logins have become a common norm.In this project you are expected to create a user onboarding process that uses the Oauth framework to sign up and sign in users.",
                        "level": "Basic",
                        "concept": null,
                        "projectimage1": "https://s3.amazonaws.com/shopify-app-store/d799ebc57b563a4e880d0765a661ca75/screenshot/6362/original.png",
                        "projectimage2": null,
                        "projectimage3": null,
                        "projectimage4": null,
                        "projectimage5": null,
                        "projectimage6": null,
                        "projectimage7": null,
                        "projectimage8": null,
                        "projectimage9": null,
                        "projectimage10": null,
                        "requirement1": "Use HTML CSS or html css framework of your choice",
                        "requirement2": "Layout sketch of the user data flow of sign up and sign in.(MS Paint is ok)",
                        "requirement3": "Create a simple login sign up page and home page.",
                        "requirement4": "Make it responsive using your best judgement.",
                        "requirement5": "Impliment a local sign up and sign in and two other facebook,gmail or twitter",
                        "requirement6": "Create a database model to store the user data",
                        "requirement7": null,
                        "requirement8": null,
                        "requirement9": null,
                        "requirement10": null,
                        "framework": 1,
                        "devtype": 2,
                        "projecttype": 1,
                        "hasvideo": false
                    },
                ],

            }
        },
        components: {
            DevHeader,
            CandidateSider,
            ACol,
            ARow,
        },
        async mounted() {
            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}

            }
            if (this.$store.state.user.pk) {
                this.currentUserProfile = (await UsersService.currentuser(this.$store.state.user.pk, auth)).data;
                Projects.developerprojects(this.framework, auth)
                    .then(resp => {
                        this.projects = resp.data
                        for (let i = 0; i < this.projects.length; i++) {
                            let skill_list = this.projects[i].tags.split(',');

                            let id = this.projects[i].id
                            let name = this.projects[i].name
                            let skills = skill_list
                            let image = this.projects[i].projectimage1
                            let brief = this.projects[i].brief
                            let framework = this.projects[i].framework.name
                            let duration = this.projects[i].duration
                            let oneproject = new Project(
                                id, name, skills, image, framework, duration, brief
                            )

                            this.recommendedprojects.push(oneproject);

                        }


                    })
                    .catch()
            }


        },
        methods: {
            navigateTo(route) {
                this.$router.push(route)
            },
        },
    }
</script>

<style scoped>
    #components-layout-demo-side .logo {
        height: 32px;
        background: rgba(255, 255, 255, .2);
        margin: 16px;
    }

    .projcard {
        min-height: 200px;
    }

    .projcard:hover {
        border-color: #004ec7;
    }

    #components-layout-demo-side .logo {
        height: 32px;
        background: rgba(255, 255, 255, .2);
        margin: 16px;
    }

    .me {
        width: 70px;
        height: 70px;
        color: blue;
    }

    .me:hover {
        fill: red;
    }

    .boxes {

        padding-left: 0;
        padding-right: 0;


    }

    .poolavatar {
        width: 80%;
        margin-top: 0.5rem;
    }

    .talentcard {
        margin-bottom: 1rem;
    }

    .center {
        margin: auto;
        width: 60%;


    }

    .actioncards {
        width: 16rem;
        border-radius: 3%;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        padding: 0.89rem;
    }
</style>
