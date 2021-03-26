<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh;">
    <CandidateSider/>
    <a-layout>

      <a-layout-content style="background-color: white">
        <DevHeader/>
        <div :style="{ padding: '5px', background: '#fff',marginTop:'0' }">

          <div style="min-height: 40vh ;padding: 1%">
            <a-row style="margin-bottom: 1%">
              <a-col :xs="{span: 24, offset: 1 }" :sm="{span: 24, offset: 2 }" :md="{span: 24, offset: 2 }"
                     :lg="{span: 20, offset: 0 }" :xl="{span: 20, offset: 0 }">

                <h3 style="margin-left: 1rem;color: #1976D2;font-weight: bold">
                  What would you like to do today?
                </h3>

              </a-col>
              <a-col :xs="{span: 24, offset: 1 }" :sm="{span: 24, offset: 2 }" :md="{span: 24, offset: 2 }"
                     :lg="{span: 4, offset: 0 }" :xl="{span:4, offset: 0 }">
                <a-switch defaultChecked @change='Available' v-model="currentUserProfile.available"/>
                <a-tooltip>
                  <template slot='title'>
                    Your profile will be published on the talent pool
                  </template>
                  Make profile public
                </a-tooltip>

              </a-col>

            </a-row>
            <a-row :gutter="16">
              <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 12, offset: 0 }"
                     :md="{span: 12, offset: 0 }"
                     :lg="{span: 10, offset: 1 }" :xl="{span: 6,offset: 0 }">
                <a-card hoverable class="cardshadow" style="width: 100%;margin-bottom: 1rem">
                  <router-link to="/assessment">
                    <div style="color: black">

                      <a-row>
                        <a-col span="24">
                          <div style="text-align: center">
                            <img class="poolavatar" src="@/assets/images/check1.svg">
                          </div>
                        </a-col>
                        <a-col span="24" style="text-align: center">
                          <p>Get Verified</p>
                          <p style="margin: 0;">Put your skills to the test</p>


                        </a-col>

                      </a-row>

                    </div>
                  </router-link>


                </a-card>

              </a-col>

              <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 12, offset: 0 }"
                     :md="{span: 12, offset: 0 }"
                     :lg="{span: 10, offset: 1 }" :xl="{span: 6,offset: 0 }">
                <a-card hoverable class="cardshadow" style="width: 100%;margin-bottom: 1rem">
                  <router-link to="/manageapplications">
                    <div style="color: black">

                      <a-row>
                        <a-col span="24">
                          <div style="text-align: center">
                            <img class="poolavatar" src="@/assets/images/resume.svg">
                          </div>
                        </a-col>
                        <a-col span="24" style="text-align: center">
                          <p>Manage applications</p>
                          <p style="margin: 0;">View and manage current jobs</p>


                        </a-col>

                      </a-row>

                    </div>
                  </router-link>


                </a-card>

              </a-col>

              <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 12, offset: 0 }"
                     :md="{span: 12, offset: 0 }"
                     :lg="{span: 10, offset: 1 }" :xl="{span: 6,offset: 0 }">
                <a-card hoverable class="cardshadow" style="width: 100%;margin-bottom: 1rem">
                  <router-link to="/jobs">
                    <div style="color: black">

                      <a-row>
                        <a-col span="24">
                          <div style="text-align: center">
                            <img class="poolavatar" src="../../../assets/images/board.svg">
                          </div>
                        </a-col>
                        <a-col span="24" style="text-align: center">
                          <p>Job board</p>
                          <p style="margin: 0;">View and apply for jobs</p>


                        </a-col>

                      </a-row>

                    </div>
                  </router-link>


                </a-card>

              </a-col>

              <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 12, offset: 0 }"
                     :md="{span: 12, offset: 0 }"
                     :lg="{span: 10, offset: 1 }" :xl="{span: 6,offset: 0 }">
                <a-card hoverable class="cardshadow" style="width: 100%;margin-bottom: 1rem">
                  <router-link to="/portfolio">
                    <div style="color: black">

                      <a-row>
                        <a-col span="24">
                          <div style="text-align: center">
                            <img class="poolavatar" src="@/assets/images/curriculum.svg">
                          </div>
                        </a-col>
                        <a-col span="24" style="text-align: center">
                          <p>My portfolio</p>
                          <p style="margin: 0;">Make your profile more appealing</p>


                        </a-col>

                      </a-row>

                    </div>
                  </router-link>


                </a-card>

              </a-col>

              <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 12, offset: 0 }"
                     :md="{span: 12, offset: 0 }"
                     :lg="{span: 10, offset: 1 }" :xl="{span: 6,offset: 0 }" v-if="loading">
                <a-card hoverable class="cardshadow" style="width: 100%;margin-bottom: 1rem">

                  <div style="color: black">

                    <a-row>
                      <a-col span="24">
                        <div style="text-align: center">
                          <img class="poolavatar" src="@/assets/images/csa.svg">
                        </div>
                      </a-col>
                      <a-col span="24" style="text-align: center">
                        <p>Developer skill
                          bridging</p>
                        <p style="margin: 0;">Play n learn with coding activities</p>


                      </a-col>

                    </a-row>

                  </div>


                </a-card>

              </a-col>

              <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 12, offset: 0 }"
                     :md="{span: 12, offset: 0 }"
                     :lg="{span: 10, offset: 1 }" :xl="{span: 6,offset: 0 }" v-else>
                <a-card hoverable class="cardshadow" style="width: 100%;margin-bottom: 1rem"
                        v-if="currentUserProfile.csa">
                  <router-link to="/bridgesdashboard">
                    <div style="color: black">

                      <a-row>
                        <a-col span="24">
                          <div style="text-align: center">
                            <img class="poolavatar" src="../../../assets/images/csa.svg">
                          </div>
                        </a-col>
                        <a-col span="24" style="text-align: center">
                          <p>Developer skill
                            bridging</p>
                          <p style="margin: 0;">Play n learn with coding activities</p>


                        </a-col>

                      </a-row>

                    </div>
                  </router-link>


                </a-card>
                <a @click="JoinCSA" v-else>
                  <a-card hoverable class="cardshadow" style="width: 100%;margin-bottom: 1rem">

                    <div style="color: black">

                      <a-row>
                        <a-col span="24">
                          <div style="text-align: center">
                            <img class="poolavatar" src="@/assets/images/csa.svg">
                          </div>
                        </a-col>
                        <a-col span="24" style="text-align: center">
                          <p>Developer skill
                            bridging</p>
                          <p style="margin: 0;">Play n learn with coding activities</p>


                        </a-col>

                      </a-row>

                    </div>


                  </a-card>
                </a>

              </a-col>

              <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 12, offset: 0 }"
                     :md="{span: 12, offset: 0 }"
                     :lg="{span: 10, offset: 1 }" :xl="{span: 6,offset: 0 }">
                <a-card hoverable class="cardshadow" style="width: 100%;margin-bottom: 1rem">
                  <a @click="showDrawer" style="color: black">
                    <div style="color: black">

                      <a-row>
                        <a-col span="24">
                          <div style="text-align: center">
                            <img class="poolavatar" src="@/assets/images/faq.svg">
                          </div>
                        </a-col>
                        <a-col span="24" style="text-align: center">
                          <p>Faq</p>
                          <p style="margin: 0;">Get your questions answered</p>


                        </a-col>

                      </a-row>

                    </div>
                  </a>


                </a-card>

              </a-col>

              <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 12, offset: 0 }"
                     :md="{span: 12, offset: 0 }"
                     :lg="{span: 10, offset: 1 }" :xl="{span: 6,offset: 0 }">
                <a-card hoverable class="cardshadow" style="width: 100%;margin-bottom: 1rem">

                    <div style="color: black">

                      <a-row>
                        <a-col span="24">
                          <div style="text-align: center">
                            <img class="poolavatar1" src="@/assets/images/freelancer.svg">
                          </div>
                        </a-col>
                        <a-col span="24" >
                          <p style="text-align: center">Access paid gigs on remote codeln</p>
                          <p v-if="currentUserProfile.remote_entry && !currentUserProfile.remote_verified" style="text-align: center">
                            <a-icon type="hourglass" spin theme="twoTone" /> profile under verification
                          </p>
                          <div style="text-align: center">
                            <a href="https://remote.codeln.com/" target="_blank"  >
                              <a-button type="primary" v-if="currentUserProfile.remote_entry && currentUserProfile.remote_verified" >
                                Go to Remote Codeln
                              </a-button>
                            </a>
                          </div>



                          <a-collapse  :bordered="false" v-if="currentUserProfile.remote_entry === false">
                            <a-collapse-panel key="1" header="How to join Remote Codeln" style="background-color: white">
                              <a-timeline style="padding: 1%">

                                <a-timeline-item>Opt into remote codeln  <a-switch defaultChecked @change='RemoteEntry' v-model="currentUserProfile.remote_entry"/></a-timeline-item>
                                <a-timeline-item>Your profile goes under review</a-timeline-item>
                                <a-timeline-item>Successful profile can now apply for gigs</a-timeline-item>
                              </a-timeline>

                            </a-collapse-panel>

                          </a-collapse>


                        </a-col>

                      </a-row>

                    </div>



                </a-card>

              </a-col>


            </a-row>
          </div>


        </div>
        <a-drawer
            title="Faqs"
            placement="right"
            :closable="false"
            :visible="visible"
            @close="onClose"
        >
          <div>
            <a-collapse default-active-key="1" :bordered="false">
              <a-collapse-panel key="1" header="What is remote Codeln">
                <p>Remote Codeln is feature to enable you to get project contracts and work on them remotely</p>
              </a-collapse-panel>
              <a-collapse-panel key="2" header="Does Codeln charge me upon employment" :disabled="false">
                <p>No. All payment is done by the employee.We charge them a 12% of your annual salary.Note this should
                  not affect your salary .
                  Rather it is our service fee model</p>
              </a-collapse-panel>
              <a-collapse-panel key="3" header="Project build protection">
                <p>All projects assigned to verify your skills are owned by Codeln.We only provide the client a demo of
                  your work and report on your perfomance</p>
              </a-collapse-panel>
              <a-collapse-panel key="4" header="How do i report issues">
                <p>Issues or questions can be asked via the chat app located on the bottom right</p>
              </a-collapse-panel>
            </a-collapse>
          </div>
        </a-drawer>


      </a-layout-content>


    </a-layout>
  </a-layout>
