<template>
  <div>
    <a-row>
      <a-col :xs="{span: 24, offset: 0, }" :sm="{span: 24, offset: 0, }"
             :md="{span: 20, offset: 0 }"
             :lg="{span: 18, offset: 0, }" :xl="{span: 16,offset: 0,push:0 }" >
        <div style="padding:2%;overflow-y: scroll;padding: 1%;height: 70vh;">
          <div style="color: blue">
            <a-button type="primary" @click="showModal">
              <a-icon type="plus-circle" theme="twoTone"/>
              Add work experience
            </a-button>

          </div>
          <br>
          <div>
            <div v-if="dataload">
              <div style="text-align: center">
                <div>
                  <a-skeleton active/>
                </div>
              </div>

            </div>
            <div v-else>
              <div v-if="experienceslist.length>0">
                <a-row gutter="16">
                  <a-col :xs="{span: 24, offset: 0, }" :sm="{span: 24, offset: 0, }"
                         :md="{span: 12, offset: 0 }"
                         :lg="{span: 8, offset: 0, }" :xl="{span: 8,offset: 0,push:0 }" v-for="item in complete"
                         v-bind:key="item.id" class="equaltable">
                    <a-card :title="item.title" style="margin-bottom: 1rem;">
              <span slot="extra" v-if="item.start === null">
                <a-alert message="Please update" banner/>
              </span>
                      <template slot="actions" class="ant-card-actions">
                        <a-popconfirm
                            title="Are you sure delete this work experience entry?"
                            ok-text="Yes"
                            cancel-text="No"
                            @confirm="DeleteExperience(item.key)"

                        >
                          <a-icon key="delete" type="delete" theme="twoTone" two-tone-color="#eb2f96"/>
                        </a-popconfirm>

                        <a-icon key="edit" type="edit" theme="twoTone" @click="EditExperience(item)"/>

                      </template>
                      <a-card-meta>
                        <template slot="description">

                          <p><span> Company name:  {{ item.company }} <a-icon
                              type="environment"/>  {{ item.location |countryname}} </span>
                          </p>
                          <p>
                      <span v-if="item.start">{{ item.start  | moment }}

                  </span>
                            <span v-if="item.end">
                    to
                    {{ item.end  | moment }}
                  </span>
                            <span v-else>
                    to present

                  </span>
                          </p>
                          <p>
                            Technologies used:
                            <a-tag v-for="tag in item.tags" color="#1F81CE"
                                   :key="tag">
                              {{ tag }}
                            </a-tag>

                          </p>




                        </template>
                      </a-card-meta>
                    </a-card>

                  </a-col>
                </a-row>
                <a-row gutter="16">
                  <a-col span="8" v-for="item in incomplete"
                         v-bind:key="item.id" class="equaltable">
                    <a-card :title="item.title" style="margin-bottom: 1rem;">
              <span slot="extra" v-if="item.start === null">
                <a-alert message="Please update" banner/>
              </span>
                      <template slot="actions" class="ant-card-actions">
                        <a-popconfirm
                            title="Are you sure delete this work experience entry?"
                            ok-text="Yes"
                            cancel-text="No"
                            @confirm="DeleteExperience(item.key)"

                        >
                          <a-icon key="delete" type="delete" theme="twoTone" two-tone-color="#eb2f96"/>
                        </a-popconfirm>

                        <a-icon key="edit" type="edit" theme="twoTone" @click="EditExperience(item)"/>

                      </template>
                      <a-card-meta>
                        <template slot="description">
                          <p><span><a-icon type="bank"/>  {{ item.company }} <a-icon
                              type="environment"/>  {{ item.location |countryname}} </span>
                          </p>
                          <p>
                            Technologies used:
                            <a-tag v-for="tag in item.tags" color="#1F81CE"
                                   :key="tag">
                              {{ tag }}
                            </a-tag>

                          </p>




                        </template>
                      </a-card-meta>
                    </a-card>

                  </a-col>
                </a-row>

              </div>
              <div v-else>
                <p>Add your recent work stints.Experience builds trust</p>


              </div>
            </div>

          </div>


          <a-modal v-model="visible" :dialog-style="{ top: '20px' }">
            <span slot="title">{{ card_title }}</span>
            <template slot="footer">

              <a-button key="submit" type="primary" @click="Save">
                Save
              </a-button>
            </template>
            <a-form>
              <a-form-item

                  :label-col="{ span: 24 }"
                  :wrapper-col="{ span: 24 }"
              >
          <span slot="label">
              Job title <span style="color: red">*</span>
            </span>
                <a-input name="experience_title"
                         v-model="title" v-validate="'required'"
                         data-vv-validate-on="change|custom|input"

                />
                <span class="errorMessage">{{ errors.first('experience_title') }}</span>


              </a-form-item>
              <a-form-item

                  :label-col="{ span: 24 }"
                  :wrapper-col="{ span: 24 }"
              >
          <span slot="label">
              Company name <span style="color: red">*</span>
            </span>
                <a-input name="experience_company" v-model="company" v-validate="'required'"
                         data-vv-validate-on="change|custom|input"


                />
                <span class="errorMessage">{{ errors.first('experience_company') }}</span>


              </a-form-item>
              <a-form-item >
          <span slot="label">
              Start and End of work stint <span style="color: red">*</span>
            </span>


                <p>
                  <a-checkbox v-model="CurrentJob">
                    Currently working here?
                  </a-checkbox>

                </p>

                <div>
                  <a-row gutter="16">
                    <a-col span="12">
                      <a-month-picker placeholder="Start Month" v-model="start_month" v-validate="'required'"
                                      name="starting_month" data-vv-validate-on="change|custom|input">

                      </a-month-picker>
                      <br>
                      <span class="errorMessage">{{ errors.first('starting_month') }}</span>
                    </a-col>
                    <a-col span="12">
                      <a-month-picker v-if="CurrentJob === false" placeholder="End Month" v-model="end_month"
                                      v-validate="'required'" name="ending_month" data-vv-validate-on="change|custom|input">

                      </a-month-picker>
                      <br>
                      <span class="errorMessage">{{ errors.first('ending_month') }}</span>

                    </a-col>
                  </a-row>


                </div>

              </a-form-item>

              <a-form-item

                  :label-col="{ span: 24 }"
                  :wrapper-col="{ span: 24 }"
              >
          <span slot="label">
              Location <span style="color: red">*</span>
            </span>
                <a-select name="location" v-validate="'required'" data-vv-as="location" show-search
                          data-vv-validate-on="change|custom|input"

                          option-filter-prop="children"
                          v-model="location" @change="handleChange" :filter-option="filterOption">

                  <a-select-option v-for="country in countrieslist"
                                   v-bind:key="country">

                    {{ country }}
                  </a-select-option>


                </a-select>
                <span class="errorMessage">{{ errors.first('location') }}</span>


              </a-form-item>


              <a-form-item

                  :label-col="{ span: 24 }"
                  :wrapper-col="{ span:  24}"
              >
          <span slot="label">
              Technologies used when working <span style="color: red">*</span>
            </span>
                <div>
                  <template v-for="(tag, index) in tags">
                    <a-tooltip v-if="tag.length > 20" :key="tag" :title="tag">
                      <a-tag :key="tag" :closable="index !== 0" @close="() => handleClose(tag)">
                        {{ `${tag.slice(0, 20)}...` }}
                      </a-tag>
                    </a-tooltip>
                    <a-tag v-else :key="tag" :closable="index !== 0" @close="() => handleClose(tag)">
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
                  <a-tag v-else style="background: #fff; borderStyle: dashed;" @click="showInput">
                    <a-icon type="plus"/>
                    New Tag
                  </a-tag>
                  <br>
                  <span class="errorMessage" v-if="toolsErrors.includes('tech_used')">add a tool used</span>
                </div>


              </a-form-item>
              <a-form-item
                  :label-col="{ span: 24 }"
                  :wrapper-col="{ span: 24 }"
              >
          <span slot="label">
              Work description <span style="color: red">*</span>
            </span>
                <a-textarea
                    v-model="description"
                    placeholder="A description of your role and responsibilites(400 char max)"
                    rows="4" maxLength=400

                    name="experience_description"
                    v-validate="'required'" data-vv-validate-on="change|custom|input"

                />
                <span class="errorMessage">{{ errors.first('experience_description') }}</span>


              </a-form-item>


            </a-form>
          </a-modal>
        </div>
      </a-col>
      <a-col :xs="{span: 14, offset: 0 }" :sm="{span: 14, offset: 0 }"
             :md="{span: 6, offset: 0 ,pull:0}"
             :lg="{span: 6, offset: 0 }" :xl="{span: 6,offset: 0,pull:0 }" >
        <div style="padding: 2%;">
          <div style="text-align: center">
            <img src="@/assets/images/briefcase.svg" style="width: 30%"/>
          </div>
          <p style="font-family: sofia_proregular;text-decoration: underline;text-decoration-color: #1F81CE">Work experience({{Finished/25*100}}% complete)</p>
          <p style="font-family: sofia_proregular">Years of experience is a commonly requested by recruiter showcase your timeline of work</p>











        </div>
      </a-col>
    </a-row>
  </div>

