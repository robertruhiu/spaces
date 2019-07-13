<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
        <RecruiterSider/>



        <a-layout>

            <a-layout-content>


            </a-layout-content>
        </a-layout>
    </a-layout>




</template>

<script>

    import UsersService from '@/services/UsersService'

    import RecruiterSider from "../../layout/RecruiterSider";



    export default {
        name: "calendar",
        data() {
            return {




            }
        },
        components: {

            RecruiterSider,



        },
        async mounted() {

            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}

            }
            this.currentUserProfile = (await UsersService.currentuser(this.$store.state.user.pk, auth)).data


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

        }

    }
</script>

<style scoped>
    #components-layout-demo-side .logo {
        height: 32px;
        background: rgba(255, 255, 255, .2);
        margin: 16px;
    }

    .ant-tabs-tab-active {
        color: #1890ff;
        font-weight: 500;
    }

</style>
