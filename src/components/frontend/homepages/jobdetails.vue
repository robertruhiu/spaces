<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh;background-color:#F8FAFB ">
        <pageheader></pageheader>


        <a-layout :style="{backgroundColor:'#F8FAFB',marginTop: '1rem' }">


            <a-layout-content style="margin-top: 5rem">

                <a-row>
                    <a-col :xs="{span: 20, offset: 2 }" :sm="{span: 20, offset: 2 }" :md="{span: 20, offset: 2 }"
                           :lg="{span: 14, offset: 6 }" :xl="{span: 14, offset: 6 }" class="jobdetails">
                        <div v-if="dataload" style="text-align: center">
                            <a-spin/>
                        </div>
                        <div v-else>
                            <div style="border-bottom: 1px solid #e8e8e8;margin-bottom: 1%;padding-bottom: 3%;">
                            <span>
                                <span style="font-weight: 700;font-size: large">{{job.title}}</span>
                                <span v-if="this.$store.state.isUserLoggedIn">
                                    <span style="float: right"
                                          v-if="currentUserProfile.user_type ==='developer' && applied === false  ">
                                    <div v-if="save">
                                        <a-spin/>
                                    </div>
                                        <span v-else>
                                            <a-button v-if="this.$store.state.isUserLoggedIn" type="primary"
                                                      @click="ApplyJob(job.id,currentUserProfile.id)">Apply</a-button>

                                        </span>



                                </span>

                                <span style="float: right"
                                      v-if="currentUserProfile.user_type ==='developer' && applied === true  ">
                                    <a-button type="primary" @click="navigateTo({name:'manageapplications'})"
                                    >Manage Job application</a-button>

                                </span>
                                </span>

                                <span v-else style="float: right">
                                        <a-button type="primary"
                                                  @click="navigateTo({name:'login'})">Login to apply</a-button>
                                    </span>



                            </span>

                            </div>
                            <div>
                                <span v-if="this.$store.state.isUserLoggedIn">
                                    <a-alert v-if="currentUserProfile.user_type ==='developer' && applied "
                                             message="Job application successful" type="success" closeText="Close Now"/>
                                </span>
                                <span> Job tag :
                                    <a-tag color="#F0F6FD" style='color: #007BFF'>
                                        <a-icon type="tags"/>
                                        {{job.tag}}
                                    </a-tag>
                                </span>

                                <p>

                                    Country :  {{country}} <span
                                        v-if="job.city">| City : {{job.city}}</span>


                                </p>
                                <p>Contract type: {{job.engagement_type}}</p>
                                <p>Monthly renumeration * : {{job.remuneration}}</p>

                                <p>
                                    Skills looking for :
                                    <span style="" v-for="skill in skills" v-bind:key="skill">
                                    <a-tag color="#F0F6FD" style="color:#007BFF;">{{skill}}</a-tag>
                                </span>
                                </p>
                                <p>Application Deadline : {{deadline}}</p>
                            </div>
                            <div>
                                <p style="font-weight: 700">Job Details</p>
                                <markdown>{{job.description}}</markdown>

                            </div>
                        </div>

                    </a-col>
                </a-row>


            </a-layout-content>
        </a-layout>
    </a-layout>

</template>

<script>

    import UsersService from '@/services/UsersService'
    import Pageheader from '@/components/layout/Header.vue'
    import ARow from "ant-design-vue/es/grid/Row";
    import ACol from "ant-design-vue/es/grid/Col";
    import MarketPlaceService from '@/services/Marketplace'
    import moment from 'moment';
    import markdown from 'vue-markdown'

    const countries = require("@/store/countries")

    export default {
        name: "jobdetails",
        data() {
            return {
                job: {},
                skills: null,
                currentUserProfile: {},
                applied: false,
                myjobs: [],
                dataload: false,
                deadline: '',
                save: false,
                country: '',


            }
        },
        components: {
            ACol,
            ARow,
            Pageheader,
            markdown
        },
        async mounted() {
            moment

            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}

            }

            this.dataload = true


            if (this.$store.state.isUserLoggedIn) {
                this.currentUserProfile = (await UsersService.currentuser(this.$store.state.user.pk, auth)).data
                this.job = (await MarketPlaceService.jobdetails(this.$route.params.jobId)).data
                this.skills = this.job.tech_stack.split(',');
                this.myjobs = (await MarketPlaceService.candidatejobs(this.$store.state.user.pk, auth)).data
                this.deadline = moment(this.job.deadline).format("YYYY-MM-DD HH:mm:ss")
                for (const [key, value] of Object.entries(countries)) {
                    if(key === this.job.location){
                        this.country = value
                    }
                }


                if (this.myjobs.length > 0) {
                    for (let i = 0; i < this.myjobs.length; i++) {
                        if (this.myjobs[i].job.id === this.job.id) {
                            this.applied = true
                        }
                    }
                } else {
                    this.applied = false
                }
            } else {
                this.job = (await MarketPlaceService.jobdetails(this.$route.params.jobId)).data

                this.skills = this.job.tech_stack.split(',');
                this.deadline = moment(this.job.deadline).format("YYYY-MM-DD HH:mm:ss")
                for (const [key, value] of Object.entries(countries)) {
                    if(key === this.job.location){
                        this.country = value
                    }
                }


            }


            this.dataload = false


        },
        methods: {
            navigateTo(route) {
                this.$router.push(route)
            },


            ApplyJob(job, dev) {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                this.save = true
                MarketPlaceService.applyjob(
                    {
                        job: job,
                        candidate: dev,
                        recruiter: this.job.posted_by,
                        stage: 'new',
                        selected: false,
                        type: 'applied'

                    },
                    auth
                )
                    .then(resp => {
                            this.save = false
                            this.applied = true


                            MarketPlaceService.newapplicationemail(resp.data.id, auth)
                                .then()
                                .catch()

                        }
                    )
                    .catch(error => {
                        return error


                    });


            }

        }
    }
</script>

<style scoped>
    .jobdetails {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        background-color: white;
        padding: 2%;

    }
</style>
