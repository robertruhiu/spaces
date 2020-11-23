<template>
  <div style="padding:2%">
                                        <span style="float: right;color: blue">
                                            <a @click="CreateExperience">
                                                <a-icon type="plus-circle" theme="twoTone"/>Add
                                            </a>
                                        </span>
    <br>
    <div v-if="dataload">
      <div style="text-align: center">
        <div>
          <a-skeleton active/>
        </div>
      </div>

    </div>
    <div v-else>
      <div v-if="experiences.length>0">
        <a-timeline>
          <a-timeline-item v-for="item in experiences"
                           v-bind:key="item.id">

            <p style="font-weight: 700">
              {{ item.title }}
              <a @click="EditExperience(item)">
                <a-icon type="edit" theme="twoTone"/>
              </a>

            </p>
            <p><span><a-icon type="bank"/>  {{ item.company }} <a-icon
                type="environment"/>  {{ item.location }} <a-icon
                type="hourglass"/>  {{ item.duration }}months</span>
            </p>
            <p>
              Technologies used:
              <a-tag v-for="tag in item.tags" color="blue"
                     :key="tag">
                {{ tag }}
              </a-tag>

            </p>


            <p>{{ item.description }}</p>

          </a-timeline-item>

        </a-timeline>
      </div>
      <div v-else>
        <p>Add your recent work stints.Experience builds trust</p>


      </div>
    </div>
    <!--Create experience--->
    <a-modal
        title="New Work Experience"
        v-model="createexperience"
        style="top: 1rem"

    >
      <template slot="footer">

        <a-button key="submit" type="primary" @click="SavenewExperience">
          Save
        </a-button>
      </template>
      <a-form


      >
        <a-form-item
            label="Job title"
            :label-col="{ span: 24 }"
            :wrapper-col="{ span: 24 }"
        >
          <a-input v-model="experiencetitle"
                   v-validate.disable="'required'"
                   name="experience_title"

          />
          <span style="color: #f5222d;" v-show="errors.has('experience_title')"
                class="help is-danger">{{ errors.first('experience_title') }}</span>

        </a-form-item>
        <a-form-item
            label="Company"
            :label-col="{ span: 24 }"
            :wrapper-col="{ span: 24 }"
        >
          <a-input v-model="experiencecompany"
                   v-validate.disable="'required'"
                   name="experience_company"


          />
          <span style="color: #f5222d;" v-show="errors.has('experience_company')"
                class="help is-danger">{{ errors.first('experience_company') }}</span>

        </a-form-item>
        <a-form-item
            label="Duration in months"
            :label-col="{ span: 24 }"
            :wrapper-col="{ span: 24 }"
        >

          <a-input-number :min="1" :max="200" v-model="experienceduration"
                          v-validate.disable="'required'"
                          name="experience_duration"

          />
          months
          <span style="color: #f5222d;" v-show="errors.has('experience_duration')"
                class="help is-danger">{{ errors.first('experience_duration') }}</span>

        </a-form-item>
        <a-form-item
            label="Location"
            :label-col="{ span: 24 }"
            :wrapper-col="{ span: 24 }"
        >

          <country-select
              name="location"
              v-model="experiencelocation"
              class="ant-input"
              v-validate.disable="'required'"

          />
          <span style="color: #f5222d;" v-show="errors.has('location')"
                class="help is-danger">{{ errors.first('location') }}</span>
        </a-form-item>


        <a-form-item
            label="Technologies used "
            :label-col="{ span: 24 }"
            :wrapper-col="{ span:  24}"
        >
          <template v-for="(tag, index) in experiencetags">
            <a-tooltip v-if="tag.length > 20" :key="tag" :title="tag">
              <a-tag :key="tag"
                     :afterClose="() => handleClose1(tag)" color="#2db7f5">
                {{ `${tag.slice(0, 20)}...` }}
              </a-tag>
            </a-tooltip>
            <a-tag v-else :key="tag" :closable="index >= 0"
                   :afterClose="() => handleClose1(tag)" color="#2db7f5">
              {{ tag }}
            </a-tag>
          </template>
          <a-input
              v-if="inputVisible1"
              ref="input"
              type="text"
              size="small"
              :style="{ width: '78px' }"
              :value="inputValue1"
              @change="handleInputChange1"
              @blur="handleInputConfirm1"
              @keyup.enter="handleInputConfirm1"
          />
          <a-tag v-else @click="showInput1"
                 style="background: #fff; borderStyle: dashed;">
            <a-icon type="plus"/>
            New Tag
          </a-tag>


        </a-form-item>
        <a-form-item
            label="Work description"
            :label-col="{ span: 24 }"
            :wrapper-col="{ span: 24 }"
        >
          <a-textarea
              placeholder="A description of your role and responsibilites(400 char max)"
              rows="4"
              v-model="experiencedescription"
              v-validate.disable="'required'"
              name="experience_description"

          />
          <span style="color: #f5222d;" v-show="errors.has('experience_description')"
                class="help is-danger">{{ errors.first('experience_description') }}</span>

        </a-form-item>


      </a-form>

    </a-modal>

    <!--edit experience--->
    <a-modal
        title="Edit work experience"
        v-model="editexperience"
        style="top: 1rem"

    >
      <template slot="footer">

        <div>
          <a-button key="delete" type="danger" ghost @click="DeleteExperience(currentexperience.key)">
            Delete
          </a-button>

          <a-button key="submit" type="primary" @click="UpdateExperience">
            Save
          </a-button>
        </div>

      </template>
      <a-form


      >
        <a-form-item
            label="Job title"
            :label-col="{ span: 24 }"
            :wrapper-col="{ span: 24 }"
        >
          <a-input v-model="currentexperience.title"
                   v-validate.disable="'required'"
                   name="experience_title"

          />
          <span style="color: #f5222d;" v-show="errors.has('experience_title')"
                class="help is-danger">{{ errors.first('experience_title') }}</span>

        </a-form-item>
        <a-form-item
            label="Company"
            :label-col="{ span: 24 }"
            :wrapper-col="{ span: 24 }"
        >
          <a-input v-model="currentexperience.company"
                   v-validate.disable="'required'"
                   name="experience_company"


          />
          <span style="color: #f5222d;" v-show="errors.has('experience_company')"
                class="help is-danger">{{ errors.first('experience_company') }}</span>

        </a-form-item>
        <a-form-item
            label="Duration in months"
            :label-col="{ span: 24 }"
            :wrapper-col="{ span: 24 }"
        >

          <a-input-number :min="1" :max="200" v-model="currentexperience.duration"
                          v-validate.disable="'required'"
                          name="experience_duration"

          />
          months
          <span style="color: #f5222d;" v-show="errors.has('experience_duration')"
                class="help is-danger">{{ errors.first('experience_duration') }}</span>

        </a-form-item>
        <a-form-item
            label="Location"
            :label-col="{ span: 24 }"
            :wrapper-col="{ span: 24 }"
        >

          <country-select
              name="location"
              v-model="currentexperience.location"
              class="ant-input"
              v-validate.disable="'required'"

          />
          current:{{ currentexperience.location }}
          <span style="color: #f5222d;" v-show="errors.has('location')"
                class="help is-danger">{{ errors.first('location') }}</span>
        </a-form-item>


        <a-form-item
            label="Technologies used "
            :label-col="{ span: 24 }"
            :wrapper-col="{ span:  24}"
        >
          <template v-for="(tag, index) in experiencetags">
            <a-tooltip v-if="tag.length > 20" :key="tag" :title="tag">
              <a-tag :key="tag"
                     :afterClose="() => handleClose1(tag)" color="#2db7f5">
                {{ `${tag.slice(0, 20)}...` }}
              </a-tag>
            </a-tooltip>
            <a-tag v-else :key="tag" :closable="index >= 0"
                   :afterClose="() => handleClose1(tag)" color="#2db7f5">
              {{ tag }}
            </a-tag>
          </template>
          <a-input
              v-if="inputVisible1"
              ref="input"
              type="text"
              size="small"
              :style="{ width: '78px' }"
              :value="inputValue1"
              @change="handleInputChange1"
              @blur="handleInputConfirm1"
              @keyup.enter="handleInputConfirm1"
          />
          <a-tag v-else @click="showInput1"
                 style="background: #fff; borderStyle: dashed;">
            <a-icon type="plus"/>
            New Tag
          </a-tag>


        </a-form-item>
        <a-form-item
            label="Work description"
            :label-col="{ span: 24 }"
            :wrapper-col="{ span: 24 }"
        >
          <a-textarea
              placeholder="A description of your role and responsibilites(400 char max)"
              rows="4"
              v-model="currentexperience.description"
              v-validate.disable="'required'"
              name="experience_description"

          />
          <span style="color: #f5222d;" v-show="errors.has('experience_description')"
                class="help is-danger">{{ errors.first('experience_description') }}</span>

        </a-form-item>


      </a-form>

    </a-modal>


  </div>
