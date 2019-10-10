<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh;">
        <CandidateSider/>
        <a-layout>

            <a-layout-content style="background-color: white">
                <DevHeader/>
                <div :style="{ padding: '5px', background: '#fff',marginTop:'1rem' }">
                    <a-row style="margin-bottom: 2%">
                        <a-col :xs="{span: 24, offset: 1 }" :sm="{span: 24, offset: 2 }" :md="{span: 24, offset: 2 }"
                               :lg="{span: 20, offset: 0 }" :xl="{span: 20, offset: 0 }">

                            <h3 style="margin-left: 1rem;color: #1976D2;font-weight: bold">
                                What would you like to do today?
                            </h3>

                        </a-col>
                        <a-col :xs="{span: 24, offset: 1 }" :sm="{span: 24, offset: 2 }" :md="{span: 24, offset: 2 }"
                               :lg="{span: 4, offset: 0 }" :xl="{span:4, offset: 0 }">
                            <a-switch defaultChecked @change='Available' v-model="currentUserProfile.available"/>
                            <a-tooltip>
                                <template slot='title'>
                                    Your profile will be published on the talent pool
                                </template>
                                Make profile public
                            </a-tooltip>

                        </a-col>

                    </a-row>
                    <a-row :gutter="16" style="padding-right: 2rem;padding-left: 1.5rem;padding-bottom: 1.5rem;">


                        <router-link to="/assessment">
                            <a-col class="boxes" :xs="{span: 24, offset: 1 }" :sm="{span: 10, offset: 2 }"
                                   :md="{span: 10, offset: 2 }"
                                   :lg="{span: 10, offset: 1 }" :xl="{span: 6,offset: 0 }">

                                <a-row class="ant-card actioncards">
                                    <a-col span="24">
                                        <div style="text-align: center">
                                            <img class="poolavatar" src="../../../assets/images/check1.svg">
                                        </div>

                                    </a-col>
                                    <a-col span="24" style="text-align: center">
                                        <p class="ant-card-head-title " style="font-weight: bold">Get Verified</p>
                                        <p style="margin: 0;">Put your skills to the test</p>


                                    </a-col>


                                </a-row>

                            </a-col>
                        </router-link>
                        <router-link to="/manageapplications">
                            <a-col class="boxes" :xs="{span: 24, offset: 1 }" :sm="{span: 10, offset: 2 }"
                                   :md="{span: 10, offset: 2 }"
                                   :lg="{span: 10, offset: 1 }" :xl="{span: 6,offset: 0 }">

                                <a-row class="ant-card actioncards">
                                    <a-col span="24">
                                        <div style="text-align: center">
                                            <img class="poolavatar" src="../../../assets/images/resume.svg">
                                        </div>
                                    </a-col>
                                    <a-col span="24" style="text-align: center">
                                        <p class="ant-card-head-title" style="font-weight: bold">Manage applications</p>
                                        <p style="margin: 0;">View and manage current jobs</p>


                                    </a-col>


                                </a-row>

                            </a-col>
                        </router-link>
                        <router-link to="/jobs">
                            <a-col class="boxes" :xs="{span: 24, offset: 1 }" :sm="{span: 10, offset: 2 }"
                                   :md="{span: 10, offset: 2 }"
                                   :lg="{span: 10, offset: 1 }" :xl="{span: 6,offset: 0 }">

                                <a-row class="ant-card actioncards">
                                    <a-col span="24">
                                        <div style="text-align: center">
                                            <img class="poolavatar" src="../../../assets/images/board.svg">
                                        </div>

                                    </a-col>
                                    <a-col span="24" style="text-align: center">
                                        <p class="ant-card-head-title" style="font-weight: bold">Job board</p>
                                        <p style="margin: 0;">View and apply for jobs</p>


                                    </a-col>


                                </a-row>

                            </a-col>
                        </router-link>
                        <router-link to="/portfolio">
                            <a-col class="boxes" :xs="{span: 24, offset: 1 }" :sm="{span: 10, offset: 2 }"
                                   :md="{span: 10, offset: 2 }"
                                   :lg="{span: 10, offset: 1 }" :xl="{span: 6,offset: 0 }">

                                <a-row class="ant-card actioncards">
                                    <a-col span="24">
                                        <div style="text-align: center">
                                            <img class="poolavatar" src="../../../assets/images/curriculum.svg">
                                        </div>

                                    </a-col>
                                    <a-col span="24" style="text-align: center">
                                        <p class="ant-card-head-title" style="font-weight: bold">My portfolio</p>
                                        <p style="margin: 0;">Make your profile more appealing</p>


                                    </a-col>


                                </a-row>

                            </a-col>
                        </router-link>

                    </a-row>

                </div>
                <br>


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
            Available() {

                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }


                UsersService.updatepatch(this.$store.state.user.pk, {available:this.currentUserProfile.available}, auth)
                    .then(resp => {

                        return resp


                    })
                    .catch(error => {

                        return error


                    });


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
        margin-bottom: 1rem;
        padding-left: 0;
        padding-right: 0;


    }

    .poolavatar {
        width: 30%;
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
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        padding: 0.89rem;
        border-radius: 0;
        height: 100%;
    }

</style>
