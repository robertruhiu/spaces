<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh;">
        <CandidateSider/>
        <a-layout>

            <a-layout-content style="background-color: white">
                <DevHeader/>
                <div :style="{ padding: '6px 20px', background: '#fff', minHeight: '75vh',maxWidth:'72rem',marginTop:'1rem',
                marginLeft: '1%',marginRight:'1%' }">
                    <a-form :form="form">
                        <a-row :gutter="16">
                            <a-col :xs="{span: 24, offset: 0  }" :sm="{span: 24, offset: 0 }"
                                   :md="{span: 12, offset: 0 }"
                                   :lg="{span: 12, offset: 0 }" :xl="{span: 12,offset: 0 }">

                                <a-row :gutter="16">
                                    <a-col :span="24">
                                        <a-form-item
                                                label="Github profile"
                                                :label-col="{ span: 24 }"
                                                :wrapper-col="{ span:  24}"
                                        >

                                            <a-input name="github"
                                                     v-model="github"

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

                                    <a-col :span="24">
                                        <a-form-item
                                                label="Linkedin profile"
                                                :label-col="{ span: 24 }"
                                                :wrapper-col="{ span:  24}"
                                        >
                                            <a-input
                                                    v-model="linkedin" name="linkedin"

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

                                    <a-col :span="24">
                                        <a-form-item

                                                :label-col="{ span: 24 }"
                                                :wrapper-col="{ span:  24}"
                                        >
                                            <span slot="label">Country : {{currentUserProfile.country}}</span>
                                            <country-select v-model="currentUserProfile.country"
                                                            class="ant-input" name="location"
                                            />
                                            <div v-for="error in step1errors" v-bind:key="error">
                                                <div v-if="error === 'location'" style="color: red">
                                                    required
                                                </div>
                                            </div>
                                        </a-form-item>

                                    </a-col>

                                    <a-col :span="24">
                                        <a-form-item
                                                label="Availability"
                                                :label-col="{ span: 24 }"
                                                :wrapper-col="{ span:  24}"
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
                                        </a-form-item>
                                        <div v-for="error in step1errors" v-bind:key="error">
                                            <div v-if="error === 'work_type'" style="color: red">
                                                required
                                            </div>

                                        </div>

                                    </a-col>

                                    <a-col :span="24" style="margin-bottom: 1rem">

                                        <VuePhoneNumberInput name="number" v-model="phone"
                                                             default-country-code="GH"
                                                             @update="onUpdate"/>
                                        <div v-for="error in step1errors" v-bind:key="error">
                                            <div v-if="error === 'number'" style="color: red">
                                                * phone number required
                                            </div>
                                        </div>


                                    </a-col>
                                    <a-col :span="24" style="margin-bottom: 1rem">
                                        <a-checkbox v-model="currentUserProfile.csa">Are you part of the CodeLn
                                            Student
                                            Ambassador Program?
                                        </a-checkbox>

                                    </a-col>
                                    <a-col :span="24" style="margin-bottom: 1rem">
                                        <a-checkbox v-model="currentUserProfile.student">Are you currently a
                                            Student?(enables us to easily notify you of internship opportunities)
                                        </a-checkbox>

                                    </a-col>
                                    <a-col :span="24" style="margin-bottom: 1rem">
                                        <a-checkbox v-model="currentUserProfile.notifications">Unsubscribe/Opt out from
                                            future Codeln email notifications
                                        </a-checkbox>

                                    </a-col>


                                </a-row>


                            </a-col>


                            <a-col :xs="{span: 24, offset: 0  }" :sm="{span: 24, offset: 0 }"
                                   :md="{span: 12, offset: 0 }"
                                   :lg="{span: 12, offset: 0 }" :xl="{span: 12,offset: 0 }" style="padding: 2% 4%">
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
                                            New Tag
                                        </a-tag>
                                    </a-form-item>
                                </a-col>
                                <a-col :span="24">
                                    <a-form-item
                                            label="(300 characters max)"
                                            :label-col="{ span: 24 }"
                                            :wrapper-col="{ span:  24}"
                                    >
                                        <span style="font-size: small">Please do not fill any personal details in your bio e.g
                                            Your
                                            <span v-if="flags[0] === false && flags[1]=== false">name</span><span v-else
                                                                                                                  style="color: red">name</span> ,
                                             <span v-if="flags[2] === false">email</span><span v-else
                                                                                               style="color: red">email</span>,
                                            <span v-if="flags[3] === false">github</span><span v-else
                                                                                               style="color: red">github</span>,
                                            <span v-if="flags[4] === false">linkedin</span><span v-else
                                                                                                 style="color: red">linkedin</span>
                                            (Write an expressive statement about yourself eg hobbies etc)

                                        </span>
                                        <a-textarea name="bio"
                                                    maxlength="300"
                                                    v-model="currentUserProfile.about"
                                                    placeholder="Tell us something about yourself"
                                                    :rows="6"/>

                                        <div v-for="error in error_watcher" v-bind:key="error">

                                            <div v-if="error === 'about'" style="color: red">
                                                write something about yourself
                                            </div>


                                        </div>


                                        <div v-for="error in error_watcher" v-bind:key="error">

                                            <div v-if="error === 'flags'" style="color: red">
                                                you have included personal info please remove where necessary
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


                                </a-col>


                            </a-col>
                        </a-row>
                        <div v-if="cv">
                            <p v-if="alert" style="color: blue">Upload successful /cv changed</p>
                            <p>Current cv :<a :href="cv" target="_blank">cv link</a>
                            </p>


                            <div v-if="uploading">

                                <span>Uploading file <a-spin/></span>

                            </div>
                            <div v-else>
                                Change/update CV
                                <input type="file" @change="ChangehandleUpload" accept="application/pdf">
                            </div>


                        </div>

                        <div v-else>

                            <div v-if="uploading">
                                <span>Uploading file <a-spin/></span>

                            </div>
                            <div v-else>
                                <input type="file" @change="handleUpload" accept="application/pdf">
                            </div>


                        </div>


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


    import CandidateSider from "../../layout/CandidateSider";
    import UsersService from '@/services/UsersService'
    import DevHeader from "../../layout/DevHeader";
    import axios from 'axios'
    import cloudinary from 'cloudinary-core'
    import VuePhoneNumberInput from 'vue-phone-number-input';
    import 'vue-phone-number-input/dist/vue-phone-number-input.css';
    import Vue from 'vue'


    Vue.use(cloudinary)


    export default {
        name: "Myprofile",
        components: {
            DevHeader,
            CandidateSider,
            VuePhoneNumberInput
        },
        data() {

            return {
                loading: false,
                currentUserProfile: null,
                tags: [],
                inputVisible: false,
                inputValue: '',
                fileList: [],
                uploading: false,
                cv: '',
                alert: false,
                availabiltytags: [],
                github: '',
                linkedin: '',
                errorlist: [],
                formattednumber: null,
                number: 'null',
                step1errors: [],
                phone: '',


            }
        },


        async mounted() {


            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}

            }
            if (this.$store.state.user.pk) {
                this.currentUserProfile = (await UsersService.currentuser(this.$store.state.user.pk, auth)).data
                this.github = this.currentUserProfile.github_repo
                this.linkedin = this.currentUserProfile.linkedin_url

                if (this.currentUserProfile.phone_number) {
                    this.phone = this.currentUserProfile.phone_number
                }


                if (this.currentUserProfile.skills) {
                    if (this.currentUserProfile.skills.length >= 0) {
                        let tags = this.currentUserProfile.skills.replace(/'/g, '').replace(/ /g, '').split(',');
                        for (let i = 0; i < tags.length; i++) {
                            this.tags.push(tags[i])
                        }

                    }
                }
                this.availabiltytags = this.currentUserProfile.availabilty.replace(/'/g, '').replace(/ /g, '').split(',');


            }
            if (this.currentUserProfile.file) {
                if (this.currentUserProfile.file.includes("http")) {
                    this.cv = this.currentUserProfile.file
                } else {
                    this.cv = `https://res.cloudinary.com/dwtvwjhn3/${this.currentUserProfile.file} `


                }

            }


        },
        computed: {
            cleanbio() {
                let bio = this.currentUserProfile.about

                return bio
            },
            flags() {
              let blacklist = []
              blacklist[0] = this.$store.state.user.first_name
              blacklist[1] = this.$store.state.user.last_name
              blacklist[2] = this.$store.state.user.email

              if (this.github) {
                if (this.github.length > 0) {
                  blacklist[3] = this.github
                }

              }
              if (this.linkedin) {
                if (this.linkedin.length > 0) {
                  blacklist[4] = this.linkedin

                }
              }


              let first = false
              let last = false
              let email = false
              let github = false
              let linkedin = false
              if (this.currentUserProfile.about) {
                if (this.currentUserProfile.about.includes(blacklist[0])) {
                        first = true
                    }
                    if (this.currentUserProfile.about.includes(blacklist[1])) {
                        last = true
                    }
                    if (this.currentUserProfile.about.includes(blacklist[2])) {
                        email = true
                    }
                    if (this.currentUserProfile.about.includes(blacklist[3])) {
                        github = true
                    }
                    if (this.currentUserProfile.about.includes(blacklist[4])) {
                        linkedin = true
                    }
                }

                let flag = []
                flag[0] = first
                flag[1] = last
                flag[2] = email
                flag[3] = github
                flag[4] = linkedin


                return flag
            },
            error_watcher() {
                let errors = []
                if (this.flags.includes(true)) {
                    errors.push('flags')
                }
                if (this.currentUserProfile.about === null || this.currentUserProfile.about === '') {
                    errors.push('about')

                }
                return errors
            },


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
                if (this.tags) {
                    for (let i = 0; i < this.tags.length; i++) {
                        if (this.tags[i] === '') {
                            let index = this.tags.indexOf(this.tags[i]);
                            this.tags.splice(index, 1);

                        }
                    }
                    this.currentUserProfile.skills = this.tags.join(',')
                }


                this.currentUserProfile.file = this.cv.slice(48)

                this.currentUserProfile.user = this.$store.state.user.pk
                if (this.error_watcher.length === 0) {
                    this.step1errors = []
                    if (this.github === null || this.github === '') {
                        this.step1errors.push('github')

                    }
                    if (this.linkedin === null || this.linkedin === '') {
                        this.step1errors.push('linkedin')

                    }
                    if (this.currentUserProfile.country === null || this.currentUserProfile.country === '') {
                        this.step1errors.push('location')

                    }
                    if (this.currentUserProfile.availabilty === null || this.currentUserProfile.availabilty === '') {
                        this.step1errors.push('work_type')

                    }
                    if (this.currentUserProfile.phone_number === null || this.currentUserProfile.phone_number === '') {
                        this.step1errors.push('number')

                    }

                    if (this.step1errors.length === 0) {
                        this.loading = true
                        this.currentUserProfile.phone_number = this.results.formattedNumber
                        this.currentUserProfile.linkedin_url = this.linkedin
                        this.currentUserProfile.github_repo = this.github

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
                                this.loading = false
                                return error


                            });


                    }

                }


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

            handleChange(info) {
                let self = this;
                self.uploadFile(info.file)


            },
            beforeUpload(file) {
                this.fileList = [...this.fileList, file]
                return false;
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


            },
            async ChangehandleUpload(e) {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
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
                UsersService.updatepatch(this.$store.state.user.pk, {file: this.cv.slice(48)}, auth)
                    .then(resp => {
                        this.currentUserProfile.file = this.cv
                        this.uploading = false
                        this.alert = true

                        return resp


                    })
                    .catch(error => {

                        return error


                    });


            },
            Availabiltytags(value) {
                console.log(`selected ${value}`);
                this.currentUserProfile.availabilty = this.availabiltytags.join(", ")
            },
        }
    }


</script>

<style scoped>
    #dropbox {
        border: 4px dashed #ccc;
        padding-left: 8px;
    }

    .my-form {
        margin-top: 10px;
    }

    .gallery {
        margin: 10px;
    }

    .gallery img {
        margin-left: 16px;
    }

    .progress-bar {
        width: 200px;
        position: relative;
        height: 8px;
        margin-top: 4px;
    }

    .progress-bar .progress {
        height: 8px;
        background-color: #ff0000;
        width: 0;
    }
</style>
