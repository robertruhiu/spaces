<template>

    <a-layout-header id="components-layout-demo-fixed" :style="{ position: 'fixed', zIndex: 1, width: '100%',
    backgroundColor:'white',borderBottom: '1px solid #e8e8e8',}">
        <div class="logo">
            <router-link to="/">
                <img src="../../assets/logobg.svg" style="width: 100%;margin-left: 1.5rem">
            </router-link>


        </div>
        <hide-at breakpoint="mediumAndBelow">
            <div class="ant-menu-horizontal " :style="{ lineHeight: '64px',float: 'right',borderBottom: 0}">
                <router-link to="/post/true" class="ant-btn ant-btn-primary" style="margin-bottom: 0"
                             v-if="$store.state.usertype ==='recruiter'">Post a job for free
                </router-link>
                <router-link to="/developer" class="ant-btn ant-btn-primary" style="margin-bottom: 0"
                             v-else-if="$store.state.usertype ==='developer'">Post a job for free
                </router-link>
                <router-link to="/login" class="ant-btn ant-btn-primary" style="margin-bottom: 0" v-else>Post a job for
                    free
                </router-link>
<!--                <router-link to="/clientdashboard" class="ant-menu-item" style="margin-bottom: 0">Client dashboard</router-link>-->
              <a href="https://remote.codeln.com/" target="_blank" class="ant-menu-item" style="margin-bottom: 0">
                Remote.Codeln
              </a>

                <router-link to="/prices" class="ant-menu-item" style="margin-bottom: 0">Pricing</router-link>
                <router-link to="/bridgesHome" class="ant-menu-item" style="margin-bottom: 0">Skill Bridging program
                </router-link>

                <router-link to="/talent" class="ant-menu-item" style="margin-bottom: 0">Talent pool</router-link>
                <router-link to="/jobs" class="ant-menu-item" style="margin-bottom: 0">Job board</router-link>

                <router-link to="/recruiter" class="ant-menu-item" style="margin-bottom: 0"
                             v-if="$store.state.isUserLoggedIn && $store.state.usertype ==='recruiter' && currentUserProfile.stage ==='complete' ">
                    My account
                </router-link>
                <router-link to="/register" class="ant-menu-item" style="margin-bottom: 0"
                             v-if="$store.state.isUserLoggedIn && $store.state.usertype ==='recruiter' && currentUserProfile.stage !=='complete' ">
                    My account
                </router-link>
                <router-link to="/register" class="ant-menu-item" style="margin-bottom: 0"
                             v-if="$store.state.isUserLoggedIn && $store.state.usertype ==='developer'&& currentUserProfile.stage !=='complete'">
                    My account
                </router-link>
                <router-link to="/developer" class="ant-menu-item" style="margin-bottom: 0"
                             v-if="$store.state.isUserLoggedIn && $store.state.usertype ==='developer'&& currentUserProfile.stage ==='complete'">
                    My account
                </router-link>
                <router-link to="/login" class="ant-menu-item" style="margin-bottom: 0"
                             v-if="!$store.state.isUserLoggedIn">
                    Login
                </router-link>



                <a>
                    <a-button
                            style="margin-bottom: 0;border: 0;-webkit-box-shadow: 0 0 0 rgba(255,255,255,0.01);color: #1890ff"
                            v-if="$store.state.isUserLoggedIn" @click="logout">Logout
                    </a-button>
                </a>


            </div>
        </hide-at>
        <show-at breakpoint="mediumAndBelow">
            <div style="float: right">
                <Menusider/>
            </div>

        </show-at>


    </a-layout-header>


</template>

<script>
    import {showAt, hideAt} from 'vue-breakpoints'
    import Menusider from '@/components/layout/Menusider'
    import UsersService from '@/services/UsersService'

    export default {
        name: "Header",
        components: {

            hideAt, showAt,
            Menusider

        },
        data() {
            return {
                currentUserProfile: {},

            }
        },
        async mounted() {
            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}

            }

            if (this.$store.state.user) {
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
                this.$store.dispatch('setNext', null)
                this.$store.dispatch('setCart', null)
                this.$store.dispatch('setPicked', null)
                this.$store.dispatch('setLanguage', null)
                this.$store.dispatch('setCountry', null)
                this.$store.dispatch('setManaged',false)
                this.$store.dispatch('setRecommend', null)


                this.$router.push({
                    name: 'home'
                })
            },
        }

    }
</script>

<style scoped>

    #components-layout-demo-fixed .logo {
        width: 120px;
        height: 31px;

        margin: 0 24px 16px 0;
        float: left;
    }
</style>
