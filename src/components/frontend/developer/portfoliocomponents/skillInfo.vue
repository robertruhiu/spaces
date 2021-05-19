<template>
  <div style="padding: 2%;">
    <div style="text-align: center">
      <img src="@/assets/images/competence.svg" style="width: 30%"/>
    </div>
    <p style="font-family: sofia_proregular;text-decoration: underline;text-decoration-color: #1F81CE">You skills may traverse many specialities.

    </p>
    <p style="font-family: sofia_proregular">You can develop,design,product or even devops.</p>
    <p style="font-family: sofia_proregular">Ensure the recruiter is able to see how diverse you are</p>

    <p style="font-family: sofia_probold">For starter pick what you feel are proficient in.It will give you minimum requirements to fill.</p>
    <p style="font-family: sofia_proregular;text-decoration: underline;text-decoration-color: #1F81CE;">
      Try clicking on developer</p>
    <a-checkable-tag v-model="Developer"  @change="handleChange">
      Developer
    </a-checkable-tag>
    <a-checkable-tag v-model="Designer" @change="handleChange">
      Designer
    </a-checkable-tag>
    <a-checkable-tag v-model="Product" @change="handleChange">
      Product Manager
    </a-checkable-tag>
    <a-checkable-tag v-model="Devops" @change="handleChange">
      Devops
    </a-checkable-tag>
    <div style="margin-top: 1rem" >
      <p>Requirements needed</p>
      <div v-if="Developer">
        <p style="font-family: sofia_probold">Developer</p>
        <ul>
          <li>github profile url</li>
          <li>2 projects</li>
        </ul>

      </div>
      <div v-if="Designer" >
        <p style="font-family: sofia_probold">Designer</p>
        <ul>
          <li>Behance or Dribbble profile url</li>
          <li>2 design projects</li>
        </ul>

      </div>
      <div v-if="Product">
        <p style="font-family: sofia_probold">Product Manager</p>
        <ul>
          <li>2 experience statements of work done in the past</li>
          <li>Tools utilized</li>
        </ul>

      </div>
      <div v-if="Devops">
        <p style="font-family: sofia_probold">Devops</p>
        <ul>
          <li>Tools utilized </li>

        </ul>

      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "skillInfo",
  data() {
    return {
      Developer:false,
      Designer:false,
      Product:false,
      Devops:false,
      skills:[]

    };
  },
  async mounted() {
    this.skills = this.$store.state.skills
    this.skills.forEach(skill=>{
      if(skill === 'developer'){
        this.Developer = true
      }else if(skill === 'designer'){
        this.Designer = true

      }else if(skill === 'product'){
        this.Product = true

      }else if(skill === 'devops'){
        this.Devops = true

      }
    })


  },

  methods: {
    handleChange(){
      let skill_list =[]
      if(this.Developer){
        skill_list.push('developer')
      }
      if(this.Designer){
        skill_list.push('designer')
      }
      if(this.Product){
        skill_list.push('product')
      }
      if(this.Devops){
        skill_list.push('devops')
      }
      this.$store.dispatch('setSkills', skill_list)
    }

  },
}
</script>

<style scoped>

</style>
