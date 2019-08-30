<template>
    <a-layout-header
            :style="{width: '100%',backgroundColor:'#004ec7',height:'100px',padding: '1px 30px 0',borderBottom: '1px solid #e8e8e8' }">
        <a-row>

            <a-col :span="6">
                <span style="color: white;font-size: 17px;font-weight:bold">
                   {{this.$store.state.user.first_name | capitalize}} {{this.$store.state.user.last_name | capitalize}} </span>
                <p style="color: white;font-size: 12px;font-weight: bold;line-height: 3px"> <strong>My Rank:</strong> 300/2500</p>


            </a-col>




        </a-row>

    </a-layout-header>

</template>

<script>
    import ACol from "ant-design-vue/es/grid/Col";

    import UsersService from '@/services/UsersService'
    import ARow from "ant-design-vue/es/grid/Row";

    export default {
        name: "PortfolioHeader",
        components: {
            ARow,
            ACol,

        },
        data() {

            return {

                currentUser: null,
                skills: [],
                verified_skills: []


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
