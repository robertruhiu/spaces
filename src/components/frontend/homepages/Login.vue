<template>
    <a-layout>

        <Pageheader/>
        <a-layout-content :style="{ padding: '0 0px', marginTop: '4rem' }">

            <div :style="{ background: '#fff', minHeight: '81vh' }">
                <a-row style="padding: 3%">
                    <a-col :xs="{span: 18, offset: 0 }" :sm="{span: 12, offset: 6 }" :md="{span: 12, offset: 6 }"
                           :lg="{span: 12, offset: 8 }" :xl="{span: 12, offset: 9 }">
                        <a-card v-if="!$store.state.isUserLoggedIn" title="Login" :style="{width:'21rem'}">

                            <p class="alert" v-if="error">{{error}}</p>


                            <a-form
                                    id="components-form-demo-normal-login"
                                    :form="form"
                                    class="login-form"
                                    @submit.prevent="login"

                            >
                                <a-form-item>

                                    <a-input
                                            v-model="email"
                                            placeholder="Email"
                                            style="z-index: 0"
                                            name="email"
                                            v-validate="'required'"
                                    >
                                        <a-icon
                                                slot="prefix"
                                                type="user"
                                                style="color: rgba(0,0,0,.25)"
                                        />
                                    </a-input>


                                    <div v-if="errors.has('email')" style="color: #f5222d;" class="ant-form-explain">{{
                                        errors.first('email') }}
                                    </div>


                                </a-form-item>
                                <a-form-item>

                                    <a-input
                                            v-model="password"
                                            placeholder="Password"
                                            style="z-index: 0"
                                            type="password"
                                            name="password"
                                            v-validate="'required'"
                                    >
                                        <a-icon
                                                slot="prefix"
                                                type="lock"
                                                style="color: rgba(0,0,0,.25)"
                                        />
                                    </a-input>
                                    <div v-if="errors.has('password')" style="color: #f5222d;" class="ant-form-explain">
                                        {{
                                        errors.first('password') }}
                                    </div>


                                </a-form-item>
                                <a-form-item v-if="loading === false">

                                    <a
                                            class="login-form-forgot"
                                            href=""
                                    >
                                        Forgot password
                                    </a>
                                    <a-button @click="login"
                                              type="primary"
                                              class="login-form-button"

                                    >
                                        Log in
                                    </a-button>


                                    Or
                                    <router-link to="/register">
                                        register now!
                                    </router-link>
                                </a-form-item>
                                <a-form-item v-else>


                                    <div style="text-align: center;">
                                        <a-spin/>
                                    </div>


                                </a-form-item>
                            </a-form>

                        </a-card>
                    </a-col>
                </a-row>


            </div>


        </a-layout-content>

        <Footer/>
    </a-layout>
</template>

<script>
    import Pageheader from '@/components/layout/Header.vue'
    import Footer from '@/components/layout/Footer.vue'
    import AuthService from '@/services/AuthService'
    import User from '@/services/UsersService'
    import ARow from "ant-design-vue/es/grid/Row";


    export default {
        name: 'login',
        components: {
            ARow,
            Pageheader,
            Footer,

        },
        data() {
            return {
                email: 'robertruhiu@gmail.com',
                password: 'Pokerface1994',
                emailnull: null,
                passwordnull: null,
                error: null,
                usertype: null,
                currentUserProfile: {},
                loading: false,
                form: this.$form.createForm(this),
            }
        },

        methods: {
            login() {

                this.$validator.validateAll().then((values) => {
                    if (values) {
                        this.loading = true
                        AuthService.login({
                            email: this.email,
                            password: this.password

                        })
                            .then(resp => {
                                this.$store.dispatch('setToken', resp.data.token)
                                this.$store.dispatch('setUser', resp.data.user)
                                const auth = {
                                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                                }
                                User.currentuser(this.$store.state.user.pk, auth)
                                    .then(response => {
                                        this.$store.dispatch('setUsertype', response.data.user_type)
                                        this.$store.dispatch('setUser_id', response.data.user)

                                        if (response.data.stage === 'complete') {
                                            if (this.$store.state.usertype === 'developer') {
                                                if (this.$store.state.next) {
                                                    this.$router.push({
                                                        name: this.$store.state.next
                                                    })

                                                } else {
                                                    this.$router.push({
                                                        name: 'developer'
                                                    })
                                                }


                                            } else {
                                                if (this.$store.state.next) {
                                                    this.$router.push({
                                                        name: this.$store.state.next
                                                    })
                                                } else {
                                                    this.$router.push({
                                                        name: 'recruiter'
                                                    })
                                                }


                                            }
                                        } else {
                                            this.$router.push({
                                                name: 'register'
                                            })

                                        }

                                    })
                                    .catch(error => {
                                        this.loading = false
                                        return error


                                    });


                            })
                            .catch(error => {
                                this.loading = false
                                this.error = 'login details incorrect'
                                return error

                            });


                    } else {
                        this.loading = false
                    }
                })
            },


        }
    }
</script>
<style scoped>


    #components-form-demo-normal-login .login-form {
        max-width: 300px;
    }

    #components-form-demo-normal-login .login-form-forgot {
        float: right;
    }

    #components-form-demo-normal-login .login-form-button {
        width: 100%;
    }

    .alert {
        padding: 8px;
        background-color: #fff1f0;
        border: 1px solid #ffa39e;
    }

</style>
