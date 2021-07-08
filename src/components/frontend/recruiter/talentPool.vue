<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh;background-color:#ffffff ">

    <RecruiterSider/>


    <a-layout-content :style="{   background: '#FAFBFF', minHeight: '280px', }">
      <a-card class="hellocard" :bordered="false">


            <a-breadcrumb>
              <a-breadcrumb-item><a @click="$router.push('/recruiter')" style="color: white">Home</a>
              </a-breadcrumb-item>
              <a-breadcrumb-item style="color: white">Talent Pool</a-breadcrumb-item>

            </a-breadcrumb>
            <span style="font-size: 1.7rem;font-family: sofia_prosemibold;margin-bottom: 0;color: white">
                Talent Pool</span>



      </a-card>
      <div style="padding: 1%">
        <a-row>


          <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0}" :md="{span: 18, offset: 0 }"
                 :lg="{span: 18, offset: 0 }" :xl="{span: 18, offset: 0 }">


            <div v-if="loading" class="loading" style="text-align: center;min-height:40vh ">

              <a-skeleton active avatar :paragraph="{ rows: 4 }"/>
              <a-skeleton active avatar :paragraph="{ rows: 4 }"/>
              <a-skeleton active avatar :paragraph="{ rows: 4 }"/>
            </div>

            <div v-else>
              <a-input-search placeholder="search candidates" style="margin-bottom: 1rem" @search="onSearch"/>



              <div v-for="dev in all" v-bind:key="dev.id">
                <a-card :bordered="false" style="margin-bottom: 1rem;width: 100%" class="lightshadow"
                >


                  <a-row >
                    <a-col :xs="{span: 6, offset: 0 }" :sm="{span: 6, offset: 0}" :md="{span: 6, offset: 0 }"
                           :lg="{span: 4, offset: 0 }" :xl="{span: 2, offset: 0 }">
                      <div >
                        <div style="margin: 0 auto">

                          <span style="text-align: center">
                            <a-avatar :size="64" shape="square" style="color: white; backgroundColor: #0679FB">
                              {{ dev.user.first_name[0] }} {{ dev.user.last_name[0] }}
                            </a-avatar>
                          </span>





                        </div>

                      </div>


                    </a-col>
                    <a-col :xs="{span: 18, offset: 0 }" :sm="{span: 18, offset: 0}" :md="{span: 18, offset: 0 }"
                           :lg="{span: 18, offset: 0 }" :xl="{span: 18, offset: 0 }">
                      <span>{{ dev.about }}

                      </span>
                      <br>
                      <span>Located:
                        <a-tag color="#F0F6FD" style='color: #007BFF'>
                          <a-icon type="environment"/>
                          {{ dev.country }}
                        </a-tag>
                      </span>
                      <span>
                          Availabilty :

                          <span style="" v-for="available in dev.availabilty.split(',')"
                                v-bind:key="available.id">
                              <a-tag color="#F7E7F5" style="color:#B82EA4;">{{ available }}</a-tag>

                            </span>


                        </span>

                      <a-row>
                        <a-col :span="18">
                          Skilled in:
                      <span v-for="skill in dev.skills.split(',')" v-bind:key="skill.id">
                            <a-tag color="#1F81CE" >{{ skill }}</a-tag>
                          </span>
                        </a-col>
                        <a-col :span="6">
                          <a-button type="primary"
                                    @click="navigateTo({name:'candidatetalentprofile',params:{candidateProfileID: dev.user.id}})">
                            view profile
                          </a-button>
                        </a-col>
                      </a-row>



                    </a-col>

                  </a-row>


                </a-card>

              </div>
              <a-pagination v-model="current" :pageSize="100" :total="count"  @change="SilentLoader" />


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
import RecruiterSider from "@/components/frontend/recruiter/layout/RecruiterSider";
import UsersService from "@/services/UsersService";
import axios from "axios";

export default {
  name: "talentPool",
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
    RecruiterSider,


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
.lightshadow {
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
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
