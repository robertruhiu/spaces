<template>

    <a-layout>

        <Pageheader/>
        <a-layout-content :style="{ padding: '0 0px', marginTop: '4rem' }">
            <div :style="{ background: '#fff', minHeight: '100vh' }">

                <a-row>
                    <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                           :md="{span: 24, offset: 0 }"
                           :lg="{span: 12, offset: 1 }" :xl="{span: 12,offset: 0 }"
                           style="background-color: #007bff;min-height: 100vh">
                        <div style="padding: 0 3%">
                            <div class="herotext">
                                <div>
                                    <img class="sdg4" src="../../../assets/images/sdg4.png">
                                </div>
                                <h1 style="font-size: 2.5rem;font-weight: bold;color: white">Developer Skill
                                    Bridging program</h1>

                                <h4 style="color: white;font-size: 1rem">Our goal : Substantially increase the
                                    number of youth and
                                    adults who have relevant programming skills,for employment,
                                    decent jobs and entrepreneurship </h4>

                                <a-button @click="JoinCSA"
                                          style="border-radius: 2%;width: 10rem;height: 3rem" :size="large">Join
                                    program
                                    <a-icon type="right"/>
                                </a-button>

                            </div>


                        </div>
                    </a-col>


                    <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                           :md="{span: 24, offset: 0 }"
                           :lg="{span: 12, offset: 1 }" :xl="{span: 12,offset: 0 }">

                        <div style="overflow:scroll; height:100vh;">
                            <img src="../../../assets/images/coding.jpg" style="width: 100%">
                            <div :style="{ background: '#fff', padding: '31px', minHeight: '40vh' }">
                                <div style="background-color: #ffffff;">
                                    <div style="text-align: center">
                                        <h2 class="headers">How we impact skills</h2>

                                    </div>


                                    <a-row :gutter="32" style="padding: 3%">
                                        <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                                               :md="{span: 12, offset: 0 }"
                                               :lg="{span: 12, offset: 0 }" :xl="{span: 12, offset: 0 }"
                                               style="margin-bottom: 1rem">
                                            <img class="imagecenter" src="../../../assets/images/html.svg"/>
                                            <h3 class="" style="text-align: center">Learning paths &
                                                resources</h3>

                                            <p style="text-align: center;font-size: 1rem">
                                                We avail resources for self learning and also arrange onsite
                                                learnings through our partners

                                            </p>

                                        </a-col>

                                        <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                                               :md="{span: 12, offset: 0 }"
                                               :lg="{span: 12, offset: 0 }" :xl="{span: 12, offset: 0 }"
                                               style="margin-bottom: 1rem">
                                            <img class="imagecenter"
                                                 src="../../../assets/images/hackathon.svg"/>
                                            <h3 class="" style="text-align: center">Challenges & hackathons</h3>

                                            <p style="text-align: center;font-size: 1rem">
                                                Programming skills are majorly grown through problem solving
                                                challenges

                                            </p>

                                        </a-col>


                                    </a-row>
                                </div>
                                <div style="background-color: #ffffff;">
                                    <div style="text-align: center">
                                        <h2 class="headers">Our program partners</h2>

                                    </div>


                                    <a-row :gutter="32" style="padding: 3%">
                                        <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                                               :md="{span: 12, offset: 0 }"
                                               :lg="{span: 12, offset: 0 }" :xl="{span: 12, offset: 0 }"
                                               style="margin-bottom: 1rem">
                                            <img class="imagecenter" src="../../../assets/images/ibm.svg"/>


                                        </a-col>

                                        <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                                               :md="{span: 12, offset: 0 }"
                                               :lg="{span: 12, offset: 0 }" :xl="{span: 12, offset: 0 }"
                                               style="margin-bottom: 1rem">
                                            <img class="imagecenter"
                                                 src="../../../assets/images/microsoft.svg"/>


                                        </a-col>


                                    </a-row>
                                </div>
                            </div>


                        </div>


                    </a-col>

                </a-row>


            </div>


        </a-layout-content>


    </a-layout>
</template>

<script>
    import Pageheader from '@/components/layout/Header.vue'
    import UsersService from '@/services/UsersService';


    export default {
        name: 'csahome',
        components: {

            Pageheader,


        },
        data() {
            return {
                top: 65,

            }
        },


        methods: {
            navigateTo(route) {
                this.$router.push(route);
            },
            JoinCSA() {
                if (this.$store.state.isUserLoggedIn) {
                    const auth = {
                        headers: {Authorization: 'JWT ' + this.$store.state.token}

                    }


                    UsersService.updatepatch(this.$store.state.user.pk, {csa: true}, auth)
                        .then(resp => {

                            this.$router.push({
                                name: 'bridgesdashboard'
                            })


                        })
                        .catch(error => {

                            return error


                        });

                } else {
                    this.$router.push({
                        name: 'bridgesdashboard'
                    })
                }


            }
        }
    }
</script>
<style scoped>


    .herotext {
        position: absolute;

        top: 20%;


    }

    .sdg4 {
        width: 8rem;
    }

    .imagecenter {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 25%;

    }

</style>
