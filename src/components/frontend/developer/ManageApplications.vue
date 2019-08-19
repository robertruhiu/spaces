<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
        <CandidateSider/>
        <a-layout>

            <a-layout-content style="background-color: white">
                <DevHeader/>
                <div :style="{ padding: '5px', background: '#fff', }">
                    <a-row style="margin-top: 1%">
                        <a-col span="24">
                            <h3 style="margin-left: 1.5rem;color: #1976D2;font-weight: bold">
                                Track your applications through the stages
                            </h3>
                        </a-col>

                    </a-row>
                    <a-row :gutter="8" style="padding: 2%">


                        <a-col span="6">
                            <a-card class='managecard' style="border-top-color: #3A61CC;padding: 0">


                                <p slot="title" style="color: #1976D2;font-weight: bold;text-align: center">
                                    Applications</p>
                                <a-timeline>
                                    <a-timeline-item>
                                        <a><strong>Talent pool pick</strong></a>
                                        <br>
                                        <div class="text-muted">
                                            Company : Anglers
                                        <br>
                                        Application date : 2015-09-01
                                        <br>
                                        Stage:
                                            <a-tag  color="#9C27B0"
                                                           style="text-align: center;width: 4rem;">
                                                active
                                            </a-tag>
                                        </div>

                                    </a-timeline-item>
                                    <a-timeline-item>
                                        <a><strong>React Developer</strong></a>
                                        <br>
                                        <div class="text-muted">
                                            Company : Bluetree enterprise
                                        <br>
                                        Application date : 2015-09-01
                                        <br>
                                        Stage:
                                            <a-tag  color="#9C27B0"
                                                           style="text-align: center;width: 4rem;">
                                                active
                                            </a-tag>
                                        </div>
                                    </a-timeline-item>
                                    <a-timeline-item>
                                        <a><strong>Python Django developer</strong></a>
                                        <br>
                                        <div class="text-muted">
                                            Company : Anglers
                                        <br>
                                        Application date : 2015-09-01
                                        <br>
                                        Stage:
                                            <a-tag  color="#FF4081"
                                                           style="text-align: center;width: 4rem;">
                                                pending
                                            </a-tag>
                                        </div>


                                    </a-timeline-item>
                                </a-timeline>



                            </a-card>

                        </a-col>

                        <a-col span="6">
                            <a-card class='managecard' style="border-top-color: #fa5580;">

                                <p slot="title" style="color: #1976D2;font-weight: bold;text-align: center">
                                    Testing</p>

                                <a-timeline>
                                    <a-timeline-item>
                                        <a><strong>Talent pool pick</strong></a>
                                        <br>
                                        <div class="text-muted">
                                            Company : Anglers
                                        <br>


                                            Project assigned:<a>Mulan</a>
                                            <br>
                                            Project status:
                                            <a-tag  color="#8BC34A"
                                                           style="text-align: center;">
                                                in-progress
                                            </a-tag>


                                        </div>

                                    </a-timeline-item>


                                </a-timeline>
                            </a-card>

                        </a-col>

                        <a-col span="6">
                            <a-card class='managecard' style="border-top-color: #1C9DDF;">

                                <p slot="title" style="color: #1976D2;font-weight: bold;text-align: center">
                                    Interview</p>

                                <a-timeline>
                                    <a-timeline-item>
                                        <a><strong>Talent pool pick</strong></a>
                                        <br>
                                        <div class="text-muted">
                                            Company : Anglers
                                        <br>


                                            Interview Date: <a>2015-09-01</a>
                                            <br>
                                            Interview  status:
                                            <a-tag  color="#FF4081"
                                                           style="text-align: center;">
                                                pending
                                            </a-tag>


                                        </div>

                                    </a-timeline-item>


                                </a-timeline>
                            </a-card>

                        </a-col>

                        <a-col span="6">
                            <a-card class='managecard' style="border-top-color: #3FCE9D;">

                                <p slot="title" style="color: #1976D2;font-weight: bold;text-align: center">
                                    Offers</p>


                            </a-card>

                        </a-col>


                    </a-row>


                </div>
            </a-layout-content>
        </a-layout>
    </a-layout>

</template>

<script>
    import CandidateSider from "../../layout/CandidateSider";
    import DevHeader from "../../layout/DevHeader";
    import ARow from "ant-design-vue/es/grid/Row";
    import ACol from "ant-design-vue/es/grid/Col";

    export default {
        name: "ManageApplications",
        components: {
            ACol,
            ARow,
            DevHeader,
            CandidateSider,

        },
    }
</script>

<style scoped>
    .managecard {
        height: 100%;
        border-top-width: thick;

    }
    .text-muted{
        color: rgba(0, 0, 0, 0.45);
    }

</style>
