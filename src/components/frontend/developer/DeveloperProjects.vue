<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
        <CandidateSider/>

        <a-layout-content style="background-color: white">
            <DevHeader/>
            <div style="padding: 2%">
                <a-row style="margin-bottom: 2%">
                        <a-col span="24">
                            <h3 style="color: #1976D2;font-weight: bold">
                                Start a new project or complete the existing ones.
                            </h3>
                        </a-col>

                    </a-row>
                <a-row>
                    <a-col span="6">
                        <a-row class="ant-card actioncards" >
                            <a @click="showModal" style="text-decoration: none;color: black">
                               <a-col span="24">
                                        <div style="text-align: center">
                                            <img class="poolavatar" src="../../../assets/images/art.svg">
                                        </div>

                                    </a-col>
                                    <a-col span="24" style="text-align: center">
                                        <p class="ant-card-head-title" style="font-weight: bold">new project</p>
                                        <p style="margin: 0;"> Pick framework you want to self test</p>
                                    </a-col>
                            </a>

                                </a-row>



                    </a-col>
                    <a-col span="6">
                        <a-row class="ant-card actioncards1" >
                            <a  style="text-decoration: none;color: black">
                               <a-col span="24">
                                        <div style="text-align: center">
                                            <img style="width: 100%;height: 126px" src="https://i.ibb.co/jrgkPM6/Web-1920-1.jpg">
                                        </div>

                                    </a-col>
                                    <a-col span="24" style="text-align: center">
                                        <p class="ant-card-head-title" style="font-weight: bold">Byrent</p>

                                    </a-col>
                            </a>

                                </a-row>
                    </a-col>
                    <a-col span="6">
                        <a-row class="ant-card actioncards1" >
                            <a  style="text-decoration: none;color: black">
                               <a-col span="24">
                                        <div style="text-align: center">
                                            <img style="width: 100%;height: 126px" src="https://preview.ibb.co/kkJyUq/travel1.png">
                                        </div>

                                    </a-col>
                                    <a-col span="24" style="text-align: center">
                                        <p class="ant-card-head-title" style="font-weight: bold">Byrent</p>

                                    </a-col>
                            </a>

                                </a-row>
                    </a-col>
                </a-row>



            </div>
            <a-modal
                    title="Frameworks(Pick one)"
                    v-model="visible"
                    :footer="null"


            >
                <a-row>
                    <a-col span="6" v-for="framework in frameworkchoices" v-bind:key="framework">


                                            <img style="width: 100%;" :src="framework.image">


                                    </a-col>


                </a-row>

            </a-modal>
        </a-layout-content>

    </a-layout>
</template>

<script>
    import DevHeader from "../../layout/DevHeader";


    import UsersService from '@/services/UsersService'
    import Projects from '@/services/Projects'
    import CandidateSider from "../../layout/CandidateSider";
    import ACol from "ant-design-vue/es/grid/Col";

    export default {
        name: "DeveloperProjects",
        data() {
            return {
                currentUserProfile: {},
                projectlist: [],
                frameworkchoices: null,
                visible: false
            }
        },
        components: {
            ACol,
            DevHeader,
            CandidateSider,
        },
        async mounted() {
            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}

            };
            if (this.$store.state.user.pk) {
                this.currentUserProfile = (await UsersService.currentuser(this.$store.state.user.pk, auth)).data
                this.frameworkchoices = (await Projects.getverified(auth)).data
                console.log(this.frameworkchoices)

            }
        },
        methods: {
            navigateTo(route) {
                this.$router.push(route)
            },
            showModal() {
                this.visible = true
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


    .actioncards {
        width: 16rem;
        border-radius: 0;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        padding: 0.89rem;
    }
    .actioncards1 {
        width: 16rem;
        border-radius: 0;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    .actioncards2 {
        width: 8rem;
        border-radius: 0;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    .poolavatar {
        width: 30%;
        margin-top: 0.5rem;
    }
</style>
