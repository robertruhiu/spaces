<template>
    <div id="app">



        <router-view>

        </router-view>

    </div>
</template>

<script>
    import UsersService from '@/services/UsersService'

    export default {
        name: 'app',
        data() {
            return {
                loading: true
            }
        },
        async mounted() {
            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}

            };
            if (this.$store.state.user) {
                UsersService.authenticated(this.$store.state.user.pk, auth)
                    .then()
                    .catch(error => {
                            this.$store.dispatch('setToken', null)
                            this.$store.dispatch('setUser', null)
                            this.$store.dispatch('setisLoggedIn', false)
                            this.$store.dispatch('setUsertype', null)
                            this.$store.dispatch('setUser_id', null)
                            this.$router.push({
                                name: 'home'
                            })
                            return error

                        }
                    )

            } else {
                this.$store.dispatch('setToken', null)
                this.$store.dispatch('setUser', null)
                this.$store.dispatch('setisLoggedIn', false)
                this.$store.dispatch('setUsertype', null)
                this.$store.dispatch('setUser_id', null)
            }
            this.loading = false


        }


    }
</script>

<style>
    #app {
        display: grid;
        background-color: white;

    }
    @font-face {
      font-family: "sofia_prolight";
      src: local("sofia_prolight"),
      url(./assets/fonts/sofiapro-light.otf) format("opentype");
    }
    @font-face {
      font-family: "sofia_probold";
      src: local("sofia_probold"),
      url(./assets/fonts/sofiapro-bold.otf) format("opentype");
    }
    @font-face {
      font-family: "sofia_problack";
      src: local("sofia_problack"),
      url(./assets/fonts/sofiapro-black.otf) format("opentype");
    }
    @font-face {
      font-family: "sofia_problackitalic";
      src: local("sofia_problackitalic"),
      url(./assets/fonts/sofiapro-blackitalic.otf) format("opentype");
    }
    @font-face {
      font-family: "sofia_probolditalic";
      src: local("sofia_probolditalic"),
      url(./assets/fonts/sofiapro-bolditalic.otf) format("opentype");
    }
    @font-face {
      font-family: "sofia_proextralight";
      src: local("sofia_proextralight"),
      url(./assets/fonts/sofiapro-extralight.otf) format("opentype");
    }
    @font-face {
      font-family: "sofia_proextralightitalic";
      src: local("sofia_proextralightitalic"),
      url(./assets/fonts/sofiapro-extralightitalic.otf) format("opentype");
    }
    @font-face {
      font-family: "sofia_prolight";
      src: local("sofia_prolight"),
      url(./assets/fonts/sofiapro-light.otf) format("opentype");
    }
    @font-face {
      font-family: "sofia_prolightitalic";
      src: local("sofia_prolightitalic"),
      url(./assets/fonts/sofiapro-lightitalic.otf) format("opentype");
    }
    @font-face {
      font-family: "sofia_promedium";
      src: local("sofia_promedium"),
      url(./assets/fonts/sofiapro-medium.otf) format("opentype");
    }
    @font-face {
      font-family: "sofia_promediumitalic";
      src: local("sofia_promediumitalic"),
      url(./assets/fonts/sofiapro-mediumitalic.otf) format("opentype");
    }
    @font-face {
      font-family: "sofia_proregular";
      src: local("sofia_proregular"),
      url(./assets/fonts/sofiapro-regular.otf) format("opentype");
    }
    @font-face {
      font-family: "sofia_proregularitalic";
      src: local("sofia_proregularitalic"),
      url(./assets/fonts/sofiapro-regularitalic.otf) format("opentype");
    }
    @font-face {
      font-family: "sofia_prosemibold";
      src: local("sofia_prosemibold"),
      url(./assets/fonts/sofiapro-semibold.otf) format("opentype");
    }
    @font-face {
      font-family: "sofia_prosemibolditalic";
      src: local("sofia_prosemibolditalic"),
      url(./assets/fonts/sofiapro-semibolditalic.otf) format("opentype");
    }
    @font-face {
      font-family: "sofia_proultralight";
      src: local("sofia_proultralight"),
      url(./assets/fonts/sofiapro-ultralight.otf) format("opentype");
    }
    @font-face {
      font-family: "sofia_proultralightitalic";
      src: local("sofia_proultralightitalic"),
      url(./assets/fonts/sofiapro-ultralightitalic.otf) format("opentype");
    }


</style>
