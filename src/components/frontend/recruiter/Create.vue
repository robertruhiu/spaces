<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">

    <RecruiterSider/>

    <a-layout :style="{ background: 'white', minHeight: '280px', }">


      <a-layout-content>
        <a-card class="hellocard" :bordered="false">

          <a-row>
            <a-col span="12">
              <a-breadcrumb>
                <a-breadcrumb-item><a @click="$router.push('/recruiter')" style="color: white">Home</a></a-breadcrumb-item>
                <a-breadcrumb-item style="color: white">Create a Job</a-breadcrumb-item>

              </a-breadcrumb>
              <span style="font-size: 1.7rem;font-family: sofia_prosemibold;margin-bottom: 0;color: white">
                Create a Job</span>
            </a-col>


          </a-row>


        </a-card>
        <div style="padding: 1% 2%">
          <a-row>
            <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                   :md="{span: 24, offset: 0 }"
                   :lg="{span: 24, offset: 0 }" :xl="{span: 20, offset: 0 }">
              <a-card>
                <a-steps :current="current">
                  <a-step v-for="item in steps" :key="item.title" :title="item.title"/>
                </a-steps>
                <a-form>
                  <div class="steps-content">
                    <div v-if="dataload">
                      <a-skeleton active />
                      <a-skeleton active />
                    </div>
                    <div v-else>
                      <div v-if="current === 0">
                        <a-row :gutter="16">
                          <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                                 :md="{span: 12, offset: 0 }"
                                 :lg="{span: 8, offset: 0 }" :xl="{span: 8, offset: 0 }"
                          >
                            <a-form-item label="Job Title">


                              <a-input v-model="job.title">

                              </a-input>
                              <span v-for="error in errorlist" v-bind:key="error">
                                                <span v-if="error === 'title'" style="color: red">
                                                    * required field
                                                </span>
                                            </span>


                            </a-form-item>
                          </a-col>
                          <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                                 :md="{span: 12, offset: 0 }"
                                 :lg="{span: 8, offset: 0 }" :xl="{span: 8, offset: 0 }"
                          >
                            <a-form-item label="Job role">
                              <a-select
                                  placeholder="Select a option"
                                  v-model="job.job_role"
                              >
                                <a-select-option value="Full Stack Developer">
                                  Full Stack Developer
                                </a-select-option>
                                <a-select-option value="Frontend Developer">
                                  Frontend Developer
                                </a-select-option>
                                <a-select-option value="Backend  Developer">
                                  Backend Developer
                                </a-select-option>
                                <a-select-option value="Android  Developer">
                                  Android Developer
                                </a-select-option>
                                <a-select-option value="Graphic Designer">
                                  Graphic Designer
                                </a-select-option>
                                <a-select-option value="IOS Developer">
                                  IOS Developer
                                </a-select-option>
                                <a-select-option value="Data Scientist">
                                  Data Scientist
                                </a-select-option>
                              </a-select>
                              <span v-for="error in errorlist" v-bind:key="error">
                                                <span v-if="error === 'role'" style="color: red">
                                                    * required field
                                                </span>
                                            </span>
                            </a-form-item>
                          </a-col>
                          <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                                 :md="{span: 12, offset: 0 }"
                                 :lg="{span: 8, offset: 0 }" :xl="{span: 8, offset: 0 }"
                          >
                            <a-form-item label="Years of Experience">
                              <a-select
                                  placeholder="Select a option"
                                  v-model="job.years_experience"
                              >

                                <a-select-option value="0-1">
                                  0-1
                                </a-select-option>
                                <a-select-option value="1-3">
                                  1-3
                                </a-select-option>
                                <a-select-option value="3-above">
                                  3-above
                                </a-select-option>

                              </a-select>
                              <span v-for="error in errorlist" v-bind:key="error">
                                                <span v-if="error === 'years'" style="color: red">
                                                    * required field
                                                </span>
                                            </span>
                            </a-form-item>
                          </a-col>
                        </a-row>
                        <a-row :gutter="16">
                          <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                                 :md="{span: 12, offset: 0 }"
                                 :lg="{span: 8, offset: 0 }" :xl="{span: 8, offset: 0 }">
                            <a-form-item label="Contract type">
                              <a-select
                                  placeholder="Select a option"
                                  v-model="job.engagement_type"
                              >
                                <a-select-option value="Full-time">
                                  Full-time
                                </a-select-option>
                                <a-select-option value="Part-time">
                                  Part-time
                                </a-select-option>
                                <a-select-option value="Contract">
                                  Contract
                                </a-select-option>
                                <a-select-option value="Remote">
                                  Remote
                                </a-select-option>
                                <a-select-option value="Freelance">
                                  Freelance
                                </a-select-option>
                              </a-select>
                              <span v-for="error in errorlist" v-bind:key="error">
                                                <span v-if="error === 'engagement'" style="color: red">
                                                    * required field
                                                </span>
                                            </span>
                            </a-form-item>
                          </a-col>
                          <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                                 :md="{span: 12, offset: 0 }"
                                 :lg="{span: 8, offset: 0 }" :xl="{span: 8, offset: 0 }">
                            <a-form-item label="Location">
                              <country-select v-model="job.location"
                                              class="ant-input"
                              />
                              <span v-for="error in errorlist" v-bind:key="error">
                                                <span v-if="error === 'location'" style="color: red">
                                                    * required field
                                                </span>
                                            </span>
                            </a-form-item>
                          </a-col>
                          <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                                 :md="{span: 12, offset: 0 }"
                                 :lg="{span: 8, offset: 0 }" :xl="{span: 8, offset: 0 }">
                            <a-form-item label="City of operation  ">
                              <a-input placeholder="lagos,accra,nairobi...etc" v-model="job.city">
                              </a-input>

                            </a-form-item>
                          </a-col>
                        </a-row>
                        <a-row :gutter="16">

                          <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                                 :md="{span: 12, offset: 0 }"
                                 :lg="{span: 8, offset: 0 }" :xl="{span: 8, offset: 0 }">
                            <a-form-item >
                          <span slot="label">Deadline
                            <span v-if="job.deadline">Current deadline:( {{job.deadline}})</span>
                          </span>

                              <a-date-picker v-model="deadline" style="width: 100%"
                                             placeholder="Applications deadline"
                                             format="YYYY-MM-DD HH:mm:ss"
                                             :disabledDate="disabledDate"

                                             :showTime="{ defaultValue: moment('00:00:00', 'HH:mm:ss') }"
                              />
                              <span v-for="error in errorlist" v-bind:key="error">
                                                <span v-if="error === 'deadline'" style="color: red">
                                                    * required field
                                                </span>
                                            </span>
                            </a-form-item>
                          </a-col>
                          <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                                 :md="{span: 12, offset: 0 }"
                                 :lg="{span: 8, offset: 0 }" :xl="{span: 8, offset: 0 }" style="padding-right: 1%">
                            <a-form-item label="Developers needed ">
                              <a-input-number :min="1" v-model="job.num_devs_wanted" style="width: 100%"/>

                              <span v-for="error in errorlist" v-bind:key="error">
                                                <span v-if="error === 'num_devs_wanted'" style="color: red">
                                                    * required field
                                                </span>
                                            </span>
                            </a-form-item>
                          </a-col>
                          <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                                 :md="{span: 12, offset: 0 }"
                                 :lg="{span: 8, offset: 0 }" :xl="{span: 8, offset: 0 }">
                            <a-form-item label="Salary range per month ">
                              <a-input-group compact>
                                <a-select default-value="USD" style="width: 5rem"
                                          v-model="currencytype">

                                  <a-select-option v-for="currency in currenciesarray"
                                                   v-bind:key="currency.code">

                                    {{ currency.code }}
                                  </a-select-option>


                                </a-select>
                                <a-input-number :min="300" style=" width: 100px; text-align: center"
                                                placeholder="Minimum" v-model="min"/>
                                <a-input
                                    style=" width: 30px; border-left: 0; pointer-events: none; backgroundColor: #fff"
                                    placeholder="~"
                                    disabled
                                />
                                <a-input-number :min="400"
                                                style="width: 100px; text-align: center; border-left: 0"
                                                placeholder="Maximum" v-model="max"/>
                              </a-input-group>


                              <span v-for="error in errorlist" v-bind:key="error">
                                                <span v-if="error === 'min'" style="color: red">
                                                    * required field(min)
                                                </span>
                                                <span v-else-if="error==='max'" style="color: red">
                                                    * required field(max)
                                                </span>
                                            </span>

                            </a-form-item>
                          </a-col>
                          <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                                 :md="{span: 12, offset: 0 }"
                                 :lg="{span: 8, offset: 0 }" :xl="{span: 8, offset: 0 }" v-if="$store.state.user_object.user.is_staff "
                          >
                            <a-form-item label="Company">


                              <a-input v-model="job.company">

                              </a-input>



                            </a-form-item>
                          </a-col>



                        </a-row>



                      </div>
                      <div v-if="current === 1">
                        <a-row :gutter="16">
                          <a-col :span="24">
                            <a-form-item>
                              <p style="margin-bottom: 0">Pick skills you are looking for</p>
                              <div>
                                <template v-for=" tag in recommendationtags">
                                  <a-checkable-tag style="border-color: blue;font-size: 12px"
                                                   :key="tag"
                                                   :checked="selectedTags.indexOf(tag) > -1"
                                                   @change="(checked) => handleChange(tag, checked)"
                                  >
                                    {{ tag }}
                                  </a-checkable-tag>

                                </template>
                                <span v-for="error in errorlist1" v-bind:key="error">
                                                <span v-if="error === 'tech_stack'" style="color: red">
                                                    * please pick atleast 1
                                                </span>
                                            </span>
                              </div>
                            </a-form-item>
                          </a-col>
                          <a-col :span="24">
                            <a-form-item
                                label="Job description "
                                :label-col="{ span: 24 }"
                                :wrapper-col="{ span:  24}"
                            >
                              <vue-simplemde v-model="job.description" ref="markdownEditor"/>

                              <span v-for="error in errorlist1" v-bind:key="error">
                                                <span v-if="error === 'description'" style="color: red">
                                                    * required field
                                                </span>
                                            </span>
                            </a-form-item>
                          </a-col>
                        </a-row>
                      </div>
                      <div v-if="current === 2">
                        <p>Preview of how job will appear on job board</p>
                        <a-alert
                            message="Your job will be reviewed by an account manager.They will update and publish it as soon if it matches your expectations."
                            type="info"/>
                        <div class="jobdetails">
                          <div style="border-bottom: 1px solid #e8e8e8;margin-bottom: 1%;padding-bottom: 3%;">
                            <span>
                                <span style="font-weight: 700;font-size: large">{{ job.title }}</span>

                            </span>

                          </div>
                          <div>

                            <p><strong>Company name:</strong> {{ job.company }}
                              <span style="margin-left: 5%">
                                    Location : {{ job.location }}
                                </span>

                            </p>
                            <p>Monthly renumeration * : {{ renumeration }}</p>

                            <p>
                              Skills looking for :
                              <span style="" v-for="skill in selectedTags" v-bind:key="skill">
                                    <a-tag color="#F0F6FD" style="color:#007BFF;">{{ skill }}</a-tag>
                                </span>
                            </p>
                            <p>Application Deadline : {{ job.deadline }}</p>
                          </div>
                          <div>
                            <p style="font-weight: 700">Job Details</p>
                            <markdown>{{ job.description }}</markdown>
                          </div>
                        </div>
                      </div>
                    </div>


                  </div>



                </a-form>
                <div class="steps-action">
                  <div v-if="loading">
                    <a-spin/>

                  </div>
                  <div v-else>
                    <a-button
                        v-if="current < steps.length - 1"
                        type="primary" @click="next(current)"
                    >
                      Next
                    </a-button>
                    <a-button
                        v-if="current == steps.length - 1"
                        type="primary"
                        @click="done"

                    >
                      Done
                    </a-button>
                    <a-button
                        v-if="current>0"
                        style="margin-left: 8px"
                        @click="prev"
                    >
                      Previous
                    </a-button>

                  </div>

                </div>
              </a-card>


            </a-col>


          </a-row>
        </div>

        <lena/>


      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import RecruiterSider from "@/components/frontend/recruiter/layout/RecruiterSider";
