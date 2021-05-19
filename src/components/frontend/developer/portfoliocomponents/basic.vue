<template>
<div style="overflow-y: scroll;padding: 1%;height: 70vh;">
  <p style="font-family: sofia_probold;text-decoration: underline;text-decoration-color: #1F81CE">About</p>
  <p style="font-family: sofia_prolight">
    {{currentUserProfile.about}}
  </p>
  <p style="font-family: sofia_probold;text-decoration: underline;text-decoration-color: #1F81CE">Skilled in</p>
  <div>
    <a-tag color="#1F81CE" style="margin-bottom: 1rem">
      react
    </a-tag>
    <a-tag color="#1F81CE" style="margin-bottom: 1rem">
      django
    </a-tag>
    <a-tag color="#1F81CE" style="margin-bottom: 1rem">
      vue
    </a-tag>

  </div>
  <div>
    <p style="font-family: sofia_probold;text-decoration: underline;text-decoration-color: #1F81CE">Years of experince</p>
    <p style="font-family: sofia_prolight">3 years</p>
    <p style="font-family: sofia_probold;text-decoration: underline;text-decoration-color: #1F81CE">Country</p>
    <p style="font-family: sofia_prolight">Kenya</p>

    <p style="font-family: sofia_probold;text-decoration: underline;text-decoration-color: #1F81CE">Preffered work type</p>
    <p style="font-family: sofia_prolight">Contract ,Fulltime</p>
    <p style="font-family: sofia_probold;text-decoration: underline;text-decoration-color: #1F81CE">Expected monthly salary</p>
    <p style="font-family: sofia_prolight">1500$</p>
    <p style="font-family: sofia_probold;text-decoration: underline;text-decoration-color: #1F81CE">CV</p>
    <p>
      <a-icon type="file-pdf"/> :
      <a :href="cv" target='_blank'> Cv link</a>
    </p>
    <p style="font-family: sofia_probold;text-decoration: underline;text-decoration-color: #1F81CE">Contacts and social</p>
    <p style="font-family: sofia_prolight"><a-icon type="linkedin" />Linkedin: https://www.linkedin.com/in/dennis-ruhiu-abb1b0ab/ </p>
    <p style="font-family: sofia_prolight"><a-icon type="phone" />Phone number: 254794993085</p>
    <p style="font-family: sofia_prolight"><a-icon type="mail" />Email: dennis@codeln.com</p>




  </div>
</div>
</template>

<script>
export default {
  name: "basic",
  data() {

    return {
      currentUserProfile: {},
      skills:[],
      cv:''

    }
  },
  async mounted() {
    this.currentUserProfile = this.$store.state.user_object
    if (this.currentUserProfile.skills) {
      this.skills = this.currentUserProfile.skills.split(',');
    }
    if (this.currentUserProfile.file) {
      if (this.currentUserProfile.file.includes("http")) {
        this.cv = this.currentUserProfile.file
      } else {
        this.cv = `https://res.cloudinary.com/dwtvwjhn3/${this.currentUserProfile.file} `

      }
    }


  },
}
</script>

<style scoped>
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #1890ff;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #91d5ff;
}
</style>
