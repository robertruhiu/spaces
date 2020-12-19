<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh;background-color:#F8FAFB ">

    <RecruiterSider/>

    <a-layout :style="{ backgroundColor:'#F8FAFB' }">


      <a-layout-content>
        <a-card class="hellocard" :bordered="false">

          <a-row style="color: white">
            <a-col span="12">
              <a-breadcrumb>
                <a-breadcrumb-item><a @click="$router.push('/recruiter')" style="color: white">Home</a>
                </a-breadcrumb-item>
                <a-breadcrumb-item><a @click="$router.push('/managejobs')" style="color: white">Manage Jobs</a>
                </a-breadcrumb-item>
                <a-breadcrumb-item><a @click="$router.push({name:'job',params: { jobId: application.job.id }})" style="color: white">{{application.job.title}}</a>
                </a-breadcrumb-item>

                <a-breadcrumb-item style="color: white">Candidate Profile</a-breadcrumb-item>


              </a-breadcrumb>
              <span style="font-size: 1.7rem;font-family: sofia_prosemibold;margin-bottom: 0;color: white">
                {{ currentUserProfile.user.first_name }} {{ currentUserProfile.user.last_name }}</span>


            </a-col>


          </a-row>


        </a-card>


        <a-row style="padding: 1% 1%">
          <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }" :md="{span: 16, offset: 0 }"
                 :lg="{span: 16, offset: 0 }" :xl="{span: 16,offset: 0 }" style=" padding: 4px 20px">
            <div class="profile" style="padding-bottom: 2%">
              <a-row>

                <a-col :span="22" v>
                  <p>About</p>
                  <p>{{ currentUserProfile.about }}</p>

                </a-col>

              </a-row>


              <div style="margin-top: 0.5rem" >
                <a-row>
                  <a-col :span="12" class="spacer">
                    <a-icon type="mail"/>
                    : {{ currentUserProfile.user.email }}

                  </a-col>
                  <a-col :span="12" class="spacer">
                                <span>
                                    Salary expectations: ${{ currentUserProfile.salary }} monthly

                            </span>
                  </a-col>
                  <a-col :span="6">
                                <span>
                                    <a-icon type="linkedin"/> :
                                    <a :href="currentUserProfile.linkedin_url" target='_blank'> Linkedin profile</a>



                            </span>
                  </a-col>
                  <a-col :span="6">
                                <span> <a-icon type="github"/> :

                                    <a :href="currentUserProfile.github_repo" target='_blank'>Github profile </a>


                            </span>
                  </a-col>
                  <a-col :span="6">
                                <span>
                                    <a-icon type="file-pdf"/> :
                                    <a :href="cv" target='_blank'> Cv link</a>


                            </span>
                  </a-col>


                </a-row>


              </div>

              <a-row style="margin-top: 1rem">
                <a-col :span="6">
                  Experience <br>
                  <a-tag color="#F0F6FD" style="color:#007BFF;">
                    {{ currentUserProfile.years }} years
                  </a-tag>
                </a-col>
                <a-col :span="10">
                                <span>
                                    Availability <br>
                                <a-tag color="#F0F6FD" style="color:#007BFF;">
                                 {{ currentUserProfile.availabilty }}
                            </a-tag>
                            </span>
                </a-col>
                <a-col :span="6">
                                <span>
                                    Location <br>
                                <a-tag color="#F0F6FD" style="color:#007BFF;">
                                 {{ currentUserProfile.country }}
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

                  <div v-if="takenload">
                    <a-skeleton active/>

                  </div>
                  <div v-else>
                    <div v-if="takenquizzes.length>0">
                      <div v-for="takenquiz in takenquizzes" v-bind:key="takenquiz">
                        {{ takenquiz.quiz.subject.name }}:
                        <a-progress :percent="takenquiz.score"/>
                      </div>
                    </div>
                    <div v-else>
                      <a-empty/>
                    </div>

                  </div>


                </a-tab-pane>

                <a-tab-pane key="2">
                                    <span slot="tab">
                                        <a-icon type="solution"/>
                                        Projects portfolio
                                    </span>

                  <div v-if="portfolioload">
                    <a-skeleton active/>

                  </div>
                  <div v-else style="padding:0 2%">
                    <div v-if="portoliolist.length>0">
                      <div style="border-bottom: 1px solid #e8e8e8;padding-bottom: 2%;padding-top: 2%"
                           v-for="item in portoliolist" v-bind:key="item.id">
                        <p style="font-weight: 700">{{ item.title }}</p>
                        <p v-if="item.tech_tags">
                          Tools used:
                          <a-tag v-for="tag in item.tech_tags.split(',')" color="blue"
                                 :key="tag">
                            {{ tag }}
                          </a-tag>

                        </p>
                        <p>{{ item.description }}
                        </p>
                        <a :href=" item.demo" target="_blank">view project</a>

                      </div>
                    </div>
                    <div v-else>
                      <a-empty/>
                    </div>


                  </div>


                </a-tab-pane>

                <a-tab-pane key="3">
                                    <span slot="tab">
                                        <a-icon type="hourglass"/>
                                        Work experience
                                    </span>

                  <div v-if="workload">
                    <a-skeleton active/>

                  </div>
                  <div v-else style="padding:2%">
                    <div v-if="experienceslist.length>0">
                      <a-timeline>
                        <a-timeline-item v-for="item in experienceslist" v-bind:key="item.id">
                          <p style="font-weight: 700">{{ item.title }}</p>
                          <p><span><a-icon type="bank"/>  {{ item.company }} <a-icon
                              type="environment"/>  {{ item.location }} <a-icon
                              type="hourglass"/>  {{ item.duration }}months</span>
                          </p>
                          <p v-if="item.tech_tags">
                            Technologies used:
                            <a-tag v-for="tag in item.tech_tags.split(',')" color="blue"
                                   :key="tag">
                              {{ tag }}
                            </a-tag>

                          </p>


                          <p>{{ item.description }}</p>

                        </a-timeline-item>

                      </a-timeline>
                    </div>

                    <div v-else>
                      <a-empty/>
                    </div>


                  </div>

                </a-tab-pane>
              </a-tabs>
            </div>


          </a-col>


          <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }" :md="{span: 8, offset: 0 }"
                 :lg="{span: 8, offset: 0 }" :xl="{span: 8,offset: 0 }"
                 style="margin-top: 0.4%;padding-left: 15px;padding-right: 15px">
            <div class="actions">
              <p>Skill tags</p>
              <p>Candidate skill tags(what candidate says they can do.You can asign a
                project to test)
              </p>
              <p>
                                <span style="" v-for="skill in skilltags" v-bind:key="skill.id">
                                <a-tag color="#F0F6FD" style="color:#007BFF;">
                                    {{ skill }}
                                </a-tag>
                            </span>
              </p>
              <div v-if="application.test_stage ==='complete'">
                <a>View Project Report</a>

              </div>
              <div v-else>

                <a style="" v-if="application.project"
                   @click="navigateTo({name:'pickedprojectdetails',params:{applicationId: application.id}})">
                  <strong>Project Assigned:</strong> {{ application.project.name }}
                </a>
                <a-button :size="small"
                          style="background-color: #9c27b0;color: white"
                          v-if="application.stage === 'test' && application.project === null"
                          @click="navigateTo({name:'projectlist'})">
                  <a-icon type="codepen"/>
                  Assign test
                </a-button>


                <p v-if="application.projectstarttime">
                  Project starttime: {{ application.projectstarttime }}
                </p>
              </div>


            </div>


          </a-col>
        </a-row>

        <a-modal
            title="Project assignments "
            v-model="visible"
            @ok="handleOk"
            style="top: 60px;"
            :footer="null"


        >
          <p style="text-align: center;">Would you like to get a project recommendation or pick a
            project?</p>
          <a-row :gutter="16">
            <a-col :span="12">
              <a @click="navigateTo({name:'projectlist'})">
                <div style="border: 1px solid #e8e8e8;padding: 2%;">
                  <img style="margin-left: 25%;width: 50%;margin-right: 25%"
                       src="../../../../assets/images/pick.png">
                  <p style="text-align: center">Pick one by myself</p>

                </div>

              </a>
            </a-col>
            <a-col :span="12">
              <a @click="navigateTo({name:'projectdetails',params:{jobId:job.id,candidateId: currentUser.id,applicationId:application.id}})">
                <div style="border: 1px solid #e8e8e8;padding: 2%;">
                  <img style="margin-left: 25%;width: 50%;margin-right: 25%;"
                       src="../../../../assets/images/recommend.png">
                  <p style="text-align: center">Get recommendation</p>

                </div>

              </a>
            </a-col>
          </a-row>
          <div v-if="recentprojects.length>0">
            <p>My Recent projects</p>
            <p v-for="project in recentprojects"
               :key="project">
              <a v-if="recentprojects"
                 @click="navigateTo({name:'pickedprojectdetails',params:{projectId:project.id,jobId:job.id,candidateId: currentUser.id,applicationId:application.id}})">
                {{ project.name }}
              </a>
            </p>


          </div>

        </a-modal>


      </a-layout-content>

    </a-layout>
  </a-layout>
