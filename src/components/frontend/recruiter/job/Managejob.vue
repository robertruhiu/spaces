<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">

        <RecruiterSider/>
        <a-layout :style="{ marginLeft: '200px',backgroundColor:'#F8FAFB' }">

            <a-layout-content>
                <Pageheader/>


                <div :style="{ padding: '24px', background: '#fff', minHeight: '80vh',marginTop:'7rem' }">
                    <div v-if="loading" class="loading" style="text-align: center;">
                        <a-spin/>
                    </div>
                    <div v-else>
                        <a-row :gutter="16">
                            <a-col :span="5">
                                <a-card title="Jobs Overview"
                                        style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">

                                    <p><span>Total Applicants: </span>


                                        <span style="float: right">
                                            <a-tag color="#9FC6F2"
                                                   style="color:white;border-radius: 50%">{{allapplicants}}</a-tag>

                                        </span>

                                    </p>
                                    <p><span>Testing Stage: </span><span style="float: right">
                                        <a-tag color="#92DDDD"
                                               style="color:white;border-radius: 50%">{{testingstage}}</a-tag>
                                        </span>
                                    </p>
                                    <p><span>Interview Stage: </span><span style="float: right">
                                        <a-tag color="#DA92D0"
                                               style="color:white;border-radius: 50%">{{interviewstage}}</a-tag>
                                        </span>
                                    </p>


                                </a-card>


                            </a-col>
                            <a-col :span="16">
                                <a-row v-for="job in myjobs" v-bind:key="job.id">

                                    <a-col :span="24">
                                        <a-card style="margin-bottom: 1%;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
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

                            </a-col>
                        </a-row>
                    </div>
                </div>


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
    import RecruiterSider from "../../../layout/RecruiterSider";
    import Pageheader from '@/components/layout/Pageheader'

    export default {
        name: 'Managejob',
        data() {
            return {
                currentUserProfile: null,
                jobs: null,
                myjobs: [],
                applicants: null,
                loading: true,
                myapplicants: [],
                allapplicants: 0,
                testingstage: 0,
                interviewstage: 0


            }
        },
        components: {
            ARow,
            ACol,
            RecruiterSider,
            Pageheader


        },
        async mounted() {

            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}

            }
            if (this.$store.state.user.pk) {
                this.currentUserProfile = (await UsersService.currentuser(this.$store.state.user.pk, auth)).data
                this.jobs = (await Marketplace.myjobs(this.$store.state.user.pk, auth)).data
                this.myapplicants = (await Marketplace.allmyjobapplicants(this.$store.state.user.pk, auth)).data
                this.loading = false


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
                let all = []
                let testnumber =[]
                let interviewnumber =[]
                for (let i = 0; i < this.myjobs.length; i++) {
                    all.push(this.myjobs[i].applicants)
                    testnumber.push(this.myjobs[i].test)
                    interviewnumber.push(this.myjobs[i].interview)
                }
                this.allapplicants = all.reduce(
                    function (total, num) {
                        return total + num
                    }
                    , 0)
                this.testingstage = testnumber.reduce(
                    function (total, num) {
                        return total + num
                    }
                    , 0)
                this.interviewstage = interviewnumber.reduce(
                    function (total, num) {
                        return total + num
                    }
                    , 0)
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
        padding: 1rem;
    }

    .events {
        width: 11rem;
        height: 5rem;
        margin-top: 0.5rem;
        border-radius: 0;
        background-color: #0064ff;
        border: 0;
        color: white;
    }


</style>
