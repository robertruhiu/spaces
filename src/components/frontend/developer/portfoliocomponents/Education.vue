<template>
  <div style="overflow-y: scroll;padding: 1%;height: 70vh;">
    <p style="font-family: sofia_probold;text-decoration: underline;text-decoration-color: #1F81CE">Education</p>
    <div style="color: blue">
      <a-button type="primary" @click="showModalEducation">
        <a-icon type="plus-circle" theme="twoTone"/>
        Add Education
      </a-button>
    </div>
    <br>
    <div v-if="loading">
      <div style="text-align: center">
        <div>
          <a-skeleton active/>
        </div>
      </div>

    </div>
    <div v-else>
      <div v-if="schools.length>0">
        <a-timeline>
          <a-timeline-item v-for="item in schools"
                           v-bind:key="item.id">
            <p style="font-weight: 700">
              {{ item.school }}
              <a @click="EditEducation(item)">
                <a-icon type="edit" theme="twoTone"/>
              </a>

            </p>

            <p>
              {{ item.course }}


            </p>


            <p>{{ item.start_month |moment }} -{{ item.end_month |moment }}</p>
          </a-timeline-item>
        </a-timeline>
      </div>
      <div v-else>
        <a-alert message="please add your educational background" type="info" style="width: 50%"/>

      </div>
    </div>


    <br>
    <p style="font-family: sofia_probold;text-decoration: underline;text-decoration-color: #1F81CE">Certificates</p>
    <div style="color: blue">
      <a-button type="primary" @click="showModalCertifcates">
        <a-icon type="plus-circle" theme="twoTone"/>
        Add Certificate
      </a-button>
    </div>
    <br>
    <div v-if="loading">
      <div style="text-align: center">
        <div>
          <a-skeleton active/>
        </div>
      </div>

    </div>
    <div v-else>
      <div v-if="certificates.length>0">
        <a-timeline>
          <a-timeline-item v-for="item in certificates"
                           v-bind:key="item.id">
            <p style="font-weight: 700">
              {{ item.course }}
              <a @click="EditCertificate(item)">
                <a-icon type="edit" theme="twoTone"/>
              </a>

            </p>

            <p>
              Issuing organization: {{ item.school }}


            </p>


            <p>Issued on : {{ item.start_month |moment }}</p>
          </a-timeline-item>
        </a-timeline>
      </div>
      <div v-else>
        <a-alert message="please add your certificates" type="info" style="width: 50%"/>

      </div>
    </div>


    <br>


    <a-modal v-model="Certificatevisible" :title="certificate_title">
      <template slot="footer">
        <a-popconfirm
            title="Are you sure delete this certificate entry?"
            ok-text="Yes"
            cancel-text="No"
            @confirm="Delete(currententry.id)"
            v-if="edit"

        >
          <a-button  type="danger"  >
            Delete
          </a-button>

        </a-popconfirm>


        <a-button key="submit" type="primary" @click="Save">
          Save
        </a-button>
      </template>
      <a-form-item
          label="Certificate name"
          :label-col="{ span: 24 }"
          :wrapper-col="{ span: 24 }"
      >
        <a-input
            name="course_title"
            v-model="course" v-validate="'required'"
            data-vv-validate-on="change|custom|input"


        />
        <span class="errorMessage">{{ errors.first('course_title') }}</span>


      </a-form-item>
      <a-form-item
          label="Issuing organization"
          :label-col="{ span: 24 }"
          :wrapper-col="{ span: 24 }"
      >
        <a-input
            v-model="school" v-validate="'required'"
            data-vv-validate-on="change|custom|input"


        />
        <span class="errorMessage">{{ errors.first('Institution_title') }}</span>


      </a-form-item>
      <a-form-item
          label="Issue month"
          :label-col="{ span: 24 }"
          :wrapper-col="{ span: 24 }"
      >

        <a-month-picker placeholder="Select month"
                        v-model="start" v-validate="'required'"
                        name="starting_month" data-vv-validate-on="change|custom|input"
        >

        </a-month-picker>
        <br>
        <span class="errorMessage">{{ errors.first('starting_month') }}</span>


      </a-form-item>
    </a-modal>
    <a-modal v-model="Educationvisible" :title="education_title">
      <template slot="footer">
        <a-popconfirm
            title="Are you sure delete this education entry?"
            ok-text="Yes"
            cancel-text="No"
            @confirm="Delete(currententry.id)"
            v-if="edit"

        >
          <a-button  type="danger"  >
            Delete
          </a-button>

        </a-popconfirm>

        <a-button key="submit" type="primary" @click="Save">
          Save
        </a-button>
      </template>
      <a-form-item
          label="Institution name"
          :label-col="{ span: 24 }"
          :wrapper-col="{ span: 24 }"
      >
        <a-input
            name="Institution_title"
            v-model="school" v-validate="'required'"
            data-vv-validate-on="change|custom|input"


        />
        <span class="errorMessage">{{ errors.first('Institution_title') }}</span>


      </a-form-item>
      <a-form-item
          label="Degree or course title"
          :label-col="{ span: 24 }"
          :wrapper-col="{ span: 24 }"
      >
        <a-input
            name="course_title"
            v-model="course" v-validate="'required'"
            data-vv-validate-on="change|custom|input"


        />
        <span class="errorMessage">{{ errors.first('course_title') }}</span>


      </a-form-item>
      <a-form-item
          label="Start and End of course"
          :label-col="{ span: 24 }"
          :wrapper-col="{ span: 24 }"
      >
        <a-space>
          <a-month-picker placeholder="Start month"
                          v-model="start" v-validate="'required'"
                          name="starting_month" data-vv-validate-on="change|custom|input"
          >

          </a-month-picker>
          <br>
          <span class="errorMessage">{{ errors.first('starting_month') }}</span>
          <a-month-picker placeholder="End month"
                          v-model="end"
                          v-validate="'required'" name="ending_month" data-vv-validate-on="change|custom|input"
          >

          </a-month-picker>
          <br>
          <span class="errorMessage">{{ errors.first('ending_month') }}</span>
        </a-space>


      </a-form-item>
    </a-modal>

  </div>
</template>

<script>
import UsersService from "@/services/UsersService";
import Vue from 'vue';
import VeeValidate from 'vee-validate';
import moment from "moment";

Vue.use(VeeValidate, {
  events: 'change|input|custom'
});
export default {
  name: "Education",
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
