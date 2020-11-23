<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh;background-color:#ffffff ">

    <RecruiterSider/>


    <a-layout-content>
      <Pageheader/>
      <div style="padding:0.5% 2%;border-bottom: 1px solid #e8e8e8;margin-bottom: 1rem">
        <a-row :gutter="16" style="margin-left: 0;margin-right: 0">

          <a-col :xs="{span: 18, offset: 2 }" :sm="{span: 18, offset: 2 }"
                 :md="{span: 16, offset: 0 }"
                 :lg="{span: 16, offset: 2 }" :xl="{span: 20,offset: 2 }">
            <div class="hellocard">
              <a-row>
                <a-col span="18">
                  <h1 style="font-size: 2.5rem;font-family: sofia_probold;margin-bottom: 0;color: black">Jobs</h1>
                </a-col>
                <a-col span="6" style="text-align: center">
                  <div style="padding: 7% 0">

                  </div>


                </a-col>
              </a-row>


            </div>


          </a-col>
        </a-row>


      </div>
      <div style="padding:0 2%">
        <a-row :gutter="16" style="margin-left: 0;margin-right: 0">

          <a-col :xs="{span: 18, offset: 2 }" :sm="{span: 18, offset: 2 }"
                 :md="{span: 16, offset: 0 }"
                 :lg="{span: 16, offset: 2 }" :xl="{span: 20,offset: 2 }">
            <div v-if="loading" class="loading" style="text-align: center;">
              <a-row :gutter="16" style="margin-left: 0;margin-right: 0">


                <a-col :xs="{span: 24 }" :sm="{span: 24 }" :md="{span: 24 }"
                       :lg="{span: 24 }" :xl="{span: 24 }">

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
                  <div class="hero" style="background-color: #FAFAFA">
                    <a-row>
                      <a-col span="4">
                        <span style="font-weight: bold">Job title</span>
                      </a-col>
                      <a-col span="4">
                        <span>Date Created</span>

                      </a-col>
                      <a-col span="6">
                        Skills


                      </a-col>
                      <a-col span="4">
                        Company

                      </a-col>
                      <a-col span="2">
                        Published

                      </a-col>
                      <a-col span="2">
                        Job tag

                      </a-col>
                      <a-col span="2">
                        Manage

                      </a-col>
                    </a-row>


                  </div>


                  <a-list item-layout="horizontal" :data-source="jobs"
                          :pagination="pagination"
                          style="margin-bottom: 1rem">
                    <div slot="footer"><b>Your ideal developer is one click away </b></div>
                    <a-list-item slot="renderItem" slot-scope="item">

                      <div class="hero" style="width: 100%">
                        <a-row>
                          <a-col span="4">
                            <span style="font-weight: bold">{{ item.title }}</span>
                          </a-col>
                          <a-col span="4">
                            <span>{{ item.created | moment }}</span>

                          </a-col>
                          <a-col span="6">
                            <span style="" v-for="skill in item.tech_stack.split(',')" v-bind:key="skill.id">
                              <a-tag color="#F0F6FD" style="color:#007BFF;">{{ skill }}</a-tag>
                            </span>

                          </a-col>
                          <a-col span="4">
                            {{ item.company }}

                          </a-col>
                          <a-col span="2">
                            <a-tag v-if="item.published" color="green">
                              {{ item.published }}
                            </a-tag>
                            <a-tag color="orange" v-else>
                              {{ item.published }}
                            </a-tag>


                          </a-col>
                          <a-col span="2">
                            <a-tag  color="blue">
                              {{ item.tag }}
                            </a-tag>



                          </a-col>
                          <a-col span="2">
                            <a-button :size="small"
                                      @click="navigateTo({name:'job',params:{jobId: item.id}})"

                                      type="primary" block>Manage Job
                            </a-button>

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

import RecruiterSider from "../layout/RecruiterSider";
import Pageheader from '@/components/frontend/recruiter/layout/Pageheader'
import moment from 'moment';

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

      current: 1


    }
  },
  components: {
    RecruiterSider,
    Pageheader


  },
  async mounted() {

    this.loading = true

    if (this.$store.state.user.pk) {
      this.currentUserProfile = this.$store.state.user_object
      this.fetchjobs()

    }


  },
  filters: {
    moment: function (date) {
      return moment(date).format('MMMM Do YYYY');
    }
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
            this.loading = false
            this.jobs.forEach(job => {
              this.createjobtag(job)
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


  background: white;
  border-radius: 0;
  margin-bottom: 1rem;


}

.hero {
  padding: 1%;
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;
}

</style>
