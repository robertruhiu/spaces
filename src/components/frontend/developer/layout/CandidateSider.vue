<template>

    <a-layout-sider
            breakpoint="lg"
            collapsedWidth="0"
            @collapse="onCollapse"
            @breakpoint="onBreakpoint"
            style="box-shadow: 2px 0 6px rgba(0,21,41,.35);background-color: white"

    >
        <hide-at :breakpoints="{small: 425, medium: 768}" breakpoint="mediumAndBelow" >
        <router-link to="/">

            <img
                 style="width: 9rem;height: 2rem;margin-top: 1rem;margin-bottom: 1rem;margin-left: 1rem"
                 v-bind:src="defaultlogo"
            >

        </router-link>
        </hide-at>
        <a-menu :defaultSelectedKeys="['1']" mode="inline" style="min-height: 85vh">
            <a-menu-item key="1">
                <router-link to="/developer">
                    <a-icon type="dashboard"/>
                    <span>Dashboard</span>
                </router-link>
            </a-menu-item>



            <a-menu-item key="11">
                <router-link to="/assessment">
                    <a-icon type="code"/>
                    <span>Get verified</span>
                </router-link>

            </a-menu-item>
            <a-menu-item key="10">
                <router-link to="/manageapplications">
                    <a-icon type="folder-open" />
                    <span>Manage Applications</span>
                </router-link>

            </a-menu-item>
            <a-menu-item key="4">
                <router-link to="/jobs">
                    <a-icon type="solution" />
                    <span>Job board</span>
                </router-link>

            </a-menu-item>
            <a-menu-item key="9">
                <router-link to="/portfolio">
                    <a-icon type="file-done" />
                    <span>My portfolio</span>
                </router-link>

            </a-menu-item>
            <a-menu-item key="8">
                <router-link to="/devcalendar">
                    <a-icon type="calendar"/>
                    <span>Calendar</span>
                </router-link>

            </a-menu-item>


            <a-menu-item key="6">
                <router-link to="/developerprofile">
                    <a-icon type="user"/>
                    <span>Edit profile</span>
                </router-link>

            </a-menu-item>
            <a-menu-item key="13">
                <router-link disabled to="/community">
                    <a-icon type="message" />
                    <span>Community chat</span>
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

    import Largelogo from '@/assets/logobg.svg'
    import { hideAt} from 'vue-breakpoints'




    export default {
        name: 'CandidateSider',
        data() {

            return {
                defaultlogo: Largelogo,



            }
        },
        components: {
            hideAt,


        },
        methods: {

            onCollapse(collapsed) {
                return collapsed;
            },
            onBreakpoint(broken) {
                return broken;
            },
            async mounted() {


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
