<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">

    <RecruiterSider/>

    <a-layout :style="{  background: '#FAFBFF', minHeight: '280px', }">


      <a-layout-content>
        <a-card class="hellocard" :bordered="false">
            <span style="font-size: 1.7rem;font-family: sofia_prosemibold;margin-bottom: 0;color: white">{{Greeting}}
                {{$store.state.user_object.user.first_name | capitalize}}</span>
          <p style="font-family: sofia_proregular;font-size: 1.2rem;line-height: 1rem;color: white">What would you like to do today?</p>

        </a-card>





        <div style="min-height: 40vh ;padding: 1%">
          <a-row :gutter="gutter">
            <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 12, offset: 0 }"
                   :md="{span: 12, offset: 0 }"
                   :lg="{span: 10, offset: 1 }" :xl="{span: 6,offset: 0 }">
              <a-card hoverable class="cardshadow" style="width: 100%;margin-bottom: 1rem">
                <router-link to="/CreateJob">
                  <div style="color: black">

                    <a-row>
                      <a-col span="24">
                        <div style="text-align: center">
                          <img class="poolavatar" src="../../../assets/images/edit-tools.svg">
                        </div>
                      </a-col>
                      <a-col span="24" style="text-align: center">
                        <p>Post a Job</p>
                        <p style="margin: 0;">Get devs for your vacancy</p>


                      </a-col>

                    </a-row>

                  </div>
                </router-link>


              </a-card>

            </a-col>
            <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 12, offset: 0 }"
                   :md="{span: 12, offset: 0 }"
                   :lg="{span: 10, offset: 1 }" :xl="{span: 6,offset: 0 }">
              <a-card hoverable class="cardshadow" style="width: 100%;margin-bottom: 1rem">
                <router-link to="managejobs">
                  <div style="color: black">

                    <a-row>
                      <a-col span="24">
                        <div style="text-align: center">
                          <img class="poolavatar" src="../../../assets/images/cv.svg">
                        </div>
                      </a-col>
                      <a-col span="24" style="text-align: center">
                        <p>Manage Jobs</p>
                        <p style="margin: 0;">Manage job applications</p>


                      </a-col>


                    </a-row>

                  </div>
                </router-link>


              </a-card>

            </a-col>
            <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 12, offset: 0 }"
                   :md="{span: 12, offset: 0 }"
                   :lg="{span: 10, offset: 1 }" :xl="{span: 6,offset: 0 }">
              <a-card hoverable class="cardshadow" style="width: 100%;margin-bottom: 1rem">
                <router-link to="/talent">
                  <div style="color: black">

                    <a-row>
                      <a-col span="24">
                        <div style="text-align: center">
                          <img class="poolavatar" src="../../../assets/images/star.svg">
                        </div>
                      </a-col>
                      <a-col span="24" style="text-align: center">
                        <p>Browse the Talent Pool</p>
                        <p style="margin: 0;">View more devs from pool</p>


                      </a-col>


                    </a-row>

                  </div>
                </router-link>


              </a-card>

            </a-col>
            <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 12, offset: 0 }" v-if="$store.state.user_object.user.is_staff"
                   :md="{span: 12, offset: 0 }"
                   :lg="{span: 10, offset: 1 }" :xl="{span: 6,offset: 0 }">
              <a-card hoverable class="cardshadow" style="width: 100%;margin-bottom: 1rem">
                <router-link to="/AdminDashboard">
                  <div style="color: black">

                    <a-row>
                      <a-col span="24">
                        <div style="text-align: center">
                          <img class="poolavatar" src="../../../assets/images/admin.svg">
                        </div>
                      </a-col>
                      <a-col span="24" style="text-align: center">
                        <p>Admin</p>
                        <p style="margin: 0;">Adminstrative resources</p>


                      </a-col>


                    </a-row>

                  </div>
                </router-link>


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
import 'simplemde/dist/simplemde.min.css';
import User from '@/services/UsersService'


import lena from '@/components/frontend/recruiter/lena/lena'





export default {
  name: 'index',
  data() {

    return {

      currentUserProfile: null,
      jobs: null,
      mycandidates: [],
      visible: false,
      gutter: 16,
      inputVisible: false,
      currentUser: {},
      inputValue: '',
      loading: false,



    }

  },
  components: {
    RecruiterSider,lena


  },

  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  computed: {
    Greeting(){
      moment
      let today = new Date()
      let curHr = today.getHours()
      let greeting=''

      if (curHr < 12) {
        greeting = 'Good Morning'

      } else if (curHr < 18) {
        greeting = 'Good Afternoon'

      } else {
        greeting = 'Good Evening'

      }
      return greeting
    },

  },
  async mounted() {


    if (this.$store.state.user.pk) {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      User.currentuser(this.$store.state.user.pk, auth)
          .then(response => {
            this.$store.dispatch('setuser_object', response.data)
          })


      this.currentUserProfile = this.$store.state.user_object
      this.openNotification()


    }


  },
  methods: {
    moment,
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
    openNotification() {

      this.$notification.open({
        message: 'Lena',
        description:
            'To get tips on the page you are on click on the lena icon to show them.',

    });
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



  },

}
</script>

<style scoped>
.hellocard {


  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;

  background: #004EC7;
  border-radius: 0;
  margin-bottom: 1rem;
  color:white;


}

.cardshadow {

  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;

  background: white;
  border-radius: 0;
  height: 13rem;
}



.poolavatar {
  width: 30%;
  margin-top: 0.5rem;
}





</style>
