<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh;">
    <CandidateSider/>
    <a-layout>

      <a-layout-content style="background-color: white">
        <PortfolioHeader/>
        <a-row >
          <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }" :md="{span: 16, offset: 0 }"
                 :lg="{span: 16, offset: 0 }" :xl="{span: 16,offset: 0 }"
                 style=" padding-left: 15px;padding-right: 15px;">
            <div class="profile" style="padding-bottom: 2%">
              <a-row>


                <a-col :span="24">
                  <a-row>
                    <a-col :span="16">
                      <p style="">About</p>
                    </a-col>
                    <a-col :span="8">
                                            <span @click="$router.push('developerprofile')"> <a-button size="small"
                                                                                                       type="primary"
                                                                                                       icon="edit">
                                    Edit profile
                                </a-button></span>
                    </a-col>
                  </a-row>


                  <p>{{ currentUserProfile.about }}</p>
                </a-col>
              </a-row>

              <a-row style="margin-top: 0.5rem">
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
                                    <a :href="cv" target='_blank' v-if="cv"> Cv link</a>
                                  <router-link v-else to="developerprofile">upload cv</router-link>


                            </span>
                </a-col>
                <a-col :span="6">
                                <span>
                                    <a-icon type="phone"/> :
                                    {{ currentUserProfile.phone_number }}


                            </span>
                </a-col>


              </a-row>
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
                                <span style="" v-for="available in availability" v-bind:key="available">
                                <a-tag color="#F0F6FD" style="color:#007BFF;">
                                    {{ available }}
                                </a-tag>
                            </span>
                            </span>
                </a-col>
                <a-col :span="6">
                                <span>
                                    Location<br>
                                <a-tag color="#F0F6FD" style="color:#007BFF;">
                                 {{ currentUserProfile.country }}
                            </a-tag>
                            </span>
                </a-col>


              </a-row>
              <a-row>
                <a-col :span="24" style="margin-top: 1rem">
                  <a-alert
                      message="If possible please try formatting your cv in the
                                            format provided in the link below"
                      banner
                      closable
                  />
                  <p style="padding-top: 2%"><a
                      href="https://res.cloudinary.com/dfy4gylof/raw/upload/v1592833369/Great_Resume_Template_with_tips_1.docx"
                      target='_blank'> Cv format</a></p>

                </a-col>
              </a-row>
            </div>




              <div class="bio">
                <a-tabs default-active-key="1" >
                  <a-tab-pane key="1" tab="Quizzes">
                    <div v-if="dataload">
                      <div style="text-align: center">
                        <div>
                          <a-spin/>
                        </div>
                      </div>

                    </div>
                    <div v-else>
                      <div v-if="takenquizzes.length>0">
                        <div v-for="takenquiz in takenquizzes" v-bind:key="takenquiz">
                          {{ takenquiz.quiz.subject.name }}:
                          <a-progress :percent="takenquiz.score"/>
                        </div>
                      </div>
                      <div v-else>

                        <p>Take a quiz under <a @click="navigateTo({name:'assessment'})">get
                          verified</a> and it will appear here</p>
                      </div>
                    </div>
                  </a-tab-pane>
                  <a-tab-pane key="2" tab="My Projects " force-render>
                    <Myprojects/>
                  </a-tab-pane>
                  <a-tab-pane key="3" tab="Work ">
                    <Work/>
                  </a-tab-pane>
                </a-tabs>

              </div>



          </a-col>
          <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }" :md="{span: 8, offset: 0 }"
                 :lg="{span: 8, offset: 0 }" :xl="{span: 8,offset: 0 }" style="margin-top: 0.4%">
            <div class="actions">
              <a-row>
                <a-col span="24">
                  <p>Verified skills</p>

                  <p>
                                <span style="" v-for="skill in verified_skills" v-bind:key="skill">
                                <a-tag color="#BA68C8" style="color:#ffffff;margin-bottom: 1rem">
                                    {{ skill }}
                                </a-tag>
                            </span>
                  </p>
                  <p>Skill tags</p>
                  <p>Candidate skill tags(what you say you can do)
                  </p>
                  <p>
                                <span style="" v-for="skill in skills" v-bind:key="skill">
                                <a-tag color="#F0F6FD" style="color:#007BFF;margin-bottom: 1rem">
                                    {{ skill }}
                                </a-tag>
                            </span>
                  </p>
                </a-col>
              </a-row>


            </div>


          </a-col>


        </a-row>


      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>


