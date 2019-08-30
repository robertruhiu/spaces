<template>
    <a-layout-header
            :style="{width: '100%',backgroundColor:'#004ec7',height:'100px',padding: '1px 30px 0',
            borderBottom: '1px solid #e8e8e8',position:'fixed',zIndex: '1' }">
        <a-row>

            <a-col :span="6">
                <span style="color: white;font-size: 17px;font-weight:bold">{{greeting}}
                    {{this.$store.state.user.first_name | capitalize}}</span>
                <p style="color: white;font-size: 12px;font-weight: bold;line-height: 3px">{{events.length}} interview(s)
                    Today</p>
            </a-col>
            <a-col :span="18">
                <a-row >
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

</template>

<script>
    import ACol from "ant-design-vue/es/grid/Col";

    class Event {
        constructor(id, title, start, end, color) {
            this.key = id;
            this.title = title
            this.start = start;
            this.end = end;
            this.class = color


        }
    }

    import UsersService from '@/services/UsersService'
    import Marketplace from '@/services/Marketplace'
    import moment from 'moment';

    export default {
        name: "Pageheader",
        components: {ACol},
        data() {

            return {
                currentUserProfile: null,
                greeting: null,
                events: []

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
            this.currentUserProfile = (await UsersService.currentuser(this.$store.state.user.pk, auth)).data
            this.allevents = (await Marketplace.allmyjobapplicants(this.$store.state.user.pk, auth)).data
            this.alldevrequests = (await Marketplace.mydevelopers(this.$store.state.user.pk, auth)).data
            let todayDate = moment().format("YYYY-MM-DD")
            for (let i = 0; i < this.allevents.length; i++) {

                if (this.allevents[i].interviewstatus !== null && moment(this.allevents[i].interviewstarttime).format("YYYY-MM-DD") === todayDate ) {

                    let id = this.allevents[i].id
                    let title = this.allevents[i].candidate.user.first_name
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

                if (this.alldevrequests[i].interviewstatus !== null && moment(this.alldevrequests[i].interviewstarttime).format("YYYY-MM-DD") === todayDate) {

                    let id = this.alldevrequests[i].id
                    let title = this.alldevrequests[i].candidate.user.first_name
                    let start = moment(this.alldevrequests[i].interviewstarttime).format("HH:mm")
                    let end = moment(this.alldevrequests[i].interviewendtime).format("HH:mm")
                    let color = this.alldevrequests[i].eventcolor
                    let one_event = new Event(
                        id, title, start, end, color
                    );
                    this.events.push(one_event)


                }

            }
            console.log(this.events)


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


</style>
