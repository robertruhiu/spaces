<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">

        <RecruiterSider/>

        <a-layout>


            <a-layout-content >
                <Pageheader/>


                <div :style="{ padding: '5px', background: '#fff', }">
                    <a-row>
                        <a-col span="24">

                                <h3 style="margin-left: 1.5rem;color: #1976D2;font-weight: bold">What would you like to
                                    do today?</h3>
                        </a-col>

                    </a-row>
                    <a-row :gutter="16"
                                       style="padding-right: 2rem;padding-left: 1.5rem;padding-bottom: 1.5rem;">
                                    <a v-on:click="showJobDrawer">
                                        <a-col class="boxes" :span="6">

                                            <a-row class="ant-card actioncards">
                                                <a-col span="8">
                                                    <img class="poolavatar" src="../../../assets/images/edit-tools.svg">
                                                </a-col>
                                                <a-col span="16">
                                                    <p>Post a Job</p>
                                                    <p style="margin: 0;">Get devs for your vacancy</p>


                                                </a-col>

                                            </a-row>

                                        </a-col>
                                    </a>


                                    <router-link to="managejobs">
                                        <a-col class="boxes" :span="6">

                                            <a-row class="ant-card actioncards">
                                                <a-col span="8">
                                                    <img class="poolavatar" src="../../../assets/images/cv.svg">
                                                </a-col>
                                                <a-col span="16">
                                                    <p>Manage Jobs</p>
                                                    <p style="margin: 0;">Monitor and manage job applications</p>


                                                </a-col>


                                            </a-row>

                                        </a-col>
                                    </router-link>

                                    <a-col class="boxes" :span="6">
                                        <a-row class="ant-card actioncards">
                                            <a-col span="8">
                                                <img class="poolavatar" src="../../../assets/images/statistics.svg">
                                            </a-col>
                                            <a-col span="16">
                                                <p>Manage My Candidates</p>
                                                <p style="margin: 0;">Manage and track devs picked from talent pool</p>


                                            </a-col>


                                        </a-row>
                                    </a-col>
                                    <router-link to="talent">
                                        <a-col class="boxes" :span="6">
                                            <a-row class="ant-card actioncards">
                                                <a-col span="8">
                                                    <img class="poolavatar" src="../../../assets/images/star.svg">
                                                </a-col>
                                                <a-col span="16">
                                                    <p>Browse the Talent Pool</p>
                                                    <p style="margin: 0;">View more devs from our pool</p>


                                                </a-col>


                                            </a-row>
                                        </a-col>
                                    </router-link>

                                </a-row>
                </div>
                    <div style="padding: 2% 1%;background-color: white;margin: 2% 1%">
                    <a-row style="margin-left: 1.5rem;margin-right: 1.5rem;margin-bottom: 1rem">
                                    <a-col :span="12">

                                        <h3 style="color: #1976D2;font-weight: bold">Your Recent Jobs</h3>


                                    </a-col>
                                    <a-col :span="12">
                                        <router-link to="managejobs">
                                            <a-button type="primary" style="float: right">
                                                See more
                                                <a-icon type="right"/>
                                            </a-button>
                                        </router-link>


                                    </a-col>

                                </a-row>
                    <a-row :gutter="16"  style="margin-left: 1rem;margin-right: 1rem;margin-bottom: 1rem">


                                    <a-col :span="12" v-for="job in myjobs" v-bind:key="job.id">
                                            <a-card style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);" >
                                                <h3 style="font-weight: bold">{{job.title}}</h3>
                                                <p>
                                              <span style="" v-for="skill in job.skills" v-bind:key="skill.id">
                                                <a-tag color="#F0F6FD" style="color:#007BFF;">{{skill}}</a-tag>

                                            </span>
                                                </p>

                                                <p>
                                                    <a-alert style="color:#1976D2;border: 0 "
                                                             message="Applicant Tracker"
                                                             type="info"/>
                                                </p>

                                                <p>
                                                    <a-row>
                                                        <a-col :span="8">
                                                            <span>
                                                                Applicants
                                                                <a-tag color="#9fc6f2"
                                                                       style="color:white;border-radius: 50%">{{job.applicants}}</a-tag>
                                                            </span>


                                                        </a-col>
                                                        <a-col :span="8">
                                            <span>
                                                Testing Stage

                                            <a-tag color="#92DDDD"
                                                   style="color:white;border-radius: 50%">{{job.test}}</a-tag>
                                            </span>

                                                        </a-col>
                                                        <a-col :span="8">
                                            <span>
                                                  Interview Stage
                                            <a-tag color="#DA92D0" style="color:white;border-radius: 50%">{{job.interview}}</a-tag>
                                            </span>

                                                        </a-col>
                                                    </a-row>

                                                </p>
                                                <div style="text-align: center">

                                                    <a-button style="width: 60%"
                                                              @click="navigateTo({name:'job',params:{jobId: job.id}})"
                                                              type="primary" block>Manage Job
                                                    </a-button>

                                                </div>


                                            </a-card>
                                        </a-col>

                                </a-row>


                </div>
                <!----Post Job drawer------->
                <a-drawer
                        width=640
                        placement="right"
                        :closable="false"
                        @close="onCloseJobDrawer"
                        :visible="jobdrawervisible"
                >

                    <p>Job drawer</p>


                </a-drawer>

            </a-layout-content>

        </a-layout>
    </a-layout>
