<template>
    <div>

        <a-row style="margin-top: 4rem"
        >
            <a-col :xs="{span: 22, offset: 0 }" :sm="{span: 24, offset: 0 }" :md="{span: 18, offset: 3 }"
                   :lg="{span: 18, offset: 3 }" :xl="{span: 18, offset: 3 }"
                   :style="{boxShadow:'0 .125rem .25rem rgba(0,0,0,.075)!important'}">
                <div style="padding: 3%">
                    <a-steps :current="current">
                        <a-step v-for="item in steps" :key="item.title" :title="item.title"/>
                    </a-steps>

                    <div class="steps-content">
                        <div  v-if="current === 0">
                            <a-form :form="developerstep1">
                                <a-row :gutter="16">
                                    <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                                           :md="{span: 12, offset: 0 }"
                                           :lg="{span: 8, offset: 0 }" :xl="{span: 8, offset: 0 }">
                                        <a-form-item
                                                label="Github Url"
                                                :label-col="{ span: 24 }"
                                                :wrapper-col="{ span:  24}"
                                        >
                                            <a-input
                                                    type="url"
                                                    name="github"
                                                    v-model="currentUserProfile.github_repo"
                                                    pattern="https?://.+"

                                            />
                                            <div v-for="error in step1errors" v-bind:key="error">
                                                <div v-if="error === 'github'" style="color: red">
                                                    required
                                                </div>
                                                <div v-else-if="error === 'githubininvalid'" style="color: red">
                                                    input a valid url
                                                </div>
                                            </div>
                                        </a-form-item>


                                    </a-col>

                                    <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                                           :md="{span: 12, offset: 0 }"
                                           :lg="{span: 8, offset: 0 }" :xl="{span: 8, offset: 0 }">
                                        <a-form-item
                                                label="Linkedin Url"
                                                :label-col="{ span: 24 }"
                                                :wrapper-col="{ span:  24}"
                                        >
                                            <a-input
                                                    type="url"
                                                    name="linkedin"
                                                    v-model="currentUserProfile.linkedin_url"

                                            />
                                            <div v-for="error in step1errors" v-bind:key="error">
                                                <div v-if="error === 'linkedin'" style="color: red">
                                                    required
                                                </div>
                                                <div v-else-if="error === 'linkedininvalid'" style="color: red">
                                                    input a valid url
                                                </div>
                                            </div>
                                        </a-form-item>

                                    </a-col>

                                    <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                                           :md="{span: 12, offset: 0 }"
                                           :lg="{span: 8, offset: 0 }" :xl="{span: 8, offset: 0 }">
                                        <a-form-item
                                                label="Country"
                                                :label-col="{ span: 24 }"
                                                :wrapper-col="{ span:  24}"
                                        >
                                            <country-select
                                                    name="location"
                                                    v-model="currentUserProfile.country"
                                                    class="ant-input"

                                            />
                                            <div v-for="error in step1errors" v-bind:key="error">
                                                <div v-if="error === 'location'" style="color: red">
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
                                                label="Gender"
                                                :label-col="{ span: 24 }"
                                                :wrapper-col="{ span: 24 }"
                                        >
                                            <a-select
                                                    name="gender"

                                                    placeholder="Select a option and change input text above"
                                                    v-model="currentUserProfile.gender"
                                            >
                                                <a-select-option value="male">
                                                    male
                                                </a-select-option>
                                                <a-select-option value="female">
                                                    female
                                                </a-select-option>
                                            </a-select>
                                            <div v-for="error in step1errors" v-bind:key="error">
                                                <div v-if="error === 'gender'" style="color: red">
                                                    required
                                                </div>
                                            </div>
                                        </a-form-item>
                                    </a-col>

                                    <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                                           :md="{span: 12, offset: 0 }"
                                           :lg="{span: 8, offset: 0 }" :xl="{span: 8, offset: 0 }">
                                        <a-form-item
                                                label="Years of experience"
                                                :label-col="{ span: 24 }"
                                                :wrapper-col="{ span: 24 }"
                                        >
                                            <a-select
                                                    name="experience"

                                                    placeholder="Select a option and change input text above"
                                                    v-model="currentUserProfile.years"
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
                                            <div v-for="error in step1errors" v-bind:key="error">
                                                <div v-if="error === 'years'" style="color: red">
                                                    required
                                                </div>
                                            </div>
                                        </a-form-item>

                                    </a-col>

                                    <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                                           :md="{span: 12, offset: 0 }"
                                           :lg="{span: 8, offset: 0 }" :xl="{span: 8, offset: 0 }">
                                        <a-form-item
                                                label="Preffered work type"
                                                :label-col="{ span: 24 }"
                                                :wrapper-col="{ span: 24 }"
                                        >
                                            <a-select
                                                    mode="tags"
                                                    name="work_type"
                                                    @change="Availabiltytags"
                                                    placeholder="Select a option and change input text above"
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

                                            <div v-for="error in step1errors" v-bind:key="error">
                                                <div v-if="error === 'work_type'" style="color: red">
                                                    required
                                                </div>

                                            </div>
                                        </a-form-item>

                                    </a-col>
                                </a-row>


                            </a-form>
                        </div>

                        <div v-else-if="current === 1">
                            <a-row :gutter="16">
                                <a-col :span="24">

                                    <a-form-item

                                            label="What are your tech skills "
                                            :label-col="{ span: 24 }"
                                            :wrapper-col="{ span:  24}"
                                    >
                                        <template v-for="(tag, index) in tags">
                                            <a-tooltip v-if="tag.length > 20" :key="tag" :title="tag">
                                                <a-tag :key="tag"
                                                       :afterClose="() => handleClose(tag)" color="#2db7f5">
                                                    {{`${tag.slice(0, 20)}...`}}
                                                </a-tag>
                                            </a-tooltip>
                                            <a-tag v-else :key="tag" :closable="index >= 0"
                                                   :afterClose="() => handleClose(tag)" color="#2db7f5">
                                                {{tag}}
                                            </a-tag>
                                        </template>
                                        <a-input
                                                v-if="inputVisible"
                                                ref="input"
                                                type="text"
                                                size="small"
                                                :style="{ width: '78px' }"
                                                :value="inputValue"
                                                @change="handleInputChange"
                                                @blur="handleInputConfirm"
                                                @keyup.enter="handleInputConfirm"
                                        />
                                        <a-tag v-else @click="showInput"
                                               style="background: #fff; borderStyle: dashed;">
                                            <a-icon type="plus"/>
                                            New skill
                                        </a-tag>
                                    </a-form-item>


                                </a-col>

                                <a-col :span="24">
                                    <a-form-item
                                            label="Bio (300 characters max)"
                                            :label-col="{ span: 24 }"
                                            :wrapper-col="{ span:  24}"
                                    >
                                        <span style="font-size: small">Please do not fill any personal details in your bio e.g
                                            Your name, email, phone number, github, linkedin or profile link</span>

                                        <a-textarea name="bio"
                                                    maxlength="300"
                                                    v-model="currentUserProfile.about"
                                                    placeholder="Tell us something about yourself"
                                                    :rows="4"/>

                                        <div v-for="error in errorlist" v-bind:key="error">
                                            <div v-if="error === 'about'" style="color: red">
                                                write something about yourself
                                            </div>

                                        </div>
                                    </a-form-item>

                                </a-col>
                                <a-col :span="24" style="margin-bottom: 1rem">
                                            <span>
                                                Monthly Salary expectations
                                            </span>
                                    <a-input-number
                                            :defaultValue="1000"
                                            :formatter="value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
                                            :parser="value => value.replace(/\$\s?|(,*)/g, '')"
                                            v-model="currentUserProfile.salary"
                                    />
                                    <div v-for="error in errorlist" v-bind:key="error">
                                        <div v-if="error === 'salary'" style="color: red">
                                            Your salary value required
                                        </div>

                                    </div>

                                </a-col>
                                <a-col :span="24" style="margin-bottom: 1rem">
                                    <a-checkbox v-model="currentUserProfile.csa">Are you part of the CodeLn
                                        Student
                                        Ambassador Program?
                                    </a-checkbox>

                                </a-col>
                                <a-col :span="24">
                                    <div v-if="cv">
                                        <a :href="cv" target="_blank">cv link</a>
                                    </div>

                                    <div v-else>
                                        <div v-if="uploading">
                                            <span>Uploading file <a-spin/></span>

                                        </div>
                                        <div v-else>
                                            Upload cv
                                            <input style="margin-top: 1rem" accept="application/pdf" type="file"
                                                   @change="handleUpload">
                                        </div>
                                        <div v-for="error in errorlist" v-bind:key="error">
                                            <div v-if="error === 'cv'" style="color: red">
                                                please upload cv
                                            </div>

                                        </div>


                                    </div>
                                </a-col>
                            </a-row>
                        </div>

                        <div v-else-if="current === 2">
                            <portfolio/>


                        </div>

                        <div  v-else-if="current === 3">
                            <experience/>
                        </div>

                    </div>
                    <div class="steps-action">


                                    <span>
                                        <span v-if="loading">
                                            <a-spin/>
                                        </span>
                                        <span v-else>
                                            <a-button
                                                    v-if="current < steps.length - 1"
                                                    type="primary" @click="next(current)"
                                            >
                                    Next
                                </a-button>
                                        </span>
                                    </span>

                        <span>
                                    <div v-if="doneloading" style="text-align: center;">
                                <a-spin/>
                            </div>
                                    <span v-else>
                                         <a-button
                                                 v-if="current == steps.length - 1"
                                                 type="primary"
                                                 @click="onComplete"
                                         >
                                    Done
                                </a-button>
                                    </span>

                                </span>

                        <a-button
                                v-if="current>0"
                                style="margin-left: 8px"
                                @click="prev"
                        >
                            Previous
                        </a-button>
                    </div>
                </div>

            </a-col>
        </a-row>



    </div>