</template>


<script>


import UsersService from '@/services/UsersService'
import RecruiterSider from "../layout/RecruiterSider";
import Marketplace from '@/services/Marketplace'
import ARow from "ant-design-vue/es/grid/Row";
import ACol from "ant-design-vue/es/grid/Col";

import moment from 'moment';
import QuizService from '@/services/QuizService';


export default {
  name: 'candidateprofile',
  data() {

    return {
      currentUserProfile: {},
      visible: false,
      inputVisible: false,
      inputValue: '',
      application: {},
      experienceslist: [],
      portoliolist: [],
      job: {},
      recentprojects: [],
      events: [],
      picked: true,
      takenquizzes: [],
      cv: '',
      takenload: false,
      workload: false,
      portfolioload: false
    }
  },
  components: {
    ACol,
    ARow,

    RecruiterSider,


  },
  async mounted() {
    moment
    this.ApplicationId = this.$store.state.route.params.applicationId
    this.takenload = true
    this.workload = true
    this.portfolioload = true
    this.currentApplication()
  },
  methods: {
    currentApplication() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      };
      Marketplace.retrieveapplication(this.ApplicationId, auth)
          .then(response => {
            this.application = response.data
            this.job = this.application.job
            this.fetchDevprofile()

          })

    },
    fetchDevprofile() {


      if (this.$store.state.user.pk) {
        this.currentUserProfile = this.application.candidate


        if (this.currentUserProfile.skills) {
          this.skilltags = this.currentUserProfile.skills.split(',');
        }
        if (this.currentUserProfile.availabilty) {
          this.availabiltytags = this.currentUserProfile.availabilty.split(',');
        }

        if (this.currentUserProfile.verified_skills) {
          this.verified = true
          this.verified_skills = this.currentUserProfile.verified_skills.split(',');
        }

        this.fetchWorkExperience()


      }
    },
    fetchQuizzes() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }

      QuizService.taken(this.currentUserProfile.id, auth)
          .then(resp => {
            this.takenquizzes = resp.data
            this.takenload = false

          })
          .catch(error => {
            this.takenload = false
            return error
          })

    },
    fetchWorkExperience() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }

      UsersService.experience(this.currentUserProfile.id, auth)
          .then(resp => {
            this.experienceslist = resp.data
            this.workload = false
            this.fetchPortfolio()

          })
          .catch(error => {
            this.workload = false
            this.fetchPortfolio()
            return error
          })


    },
    fetchPortfolio() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }

      UsersService.portfolio(this.currentUserProfile.id, auth)
          .then(resp => {
            this.portfoliolist = resp.data

            this.portfolioload = false
            this.fetchQuizzes()


          })
          .catch(error => {
            this.portfolioload = false
            return error
          })


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
    showModal() {
      this.visible = true

    },
    handleOk() {

      this.visible = false
    },
  },

}

</script>

<style scoped>
.hellocard {
  height: 8rem;
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;
  background: #004EC7;
  border-radius: 0;
  margin-bottom: 1rem;
  color: white;

}

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

.spacer {
  margin-bottom: 2%;
}

</style>
