<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh;">
    <CandidateSider/>
    <a-layout>

      <a-layout-content style="background-color: #FAFBFF">
        <a-card class="hellocard" :bordered="false">
          <a-row style="color: white">
            <a-col span="12">
          <a-breadcrumb>
            <a-breadcrumb-item><a @click="$router.push('/recruiter')" style="color: white">Home</a></a-breadcrumb-item>
            <a-breadcrumb-item style="color: white">Portfolio</a-breadcrumb-item>

          </a-breadcrumb>
          <span style="font-size: 1.7rem;font-family: sofia_prosemibold;margin-bottom: 0;color: white">{{ Greeting }}
                {{ $store.state.user_object.user.first_name | capitalize }}</span>
          <p>Profile completion : 80%</p>
            </a-col>
            <a-col span="12">
              <a-button
                  type="primary"  @click="navigateTo({name:'Cv'})">
                <a-icon type="right" />
                View Public Porftolio
              </a-button>
            </a-col>
          </a-row>


        </a-card>
        <div style=" ;padding: 1%">
          <a-row :gutter="16">
            <a-col span="16" >
              <div style="padding: 1%;min-height: 40vh" class="cardshadow">
                <a-tabs default-active-key="1" @change="callback" >
                  <a-tab-pane key="1">
                  <span slot="tab">
                    <a-icon type="solution"/>
                    Basic information
                  </span>
                    <Basic/>
                  </a-tab-pane>
                  <a-tab-pane key="2">
                  <span slot="tab">
                    <a-icon type="code"/>
                    Portfolio/Gigs
                  </span>
                    <Skills />
                  </a-tab-pane>
                  <a-tab-pane key="3">
                  <span slot="tab">
                    <a-icon type="bank"/>
                    Work experience
                  </span>
                    <Experince/>
                  </a-tab-pane>
                  <a-tab-pane key="4">
                  <span slot="tab">
                    <a-icon type="file-done"/>
                    Education & Certifications
                  </span>
                    <Education/>
                  </a-tab-pane>

                </a-tabs>

              </div>

            </a-col>
            <a-col span="6" >
              <div style="padding: 1%;min-height: 40vh" class="cardshadow">
                <div v-if="currentTabKey === 1">
                  <intro/>
                </div>
                <div v-else-if="currentTabKey === 2">
                  <skillInfo  />
                </div>
                <div v-else-if="currentTabKey === 3">
                  <WorkInfo  />
                </div>
                <div v-else-if="currentTabKey === 4">
                  <EducationInfo  />
                </div>


              </div>

            </a-col>
          </a-row>

        </div>


      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import CandidateSider from "@/components/frontend/developer/layout/CandidateSider";
import moment from "moment";
import Basic from "@/components/frontend/developer/portfoliocomponents/basic";
import intro from "@/components/frontend/developer/portfoliocomponents/intro";
import skillInfo from "@/components/frontend/developer/portfoliocomponents/skillInfo";
import Skills from "@/components/frontend/developer/portfoliocomponents/Skills";
import WorkInfo from "@/components/frontend/developer/portfoliocomponents/WorkInfo";
import EducationInfo from "@/components/frontend/developer/portfoliocomponents/EducationInfo";
import Experince from "@/components/frontend/developer/portfoliocomponents/Experince";
import Education from "@/components/frontend/developer/portfoliocomponents/Education";
export default {
  name: "DemoPort",
  data() {

    return {
      currentUserProfile: {},
      currentTabKey:1,


    }
  },
  components: {
    CandidateSider,Basic,intro,skillInfo,Skills,WorkInfo,EducationInfo,
    Experince,Education


  },
  async mounted() {
    this.currentUserProfile = this.$store.state.user_object


  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  computed: {
    Greeting() {
      moment
      let today = new Date()
      let curHr = today.getHours()
      let greeting = ''

      if (curHr < 12) {
        greeting = 'Good Morning'

      } else if (curHr < 18) {
        greeting = 'Good Afternoon'

      } else {
        greeting = 'Good Evening'

      }
      return greeting
    },


  },
  watch: {},


  methods: {
    callback(key) {

      this.currentTabKey = Number(key)

    },
    navigateTo(route) {
      this.$router.push(route)
    },


  },

}
</script>

<style scoped>


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

}


.poolavatar {
  width: 30%;
  margin-top: 0.5rem;
}


</style>
