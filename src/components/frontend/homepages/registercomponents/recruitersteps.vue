<template>
    <div>
        <a-row style="margin-top: 4rem">
            <a-col :xs="{span: 22, offset: 0 }" :sm="{span: 24, offset: 0 }" :md="{span: 18, offset: 3 }"
                   :lg="{span: 18, offset: 3 }" :xl="{span: 18, offset: 3 }"
                   :style="{boxShadow:'0 .125rem .25rem rgba(0,0,0,.075)!important'}">
                <div style="padding: 3%">
                    <a-steps :current="current1">
                        <a-step v-for="item in steps1" :key="item.title" :title="item.title"/>
                    </a-steps>
                    <div class="steps-content">
                        <div if v-if="current1 === 0">
                            <a-form :form="recruiterstep1">
                                <a-row :gutter="16">
                                    <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                                           :md="{span: 12, offset: 0 }"
                                           :lg="{span: 8, offset: 0 }" :xl="{span: 8, offset: 0 }">
                                        <a-form-item
                                                label="Company name"
                                                :label-col="{ span: 24 }"
                                                :wrapper-col="{ span:  24}"
                                        >
                                            <a-input

                                                    name="company"
                                                    v-model="currentUserProfile.company"

                                            />
                                            <div v-for="error in errorlist" v-bind:key="error">
                                                <div v-if="error === 'company'" style="color: red">
                                                    required
                                                </div>

                                            </div>

                                        </a-form-item>


                                    </a-col>

                                    <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                                           :md="{span: 12, offset: 0 }"
                                           :lg="{span: 8, offset: 0 }" :xl="{span: 8, offset: 0 }">
                                        <a-form-item
                                                label="Company website link"
                                                :label-col="{ span: 24 }"
                                                :wrapper-col="{ span:  24}"
                                        >
                                            <a-input

                                                    name="website"
                                                    v-model="currentUserProfile.company_url"

                                            />
                                            <div v-for="error in errorlist" v-bind:key="error">
                                                <div v-if="error === 'company_url'" style="color: red">
                                                    required
                                                </div>

                                            </div>
                                        </a-form-item>

                                    </a-col>

                                    <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                                           :md="{span: 12, offset: 0 }"
                                           :lg="{span: 8, offset: 0 }" :xl="{span: 8, offset: 0 }">
                                        <a-form-item
                                                label="Company location"
                                                :label-col="{ span: 24 }"
                                                :wrapper-col="{ span:  24}"
                                        >
                                            <country-select
                                                    name="location"
                                                    v-model="currentUserProfile.country"
                                                    class="ant-input"
                                            />
                                            <div v-for="error in errorlist" v-bind:key="error">
                                                <div v-if="error === 'country'" style="color: red">
                                                    required
                                                </div>

                                            </div>
                                        </a-form-item>

                                    </a-col>


                                </a-row>
                                <a-row :gutter="16">
                                    <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                                           :md="{span: 12, offset: 0 }"
                                           :lg="{span: 8, offset: 0 }" :xl="{span: 8, offset: 0 }"


                                    >
                                        <a-form-item
                                                label="Job role"
                                                :label-col="{ span: 24 }"
                                                :wrapper-col="{ span:  24}"
                                        >
                                            <a-input


                                                    v-model="currentUserProfile.job_role"
                                                    placeholder="Recruiter,CTO,HR,CEO etc"

                                            />
                                        </a-form-item>

                                    </a-col>
                                    <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                                           :md="{span: 12, offset: 0 }"
                                           :lg="{span: 8, offset: 0 }" :xl="{span: 8, offset: 0 }"


                                    >
                                        <a-form-item
                                                label="Industry"
                                                :label-col="{ span: 24 }"
                                                :wrapper-col="{ span:  24}"
                                        >
                                            <a-input
                                                    v-model="currentUserProfile.industry"

                                            />
                                        </a-form-item>

                                    </a-col>


                                </a-row>
                                <a-row>

                                    <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                                           :md="{span: 12, offset: 0 }"
                                           :lg="{span: 8, offset: 0 }" :xl="{span: 8, offset: 0 }">
                                        <VuePhoneNumberInput name="number" v-model="currentUserProfile.phone_number"
                                                             default-country-code="GH"
                                                             @update="onUpdate"/>
                                        <div v-for="error in errorlist" v-bind:key="error">
                                            <div v-if="error === 'number'" style="color: red">
                                                * phone number required
                                            </div>
                                        </div>

                                    </a-col>


                                </a-row>


                            </a-form>
                        </div>
                        <div v-if="current1 === 1">
                            <a-row :gutter="16">
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
                            </a-row>
                        </div>
                    </div>
                    <div class="steps-action">
                        <span>
                            <span v-if="loading">
                                            <a-spin/>
                                        </span>
                            <span v-else>
                                <span style="margin-right: 1%">
                            <a-button
                                    v-if="current1>0"
                                    style="margin-left: 8px"
                                    @click="prev1"
                            >
                            Previous
                        </a-button>
                                    </span>

                                <span>
                                    <a-button
                                            v-if="current1 < steps1.length - 1"
                                            type="primary" @click="next1(current1)">
                                    Next
                                </a-button>
                                </span>
                                    <span>
                                        <a-button
                                                v-if="current1 == steps1.length - 1"
                                                type="primary"
                                                @click="onCompleteRecruiter">
                                    Done
                                </a-button>
                                    </span>



                            </span>
                        </span>


                    </div>
                </div>
            </a-col>


        </a-row>

    </div>
