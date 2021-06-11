<template>
<div style="padding:2%;overflow-y: scroll;padding: 1%;height: 70vh;">
  <div style="color: blue">
    <a-button type="primary" @click="showModal">
    <a-icon type="plus-circle" theme="twoTone"/>Add work experience
  </a-button>

  </div>
  <br>
  <div>
    <a-timeline>
      <a-timeline-item
                       >

        <p style="font-weight: 700">
          Kefri conso
          <a >
            <a-icon type="edit" theme="twoTone"/>
          </a>

        </p>
        <p><span><a-icon type="bank"/>  codeln <a-icon
            type="environment"/>  Ghana </span>
        </p>
        <p>
          Technologies used:
          <a-tag color="#1F81CE">
            vue js
          </a-tag>
          <a-tag color="#1F81CE">
            django
          </a-tag>

        </p>


        <p>Designing and implementing use case of UX processes of the user story</p>
        <p>2013 -2017</p>

      </a-timeline-item>
      <a-timeline-item
      >

        <p style="font-weight: 700">
          Kefri conso
          <a >
            <a-icon type="edit" theme="twoTone"/>
          </a>

        </p>
        <p><span><a-icon type="bank"/>  codeln <a-icon
            type="environment"/>  Ghana</span>
        </p>
        <p>
          Technologies used:
          <a-tag color="#1F81CE">
            vue js
          </a-tag>
          <a-tag color="#1F81CE">
            django
          </a-tag>

        </p>


        <p>Designing and implementing use case of UX processes of the user story</p>
        <p>2013 -2017</p>

      </a-timeline-item>

    </a-timeline>
  </div>


  <a-modal v-model="visible" title="New Work Experience" >
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
        <a-input

                 name="experience_title"

        />


      </a-form-item>
      <a-form-item
          label="Company"
          :label-col="{ span: 24 }"
          :wrapper-col="{ span: 24 }"
      >
        <a-input
                 name="experience_company"


        />


      </a-form-item>
      <a-form-item
          label="Duration in months"
          :label-col="{ span: 24 }"
          :wrapper-col="{ span: 24 }"
      >
        <p>
          <a-checkbox v-model="CurrentJob">
            Currently working here
          </a-checkbox>
          </p>

        <a-space>

          <a-month-picker placeholder="Start Month " >

          </a-month-picker>

          <a-month-picker v-if="CurrentJob === false" placeholder="End Month" >


          </a-month-picker>
        </a-space>

      </a-form-item>
      <a-form-item
          label="Location"
          :label-col="{ span: 24 }"
          :wrapper-col="{ span: 24 }"
      >

        <country-select
            name="location"

            class="ant-input"


        />

      </a-form-item>


      <a-form-item
          label="Technologies used "
          :label-col="{ span: 24 }"
          :wrapper-col="{ span:  24}"
      >
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
            <a-icon type="plus" /> New Tag
          </a-tag>
        </div>


      </a-form-item>
      <a-form-item
          label="Work description"
          :label-col="{ span: 24 }"
          :wrapper-col="{ span: 24 }"
      >
        <a-textarea
            placeholder="A description of your role and responsibilites(400 char max)"
            rows="4" maxLength=400

            name="experience_description"

        />


      </a-form-item>


    </a-form>
  </a-modal>
</div>
</template>

<script>
export default {
  name: "Experince",
  data() {

    return {
      tags: [],
      inputVisible: false,
      inputValue: '',
      openExperienceModal: false,
      visible: false,
      CurrentJob:false



    }
  },
  methods:{
    CreateExperience() {

      this.openExperienceModal = true

    },
    showModal() {
      this.visible = true;
    },
    handleClose(removedTag) {
      const tags = this.tags.filter(tag => tag !== removedTag);
      console.log(tags);
      this.tags = tags;
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick(function() {
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
      console.log(tags);
      Object.assign(this, {
        tags,
        inputVisible: false,
        inputValue: '',
      });
    },

  }
}
</script>

<style scoped>
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
