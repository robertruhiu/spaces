<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
        <CandidateSider/>
        <a-layout>

            <a-layout-content>
                <DevHeader/>
                <div :style="{ padding: '5px', background: '#fff', }">
                    <a-row>
                        <a-col span="24">
                            <h3 style="margin-left: 1.5rem;color: #1976D2;font-weight: bold">Get your skills verified
                                today !!</h3>
                        </a-col>

                    </a-row>
                    <a-row :gutter="16" style="padding-right: 2rem;padding-left: 1.5rem;padding-bottom: 1.5rem;">
                        <router-link to="/assesment">
                            <a-col class="boxes" :span="6">
                                <a-row class="ant-card actioncards" style="height: 120px">
                                    <a-col span="8">
                                        <img class="poolavatar" src="../../../assets/images/star.svg">
                                    </a-col>
                                    <a-col span="16">
                                        <p>Get Verified</p>
                                        <p style="margin: 0;"> Put your skills to the test</p>
                                    </a-col>
                                </a-row>
                            </a-col>
                        </router-link>
<!--                        <router-link to="/myjobs">-->
<!--                            <a-col class="boxes" :span="6">-->
<!--                                <a-row class="ant-card actioncards">-->
<!--                                    <a-col span="8">-->
<!--                                        <img class="poolavatar" src="../../../assets/images/star.svg">-->
<!--                                    </a-col>-->
<!--                                    <a-col span="16">-->
<!--                                        <p>My Jobs</p>-->
<!--                                        <p style="margin: 0;">Track the progress of an application</p>-->
<!--                                    </a-col>-->
<!--                                </a-row>-->
<!--                            </a-col>-->
<!--                        </router-link>-->
                        <router-link to="/jobs">
                            <a-col class="boxes" :span="6">
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
                <br>
                <div style="max-width: 800px; margin: auto; padding: 10px 0;">

                    <!--                    <div class="columns" style="min-height: 100px">-->
                    <!--                        <div class="column is-6">-->
                    <!--                            <div class="card-content" style="background-color: white; min-height: 305px">-->
                    <!--                                <div class="media">-->
                    <!--                                    <div class="media-left">-->
                    <!--                                        <figure class="image is-128x128">-->
                    <!--                                            <img src="https://bulma.io/images/placeholders/96x96.png"-->
                    <!--                                                 alt="Placeholder image">-->
                    <!--                                        </figure>-->
                    <!--                                    </div>-->
                    <!--                                    <div class="media-content">-->
                    <!--                                        <p class="title is-4">Kweku Arthur</p>-->
                    <!--                                        <p class="subtitle is-6">kweku.arthur@gmail.com</p>-->
                    <!--                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.-->
                    <!--                                        <br>-->

                    <!--                                    </div>-->

                    <!--                                </div>-->

                    <!--                                <div class="content">-->
                    <!--                                    <a-button type="primary" icon="github">Github</a-button>-->
                    <!--                                    &nbsp;-->
                    <!--                                    <a-button type="primary" icon="linkedin">LinkedIn</a-button>-->

                    <!--                                </div>-->
                    <!--                            </div>-->
                    <!--                        </div>-->
                    <!--                        <div class="column is-5 ">-->
                    <!--                            <a-card style="min-height: 305px">-->
                    <!--                                <p class="">Rank</p>-->
                    <!--                                40/680-->
                    <!--                                <p class="">Availability</p>-->
                    <!--                                <a-button>remote</a-button>-->
                    <!--                                <a-button>contract</a-button>-->
                    <!--                                <p class="">Skills</p>-->
                    <!--                                <a-button>Python</a-button>-->
                    <!--                                <a-button>Flask</a-button>-->
                    <!--                                <a-button>Rest API</a-button>-->
                    <!--                                <p class="">Verified skills</p>-->
                    <!--                                <a-button>Python</a-button>-->
                    <!--                                <a-button>Flask</a-button>-->
                    <!--                            </a-card>-->
                    <!--                        </div>-->
                    <!--                    </div>-->


                    <!--                    <div class="columns">-->
                    <!--                        <div class="column is-7">-->
                    <!--                            <h2>Previous Jobs</h2>-->
                    <!--                            <a-card>-->
                    <!--                                <h2>Facebook Inc.</h2>-->
                    <!--                                Fullstack developer-->
                    <!--                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cupiditate delectus-->
                    <!--                                eos in qui-->
                    <!--                                sapiente tempora tenetur. Ad, assumenda aut, ex explicabo facere harum in inventore-->
                    <!--                                magni-->
                    <!--                                maiores-->
                    <!--                                quaerat velit!-->
                    <!--                            </a-card>-->
                    <!--                            <a-card>-->
                    <!--                                <h2>Facebook Inc.</h2>-->
                    <!--                                Fullstack developer-->
                    <!--                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cupiditate delectus-->
                    <!--                                eos in qui-->
                    <!--                                sapiente tempora tenetur. Ad, assumenda aut, ex explicabo facere harum in inventore-->
                    <!--                                magni-->
                    <!--                                maiores-->
                    <!--                                quaerat velit!-->
                    <!--                            </a-card>-->
                    <!--                            <a-card>-->
                    <!--                                <h2>Facebook Inc.</h2>-->
                    <!--                                Fullstack developer-->
                    <!--                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cupiditate delectus-->
                    <!--                                eos in qui-->
                    <!--                                sapiente tempora tenetur. Ad, assumenda aut, ex explicabo facere harum in inventore-->
                    <!--                                magni-->
                    <!--                                maiores-->
                    <!--                                quaerat velit!-->
                    <!--                            </a-card>-->
                    <!--                        </div>-->
                    <!--                        <div class="column is-5">-->
                    <!--                            <h2>Recommended Jobs</h2>-->

                    <!--                            <a-card>-->
                    <!--                                <h2>Full Stack Developer</h2>-->
                    <!--                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex non perferendis quidem. A-->
                    <!--                                alias culpa dolore ducimus ipsum, libero, magnam magni maxime natus nostrum possimus,-->
                    <!--                                quasi repellat repudiandae sunt vero!-->
                    <!--                            </a-card>-->
                    <!--                            <a-card>-->
                    <!--                                <h2>Full Stack Developer</h2>-->
                    <!--                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex non perferendis quidem. A-->
                    <!--                                alias culpa dolore ducimus ipsum, libero, magnam magni maxime natus nostrum possimus,-->
                    <!--                                quasi repellat repudiandae sunt vero!-->
                    <!--                            </a-card>-->
                    <!--                            <a-card>-->
                    <!--                                <h2>Full Stack Developer</h2>-->
                    <!--                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex non perferendis quidem. A-->
                    <!--                                alias culpa dolore ducimus ipsum, libero, magnam magni maxime natus nostrum possimus,-->
                    <!--                                quasi repellat repudiandae sunt vero!-->
                    <!--                            </a-card>-->
                    <!--                        </div>-->
                    <!--                    </div>-->
                    <div style="padding: 2% 1%;background-color: white;margin: 2% 1%">
                        <div v-if="loading" class="loading" style="text-align: center;">
                            <a-spin/>
                        </div>
                        <div v-else>
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
                            <a-row :gutter="16" style="margin-left: 1rem;margin-right: 1rem;margin-bottom: 1rem">
                                <div v-if="myjobs.length===1">
                                    <a-col :span="12" :offset="6" v-for="job in myjobs" v-bind:key="job.id">
                                        <a-card style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
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
                                </div>
                                <a-col v-else :span="12" v-for="job in myjobs" v-bind:key="job.id">
                                    <a-card style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
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


                    </div>

                </div>

            </a-layout-content>

        </a-layout>
    </a-layout>
</template>

<script>

    import UsersService from '@/services/UsersService';
    import Marketplace from '@/services/Marketplace'
    import ACol from "ant-design-vue/es/grid/Col";
    import ARow from "ant-design-vue/es/grid/Row";
    import CandidateSider from "../../layout/CandidateSider";
    import DevHeader from "../../layout/DevHeader";

    export default {
        name: "DevDashboard",
        data() {
            return {
                currentUserProfile: {},
                myjobs: [],

            }
        },
        components: {
            ARow,
            ACol,
            DevHeader,
            CandidateSider,
        },
        async mounted() {
            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}

            }
            if (this.$store.state.user.pk) {
                this.currentUserProfile = (await UsersService.currentuser(this.$store.state.user.pk, auth)).data
                this.myjobs = (await Marketplace.candidatejobs(this.$store.state.user.pk, auth)).data
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
