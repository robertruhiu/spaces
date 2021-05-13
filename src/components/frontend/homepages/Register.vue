<template>
  <a-layout>

    <Pageheader/>
    <a-layout-content :style="{ padding: '0 0px', }">

      <div :style="{ background: '#fff', minHeight: '81vh' }">
        <a-row v-if="!$store.state.isUserLoggedIn" style="padding: 3%;margin-top: 4rem">
          <a-col :xs="{span: 18, offset: 0 }" :sm="{span: 12, offset: 6 }" :md="{span: 12, offset: 6 }"
                 :lg="{span: 12, offset: 8 }" :xl="{span: 12, offset: 9 }">
            <a-card title="Register" :style="{width:'21rem'}">

              <p class="alert" v-if="error">{{ error }}</p>
              <a-form
                  id="components-form-demo-normal-login"
                  :form="registerform"
                  class="login-form"

              >
                <a-form-item>
                  <a-input v-model="firstname"
                           v-validate="'required'"
                           name="firstname"
                           placeholder="firstname"
                  >

                  </a-input>
                  <div v-if="errors.has('firstname')" style="color: #f5222d;"
                       class="ant-form-explain">{{
                      errors.first('firstname')
                    }}
                  </div>
                </a-form-item>
                <a-form-item>
                  <a-input v-model="lastname"
                           v-validate="'required'"
                           name="lastname"

                           placeholder="lastname"
                  >

                  </a-input>
                  <div v-if="errors.has('lastname')" style="color: #f5222d;" class="ant-form-explain">
                    {{
                      errors.first('lastname')
                    }}
                  </div>
                </a-form-item>
                <a-form-item>
                  <a-input v-model="email"
                           v-validate="'required|email'"
                           name="email"

                           placeholder="Email"
                  >
                    <a-icon
                        slot="prefix"
                        type="user"
                        style="color: rgba(0,0,0,.25)"
                    />
                  </a-input>

                  <div v-if="errors.has('email')" style="color: #f5222d;" class="ant-form-explain">{{
                      errors.first('email')
                    }}
                  </div>
                </a-form-item>
                <a-form-item>


                  <a-input-password v-validate="'required|verify_password'" name="password"
                                    type="password"
                                    v-model="password1"
                                    :class="{'is-danger': errors.has('password')}" placeholder="Password"
                                    ref="password">

                  </a-input-password>
                  <span style="color: #f5222d;" v-show="errors.has('password')"
                        class="help is-danger">{{ errors.first('password') }}</span>


                </a-form-item>
                <a-form-item>


                  <a-input-password v-model="password2" v-validate="'required|confirmed:password'"
                                    name="password_confirmation"
                                    type="password" :class="{'is-danger': errors.has('password_confirmation')}"
                                    placeholder="Password, Again" data-vv-as="password">

                  </a-input-password>
                  <span style="color: #f5222d;" v-show="errors.has('password_confirmation')"
                        class="help is-danger">{{ errors.first('password_confirmation') }}</span>
                </a-form-item>
                <a-form-item v-if="loading ">
                  <div style="text-align: center;">
                    <a-spin/>
                  </div>


                </a-form-item>
                <a-form-item v-else>
                  <a-button @click="register"
                            type="primary"
                            class="login-form-button"
                  >
                    Register
                  </a-button>


                </a-form-item>
              </a-form>
            </a-card>
          </a-col>
        </a-row>


        <a-row v-if="$store.state.isUserLoggedIn && $store.state.usertype === null"
               style="margin-top: 4rem;padding: 3%">

          <a-col :xs="{span: 18, offset: 0 }" :sm="{span: 12, offset: 6 }" :md="{span: 18, offset: 2 }"
                 :lg="{span: 18, offset: 6 }" :xl="{span: 12, offset: 6 }">
            <h2 style="margin-left: 33%">Choose profile</h2>


            <div>
              <a-row gutter="16">
                <a-col :xs="{span: 18, offset: 2 }" :sm="{span: 24, offset: 0 }" :md="{span: 12, offset: 0 }"
                       :lg="{span: 12, offset: 0 }" :xl="{span: 12, offset: 0 }" style="margin-bottom: 1rem">

                  <a @click="Choice('recruiter')">
                    <a-row class="ant-card actioncards">
                      <a-col span="24">
                        <div style="text-align: center">
                          <img class="poolavatar" src="../../../assets/images/interview.svg">
                        </div>
                      </a-col>
                      <a-col span="24" style="text-align: center">
                        <p>Recruiter</p>


                      </a-col>

                    </a-row>

                  </a>
                </a-col>

                <a-col :xs="{span: 18, offset: 2 }" :sm="{span: 24, offset: 0 }" :md="{span: 12, offset: 0 }"
                       :lg="{span: 12, offset: 0 }" :xl="{span: 12, offset: 0 }" style="margin-bottom: 1rem">

                  <a @click="Choice('developer')">
                    <a-row class="ant-card actioncards">
                      <a-col span="24">
                        <div style="text-align: center">
                          <img class="poolavatar" src="../../../assets/images/programmer.svg">
                        </div>
                      </a-col>
                      <a-col span="24" style="text-align: center">
                        <p>Developer</p>


                      </a-col>

                    </a-row>

                  </a>
                </a-col>
              </a-row>
            </div>

          </a-col>
        </a-row>


        <div v-if="$store.state.usertype && $store.state.usertype ==='developer'">
          <CandidateSteps/>

        </div>


        <div v-if="$store.state.usertype && $store.state.usertype ==='recruiter'">
          <Recruitersteps/>
        </div>


      </div>


    </a-layout-content>

    <Footer/>
  </a-layout>


