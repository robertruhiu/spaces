<template>
    <a-layout-header
            :style="{width: '100%',backgroundColor:'#004ec7',height:'100px',
            padding: '1px 30px 0',borderBottom: '1px solid #e8e8e8' }">
        <div style="margin-left: 1%">

            <a-row>
                <a-col :span="16">
                            <span>
                                <span style="color: white;line-height: 13px;font-size: 17px;font-weight:bold;margin-top: 15%">
                                {{currentUser.first_name |capitalize}} {{currentUser.last_name |capitalize}}</span>

                            </span>




                </a-col>
                <a-col :span="4" style="color: white">
                <p style="color: white;font-size: 15px;font-weight: bold;">
                    Project Score : 58%

                </p>
            </a-col>
                <a-col :span="4">
                    <p style="color: white;font-size: 15px;font-weight: bold">
                         <span>
                              <a-button type="primary">
                                  <a style="text-decoration: none" href="https://5c9d45736280709d6db08321--byarent-static.netlify.com/" target="_blank">Demo</a>
                              </a-button>

                         </span>
                    </p>
                </a-col>


            </a-row>
        </div>


    </a-layout-header>

</template>

<script>
    import UsersService from '@/services/UsersService'
    import Marketplace from '@/services/Marketplace'
    import ACol from "ant-design-vue/es/grid/Col";


    export default {
        name: "ReportHeader",
        data() {

            return {
                currentUserProfile: {},
                currentUser: {},
                allapplicant: null,
                myapplicant: null


            }
        },
        components: {
            ACol

        },
        filters: {
            capitalize: function (value) {
                if (!value) return ''
                value = value.toString()
                return value.charAt(0).toUpperCase() + value.slice(1)
            }
        },
        async mounted() {


            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}

            }
            this.currentUser = (await UsersService.retrieveuser(this.$route.params.candidateId, auth)).data
            this.currentUserProfile = (await UsersService.currentuser(this.$route.params.candidateId, auth)).data
            this.allapplicant = (await Marketplace.joboneapplicant(this.$route.params.candidateId, this.$route.params.jobId, auth)).data
            this.myapplicant = this.allapplicant[0]


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


</style>
