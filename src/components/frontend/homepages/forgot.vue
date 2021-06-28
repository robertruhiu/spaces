<template>
    <a-layout>

        <Pageheader/>
        <a-layout-content :style="{ padding: '0 0px', marginTop: '4rem' }">

            <div :style="{ background: '#fff', minHeight: '81vh' }">
                <a-row style="padding: 3%">
                    <a-col :xs="{span: 18, offset: 0 }" :sm="{span: 12, offset: 6 }" :md="{span: 12, offset: 6 }"
                           :lg="{span: 12, offset: 8 }" :xl="{span: 12, offset: 9 }">
                        <a-card v-if="!$store.state.isUserLoggedIn" title="Forgot password" :style="{width:'21rem'}">
                             <p class="alert" v-if="error">{{error}}</p>
                            <p class="info" v-if="info">{{info}}</p>




                            <a-form v-if="info === null"
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

                                <a-form-item v-if="loading === false">


                                    <a-button @click="Forgot"
                                              type="primary"
                                              class="login-form-button"

                                    >
                                        Submit
                                    </a-button>



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
    import ARow from "ant-design-vue/es/grid/Row";
    export default {
        name: "forgot",
        components: {
            ARow,
            Pageheader,
            Footer,

        },
        data() {
            return {
                email: '',
                loading: false,
                form: this.$form.createForm(this),
                info:null,
                error:null
            }
        },
        methods: {
            Forgot() {

                this.$validator.validateAll().then((values) => {
                    if (values) {
                        this.loading = true
                        AuthService.forgot({
                            email: this.email,


                        })
                            .then(() => {
                                this.info = 'Password reset e-mail has been sent.Please check your email'
                                this.loading = false


                            })
                            .catch(error => {


                                this.loading = false
                                this.error = 'A user with that email is not registered on Codeln.'
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
    .alert {
        padding: 8px;
        background-color: #fff1f0;
        border: 1px solid #ffa39e;
    }
    .info {
        padding: 8px;
        background-color: #f6ffed;
        border: 1px solid #b7eb8f;
    }

</style>
