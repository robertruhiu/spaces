<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh;background-color:#F8FAFB ">
    <pageheader></pageheader>


    <a-layout :style="{backgroundColor:'#F8FAFB',marginTop: '1rem' }">


      <a-layout-content style="margin-top: 5rem">

        <a-row>
          <a-col :xs="{span: 20, offset: 2 }" :sm="{span: 20, offset: 2 }" :md="{span: 20, offset: 2 }"
                 :lg="{span: 14, offset: 6 }" :xl="{span: 14, offset: 6 }" class="jobdetails">


            <div v-if="dataload" style="text-align: center">
              <a-skeleton active/>
              <a-skeleton active/>
              <a-skeleton active/>
            </div>
            <div v-else>
              <div style="border-bottom: 1px solid #e8e8e8;margin-bottom: 1%;padding-bottom: 3%;">
                            <span>
                                <span style="font-weight: 700;font-size: large">{{ job.title }}</span>

                                <span v-if="currentUserProfile">

                                    <span style="float: right"
                                          v-if="currentUserProfile.user_type ==='developer' && applied === false  && currentUserProfile.stage === 'complete' ">
                                    <div v-if="save">
                                        <a-spin/>
                                    </div>
                                        <span v-else>
                                          <a-button v-if="currentUserProfile && cv === ''" type="primary"
                                                    @click="UploadVcModal()">Apply</a-button>

                                            <a-button v-if="currentUserProfile && cv !==''" type="primary"
                                                      @click="ApplicationModal()">Apply</a-button>


                                        </span>



                                </span>

                                <span style="float: right"
                                      v-if="currentUserProfile.user_type ==='developer' && applied === true  ">
                                    <a-button type="primary" @click="navigateTo({name:'manageapplications'})"
                                    >Manage Job application</a-button>

                                </span>
                                  <span style="float: right"
                                        v-if="currentUserProfile.stage !== 'complete'  ">
                                    <a-button type="primary"
                                              @click="navigateTo({name:'register'})">Registration incomplete click to continue</a-button>

                                  </span>
                                </span>



                                <span v-else style="float: right">
                                        <a-button type="primary"
                                                  @click="navigateTo({name:'login'})">Login to apply</a-button>
                                    </span>



                            </span>

              </div>
              <div>
                                <span v-if="this.$store.state.isUserLoggedIn">
                                    <a-alert v-if="currentUserProfile.user_type ==='developer' && applied "
                                             message="Job application successful" type="success" closeText="Close Now"/>
                                </span>
                <span> Job tag :
                                    <a-tag color="#F0F6FD" style='color: #007BFF'>
                                        <a-icon type="tags"/>
                                        {{ job.tag }}
                                    </a-tag>
                                </span>

                <p>

                  Country : {{ country }} <span
                    v-if="job.city">| City : {{ job.city }}</span>


                </p>
                <p>Contract type: {{ job.engagement_type }}</p>
                <p>Monthly renumeration * : {{ job.remuneration }}</p>

                <p>
                  Skills looking for :
                  <span style="" v-for="skill in skills" v-bind:key="skill">
                                    <a-tag color="#F0F6FD" style="color:#007BFF;">{{ skill }}</a-tag>
                                </span>
                </p>
                <p>Application Deadline : {{ job.deadline | moment }}</p>
              </div>
              <div>
                <p style="font-weight: 700">Job Details</p>
                <markdown>{{ job.description }}</markdown>

              </div>
            </div>

          </a-col>

        </a-row>
        <a-modal
            title="Please fill your Profile"
            v-model="fillprofile"
            style="top: 20px;"

        >
          <template slot="footer">

            <a-button key="submit" type="primary" @click="$router.push('/portfolio')">
              Edit Profile
            </a-button>
          </template>
          <div>

            <p>Hello your profile is not complete.To enable us to easily analyse your fitness for the
              job,satisy the following below</p>
            <p v-for="item in error" v-bind:key="item">
              <span style="color: #ff0000">* {{ item }}</span>
            </p>

            Click on Edit profile button to complete your profile.


          </div>


        </a-modal>

        <a-modal v-model="applyterms" title="Application placement" :footer=null>
          <p><strong> Placement</strong></p>
          <p>Final successful placement is upto the client.By applying its not an assurance of getting the job</p>
          <p><strong> Communication</strong></p>
          <p>All parties will be kept in the loop in terms of where the application stand.You can monitor this on you
            manage applications on your dashboard.
            Note communication timeline is highly determined by the client so patience is key</p>
          <p><strong>Skill Verification</strong></p>
          <p>As per our objective as Codeln is to enable employment of skilled developers.Your skills may be called for
            test .That will be a Codeln owned project aligned to
            client needs.We retain the code and only share a demo of your work and a performance report based on your
            code</p>
          <p><strong>Data shared</strong></p>
          <p>On registration you are requested to provide data such as your cv,github,linkedin profiles and other
            details. This data will be available
            to our clients for review</p>
          <p>By Applying i agree to be bound by the above</p>
          <a-button type="primary" @click="ApplyJob">Apply</a-button>
        </a-modal>
        <a-modal v-model="cvupload" title="CV missing" :footer=null>
          <div v-if="cv">
            <a :href="cv" target="_blank">cv link</a>
          </div>

          <div v-else>
            <div v-if="uploading">
              <span>Uploading file <a-spin/></span>

            </div>
            <div v-else>
              Upload cv
              <input style="margin-top: 1rem" accept="application/pdf" type="file"
                     @change="handleUpload">
            </div>


          </div>
        </a-modal>


      </a-layout-content>
    </a-layout>
  </a-layout>