</template>


<script>
    class Job {
        constructor(id, title, skills, applicants, test, interview) {
            this.id = id;
            this.title = title;
            this.skills = skills;
            this.applicants = applicants;
            this.test = test;
            this.interview = interview

        }
    }



    import UsersService from '@/services/UsersService'
    import Marketplace from '@/services/Marketplace'
    import ACol from "ant-design-vue/es/grid/Col";
    import ARow from "ant-design-vue/es/grid/Row";
    import Pageheader from '@/components/layout/Pageheader'
    import RecruiterSider from "../../layout/RecruiterSider";


    export default {
        name: 'index',
        data() {

            return {
                currentUserProfile: null,
                jobs: null,
                myjobs: [],
                jobdrawervisible: false,


            }
        },
        components: {
            ARow,
            ACol,
            Pageheader,
            RecruiterSider,




        },
        async mounted() {

            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}

            }
            this.currentUserProfile = (await UsersService.currentuser(this.$store.state.user.pk, auth)).data
            this.jobs = (await Marketplace.myjobs(this.$store.state.user.pk, auth)).data
            for (let i = 0; i < this.jobs.length; i++) {
                this.applicants = (await Marketplace.applicants(this.jobs[i].id, auth)).data
                let test = 0;
                let interview = 0;
                for (let j = 0; j < this.applicants.length; j++) {
                    if (this.applicants[j].stage == 'test') {
                        test++

                    } else if (this.applicants[j].stage == 'interview') {
                        interview++

                    }

                }
                let skill_list = this.jobs[i].tech_stack.split(',');

                let id = this.jobs[i].id
                let title = this.jobs[i].title
                let skills = skill_list
                let applicants = this.applicants.length
                let onejob = new Job(
                    id, title, skills, applicants, test, interview
                )


                this.myjobs.push(onejob)


            }

        },
        methods: {
            logout() {
                this.$store.dispatch('setToken', null);
                this.$store.dispatch('setUser', null)
                this.$store.dispatch('setisLoggedIn', false)
                this.$store.dispatch('setUsertype', null)
                this.$store.dispatch('setUser_id', null)
                this.$router.push({
                    name: 'home'
                })
            },
            navigateTo(route) {
                this.$router.push(route)
            },
            showJobDrawer() {
                this.jobdrawervisible = true
            },
            onCloseJobDrawer() {
                this.jobdrawervisible = false
            },
        },

    }
</script>

<style scoped>


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
