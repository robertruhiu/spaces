<template>
    <div>

        <a-layout-header
                :style="{width: '100%',backgroundColor:'#004ec7',height:'100px',padding: '1px 30px 0',borderBottom: '1px solid #e8e8e8' }">

            <a-row>
                <a-col :span="22">
                            <span>
                                <a style="color: white;line-height: 13px;font-size: 17px;font-weight:bold;margin-top: 15%">
                                {{job.title}}</a>



                                    <span style="float: right" v-if="job.published" id="unpublishbutton">
                                    <a-button type="primary" @click="unpublishjob(job.id)">Unpublish Job</a-button>

                                </span>
                                <br>




                            </span>


                </a-col>


                <a-button type="primary" @click="showDrawer">
                    <a-icon type="calendar"/>
                    Calendar
                </a-button>
                <a-button type="primary" style="margin-left: 1%">
                    <a-icon type="share-alt" />
                    Share Job
                </a-button>


            </a-row>


        </a-layout-header>

        <a-drawer
                placement="right"
                :closable="false"
                @close="onClose"
                :visible="visible"
                :width="400"
        >
            <kalendar :configuration="calendar_settings" :appointments="appointments">
                <div slot="popup-form" slot-scope="{popup_scope}" style="display: flex; flex-direction: column;">
                    <h4 style="margin-bottom: 10px">New Appointment</h4>
                    <input v-model="new_appointment['title']" type="text" name="title" placeholder="Title">
                    <textarea v-model="new_appointment['description']" type="text" name="description"
                              placeholder="Description" rows="2"></textarea>
                    <div class="buttons">
                        <button class="cancel" @click="popup_scope.close_popup = true">Cancel</button>
                        <button @click="completeAppointment(popup_scope, new_appointment)">Save</button>
                    </div>
                </div>
                <div slot="details-card" slot-scope="{appointment_props}">
                    <h4 class="appointment-title">{{appointment_props.data.title}}</h4>
                    <small v-show="(appointment_props.end - appointment_props.start) > 2">
                        {{appointment_props.data.description}}
                    </small>
                    <span class="time">{{appointment_props.start_value.value | normalizeDate('hh:mm A')}} - {{appointment_props.end_value.value | normalizeDate('hh:mm A')}}</span>
                </div>
            </kalendar>
        </a-drawer>

    </div>


</template>

<script>

    import Marketplace from '@/services/Marketplace'
    import {Kalendar} from 'kalendar-vue';
    import 'kalendar-vue/dist/KalendarVue.css';
    import ACol from "ant-design-vue/es/grid/Col";

    export default {
        name: "Jobheader",
        data() {

            return {
                job: {},
                visible: false,
                appointments: [],
                calendar_settings: {
                    style: "material_design",
                    view_type: "Day",
                    split_value: 20,
                    cell_height: 20,
                    scrollToNow: true,
                    current_day: new Date()
                },


            }
        },
        components: {
            ACol,
            Kalendar


        },
        async mounted() {


            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}

            }
            this.job = (await Marketplace.specificjob(this.$route.params.jobId, auth)).data


        },
        methods: {
            //unpublish job
            unpublishjob(job_id) {
                let x = document.getElementById("unpublishbutton");
                if (x.style.display === "none") {
                    x.style.display = "block";
                } else {
                    x.style.display = "none";
                }
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                Marketplace.unpublishjob(job_id, {published: false}, auth)


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
            showDrawer() {
                this.visible = true
            },
            onClose() {
                this.visible = false
            },
            completeAppointment(popup_data, form_data) {
                let payload = {
                    data: {
                        title: form_data.title,
                        description: form_data.description
                    },
                    from: popup_data.appointment_props.start_value.value,
                    to: popup_data.appointment_props.end_value.value,
                    date: format(
                        popup_data.appointment_props.start_value.value,
                        "YYYY-MM-DD"
                    )
                };
                this.appointments.push(payload);
                this.new_appointment = {
                    description: null,
                    title: null
                };
                popup_data.close_popup = true;
            }
        }


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
