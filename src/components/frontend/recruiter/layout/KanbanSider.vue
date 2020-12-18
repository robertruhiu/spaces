<template>
  <a-layout-sider
      breakpoint="xl"
      collapsed-width="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
      style="background-color: #F4F7FC"
  >
    <show-at  breakpoint="mediumAndBelow">
      <router-link to="/">

        <img
            style="width: 9rem;height: 2rem;margin-top: 1rem;margin-bottom: 1rem;margin-left: 1rem"
            v-bind:src="defaultlogo"
        >

      </router-link>
    </show-at>


    <a-menu  mode="inline" :default-selected-keys=key  style="font-family: sofia_proregular;background-color: #F4F7FC;border-right: hidden">
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
</template>

<script>
import { showAt} from 'vue-breakpoints'
import Largelogo from '@/assets/logobg.svg'
export default {
  name: "KanbanSider",
  data() {
    return {
      collapsed: false,
      defaultlogo: Largelogo,


    }

  },
  components: {
    showAt




  },
  computed: {
    getRoute(){
      let routename =this.$route

      return routename
    }

  },
  methods:{
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
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
