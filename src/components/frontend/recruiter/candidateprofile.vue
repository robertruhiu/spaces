<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh;background-color:#F8FAFB ">

        <RecruiterSider/>

        <a-layout style="background-color:#F8FAFB">


            <a-layout-content>
                <CandidateHeader/>


                <a-row style="padding: 1% 1%">
                    <a-col :span="16" style=" padding-left: 15px;padding-right: 15px;">
                        <div class="profile" style="padding-bottom: 2%">
                            <a-row>

                                <a-col :span="22">
                                    <p>About</p>
                                    <p>{{currentUserProfile.about}}</p>
                                </a-col>
                            </a-row>
                            <br>
                            <a-row>
                                <a-col :span="6">
                                    Experience:
                                    <a-tag color="#F0F6FD" style="color:#007BFF;">
                                        {{currentUserProfile.years}} years
                                    </a-tag>
                                </a-col>
                                <a-col :span="6">
                                <span>
                                    Availability :
                                <a-tag color="#F0F6FD" style="color:#007BFF;">
                                 {{currentUserProfile.availabilty}}
                            </a-tag>
                            </span>
                                </a-col>
                                <a-col :span="6">
                                <span>
                                    Location :
                                <a-tag color="#F0F6FD" style="color:#007BFF;">
                                 {{currentUserProfile.country}}
                            </a-tag>
                            </span>
                                </a-col>

                            </a-row>
                        </div>
                        <div class="bio">
                            <a-tabs defaultActiveKey="1">
                                <a-tab-pane key="1">
                                    <span slot="tab">
                                        <a-icon type="codepen"/>
                                        Skills
                                    </span>
                                    <p>Quizzes taken by Candidate</p>
                                    Javascript :
                                    <a-progress :percent="30"/>
                                    java:
                                    <a-progress :percent="50"/>
                                    React:
                                    <a-progress :percent="70"/>
                                    Angular:
                                    <a-progress :percent="89"/>
                                </a-tab-pane>
                                <a-tab-pane key="2">
                                    <span slot="tab">
                                        <a-icon type="solution"/>
                                        Projects portfolio
                                    </span>
                                    Tab 2
                                </a-tab-pane>
                                <a-tab-pane key="3">
                                    <span slot="tab">
                                        <a-icon type="hourglass"/>
                                        Work experience
                                    </span>
                                    Tab 2
                                </a-tab-pane>
                            </a-tabs>
                        </div>


                    </a-col>


                    <a-col :span="8" style="margin-top: 0.4%">
                        <div class="actions">
                            <p>Skill tags</p>
                            <p>Candidate skill tags(what candidate says they can do.You can asign a
                                project to test)
                            </p>
                            <p>
                                <span style="" v-for="skill in skilltags" v-bind:key="skill.id">
                                <a-tag color="#F0F6FD" style="color:#007BFF;">
                                    {{skill}}
                                </a-tag>
                            </span>
                            </p>

                            <p>
                                <a-button type="primary" @click="showModal">Asign code test</a-button>
                            </p>


                        </div>


                    </a-col>
                </a-row>
                <a-modal
                        title="Basic Modal"
                        v-model="visible"
                        @ok="handleOk"
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </a-modal>


            </a-layout-content>

        </a-layout>
    </a-layout>
</template>


<script>


    import UsersService from '@/services/UsersService'
    import RecruiterSider from "../../layout/RecruiterSider";

    import CandidateHeader from "../../layout/CandidateHeader";
    import ARow from "ant-design-vue/es/grid/Row";
    import ACol from "ant-design-vue/es/grid/Col";


    export default {
        name: 'candidateprofile',
        data() {

            return {
                currentUserProfile: {},
                currentUser: {},
                skilltags: [],
                visible: false,
            }
        },
        components: {
            ACol,
            ARow,

            RecruiterSider,
            CandidateHeader


        },
        async mounted() {

            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}

            }
            this.currentUser = (await UsersService.retrieveuser(this.$route.params.candidateID, auth)).data
            this.currentUserProfile = (await UsersService.currentuser(this.$route.params.candidateID, auth)).data
            this.skilltags = this.currentUserProfile.skills.split(',');


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
            },
            showModal() {
                this.visible = true
            },
            handleOk(e) {

                this.visible = false
            },
        },

    }

</script>

<style scoped>
    .bio {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        background-color: white;
        min-height: 50vh;
        margin: 1%;
        padding-left: 15px;
        padding-right: 15px;
        padding-top: 2%;
        padding-bottom: 5%;
    }

    .actions {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        background-color: white;
        min-height: 30vh;
        margin: 1%;
        padding: 4%;
    }

    .profile {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        background-color: white;
        margin: 1%;
        padding: 4%;
    }

</style>