</template>

<script>

import UsersService from '@/services/UsersService';
import CandidateSider from "@/components/frontend/developer/layout/CandidateSider";
import DevHeader from "@/components/frontend/developer/layout/DevHeader";
import User from "@/services/UsersService";


export default {
  name: "DevDashboard",
  data() {
    return {
      currentUserProfile: {},
      loading: false,
      visible: false


    }
  },
  components: {
    DevHeader,
    CandidateSider,

  },
  async mounted() {


    if (this.$store.state.user.pk) {
      this.loading = true
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      User.currentuser(this.$store.state.user.pk, auth)
          .then(response => {
            this.$store.dispatch('setuser_object', response.data)
          })
      this.currentUserProfile = this.$store.state.user_object
      this.loading = false


    }


  },


  methods: {

    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
    navigateTo(route) {
      this.$router.push(route)
    },
    Available() {

      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }


      UsersService.updatepatch(this.$store.state.user.pk, {available: this.currentUserProfile.available}, auth)
          .then(resp => {

            return resp


          })
          .catch(error => {

            return error


          });


    },
    RemoteEntry() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }


      UsersService.updatepatch(this.$store.state.user.pk, {remote_entry: this.currentUserProfile.remote_entry}, auth)
          .then(resp => {

            return resp


          })
          .catch(error => {

            return error


          });

    },
    JoinCSA() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }


      UsersService.updatepatch(this.$store.state.user.pk, {csa: true}, auth)
          .then(() => {

            this.$router.push({
              name: 'bridgesdashboard'
            })


          })
          .catch(error => {

            return error


          });


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
.poolavatar1 {
  width: 25%;
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

.hellocard {


  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;

  background: #004EC7;
  border-radius: 0;
  margin-bottom: 1rem;
  color: white;


}

.cardshadow {

  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;

  background: white;
  border-radius: 0;
  height: 13rem;
}


.poolavatar {
  width: 30%;
  margin-top: 0.5rem;
}

</style>