</template>

<script>


    import UsersService from '@/services/UsersService'
    import VuePhoneNumberInput from 'vue-phone-number-input';
    import 'vue-phone-number-input/dist/vue-phone-number-input.css';


    export default {
        name: "recruitersteps",
        components: {VuePhoneNumberInput},
        data() {
            return {
                loading: false,

                error: null,
                currentUserProfile: {},
                tags: [],
                inputVisible: false,
                inputValue: '',
                recommendationtags: ['Django', 'Javascript', 'Python', 'Php', 'Postgres', 'Sql',
                    'Html', 'Css', 'bootstrap', 'React', 'Java',
                    'React Native', 'Redux', 'Flask ', 'Go', 'Expressjs', 'Vuejs',
                    'Angular', 'Ios', 'flutter', 'Ionic', 'C#', 'C', 'Swift', 'Nodejs',
                    'Typescript', 'Firebase', 'Xamarin', 'Spark', '.Net', 'Redis', 'Sqlite', 'Rails', 'Meteor', 'AI', 'Cybersecurity',
                    'Blockchain', 'Arduino', 'Spring', 'Bitcoin', 'Kotlin', 'Scala',
                    'Nativescript ',
                    'Android', 'Website', 'Mobile', 'DevOps', 'MongoDb'],
                selectedTags: [],

                current1: 0,
                steps1: [{
                    title: 'Company details',

                }, {
                    title: 'Skills of interest',

                }],

                recruiterstep1: this.$form.createForm(this),
                doneloading: false,
                errorlist: [],
                formattednumber: null,
                number: 'null'


            }
        },

        async mounted() {
            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}

            }

            if (this.$store.state.user) {
                this.currentUserProfile = (await UsersService.currentuser(this.$store.state.user.pk, auth)).data



            }


        },

        methods: {
            onUpdate(payload) {
                this.results = payload
                this.currentUserProfile.phone_number = this.results.formattedNumber

            },

            stepsaves1() {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                this.loading = true

                this.currentUserProfile.user = this.$store.state.user.pk
                this.currentUserProfile.phone_number = this.results.formattedNumber


                UsersService.update(this.$store.state.user.pk, this.currentUserProfile, auth)
                    .then(resp => {
                        this.current1++
                        this.loading = false


                    })
                    .catch(error => {
                        console.log(error)
                        this.loading = false


                    });


            },


            onCompleteRecruiter() {

                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                this.loading = true
                this.currentUserProfile.stage = 'complete'
                this.currentUserProfile.user_type = 'recruiter'
                UsersService.update(this.$store.state.user.pk, this.currentUserProfile, auth)
                    .then(resp => {
                        if (this.currentUserProfile.user_type === 'developer') {

                            this.$router.push({
                                name: 'developer'
                            })

                        } else {
                            UsersService.newuser(this.$store.state.user.pk, auth)
                                .then()
                                .catch()
                            this.$router.push({
                                name: 'recruiter'
                            })
                            this.loading = false

                        }


                    })
                    .catch(error => {
                        console.log(error)


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
                const inputValue = this.inputValue.toLowerCase()
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

            next1(current) {
                let self = this

                if (current === 0) {
                    this.errorlist = []
                    if (this.currentUserProfile.company === null || this.currentUserProfile.company === '') {
                        this.errorlist.push('company')

                    }
                    if (this.currentUserProfile.company_url === null || this.currentUserProfile.company_url === '') {
                        this.errorlist.push('company_url')

                    }
                    if (this.currentUserProfile.country === null || this.currentUserProfile.country === '') {
                        this.errorlist.push('country')

                    }
                    if (this.currentUserProfile.phone_number === null || this.currentUserProfile.phone_number === '') {
                        this.errorlist.push('number')

                    }
                    if (this.errorlist.length === 0) {
                        self.stepsaves1()
                    }


                } else if (current === 1) {
                    self.onCompleteRecruiter()


                }


            },
            prev1() {
                this.current1--
            },


        }
    }
</script>

<style scoped>
    .steps-content {
        margin-top: 1rem;


        min-height: 200px;

        padding: 2%;
    }

    .steps-action {
        margin-top: 24px;
    }

</style>