</template>

<script>


    import UsersService from '@/services/UsersService'


    import axios from 'axios'
    import Experience from "./experience";
    import Portfolio from "./portfolio";


    export default {
        name: "Candidatesteps",
        components: {Portfolio, Experience},
        data() {
            return {
                loading: false,
                currentUserProfile: {},
                tags: [],
                inputVisible: false,
                inputValue: '',
                selectedTags: [],
                current: 0,
                steps: [{
                    title: 'Personal Details',

                }, {
                    title: 'Skills and bio',

                }, {
                    title: 'Work experience',

                },
                    {
                        title: 'Past projects',

                    }],
                experienceslist: [],
                experiences: [],
                portoliolist: [],
                portfolio: [],
                takenquizzes: [],
                codelnprojects: [],
                createproject: false,
                editproject: false,
                createexperience: false,
                editexperience: false,
                currentproject: {},
                currentexperience: {},
                projecttags: [],
                experiencetags: [],
                inputVisible2: false,
                inputValue2: '',
                portfoliotags: [],
                inputVisible1: false,
                inputValue1: '',
                projecttitle: '',
                projectdemo: '',
                projectrepo: '',
                projectdescription: '',
                projecttech: '',
                experiencetitle: '',
                experiencecompany: '',
                experienceduration: '',
                experiencelocation: '',
                experiencetech: '',
                experiencedescription: '',
                errorlist: [],
                step1errors: [],
                cv: null,
                uploading: false,
                experienceform: this.$form.createForm(this),
                projectform: this.$form.createForm(this),
                developerstep1: this.$form.createForm(this),
                doneloading: false,
                availabiltytags:[]
            }
        },
        async mounted() {
            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}

            }

            if (this.$store.state.user) {
                let Profile = (await UsersService.currentuser(this.$store.state.user.pk, auth)).data
                if (Profile.gender === null) {
                    this.currentUserProfile = {}

                } else {
                    this.currentUserProfile = Profile
                    this.cv = this.currentUserProfile.file
                    if (this.currentUserProfile.skills) {

                        let temptaglist = this.currentUserProfile.skills;

                        let array = temptaglist.replace(/'/g, '').replace(/ /g, '').split(',');

                        this.tags = array
                    }
                    this.availabiltytags = this.currentUserProfile.availabilty.replace(/'/g, '').replace(/ /g, '').split(',');

                }
            }


        },
        methods: {


            stepsaves() {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                this.loading = true

                this.currentUserProfile.user = this.$store.state.user.pk
                this.currentUserProfile.user_type = this.$store.state.usertype
                this.profile = {
                    gender: this.currentUserProfile.gender,
                    linkedin_url: this.currentUserProfile.linkedin_url,
                    github_repo: this.currentUserProfile.github_repo,
                    years: this.currentUserProfile.years,
                    availabilty: this.currentUserProfile.availabilty,
                    country: this.currentUserProfile.country

                }


                UsersService.updatepatch(this.$store.state.user.pk, this.currentUserProfile, auth)
                    .then(resp => {
                        this.current++
                        this.loading = false


                    })
                    .catch(error => {
                        console.log(error)
                        this.loading = false


                    });


            },
            onComplete() {


                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                this.doneloading = true
                this.currentUserProfile.stage = 'complete'
                this.currentUserProfile.user_type = 'developer'
                UsersService.update(this.$store.state.user.pk, this.currentUserProfile, auth)
                    .then(resp => {
                        if (this.currentUserProfile.user_type === 'developer') {


                            this.$router.push({
                                name: 'developer'
                            })
                            this.doneloading = false

                        } else {
                            this.$router.push({
                                name: 'recruiter'
                            })
                            this.doneloading = false

                        }


                    })
                    .catch(error => {
                        this.doneloading = false
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
            next(current) {
                let self = this

                if (current === 0) {
                    this.step1errors = []
                    if (this.currentUserProfile.github_repo === null || this.currentUserProfile.github_repo === '') {
                        this.step1errors.push('github')

                    }
                    if (this.currentUserProfile.linkedin_url === null || this.currentUserProfile.linkedin_url === '') {
                        this.step1errors.push('linkedin')

                    }
                    if (this.currentUserProfile.country === null || this.currentUserProfile.country === '') {
                        this.step1errors.push('location')

                    }
                    if (this.currentUserProfile.gender === null || this.currentUserProfile.gender === '') {
                        this.step1errors.push('gender')

                    }
                    if (this.currentUserProfile.years === null || this.currentUserProfile.years === '') {
                        this.step1errors.push('years')

                    }
                    if (this.currentUserProfile.availabilty === null || this.currentUserProfile.availabilty === '') {
                        this.step1errors.push('work_type')

                    }

                    if (this.step1errors.length === 0) {
                        self.stepsaves()

                    }


                } else if (current === 1) {
                    if (this.currentUserProfile.user_type === 'developer') {
                        this.errorlist = []
                        if (this.currentUserProfile.about === null || this.currentUserProfile.about === '') {
                            this.errorlist.push('about')

                        }
                        if (this.cv === null || this.cv === '') {
                            this.errorlist.push('cv')

                        }
                        if (this.currentUserProfile.salary === null || this.currentUserProfile.salary === '') {
                            this.errorlist.push('salary')

                        }


                        if (this.errorlist.length === 0) {
                            self.stepsaves()

                        }
                    } else {
                        self.stepsaves()

                    }


                } else if (current === 2) {
                    this.current++
                }


            },
            prev() {
                this.current--
            },


            async handleUpload(e) {
                this.uploading = true
                const cloudName = 'dwtvwjhn3';
                const unsignedUploadPreset = 'ml_default';

                // console.log(e);
                const file = e.target.files[0];
                const formData = new FormData();
                formData.append('file', file);
                formData.append('upload_preset', unsignedUploadPreset);
                let CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/${cloudName}/raw/upload`

                // Send to cloudianry
                const res = await axios.post(
                    CLOUDINARY_URL,
                    formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        },

                    }
                );

                this.cv = res.data.secure_url
                this.currentUserProfile.file = this.cv.slice(48)


            },
            Availabiltytags(value) {
                console.log(`selected ${value}`);
                this.currentUserProfile.availabilty = this.availabiltytags.join(", ")
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
