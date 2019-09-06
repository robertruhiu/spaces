<template>
    <div>
        <show-at breakpoint="mediumAndBelow">
            <a-layout-header :style="{width: '100%',backgroundColor:'#ffffff',height:'5rem',padding: '1px 30px 0',
            borderBottom: '1px solid #e8e8e8'}">
                <img v-bind:style="logo"
                 style="width: 120px;height: 31px;margin-top: 1rem;margin-bottom: 6%;margin-left: 9%"
                 v-bind:src="defaultlogo"
            >



        </a-layout-header>
        </show-at>
        <hide-at breakpoint="mediumAndBelow">
            <a-layout-header :style="{width: '100%',backgroundColor:'#004ec7',height:'6rem',padding: '1px 30px 0',
            borderBottom: '1px solid #e8e8e8'}">


                <a-row>


                    <a-col :xs="24" :sm="12" :md="6" :lg="6" :xl="8">
                <span style="color: white;font-size: 1rem;font-weight:bold">
                    {{greeting}} {{this.$store.state.user.first_name | capitalize}}  </span>
                <p style="color: white;font-size: 0.9rem;font-weight: bold;line-height: 3px"> {{events.length}}
                    interview(s)
                    Today</p>


            </a-col>

                    <a-col   :xs="12" :sm="12" :md="12" :lg="18" :xl="18"  style="color: white">
                    <a-row :gutter="16">
                        <a-col :span="6" v-for="interview in events" v-bind:key="interview">
                            <a-card class="events">
                                <p style="line-height: 0">{{interview.start}} - {{interview.end}}</p>
                                <p>{{interview.title | capitalize}}</p>

                            </a-card>
                        </a-col>


                    </a-row>


                </a-col>


                </a-row>



        </a-layout-header>
        </hide-at>
    </div>


</template>

<script>
    class Event {
        constructor(id, title, start, end, color) {
            this.key = id;
            this.title = title
            this.start = start;
            this.end = end;
            this.class = color


        }
    }

    import ACol from "ant-design-vue/es/grid/Col";

    import UsersService from '@/services/UsersService'
    import Marketplace from '@/services/Marketplace'
    import moment from 'moment';
    import ARow from "ant-design-vue/es/grid/Row";
    import {showAt, hideAt} from 'vue-breakpoints'
    import Largelogo from '@/assets/logobg.svg'

    export default {
        name: "DevHeader",
        components: {
            ARow,
            ACol,
            hideAt, showAt

        },
        data() {

            return {
                currentUserProfile: null,
                greeting: null,
                currentUser: null,
                skills: [],
                verified_skills: [],
                events: [],
                allusers: null,
                defaultlogo: Largelogo,


            }
        },
        async mounted() {
            moment
            let today = new Date()
            let curHr = today.getHours()

            if (curHr < 12) {
                this.greeting = 'Good Morning'

            } else if (curHr < 18) {
                this.greeting = 'Good Afternoon'

            } else {
                this.greeting = 'Good Evening'

            }

            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}

            }
            this.currentUser = (await UsersService.retrieveuser(this.$store.state.user.pk, auth)).data
            this.currentUserProfile = (await UsersService.currentuser(this.$store.state.user.pk, auth)).data
            this.allusers = (await UsersService.devs()).data;
            this.skills = this.currentUserProfile.skills.split(',');
            this.verified_skills = this.currentUserProfile.verified_skills.split(',');
            let todayDate = moment().format("YYYY-MM-DD")
            this.allevents = (await Marketplace.candidatejobs(this.$store.state.user.pk, auth)).data
            this.alldevrequests = (await Marketplace.pickedapplications(this.$store.state.user.pk, auth)).data
            for (let i = 0; i < this.allevents.length; i++) {

                if (this.allevents[i].interviewstatus !== null && moment(this.allevents[i].interviewstarttime).format("YYYY-MM-DD") === todayDate
                ) {

                    let id = this.allevents[i].id
                    let title = this.allevents[i].recruiter.company
                    let start = moment(this.allevents[i].interviewstarttime).format("HH:mm")
                    let end = moment(this.allevents[i].interviewendtime).format("HH:mm")
                    let color = this.allevents[i].eventcolor
                    let one_event = new Event(
                        id, title, start, end, color
                    );
                    this.events.push(one_event)


                }


            }
            for (let i = 0; i < this.alldevrequests.length; i++) {

                if (this.alldevrequests[i].interviewstatus !== null && moment(this.alldevrequests[i].interviewstarttime).format("YYYY-MM-DD") === todayDate
                ) {

                    let id = this.alldevrequests[i].id
                    let title = this.alldevrequests[i].recruiter.company
                    let start = moment(this.alldevrequests[i].interviewstarttime).format("HH:mm")
                    let end = moment(this.alldevrequests[i].interviewendtime).format("HH:mm")
                    let color = this.alldevrequests[i].eventcolor
                    let one_event = new Event(
                        id, title, start, end, color
                    );
                    this.events.push(one_event)


                }


            }


        },
        filters: {
            capitalize: function (value) {
                if (!value) return ''
                value = value.toString()
                return value.charAt(0).toUpperCase() + value.slice(1)
            }
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


        },
    }
</script>

<style scoped>


    .events {
        width: 11rem;
        height: 5rem;
        margin-top: 0.5rem;
        border-radius: 0;
        background-color: #0064ff;
        border: 0;
        color: white;

    }

    .poolavatar {
        width: 80px;
        height: 80px;
        line-height: 80px;
        font-size: 30px;
        background-color: #0679FB;
        border-radius: 0

    }


    .center {
        margin: auto;
        width: 60%;


    }

    .profile {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        background-color: white;
        margin: 1%;

    }

    .pcustom {
        margin-bottom: 0;
        line-height: 10px;
        margin-top: 0;
    }


</style>
