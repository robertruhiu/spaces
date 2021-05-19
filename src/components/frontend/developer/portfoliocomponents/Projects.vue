<template>
<div>
  <a-row>
    <a-col span="6" >
      <a-card hoverable style="width: 200px" @click="showModal">
        <div style="text-align: center">
          <img
              slot="cover"
              alt="example"
              src="@/assets/images/plus.svg"
              style="width: 30%"

          />
        </div>
        <a-card-meta title="Add new Project" style="text-align: center">

        </a-card-meta>
      </a-card>
    </a-col>

    <a-col span="18" >
      <a-row gutter="16">
        <a-col span="12" style="margin-bottom: 1rem">
          <a-card title="React app" style="">
            <a slot="extra" href="#">edit project</a>
            <p style="font-family: sofia_proregular">Tools used</p>
            <a-tag color="#1F81CE">
              react
            </a-tag>
            <a-tag color="#1F81CE">
              heroku
            </a-tag>

            <p style="font-family: sofia_proregular">Description</p>
            <p style="font-family: sofia_prolight">An aggregation application with the aim of enabling tourist to get connected to tour operators in Ghana that can handle their whole trip.
              It serves to market the agencies by ensuring that their packages are well marketed in an optimized way.</p>

            <a-button type="primary">
              view demo
            </a-button>
          </a-card>
        </a-col>
        <a-col span="12" style="margin-bottom: 1rem">
          <a-card title="React app" style="">
            <a slot="extra" href="#">edit project</a>
            <p style="font-family: sofia_proregular">Tools used</p>
            <a-tag color="#1F81CE">
              react
            </a-tag>
            <a-tag color="#1F81CE">
              heroku
            </a-tag>

            <p style="font-family: sofia_proregular">Description</p>
            <p style="font-family: sofia_prolight">An aggregation application with the aim of enabling tourist to get connected to tour operators in Ghana that can handle their whole trip.
              It serves to market the agencies by ensuring that their packages are well marketed in an optimized way.</p>

            <a-button type="primary">
              view demo
            </a-button>
          </a-card>
        </a-col>
        <a-col span="12" style="margin-bottom: 1rem">
          <a-card title="React app" style="">
            <a slot="extra" href="#">edit project</a>
            <p style="font-family: sofia_proregular">Tools used</p>
            <a-tag color="#1F81CE">
              react
            </a-tag>
            <a-tag color="#1F81CE">
              heroku
            </a-tag>

            <p style="font-family: sofia_proregular">Description</p>
            <p style="font-family: sofia_prolight">An aggregation application with the aim of enabling tourist to get connected to tour operators in Ghana that can handle their whole trip.
              It serves to market the agencies by ensuring that their packages are well marketed in an optimized way.</p>

            <a-button type="primary">
              view demo
            </a-button>
          </a-card>
        </a-col>
      </a-row>


    </a-col>

  </a-row>
  <a-modal v-model="visible" title="New Project" @ok="handleOk">
    <template slot="footer">

      <a-button key="submit" type="primary" :loading="loading" @click="SavenewProject">
        Save
      </a-button>
    </template>
    <a-form


    >
      <a-form-item
          label="Title"
          :label-col="{ span: 24 }"
          :wrapper-col="{ span: 24 }"
      >
        <a-input v-model="projecttitle"
                 v-validate.disable="'required'" name="project_title"

        />
        <span style="color: #f5222d;" v-show="errors.has('project_title')"
              class="help is-danger">{{ errors.first('project_title') }}</span>
      </a-form-item>
      <a-form-item
          label="Demo link"
          :label-col="{ span: 24 }"
          :wrapper-col="{ span: 24 }"
      >
        <a-input v-model="projectdemo"
                 v-validate.disable="{required: true,url: {require_protocol: true }}"
                 name="project_demo"

        />
        <span style="color: #f5222d;" v-show="errors.has('project_demo')"
              class="help is-danger">{{ errors.first('project_demo') }}</span>
      </a-form-item>
      <a-form-item
          label="Repository link"
          :label-col="{ span: 24 }"
          :wrapper-col="{ span: 24 }"
      >
        <a-input v-model="projectrepo"
                 v-validate.disable="{required: true,url: {require_protocol: true }}"
                 name="project_repo"

        />
        <span style="color: #f5222d;" v-show="errors.has('project_repo')"
              class="help is-danger">{{ errors.first('project_repo') }}</span>
      </a-form-item>

      <a-form-item
          label="Tech used in the project "
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
          New Tag
        </a-tag>

      </a-form-item>
      <a-form-item
          label="Project Description(max 400)"
          :label-col="{ span: 24 }"
          :wrapper-col="{ span: 24 }"
      >
        <a-textarea placeholder="About the project" rows="4" maxLength=400
                    v-model="projectdescription"
                    v-validate.disable="'required'" name="project_description"/>
        <span style="color: #f5222d;" v-show="errors.has('project_description')"
              class="help is-danger">{{ errors.first('project_description') }}</span>
      </a-form-item>


    </a-form>
  </a-modal>


</div>
</template>

<script>

export default {
  name: "Projects",
  data() {
    return {
      visible: false,
      tags: [],
      inputVisible: false,
      inputValue: '',


    };
  },

  methods: {
    showModal() {
      this.visible = true;
    },
    handleClose(removedTag) {
      const tags = this.tags.filter(tag => tag !== removedTag);

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

</style>
