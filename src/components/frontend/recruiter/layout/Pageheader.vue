<template>
  <div>

    <a-affix offsetTop="this.top">


      <a-layout-header style="background: #fff; padding: 0;border-bottom:1px solid #e8e8e8 ">
        <div style="padding: 0 2%">
          <span style="float: right">
             <a-avatar size="large" icon="user"/>
          </span>
        </div>

      </a-layout-header>

    </a-affix>


  </div>


</template>

<script>


import Largelogo from '@/assets/logobg.svg'




import moment from 'moment';

export default {
  name: "Pageheader",
  components: { },
  data() {

    return {

      defaultlogo: Largelogo,
      top:0

    }
  },
  async mounted() {
    moment




  },
  filters: {

  },
  methods: {
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


  },
}
</script>

<style scoped>





</style>
