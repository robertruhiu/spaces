<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh;background-color:#F8FAFB ">

    <RecruiterSider/>


    <a-layout-content>
      <Pageheader/>


      <div :style="{ padding: '24px', background: '#fff', minHeight: '80vh' }">
        <a-row style="margin-bottom: 1rem">

          <a-col :xs="{span: 24, offset: 1 }" :sm="{span: 24, offset: 2 }" :md="{span: 24, offset: 2 }"
                 :lg="{span: 24, offset: 0 }" :xl="{span: 24, offset: 0 }">

            <h3 style="color: #1976D2;font-weight: bold;margin-left: 1rem">Easily manage your posted jobs</h3>

          </a-col>


        </a-row>



        <div v-if="loading" class="loading" style="text-align: center;">
          <a-row :gutter="16" style="margin-left: 0;margin-right: 0">


            <a-col :xs="{span: 24 }" :sm="{span: 17 }" :md="{span: 16 }"
                   :lg="{span: 16 }" :xl="{span: 16 }">

              <a-skeleton active avatar :paragraph="{ rows: 4 }"/>
              <a-skeleton active avatar :paragraph="{ rows: 4 }"/>
              <a-skeleton active avatar :paragraph="{ rows: 4 }"/>
            </a-col>
          </a-row>
        </div>
        <div v-else>
          <a-row :gutter="16" style="margin-left: 0;margin-right: 0">

            <a-col :xs="{span: 24 }" :sm="{span: 24 }" :md="{span: 24 }"
                   :lg="{span: 16 }" :xl="{span: 16 }">



              <a-list item-layout="horizontal"  :data-source="jobs"
                      :pagination="pagination"
                      style="margin-bottom: 1rem">
                <div slot="footer"><b>Your ideal developer is one click away </b></div>
                <a-list-item slot="renderItem" slot-scope="item">
                  <a-card
                      style="margin-bottom: 1%;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);width: 100%">
                    <h3 style="font-weight: bold">{{ item.title }}</h3>
                    <a-row>
                      <a-col :xs="{span: 24 }" :sm="{span: 24 }" :md="{span: 14 }"
                             :lg="{span: 16 }" :xl="{span: 16 }">
                        <span v-if="currentUserProfile.user.is_staff">posted by : {{ item.company }} </span>
                      </a-col>
                      <a-col :xs="{span: 24 }" :sm="{span: 24 }" :md="{span: 8 }"
                             :lg="{span: 8 }" :xl="{span: 8 }">
                        <span>posted on : {{ item.created | moment }}</span>
                      </a-col>
                    </a-row>


                    <p>
                      <span style="" v-for="skill in item.tech_stack.split(',')" v-bind:key="skill.id">
                        <a-tag color="#F0F6FD" style="color:#007BFF;">{{ skill }}</a-tag>
                      </span>
                    </p>


                    <div style="text-align: center">

                      <a-button style="width: 50%"
                                @click="navigateTo({name:'job',params:{jobId: item.id}})"
                                type="primary" block>Manage Job
                      </a-button>

                    </div>


                  </a-card>
                </a-list-item>
              </a-list>




            </a-col>
          </a-row>
        </div>
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
      loading:false,
      pagination: {
        position:'top',
        pageSize: 20,
      },

      current:1


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
      return moment(date).format('MMMM Do YYYY, h:mm:ss a');
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
            this.loading =false
            this.jobs.forEach(job=>{
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

</style>
