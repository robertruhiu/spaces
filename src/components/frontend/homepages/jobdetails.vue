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

                                <span style="float: right"
                                      v-if="currentUserProfile.user_type ==='developer' && applied === false  ">
                                    <div v-if="save">
                                        <a-spin/>
                                    </div>
                                    <a-button v-else type="primary"
                                              @click="ApplyJob(job.id,currentUserProfile.id)">Apply</a-button>


                                </span>
                                <span style="float: right"
                                      v-if="currentUserProfile.user_type ==='developer' && applied === true  ">
                                    <a-button type="primary" @click="navigateTo({name:'manageapplications'})"
                                    >Manage Job application</a-button>

                                </span>
                            </span>

                            </div>
                            <div>
                                <a-alert v-if="currentUserProfile.user_type ==='developer' && applied "
                                         message="Job application successful" type="success" closeText="Close Now"/>
                                <p><strong>Company name:</strong> {{job.company}}
                                    <span style="margin-left: 5%">
                                    Location : {{job.location}}
                                </span>

                                </p>
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
                                <p>{{job.description}}</p>
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
                save: false

            }
        },
        components: {
            ACol,
            ARow,
            Pageheader
        },
        async mounted() {
            moment
            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}

            }
            this.dataload = true
            if (this.$store.state.user.pk) {
                this.currentUserProfile = (await UsersService.currentuser(this.$store.state.user.pk, auth)).data
                this.job = (await MarketPlaceService.jobdetails(this.$route.params.jobId, auth)).data
                this.skills = this.job.tech_stack.split(',');
                this.myjobs = (await MarketPlaceService.candidatejobs(this.$store.state.user.pk, auth)).data
                this.deadline = moment(this.job.deadline).format("YYYY-MM-DD HH:mm:ss")


                if (this.myjobs.length > 0) {
                    for (let i = 0; i < this.myjobs.length; i++) {
                        if (this.myjobs[i].job.id === this.$route.params.jobId) {
                            this.applied = true
                        }
                    }
                } else {
                    this.applied = false
                }
            }
            this.dataload = false


        },
        methods: {
            navigateTo(route) {
                this.$router.push(route)
            },
            openNotification() {
                this.$notification.open({
                    message: 'Notification Title',
                    description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
                    onClick: () => {
                        console.log('Notification Clicked!');
                    },
                });
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

                    },
                    auth
                )
                    .then(resp => {
                            this.save = false
                            this.applied = true
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
