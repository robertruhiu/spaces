<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">

        <RecruiterSider/>

        <a-layout :style="{ backgroundColor:'#F8FAFB' }">


            <a-layout-content>
                <Pageheader/>
               
                <div :style="{ padding: '6px 20px', background: '#fff', minHeight: '75vh',maxWidth:'72rem',
                marginLeft: '1%',marginRight:'1%',marginTop:'1rem' }">
                    <a-form :form="form">
                        <a-row :gutter="16">
                            <a-col :xs="{span: 24, offset: 0  }" :sm="{span: 24, offset: 0 }" :md="{span: 12, offset: 0 }"
                                   :lg="{span: 12, offset: 0 }" :xl="{span: 12,offset: 0 }" >

                                <a-row :gutter="16">
                                    <a-col :span="24">
                                        <a-form-item
                                                label="Company name"
                                                :label-col="{ span: 24 }"
                                                :wrapper-col="{ span:  24}"
                                        >
                                            <a-input
                                                    v-model="currentUserProfile.company"

                                            />

                                        </a-form-item>

                                    </a-col>

                                    <a-col :span="24">
                                        <a-form-item
                                                label="Company website link"
                                                :label-col="{ span: 24 }"
                                                :wrapper-col="{ span:  24}"
                                        >
                                            <a-input
                                                    v-model="currentUserProfile.company_url"

                                            />


                                        </a-form-item>

                                    </a-col>

                                    <a-col :span="24">
                                        <a-form-item

                                                :label-col="{ span: 24 }"
                                                :wrapper-col="{ span:  24}"
                                        >
                                            <span slot="label">Country : {{currentUserProfile.country}}</span>
                                            <country-select v-model="currentUserProfile.country"
                                                            class="ant-input"
                                            />
                                        </a-form-item>

                                    </a-col>

                                    <a-col :span="24">
                                        <a-form-item
                                                label="Company industry sector"
                                                :label-col="{ span: 24 }"
                                                :wrapper-col="{ span:  24}"
                                        >
                                            <a-input v-model="currentUserProfile.industry"

                                            />
                                        </a-form-item>

                                    </a-col>
                                    <a-col :span="24">
                                        <a-form-item
                                                label="Your role at the Company"
                                                :label-col="{ span: 24 }"
                                                :wrapper-col="{ span:  24}"
                                        >
                                            <a-input v-model="currentUserProfile.job_role"
                                                     placeholder="Recruiter,CTO,HR,CEO etc"

                                            />
                                        </a-form-item>

                                    </a-col>
                                    <a-col :span="24" style="margin-bottom: 1rem">

                                        <VuePhoneNumberInput name="number" v-model="phone"
                                                             :default-country-code="countrycode"
                                                             @update="onUpdate"/>


                                    </a-col>
                                    <a-col :span="24" style="margin-bottom: 1rem">
                                        <a-checkbox v-model="currentUserProfile.notifications">Unsubscribe/Opt out from
                                            future Codeln email notifications
                                        </a-checkbox>

                                    </a-col>

                                </a-row>


                            </a-col>
                            <a-col :xs="{span: 24, offset: 0  }" :sm="{span: 24, offset: 0 }" :md="{span: 12, offset: 0 }"
                                   :lg="{span: 12, offset: 0 }" :xl="{span: 12,offset: 0 }"  >
                                <a-col :span="24">
                                    <a-form-item>
                                        <p>Pick skills to enable candidate
                                            recommendations</p>
                                        <div>

                                            <template v-for=" tag in recommendationtags">
                                                <a-checkable-tag style="border-color: blue;font-size: 14px"
                                                                 :key="tag"
                                                                 :checked="selectedTags.indexOf(tag) > -1"
                                                                 @change="(checked) => handleChange(tag, checked)"
                                                >
                                                    {{tag}}
                                                </a-checkable-tag>
                                            </template>
                                        </div>


                                    </a-form-item>
                                </a-col>

                            </a-col>
                        </a-row>
                        <div style="text-align: center" v-if="loading === false">
                            <a-button @click="Save" type="primary" style="width: 15rem">Save</a-button>

                        </div>
                        <div style="text-align: center" v-else>
                             <div style="text-align: center;">
                                <a-spin/>
                            </div>

                        </div>

                    </a-form>


                </div>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>