import CandidateSider from "@/components/frontend/developer/layout/CandidateSider";
import PortfolioHeader from "@/components/frontend/developer/layout/PortfolioHeader";

import QuizService from '@/services/QuizService';
import Projects from '@/services/Projects'
import Vue from 'vue'
import VeeValidate from 'vee-validate';

import Myprojects from "@/components/frontend/developer/portfoliocomponents/Myprojects";
import Work from "@/components/frontend/developer/portfoliocomponents/work";

Vue.use(VeeValidate);

export default {
  name: "Portfolio",
  data() {

    return {
      currentUserProfile: null,
      currentUser: null,
      skills: [],
      verified_skills: [],
      experienceslist: [],
      experiences: [],
      portoliolist: [],
      portfolio: [],
      loading:false,
      takenquizzes: [],
      codelnprojects: [],
      createproject: false,
      editproject: false,
      createexperience: false,
      editexperience: false,
      currentproject: {},
      currentexperience: {},
      projecttags: [],
      experiencetags: [],
      inputVisible: false,
      inputValue: '',
      portfoliotags: [],
      inputVisible1: false,
      inputValue1: '',
      projecttitle: '',
      projectdemo: '',
      projectrepo: '',
      projectdescription: '',
      projecttech: '',
      experiencetitle: '',
      experiencecompany: '',
      experienceduration: '',
      experiencelocation: '',
      experiencetech: '',
      experiencedescription: '',
      availability: [],
      cv: '',
      updatexperience: false,
      dataload: false,
      myprojects:[]


    }
  },
  components: {

    PortfolioHeader,
    CandidateSider,
    Myprojects,Work
  },
  async mounted() {
    const auth = {
      headers: {Authorization: 'JWT ' + this.$store.state.token}

    }
    this.dataload = true
    this.currentUser = this.$store.state.user_object.user
    this.currentUserProfile = this.$store.state.user_object
    if (this.currentUserProfile.skills) {
      this.skills = this.currentUserProfile.skills.split(',');
    }
    if (this.currentUserProfile.availabilty) {
      this.availability = this.currentUserProfile.availabilty.split(',');
    }

    if (this.currentUserProfile.verified_skills) {
      this.verified_skills = this.currentUserProfile.verified_skills.split(',');
    }



    let tempcodelnprojects = (await Projects.myprojects(this.$store.state.user.pk, auth)).data






    tempcodelnprojects.forEach((project) => {
      if (project.stage === 'analysis_complete' && project.report !== null) {
        this.codelnprojects.push(project)

      }
    });
    this.dataload = false
    if (this.currentUserProfile.file) {
      if (this.currentUserProfile.file.includes("http")) {
        this.cv = this.currentUserProfile.file
      } else {
        this.cv = `https://res.cloudinary.com/dwtvwjhn3/${this.currentUserProfile.file} `


      }

    }else {
      this.cv = null
    }

  },
  computed: {


  },
  watch:{

  },


  methods: {


    FetchTakenQuizzes(){
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      QuizService.taken(this.$store.state.user.pk, auth)
      .then(
          resp=>{
            this.takenquizzes = resp.data

          }
      )
    },

    navigateTo(route) {
      this.$router.push(route)
    },

    // edit










  },

}
</script>

<style scoped>
.bio {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: white;
  min-height: 50vh;
  padding: 1%;


}


.actions {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: white;

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
