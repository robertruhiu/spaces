<template>
  <a-layout id="components-layout-demo-side" style="height: 100vh;">
    <CandidateSider/>
    <a-layout>

      <a-layout-content style="background-color: #FAFBFF">
        <a-card class="hellocard" :bordered="false">
          <a-row style="color: white">
            <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                   :md="{span: 12, offset: 0 }"
                   :lg="{span: 12, offset: 0 }" :xl="{span: 12,offset: 0 }">
              <a-breadcrumb>
                <a-breadcrumb-item><a @click="$router.push('/developer')" style="color: white">Dashboard</a></a-breadcrumb-item>
                <a-breadcrumb-item style="color: white">Portfolio</a-breadcrumb-item>

              </a-breadcrumb>
              <span style="font-size: 1.7rem;font-family: sofia_prosemibold;margin-bottom: 0;color: white">
                {{ $store.state.user_object.user.first_name | capitalize }} {{ $store.state.user_object.user.last_name | capitalize }}</span>
              <p>Profile completion :
                <span v-if="score>$store.state.score">{{ score }}%</span>
                <span v-else-if="score === $store.state.score">{{ score }}%</span>
                <span v-else>{{ $store.state.score }}%</span>
              </p>
            </a-col>
            <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                   :md="{span: 12, offset: 0 }"
                   :lg="{span: 12, offset: 0 }" :xl="{span: 12,offset: 0 }">
              <a-button
                  type="primary"  @click="navigateTo({name:'Cv'})">
                <a-icon type="right" />
                View Public Porftolio
              </a-button>
            </a-col>
          </a-row>


        </a-card>
        <a-tabs default-active-key="1" @change="callback" >
          <a-tab-pane key="1">
                  <span slot="tab">

                    Basic_info
                  </span>
            <Basic/>



          </a-tab-pane>
          <a-tab-pane key="2">
                  <span slot="tab">

                    Projects
                  </span>
            <Skills v-on:myprojectsloaded="onClickChildSkills" />



          </a-tab-pane>
          <a-tab-pane key="3">
                  <span slot="tab">

                    Work
                  </span>
<!--            <Experince v-on:myexperinecesloaded="onClickChildExperience"/>-->



          </a-tab-pane>
          <a-tab-pane key="4">
                  <span slot="tab">

                    Education
                  </span>
            <Education v-on:myeducationloaded="onClickChildEducation"/>



          </a-tab-pane>

        </a-tabs>



      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import CandidateSider from "@/components/frontend/developer/layout/CandidateSider";
import Basic from "@/components/frontend/developer/portfoliocomponents/basic";
import intro from "@/components/frontend/developer/portfoliocomponents/intro";
import skillInfo from "@/components/frontend/developer/portfoliocomponents/skillInfo";
import Skills from "@/components/frontend/developer/portfoliocomponents/Skills";
import WorkInfo from "@/components/frontend/developer/portfoliocomponents/WorkInfo";
import EducationInfo from "@/components/frontend/developer/portfoliocomponents/EducationInfo";
import Experince from "@/components/frontend/developer/portfoliocomponents/Experince";
import Education from "@/components/frontend/developer/portfoliocomponents/Education";
import { showAt} from 'vue-breakpoints'
export default {
  name: "DemoPort",
  data() {

    return {
      currentUserProfile: {},
      currentTabKey:1,
      projects:[],
      experiences:[],
      education:[],
      work_score:0,
      projects_score:0,
      education_score:0


    }
  },
  computed: {

    score: function () {
      let score =this.work_score+this.projects_score+this.education_score+25
      this.$store.dispatch('setscore', score)
      return this.work_score+this.projects_score+this.education_score+25


    },
  },
  components: {
    CandidateSider,Basic,intro,skillInfo,Skills,WorkInfo,EducationInfo,
    Experince,Education,showAt


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

  watch: {},


  methods: {
    callback(key) {

      this.currentTabKey = Number(key)

    },
    navigateTo(route) {
      this.$router.push(route)
    },
    onClickChildSkills (value) {

      this.projects =value

    },
    onClickChildExperience (value) {


      this.experiences =value

    },
    onClickChildEducation (value) {
      this.education =value

    },
    onClickChildWorkScore (value) {
      this.work_score =value

    },
    onClickChildProjectScore (value) {
      this.projects_score =value

    },
    onClickChildEducationScore(value){
      this.education_score =value
    }


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