<script>
    import UsersService from '@/services/UsersService'
    import Pageheader from '@/components/frontend/recruiter/layout/Pageheader'
    import RecruiterSider from "./layout/RecruiterSider";
    import ACol from "ant-design-vue/es/grid/Col";
    import VuePhoneNumberInput from 'vue-phone-number-input';
    import 'vue-phone-number-input/dist/vue-phone-number-input.css';
    let telephones = require("@/store/telephone")

    export default {
        name: "Myprofile",
        data() {

            return {
                currentUserProfile: null,
                recommendationtags: ['Django', 'Javascript', 'Python', 'Php', 'Postgres', 'Sql', 'Html', 'Css', 'bootstrap', 'React', 'Java',
                    'React Native', 'Redux', 'Flask ', 'Go', 'Expressjs', 'Vuejs',
                    'Angular', 'Ios', 'flutter', 'Ionic', 'Rails', 'Meteor', 'AI', 'Cybersecurity',
                    'Blockchain', 'Arduino', 'Spring', 'Bitcoin', 'Kotlin', 'Scala', 'Nativescript ',
                    'Android', 'Website', 'Mobile'],
                selectedTags: [],
                loading: false,
                formattednumber: null,
                number: 'null',
                phone: '',
                countrycode:''


            }
        },
        components: {
            ACol,
            Pageheader,
            RecruiterSider,
            VuePhoneNumberInput
        },
        async mounted() {


            if (this.$store.state.user.pk) {
                this.currentUserProfile = this.$store.state.user_object

                if (this.currentUserProfile.skills.length >= 0) {
                    let tags = this.currentUserProfile.skills.replace(/'/g, '').replace(/ /g, '').split(',');
                    for (let i = 0; i < tags.length; i++) {
                        this.selectedTags.push(tags[i])
                    }


                }
                if (this.currentUserProfile.phone_number) {
                    
                
                    if(this.currentUserProfile.phone_number.charAt(0)=== '+'){
                        this.phone = this.currentUserProfile.phone_number
                         telephones.forEach(telephone => {
                            
                            if(this.currentUserProfile.phone_number.substring(0,4) === telephone.dial_code){
                                this.countrycode = telephone.code

                            }else if(this.currentUserProfile.phone_number.substring(0,4) === telephone.dial_code){
                                this.countrycode = telephone.code
                            }
    
                            
                        });
                        
                        
                    }
                }
            }


        },
        methods: {
            onUpdate(payload) {
                this.results = payload
                this.currentUserProfile.phone_number = this.results.formattedNumber

            },
            Save() {

                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                for (let i = 0; i < this.selectedTags.length; i++) {
                    if (this.selectedTags[i] === '') {
                        let index = this.selectedTags.indexOf(this.selectedTags[i]);
                        this.selectedTags.splice(index, 1);

                    }
                }
                this.loading = true
                this.currentUserProfile.skills = this.selectedTags.join(',')
                this.currentUserProfile.user = this.$store.state.user.pk
                this.currentUserProfile.phone_number = this.results.formattedNumber

                UsersService.update(this.$store.state.user.pk, this.currentUserProfile, auth)
                    .then(resp => {
                        if (this.currentUserProfile.user_type === 'developer') {

                            this.$router.push({
                                name: 'developer'
                            })

                        } else {
                            this.$router.push({
                                name: 'recruiter'
                            })

                        }
                        return resp


                    })
                    .catch(error => {
                        return error


                    });


            },
            handleClose(removedTag) {
                const tags = this.tags.filter(tag => tag !== removedTag)
                this.tags = tags
                let alltags = this.tags.join(", ")
                this.currentUserProfile.skills = alltags

            },

            showInput() {
                this.inputVisible = true
                this.$nextTick(function () {
                    this.$refs.input.focus()
                })
            },

            handleInputChange(e) {
                this.inputValue = e.target.value
            },

            handleInputConfirm() {
                const inputValue = this.inputValue
                let tags = this.tags
                if (inputValue && tags.indexOf(inputValue) === -1) {
                    tags = [...tags, inputValue]
                }

                let alltags = tags.join(", ")
                this.currentUserProfile.skills = alltags
                Object.assign(this, {
                    tags,
                    inputVisible: false,
                    inputValue: '',
                })
            },
            handleChange(tag, checked) {
                const {selectedTags} = this
                const nextSelectedTags = checked
                    ? [...selectedTags, tag]
                    : selectedTags.filter(t => t !== tag)

                this.selectedTags = nextSelectedTags
                let alltags = this.selectedTags.join(", ")
                this.currentUserProfile.skills = alltags
            },
        }
    }
</script>

<style scoped>

</style>
