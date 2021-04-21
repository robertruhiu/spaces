<template>
  <div>

    <a-row style="margin-top: 4rem"
    >
      <a-col :xs="{span: 22, offset: 0 }" :sm="{span: 24, offset: 0 }" :md="{span: 18, offset: 3 }"
             :lg="{span: 18, offset: 3 }" :xl="{span: 18, offset: 3 }"
             :style="{boxShadow:'0 .125rem .25rem rgba(0,0,0,.075)!important'}">
        <div style="padding: 3%">
          <a-steps :current="current">
            <a-step v-for="item in steps" :key="item.title" :title="item.title" />
          </a-steps>

          <div class="steps-content">
            <div v-if="current === 0">
              <step1/>
            </div>

            <div v-else-if="current === 1">
              <step2/>
            </div>

            <div v-else-if="current === 2">
              <welcome/>



            </div>



          </div>



        </div>


      </a-col>
    </a-row>


  </div>
</template>

<script>








import step1 from "@/components/frontend/homepages/registercomponents/candidate/step1";
import step2 from "@/components/frontend/homepages/registercomponents/candidate/step2";
import welcome from "@/components/frontend/homepages/registercomponents/candidate/welcome";


export default {
  name: "Candidatesteps",
  components: {step1,step2,welcome},
  data() {
    return {

      steps: [{
        title: 'Personal Details',

      }, {
        title: 'Skills and bio',

      }, {

        title: 'Welcome to Codeln',
        icon:'user',


      },
        ],


    }
  },
  async mounted() {

    this.$store.dispatch('setRegistrationStep', 0)





  },
  computed: {

    current(){
      return this.$store.state.registrationstep
    }


  },


}
</script>

<style scoped>
.steps-content {
  margin-top: 1rem;


  min-height: 200px;

  padding: 2%;
}

.steps-action {
  margin-top: 24px;
}

</style>