import moment from 'moment';
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import lena from '@/components/frontend/recruiter/lena/lena'
import VueSimplemde from 'vue-simplemde'
import 'simplemde/dist/simplemde.min.css';
import markdown from 'vue-markdown'
import Marketplace from "@/services/Marketplace";

let currencies = require("@/store/currency")
export default {
  name: "Create",
  data() {

    return {

      currentUserProfile: null,
      jobs: null,
      mycandidates: [],
      visible: false,
      gutter: 16,
      job: {
        title: null,
        job_role: null,
        engagement_type: null,
        location: null,
        remuneration: null,
        deadline: null,
        num_devs_wanted: null,
        years_experience: null,
        posted_by: null


      },
      inputVisible: false,
      currentUser: {},
      inputValue: '',
      recommendationtags: [],
      selectedTags: [],
      loading: false,
      errorlist: [],
      errorlist1: [],
      current: 0,
      job_steps: [{
        title: 'Job details',

      }, {
        title: 'Skills of interest',

      }, {
        title: 'Job Review',

      }],

      jobmobile: false,
      content: '',
      steps: [{
        title: 'Job details',

      }, {
        title: 'Skills of interest',

      }, {
        title: 'Job Review',

      }],
      min: null,
      max: null,
      currencytype: 'USD',
      deadline:null,
      dataload:false



    }

  },
  components: {
    RecruiterSider, VueSimplemde, markdown, lena


  },
  computed: {

    currenciesarray: () => currencies,
    renumeration() {
      let monthly = this.currencytype + this.min + ' - ' + this.max
      return monthly
    },
    commission() {
      let amount = 0
      if (this.job.years_experience === '0-1') {
        amount = 0.12 * (((this.max + this.min) / 2) * 12)
      } else if (this.job.years_experience === '1-3') {
        amount = 0.12 * (((this.max + this.min) / 2) * 12)
      } else {
        amount = 0.15 * (((this.max + this.min) / 2) * 12)
      }
      return amount

    }
  },
  mounted() {

    if(this.$store.state.route.params.jobId){
      this.dataload = true
      this.currentjob(this.$store.state.route.params.jobId)
    }else {
      this.dataload = true
      this.recentjob()
    }

    let tags  = process.env.VUE_APP_TAGS
    this.recommendationtags = tags.split(',')

  },
  methods: {
    moment,
    currentjob(){
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }

      Marketplace.specificjob(this.$store.state.route.params.jobId, auth)
          .then(resp=>{
            this.job = resp.data
            this.dataload = false
            this.currencytype = this.job.remuneration.substring(0,3)
            let range = this.job.remuneration.slice(3)
            let renumationstring = range.split('-')
            this.min = renumationstring[0]
            this.max = renumationstring[1]
            this.job.deadline = resp.data.deadline
            if(this.job.tech_stack){
              this.selectedTags = this.job.tech_stack.split(',')

            }

          })

    },
    recentjob() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }

      Marketplace.incompletejob(this.$store.state.user.pk, auth)
          .then(resp => {
            this.job = resp.data
            this.dataload = false
            this.currencytype = this.job.remuneration.substring(0,3)
            let range = this.job.remuneration.slice(3)
            let renumationstring = range.split('-')
            this.min = renumationstring[0]
            this.max = renumationstring[1]
            this.job.deadline = resp.data.deadline
            if(this.job.tech_stack){
              this.selectedTags = this.job.tech_stack.split(',')

            }
            this.$message.info('This is your most recent incomplete job');


          })
      .catch((error)=>{
        if(error){
          this.job = {
            title: null,
            job_role: null,
            engagement_type: null,
            location: null,
            remuneration: null,
            deadline: null,
            num_devs_wanted: null,
            years_experience: null,
            posted_by: null


          }
          this.dataload = false
        }

      })

    },
    disabledDate(current) {
      // Can not select days before today and today
      return current && current < moment().endOf('day');
    },

    onCollapse(collapsed) {
      return collapsed;
    },
    onBreakpoint(broken) {
      return broken;
    },



    logout() {
      this.$store.dispatch('setToken', null);
      this.$store.dispatch('setUser', null)
      this.$store.dispatch('setisLoggedIn', false)
      this.$store.dispatch('setUsertype', null)
      this.$store.dispatch('setUser_id', null)
      this.$router.push({
        name: 'home'
      })
    },

    navigateTo(route) {
      this.$router.push(route)
    },


    showInput() {
      this.inputVisible = true
      this.$nextTick(function () {
        this.$refs.input.focus()
      })
    },

    handleInputChange(e) {
      this.inputValue = e.target.value
    },

    handleInputConfirm() {
      const inputValue = this.inputValue
      let tags = this.tags
      if (inputValue && tags.indexOf(inputValue) === -1) {
        tags = [...tags, inputValue]
      }

      let alltags = tags.join(",")
      this.job.tech_stack = alltags
      Object.assign(this, {
        tags,
        inputVisible: false,
        inputValue: '',
      })
    },
    handleChange(tag, checked) {
      const {selectedTags} = this
      const nextSelectedTags = checked
          ? [...selectedTags, tag]
          : selectedTags.filter(t => t !== tag)

      this.selectedTags = nextSelectedTags
      let alltags = this.selectedTags.join(",")
      this.job.tech_stack = alltags
    },
    next(current) {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }

      if (current === 0) {
        this.errorlist = []
        if(this.deadline === null){
          if(this.job.deadline){
            this.deadline = this.job.deadline
          }
        }


        let list1 = {
          title: this.job.title,
          role: this.job.job_role,
          engagement: this.job.engagement_type
          ,
          location: this.job.location,
          min: this.min,
          max: this.max,

          deadline: this.deadline,
          num_devs_wanted: this.job.num_devs_wanted,
          years: this.job.years_experience
        }
        for (const [key, value] of Object.entries(list1)) {

          if (value === null || value === undefined) {

            this.errorlist.push(key)
          }
        }
        if (this.errorlist.length === 0) {
          this.job.posted_by = this.$store.state.user.pk
          this.job.commission = this.commission
          this.job.remuneration = this.renumeration

          if(this.deadline){
            this.job.deadline = this.deadline
          }
          this.loading = true
          if(this.job.id){

            Marketplace.updatejob(this.job.id,
                {
                  title:this.job.title,

                  job_role:this.job.job_role,
                  engagement_type:this.job.engagement_type,
                  location:this.job.location,
                  deadline:this.job.deadline,
                  posted_by:this.job.posted_by,
                  years_experience:this.job.years_experience,
                  num_devs_wanted:this.job.num_devs_wanted,
                  commission:this.commission,
                  remuneration:this.remuneration,
                  city:this.job.city

                }, auth)
                .then(resp => {
                  this.job = resp.data
                  this.loading = false
                  this.current++


                })
                .catch(() => {

                  this.visible = false


                });

          }else {
            Marketplace.createjob(this.job, auth)
                .then(resp => {
                  if(!this.$store.state.user.is_staff){
                    this.job.company = this.$store.state.user_object.company
                  }
                  this.job = resp.data
                  this.loading = false
                  this.current++


                })
                .catch(() => {

                  this.visible = false


                });
          }



        }


      } else if (current === 1) {
        this.errorlist1 = []
        let list1 = {
          tech_stack: this.job.tech_stack,
          description: this.job.description
        }
        for (const [key, value] of Object.entries(list1)) {

          if (value === null || value === undefined) {
            this.errorlist1.push(key)
          }
        }
        this.loading = true
        if (this.errorlist1.length === 0) {
          Marketplace.updatejob(this.job.id,this.job, auth)
              .then(resp => {
                this.job = resp.data
                this.loading = false
                this.current++


              })
              .catch(() => {

                this.visible = false


              });


        }


      }


    },
    prev() {
      this.current--
    },
    async done() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      Marketplace.updatejob(this.job.id,{verified:true}, auth)
          .then(() => {
            this.$router.push({
              name: 'managejobs'
            })
            Marketplace.newjobemail(this.job.id, auth)
                .then()
                .catch()
          })




    }

  },
}
</script>

<style scoped>
.hellocard {


  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;
  border-radius: 0;
  margin-bottom: 1rem;
  height: 8rem;

  background: #004EC7;

  color:white;


}


</style>