</template>


<script>
import Pageheader from '@/components/layout/Header.vue'
import CandidateSteps from '@/components/frontend/homepages/registercomponents/Candidatesteps'
import Footer from '@/components/layout/Footer.vue'
import AuthService from '@/services/AuthService'

import ARow from "ant-design-vue/es/grid/Row";
import ACol from "ant-design-vue/es/grid/Col";
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import VeeValidate from 'vee-validate';

import Vue from 'vue'
import Recruitersteps from "./registercomponents/recruitersteps";
import User from "@/services/UsersService";


Vue.use(VeeValidate);

VeeValidate.Validator.extend('verify_password', {
  getMessage: field => `The password must contain at least: 1 uppercase, 1 lowercase, 1 number,8 characters min`,
  validate: value => {
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
    return strongRegex.test(value);
  }
});


export default {
  name: 'register',

  components: {
    Recruitersteps,
    ACol,
    ARow,

    Pageheader,
    Footer,
    CandidateSteps,


  },
  data() {
    return {
      loading: false,
      usertype: null,
      firstname: '',
      lastname: '',
      email: '',
      password1: '',
      password2: '',
      error: null,


    }
  },


  methods: {

    register() {
      this.$validator.validateAll().then((values) => {
        if (values) {
          this.loading = true


          AuthService.register({
            first_name: this.firstname,
            last_name: this.lastname,
            email: this.email,
            password1: this.password1,
            password2: this.password2
          })
              .then(resp => {

                this.$store.dispatch('setToken', resp.data.token)
                this.$store.dispatch('setUser', resp.data.user)
                const auth = {
                  headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                User.currentuser(this.$store.state.user.pk, auth)

                    .then(response => {

                      this.$store.dispatch('setUser_id', response.data.user)
                      this.$store.dispatch('setuser_object', response.data)


                    })
                    .catch(error => {
                      this.loading = false
                      return error


                    });

                this.loading = false


              })
              .catch((error) => {
                this.loading = false

                if (error.response && error.response.status === 400) {
                  this.error = 'A user is already registered with this e-mail address.'

                }else {
                  this.error = 'error please reload page and try again'
                }




              });


        }
      })
    },
    Choice(choice) {
      this.$store.dispatch('setUsertype', choice)
    }


  }


}
</script>

<style scoped>


#components-form-demo-normal-login .login-form {
  max-width: 300px;
}

#components-form-demo-normal-login .login-form-button {
  width: 100%;
}

.radiochoice {
  height: 10rem;
  width: 15rem;
  margin: 4px;

}

ul {
  list-style-type: none;
}

.alert {
  padding: 8px;
  background-color: #fff1f0;
  border: 1px solid #ffa39e;
}


.actioncards {
  width: 15rem;
  border-radius: 0;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 0.89rem;
}

.poolavatar {
  width: 50%;
  margin-top: 0.5rem;
}
</style>



