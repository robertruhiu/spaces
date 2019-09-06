<template>
    <div>
        <show-at breakpoint="mediumAndBelow">
            <a-layout-header :style="{width: '100%',backgroundColor:'#ffffff',height:'5rem',padding: '1px 30px 0',
            borderBottom: '1px solid #e8e8e8'}">
                <img v-bind:style="logo"
                 style="width: 120px;height: 31px;margin-top: 1rem;margin-bottom: 6%;margin-left: 9%"
                 v-bind:src="defaultlogo"
            >



        </a-layout-header>
        </show-at>
        <hide-at breakpoint="mediumAndBelow">
            <a-layout-header :style="{width: '100%',backgroundColor:'#004ec7',height:'6rem',padding: '1px 30px 0',
            borderBottom: '1px solid #e8e8e8'}">


                <a-row>

            <a-col :xs="{span: 24, offset: 2  }" :sm="{span: 12, offset: 0 }" :md="{span: 10, offset: 1 }"
                                   :lg="{span: 8, offset: 0 }" :xl="{span: 8,offset: 0 }" >
                <span style="color: white;font-size: 1rem;font-weight:bold">
                   {{this.$store.state.user.first_name | capitalize}} {{this.$store.state.user.last_name | capitalize}} </span>
                <p style="color: white;font-size: 0.9rem;font-weight: bold;line-height: 3px"> <strong>My Rank:</strong> 300/2500</p>


            </a-col>




        </a-row>



        </a-layout-header>
        </hide-at>
    </div>


</template>

<script>
    import ACol from "ant-design-vue/es/grid/Col";

    import UsersService from '@/services/UsersService'
    import ARow from "ant-design-vue/es/grid/Row";
    import Largelogo from '@/assets/logobg.svg'
    import {showAt, hideAt} from 'vue-breakpoints'

    export default {
        name: "PortfolioHeader",
        components: {
            ARow,
            ACol,
            hideAt, showAt

        },
        data() {

            return {

                currentUser: null,
                skills: [],
                verified_skills: [],
                defaultlogo: Largelogo,


            }
        },
        async mounted() {


            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}

            }
            this.currentUser = (await UsersService.retrieveuser(this.$store.state.user.pk, auth)).data
            this.currentUserProfile = (await UsersService.currentuser(this.$store.state.user.pk, auth)).data
            this.skills = this.currentUserProfile.skills.split(',');
            this.verified_skills = this.currentUserProfile.verified_skills.split(',');



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
