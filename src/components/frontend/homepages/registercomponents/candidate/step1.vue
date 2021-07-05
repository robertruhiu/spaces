<template>
  <div>

    <a-form>
      <a-row :gutter="16">
        <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
               :md="{span: 12, offset: 0 }"
               :lg="{span: 8, offset: 0 }" :xl="{span: 8, offset: 0 }">

          <a-form-item
              label="Github Url"
              :label-col="{ span: 24 }"
              :wrapper-col="{ span:  24}"
          >
            <input v-validate="{url: {require_protocol: true }}" data-vv-as="github"
                   v-model="$store.state.user_object.github_repo" name="github" type="text" placeholder="github url"
                   class="ant-input">

            <span style="color: #f5222d;">{{ errors.first('github') }}</span>


          </a-form-item>


        </a-col>
        <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
               :md="{span: 12, offset: 0 }"
               :lg="{span: 8, offset: 0 }" :xl="{span: 8, offset: 0 }">
          <a-form-item

              :label-col="{ span: 24 }"
              :wrapper-col="{ span:  24}"
          >
            <span slot="label">
              Linkedin Url <span style="color: red">*</span>
            </span>
            <input v-validate="{required: true,url: {require_protocol: true }}" data-vv-as="linkedin"
                   v-model="$store.state.user_object.linkedin_url" name="linkedin" type="text" placeholder="linkedin profile"
                   class="ant-input">

            <span style="color: #f5222d;">{{ errors.first('linkedin') }}</span>

          </a-form-item>

        </a-col>
        <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
               :md="{span: 12, offset: 0 }"
               :lg="{span: 8, offset: 0 }" :xl="{span: 8, offset: 0 }">
          <a-form-item
              label="Designer portfolio link"
              :label-col="{ span: 24 }"
              :wrapper-col="{ span:  24}"
          >
            <input v-validate="{url: {require_protocol: true }}" data-vv-as="design"
                   v-model="$store.state.user_object.design_portfolio" name="design" type="text" placeholder="design portfolio link"
                   class="ant-input">

            <span style="color: #f5222d;">{{ errors.first('design') }}</span>

          </a-form-item>

        </a-col>




      </a-row>
      <a-row :gutter="16">
        <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
               :md="{span: 12, offset: 0 }"
               :lg="{span: 8, offset: 0 }" :xl="{span: 8, offset: 0 }">
          <a-form-item

              :label-col="{ span: 24 }"
              :wrapper-col="{ span:  24}"
          >
            <span slot="label">
              Country <span style="color: red">*</span>
            </span>


            <a-select name="location"  v-validate="'required'" data-vv-as="location" show-search

                      option-filter-prop="children"
                      v-model="currentcountry" @change="handleChange" :filter-option="filterOption">

              <a-select-option v-for="country in countrieslist"
                               v-bind:key="country">

                {{ country }}
              </a-select-option>


            </a-select>

            <span style="color: #f5222d;">{{ errors.first('location') }}</span>
          </a-form-item>



        </a-col>

        <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
               :md="{span: 12, offset: 0 }"
               :lg="{span: 8, offset: 0 }" :xl="{span: 8, offset: 0 }"


        >
          <a-form-item

              :label-col="{ span: 24 }"
              :wrapper-col="{ span: 24 }"
          >
            <span slot="label">
              Gender <span style="color: red">*</span>
            </span>

            <a-select v-validate="'required'" data-vv-as="gender"
                name="gender" @change="handleGender"

                placeholder="Select a option and change input text above"
                v-model="gender"
            >
              <a-select-option value="male">
                male
              </a-select-option>
              <a-select-option value="female">
                female
              </a-select-option>
            </a-select>
            <span style="color: #f5222d;">{{ errors.first('gender') }}</span>
          </a-form-item>
        </a-col>

        <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
               :md="{span: 12, offset: 0 }"
               :lg="{span: 8, offset: 0 }" :xl="{span: 8, offset: 0 }">
          <a-form-item

              :label-col="{ span: 24 }"
              :wrapper-col="{ span: 24 }"
          >
            <span slot="label">
              Years of experience <span style="color: red">*</span>
            </span>
            <a-select
                name="experience"
                v-validate="'required'" data-vv-as="experience"
                placeholder="Select a option and change input text above"
                v-model="years" @change="handleYears"
            >
              <a-select-option value="0-1">
                0-1
              </a-select-option>
              <a-select-option value="1-2">
                1-2
              </a-select-option>
              <a-select-option value="2-4">
                2-4
              </a-select-option>
              <a-select-option value="4-above">
                4-above
              </a-select-option>
            </a-select>
            <span style="color: #f5222d;">{{ errors.first('experience') }}</span>
          </a-form-item>

        </a-col>


      </a-row>
      <a-row :gutter="16">
        <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
               :md="{span: 12, offset: 0 }"
               :lg="{span: 8, offset: 0 }" :xl="{span: 8, offset: 0 }">
          <a-form-item

              :label-col="{ span: 24 }"
              :wrapper-col="{ span: 24 }"
          >
            <span slot="label">
              Preffered work type <span style="color: red">*</span>
            </span>
            <a-select
                mode="tags"
                name="work_type"
                v-validate="'required'" data-vv-as="work_type"
                @change="Availabiltytags"
                placeholder="Select a option you can pick more than one"
                v-model="availabiltytags"

            >
              <a-select-option value="contract">
                contract
              </a-select-option>
              <a-select-option value="fulltime">
                fulltime
              </a-select-option>
              <a-select-option value="parttime">
                part time
              </a-select-option>
              <a-select-option value="remote">
                remote
              </a-select-option>
            </a-select>

            <span style="color: #f5222d;">{{ errors.first('work_type') }}</span>
          </a-form-item>

        </a-col>

        <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
               :md="{span: 12, offset: 0 }"
               :lg="{span: 8, offset: 0 }" :xl="{span: 8, offset: 0 }"


        >



          <VuePhoneNumberInput name="number" v-model="phone" v-validate="'required'" data-vv-as="number" style="padding-top: 6%"
                               :default-country-code="countrycode"
                               @update="onUpdates" />

          <span style="color: #f5222d;">{{ errors.first('number') }}</span>


        </a-col>


      </a-row>


    </a-form>




    <div class="steps-action">
      <span v-if="loading">
        <a-spin/>
      </span>

      <a-button v-else type="primary" @click="next">
        Next
        <a-icon type="right" />
      </a-button>


    </div>
  </div>

