<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <CandidateSider/>
    <a-layout>

      <a-layout-content style="background-color: white">
        <a-card class="hellocard" :bordered="false">


              <a-breadcrumb>
                <a-breadcrumb-item><a @click="$router.push('/developer')" style="color: white">Dashboard</a>
                </a-breadcrumb-item>
                <a-breadcrumb-item style="color: white">Manage Applications</a-breadcrumb-item>

              </a-breadcrumb>
              <span style="font-size: 1.7rem;font-family: sofia_prosemibold;margin-bottom: 0;color: white">
                Track your applications </span>


        </a-card>

        <div :style="{ padding: '5px', background: '#fff',marginTop:'0rem' }">

          <div class="cardScroll1">
            <a-tabs defaultActiveKey="1">

              <a-tab-pane key="1">
                                <span slot="tab" style="font-family: sofia_prolight">
                                    Active applications <a-tag
                                    color="blue">{{ applications.length - withdrawn.length }}</a-tag>

                                </span>
                <a-row :gutter="16" style="padding: 1%">


                  <a-col class="tracker" :xs="{span: 24, offset: 0  }" :sm="{span: 12, offset: 0 }"
                         :md="{span: 12, offset: 0 }"
                         :lg="{span: 6, offset: 0 }" :xl="{span: 6,offset: 0 }">
                    <a-row class='managecard'>
                      <a-col span="24">
                        <div style="text-align:center;padding: 5%;">
                          <p class="cardTitle">
                            Applications</p>
                        </div>
                        <a-progress :percent="100" strokeColor="#4DB3D3" :showInfo="false"/>

                      </a-col>
                      <a-col span="24">
                        <div style="padding: 5%">
                          <div v-if="waiting">
                            <div style="text-align: center">
                              <a-skeleton active/>
                            </div>
                          </div>
                          <div v-else class="cardScroll">
                            <a-timeline v-if="active.length>0" style="padding-top: 1%">
                              <a-timeline-item v-for="application in active"
                                               v-bind:key="application.id">
                                <span class="jobTitle"
                                >{{
                                    application.title
                                  }}</span>
                                <br>
                                <div class="jobContent">
                                  Company : {{ application.company }}

                                  <br>
                                  <span>
                                                Stage:
                                            <a-tag color="#9C27B0"
                                                   style="text-align: center;width: 4rem;">
                                                {{ application.stage }}
                                            </a-tag>
                                    </span>
                                  <p>Application date: {{ application.application_date }}</p>


                                  <p v-if="application.stage === 'pending'">
                                                    <span><a
                                                        @click="acceptapplication(application.key,application.type)">accept</a></span>
                                    <a style="color: red;margin-left: 1rem"
                                       @click="showModal(application.key,application.type,application.stage)">
                                      withdraw
                                    </a>
                                  </p>
                                  <p v-else>

                                    <a
                                        @click="showModal(application.key,application.type,application.stage)">
                                      withdraw
                                    </a>
                                  </p>


                                </div>


                              </a-timeline-item>

                            </a-timeline>
                          </div>

                        </div>

                      </a-col>
                    </a-row>


                  </a-col>

                  <a-col class="tracker" :xs="{span: 24, offset: 0  }" :sm="{span: 12, offset: 0 }"
                         :md="{span: 12, offset: 0 }"
                         :lg="{span: 6, offset: 0 }" :xl="{span: 6,offset: 0 }">
                    <a-row class='managecard'>
                      <a-col span="24">
                        <div style="text-align:center;padding: 5%;">
                          <p class="cardTitle">
                            Testing</p>
                        </div>
                        <a-progress :percent="100" strokeColor="#4DB3D3" :showInfo="false"/>

                      </a-col>
                      <a-col span="24">
                        <div style="padding: 5%">
                          <div v-if="waiting">
                            <div style="text-align: center">
                              <a-skeleton active/>
                            </div>
                          </div>
                          <div v-else class="cardScroll">

                            <a-timeline v-if="testing.length>0" style="padding-top: 1%">
                              <a-timeline-item v-for="application in testing"
                                               v-bind:key="application.id">
                                <span class="jobTitle">{{ application.title }}</span>
                                <br>
                                <div class="jobContent">
                                  Company : {{ application.company }}

                                  <br>
                                  <p>Application date: {{ application.application_date }}</p>
                                  <div v-if="application.project">

                                    Project assigned: <span></span>
                                    <a @click="navigateTo({name:'assignedproject',params:{projectId:application.project.id,applicationId:application.key,type:application.type}})">
                                      {{ application.project.name }}
                                    </a>


                                  </div>
                                  <div v-else>
                                    Project assignment pending


                                  </div>
                                  <a
                                      @click="showModal(application.key,application.type,application.stage)">
                                    withdraw

                                  </a>

                                </div>


                              </a-timeline-item>

                            </a-timeline>
                          </div>
                        </div>

                      </a-col>
                    </a-row>


                  </a-col>

                  <a-col class="tracker" :xs="{span: 24, offset: 0  }" :sm="{span: 12, offset: 0 }"
                         :md="{span: 12, offset: 0 }"
                         :lg="{span: 6, offset: 0 }" :xl="{span: 6,offset: 0 }">
                    <a-row class='managecard'>
                      <a-col span="24">
                        <div style="text-align:center;padding: 5%;">
                          <p class="cardTitle">
                            Interview</p>
                        </div>
                        <a-progress :percent="100" strokeColor="#0868AC" :showInfo="false"/>

                      </a-col>
                      <a-col span="24">
                        <div style="padding: 5%">
                          <div v-if="waiting">
                            <div style="text-align: center">
                              <a-skeleton active/>
                            </div>
                          </div>
                          <div v-else class="cardScroll">
                            <a-timeline v-if="interview.length >0">
                              <a-timeline-item v-for="application in interview"
                                               v-bind:key="application.id">
                                <span class="jobTitle">{{ application.title }}</span>
                                <br>
                                <div class="jobContent">
                                  Company : {{ application.company }}

                                  <br>
                                  <p>Application date: {{ application.application_date }}</p>
                                  <div v-if="application.start !=='Invalid date'">
                                    Interview: <span><a style="margin-left: 2%"
                                                        type="primary"
                                                        size="small"
                                                        @click="showEvent(application.key,application)"><a-icon
                                      type="calendar"/>View</a></span>


                                  </div>
                                  <div v-else>
                                    Interview time not yet set


                                  </div>

                                </div>

                              </a-timeline-item>

                            </a-timeline>
                          </div>
                        </div>

                      </a-col>
                    </a-row>


                  </a-col>

                  <a-col :xs="{span: 24, offset: 0  }" :sm="{span: 12, offset: 0 }"
                         :md="{span: 12, offset: 0 }"
                         :lg="{span: 6, offset: 0 }" :xl="{span: 6,offset: 0 }" class="tracker">
                    <a-row class='managecard'>
                      <a-col span="24">
                        <div style="text-align:center;padding: 5%;">
                          <p class="cardTitle">
                            Offers</p>
                        </div>
                        <a-progress :percent="100" strokeColor="#084081" :showInfo="false"/>

                      </a-col>
                      <a-col span="24">
                        <div style="padding: 5%">
                          <div v-if="waiting">
                            <div style="text-align: center">
                              <a-skeleton active/>
                            </div>
                          </div>
                          <div v-else class="cardScroll">
                            <a-timeline v-if="offers.length >0">
                              <a-timeline-item v-for="application in offers"
                                               v-bind:key="application.id">
                                <span class="jobTitle">{{ application.title }}</span>
                                <br>
                                <div class="jobContent">
                                  Company : {{ application.company }}

                                  <br>
                                  Stage:
                                  <a-tag color="#9C27B0"
                                         style="text-align: center;width: 4rem;">
                                    {{ application.stage }}
                                  </a-tag>
                                  <p>Application date: {{ application.application_date }}</p>
                                </div>
                                <a-button type="primary" size="small"
                                          @click="showModal(application.key,application.type,application.stage)">
                                  withdraw
                                </a-button>


                              </a-timeline-item>

                            </a-timeline>
                          </div>
                        </div>

                      </a-col>
                    </a-row>


                  </a-col>


                </a-row>
              </a-tab-pane>
              <a-tab-pane key="2" forceRender>
                                <span slot="tab" style="font-family: sofia_prolight">
                                    Withdrawn applications <a-tag color="purple">{{ withdrawn.length }}</a-tag>
                                </span>
                <div v-if="withdrawn.length > 0">
                  <a-row :gutter="16" style="padding: 1%">
                    <a-col :xs="{span: 24, offset: 0  }" :sm="{span: 12, offset: 0 }"
                           :md="{span: 12, offset: 0 }"
                           :lg="{span: 6, offset: 0 }" :xl="{span: 6,offset: 0 }" class="tracker">
                      <a-row class='managecard'>
                        <a-col span="24">
                          <div style="text-align:center;padding: 5%;">
                            <p class="cardTitle">
                              Withdrawn</p>
                          </div>
                          <a-progress :percent="100" strokeColor="#084081" :showInfo="false"/>

                        </a-col>
                        <a-col span="24">
                          <div style="padding: 5%">
                            <div v-if="waiting">
                              <div style="text-align: center">
                                <a-skeleton active/>
                              </div>
                            </div>
                            <div v-else class="cardScroll">
                              <a-timeline v-if="withdrawn.length >0">
                                <a-timeline-item v-for="application in withdrawn"
                                                 v-bind:key="application.id">
                                  <span class="jobTitle">{{ application.title }}</span>
                                  <br>
                                  <div class="jobContent">
                                    Company : {{ application.company }}

                                    <br>
                                    Stage:
                                    <a-tag color="#9C27B0"
                                           style="text-align: center;width: 4rem;">
                                      {{ application.stage }}
                                    </a-tag>
                                    <p>Application date: {{ application.application_date }}</p>
                                  </div>
                                  <span style="font-weight: bold">Rejection reasons</span>
                                  <div v-if="application.rejectionreason.length >0">
                                    <p>
                                      {{ application.rejectionreason }}

                                    </p>

                                  </div>
                                  <div v-if="application.rejectioncomment.length >0">
                                    <span style="font-weight: bold">Additional comment</span>
                                    <p>{{ application.rejectioncomment }}</p>
                                  </div>


                                </a-timeline-item>

                              </a-timeline>
                            </div>
                          </div>

                        </a-col>
                      </a-row>


                    </a-col>
                  </a-row>
                </div>
                <a-empty v-else/>
              </a-tab-pane>

            </a-tabs>
          </div>


          <a-modal
              :title="currentinterview.company"
              v-model="visible"


          >
            <p>Interview starttime : {{ currentinterview.start }}</p>
            <p>Interview endtime {{ currentinterview.end }}</p>
            <template slot="footer">
              <a-button key="submit" type="danger" ghost :loading="loading"
                        @click="Withdrawapplicationinterview(currentinterview.key,currentinterview.type)">
                reject invite
              </a-button>
              <a-button
                  type="primary"
                  html-type="submit"
                  @click="saveEvent(interviewerapplicationid,interviewstart,interviewend)"
              >
                Accept
              </a-button>

            </template>
          </a-modal>

          <a-modal title="" v-model="check">
            <template slot="footer">


              <a-button v-if="stage==='new' || stage === 'active' || stage === 'pending'" key="submit"
                        type="primary" :loading="loading" @click="Withdrawapplication(key,type)">
                Yes
              </a-button>
              <a-button v-else-if="stage === 'test'" key="submit" type="primary" :loading="loading"
                        @click="Withdrawapplicationtest(key,type)">
                Yes
              </a-button>
              <a-button v-else-if="stage === 'interview'" key="submit" type="primary" :loading="loading"
                        @click="Withdrawapplicationinterview(key,type)">
                Yes
              </a-button>
              <a-button v-else-if="stage === 'offer'" key="submit" type="primary" :loading="loading"
                        @click="Withdrawapplicationoffer(key,type)">
                Yes
              </a-button>
            </template>
            <p>Are you sure you want to withdraw your application</p>

          </a-modal>


        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>

