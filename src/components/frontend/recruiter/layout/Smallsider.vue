<template>
  <div style="box-shadow: 2px 0 6px rgba(0,21,41,.35);background-color: white">
    <show-at breakpoint="mediumAndBelow">
      <KanbanSider/>
    </show-at>
    <hide-at breakpoint="mediumAndBelow">
      <a-layout-sider v-model="collapsed" :trigger="null" collapsible style="box-shadow: 2px 0 6px rgba(0,21,41,.35);background-color: white;min-height: 100vh">
        <router-link to="/">

          <img v-bind:style="logo"
               style=";height: 2rem;margin-top: 1rem;margin-bottom: 1rem;margin-left: 1rem"
               v-bind:src="defaultlogo"
          >

        </router-link>
        <a-menu  mode="inline" :default-selected-keys=key  style="font-family: sofia_proregular;border-right: hidden;">
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
    </hide-at>
  </div>


</template>

<script>
import Smalllogo from '@/assets/cropped.png'
import { hideAt,showAt} from 'vue-breakpoints'
import KanbanSider from '@/components/frontend/recruiter/layout/KanbanSider'
export default {
  name: "Smallsider",
  components: {KanbanSider,hideAt,showAt,},
  data() {
    return {
      collapsed:true,
      defaultlogo: Smalllogo,


    }
  },
  async mounted() {





  },
  methods: {
    logout() {
      this.$store.dispatch('setToken', null);
      this.$store.dispatch('setUser', null)
      this.$store.dispatch('setisLoggedIn', false)
      this.$store.dispatch('setUser_object', null)
      this.$store.dispatch('setProjectedit', null)



      this.$router.push({
        name: 'home'
      })
    },


  }
}
</script>

<style scoped>

</style>
