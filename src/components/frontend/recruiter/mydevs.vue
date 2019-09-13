<template>
    <div>
        <div v-for="dev in pickeddevs" :key="dev">

            <a-button v-if="dev === currentUserProfile.id"
                      style="margin-left: 1rem;"
                      type="primary"
                      @click="navigateTo({name:'mycandidates'})">
                manage candidate
            </a-button>

        </div>
    </div>

</template>

<script>
    import UsersService from '@/services/UsersService'
    import MarketPlaceService from '@/services/Marketplace'

    export default {
        name: "mydevs",
        data() {

            return {
                currentUserProfile: {},
                pickeddevs: []
            }
        },
        async mounted() {

            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}

            }
            if (this.$store.state.user.pk) {


                this.currentUserProfile = (await UsersService.currentuser(this.$route.params.candidateProfileID, auth)).data


                MarketPlaceService.mydevelopers(this.$store.state.user.pk, auth)
                    .then(resp => {

                            if (resp.data.length !== 0) {


                                for (let i = 0; i < resp.data.length; i++) {
                                    this.pickeddevs.push(resp.data[i].developer.id)
                                }

                            }


                        }
                    )
                    .catch();

            }


        },
    }
</script>

<style scoped>

</style>