</template>

<script>

import VeeValidate from 'vee-validate';
import Vue from 'vue'

import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';
import UsersService from "@/services/UsersService";
import User from "@/services/UsersService";

Vue.use(VeeValidate);


let telephones = require("@/store/telephone")
let countries = require("@/store/location.json")
export default {
  name: "step1",
  components: { VuePhoneNumberInput},
  data() {
    return {
      currentUserProfile: {},
      loading: false,
      countrieslist: null,
      currentcountry: '',
      availabiltytags:[],
      number: 'null',
      phone: '',
      countrycode: 'NG',
      formattednumber: null,
      gender:'',
      years:''


    }
  },
  computed: {
    CurrentCountry() {
      return ''
    }
  },


  async mounted() {
    this.countrieslist = countries
    if (this.$store.state.user_object) {
      this.currentUserProfile = this.$store.state.user_object
      this.availabiltytags = this.$store.state.user_object.availabilty.replace(/'/g, '').replace(/ /g, '').split(',');
      for (const key in this.countrieslist) {
        if(this.$store.state.user_object.country === key){
          this.currentcountry = this.countrieslist[key]

        }

      }
      if (this.$store.state.user_object.phone_number) {

        if (this.$store.state.user_object.phone_number.charAt(0) === '+') {
          this.phone = this.$store.state.user_object.phone_number
          telephones.forEach(telephone => {

            if (this.$store.state.user_object.phone_number.substring(0, 4) === telephone.dial_code) {
              this.countrycode = telephone.code

            } else if (this.$store.state.user_object.phone_number.substring(0, 4) === telephone.dial_code) {
              this.countrycode = telephone.code
            }


          });


        }
      }
      if(this.$store.state.user_object.gender !== null){
        this.gender = this.$store.state.user_object.gender
      }
      if(this.$store.state.user_object.years !== null){
        this.years = this.$store.state.user_object.years
      }




    }


  },
  methods: {
    next() {
      this.$validator.validateAll().then((values) => {
        if (values) {


          const auth = {
            headers: {Authorization: 'JWT ' + this.$store.state.token}

          }
          this.loading = true

          this.$store.state.user_object.user_type = 'developer'

          this.$store.state.user_object.phone_number = this.results.formattedNumber
          this.$store.state.user_object.gender = this.gender
          this.$store.state.user_object.years = this.years
          this.$store.dispatch('setUsertype', 'developer')

          let patchdata = {
            gender: this.gender,
            linkedin_url: this.$store.state.user_object.linkedin_url,
            github_repo: this.$store.state.user_object.github_repo,
            years: this.years,
            availabilty: this.$store.state.user_object.availabilty,
            country: this.$store.state.user_object.country,
            user_type:'developer',
            phone_number:this.results.formattedNumber,
            design_portfolio:this.$store.state.user_object.design_portfolio,


          }


          UsersService.updatepatch(this.$store.state.user.pk,patchdata, auth)
              .then(() => {
                User.currentuser(this.$store.state.user.pk, auth)

                    .then(response => {
                      this.$store.dispatch('setuser_object', response.data)
                      this.$store.dispatch('setRegistrationStep', 1)
                      this.loading = false


                    })







              })
              .catch((err) => {
                this.loading = false
                let error =''
                let message = ''
                if(err.response){
                  error = err.response.status
                  message='Submission Failed \n Please check and modify the  information before resubmitting.'
                }
                else{
                  error =''
                  message='please do check your internet'
                }

                this.$notification.open({
                  message: error,
                  description:
                  message,
                  icon: <a-icon type="close-circle" style="color: red"/>,


                });




              });



        }
      })

    },
    onUpdates(payload) {
      this.results = payload
      this.$store.state.user_object.phone_number = this.results.formattedNumber

    },
    handleChange(value){
      for (const key in this.countrieslist) {
        if(value === this.countrieslist[key]){
          this.$store.state.user_object.country = key

        }

      }

    },
    handleGender(value){
      this.gender = value

    },
    handleYears(value){
      this.years = value

    },
    Availabiltytags() {

      this.$store.state.user_object.availabilty = this.availabiltytags.join(", ")
    },
    filterOption(input, option) {
      return (
          option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
      );
    },
  }
}
</script>

<style scoped>
.steps-action {
  margin-top: 24px;
}
</style>
