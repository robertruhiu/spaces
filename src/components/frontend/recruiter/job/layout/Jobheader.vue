<template>
  <div>
    <show-at breakpoint="mediumAndBelow">
      <a-layout-header :style="{width: '100%',backgroundColor:'#004ec7',height:'5rem',padding: '1px 30px 0',
            borderBottom: '1px solid #e8e8e8'}">
        <a style="color: white;line-height: 13px;font-size: 15px;font-weight:bold;margin-top: 15%">
          {{job.title}}</a>


      </a-layout-header>
    </show-at>

    <a-affix offsetTop="this.top">
      <hide-at breakpoint="mediumAndBelow">

        <a-layout-header
            :style="{width: '100%',backgroundColor:'#004ec7',height:'100px',padding: '1px 30px 0',borderBottom: '1px solid #e8e8e8' }">

          <a-row>
            <a-col :span="22">

                            <span>
                                <a style="color: white;line-height: 13px;font-size: 17px;font-weight:bold;margin-top: 15%">
                                {{job.title}}</a>
                                <div v-if="currentUserProfile.user.is_staff" style="float: right">
                                    <div v-if="job.published">
                                        <span>
                                            <a-button type="primary" v-if="job.verified === false"
                                                      @click="verifyjob(job.id)">Verify job as paid</a-button>
                                        </span>
                                        <span style="float: right" id="unpublishbutton">
                                            <a-button type="primary"
                                                      @click="unpublishjob(job.id)">Unpublish Job</a-button>
                                        </span>

                                    </div>
                                    <div v-else>
                                        <span>
                                            <a-button type="primary" @click="publishjob(job.id)">Publish Job </a-button>
                                        </span>
                                    </div>
                                </div>
                                <span v-else>
                                    <span style="float: right" v-if="job.published">
                                        <a-button type="primary" @click="unpublishjob(job.id)">Unpublish Job</a-button>
                                    </span>

                                </span>




                                <br>




                            </span>


            </a-col>


            <a-button type="primary" @click="showDrawer">
              <a-icon type="calendar"/>
              Calendar
            </a-button>


            <a-button-group style="margin-left: 1%">
              <a-button type="primary" icon="share-alt">Share Job</a-button>
              <social-sharing :url=joburl
                              :title=job.title
                              :description=job.description
                              quote="Apply for this job at the link below."
                              :hashtags=job.tech_stack
                              inline-template>
                <network network="facebook">
                  <a-button type="primary" icon="facebook"/>
                </network>

              </social-sharing>
              <social-sharing :url=joburl
                              :title=job.title
                              :description=job.description
                              :hashtags=job.tech_stack
                              inline-template>

                <network network="twitter">
                  <a-button type="primary" icon="twitter"/>
                </network>
              </social-sharing>

            </a-button-group>


          </a-row>


        </a-layout-header>
      </hide-at>
    </a-affix>

    <a-drawer
        placement="right"
        :closable="false"
        @close="onClose"
        :visible="visible"
        :width="400"
    >
      <vue-cal xsmall class="vuecal--blue-theme"
               ref="vuecal"
               :events="events"
               default-view="day"
               :disable-views="['years', 'year', 'month','week']"


      >
      </vue-cal>


    </a-drawer>


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

import Marketplace from '@/services/Marketplace'

import ACol from "ant-design-vue/es/grid/Col";
import VueCal from 'vue-cal'
import '../../../../../assets/css/vuecal.css'
import moment from 'moment';
import UsersService from '@/services/UsersService'
import {hideAt, showAt} from 'vue-breakpoints'


export default {
  name: "Jobheader",
  data() {

    return {
      top: 0,
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
      bgColor: '#1372cc',
      joburl: '',
      events: [],
      currentUserProfile: {}


    }
  },
  components: {
    ACol,
    'vue-cal': VueCal, hideAt, showAt


  },
  async mounted() {
    moment
    const auth = {
      headers: {Authorization: 'JWT ' + this.$store.state.token}

    }
    this.currentUserProfile = (await UsersService.currentuser(this.$store.state.user.pk, auth)).data
    this.job = (await Marketplace.specificjob(this.$route.params.jobId, auth)).data
    this.joburl = `https://www.codeln.com/jobdetails/${this.job.id}`
    this.allevents = (await Marketplace.allmyjobapplicants(this.$store.state.user.pk, auth)).data
    this.alldevrequests = (await Marketplace.mydevelopers(this.$store.state.user.pk, auth)).data
    for (let i = 0; i < this.allevents.length; i++) {

      if (this.allevents[i].interviewstatus !== null) {

        let id = this.allevents[i].id
        let title = this.allevents[i].candidate.user.first_name
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
        let title = this.alldevrequests[i].developer.user.first_name
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
          .then(resp => {
            this.job.published = false
          })


    },
    publishjob(job_id) {

      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      Marketplace.unpublishjob(job_id, {published: true}, auth)
          .then(resp => {
            this.job.published = true
            Marketplace.recruiterpublished(job_id, auth)
                .then()
            Marketplace.publishedemails(job_id, auth)
                .then()

          })


    },
    verifyjob(job_id) {

      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      Marketplace.unpublishjob(job_id, {verified: true}, auth)
          .then(resp => {
            this.job.verified = true


          })


    },
    logout() {
      this.$store.dispatch('setToken', null);
      this.$store.dispatch('setUser', null)
      this.$store.dispatch('setisLoggedIn', false)
      this.$store.dispatch('setUsertype', null)
      this.$store.dispatch('setUser_id', null)
      this.$store.dispatch('setNext', null)
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
