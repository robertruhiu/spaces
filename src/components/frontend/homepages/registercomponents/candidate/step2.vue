<template>
  <div>

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
                {{ `${tag.slice(0, 20)}...` }}
              </a-tag>
            </a-tooltip>
            <a-tag v-else :key="tag" :closable="index >= 0"
                   :afterClose="() => handleClose(tag)" color="#2db7f5">
              {{ tag }}
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
                      :maxLength=maxabout
                      v-model="$store.state.user_object.about"
                      placeholder="Tell us something about yourself"
                      :rows="4"/>
          <div v-for="error in error_watcher" v-bind:key="error">
            <div v-for="errorl in errorlist" v-bind:key="errorl">
              <div v-if="error === errorl">
                <div v-if="error === 'about'" style="color: red">
                  write something about yourself
                </div>
              </div>
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
            v-model="$store.state.user_object.salary"
        />


        <div v-for="error in error_watcher" v-bind:key="error">
          <div v-for="errorl in errorlist" v-bind:key="errorl">
            <div v-if="error === errorl">
              <div v-if="error === 'salary'" style="color: red">
                Your salary value required
              </div>
            </div>
          </div>
        </div>

      </a-col>
      <a-col :span="24" style="margin-bottom: 1rem">
        <a-checkbox v-model="$store.state.user_object.csa">Are you part of the CodeLn
          Student
          Ambassador Program?
        </a-checkbox>

      </a-col>
      <a-col :span="24" style="margin-bottom: 1rem">
        <a-checkbox v-model="$store.state.user_object.student">Are you currently a
          Student?(enables us to easily notify you of internship opportunities)
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
            Upload cv <span style="color: red">*</span>
            <input style="margin-top: 1rem" accept="application/pdf" type="file"
                   @change="handleUpload">
          </div>
          <div v-for="error in error_watcher" v-bind:key="error">
            <div v-for="errorl in errorlist" v-bind:key="errorl">
              <div v-if="error === errorl">
                <div v-if="error === 'cv'" style="color: red">
                  please upload cv
                </div>
              </div>
            </div>
          </div>


        </div>


      </a-col>

    </a-row>

    <div class="steps-action">
      <span v-if="loading">
        <a-spin/>
      </span>
      <span v-else>
          <a-space>
    <a-button

        style="margin-left: 8px"
        @click="prev"
        icon="left"
    >

          Previous
        </a-button>

        <a-button type="primary" @click="next">
          Next
          <a-icon type="right"/>
        </a-button>
  </a-space>

        </span>


    </div>


  </div>
</template>

<script>
import UsersService from "@/services/UsersService";
import axios from "axios";
import User from "@/services/UsersService";

export default {
  name: "step2",
  data() {
    return {
      loading: false,
      currentUserProfile: {},
      tags: [],
      inputVisible: false,
      inputValue: '',
      selectedTags: [],
      inputVisible2: false,
      inputValue2: '',
      portfoliotags: [],
      inputVisible1: false,
      inputValue1: '',

      errorlist: [],
      cv: null,
      uploading: false,
      availabiltytags: [],
      github: '',
      linkedin: '',
      maxabout: 300


    }
  },
  computed: {
    cleanbio() {
      return this.currentUserProfile.about
    },
    flags() {
      let blacklist = []
      blacklist[0] = this.$store.state.user.first_name.toLowerCase()
      blacklist[1] = this.$store.state.user.last_name.toLowerCase()
      blacklist[2] = this.$store.state.user.email.toLowerCase()
      if(this.$store.state.user_object.github_repo){
        blacklist[3] = this.$store.state.user_object.github_repo.toLowerCase()
      }

      blacklist[4] = this.$store.state.user_object.linkedin_url.toLowerCase()


      let first = false
      let last = false
      let email = false
      let github = false
      let linkedin = false
      if(this.$store.state.user_object.about){
        let aboutdetails = this.$store.state.user_object.about.toLowerCase()
        if (this.$store.state.user_object.about) {
          if (aboutdetails.includes(blacklist[0])) {
            first = true
          }
          if (aboutdetails.includes(blacklist[1])) {
            last = true
          }
          if (aboutdetails.includes(blacklist[2])) {
            email = true
          }
          if(blacklist[3]){
            if (aboutdetails.includes(blacklist[3])) {
              github = true
            }
          }

          if (aboutdetails.includes(blacklist[4])) {
            linkedin = true
          }
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
      if (this.$store.state.user_object.about === null || this.$store.state.user_object.about === '') {
        errors.push('about')

      }
      if (this.cv === null || this.cv === '') {
        errors.push('cv')

      }
      if (this.$store.state.user_object.salary === null || this.$store.state.user_object.salary === '') {
        errors.push('salary')

      }


      return errors
    },
    current() {

      return this.$store.state.registrationstep
    }


  },

  async mounted() {

    if (this.$store.state.user_object) {

      this.currentUserProfile = this.$store.state.user_object
      this.cv = this.currentUserProfile.file

      if (this.currentUserProfile.skills) {

        let temptaglist = this.currentUserProfile.skills;

        let array = temptaglist.replace(/'/g, '').replace(/ /g, '').split(',');

        this.tags = array


      }



    }


  },

  methods: {
    next() {
      if (this.$store.state.user_object.user_type === 'developer') {
        this.errorlist = []
        if (this.$store.state.user_object.about === null || this.$store.state.user_object.about === '') {
          this.errorlist.push('about')

        }
        if (this.flags.includes(true)) {
          this.errorlist.push('flags')
        }
        if (this.cv === null || this.cv === '') {
          this.errorlist.push('cv')

        }
        if (this.$store.state.user_object.salary === null || this.$store.state.user_object.salary === '') {
          this.errorlist.push('salary')

        }


        if (this.errorlist.length === 0) {
          this.stepsaves()

        }
      }

    },
    stepsaves() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      this.loading = true
      let patchdata = {
        skills: this.$store.state.user_object.skills,
        salary: this.$store.state.user_object.salary,
        csa: this.$store.state.user_object.csa,
        file: this.$store.state.user_object.file,
        about:this.$store.state.user_object.about,
        student:this.$store.state.user_object.student,
        stage:'complete'

      }
      this.$store.state.user_object.stage = 'complete'
      this.$store.state.user_object.user_type = 'developer'

      UsersService.updatepatch(this.$store.state.user.pk, patchdata, auth)
          .then(() => {
            User.currentuser(this.$store.state.user.pk, auth)

                .then(response => {
                  this.$store.dispatch('setuser_object', response.data)
                  this.$store.dispatch('setRegistrationStep', 2)
                  this.loading = false


                })



          })
          .catch((err) => {

            this.loading = false
            let error = ''
            let message = ''
            if (err.response) {
              error = err.response.status
              message = 'Submission Failed \n Please check and modify the  information before resubmitting.'
            } else {
              error = ''
              message = 'please do check your internet'
            }

            this.$notification.open({
              message: error,
              description:
              message,
              icon: <a-icon type="close-circle" style="color: red"/>,


            });


          });


    },
    prev() {
      this.$store.dispatch('setRegistrationStep', 0)
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
    async handleUpload(e) {
      this.uploading = true
      const cloudName = process.env.VUE_APP_CLOUD;
      const unsignedUploadPreset = 'ml_default';


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
      this.$store.state.user_object.file = this.cv.slice(48)


    },


  }
}
</script>

<style scoped>
.steps-action {
  margin-top: 24px;
}
</style>
