<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
        <CandidateSider/>
        <a-layout>

            <a-layout-content style="background-color: white">
                <DevHeader/>
                <div :style="{ padding: '0 2%', background: '#fff' }">
                    <a-row style="margin-top: 1rem;margin-bottom: 2%">
                        <a-col :xs="{span: 18, offset: 2 }" :sm="{span: 24, offset: 1 }" :md="{span: 24, offset: 1 }"
                               :lg="{span: 24, offset: 0 }" :xl="{span: 24, offset: 0}">
                            <h3 style="color: #1976D2;font-weight: bold">
                                Select one of the Test Centers below take Codeln's Project Based Test
                            </h3>
                        </a-col>

                    </a-row>
                    <a-row :gutter="16" style="padding-right: 2rem;padding-bottom: 1.5rem;">
                        <div v-if="testcenters.length > 0">
                            <a-col class="boxes" :xs="{span: 16, offset: 2  }" :sm="{span: 12, offset: 0 }"
                                   :md="{span: 10, offset: 0 }"
                                   :lg="{span: 8, offset: 0 }" :xl="{span: 8,offset: 0 }" v-for="center in testcenters"
                                   v-bind:key="center">
                                <a-row class="ant-card actioncards">
                                    <a-col span="24">
                                        <div style="text-align: center">
                                            <img class="poolavatar" src="../../../assets/images/quiz.svg">
                                        </div>
                                    </a-col>
                                    <a-col span="24" style="text-align: center">
                                        <p class="ant-card-head-title" style="font-weight: bold">{{center.country}}</p>
                                        <p style="margin: 0;">If in {{center.country}} Pick as your Test center</p>
                                        <p style="margin: 0;">The Test will take place on {{center.date}} from at
                                            {{ center.start_time }} to {{ center.end_time }} </p>
                                        <p style="margin: 0;">The Venue is {{center.venue}}</p>
                                        <p style="margin: 0;">The Location is {{center.location}}</p>

                                        <p style="margin: 0;">Further details will be emailed to you</p>
                                        <br>
                                        <a-button type="primary" @click="SelectCenter(center.id)"> Select Center
                                        </a-button>
                                    </a-col>
                                </a-row>
                            </a-col>
                        </div>
                    </a-row>
                </div>


            </a-layout-content>


        </a-layout>
    </a-layout>
</template>

<script>
    import UsersService from '@/services/UsersService';
    import CandidateSider from "../../layout/CandidateSider";
    import DevHeader from "../../layout/DevHeader";
    import ACol from "ant-design-vue/es/grid/Col";
    import ARow from "ant-design-vue/es/grid/Row";
    import ServerManagement from "../../../services/ServerManagement";

    export default {
        name: "TestCenters",
        data() {
            return {
                currentUserProfile: {},
                testcenters: [
                    // {
                    //     "id": 1,
                    //     "country": "Ghana",
                    //     "station": "Impact Hub",
                    //     "date": "2018-12-06",
                    //     "time": '14:00 to 17:00pm',
                    // }, {
                    //     "id": 12,
                    //     "country": "Nigeria",
                    //     "station": "Mest Offices",
                    //     "date": "2018-12-06",
                    //     "time": '14:00 to 17:00pm',
                    // },
                ],
                selected_center: "",
            }
        },
        components: {
            DevHeader,
            CandidateSider,
            ACol,
            ARow,
        },
        async mounted() {
            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}
            }
            if (this.$store.state.user.pk) {
                this.currentUserProfile = (await UsersService.currentuser(this.$store.state.user.pk, auth)).data;
                this.testcenters = (await ServerManagement.testcenters(auth)).data
            }
        },
        methods: {
            navigateTo(route) {
                this.$router.push(route)
            },
            async SelectCenter(center_id) {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}
                };
                this.selected_center = center_id;
                ServerManagement.selectcenter(
                    {
                        candidate: this.$store.state.user.pk,
                        test_center: center_id,
                    }, auth)
                    .then(resp => {
                            this.$router.push({
                                name: 'developer',
                            })
                        }
                    );
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

    .projcard {
        min-height: 200px;
    }

    .projcard:hover {
        border-color: #004ec7;
    }

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
        border-radius: 0;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        padding: 0.89rem;
    }
</style>