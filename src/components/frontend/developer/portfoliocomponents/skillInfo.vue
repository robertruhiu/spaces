<template>
  <div style="padding: 2%;">
    <div style="text-align: center">
      <img src="@/assets/images/competence.svg" style="width: 30%"/>
    </div>
    <p style="font-family: sofia_proregular;text-decoration: underline;text-decoration-color: #1F81CE">You skills may traverse many specialities.({{Finished/25*100}}% complete)

    </p>
    <p style="font-family: sofia_proregular">You can develop,design,product or even devops.</p>
    <p style="font-family: sofia_proregular">Ensure the recruiter is able to see how diverse you are </p>


    <div style="margin-top: 1rem" >
      <p>Requirements needed</p>
      <li v-if="pulldata.length<2">2 projects required</li>
      <p v-if="pulldata.length>0">You have {{stardandy.length}} completed projects <a-icon type="check-circle" theme="twoTone" two-tone-color="#52c41a" /></p>
      <p v-if=" (pulldata.length - stardandy.length)>0">
        You have
        {{pulldata.length - stardandy.length }}
        incomplete projects please update them <a-icon type="warning" theme="twoTone" two-tone-color="#FAAD14"/>
      </p>


    </div>

    <a-alert v-if="validator" type="error" message="Please update projects.Updated projects appear in your generated portfolio for recruiter review" banner />










  </div>
</template>

<script>





export default {
  name: "skillInfo",
  data() {
    return {
      Completed:true,
      all:null,
      stardand:[]

    };
  },
  props: {
    projects: Array,
  },
  computed: {

    pulldata: function () {

      return this.projects
    },
    stardandy:function (){
      let list =[]
      this.pulldata.forEach(project=>{
        if(project.project_role ){
          list.push(project)

        }
      })
      return list

    },
    validator:function (){
      let bool = false
      this.pulldata.forEach(project=>{
        if(project.project_role === null ){
          bool = true

        }
      })
      return bool

    },
    Finished:function (){
      this.$emit('projectscore', (this.stardandy.length/this.pulldata.length)*25)

      return (this.stardandy.length/this.pulldata.length)*25
    }
  },
  // watch: {
  //   pulldata: function () {
  //     this.all = this.pulldata
  //     this.all.forEach(project=>{
  //       if(project.project_role ){
  //         this.stardand.push(project)
  //
  //       }else {
  //         this.Completed =false
  //
  //       }
  //     })
  //   },
  //
  // },


  async mounted() {
    this.all = this.projects



  },

  methods: {



  },
}
</script>

<style scoped>

</style>
