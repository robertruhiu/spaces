<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh;">
        <CandidateSider/>
        <a-layout>
            <a-layout-content style="background-color: white">
                <BridgeHomeHeader/>
                <div :style="{ padding: '3% 1%', background: '#fff',marginTop:'0' }">

                    <a-row :gutter="16" style="padding-right: 2rem;padding-left: 1.5rem;padding-bottom: 1.5rem;">


                        <a-col class="boxes" :xs="{span: 24, offset: 1 }" :sm="{span: 10, offset: 2 }"
                               :md="{span: 10, offset: 2 }"
                               :lg="{span: 10, offset: 1 }" :xl="{span: 6,offset: 0 }">


                            <a-row class="ant-card actioncards">
                                <router-link to="/paths" style="color: black">
                                    <a-col span="24">
                                        <div style="text-align: center">
                                            <img class="poolavatar" src="../../../assets/images/html.svg">
                                        </div>

                                    </a-col>
                                    <a-col span="24" style="text-align: center">
                                        <p class="ant-card-head-title " style="font-weight: bold">Learning paths &
                                            resources</p>
                                        <p style="margin: 0;">resources to enable your skill growth</p>


                                    </a-col>
                                </router-link>


                            </a-row>


                        </a-col>


                        <a-col class="boxes" :xs="{span: 24, offset: 1 }" :sm="{span: 10, offset: 2 }"
                               :md="{span: 10, offset: 2 }"
                               :lg="{span: 10, offset: 1 }" :xl="{span: 6,offset: 0 }">


                            <a-row class="ant-card actioncards">
                                <router-link to="/cohortsprojects" style="color: black">
                                    <a-col span="24">
                                        <div style="text-align: center">
                                            <img class="poolavatar" src="../../../assets/images/catalog.svg">
                                        </div>
                                    </a-col>
                                    <a-col span="24" style="text-align: center">
                                        <p class="ant-card-head-title" style="font-weight: bold">Project & Design
                                            submissions</p>
                                        <p style="margin: 0;">fellow peers portfolios</p>


                                    </a-col>
                                </router-link>


                            </a-row>


                        </a-col>


                        <a-col class="boxes" :xs="{span: 24, offset: 1 }" :sm="{span: 10, offset: 2 }"
                               :md="{span: 10, offset: 2 }"
                               :lg="{span: 10, offset: 1 }" :xl="{span: 6,offset: 0 }">

                            <a-row class="ant-card actioncards" style="color: gainsboro">
                                <a-col span="24">
                                    <div style="text-align: center">
                                        <img class="poolavatar" src="../../../assets/images/hackathon.svg">
                                    </div>

                                </a-col>
                                <a-col span="24" style="text-align: center">
                                    <p class="ant-card-head-title" style="font-weight: bold">Challenges & hackathons</p>
                                    <p style="margin: 0;">Challenge yourself </p>


                                </a-col>


                            </a-row>

                        </a-col>


                    </a-row>


                </div>


            </a-layout-content>
        </a-layout>
    </a-layout>

</template>

<script>
    import CandidateSider from "../../layout/CandidateSider";
    import BridgeHomeHeader from "../../layout/bridgehomeheader";


    export default {
        name: "csadashboard",
        components: {
            BridgeHomeHeader,
            CandidateSider,
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