</template>

<script>

import UsersService from '@/services/UsersService'
import Pageheader from '@/components/layout/Header.vue'
import ARow from "ant-design-vue/es/grid/Row";
import ACol from "ant-design-vue/es/grid/Col";
import MarketPlaceService from '@/services/Marketplace'
import moment from 'moment';
import markdown from 'vue-markdown'
import axios from "axios";

const countries = require("@/store/countries")

export default {
  name: "jobdetails",
  data() {
    return {
      job: {},
      skills: [],
      currentUserProfile: null,
      applied: false,
      myjobs: [],
      dataload: false,
      deadline: '',
      save: false,
      country: '',
      portfolio: 0,
      experiences: 0,
      error: [],
      fillprofile: false,
      applyterms: false,
      experienceslist: [],
      portfoliolist: [],
      cvupload: false,
      cv: '',
      uploading: false


    }
  },
  components: {
    ACol,
    ARow,
    Pageheader,
    markdown
  },
  async mounted() {
    moment
    if (this.$store.state.user_object) {
      this.currentUserProfile = this.$store.state.user_object
      if (this.$store.state.user_object.file) {
        this.cv = this.$store.state.user_object.file
      }

    }


    this.dataload = true
    this.fetchJob()


  },
  filters: {
    moment: function (date) {
      return moment(date).format('MMMM Do YYYY');
    },

  },

  methods: {
    moment,
    fetchJob(){
      MarketPlaceService.jobdetails(this.$route.params.jobId)
          .then(resp => {
            this.job = resp.data
            if (this.job.tech_stack) {
              this.skills = this.job.tech_stack.split(',');

            }
            this.deadline = moment(this.job.deadline).format("YYYY-MM-DD HH:mm:ss")
            for (const [key, value] of Object.entries(countries)) {
              if (key === this.job.location) {
                this.country = value
              }
            }
            if (this.$store.state.isUserLoggedIn) {
              this.isAppliedLookup()
            }else {
              this.dataload = false
            }
          })
    },
    isAppliedLookup(){
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      MarketPlaceService.isappliedlookup(this.$store.state.user.pk, auth)
          .then((resp) => {
            this.myjobs = resp.data
            if (this.myjobs && this.job) {
              this.myjobs.forEach(job => {
                if (job.job.id === this.job.id) {
                  this.applied = true
                }


              })

            }
            this.dataload = false
            this.Applicationvalidators()


          })

    },


    Applicationvalidators() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      if (this.currentUserProfile.user_type === 'developer') {
        UsersService.portfolio(this.$store.state.user.pk, auth)
            .then(resp => {
              this.portfoliolist = resp.data

            })
        UsersService.experience(this.$store.state.user.pk, auth)
            .then(resp => {
              this.experienceslist = resp.data


            })


        if (this.currentUserProfile.file === '' || this.currentUserProfile.file === null) {
          this.error.push('cv required')
        }
        if (this.experienceslist.length === 0) {
          this.error.push('at least one work experience')
        }

        if (this.portfoliolist) {
          this.error.push('at least one personal project')
        }

      }

    },

    navigateTo(route) {
      this.$router.push(route)
    },
    Fillprofile() {
      this.fillprofile = true
    },

    ApplicationModal() {
      this.applyterms = true
    },
    UploadVcModal() {
      this.cvupload = true
    },


    ApplyJob() {
      let job = this.job.id
      let dev = this.currentUserProfile.id
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      this.applyterms = false
      this.save = true
      MarketPlaceService.applyjob(
          {
            job: job,
            candidate: dev,
            recruiter: this.job.posted_by,
            stage: 'new',
            selected: false,
            type: 'applied'

          },
          auth
      )
          .then(() => {
                this.save = false
                this.applied = true


              }
          )
          .catch(error => {
            return error


          });


    },
    async handleUpload(e) {
      this.uploading = true
      const cloudName = process.env.VUE_APP_CLOUD;
      const unsignedUploadPreset = 'ml_default';


      const file = e.target.files[0];
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', unsignedUploadPreset);
      let CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/${cloudName}/raw/upload`

      // Send to cloudianry
      const res = await axios.post(
          CLOUDINARY_URL,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            },

          }
      );
      this.cv = res.data.secure_url
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      UsersService.updatepatch(this.$store.state.user.pk, {file: this.cv.slice(48)}, auth)
          .then(() => {
            this.$store.state.user_object.file = this.cv.slice(48)
            this.$message.success('cv succesfully uploaded');
            this.cvupload = false
            this.applyterms = true
          })


    },

  }
}
</script>

<style scoped>
.jobdetails {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: white;
  padding: 2%;

}
</style>
