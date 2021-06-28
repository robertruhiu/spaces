<template>
  <a-layout-sider
      breakpoint="lg"
      collapsed-width="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
      style="box-shadow: 2px 0 6px rgba(0,21,41,.35);background-color: #F4F7FC"
  >
    <hide-at :breakpoints="{small: 425, medium: 768}" breakpoint="mediumAndBelow">
      <router-link to="/">

        <img
            style="width: 9rem;height: 2rem;margin-top: 1rem;margin-bottom: 1rem;margin-left: 1rem"
            v-bind:src="defaultlogo"
        >

      </router-link>
    </hide-at>
    <show-at  breakpoint="mediumAndBelow">
      <router-link to="/">

        <img
            style="width: 9rem;height: 2rem;margin-top: 1rem;margin-bottom: 1rem;margin-left: 1rem"
            v-bind:src="defaultlogo"
        >

      </router-link>
    </show-at>
    <a-menu :defaultSelectedKeys="['1']" mode="inline" style="min-height: 85vh;background-color: #F4F7FC">
      <a-menu-item key="1">
        <router-link to="/recruiter">
          <a-icon type="dashboard"/>
          <span>Dashboard</span>
        </router-link>
      </a-menu-item>


      <a-menu-item key="10">
        <router-link to="/CreateJob">
          <a-icon type="edit"/>
          <span>Post a job</span>
        </router-link>



      </a-menu-item>


      <a-menu-item key="2" >
        <router-link to="/managejobs">
          <a-icon type="project"/>
          <span>My jobs
                    </span>
        </router-link>
      </a-menu-item>

      <a-menu-item key="3" v-if="mycandidates.length >0">
        <router-link to="/mycandidates">
          <a-icon type="team"/>
          <span>My Candidates</span>
        </router-link>

      </a-menu-item>
      <a-menu-item v-else disabled>

        <a-icon type="team"/>
        <span>My Candidates</span>

      </a-menu-item>

      <a-menu-item key="4">
        <router-link to="/talent">
          <a-icon type="star"/>
          <span>Talent Pool</span>
        </router-link>

      </a-menu-item>
      <a-menu-item key="8">
        <router-link to="/calendar">
          <a-icon type="calendar"/>
          <span>Calendar</span>
        </router-link>

      </a-menu-item>

      <a-menu-item key="6">
        <router-link to="/myprofile">
          <a-icon type="user"/>
          <span>My profile</span>
        </router-link>

      </a-menu-item>
      <a-menu-item key="7">
        <a @click="logout">
          <a-icon type="export"/>
          <span>  Logout</span>
        </a>

      </a-menu-item>


    </a-menu>

  </a-layout-sider>




</template>
<script>
    import moment from 'moment';
    import Largelogo from '@/assets/logobg.svg'
    import {showAt, hideAt} from 'vue-breakpoints'


    export default {
        name: 'RecruiterSider',
        data() {

            return {
                top: 0,
                defaultlogo: Largelogo,
                myjobs: [],
                mycandidates: [],
                currentUserProfile: null,
                jobmobile: false,


            }
        },
        components: {

            hideAt, showAt,



        },
        computed: {

        },
        async mounted() {


            if (this.$store.state.user.pk) {

                this.currentUserProfile = this.$store.state.user_object


            }


        },
        methods: {
            moment,
            disabledDate(current) {
                // Can not select days before today and today
                return current && current < moment().endOf('day');
            },

            onCollapse(collapsed, type) {
                return type;
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
              this.$store.dispatch('setNext', null)
              this.$store.dispatch('setCart', null)
              this.$store.dispatch('setPicked', null)
              this.$store.dispatch('setLanguage', null)
              this.$store.dispatch('setCountry', null)
              this.$store.dispatch('setManaged',false)
              this.$store.dispatch('setRecommend', null)
              this.$store.dispatch('setlazyloader', null)
              this.$store.dispatch('setuser_object', null)
                this.$router.push({
                    name: 'home'
                })
            },
            navigateTo(route) {
                this.$router.push(route)
            },

        }
    }
</script>

<style scoped>


</style>
