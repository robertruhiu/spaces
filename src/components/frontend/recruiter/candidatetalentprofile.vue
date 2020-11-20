<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh;background-color:#F8FAFB ">
    <pageheader></pageheader>


    <a-layout :style="{backgroundColor:'#F8FAFB',marginTop: '1rem' }">
      <a-layout-content style="margin-top: 3%">


        <a-row style="padding: 1% 1%">
          <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }" :md="{span: 24, offset: 0 }"
                 :lg="{span: 6, offset: 0 }" :xl="{span: 6, offset: 0 }" style=" ">
            <div class="profile" style="padding-bottom: 2%;margin: 3%">
              <a-avatar class="poolavatar" shape="square"
                        style="">
                {{ currentUserProfile.user.first_name[0].toUpperCase() }}
                {{ currentUserProfile.user.last_name[0].toUpperCase() }}
                <span style="font-size: 1rem" v-if="currentUserProfile.verified_skills"><a-icon
                    type="check-circle"/></span>

              </a-avatar>
              <div style="padding: 4%">
                <p>About</p>
                <p>{{ currentUserProfile.about }}</p>

                <br>

                <p v-if="verified_skills.length>0">
                  Verified skills:
                  <span style="" v-for="skill in verified_skills"
                        v-bind:key="skill.id">
                                                <a-tag color="#F0F6FD" style="color:#007BFF;">{{ skill }}</a-tag>

                                            </span>
                </p>
                <p v-if="skilltags.length>0">
                  Skill tags:
                  <span style="" v-for="skill in skilltags"
                        v-bind:key="skill.id">
                                                <a-tag color="#F0F6FD"
                                                       style="color:#007BFF;margin-bottom: 1rem;">{{ skill }}</a-tag>

                                            </span>

                </p>
                <p>Experience :
                  <a-tag color="#F0F6FD" style="color:#007BFF;">
                    {{ currentUserProfile.years }} years
                  </a-tag>
                </p>
                <p>

                  Availability :

                  <span style="" v-for="tag in availabiltytags"
                        v-bind:key="tag.id">
                                                <a-tag color="#F0F6FD"
                                                       style="color:#007BFF;margin-bottom: 1rem;">{{ tag }}</a-tag>

                                            </span>


                </p>
                <p>
                  Min monthly salary expectation :
                  <a-tag color="#F0F6FD" style="color:#007BFF;">
                    ${{ currentUserProfile.salary }} /month
                  </a-tag>
                </p>

                <p>Location :
                  <a-tag color="#F0F6FD" style="color:#007BFF;">
                    {{ currentUserProfile.country }}
                  </a-tag>

                </p>

              </div>


            </div>


          </a-col>

          <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }" :md="{span: 24, offset: 0 }"
                 :lg="{span: 14, offset: 0 }" :xl="{span: 14, offset: 0 }" style=" ">
            <div>
              <hide-at breakpoint="mediumAndBelow">
                <div class="bio">
                  <div v-if="candidatedata" style="text-align: center">
                    <a-skeleton active avatar :paragraph="{ rows: 4 }"/>
                    <a-skeleton active avatar :paragraph="{ rows: 4 }"/>
                  </div>
                  <div v-else>
                    <a-tabs >

                      <a-tab-pane key="1" v-if="takenquizzes.length >0">
                                    <span slot="tab">
                                        <a-icon type="codepen"/>
                                        Skills
                                    </span>
                        <p>Quizzes taken by Candidate</p>

                        <div>
                          <div v-for="takenquiz in takenquizzes" v-bind:key="takenquiz">
                            {{ takenquiz.quiz.subject.name }}:
                            <a-progress :percent="takenquiz.score"/>
                          </div>
                        </div>


                      </a-tab-pane>

                      <a-tab-pane key="2"  v-if="portfolio.length >0">
                                    <span slot="tab">
                                        <a-icon type="solution"/>
                                        Projects portfolio
                                    </span>
                        <div style="padding:0 2%">

                          <div>
                            <div style="border-bottom: 1px solid #e8e8e8;padding-bottom: 2%;padding-top: 2%"
                                 v-for="item in portfolio" v-bind:key="item.id">
                              <p style="font-weight: 700">{{ item.title }}</p>
                              <p>
                                Tools used:
                                <a-tag v-for="tag in item.tags" color="blue"
                                       :key="tag">
                                  {{ tag }}
                                </a-tag>

                              </p>
                              <p>{{ item.description }}
                              </p>
                              <span v-if="item.demo">
                                                                <a :href=" item.demo" target="_blank">view project</a>
                                                            </span>

                            </div>
                          </div>


                        </div>


                      </a-tab-pane>

                      <a-tab-pane key="3"  v-if="experiences.length>0">
                                    <span slot="tab">
                                        <a-icon type="hourglass"/>
                                        Work experience
                                    </span>
                        <div style="padding:2%">

                          <div >
                            <a-timeline>
                              <a-timeline-item v-for="item in experiences"
                                               v-bind:key="item.id">
                                <p style="font-weight: 700">{{ item.title }}</p>
                                <p><span><a-icon type="bank"/>  {{ item.company }} <a-icon
                                    type="environment"/>  {{ item.location }} <a-icon
                                    type="hourglass"/>  {{ item.duration }}months</span>
                                </p>
                                <p>
                                  Technologies used:
                                  <a-tag v-for="tag in item.tags" color="blue"
                                         :key="tag">
                                    {{ tag }}
                                  </a-tag>

                                </p>


                                <p>{{ item.description }}</p>

                              </a-timeline-item>

                            </a-timeline>
                          </div>


                        </div>

                      </a-tab-pane>

                    </a-tabs>
                  </div>


                </div>
              </hide-at>
            </div>


            <div style="margin-bottom: 1rem;padding:2%" v-if="takenquizzes.length>0">
              <show-at breakpoint="mediumAndBelow">
                <div class="bio">
                  <p style="padding-top: 2%"><strong>Quizzes taken by Candidate</strong></p>
                  <div v-for="takenquiz in takenquizzes" v-bind:key="takenquiz">
                    {{ takenquiz.quiz.subject.name }}:
                    <a-progress :percent="takenquiz.score"/>
                  </div>
                </div>


              </show-at>
            </div>
            <div style="margin-bottom: 1rem;padding:2%" v-if="portfolio.length>0">
              <show-at breakpoint="mediumAndBelow">
                <div class="bio">

                  <p style="padding-top: 2%"><strong>Projects portfolio</strong></p>
                  <div>

                    <div style="border-bottom: 1px solid #e8e8e8;padding-bottom: 2%;padding-top: 2%"
                         v-for="item in portfolio" v-bind:key="item.id">
                      <p style="font-weight: 700">{{ item.title }}</p>
                      <p>
                        Tools used:
                        <a-tag v-for="tag in item.tags" color="blue"
                               :key="tag">
                          {{ tag }}
                        </a-tag>

                      </p>
                      <p>{{ item.description }}
                      </p>
                      <span v-if="item.demo">
                                                <a :href=" item.demo" target="_blank">view project</a>
                                            </span>


                    </div>


                  </div>
                </div>


              </show-at>
            </div>

            <div style="margin-bottom: 1rem;padding:2%" v-if="experiences.length>0">
              <show-at breakpoint="mediumAndBelow">
                <div class="bio">


                  <p style="padding-top: 2%"><strong>Work experience</strong></p>
                  <div>
                    <a-timeline>
                      <a-timeline-item v-for="item in experiences" v-bind:key="item.id">
                        <p style="font-weight: 700">{{ item.title }}</p>
                        <p><span><a-icon type="bank"/>  {{ item.company }} <a-icon
                            type="environment"/>  {{ item.location }} <a-icon
                            type="hourglass"/>  {{ item.duration }}months</span>
                        </p>
                        <p>
                          Technologies used:
                          <a-tag v-for="tag in item.tags" color="blue"
                                 :key="tag">
                            {{ tag }}
                          </a-tag>

                        </p>


                        <p>{{ item.description }}</p>

                      </a-timeline-item>

                    </a-timeline>


                  </div>
                </div>

              </show-at>
            </div>


          </a-col>


        </a-row>


      </a-layout-content>


    </a-layout>
  </a-layout>
