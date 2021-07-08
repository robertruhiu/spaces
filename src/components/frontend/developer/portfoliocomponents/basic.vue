<template>
<div style="overflow-y: scroll;padding: 1%;height: 70vh;">
  <p style="font-family: sofia_probold;text-decoration: underline;text-decoration-color: #1F81CE">About</p>
  <p style="font-family: sofia_prolight">
    {{currentUserProfile.about}}
  </p>
  <p style="font-family: sofia_probold;text-decoration: underline;text-decoration-color: #1F81CE">Skilled in</p>
  <div v-if="currentUserProfile.skills.length>0">

                    <span style="" v-for="skill in currentUserProfile.skills.split(',')"
                          v-bind:key="skill.id">
                                                <a-tag color="#1F81CE"
                                                >{{ skill }}</a-tag>

                                            </span>

  </div>
  <div>
    <p style="font-family: sofia_probold;text-decoration: underline;text-decoration-color: #1F81CE">Years of experience</p>
    <p style="font-family: sofia_prolight">{{$store.state.user_object.years}} years</p>
    <p style="font-family: sofia_probold;text-decoration: underline;text-decoration-color: #1F81CE">Country</p>
    <p style="font-family: sofia_prolight">{{$store.state.user_object.country}}</p>

    <p style="font-family: sofia_probold;text-decoration: underline;text-decoration-color: #1F81CE">Preffered work type</p>
    <p style="font-family: sofia_prolight">{{$store.state.user_object.availabilty}}</p>
    <p style="font-family: sofia_probold;text-decoration: underline;text-decoration-color: #1F81CE">Expected monthly salary</p>
    <p style="font-family: sofia_prolight">{{$store.state.user_object.salary}}$</p>
    <p style="font-family: sofia_probold;text-decoration: underline;text-decoration-color: #1F81CE">CV</p>
    <p>
      <a-icon type="file-pdf"/> :
      <a :href="cv" target='_blank'> Cv link</a>
    </p>
    <p style="font-family: sofia_probold;text-decoration: underline;text-decoration-color: #1F81CE">Contacts and social</p>
    <p style="font-family: sofia_prolight"><a-icon type="linkedin" />Linkedin: {{$store.state.user_object.linkedin_url}} </p>
    <p style="font-family: sofia_prolight"><a-icon type="phone" />Phone number: {{$store.state.user_object.phone_number}}</p>
    <p style="font-family: sofia_prolight"><a-icon type="mail" />Email: {{$store.state.user_object.user.email}}</p>




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
