<template>
    <div>
        <show-at breakpoint="mediumAndBelow">
            <a-layout-header :style="{width: '100%',backgroundColor:'#ffffff',height:'5rem',padding: '1px 30px 0',
            borderBottom: '1px solid #e8e8e8'}">
                <router-link to="/">
                <img
                 style="width: 120px;height: 31px;margin-top: 1rem;margin-bottom: 6%;margin-left: 9%"
                 v-bind:src="defaultlogo"
            >
                </router-link>



        </a-layout-header>
        </show-at>
        <hide-at breakpoint="mediumAndBelow">
            <a-layout-header :style="{width: '100%',backgroundColor:'#004ec7',height:'6rem',padding: '1px 30px 0',
            borderBottom: '1px solid #e8e8e8'}">


                <a-row>


                    <a-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
                <span style="color: white;font-size: 1rem;font-weight:bold">
                    {{greeting}} {{this.$store.state.user.first_name | capitalize}}  </span>



            </a-col>




                </a-row>



        </a-layout-header>
        </hide-at>
    </div>


</template>

<script>



    import moment from 'moment';
    import {showAt, hideAt} from 'vue-breakpoints'
    import Largelogo from '@/assets/logobg.svg'

    export default {
        name: "DevHeader",
        components: {

            hideAt, showAt

        },
        data() {

            return {
                currentUserProfile: null,
                greeting: null,
                defaultlogo: Largelogo,


            }
        },
        async mounted() {
            moment
            let today = new Date()
            let curHr = today.getHours()

            if (curHr < 12) {
                this.greeting = 'Good Morning'

            } else if (curHr < 18) {
                this.greeting = 'Good Afternoon'

            } else {
                this.greeting = 'Good Evening'

            }

            this.currentUserProfile = this.$store.state.user_object




        },
        filters: {
            capitalize: function (value) {
                if (!value) return ''
                value = value.toString()
                return value.charAt(0).toUpperCase() + value.slice(1)
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


    .events {
        width: 11rem;
        height: 5rem;
        margin-top: 0.5rem;
        border-radius: 0;
        background-color: #0064ff;
        border: 0;
        color: white;

    }

    .poolavatar {
        width: 80px;
        height: 80px;
        line-height: 80px;
        font-size: 30px;
        background-color: #0679FB;
        border-radius: 0

    }


    .center {
        margin: auto;
        width: 60%;


    }

    .profile {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        background-color: white;
        margin: 1%;

    }

    .pcustom {
        margin-bottom: 0;
        line-height: 10px;
        margin-top: 0;
    }


</style>