</template>

<script>
import UsersService from "@/services/UsersService";
import moment from "moment";
import Vue from 'vue';
import VeeValidate from 'vee-validate';

let countries = require("@/store/location.json")
Vue.use(VeeValidate, {
  events: 'change|input|custom'
});

class Experience {
  constructor(id, title, description, company, location, duration, tech_used, start, end) {
    this.key = id;
    this.title = title;
    this.description = description;
    this.company = company;
    this.duration = duration;
    this.tags = tech_used;
    this.location = location;
    this.start = start;
    this.end = end;


  }
}

export default {
  name: "Experince",
  data() {

    return {
      tags: [],
      inputVisible: false,
      inputValue: '',
      openExperienceModal: false,
      visible: false,
      CurrentJob: false,
      experienceslist: [],
      experiences: [],
      title: '',
      company: '',
      location: '',
      experiencetech: '',
      description: '',
      dataload: false,
      countrieslist: null,
      card_title: '',
      start_month: null,
      end_month: null,
      toolsErrors: [],
      editexperience: false,
      currentexperience: null,
      incomplete:[],
      complete:[]


    }
  },
  filters: {
    moment: function (date) {
      return moment(date).format('MMMM  YYYY');
    },
    truncate: function (text) {
      let length = 45
      let suffix = '...'
      if (text.length > length) {
        return text.substring(0, length) + suffix;
      } else {
        return text;
      }
    },
    countryname:function (abrev){
      for (const [key, value] of Object.entries(countries)) {
        if (key === abrev) {

          return  value
        }

      }

    }

  },
  watch: {
    tags: function () {
      if (this.tags.length === 0) {
        this.toolsErrors.push('tech_used')
        this.toolsErrors = [...new Set(this.toolsErrors)];

      } else {
        const index = this.toolsErrors.indexOf('tech_used');
        if (index > -1) {
          this.toolsErrors.splice(index, 1);
        }
      }
    },
  },
  mounted() {
    this.countrieslist = countries
    this.FetchExperience()
  },
  methods: {
    FetchExperience() {
      this.experienceslist = []
      this.experiences = []


      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      this.dataload = true

      UsersService.experience(this.$store.state.user.pk, auth).then(
          resp => {
            this.experienceslist = resp.data
            this.$emit('myexperinecesloaded', this.experienceslist)
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
        let start = item.work_start_month
        let end = item.work_end_month
        let tech_used = []
        if (item.tech_tags) {
          tech_used = item.tech_tags.split(',');
        }
        if(item.work_start_month){
          let one_experience = new Experience(
              id, title, description, company, location, duration, tech_used, start, end
          );
          this.complete.push(one_experience)
        }else {
          let one_experience = new Experience(
              id, title, description, company, location, duration, tech_used, start, end
          );
          this.incomplete.push(one_experience)
        }



      })

      this.dataload = false

    },
    CreateExperience() {

      this.openExperienceModal = true

    },
    Save() {
      if (this.tags.length === 0) {
        this.toolsErrors.push('tech_used')
      }
      if (this.CurrentJob) {
        this.end_month = null
      }
      let experience_obj = {
        'title': this.title,
        'description': this.description,
        'candidate': this.$store.state.user.pk,
        'company': this.company,
        'location': this.location,
        'work_start_month': this.start_month,
        'work_end_month': this.end_month,
        'tech_tags': this.tags.join(",")


      }

      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      this.$validator.validate().then(valid => {
        if (valid && this.toolsErrors.length === 0) {
          if (this.editexperience) {
            UsersService.updateexperience(this.currentexperience.key, experience_obj, auth)
                .then(() => {
                  this.visible = false
                  this.editexperience = false
                  this.FetchExperience()
                  this.ResetFields()

                })

          } else {
            UsersService.newexperience(experience_obj, auth)
                .then(() => {
                  this.visible = false
                  this.FetchExperience()
                  this.ResetFields()
                })
          }

        } else {
          return 'nop'
        }
      })


    },
    ResetFields() {
      this.$validator.reset();

      this.CurrentJob = false
      this.editexperience = false
      this.currentexperience = null
      this.start_month = ''
      this.end_month = ''
      this.card_title = ''
      this.tags = []
      this.toolsErrors = []
      this.title = ''
      this.description = ''
      this.location = ''
      this.company = ''


    },
    EditExperience(experience) {
      this.visible = true;
      this.start_month = ''
      this.end_month = ''
      this.editexperience = true
      this.company = experience.company
      for (const [key] of Object.entries(this.countrieslist)) {
        if (experience.location === key) {
          this.location = key


        }

      }

      this.card_title = 'Edit Experience'
      this.tags = experience.tags
      this.currentexperience = experience
      this.title = experience.title
      this.description = experience.description

      if (experience.end !== null) {

        this.CurrentJob = false
        this.end_month = experience.end
      } else {
        this.CurrentJob = true
      }
      this.start_month = experience.start


    },
    DeleteExperience(experience_id) {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }

      UsersService.deleteexperience(experience_id, auth)
          .then(() => {

                this.visible = false
                this.FetchExperience()
                this.ResetFields()

              }
          )


    },

    showModal() {
      this.ResetFields()
      this.card_title = 'New Work Experience'
      this.visible = true;
    },
    handleClose(removedTag) {
      const tags = this.tags.filter(tag => tag !== removedTag);
      this.tags = tags;
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick(function () {
        this.$refs.input.focus();
      });
    },

    handleInputChange(e) {
      this.inputValue = e.target.value;
    },

    handleInputConfirm() {
      const inputValue = this.inputValue;
      let tags = this.tags;
      if (inputValue && tags.indexOf(inputValue) === -1) {
        tags = [...tags, inputValue];
      }
      Object.assign(this, {
        tags,
        inputVisible: false,
        inputValue: '',
      });
    },
    handleChange(name) {
      for (const [key, value] of Object.entries(this.countrieslist)) {
        if (value === name) {
          this.location = key


        }

      }


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
.errorMessage {
  color: #f5222d;
  font-family: sofia_prolight
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #1890ff;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #91d5ff;
}
</style>
