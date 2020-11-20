<template>
  <a-layout :style="{background:'#fff'}">
    <pageheader></pageheader>
    <a-layout-content :style="{ padding: '0 0px' }">
      <div>
        <a-row
            style="background-color:#004ec7;position: fixed;width: 100%;z-index: 1;margin-top: 4rem;padding-bottom: 1rem "
            :gutter='gutter'>
          <hide-at breakpoint="mediumAndBelow">
            <a-col span="4">
              <h3 style="color: white;font-size: 1.5rem;padding-left: 4rem;padding-top: 1rem;">Talent</h3>
            </a-col>
          </hide-at>


        </a-row>
      </div>

      <div style="margin-top: 10rem">
        <a-row>


          <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0}" :md="{span: 16, offset: 4 }"
                 :lg="{span: 16, offset: 4 }" :xl="{span: 16, offset: 4 }">


            <div v-if="loading" class="loading" style="text-align: center;min-height:40vh ">

              <a-skeleton active avatar :paragraph="{ rows: 4 }"/>
              <a-skeleton active avatar :paragraph="{ rows: 4 }"/>
              <a-skeleton active avatar :paragraph="{ rows: 4 }"/>
            </div>

            <div v-else>


              <a-pagination v-model="current" :pageSize="100" :total="count"  @change="SilentLoader" />
              <div v-for="dev in all" v-bind:key="dev.id">
                <a-card :bordered="false" style="margin-bottom: 1rem;width: 100%" class="lightshadow"
                >

                  <a-row :gutter="16">
                    <a-col :xs="{span: 6, offset: 0 }" :sm="{span: 6, offset: 0}" :md="{span: 6, offset: 0 }"
                           :lg="{span: 4, offset: 0 }" :xl="{span: 4, offset: 0 }">
                      <div style="display: flex;">
                        <div style="margin: 0 auto">

                          <p style="text-align: center">
                            <a-avatar :size="64" shape="square" style="color: white; backgroundColor: #0679FB">
                              {{ dev.user.first_name[0] }} {{ dev.user.last_name[0] }}
                            </a-avatar>
                          </p>

                          <p>
                            <a-button type="primary" size="small"
                                      @click="navigateTo({name:'candidatetalentprofile',params:{candidateProfileID: dev.user.id}})">
                              view profile
                            </a-button>
                          </p>


                        </div>

                      </div>


                    </a-col>
                    <a-col :xs="{span: 18, offset: 0 }" :sm="{span: 18, offset: 0}" :md="{span: 18, offset: 0 }"
                           :lg="{span: 18, offset: 0 }" :xl="{span: 18, offset: 0 }">
                      <p>{{ dev.about }}

                      </p>
                      <div v-if="dev.skills" style="margin-bottom: 1rem">
                        <p>Skilled in</p>

                        <span v-for="skill in dev.skills.split(',')" v-bind:key="skill.id">
                            <a-tag color="#F0F6FD" style="color:#007BFF;">{{ skill }}</a-tag>
                          </span>
                      </div>
                      <div>
                        <p>Located:
                          <a-tag color="#F0F6FD" style='color: #007BFF'>
                            <a-icon type="environment"/>
                            {{ dev.country }}
                          </a-tag>
                        </p>
                        <div v-if="dev.availabilty">


                          <p>
                            Availabilty :

                            <span style="" v-for="available in dev.availabilty.split(',')"
                                  v-bind:key="available.id">
                              <a-tag color="#F7E7F5" style="color:#B82EA4;">{{ available }}</a-tag>

                            </span>


                          </p>
                        </div>


                      </div>

                    </a-col>
                  </a-row>


                </a-card>

              </div>


              <div id="components-back-top-demo-custom">
                <a-back-top>
                  <div class="ant-back-top-inner">
                    UP
                  </div>
                </a-back-top>
              </div>


            </div>


          </a-col>


        </a-row>


      </div>


    </a-layout-content>

  </a-layout>


</template>
<script>


//experience structure on table


import Pageheader from '@/components/layout/Header.vue'
import UsersService from '@/services/UsersService';
import {hideAt} from 'vue-breakpoints'
import axios from 'axios'
import Vue from 'vue'

var VueTruncate = require('vue-truncate-filter')
Vue.use(VueTruncate)


export default {
  name: 'talent',
  data() {
    return {
      visible: false,
      devs: null,
      tags: [],
      loading: false,
      listData: [],
      pagination: {
        pageSize: 100,
      },
      gutter: 8,
      current: 1,
      count: 0,
      all: null


    }
  },
  components: {

    Pageheader,
    hideAt,

  },

  async mounted() {
    this.loading = true


    this.fetchdevs()


  },


  methods: {
    fetchdevs() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      UsersService.devs(auth)
          .then(resp => {

            this.count = resp.data.count
            this.all = resp.data.results

            this.loading = false


          })


    },
    navigateTo(route) {
      this.$router.push(route)
    },


    SilentLoader(current) {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      this.loading = true
      this.current = current
      let url = process.env.VUE_APP_PAGINATOR + this.current
      axios
          .get(url, auth)
          .then(response => {
            if(response.data.results){
              this.all = response.data.results
              this.loading= false
            }else {
              this.current = 1
              this.loading= false
            }



          })


    }


  },

}


</script>

<style scoped>


.lightshadow {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 8px 0px, rgba(0, 0, 0, 0.19) 0px 6px 20px 0px;
  margin-bottom: 1rem;


}


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
