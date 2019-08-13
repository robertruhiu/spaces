<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
        <CandidateSider/>

        <a-layout-content>
            <DevHeader/>
            <div style="max-width: 800px; margin: auto; padding: 10px 0;">

                <div class="columns">
                    <div class="column is-6" v-for="(project) in projectlist" id="my-card">
<!--                        <router-link to="/developerprojectdetails">-->
                            <a-card hoverable style="width: 400px; height: 400px;">
                                <img alt="example" :src=project.image
                                     slot="cover"/>
                                <a-card-meta title="Project Brief">
                                    <template slot="description">{{project.brief}}</template>
                                </a-card-meta>
                                <a-button @click="navigateTo({name: 'developerprojectdetails',params: {projectId:
                                project.id, projectName: project.name}})"
                                          style="marginTop: 16px" type="primary">Select Project</a-button>
                            </a-card >
<!--                        </router-link>-->
                    </div>
                    <br>
<!--                    {{ projectlist}}-->
                    <hr>
                </div>
            </div>
        </a-layout-content>

    </a-layout>
</template>

<script>
    import DevHeader from "../../layout/DevHeader";

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

    import UsersService from '@/services/UsersService'
    import Projects from '@/services/Projects'
    import CandidateSider from "../../layout/CandidateSider";
    import CandidateHeader from "../../layout/CandidateHeader";

    export default {
        name: "DeveloperProjects",
        data() {
            return {
                currentUserProfile: {},
                allprojects: [
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
                framework:'Express',
                projectlist: [],
            }
        },
        components: {
            DevHeader,
            CandidateHeader,
            CandidateSider,
        },
        async mounted() {
            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}

            };
            if (this.$store.state.user.pk) {
                this.currentUserProfile = (await UsersService.currentuser(this.$store.state.user.pk, auth)).data
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


                        this.projectlist.push(oneproject);

                    }


                })
                .catch()
            }
        },
        methods: {
            navigateTo(route) {
                this.$router.push(route)
            },
            // selectProject (project){
            //     const auth = {
            //         headers: {Authorization: 'JWT ' + this.$store.state.token}
            //
            //     };
            //     this.$router.push({
            //         name: 'developerprojectdetails',
            //         params: {projectId: project}
            //     });
                // console.log(pri)
                // const auth = {
                //     headers: {Authorization: 'JWT ' + this.$store.state.token}
                //
                // };
                // Marketplace.pickreject(application, {test_stage: 'invite sent', project: project,name:projectname}, auth)
                // this.$router.push({
                //     name: 'job',
                //     params: { jobId: job }
                // })
            // },
        },
    }
</script>

<style scoped>
    #components-layout-demo-side .logo {
        height: 32px;
        background: rgba(255, 255, 255, .2);
        margin: 16px;
    }
    #my-card:hover{
        border: #004ec7;

    }
</style>
