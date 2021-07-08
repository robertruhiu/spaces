<template>
<div>
  <p style="font-family: sofia_probold;text-decoration: underline;text-decoration-color: #1F81CE">Education</p>
  <a-timeline>
    <a-timeline-item v-for="item in schools"
                     v-bind:key="item.id">

      <p style="font-weight: 700">
        {{ item.school }}


      </p>
      <span>{{ item.course }}</span>

      <span v-if="item.start_month">{{ item.start_month  | moment }}

                  </span>
      <span v-if="item.end_month">
                    to
                    {{ item.end_month  | moment }}
                  </span>


    </a-timeline-item>

  </a-timeline>


  <p style="font-family: sofia_probold;text-decoration: underline;text-decoration-color: #1F81CE">Certifications</p>

  <a-timeline>
    <a-timeline-item v-for="item in certificates"
                     v-bind:key="item.id">

      <p style="font-weight: 700">
        {{ item.course }}


      </p>
      <p>{{ item.school }}</p>

      <span v-if="item.start_month">{{ item.start_month  | moment }}

                  </span>



    </a-timeline-item>

  </a-timeline>
</div>
</template>

<script>
import moment from "moment";
import UsersService from "@/services/UsersService";

export default {
  name: "education",
  data() {
    return {
      Certificatevisible: false,
      Educationvisible: false,
      certificate_title: '',
      education_title: '',
      edit: false,
      course: '',
      school: '',
      start: null,
      end: null,
      education_list: [],
      loading: false,
      schools:[],
      certificates:[],
      currententry:null
    };
  },
  filters: {
    moment: function (date) {
      return moment(date).format('MMMM  YYYY');
    },


  },
  mounted() {

    this.FetchEducation()
  },
  methods: {
    FetchEducation() {
      this.loading = true
      this.education_list = []
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      UsersService.education(this.$store.state.user.pk, auth).then(
          resp => {
            this.education_list = resp.data
            this.ComputeEducation()
            this.loading = false

          }
      )
    },
    ComputeEducation(){
      this.schools =[]
      this.certificates=[]
      this.education_list.forEach(entry=>{
        if(entry.end_month){
          this.schools.push(entry)
          const index =  this.education_list.indexOf(entry);
          if (index > -1) {
            this.education_list.splice(index, 1);
          }
        }
        this.certificates =this.education_list
      })
    },
    showModalCertifcates() {
      this.Certificatevisible = true;
      this.certificate_title = 'New Certificate'
    },
    showModalEducation() {
      this.Educationvisible = true;
      this.education_title = 'New Course undertaken'
    },
    EditEducation(entry) {
      this.currententry= entry
      this.Educationvisible = true;
      this.edit =true
      this.certificate_title = 'Edit Course undertaken'
      this.course = entry.course
      this.school = entry.school
      this.start = entry.start_month
      this.end = entry.end_month
    },
    EditCertificate(entry) {
      this.currententry= entry
      this.edit =true
      this.Certificatevisible = true;
      this.certificate_title = 'Edit Certificate'
      this.course = entry.course
      this.school = entry.school
      this.start = entry.start_month

    },
    Save() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      let education_obj = {
        'school': this.school,
        'course': this.course,
        'candidate': this.$store.state.user.pk,
        'start_month': this.start,
        'end_month': this.end,


      }
      this.$validator.validate().then(valid => {
        if (valid) {
          if (this.edit) {
            UsersService.updateeducation(this.currententry.id, education_obj, auth)
                .then(() => {
                  this.Certificatevisible = false;
                  this.Educationvisible = false;
                  this.edit = false
                  this.FetchEducation()
                  this.ResetField()


                })

          } else {
            UsersService.neweducation(education_obj, auth)
                .then(() => {
                  this.Certificatevisible = false;
                  this.Educationvisible = false;
                  this.edit = false
                  this.FetchEducation()
                  this.ResetField()

                })
          }

        } else {
          return 'nop'
        }
      })
    },
    ResetField(){
      this.course = ''
      this.school = ''
      this.start = null
      this.end = null

    },
    Delete(education_id) {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }

      UsersService.deleteeducation(education_id, auth)
          .then(() => {

                this.Certificatevisible = false;
                this.Educationvisible = false;
                this.edit = false
                this.FetchEducation()
                this.ResetField()

              }
          )


    },

  },
}
</script>

<style scoped>

</style>
