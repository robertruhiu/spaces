<template>
    <a-layout-header
            :style="{width: '100%',backgroundColor:'#004ec7',height:'100px',padding: '1px 30px 0',borderBottom: '1px solid #e8e8e8' }">

        <a-row>
            <a-col :span="24">


                            <span>
                                <a style="color: white;line-height: 13px;font-size: 17px;font-weight:bold;margin-top: 15%">
                                My candidates</a>




                                <br>




                            </span>
                <hide-at breakpoint="mediumAndBelow">
                    <p style="color: white;font-size: 12px;font-weight: bold;line-height: 0;">
                                <span>
                                    Skills am interested in :
                                </span>

                        <span style="" v-for="skill in skillinterest" v-bind:key="skill">
                            <a-tag color="#BA68C8" style="text-align: center;">{{skill}}</a-tag>
                        </span>
                    </p>

                </hide-at>


            </a-col>


        </a-row>


    </a-layout-header>

</template>

<script>
    import UsersService from '@/services/UsersService'
    import {showAt, hideAt} from 'vue-breakpoints'

    export default {
        name: "MycandidatesHeader",
        data() {
            return {
                skillinterest: []
            }
        },
        components: {
            showAt, hideAt,

        },
        async mounted() {
            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}

            }
            let interests = (await UsersService.currentuser(this.$store.state.user.pk, auth)).data
            this.skillinterest = interests.skills.split(',').slice(0, 10);

        }
    }
</script>

<style scoped>

</style>
