<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
        <CandidateSider/>
        <a-layout>

            <a-layout-content style="background-color: white">

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
    import CandidateSider from "../../layout/CandidateSider";
    import VueCal from 'vue-cal'
    import '../../../assets/css/vuecal.css'

    import Marketplace from '@/services/Marketplace'
    import moment from 'moment';
    export default {
        name: "DevCalendar",
        components: {

            CandidateSider,
            'vue-cal': VueCal,

        },
        data() {
            return {
                selectedEvent: {},
                showDialog: false,
                createEvent: false,
                bgColor: '#1372cc',
                size: 'large',
                alldevrequests: [],
                templist: [],
                allusers: [],
                events: []
            }
        },
        async mounted() {
            moment

            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}

            }

            this.allevents = (await Marketplace.candidatejobs(this.$store.state.user.pk, auth)).data
            this.alldevrequests = (await Marketplace.pickedapplications(this.$store.state.user.pk, auth)).data
            for (let i = 0; i < this.allevents.length; i++) {

                    if (this.allevents[i].interviewstatus !== null ) {

                    let id = this.allevents[i].id
                    let title = this.allevents[i].company
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
                    let title = this.alldevrequests[i].company
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
    }
</script>

<style scoped>

</style>
