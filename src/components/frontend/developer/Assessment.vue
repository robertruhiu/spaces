<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <CandidateSider/>
    <a-layout>

      <a-layout-content style="background-color: white">
        <a-card class="hellocard" :bordered="false">


          <a-breadcrumb>
            <a-breadcrumb-item><a @click="$router.push('/developer')" style="color: white">Dashboard</a>
            </a-breadcrumb-item>
            <a-breadcrumb-item style="color: white">Skill Verification</a-breadcrumb-item>

          </a-breadcrumb>
          <span style="font-size: 1.7rem;font-family: sofia_prosemibold;margin-bottom: 0;color: white">
                Get your skills verified and your rank improved</span>


        </a-card>
        <div :style="{ padding: '5px', background: '#fff',marginTop:'0rem' }">
          <div style="min-height: 40vh ;padding: 1%">

          <a-row :gutter="16" style="padding-right: 2rem;padding-bottom: 1.5rem;">
            <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 12, offset: 0 }"
                   :md="{span: 12, offset: 0 }"
                   :lg="{span: 10, offset: 1 }" :xl="{span: 6,offset: 0 }">
              <a-card hoverable class="cardshadow" style="width: 100%;margin-bottom: 1rem">
                <router-link to="/quizlist">
                  <div style="color: black">

                    <a-row>
                      <a-col span="24">
                        <div style="text-align: center">
                          <img class="poolavatar" src="@/assets/images/quiz.svg">
                        </div>
                      </a-col>
                      <a-col span="24" style="text-align: center">
                        <p>Take a Quiz</p>
                        <p style="margin: 0;">Jolt your memories on fundamentals</p>


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
                <router-link to="/selectassesment">
                  <div style="color: black">

                    <a-row>
                      <a-col span="24">
                        <div style="text-align: center">
                          <img class="poolavatar" src="@/assets/images/code.svg">
                        </div>
                      </a-col>
                      <a-col span="24" style="text-align: center">
                        <p>Build a Project</p>
                        <p style="margin: 0;">Build a real world project</p>


                      </a-col>

                    </a-row>

                  </div>
                </router-link>


              </a-card>

            </a-col>


          </a-row>
          </div>

        </div>


      </a-layout-content>


    </a-layout>
  </a-layout>
</template>

<script>



import CandidateSider from "./layout/CandidateSider";
import ACol from "ant-design-vue/es/grid/Col";
import ARow from "ant-design-vue/es/grid/Row";

export default {
  name: "Assesment",
  data() {
    return {
      currentUserProfile: {},
      recommendedprojects: [],


    }
  },
  components: {

    CandidateSider,
    ACol,
    ARow,
  },
  async mounted() {


    if (this.$store.state.user.pk) {
      this.currentUserProfile = this.$store.state.user_object

    }


  },
  methods: {
    navigateTo(route) {
      this.$router.push(route)
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
  color: white;

}

#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, .2);
  margin: 16px;
}

.projcard {
  min-height: 200px;
}

.projcard:hover {
  border-color: #004ec7;
}

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

.talentcard {
  margin-bottom: 1rem;
}

.center {
  margin: auto;
  width: 60%;


}

.cardshadow {

  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;

  background: white;
  border-radius: 0;
  height: 13rem;
}


.actioncards {
  width: 16rem;
  border-radius: 0;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 0.89rem;
}
</style>
