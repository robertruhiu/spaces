<template>

    <a-layout-sider
            breakpoint="lg"
            collapsedWidth="0"
            @collapse="onCollapse"
            @breakpoint="onBreakpoint"
            style="box-shadow: 2px 0 6px rgba(0,21,41,.35);background-color: #eef5fb"

    >
        <a-affix offsetTop="this.top">
            <hide-at :breakpoints="{small: 425, medium: 768}" breakpoint="mediumAndBelow">
                <router-link to="/">

                    <img v-bind:style="logo"
                         style="width: 9rem;height: 2rem;margin-top: 1rem;margin-bottom: 1rem;margin-left: 1rem"
                         v-bind:src="defaultlogo"
                    >

                </router-link>
            </hide-at>

            <hide-at breakpoint="mediumAndBelow">
                <a-menu :defaultSelectedKeys="['1']" mode="inline" style="min-height: 85vh;background-color: #eef5fb">
                    <a-menu-item key="1">
                        <router-link to="/recruiter">
                            <a-icon type="dashboard"/>
                            <span>Dashboard</span>
                        </router-link>
                    </a-menu-item>


                    <a-menu-item disabled>

                        <a-icon type="project"/>
                        <span>My jobs</span>

                    </a-menu-item>

                    <a-menu-item disabled>

                        <a-icon type="team"/>
                        <span>My Candidates</span>

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


                </a-menu>
            </hide-at>

        </a-affix>


    </a-layout-sider>


</template>
<script>
    import moment from 'moment';
    import Largelogo from '@/assets/logobg.svg'
    import 'vue-form-wizard/dist/vue-form-wizard.min.css'

    import {hideAt} from 'vue-breakpoints'

    import 'simplemde/dist/simplemde.min.css';


    export default {
        name: 'clientheader',
        data() {

            return {
                top: 0,
                defaultlogo: Largelogo,


            }
        },
        components: {

            hideAt,


        },

        methods: {
            moment,
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
                this.$store.dispatch('setUsertype', null)
                this.$store.dispatch('setUser_id', null)
                this.$store.dispatch('setNext', null)
                this.$store.dispatch('setCart', null)
                this.$store.dispatch('setPicked', null)
                this.$store.dispatch('setLanguage', null)
                this.$store.dispatch('setCountry', null)
                this.$store.dispatch('setRecommend', null)
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
