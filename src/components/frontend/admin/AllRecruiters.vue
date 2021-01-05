<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">

    <RecruiterSider/>

    <a-layout :style="{  background: '#FAFBFF', minHeight: '280px', }">


      <a-layout-content>
        <a-card class="hellocard" :bordered="false">
          <a-row style="color: white">
            <a-col span="12">
              <a-breadcrumb>
                <a-breadcrumb-item><a @click="$router.push('/recruiter')" style="color: white">Home</a>
                </a-breadcrumb-item>
                <a-breadcrumb-item><a @click="$router.push('/AdminDashboard')" style="color: white">Admin board</a>
                </a-breadcrumb-item>
                <a-breadcrumb-item style="color: white">All Recruiters</a-breadcrumb-item>


              </a-breadcrumb>
              <span style="font-size: 1.7rem;font-family: sofia_prosemibold;margin-bottom: 0;color: white">
                All Recruiters</span>



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

                    <a-input-search placeholder="search for a user" style="margin-bottom: 1rem" @search="onSearch"/>
                    <div style="margin-bottom: 1rem">
                      Search parameters (you can also check only the tags you want your search to cover) :
                      <a-checkable-tag v-model="checked1" @change="onSearch">
                        name
                      </a-checkable-tag>
                      <a-checkable-tag v-model="checked2" @change="onSearch">
                        email
                      </a-checkable-tag>


                    </div>

                    <div class="hero" style="background-color: #FAFAFA">
                      <a-row>
                        <a-col span="2">
                          <span style="font-weight: bold">id</span>
                        </a-col>

                        <a-col span="4">
                          name


                        </a-col>
                        <a-col span="6">
                          email

                        </a-col>


                        <a-col span="4">
                          date joined

                        </a-col>
                      </a-row>


                    </div>


                    <a-list item-layout="horizontal" :data-source="DataChoice"
                            :pagination="pagination"
                            style="margin-bottom: 1rem">
                      <div slot="footer"><b>Your ideal developer is one click away </b></div>
                      <a-list-item slot="renderItem" slot-scope="item">

                        <div class="hero" style="width: 100%">
                          <a-row>
                            <a-col span="2">
                              <span style="font-weight: bold">{{ item.id }}</span>

                            </a-col>
                            <a-col span="4">
                              <span style="font-weight: bold">{{ item.user.first_name }} {{item.user.last_name}}</span>

                            </a-col>

                            <a-col span="6">
                            <span >
                              <span style="font-weight: bold">{{ item.user.email }}</span>
                            </span>


                            </a-col>
                            <a-col span="4">
                              {{ item.user.date_joined | moment}}

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


      </a-layout-content>

    </a-layout>
  </a-layout>
</template>

<script>
import UsersService from '@/services/UsersService'
import RecruiterSider from "@/components/frontend/recruiter/layout/RecruiterSider";
import moment from "moment";
export default {
name: "AllRecruiters",
  data() {

    return {

      AllUsers: [],
      pagination: {

        pageSize: 20,
      },
      current: 1,
      checked1: true,
      checked2: true,

      filterdata: [],
      searchterm: '',
      loading:false


    }

  },
  components: {
    RecruiterSider


  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
    moment: function (date) {
      return moment(date).format('MMMM Do YYYY');
    }
  },
  computed: {
    Greeting() {
      moment
      let today = new Date()
      let curHr = today.getHours()
      let greeting = ''

      if (curHr < 12) {
        greeting = 'Good Morning'

      } else if (curHr < 18) {
        greeting = 'Good Afternoon'

      } else {
        greeting = 'Good Evening'

      }
      return greeting
    },
    DataChoice() {
      let data = []
      if (this.filterdata.length > 0) {
        data = this.filterdata
      } else {
        data = this.AllUsers

      }
      return data
    }

  },
  async mounted() {


    if (this.$store.state.user_object.user.is_staff) {


      this.fetchAllUsers()



    }


  },
  methods: {

    fetchAllUsers() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      };
      this.loading = true
      UsersService.allrecruiters(auth)
          .then(resp => {
            this.AllUsers = resp.data
            this.loading = false
          })

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
        checkedtags.push('name')
      }
      if (this.checked2) {
        checkedtags.push('email')
      }


      this.AllUsers.forEach(user => {

        let unsetdata = []
        if (checkedtags.includes('name')) {

          if (user.user.first_name.toLowerCase().includes(this.searchterm.toLowerCase()) || user.user.last_name.toLowerCase().includes(this.searchterm.toLowerCase())) {

            unsetdata.push(user)
          }
        }
        if (checkedtags.includes('email')) {

          if (user.user.email.toLowerCase().includes(this.searchterm.toLowerCase())) {

            unsetdata.push(user)
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
.hellocard {


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
</style>