</template>

<script>
class Application {
  constructor(id, title, company, stage, type, start, end, color, project, rejectioncomment, rejectionreason, application_date) {
    this.key = id;
    this.title = title
    this.company = company
    this.stage = stage
    this.type = type
    this.start = start
    this.end = end
    this.color = color
    this.project = project
    this.rejectioncomment = rejectioncomment
    this.rejectionreason = rejectionreason
    this.application_date = application_date


  }
}

import CandidateSider from "@/components/frontend/developer/layout/CandidateSider";
import ARow from "ant-design-vue/es/grid/Row";
import ACol from "ant-design-vue/es/grid/Col";
import Marketplace from '@/services/Marketplace'
import moment from 'moment';

export default {
  name: "ManageApplications",
  data() {
    return {
      applications: [],
      active: [],
      testing: [],
      interview: [],
      offers: [],
      visible: false,
      currentinterview: {},
      waiting: false,
      withdrawn: [],
      check: false,
      stage: '',
      type: '',
      key: '',
      loading: false


    }
  },
  components: {
    ACol,
    ARow,
    CandidateSider,


  },
  async mounted() {

    this.waiting = true
    this.fetchJobsapplied()


  },

  watch: {
    applications: function () {
      this.applications.forEach(application => {
        if (application.stage === 'active' || application.stage === 'new' || application.stage === 'pending') {
          this.active.push(application)
        } else if (application.stage === 'test') {
          this.testing.push(application)
        } else if (application.stage === 'interview') {
          this.interview.push(application)
        } else if (application.stage === 'offer') {
          this.offers.push(application)
        } else if (application.stage === 'rejected') {
          this.withdrawn.push(application)
        }
      })
    }
  },

  methods: {
    fetchJobsapplied() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      Marketplace.manageApplicationBoard(this.$store.state.user.pk, auth)
          .then(resp => {
            this.alldevjobs = resp.data

            this.AppliedjobsCompute()

          })
    },
    fetchPickedfromTalentpool() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      Marketplace.pickedapplications(this.$store.state.user.pk, auth)
          .then(resp => {
            this.alldevjobpicked = resp.data
            this.PickedCompute()
          })
    },
    AppliedjobsCompute() {
      this.alldevjobs.forEach(job => {

        let id = job.id
        let title = job.job.title
        let company = job.job.company
        let stage = job.stage
        let type = 'job'
        let project = job.project
        let start = moment(job.interviewstarttime).format("YYYY-MM-DD HH:mm:ss")
        let end = moment(job.interviewendtime).format("YYYY-MM-DD HH:mm:ss")
        let color = job.eventcolor
        let rejectioncomment = ''
        if (job.rejectioncomment) {
          rejectioncomment = job.rejectioncomment

        }
        let rejectionreason = ''
        if (job.rejectionreason) {
          rejectionreason = job.rejectionreason

        }
        let application_date = moment(job.created).format("YYYY-MM-DD ")
        let one_job_applied = new Application(
            id, title, company, stage, type, start, end, color, project, rejectioncomment, rejectionreason, application_date
        );
        this.applications.push(one_job_applied)

      })
      this.waiting = false


    },

    PickedCompute() {
      this.alldevjobpicked.forEach(picked => {
        let id = picked.id
        let title = 'Talent pool pick'
        let company = picked.owner.company
        let stage = picked.stage
        let type = 'talent'
        let project = picked.project
        let start = moment(picked.interviewstarttime).format("YYYY-MM-DD HH:mm:ss")
        let end = moment(picked.interviewendtime).format("YYYY-MM-DD HH:mm:ss")
        let color = picked.eventcolor
        let one_job_applied = new Application(
            id, title, company, stage, type, start, end, color, project
        );
        this.applications.push(one_job_applied)


      })
      this.waiting = false


    },


    navigateTo(route) {
      this.$router.push(route)
    },
    showEvent(application_id, application) {
      this.visible = true
      this.currentinterview = application
    },
    showModal(key, type, stage) {
      this.key = key
      this.type = type
      this.stage = stage

      this.check = true;
    },

    // set of withdraws per stage
    Withdrawapplication(application, type) {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      };
      this.loading = true;
      if (type === 'job') {
        Marketplace.pickreject(application, {
          stage: 'rejected',
          selected: false,
        }, auth)
            .then(resp => {

                  for (let i = 0; i < this.active.length; i++) {
                    if (this.active[i].key === application) {
                      this.active[i].stage = 'rejected'
                      this.withdrawn.push(this.active[i])
                      let index = this.active.indexOf(this.active[i]);
                      this.active.splice(index, 1);

                    }
                  }
                  return resp

                }
            )
            .catch()

      } else {
        Marketplace.candidatemanager(application, {
          stage: 'rejected',
          interviewstarttime: null,
          interviewendtime: null,
          test_stage: null,
          project: null,
          report: null,
          interviewstatus: null,
          projectstarttime: null,
          offerstatus: null,
          offerletter: null,
          demolink: null
        }, auth)
            .then(resp => {
                  for (let i = 0; i < this.active.length; i++) {
                    if (this.active[i].key === application) {
                      this.active[i].stage = 'rejected'
                      this.withdrawn.push(this.active[index])
                      let index = this.active.indexOf(this.active[i]);
                      this.active.splice(index, 1);

                    }
                  }
                  return resp

                }
            )
            .catch()

      }
      this.loading = false;
      this.check = false;


    },
    acceptapplication(application, type) {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      };
      if (type === 'job') {
        Marketplace.pickreject(application, {
          stage: 'active',

        }, auth)
            .then(resp => {
                  for (let i = 0; i < this.active.length; i++) {
                    if (this.active[i].key === application) {
                      this.active[i].stage = 'active'

                    }
                  }


                  return resp

                }
            )
            .catch()

      } else {
        Marketplace.candidatemanager(application, {
          stage: 'active',
          interviewstarttime: null,
          interviewendtime: null,
          test_stage: null,
          project: null,
          report: null,
          interviewstatus: null,
          projectstarttime: null,
          offerstatus: null,
          offerletter: null,
          demolink: null
        }, auth)
            .then(resp => {

                  return resp

                }
            )
            .catch()

      }

    },

    Withdrawapplicationtest(application, type) {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      };
      this.loading = true;
      if (type === 'job') {
        Marketplace.pickreject(application, {
          stage: 'rejected',
          selected: false,
        }, auth)
            .then(resp => {
                  for (let i = 0; i < this.testing.length; i++) {
                    if (this.testing[i].key === application) {
                      this.testing[i].stage = 'rejected'
                      this.withdrawn.push(this.testing[i])
                      let index = this.testing.indexOf(this.testing[i]);
                      this.testing.splice(index, 1);
                    }
                  }
                  return resp

                }
            )
            .catch()

      } else {
        Marketplace.candidatemanager(application, {
          stage: 'rejected',
          interviewstarttime: null,
          interviewendtime: null,
          test_stage: null,
          project: null,
          report: null,
          interviewstatus: null,
          projectstarttime: null,
          offerstatus: null,
          offerletter: null,
          demolink: null
        }, auth)
            .then(resp => {
                  for (let i = 0; i < this.testing.length; i++) {
                    if (this.testing[i].key === application) {
                      this.testing[i].stage = 'rejected'
                      this.withdrawn.push(this.testing[i])
                      let index = this.testing.indexOf(this.testing[i]);
                      this.testing.splice(index, 1);
                    }
                  }
                  return resp

                }
            )
            .catch()

      }
      this.loading = false;
      this.check = false;


    },

    Withdrawapplicationinterview(application, type) {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      };
      this.loading = true;
      if (type === 'job') {
        Marketplace.pickreject(application, {
          stage: 'rejected',
          selected: false,
        }, auth)
            .then(resp => {
                  for (let i = 0; i < this.interview.length; i++) {
                    if (this.interview[i].key === application) {
                      this.interview[i].stage = 'rejected'
                      this.withdrawn.push(this.interview[i])
                      let index = this.interview.indexOf(this.interview[i]);
                      this.interview.splice(index, 1);
                    }
                  }
                  return resp

                }
            )
            .catch()

      } else {
        Marketplace.candidatemanager(application, {
          stage: 'rejected',
          interviewstarttime: null,
          interviewendtime: null,
          test_stage: null,
          project: null,
          report: null,
          interviewstatus: null,
          projectstarttime: null,
          offerstatus: null,
          offerletter: null,
          demolink: null
        }, auth)
            .then(resp => {
                  for (let i = 0; i < this.interview.length; i++) {
                    if (this.interview[i].key === application) {
                      this.interview[i].stage = 'rejected'
                      this.withdrawn.push(this.interview[i])
                      let index = this.interview.indexOf(this.interview[i]);
                      this.interview.splice(index, 1);
                    }
                  }
                  return resp

                }
            )
            .catch()

      }
      this.loading = false;
      this.check = false;


    },

    Withdrawapplicationoffer(application, type) {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      };
      this.loading = true;
      if (type === 'job') {
        Marketplace.pickreject(application, {
          stage: 'rejected',
          selected: false,
        }, auth)
            .then(resp => {
                  for (let i = 0; i < this.offers.length; i++) {
                    if (this.offers[i].key === application) {
                      this.offers[i].stage = 'rejected'
                      this.withdrawn.push(this.offers[i])
                      let index = this.offers.indexOf(this.offers[i]);
                      this.offers.splice(index, 1);
                    }
                  }
                  return resp

                }
            )
            .catch()

      } else {
        Marketplace.candidatemanager(application, {
          stage: 'rejected',
          interviewstarttime: null,
          interviewendtime: null,
          test_stage: null,
          project: null,
          report: null,
          interviewstatus: null,
          projectstarttime: null,
          offerstatus: null,
          offerletter: null,
          demolink: null


        }, auth)
            .then(resp => {
                  for (let i = 0; i < this.offers.length; i++) {
                    if (this.offers[i].key === application) {
                      this.offers[i].stage = 'rejected'
                      this.withdrawn.push(this.offers[i])
                      let index = this.offers.indexOf(this.offers[i]);
                      this.offers.splice(index, 1);
                    }
                  }
                  return resp

                }
            )
            .catch()

      }
      this.loading = false;
      this.check = false;


    }
  }

}
</script>

<style scoped>
.managecard {
  border: 1px solid #1876d21c;
  min-height: 65vh;
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;

}

.hellocard {
  height: 8rem;
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;
  background: #004EC7;
  border-radius: 0;
  color: white;

}

.cardTitle {
  color: #1976D2;
  font-weight: bold;
  text-align: center;
  font-size: 1rem;
  font-family: sofia_probold
}

.jobTitle {
  font-family: sofia_probold;
  text-decoration: underline;
  text-decoration-color: #1F81CE
}

.jobContent {
  color: black;
  font-family: sofia_prolight
}

.cardScroll {
  height: 55vh;
  overflow: scroll;
  margin-bottom: 1rem
}
.cardScroll1 {
  height: 80vh;
  overflow: scroll;
  margin-bottom: 1rem
}

.text-muted {
  color: rgba(0, 0, 0, 0.45);
}

.tracker {
  margin-bottom: 1rem;
}

.headers {
  border-bottom: 1px solid #e8e8e8;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #1890ff;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #91d5ff;
}
</style>
