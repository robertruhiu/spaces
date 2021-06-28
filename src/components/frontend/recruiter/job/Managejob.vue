<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh;background-color:#ffffff ">

    <RecruiterSider/>


    <a-layout-content :style="{   background: '#FAFBFF', minHeight: '280px', }">
      <a-card class="hellocard" :bordered="false">

        <a-row style="color: white">
          <a-col span="12">
            <a-breadcrumb>
              <a-breadcrumb-item><a @click="$router.push('/recruiter')" style="color: white">Home</a>
              </a-breadcrumb-item>
              <a-breadcrumb-item style="color: white">Manage Jobs</a-breadcrumb-item>

            </a-breadcrumb>
            <span style="font-size: 1.7rem;font-family: sofia_prosemibold;margin-bottom: 0;color: white">
                Jobs</span>
          </a-col>

          <a-col :xs="{span: 12, offset: 0 }" :sm="{span: 12, offset: 0 }"
                 :md="{span: 12, offset: 0 }"
                 :lg="{span: 8, offset: 0 }" :xl="{span: 6,offset: 0 }">
            <a-button
                type="primary" @click="navigateTo({name:'CreateJob'})">
              <a-icon type="plus"/>
              Create a new Job
            </a-button>


          </a-col>

        </a-row>


      </a-card>

      <div style="">
        <a-row :gutter="16" style="margin-left: 0;margin-right: 0">

          <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                 :md="{span: 24, offset: 0 }"
                 :lg="{span: 24 }" :xl="{span: 20 }">
            <div v-if="loading" class="loading" style="text-align: center;">
              <a-row :gutter="16" style="margin-left: 0;margin-right: 0">


                <a-col :xs="{span: 24 }" :sm="{span: 24 }" :md="{span: 24 }"
                       :lg="{span: 24 }" :xl="{span: 20 }">

                  <a-skeleton active/>
                  <a-skeleton active/>
                  <a-skeleton active/>
                </a-col>
              </a-row>
            </div>
            <div v-else>
              <a-row :gutter="16" style="margin-left: 0;margin-right: 0">


                <a-col :xs="{span: 24 }" :sm="{span: 24 }" :md="{span: 24 }"
                       :lg="{span: 24 }" :xl="{span: 24 }">

                  <a-input-search placeholder="search for a job" style="margin-bottom: 1rem" @search="onSearch"/>
                  <div style="margin-bottom: 1rem">
                    Search parameters (you can also check only the tags you want your search to cover) :
                    <a-checkable-tag v-model="checked1" @change="onSearch">
                      Job title
                    </a-checkable-tag>
                    <a-checkable-tag v-model="checked2" @change="onSearch">
                      skill
                    </a-checkable-tag>

                    <a-checkable-tag v-model="checked4" @change="onSearch">
                      company
                    </a-checkable-tag>
                  </div>

                  <div class="hero" style="background-color: #FAFAFA">
                    <a-row>
                      <a-col span="6">
                        <span style="font-weight: bold">Job title</span>
                      </a-col>

                      <a-col span="6">
                        Skills


                      </a-col>
                      <a-col span="4">
                        Company

                      </a-col>
                      <a-col span="4">
                        Date posted

                      </a-col>


                      <a-col span="4">
                        Manage

                      </a-col>
                    </a-row>


                  </div>


                  <a-list item-layout="horizontal" :data-source="DataChoice"
                          :pagination="pagination"
                          style="overflow-y: scroll;padding: 1%;height: 68vh;margin-bottom: 1rem">
                    <div slot="footer"><b>Your ideal developer is one click away </b></div>
                    <a-list-item slot="renderItem" slot-scope="item">

                      <div class="hero" style="width: 100%">
                        <a-row>
                          <a-col span="6">
                            <span style="font-weight: bold">{{ item.title }}</span>
                            <a-tag color="green" v-if="item.published">
                              published
                            </a-tag>
                            <a-tag color="orange" v-if="!item.verified">
                              awaiting verification
                            </a-tag>
                            <a-tag color="purple" v-if="item.team">
                              team
                            </a-tag>
                          </a-col>

                          <a-col span="6">
                            <span v-if="item.tech_stack">
                              <span style="" v-for="skill in item.tech_stack.split(',')" v-bind:key="skill.id">
                              <a-tag color="#F0F6FD" style="color:#007BFF;">{{ skill }}</a-tag>
                            </span>
                            </span>


                          </a-col>
                          <a-col span="4">
                            {{ item.company }}

                          </a-col>
                          <a-col span="4">
                            {{ item.created | moment }}

                          </a-col>

                          <a-col span="4">
                            <a-button size="small" v-if="item.verified"
                                      @click="navigateTo({name:'job',params:{jobId: item.id}})"

                                      type="primary">Manage Job
                            </a-button>
                            <div v-else>
                              <a-button size="small" v-if="item.posted_by === currentUserProfile.id"
                                        @click="navigateTo({name:'CreateJob',params:{jobId: item.id}})"

                                        type="primary">Edit Job
                              </a-button>
                              <span v-else>

                              </span>


                            </div>


                          </a-col>
                        </a-row>


                      </div>
                    </a-list-item>
                  </a-list>


                </a-col>
              </a-row>
            </div>

          </a-col>
        </a-row>
      </div>
      <lena/>


      <div id="components-back-top-demo-custom">
        <a-back-top>
          <div class="ant-back-top-inner">
            UP
          </div>
        </a-back-top>

      </div>


    </a-layout-content>


  </a-layout>
