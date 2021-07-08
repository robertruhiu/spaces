<template>
  <div style="padding: 2%;">
    <div style="text-align: center">
      <img src="@/assets/images/certificate.svg" style="width: 30%"/>
    </div>
    <p style="font-family: sofia_proregular;text-decoration: underline;text-decoration-color: #1F81CE">Education and Certifications({{Finished/25*100}}% complete)</p>
    <p style="font-family: sofia_proregular">Certificates from accredited institutions go a long way to approve your skills</p>
    <p>Requirements needed</p>
    <li v-if="pulldata.length<1">1 education/certificate entry required</li>
    <p v-if="pulldata.length>0">You have {{pulldata.length}} completed Education/Certifications entries <a-icon type="check-circle" theme="twoTone" two-tone-color="#52c41a" /></p>

  </div>
</template>

<script>
export default {
  name: "EducationInfo",
  props: {
    education: Array,
  },
  computed: {

    pulldata: function () {

      return this.education
    },
    Finished:function (){
      if(this.pulldata.length>0){
        this.$emit('educationscore', 25)
        return 25
      }else {
        this.$emit('educationscore', 0)
        return 0
      }



    }


  },
  async mounted() {

    console.log(this.education)

  },
}
</script>

<style scoped>

</style>
