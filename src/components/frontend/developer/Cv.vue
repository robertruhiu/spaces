<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh;">
    <CandidateSider/>
    <a-layout>

      <a-layout-content style="background-color: #FAFBFF" id="contract">
        <a-card class="hellocard" :bordered="false">
          <a-row style="color: white">
            <a-col span="24">
          <a-breadcrumb>
            <a-breadcrumb-item><a @click="$router.push('/developer')" style="color: white">Dashboard</a></a-breadcrumb-item>
            <a-breadcrumb-item style="color: white"><a @click="$router.push('/demo')" style="color: white">Portfolio</a></a-breadcrumb-item>
            <a-breadcrumb-item style="color: white">Cv</a-breadcrumb-item>

          </a-breadcrumb>
          <span style="font-size: 1.7rem;font-family: sofia_prosemibold;margin-bottom: 0;color: white">
                {{ $store.state.user_object.user.first_name | capitalize }} {{ $store.state.user_object.user.last_name | capitalize }}</span>


            </a-col>

          </a-row>



        </a-card>
        <div style=" ;padding: 1%" id="contract">
          <a-row :gutter="16">
            <a-col :xs="{span: 24, offset: 0, }" :sm="{span: 24, offset: 0, }"
                   :md="{span: 24, offset: 0 ,push:0}"
                   :lg="{span: 20, offset: 0,push:0 }" :xl="{span: 18,offset: 0,push:0 }" >
              <div style="padding: 1%;min-height: 40vh" class="cardshadow">
                <div style="overflow-y: scroll;padding: 1%;height: 80vh;">
                  <p style="font-family: sofia_probold;text-decoration: underline;text-decoration-color: #1F81CE">About</p>
                  <p style="font-family: sofia_prolight">
                    {{currentUserProfile.about}}
                  </p>
                  <p>Email: {{$store.state.user_object.user.email}}</p>
                  <p>Linkedin: {{$store.state.user_object.linkedin_url}}</p>
                  <p>Phone Number: {{$store.state.user_object.phone_number}}</p>
                  <p>Location: {{$store.state.user_object.country}}</p>
                  <p>Years of Experience: {{$store.state.user_object.years}}</p>
                  <p>Monthly Salary Expectations: $ {{$store.state.user_object.salary}}</p>
                  <p style="font-family: sofia_probold;text-decoration: underline;text-decoration-color: #1F81CE">Skilled in</p>
                  <div v-if="currentUserProfile.skills.length>0" style="margin-bottom: 1rem">

                    <span style="" v-for="skill in currentUserProfile.skills.split(',')"
                          v-bind:key="skill.id">
                                                <a-tag color="#1F81CE"
                                                       >{{ skill }}</a-tag>

                                            </span>

                  </div>


                  <p style="font-family: sofia_probold;text-decoration: underline;text-decoration-color: #1F81CE">Projects Done</p>
                  <Projects/>
                  <p style="font-family: sofia_probold;text-decoration: underline;text-decoration-color: #1F81CE">Work Experience</p>
                  <Work/>
                  <Education/>


                </div>

              </div>

            </a-col>
          </a-row>


        </div>



      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import CandidateSider from "@/components/frontend/developer/layout/CandidateSider";
import Work from "@/components/frontend/developer/CvComponents/experience";
import Projects from "@/components/frontend/developer/CvComponents/projects";
import Education from "@/components/frontend/developer/CvComponents/education";
import moment from "moment";
let countries = require("@/store/location.json")
import UsersService from "@/services/UsersService";
class Experience {
  constructor(id, title, description, company, location, duration, tech_used, start, end) {
    this.key = id;
    this.title = title;
    this.description = description;
    this.company = company;
    this.duration = duration;
    this.tags = tech_used;
    this.location = location;
    this.start = start;
    this.end = end;

  }
}


export default {
  name: "Cv",
  data() {

    return {
      currentUserProfile: {},
      experienceslist: [],
      experiences: [],
      dataload:false,
      countrieslist: null,


    }
  },
  components: {
    CandidateSider,Work,Projects,Education

  },
  async mounted() {
    this.countrieslist = countries
    this.currentUserProfile = this.$store.state.user_object
    this.FetchExperience()


  },


  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
    moment: function (date) {
      return moment(date).format('MMMM  YYYY');
    },
    truncate: function (text) {
      let length = 45
      let suffix = '...'
      if (text.length > length) {
        return text.substring(0, length) + suffix;
      } else {
        return text;
      }
    },
    countryname:function (abrev){
      for (const [key, value] of Object.entries(countries)) {
        if (key === abrev) {

          return  value
        }

      }

    }
  },
  methods:{
    FetchExperience() {
      this.experienceslist = []
      this.experiences = []


      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      this.dataload = true

      UsersService.experience(this.$store.state.user.pk, auth).then(
          resp => {
            this.experienceslist = resp.data
            this.ComputeExperience()
          }
      )


    },
    ComputeExperience() {
      this.experienceslist.forEach(item => {
        let id = item.id
        let title = item.title
        let description = item.description
        let company = item.company
        let location = item.location
        let duration = item.duration
        let start = item.work_start_month
        let end = item.work_end_month
        let tech_used = []
        if (item.tech_tags) {
          tech_used = item.tech_tags.split(',');
        }

        let one_experience = new Experience(
            id, title, description, company, location, duration, tech_used, start, end
        );
        this.experiences.push(one_experience)
      })
      this.dataload = false

    },
    printDiv(divName) {
      var printContents = document.getElementById(divName).innerHTML;
      var originalContents = document.body.innerHTML;

      document.body.innerHTML = printContents;

      window.print();

      document.body.innerHTML = originalContents;


    },
  }
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
.card-img-top{
  width: 100%;
  height: 15vw;
  object-fit: cover;
}
.cardshadow {
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;
  background: white;
  border-radius: 0;

}
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