</template>

<script>
import UsersService from "@/services/UsersService";

class Experience {
  constructor(id, title, description, company, location, duration, tech_used) {
    this.key = id;
    this.title = title;
    this.description = description;
    this.company = company;
    this.duration = duration;
    this.tags = tech_used;
    this.location = location;

  }
}

export default {
  name: "work",
  data() {

    return {

      experienceslist: [],
      experiences: [],

      loading: false,

      createexperience: false,
      editexperience: false,

      currentexperience: {},

      experiencetags: [],
      inputVisible: false,
      inputValue: '',

      inputVisible1: false,
      inputValue1: '',

      experiencetitle: '',
      experiencecompany: '',
      experienceduration: '',
      experiencelocation: '',
      experiencetech: '',
      experiencedescription: '',

      updatexperience: false,
      dataload: false,


    }
  },
  mounted() {
    this.FetchExperience()
  },
  methods: {
    FetchExperience() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      this.dataload = true

      UsersService.experience(this.$store.state.user.pk, auth).then(
          resp => {
            this.experienceslist = resp.data
            this.ComputeExperience()
          }
      )


    },
    ComputeExperience() {
      this.experienceslist.forEach(item => {
        let id = item.id
        let title = item.title
        let description = item.description
        let company = item.company
        let location = item.location
        let duration = item.duration
        let tech_used = []
        if (item.tech_tags) {
          tech_used = item.tech_tags.split(',');
        }

        let one_experience = new Experience(
            id, title, description, company, location, duration, tech_used
        );
        this.experiences.push(one_experience)
      })
      this.dataload = false

    },
    CreateExperience() {
      this.createexperience = true
    },

    EditExperience(experience) {
      this.currentexperience = experience
      this.experiencetags = experience.tags
      this.editexperience = true
    },
    SavenewExperience() {


      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      this.$validator.validate().then(valid => {
        if (valid) {
          UsersService.newexperience(
              {
                candidate: this.$store.state.user.pk,
                title: this.experiencetitle,
                description: this.experiencedescription,
                company: this.experiencecompany,
                tech_tags: this.experiencetech,
                location: this.experiencelocation,
                duration: this.experienceduration

              },
              auth)
              .then(() => {

                    this.createexperience = false
                    this.experienceslist = []
                    this.experiences = []
                    this.FetchExperience()


                  }
              )

        }
      })


    },

    UpdateExperience() {

      this.updatexperience = true
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      this.$validator.validate().then(valid => {
        if (valid) {
          this.currentexperience.tags = this.experiencetags.join(", ")
          UsersService.updateexperience(this.currentexperience.key,
              {
                title: this.currentexperience.title,
                description: this.currentexperience.description,
                company: this.currentexperience.company,
                duration: this.currentexperience.duration,
                tech_tags: this.currentexperience.tags,
                location: this.currentexperience.location,


              },
              auth)
              .then(() => {

                    this.editexperience = false
                    this.experienceslist = []
                    this.experiences = []
                    this.FetchExperience()

                  }
              )
              .catch()

        }
      })


    },
    DeleteExperience(experience_id) {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }

      this.updatexperience = true
      UsersService.deleteexperience(experience_id, auth)
          .then(() => {
                this.editexperience = false
                this.experienceslist = []
                this.experiences = []
                this.FetchExperience()


              }
          )


    },

    handleClose1(removedTag) {
      const tags = this.experiencetags.filter(tag => tag !== removedTag)
      this.experiencetags = tags
      let alltags = this.experiencetags.join(", ")
      this.experiencetech = alltags

    },

    showInput1() {
      this.inputVisible1 = true
      this.$nextTick(function () {
        this.$refs.input.focus()
      })
    },

    handleInputChange1(e) {
      this.inputValue1 = e.target.value
    },

    handleInputConfirm1() {
      const inputValue = this.inputValue1
      let experiencetags = this.experiencetags
      if (inputValue && experiencetags.indexOf(inputValue) === -1) {
        experiencetags = [...experiencetags, inputValue]
      }

      let alltags = experiencetags.join(", ")
      this.experiencetech = alltags
      Object.assign(this, {
        experiencetags,
        inputVisible1: false,
        inputValue1: '',
      })
    },
  }
}
</script>

<style scoped>

</style>
