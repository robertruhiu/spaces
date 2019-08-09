<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
        <RecruiterSider/>


        <a-layout :style="{ marginLeft: '200px',backgroundColor:'#F8FAFB' }">

            <a-layout-content>

                <vue-cal
                        style="height: 100vh"
                        class="vuecal--blue-theme"
                        hide-weekends
                        :disable-views="['years', 'year']"
                        :events="events"
                        events-on-month-view="short"
                        :on-event-click="onEventClick"

                >

                </vue-cal>



                <a-modal


                        v-model="showDialog"
                        :footer="null"


                >


                    <p>{{selectedEvent.title}}</p>
                    <p>Start time: {{selectedEvent.start}}</p>
                    <p>End time: {{selectedEvent.end}}</p>





                </a-modal>


            </a-layout-content>
        </a-layout>
    </a-layout>


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

    import VueCal from 'vue-cal'
    import '../../../assets/css/vuecal.css'
    import UsersService from '@/services/UsersService'
    import RecruiterSider from "../../layout/RecruiterSider";
    import AFormItem from "ant-design-vue/es/form/FormItem";
    import Marketplace from '@/services/Marketplace'
    import moment from 'moment';


    export default {
        name: "mycalendar",
        data() {
            return {
                selectedEvent: {},
                showDialog: false,
                createEvent: false,
                bgColor: '#1372cc',
                size: 'large',
                candidates: [],
                alldevrequests: [],
                templist: [],
                allusers: [],
                events: []
            }
        },
        components: {
            AFormItem,

            RecruiterSider,
            'vue-cal': VueCal,


        },
        async mounted() {
            moment

            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}

            }

            this.allevents = (await Marketplace.allmyjobapplicants(this.$store.state.user.pk, auth)).data
            this.alldevrequests = (await Marketplace.mydevelopers(this.$store.state.user.pk, auth)).data
            for (let i = 0; i < this.allevents.length; i++) {

                    if (this.allevents[i].interviewstatus !== null ) {

                    let id = this.allevents[i].id
                    let title = this.allevents[i].candidatename
                    let start = moment(this.allevents[i].interviewstarttime).format("YYYY-MM-DD HH:mm:ss")
                    let end = moment(this.allevents[i].interviewendtime).format("YYYY-MM-DD HH:mm:ss")
                    let color = this.allevents[i].eventcolor
                    let one_event = new Event(
                        id, title, start, end, color
                    );
                    this.events.push(one_event)



                }



            }
            for (let i = 0; i < this.alldevrequests.length; i++) {

                if (this.alldevrequests[i].interviewstatus !== null) {

                    let id = this.alldevrequests[i].id
                    let title = this.alldevrequests[i].candidatename
                    let start = moment(this.alldevrequests[i].interviewstarttime).format("YYYY-MM-DD HH:mm:ss")
                    let end = moment(this.alldevrequests[i].interviewendtime).format("YYYY-MM-DD HH:mm:ss")
                    let color = this.alldevrequests[i].eventcolor
                    let one_event = new Event(
                        id, title, start, end, color
                    );
                    this.events.push(one_event)


                }

            }


        },
        methods: {
            moment,
            disabledDate(current) {
                // Can not select days before today and today
                return current && current < moment().endOf('day');
            },


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
            onEventClick(event, e) {
                this.selectedEvent = event
                this.showDialog = true

                // Prevent navigating to narrower view (default vue-cal behavior).
                e.stopPropagation()
            },
            NewEvent() {
                this.createEvent = true

            },


        }

    }
</script>

<style scoped>
    #components-layout-demo-side .logo {
        height: 32px;
        background: rgba(255, 255, 255, .2);
        margin: 16px;
    }

    .ant-tabs-tab-active {
        color: #1890ff;
        font-weight: 500;
    }

    .vuecal__now-line {
        color: #06c;
    }

    .eventcolors {
        margin-top: 30%;
        border-radius: 50%;
        width: 20px;
        height: 20px;

    }

</style>
