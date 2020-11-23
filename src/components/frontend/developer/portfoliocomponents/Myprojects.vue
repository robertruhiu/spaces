<template>
  <div style="padding:0 2%">
                                        <span style="float: right;color: blue">
                                            <a @click="CreateProject">
                                                <a-icon type="plus-circle" theme="twoTone"/>Add
                                            </a>
                                        </span>

    <div v-if="dataload">
      <div style="text-align: center">
        <a-skeleton active/>
      </div>

    </div>
    <div v-else>

      <div v-if="projects.length>0">

        <div style="border-bottom: 1px solid #e8e8e8;padding-bottom: 2%;padding-top: 2%"
             v-for="item in projects" v-bind:key="item.id">
          <p style="font-weight: 700">
            {{ item.title }}
            <a @click="EditProject(item)">
              <a-icon type="edit" theme="twoTone"/>
            </a>

          </p>
          <p>
            Tools used:
            <a-tag v-for="tag in item.tags" color="blue"
                   :key="tag">
              {{ tag }}
            </a-tag>

          </p>
          <p>{{ item.description }}
          </p>
          <a :href=" item.demo" target="_blank">view project</a>

        </div>
      </div>
      <div v-else>
        <p>As a developer your skill proficiency is backed by projects done.Please add previously worked on projects</p>

      </div>
    </div>

    <!--Create project--->
    <a-modal
        title="New portfolio project"
        v-model="createproject"
        style="top: 1rem;"

    >
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
          <template v-for="(tag, index) in projecttags">
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
            label="Project Description"
            :label-col="{ span: 24 }"
            :wrapper-col="{ span: 24 }"
        >
          <a-textarea placeholder="About the project" rows="4"
                      v-model="projectdescription"
                      v-validate.disable="'required'" name="project_description"/>
          <span style="color: #f5222d;" v-show="errors.has('project_description')"
                class="help is-danger">{{ errors.first('project_description') }}</span>
        </a-form-item>


      </a-form>

    </a-modal>

    <!--edit project--->
    <a-modal
        title="Edit project"
        v-model="editproject"
        style="top: 1rem"

    >
      <template slot="footer">
        <a-button key="delete" type="danger" ghost @click="DeleteProject(currentproject.key)">
          Delete
        </a-button>

        <a-button key="submit" type="primary" :loading="loading" @click="UpdateProject">
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
          <a-input v-model="currentproject.title"
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
          <a-input v-model="currentproject.demo"
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
          <a-input v-model="currentproject.repo"
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
          <template v-for="(tag, index) in projecttags">
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
            label="Project Description"
            :label-col="{ span: 24 }"
            :wrapper-col="{ span: 24 }"
        >
          <a-textarea placeholder="About the project" rows="4"
                      v-model="currentproject.description"
                      v-validate.disable="'required'" name="project_description"/>
          <span style="color: #f5222d;" v-show="errors.has('project_description')"
                class="help is-danger">{{ errors.first('project_description') }}</span>
        </a-form-item>


      </a-form>
    </a-modal>


  </div>

</template>

<script>
import UsersService from "@/services/UsersService";

class Portfolio {
  constructor(id, title, description, demo, tech_used, repo) {
    this.key = id;
    this.title = title;
    this.description = description;
    this.demo = demo;
    this.tags = tech_used;
    this.repo = repo


  }
}

export default {
  name: "myprojects",
  data() {

    return {
      loading: false,
      createproject: false,
      editproject: false,
      currentproject: {},
      currentexperience: {},
      projecttags: [],
      inputVisible: false,
      inputValue: '',
      portfoliotags: [],
      inputVisible1: false,
      inputValue1: '',
      projecttitle: '',
      projectdemo: '',
      projectrepo: '',
      projectdescription: '',
      projecttech: '',

      updatexperience: false,
      dataload: false,
      myprojects: [],
      projects: []


    }
  },
  mounted() {
    this.FetchPortfolio()
  },
  methods: {
    FetchPortfolio() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      this.dataload = true
      UsersService.portfolio(this.$store.state.user.pk, auth)
          .then(
              resp => {
                this.myprojects = resp.data
                this.ComputeProjects()


              }
          )

    },
    ComputeProjects() {

      this.myprojects.forEach(item => {
        let id = item.id
        let title = item.title
        let description = item.description
        let demo = item.demo_link
        let tech_used = []
        if (item.tech_tags) {
          tech_used = item.tech_tags.split(',');
        }

        let repo = item.repository_link

        let one_portfolio = new Portfolio(
            id, title, description, demo, tech_used, repo
        );
        this.projects.push(one_portfolio)
      })
      this.dataload = false

    },
    CreateProject() {
      this.createproject = true
    },

    EditProject(project) {
      this.currentproject = project
      this.projecttags = project.tags
      this.editproject = true
    },
    SavenewProject() {


      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      this.$validator.validate().then(valid => {
        if (valid) {

          UsersService.newportfolio(
              {
                candidate: this.$store.state.user.pk,
                title: this.projecttitle,
                description: this.projectdescription,
                repository_link: this.projectrepo,
                demo_link: this.projectdemo,
                tech_tags: this.projecttech

              },
              auth)
              .then(() => {
                    this.createproject = false
                    this.myprojects = []
                    this.projects = []
                    this.FetchPortfolio()

                  }
              )
        }
      })


    },

    UpdateProject() {

      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      this.$validator.validate().then(valid => {
        if (valid) {
          this.currentproject.tags = this.projecttags.join(", ")
          UsersService.updateportfolio(this.currentproject.key,
              {
                title: this.currentproject.title,
                description: this.currentproject.description,
                repository_link: this.currentproject.repo,
                demo_link: this.currentproject.demo,
                tech_tags: this.currentproject.tags
              },
              auth)
              .then(() => {
                    this.editproject = false
                    this.myprojects = []
                    this.projects = []

                    this.FetchPortfolio()

                  }
              )

        }

      })


    },
    DeleteProject(portfolio_id) {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }

      UsersService.deleteportfolio(portfolio_id, auth)
          .then(() => {

                this.editproject = false
                this.myprojects = []
                this.projects = []
                this.FetchPortfolio()

              }
          )



    },
    handleClose(removedTag) {
      const tags = this.projecttags.filter(tag => tag !== removedTag)
      this.projecttags = tags
      let alltags = this.projecttags.join(", ")
      this.projecttech = alltags

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
      let projecttags = this.projecttags
      if (inputValue && projecttags.indexOf(inputValue) === -1) {
        projecttags = [...projecttags, inputValue]
      }

      let alltags = projecttags.join(", ")
      this.projecttech = alltags
      Object.assign(this, {
        projecttags,
        inputVisible: false,
        inputValue: '',
      })
    },
  }
}
</script>

<style scoped>

</style>