</template>


<script>
//experience structure on table


class Experience {
  constructor(id, title, description, company, location, duration, tech_used) {
    this.key = id;
    this.title = title;
    this.description = description;
    this.company = company;
    this.duration = duration;
    this.tags = tech_used;
    this.location = location;

  }
}

class Portfolio {
  constructor(id, title, description, demo, tech_used) {
    this.key = id;
    this.title = title;
    this.description = description;
    this.demo = demo;
    this.tags = tech_used;


  }
}


import UsersService from '@/services/UsersService'


import Pageheader from '@/components/layout/Header.vue'
import QuizService from '@/services/QuizService';
import {hideAt, showAt} from 'vue-breakpoints'


export default {
  name: 'candidatetalentprofile',
  data() {

    return {
      currentUserProfile: {},
      skilltags: [],
      verified_skills: [],
      experienceslist: null,
      experiences: [],
      portoliolist: null,
      portfolio: [],
      takenquizzes: [],
      candidatedata: false,
      availabiltytags: [],
      verified: false,


    }
  },
  components: {
    Pageheader,
    showAt, hideAt,

  },
  async mounted() {
    this.candidatedata = true
    this.fetchDevprofile()




  },


  methods: {
    navigateTo(route) {
      this.$router.push(route)
    },
    fetchDevprofile(){
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }

      if (this.$store.state.user.pk) {
        UsersService.currentuser(this.$route.params.candidateProfileID, auth)
        .then(resp=>{
          this.currentUserProfile = resp.data
        })

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
      QuizService.taken(this.$route.params.candidateProfileID, auth)
          .then(resp => {

            this.takenquizzes = resp.data

            if(this.takenquizzes){
              this.candidatedata = false
            }else {
              this.candidatedata = false
            }


          })
          .catch(error => {
            return error
          })

    },
    fetchWorkExperience() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      UsersService.experience(this.$route.params.candidateProfileID, auth)
          .then(resp => {



            this.experienceslist = resp.data

            for (let i = 0; i < this.experienceslist.length; i++) {
              let id = this.experienceslist[i]
              let title = this.experienceslist[i].title
              let description = this.experienceslist[i].description
              let company = this.experienceslist[i].company
              let location = this.experienceslist[i].location
              let duration = this.experienceslist[i].duration

              let tech_used = []
              if (this.experienceslist[i].tech_tags) {
                tech_used = this.experienceslist[i].tech_tags.split(',');

              }

              let one_experience = new Experience(
                  id, title, description, company, location, duration, tech_used
              );
              this.experiences.push(one_experience)



            }
            this.fetchPortfolio()



          })
          .catch(error => {
            this.fetchPortfolio()
            return error
          })


    },
    fetchPortfolio() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      UsersService.portfolio(this.$route.params.candidateProfileID, auth)
          .then(resp => {


            this.portfoliolist = resp.data


            for (let i = 0; i < this.portfoliolist.length; i++) {
              let id = this.portfoliolist[i]
              let title = this.portfoliolist[i].title
              let description = this.portfoliolist[i].description
              let demo = null
              if (this.portfoliolist[i].demo_link.includes('github.com') === false) {
                demo = this.portfoliolist[i].demo_link

              }

              let tech_used = []
              if (this.portfoliolist[i].tech_tags) {
                tech_used = this.portfoliolist[i].tech_tags.split(',');

              }

              let one_portfolio = new Portfolio(
                  id, title, description, demo, tech_used
              );
              this.portfolio.push(one_portfolio)



            }
            this.fetchQuizzes()



          })
          .catch(error => {
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
  }
  ,

}

</script>

<style scoped>
.bio {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: white;
  min-height: 50vh;
  margin-right: 1%;
  margin-left: 1%;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 1%;
  margin-top: 0.2%;
  padding-bottom: 5%;
}

.profile {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: white;
  margin: 1%;

}

.poolavatar {
  width: 100%;
  height: 8rem;
  line-height: 124px;
  font-size: 30px;
  background-color: #0679FB;
  border-radius: 0;


}

</style>
