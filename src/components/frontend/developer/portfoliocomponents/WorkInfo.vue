<template>
  <div style="padding: 2%;">
    <div style="text-align: center">
      <img src="@/assets/images/briefcase.svg" style="width: 30%"/>
    </div>
    <p style="font-family: sofia_proregular;text-decoration: underline;text-decoration-color: #1F81CE">Work experience({{Finished/25*100}}% complete)</p>
    <p style="font-family: sofia_proregular">Years of experience is a commonly requested by recruiter showcase your timeline of work</p>
    <div style="margin-top: 1rem" >
      <p>Requirements needed</p>
      <li v-if="pulldata.length<1">1 work experience entry required</li>
      <p v-if="pulldata.length>0">You have {{stardandy.length}} completed work experience entries <a-icon type="check-circle" theme="twoTone" two-tone-color="#52c41a" /></p>
      <p v-if=" (pulldata.length - stardandy.length)>0">
        You have
        {{pulldata.length - stardandy.length }}
        incomplete experience entries please update them <a-icon type="warning" theme="twoTone" two-tone-color="#FAAD14"/>
      </p>


    </div>
    <a-alert v-if="validator" type="warning" message="Please update Work Experience.Updated experiences appear in your generated portfolio for recruiter review" banner />










  </div>
</template>

<script>
export default {
  name: "WorkInfo",
  data() {
    return {



    };
  },
  props: {
    experiences: Array,
  },
  computed: {

    pulldata: function () {

      return this.experiences
    },
    stardandy:function (){
      let list =[]
      this.pulldata.forEach(item=>{
        if(item.work_start_month ){
          list.push(item)

        }
      })
      return list

    },
    validator:function (){
      let bool = false
      this.pulldata.forEach(project=>{
        if(project.work_start_month === null ){
          bool = true

        }
      })
      return bool

    },
    Finished:function (){
      this.$emit('workscore', (this.stardandy.length/this.pulldata.length)*25)

      return (this.stardandy.length/this.pulldata.length)*25
    }


  },

  async mounted() {

    console.log(this.experiences)

  },
  methods:{

  }
}
</script>

<style scoped>

</style>
