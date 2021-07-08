<template>
<div style="overflow-y: scroll;padding: 1%;height: 70vh;">
  <a-form :form="form"
          @submit="handleSubmit">
    <a-row :gutter="16">
      <a-col :xs="{span: 12, offset: 0 }" :sm="{span: 12, offset: 0 }"
             :md="{span: 12, offset: 0 }"
             :lg="{span: 6, offset: 0 }" :xl="{span: 6,offset: 0 }">
        <a-form-item label="Title">
          <a-input v-model="job.title">

          </a-input>
        </a-form-item>
      </a-col>
      <a-col :xs="{span: 12, offset: 0 }" :sm="{span: 12, offset: 0 }"
             :md="{span: 12, offset: 0 }"
             :lg="{span: 6, offset: 0 }" :xl="{span: 6,offset: 0 }">
        <a-form-item label="Job role">
          <a-select

              placeholder="Select a option and change input text above"
              v-model="job.job_role"
          >
            <a-select-option value="Full Stack Developer">
              Full Stack Developer
            </a-select-option>
            <a-select-option value="Frontend Developer">
              Frontend Developer
            </a-select-option>
            <a-select-option value="Backend  Developer">
              Backend Developer
            </a-select-option>
            <a-select-option value="Android  Developer">
              Android Developer
            </a-select-option>
            <a-select-option value="Graphic Designer">
              Graphic Designer
            </a-select-option>
            <a-select-option value="IOS Developer">
              IOS Developer
            </a-select-option>
            <a-select-option value="Data Scientist">
              Data Scientist
            </a-select-option>
          </a-select>
        </a-form-item>


      </a-col>
      <a-col :xs="{span: 12, offset: 0 }" :sm="{span: 12, offset: 0 }"
             :md="{span: 12, offset: 0 }"
             :lg="{span: 6, offset: 0 }" :xl="{span: 6,offset: 0 }">
        <a-form-item label="Experience">
          <a-select
              placeholder="Select a option"
              v-model="job.years_experience"
          >

            <a-select-option value="0-1">
              0-1
            </a-select-option>
            <a-select-option value="1-3">
              1-3
            </a-select-option>
            <a-select-option value="3-above">
              3-above
            </a-select-option>

          </a-select>
        </a-form-item>

      </a-col>
      <a-col :xs="{span: 12, offset: 0 }" :sm="{span: 12, offset: 0 }"
             :md="{span: 12, offset: 0 }"
             :lg="{span: 6, offset: 0 }" :xl="{span: 6,offset: 0 }">
        <a-form-item label="Contract type">
          <a-select

              placeholder="Select a option and change input text above"
              v-model="job.engagement_type"
          >
            <a-select-option value="Full-time">
              Full-time
            </a-select-option>
            <a-select-option value="Part-time">
              Part-time
            </a-select-option>
            <a-select-option value="Contract">
              Contract
            </a-select-option>
            <a-select-option value="Remote">
              Remote
            </a-select-option>
            <a-select-option value="Freelance">
              Freelance
            </a-select-option>

          </a-select>
        </a-form-item>

      </a-col>
    </a-row>
    <!------commission entry added for staff access------>
    <a-row :gutter="16">
      <div v-if="$store.state.user_object.user.is_staff">

        <a-col :xs="{span: 12, offset: 0 }" :sm="{span: 12, offset: 0 }"
               :md="{span: 12, offset: 0 }"
               :lg="{span: 6, offset: 0 }" :xl="{span: 6,offset: 0 }">
          <a-form-item>
            <span>Location : {{job.location}}</span>
            <country-select v-model="job.location"
                            class="ant-input"
            />
          </a-form-item>

        </a-col>
        <a-col :xs="{span: 12, offset: 0 }" :sm="{span: 12, offset: 0 }"
               :md="{span: 12, offset: 0 }"
               :lg="{span: 6, offset: 0 }" :xl="{span: 6,offset: 0 }">
          <a-form-item label="City ">
            <a-input v-model="job.city">

            </a-input>
          </a-form-item>

        </a-col>
        <a-col :xs="{span: 12, offset: 0 }" :sm="{span: 12, offset: 0 }"
               :md="{span: 12, offset: 0 }"
               :lg="{span: 6, offset: 0 }" :xl="{span: 6,offset: 0 }">
          <a-form-item label="Salary range ">
            <a-input v-model="job.remuneration">

            </a-input>
          </a-form-item>

        </a-col>
        <a-col :xs="{span: 12, offset: 0 }" :sm="{span: 12, offset: 0 }"
               :md="{span: 12, offset: 0 }"
               :lg="{span: 6, offset: 0 }" :xl="{span: 6,offset: 0 }">
          <a-form-item label="Commission ">
            <a-input v-model="job.commission">

            </a-input>
          </a-form-item>

        </a-col>
      </div>
      <div v-else>

        <a-col :xs="{span: 12, offset: 0 }" :sm="{span: 12, offset: 0 }"
               :md="{span: 12, offset: 0 }"
               :lg="{span: 6, offset: 0 }" :xl="{span: 6,offset: 0 }">
          <a-form-item>
            <span>Location : {{job.location}}</span>
            <country-select v-model="job.location"
                            class="ant-input"
            />
          </a-form-item>

        </a-col>
        <a-col :xs="{span: 12, offset: 0 }" :sm="{span: 12, offset: 0 }"
               :md="{span: 12, offset: 0 }"
               :lg="{span: 6, offset: 0 }" :xl="{span: 6,offset: 0 }">
          <a-form-item label="City ">
            <a-input v-model="job.city">

            </a-input>
          </a-form-item>

        </a-col>
        <a-col :xs="{span: 12, offset: 0 }" :sm="{span: 12, offset: 0 }"
               :md="{span: 12, offset: 0 }"
               :lg="{span: 6, offset: 0 }" :xl="{span: 6,offset: 0 }">
          <a-form-item label="Salary range ">
            <a-input v-model="job.remuneration">

            </a-input>
          </a-form-item>

        </a-col>


      </div>


    </a-row>
    <a-row>

      <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
             :md="{span: 24, offset: 0 }"
             :lg="{span: 12, offset: 0 }" :xl="{span: 12,offset: 0 }">
        <a-form-item
            label="Which tech skills are you looking for? "

        >

          <template v-for="(tag, index) in tags">
            <a-tooltip v-if="tag.length > 20" :key="tag" :title="tag">
              <a-tag :key="tag"
                     :afterClose="() => handleClose(tag)"
                     color="#2db7f5">
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
      <a-col :xs="{span: 12, offset: 0 }" :sm="{span: 12, offset: 0 }"
             :md="{span: 12, offset: 0 }"
             :lg="{span: 12, offset: 0 }" :xl="{span: 12,offset: 0 }">
        <a-form-item :label="deadlineformated">

          <a-date-picker @change="onDate"


                         format="YYYY-MM-DD"
                         :disabledDate="disabledDate"

          />

        </a-form-item>
      </a-col>
    </a-row>
    <a-row>

      <a-col :span="24">
        <a-form-item
            label="Job description "
            :label-col="{ span: 24 }"
            :wrapper-col="{ span:  24}"
        >
          <vue-simplemde v-model="job.description" ref="markdownEditor"/>


        </a-form-item>

      </a-col>
    </a-row>


    <a-form-item>


      <a-button
          type="primary"
          html-type="submit"

      >
        Submit Changes
      </a-button>


    </a-form-item>
  </a-form>
