<template>
  <div>

    <div v-if="dataload">
      <div style="text-align: center">
        <div>
          <a-skeleton active/>
        </div>
      </div>

    </div>
    <div v-else>
      <div v-if="experiences.length>0">
        <a-timeline>
          <a-timeline-item v-for="item in experiences"
                           v-bind:key="item.id">

            <p style="font-weight: 700">
              {{ item.title }}


            </p>

            <span v-if="item.start">{{ item.start  | moment }}

                  </span>
            <span v-if="item.end">
                    to
                    {{ item.end  | moment }}
                  </span>
            <span v-else>
                    to present

                  </span>
            <p><span><a-icon type="bank"/>  {{ item.company }} <a-icon
                type="environment"/>  {{ item.location |countryname }} </span>
            </p>
            <p>
              Technologies used:
              <a-tag v-for="tag in item.tags" color="blue"
                     :key="tag">
                {{ tag }}
              </a-tag>

            </p>


            <p>{{ item.description |truncate }}</p>

          </a-timeline-item>

        </a-timeline>

      </div>

    </div>
  </div>
</template>

<script>
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
  name: "experience",
  data() {

    return {
      currentUserProfile: {},
      experienceslist: [],
      experiences: [],
      dataload:false,
      countrieslist: null,


    }
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
        if(item.work_start_month){
          this.experiences.push(one_experience)
        }

      })
      this.dataload = false

    },
  }
}
</script>

<style scoped>

</style>
