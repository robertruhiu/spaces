<template>


    <a-dropdown :trigger="['click']" placement="bottomCenter">
    <a class="ant-dropdown-link" href="#">

      <a-icon type="menu-fold" />
    </a>
    <a-menu slot="overlay">
      <a-menu-item key="0">
          <router-link to="/post/true"  v-if="$store.state.usertype ==='recruiter'">

                    <span>Post a job for free</span>
                </router-link>
          <router-link to="/developer" v-else-if="$store.state.usertype ==='developer'">

                    <span>Post a job for free</span>
                </router-link>
          <router-link to="/login" v-else>

                    <span>Post a job for free</span>
                </router-link>

          <router-link to="/prices">

                    <span>Pricing</span>
                </router-link>
        <router-link to="/talent">

                    <span>Talent pool</span>
                </router-link>
      </a-menu-item>

        <a-menu-item key="1" v-if="$store.state.isUserLoggedIn && $store.state.usertype ==='recruiter' && currentUserProfile.stage ==='complete' ">
        <router-link to="/recruiter">

                    <span>My account</span>
                </router-link>
      </a-menu-item>

        <a-menu-item key="6" v-if="$store.state.isUserLoggedIn && $store.state.usertype ==='recruiter' && currentUserProfile.stage !=='complete' ">
            <router-link to="/register" class="ant-menu-item" style="margin-bottom: 0"
                             >My account
                </router-link>
        </a-menu-item>

        <a-menu-item key="2" v-if="$store.state.isUserLoggedIn && $store.state.usertype ==='developer'">
        <router-link to="/developer">

                    <span>My account</span>
                </router-link>
      </a-menu-item>
        <a-menu-item key="7" v-if="$store.state.isUserLoggedIn && $store.state.usertype ==='developer'&& currentUserProfile.stage !=='complete'">
            <router-link to="/register" class="ant-menu-item" style="margin-bottom: 0"
                             >My account
                </router-link>

        </a-menu-item>
        <a-menu-item key="3" v-if="!$store.state.isUserLoggedIn">
        <router-link to="/login">

                    <span>Login</span>
                </router-link>
      </a-menu-item>
        <a-menu-item key="4" v-if="!$store.state.isUserLoggedIn">
        <router-link to="/register">

                    <span>Register</span>
                </router-link>
      </a-menu-item>


        <a-menu-item key="5" v-if="$store.state.isUserLoggedIn">

            <a @click="logout">Logout</a>
        </a-menu-item>



    </a-menu>
  </a-dropdown>
</template>

<script>
    import UsersService from '@/services/UsersService'
    export default {
        name: "Menusider",
        data() {

            return {
                currentUserProfile: null,


            }

        },
        async mounted() {

            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}

            }
            if (this.$store.state.user.pk) {
                this.currentUserProfile = (await UsersService.currentuser(this.$store.state.user.pk, auth)).data


            }


        },
        methods: {

            logout() {
                this.$store.dispatch('setToken', null);
                this.$store.dispatch('setUser', null)
                this.$store.dispatch('setisLoggedIn', false)
                this.$store.dispatch('setUsertype', null)
                this.$store.dispatch('setUser_id', null)
                this.$store.dispatch('setNext',null)
                this.$router.push({
                    name: 'home'
                })
            },
        }
    }
</script>

<style scoped>

</style>