</div>
</template>

<script>
import Marketplace from "@/services/Marketplace";
import moment from "moment";
import VueSimplemde from "vue-simplemde";
import 'simplemde/dist/simplemde.min.css';
export default {
name: "EditJob",
  props:{
  job:Object
  },
  data(){
    return{
      deadline: this.job.deadline,
      deadlineformated: moment(this.job.deadline).format("YYYY-MM-DD"),
      tags: this.job.tech_stack.replace(/'/g, '').replace(/ /g, '').split(','),
      inputVisible: false,
      inputValue: '',
    }

  },
  components:{
    VueSimplemde
  },

  methods:{
    disabledDate(current) {
      // Can not select days before today and today
      return current && current < moment().endOf('day');
    },
    onDate(date) {
      this.deadlineformated = moment(date).format("YYYY-MM-DD")

      this.deadline = date
    },
    handleSubmit: async function () {

      try {
        const auth = {
          headers: {Authorization: 'JWT ' + this.$store.state.token}

        }
        this.job.deadline = this.deadline
        this.updated = true
        Marketplace.updatejob(this.job.id, this.job, auth)
            .then()


      } catch
          (error) {
        this.error = error.response.data.error

      }


    },
    handleClose(removedTag) {
      const tags = this.tags.filter(tag => tag !== removedTag)
      this.tags = tags
      let alltags = this.tags.join(", ")
      this.job.tech_stack = alltags

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
      this.job.tech_stack = alltags
      Object.assign(this, {
        tags,
        inputVisible: false,
        inputValue: '',
      })
    },
  }
}
</script>

<style scoped>

</style>