</template>


<script>


import Marketplace from '@/services/Marketplace'
import lena from '@/components/frontend/recruiter/lena/lena'
import RecruiterSider from "../layout/RecruiterSider";
import moment from 'moment';
import Organizations from "@/services/Organizations";

export default {
  name: 'Managejob',
  data() {
    return {
      currentUserProfile: null,
      jobs: null,
      loading: false,
      pagination: {

        pageSize: 20,
      },
      current: 1,
      checked1: true,
      checked2: true,
      checked4: true,
      filterdata: [],
      searchterm: '',
      user_organizations: [],
      organizationjobs: []


    }
  },
  components: {
    RecruiterSider, lena


  },
  async mounted() {

    this.loading = true

    if (this.$store.state.user.pk) {
      this.currentUserProfile = this.$store.state.user_object
      this.fetchjobs()

    }


  },
  computed: {
    DataChoice() {
      let data = []
      if (this.filterdata.length > 0) {
        data = this.filterdata
      } else {

        data = this.jobs

      }
      return data
    }
  },
  filters: {
    moment: function (date) {
      return moment(date).format('MMMM Do YYYY');
    },

  },

  methods: {
    moment,
    fetchjobs() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }

      Marketplace.myjobs(this.$store.state.user.pk, auth)
          .then(resp => {
            this.jobs = resp.data
            this.getOrganization()
            this.loading = false
            this.jobs.forEach(job => {
              this.createjobtag(job)
            })

          })

    },
    getOrganization() {
      this.loading = true
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      Organizations.myorganizations(this.$store.state.user.pk, auth)
          .then(resp => {
            this.user_organizations = resp.data
            this.getOrganizationJobs()

            this.loading = false


          })


    },
    getOrganizationJobs() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      this.user_organizations.forEach(team => {
        Marketplace.organizationjobs(team.organization.id, auth)
            .then(resp => {
              resp.data.forEach(job => {
                this.organizationjobs.push(job)
              })
              if(this.jobs.length>0){
                this.jobs.forEach(job => {
                  this.organizationjobs.forEach(orgjob => {
                    if (orgjob.id === job.id) {
                      const index = this.organizationjobs.indexOf(orgjob);
                      if (index > -1) {
                        this.organizationjobs.splice(index, 1);
                      }
                    }
                  })

                })
              }
              this.jobs = this.jobs.concat(this.organizationjobs);
              console.log(this.jobs)


              this.loading = false


            })

      })





    },

    createjobtag(job) {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }

      function dec2hex(dec) {
        return ('0' + dec.toString(16)).substr(-2)
      }

      function generateId(len) {
        var arr = new Uint8Array((len || 40) / 2)
        window.crypto.getRandomValues(arr)
        return Array.from(arr, dec2hex).join('')
      }

      if (job.tag === null || job.tag === '') {
        if (this.currentUserProfile.user.is_staff) {
          job.tag = generateId(6)
          Marketplace.updatejob(job.id, job, auth)

        }
      }
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
    onSearch(value) {
      this.searchterm = value
      this.filterdata = []
      let checkedtags = []
      if (this.checked1) {
        checkedtags.push('title')
      }
      if (this.checked2) {
        checkedtags.push('skill')
      }
      if (this.checked4) {
        checkedtags.push('company')
      }


      this.jobs.forEach(job => {

        let unsetdata = []
        if (checkedtags.includes('title')) {

          if (job.title.toLowerCase().includes(this.searchterm.toLowerCase())) {

            unsetdata.push(job)
          }
        }
        if (checkedtags.includes('skill')) {
          if (job.tech_stack) {
            if (job.tech_stack.toLowerCase().includes(this.searchterm.toLowerCase())) {

              unsetdata.push(job)
            }
          }


        }


        if (checkedtags.includes('company')) {
          if (job.company.toLowerCase().includes(this.searchterm.toLowerCase())) {

            unsetdata.push(job)
          }

        }


        if (unsetdata.length > 0) {
          let uniq = [...new Set(unsetdata)];
          this.filterdata.push(uniq[0])
        }


      })
      if (this.filterdata.length === 0) {
        this.$message.error('no result found try another search');
      }

    }

  },

}
</script>

<style scoped>

#components-back-top-demo-custom .ant-back-top {
  bottom: 100px;
}

#components-back-top-demo-custom .ant-back-top-inner {
  height: 40px;
  width: 40px;
  line-height: 40px;
  border-radius: 4px;
  background-color: #1088e9;
  color: #fff;
  text-align: center;
  font-size: 20px;
}

.hellocard {
  height: 8rem;
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;
  background: #004EC7;
  border-radius: 0;
  margin-bottom: 1rem;
  color: white;

}


.hero {
  padding: 1%;
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;
  background-color: white;
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
