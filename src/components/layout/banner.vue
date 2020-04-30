<template>
    <div style="background-color: white">
        <hide-at breakpoint="mediumAndBelow">
            <a-affix :offsetBottom="this.bottom">
                <div>

                    <a-row style="">


                        <a-col span="12" class="customborderimage">
                            <div>
                                <img style="width: 100%;height: 11rem" src="../../assets/images/cropped.png">
                            </div>

                        </a-col>
                        <a-col span="4" style="background-color: white;padding: 2%;height: 11rem;" class="customborder">


                            <div v-if="$store.state.isUserLoggedIn">

                                <div v-if="currentUserProfile.remote_entry">
                                    <p v-if="currentUserProfile.remote_entry"
                                       style="font-size: 1rem;font-weight: bold">
                                        Verification ongoing for your profile </p>

                                </div>
                                <div v-else>
                                    <p style="font-size: 1rem;font-weight: bold">Begin your verification today to
                                        join
                                        the
                                        program </p>
                                    <div v-if="loading">
                                        <a-spin/>
                                    </div>

                                    <a-button type="primary" @click="Joinremote" v-else>Join
                                        <a-icon type="right"/>
                                    </a-button>

                                </div>


                            </div>
                            <div v-else>
                                <p style="font-size: 1rem;font-weight: bold">Begin your verification today to join the
                                    program </p>
                                <router-link to="/login">
                                    <a-button type="primary">Join
                                        <a-icon type="right"/>
                                    </a-button>
                                </router-link>


                            </div>


                        </a-col>
                    </a-row>
                </div>


            </a-affix>
        </hide-at>
        <show-at breakpoint="mediumAndBelow">
            <a-affix :offsetBottom="this.bottom">
                <div style="background-color: #3854c6; padding: 31px;min-height: 10rem;padding-top: 3rem">
                    <div style="color: white">
                        <a-row :gutter="16">
                            <a-col :xs="{span: 8, offset: 0 }" :sm="{span: 8, offset: 0 }"
                                   :md="{span: 8, offset: 0 }"
                                   :lg="{span: 12, offset: 0 }" :xl="{span: 12, offset: 0 }">
                                <h2 style="color: white">Codeln Remote</h2>
                            </a-col>
                            <a-col :xs="{span: 16, offset: 0 }" :sm="{span: 16, offset: 0 }"
                                   :md="{span: 16, offset: 0 }"
                                   :lg="{span: 8, offset: 0 }" :xl="{span: 8, offset: 0 }">
                                <div>

                                    <p>The fastest way to secure remote gigs and projects</p>
                                    <div v-if="$store.state.isUserLoggedIn">
                                        <div v-if="currentUserProfile.remote_entry">
                                            <p v-if="currentUserProfile.remote_entry">
                                                Verification ongoing for your profile </p>

                                        </div>
                                        <div v-else>

                                            <p>Begin your verification today to join
                                                the
                                                program </p>
                                            <div v-if="loading">
                                                <a-spin/>
                                            </div>

                                            <a-button type="primary" @click="Joinremote" v-else>Join
                                                <a-icon type="right"/>
                                            </a-button>


                                        </div>

                                    </div>
                                    <div v-else>
                                        <p>Begin your verification today to join the
                                            program </p>
                                        <router-link to="/login">
                                            <a-button type="primary">Join
                                                <a-icon type="right"/>
                                            </a-button>
                                        </router-link>


                                    </div>
                                </div>

                            </a-col>


                        </a-row>
                    </div>


                </div>
            </a-affix>
        </show-at>
    </div>


</template>

<script>
    import {hideAt, showAt} from 'vue-breakpoints'
    import UsersService from '@/services/UsersService'


    export default {
        name: "developerfooter",

        data() {
            return {
                loading: false,
                bottom: 10,
                currentUserProfile: null,
                remote: false
            };
        },
        components: {
            hideAt, showAt
        },
        async mounted() {
            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}

            }
            if (this.$store.state.isUserLoggedIn) {
                this.currentUserProfile = (await UsersService.currentuser(this.$store.state.user.pk, auth)).data
            }
        },
        methods: {

            Joinremote() {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                this.loading = true
                if (this.currentUserProfile.user_type === 'developer') {
                    this.currentUserProfile.remote_entry = true
                    UsersService.updatepatch(this.$store.state.user.pk, {remote_entry: true}, auth)
                        .then(resp => {
                            this.currentUserProfile = resp.data
                            this.$notification.open({
                                message: 'Welcome to Remote Codeln',
                                description:
                                    'Thank you for joining our new program.Codeln representatives will go through your profile and may contact you to help ascertain your skills.',

                            });
                        })

                } else {
                    this.$notification.open({
                        message: 'Remote Codeln',
                        description:
                            'Only available for developers.',

                    });

                }

                this.loading = false
            }


        }
    }
</script>

<style scoped>
    .imagecenter {


    }

    a {
        color: #ffffff;
    }

    .icons-list >>> .anticon {
        margin-right: 6px;
        font-size: 24px;
    }

    .actioncards {
        background-color: white;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

        border-radius: 0;
        height: 100%;


    }

    .customborder {

        box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important
    }

    .customborderimage {

        box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important
    }

</style>
