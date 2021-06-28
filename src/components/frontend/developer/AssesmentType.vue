<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <CandidateSider/>
    <a-layout>

      <a-layout-content style="background-color: white">
        <a-card class="hellocard" :bordered="false">


          <a-breadcrumb>
            <a-breadcrumb-item><a @click="$router.push('/developer')" style="color: white">Dashboard</a>
            </a-breadcrumb-item>
            <a-breadcrumb-item style="color: white"><a @click="$router.push('/assessment')" style="color: white">Skill Verification</a></a-breadcrumb-item>
            <a-breadcrumb-item style="color: white">Project based test </a-breadcrumb-item>

          </a-breadcrumb>

          <span style="font-size: 1.7rem;font-family: sofia_prosemibold;margin-bottom: 0;color: white">
                Choose how you'd like to take Codeln's Project Based Test</span>


        </a-card>
        <div :style="{ padding: '5px', background: '#fff',marginTop:'0rem' }">
          <div style="min-height: 40vh ;padding: 1%">

          <a-row :gutter="16" style="padding-right: 2rem;padding-bottom: 1.5rem;">




            <a-col class="boxes" :xs="{span: 18, offset: 2  }" :sm="{span: 12, offset: 0 }" :md="{span: 10, offset: 0 }"
                   :lg="{span: 6, offset: 0 }" :xl="{span: 6,offset: 0 }">
              <a-card class="nine" style="color: black">
                <div style="text-align: center">
                  <img
                      class="card-img-top"
                      slot="cover"
                      alt="example"
                      src="@/assets/images/code.svg"

                  />
                </div>
                <a-card-meta style="color:#000;text-align: center">
                  <template slot="description" >
                    <p class="ant-card-head-title" style="font-weight: bold;color: black">Automated Test</p>
                    <p style="margin: 0;color: black" >Build a real world project on our Automated
                      Environment</p>
                    <br>
                    <a-button type="primary" @click="navigateTo({name:'developerprojects'})"> Schedule Automated Test</a-button>

                  </template>
                </a-card-meta>
              </a-card>

            </a-col>
<!--            <a-col class="boxes" :xs="{span: 18, offset: 2  }" :sm="{span: 12, offset: 0 }" :md="{span: 10, offset: 0 }"-->
<!--                   :lg="{span: 6, offset: 0 }" :xl="{span: 6,offset: 0 }">-->
<!--              <a-card class="nine" style="color: black" >-->
<!--                <div style="text-align: center">-->
<!--                  <img-->
<!--                      class="card-img-top"-->
<!--                      slot="cover"-->
<!--                      alt="example"-->
<!--                      src="@/assets/images/quiz.svg"-->

<!--                  />-->
<!--                </div>-->



<!--                <a-card-meta style="color:#000;text-align: center">-->
<!--                  <template slot="description" >-->
<!--                    <p class="ant-card-head-title" style="font-weight: bold;color: black">Book a Test at our-->
<!--                      Test Centres</p>-->
<!--                    <p style="margin: 0;color: black">If in Nigeria or Ghana, Pick any of our Test centers-->
<!--                      to verify your skills.</p>-->
<!--                    <br>-->

<!--                    <a-button type="primary" @click="navigateTo({name:'testcenters'})"> See Available Test Centers</a-button>-->

<!--                  </template>-->
<!--                </a-card-meta>-->
<!--              </a-card>-->

<!--            </a-col>-->


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
  name: "AssesmentType",
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

.actioncards {
  width: 100%;
  background: white;
  border-radius: 0;
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;
  padding: 0.89rem;
}
.card-img-top{


  width: 30%;



}
</style>
