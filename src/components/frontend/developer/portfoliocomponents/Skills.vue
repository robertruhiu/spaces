<template>
  <div>
    <a-row>
      <a-col span="4">
        <a-card hoverable @click="showModal">
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

      <a-col span="18" style="overflow-y: scroll;padding: 0 1% 0 1% ;height: 70vh;">

        <a-skeleton active v-if="dataload" />



        <a-row gutter="16" v-else >



          <a-col span="12" v-for="project in projects" v-bind:key="project" class="equaltable">
            <a-card class="nine equalcards " v-if="project.role" style="margin-bottom: 1rem">
              <img
                  class="card-img-top"
                  slot="cover"
                  alt="example"
                  :src="`https://res.cloudinary.com/dwtvwjhn3/raw/upload/${project.images[0]}`"


              />
              <template slot="actions" class="ant-card-actions">
                <a-popconfirm
                    title="Are you sure delete this project?"
                    ok-text="Yes"
                    cancel-text="No"
                    @confirm="DeleteProject(project.key)"

                >
                  <a-icon key="delete" type="delete" theme="twoTone" two-tone-color="#eb2f96"/>
                </a-popconfirm>

                <a-icon key="edit" type="edit" theme="twoTone" @click="EditProject(project)"/>

              </template>


              <a-card-meta>
                <template slot="description">
                  {{ project.start  | moment }} {{ project.end  | moment }}
                  <br>
                  <span>Project name : {{ project.title }}</span>
                  <br>


                  <span>Role in Project:<span v-for="role in project.role" v-bind:key="role">
                    <a-tag style="margin-bottom: 1rem">
                    {{ role }}
                  </a-tag>
                  </span></span>
                  <br>


                  <span>Tools used:
                    <span v-for="tool in project.tools" v-bind:key="tool">
                    <a-tag color="#1F81CE" style="margin-bottom: 1rem">
                    {{ tool }}
                  </a-tag>
                  </span>

                  </span>
                  <br>


                  <p>{{ project.description |truncate }}.</p>

                </template>
              </a-card-meta>
            </a-card>
            <a-card class="nine equalcards" v-else style="margin-bottom: 1rem">
              <img v-if="project.images.length>0"
                   class="card-img-top"
                   slot="cover"
                   alt="example"
                   :src="`https://res.cloudinary.com/dwtvwjhn3/raw/upload/${project.images[0]}`"


              />
              <img v-else
                   class="norole"
                   slot="cover"
                   alt="example"
                   src="@/assets/images/error.svg"


              />
              <template slot="actions" class="ant-card-actions">
                <a-popconfirm
                    title="Are you sure delete this project?"
                    ok-text="Yes"
                    cancel-text="No"
                    @confirm="DeleteProject(project.key)"

                >
                  <a-icon key="delete" type="delete" theme="twoTone" two-tone-color="#eb2f96"/>
                </a-popconfirm>

                <a-icon key="edit" type="edit" theme="twoTone" @click="EditProject(project)"/>

              </template>

              <a-card-meta>
                <template slot="description">

                  <div>
                    <span>Project name : {{ project.title }}</span>
                    <br>
                    <p>{{ project.description |truncate }}.</p>
                    <a-alert type="warning"
                             show-icon message="Please edit this project to update it." banner/>

                  </div>


                </template>
              </a-card-meta>
            </a-card>
          </a-col>


        </a-row>


      </a-col>

    </a-row>

    <a-modal v-model="visible"
             :dialog-style="{ top: '20px' }">
      <span slot="title">{{ card_title }}</span>
      <template slot="footer">

        <a-button key="submit" type="primary" :loading="loading" @click="Save">
          Save
        </a-button>
      </template>
      <a-form


      >
        <a-form-item
            label="Project name"
            :label-col="{ span: 24 }"
            :wrapper-col="{ span: 24 }">
          <a-input v-model="title" v-validate="'required'" name="project_title"
                   data-vv-validate-on="change|custom|input"

          />
          <span class="errorMessage">{{ errors.first('project_title') }}</span>
        </a-form-item>
        <a-form-item
            label="Describe what the Project is about"
            :label-col="{ span: 24 }"
            :wrapper-col="{ span: 24 }"
        >

          <a-textarea
              placeholder="Autosize height with minimum and maximum number of lines"
              :auto-size="{ minRows: 2, maxRows: 6 }" v-model="description"
              v-validate="'required'" name="project_description" data-vv-validate-on="change|custom|input"
          />
          <span class="errorMessage">{{ errors.first('project_description') }}</span>
        </a-form-item>

        <a-form-item label="Project Demo Url">
          <a-input v-model="project_demo" v-validate="{url: {require_protocol: true }}"
                   name="project_demo_url" data-vv-validate-on="change|custom|input"/>
          <span class="errorMessage">{{ errors.first('project_demo_url') }}</span>
          <p>Was the project personal or company</p>
          <a-radio-group name="radioGroup" :default-value="1" v-model="projectType">
            <a-radio :value="1">
              Company
            </a-radio>
            <a-radio :value="2">
              Personal
            </a-radio>

          </a-radio-group>
          <div v-if="projectType === 1">
            <a-input placeholder="Company name" v-model="company_name" v-validate="'required'" name="companyName"
                     data-vv-validate-on="change|custom|input"/>
            <span class="errorMessage">{{ errors.first('companyName') }}</span>
            <a-input placeholder="Company url" v-model="company_url"
                     v-validate="{required: true,url: {require_protocol: true }}" name="companyUrl"
                     data-vv-validate-on="change|custom|input"/>
            <span class="errorMessage">{{ errors.first('companyUrl') }}</span>
            <a-select name="location" v-validate="'required'" data-vv-as="location" show-search
                      data-vv-validate-on="change|custom|input"

                      option-filter-prop="children"
                      v-model="company_location" @change="handleChangeCompanyLocation" :filter-option="filterOption">

              <a-select-option v-for="country in countrieslist"
                               v-bind:key="country">

                {{ country }}
              </a-select-option>


            </a-select>
            <span class="errorMessage">{{ errors.first('location') }}</span>

          </div>

        </a-form-item>

        <a-form-item label="Project repository url">

          <a-input v-model="project_repo" v-validate="{url: {require_protocol: true }}"
                   name="project_repo_url" data-vv-validate-on="change|custom|input"/>
          <span class="errorMessage">{{ errors.first('project_repo_url') }}</span>


        </a-form-item>

        <a-form-item label="Start and End of project">


          <p>
            <a-checkbox v-model="Inprogress">
              Is the project in progress?
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
                <a-month-picker v-if="Inprogress === false" placeholder="End Month" v-model="end_month"
                                v-validate="'required'" name="ending_month" data-vv-validate-on="change|custom|input">

                </a-month-picker>
                <br>
                <span class="errorMessage">{{ errors.first('ending_month') }}</span>

              </a-col>
            </a-row>


          </div>

        </a-form-item>

        <a-form-item>

          <span>Which role did you play in the project(you can pick more than one).</span>
          <br>
          <a-checkbox-group
              v-model="rolevalues"
              name="checkboxgroup"
              :options="role_options"

          />
          <br>
          <span class="errorMessage" v-if="roleerror">please pick a role</span>


          <div v-if="rolevalues.includes('Developer')">
            Developer tools:
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
            <a-tag v-else style="background: #fff; borderStyle: dashed;" @click="showInput">
              <a-icon type="plus"/>
              New Tag
            </a-tag>
            <br>
            <span class="errorMessage" v-if="toolsErrors.includes('Developer')">add a tool used</span>
          </div>

          <div v-if="rolevalues.includes('Designer')">
            Design tools:
            <template v-for="(tag, index) in tagsDesign">
              <a-tooltip v-if="tag.length > 20" :key="tag" :title="tag">
                <a-tag :key="tag"
                       :afterClose="() => handleCloseDesign(tag)" color="#2db7f5">
                  {{ `${tag.slice(0, 20)}...` }}
                </a-tag>
              </a-tooltip>
              <a-tag v-else :key="tag" :closable="index >= 0"
                     :afterClose="() => handleCloseDesign(tag)" color="#2db7f5">
                {{ tag }}
              </a-tag>
            </template>
            <a-input
                v-if="inputVisibleDesign"
                ref="input"
                type="text"
                size="small"
                :style="{ width: '78px' }"
                :value="inputValueDesign"
                @change="handleInputChangeDesign"
                @blur="handleInputConfirmDesign"
                @keyup.enter="handleInputConfirmDesign"
            />
            <a-tag v-else style="background: #fff; borderStyle: dashed;" @click="showInputDesign">
              <a-icon type="plus"/>
              New Tag
            </a-tag>
            <br>
            <span class="errorMessage" v-if="toolsErrors.includes('Designer')">add a tool used</span>
          </div>

          <div v-if="rolevalues.includes('Product_Manager')">
            Product Management tools:
            <template v-for="(tag, index) in tagsProduct">
              <a-tooltip v-if="tag.length > 20" :key="tag" :title="tag">
                <a-tag :key="tag"
                       :afterClose="() => handleCloseProduct(tag)" color="#2db7f5">
                  {{ `${tag.slice(0, 20)}...` }}
                </a-tag>
              </a-tooltip>
              <a-tag v-else :key="tag" :closable="index >= 0"
                     :afterClose="() => handleCloseProduct(tag)" color="#2db7f5">
                {{ tag }}
              </a-tag>
            </template>
            <a-input
                v-if="inputVisibleProduct"
                ref="input"
                type="text"
                size="small"
                :style="{ width: '78px' }"
                :value="inputValueProduct"
                @change="handleInputChangeProduct"
                @blur="handleInputConfirmProduct"
                @keyup.enter="handleInputConfirmProduct"
            />
            <a-tag v-else style="background: #fff; borderStyle: dashed;" @click="showInputProduct">
              <a-icon type="plus"/>
              New Tag
            </a-tag>
            <br>
            <span class="errorMessage" v-if="toolsErrors.includes('Product_Manager')">add a tool used</span>
          </div>

          <div v-if="rolevalues.includes('Devops')">
            Devops tools:
            <template v-for="(tag, index) in tagsOps">
              <a-tooltip v-if="tag.length > 20" :key="tag" :title="tag">
                <a-tag :key="tag"
                       :afterClose="() => handleCloseOps(tag)" color="#2db7f5">
                  {{ `${tag.slice(0, 20)}...` }}
                </a-tag>
              </a-tooltip>
              <a-tag v-else :key="tag" :closable="index >= 0"
                     :afterClose="() => handleCloseOps(tag)" color="#2db7f5">
                {{ tag }}
              </a-tag>
            </template>
            <a-input
                v-if="inputVisiblesOps"
                ref="input"
                type="text"
                size="small"
                :style="{ width: '78px' }"
                :value="inputValueOps"
                @change="handleInputChangeOps"
                @blur="handleInputConfirmOps"
                @keyup.enter="handleInputConfirmOps"
            />
            <a-tag v-else style="background: #fff; borderStyle: dashed;" @click="showInputOps">
              <a-icon type="plus"/>
              New Tag
            </a-tag>
            <br>
            <span class="errorMessage" v-if="toolsErrors.includes('Devops')">add a tool used</span>
          </div>
        </a-form-item>

        <a-form-item>
          <p> Add images of the project</p>

          <div v-if="uploading">

            <span>Uploading file <a-spin/></span>

          </div>
          <div v-else>

            <input type="file" @change="ChangehandleUpload" accept=".png, .jpg, .jpeg">
          </div>
          <span class="errorMessage" v-if="imageError">please add an image or images</span>
          <a-row :gutter="16" v-if="fileList.length>0">
            <a-col :span="8" v-for="image in fileList" v-bind:key="image">
              <a-card hoverable>
                <img
                    class="card-img-topsmall"
                    slot="cover"
                    alt="example"
                    :src="`https://res.cloudinary.com/dwtvwjhn3/raw/upload/${image}`"
                />
                <template slot="actions" class="ant-card-actions">
                  <a-icon @click="deleteImage(image)" key="delete" type="delete"/>

                </template>

              </a-card>
            </a-col>

          </a-row>


        </a-form-item>
      </a-form>
    </a-modal>
  </div>

</template>

<script>
import MyProjectsService from "@/services/UsersService";
import axios from "axios";
import moment from "moment";
import Vue from 'vue';
import VeeValidate from 'vee-validate';
import UsersService from "@/services/UsersService";

let countries = require("@/store/location.json")
Vue.use(VeeValidate, {
  events: 'change|input|custom'
});

class Portfolio {
  constructor(id, title, description, demo, repo, role, tools, images, personal_company, company_name, company_url, company_location, start, end, fullRole) {
    this.key = id;
    this.title = title
    this.description = description;
    this.demo = demo;
    this.repo = repo
    this.role = role;
    this.tools = tools
    this.images = images;
    this.personal_company = personal_company;
    this.company_name = company_name;
    this.company_url = company_url;
    this.company_location = company_location;
    this.start = start;
    this.end = end;
    this.fullRole = fullRole


  }
}


export default {
  name: "Skills",

  data() {
    return {
      dataload:false,
      role_options: ['Developer', 'Designer', 'Product_Manager', 'Devops'],
      Developer: false,
      Design: false,
      Product: false,
      Devops: false,
      visible: false,
      fileList: [],
      tags: [],
      inputVisible: false,
      inputValue: '',
      tagsDesign: [],
      inputVisibleDesign: false,
      inputValueDesign: '',
      tagsProduct: [],
      inputVisibleProduct: false,
      inputValueProduct: '',
      tagsOps: [],
      inputVisiblesOps: false,
      inputValueOps: '',
      projectType: 2,
      Inprogress: false,
      myprojects: [],
      title: '',
      description: '',
      project_demo: '',
      project_repo: '',
      personal: true,
      company_name: '',
      company_url: '',
      company_location: '',
      uploading: false,
      role: {},
      start_month: '',
      end_month: '',
      projects: [],
      countrieslist: null,
      rolevalues: [],
      roleerror: false,
      toolsErrors: [],
      imageError: false,
      card_title: '',
      editproject: false,
      currentproject: null,
      items: [
        {title: 'Item 0', content: 'Content'},
        {title: 'Item 1', content: 'Content'},
      ]


    };
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
  },
  watch: {
    visible:function (){
      this.$validator.reset();
    },
    rolevalues: function () {
      this.roleerror = this.rolevalues.length === 0;
    },
    tags: function () {
      if (this.rolevalues.includes('Developer')) {
        if (this.tags.length === 0) {
          this.toolsErrors.push('Developer')
          this.toolsErrors = [...new Set(this.toolsErrors)];

        } else {
          const index = this.toolsErrors.indexOf('Developer');
          if (index > -1) {
            this.toolsErrors.splice(index, 1);
          }
        }
      }
    },
    tagsDesign: function () {
      if (this.rolevalues.includes('Designer')) {
        if (this.tagsDesign.length === 0) {
          this.toolsErrors.push('Designer')
          this.toolsErrors = [...new Set(this.toolsErrors)];

        } else {
          const index = this.toolsErrors.indexOf('Designer');
          if (index > -1) {
            this.toolsErrors.splice(index, 1);
          }
        }
      }
    },
    tagsProduct: function () {
      if (this.rolevalues.includes('Product_Manager')) {
        if (this.tagsProduct.length === 0) {
          this.toolsErrors.push('Product_Manager')
          this.toolsErrors = [...new Set(this.toolsErrors)];

        } else {
          const index = this.toolsErrors.indexOf('Product_Manager');
          if (index > -1) {
            this.toolsErrors.splice(index, 1);
          }
        }
      }
    },
    tagsOps: function () {
      if (this.rolevalues.includes('Devops')) {
        if (this.tagsOps.length === 0) {
          this.toolsErrors.push('Devops')
          this.toolsErrors = [...new Set(this.toolsErrors)];

        } else {
          const index = this.toolsErrors.indexOf('Devops');
          if (index > -1) {
            this.toolsErrors.splice(index, 1);
          }
        }
      }
    },
    fileList: function () {

      this.imageError = this.fileList.length <= 0;


    }


  },
  components: {},
  async mounted() {
    this.countrieslist = countries
    this.FetchPortfolio()
  },
  methods: {
    FetchPortfolio() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      this.myprojects=[]
      this.projects=[]
      this.dataload = true
      MyProjectsService.getportofoliolight(this.$store.state.user.pk, auth)
          .then(
              resp => {
                this.myprojects = resp.data
                this.ComputeProjects()


              }
          )

    },
    ComputeProjects() {
      this.projects = []


      this.myprojects.forEach(item => {
        let id = item.id
        let title = item.title
        let description = item.description
        let demo = item.demo_link
        let repo = item.repository_link
        let role = null
        let tools = []
        let fullRole = item.project_role
        if (item.project_role) {
          role = Object.keys(item.project_role)
          let tools_list = Object.values(item.project_role)
          tools_list.forEach(role_tool_list => {
            role_tool_list.forEach(tool => {
              tools.push(tool)
            })
          })
        }

        let images = []
        if (item.images !== null) {
          images = item.images


        }


        let personal_company = item.personal_company
        let company_name = ''
        let company_url = ''
        let company_location = ''
        if (personal_company) {
          company_name = item.company_name
          company_location = item.company_location
          company_url = item.company_url
        }
        let start = item.project_start_month
        let end = item.project_end_month


        let one_portfolio = new Portfolio(
            id, title, description, demo, repo, role, tools, images, personal_company, company_name, company_url, company_location, start, end, fullRole
        );
        this.projects.push(one_portfolio)
      })
      this.dataload = false

    },
    async ChangehandleUpload(e) {

      this.uploading = true
      const cloudName = 'dwtvwjhn3';
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


      this.fileList.push(res.data.secure_url.slice(48))
      this.uploading = false


    },
    deleteImage(image) {
      const index = this.fileList.indexOf(image);
      if (index > -1) {
        this.fileList.splice(index, 1);
      }

    },
    checkRoleValid() {
      if (this.rolevalues.includes('Developer')) {

        if (this.tags.length === 0) {
          this.toolsErrors.push('Developer')

        } else {
          this.role['Developer'] = this.tags
        }
      }
      if (this.rolevalues.includes('Designer')) {
        if (this.tagsDesign.length === 0) {
          this.toolsErrors.push('Designer')

        } else {
          this.role['Designer'] = this.tagsDesign
        }

      }
      if (this.rolevalues.includes('Devops')) {
        if (this.tagsOps.length === 0) {
          this.toolsErrors.push('Devops')

        } else {
          this.role['Devops'] = this.tagsOps
        }

      }
      if (this.rolevalues.includes('Product_Manager')) {
        if (this.tagsProduct.length === 0) {
          this.toolsErrors.push('Product_Manager')

        } else {
          this.role['Product_Manager'] = this.tagsProduct
        }


      }
    },
    Save() {

      this.imageError = this.fileList.length <= 0;
      this.checkRoleValid()

      let companyname = ''
      let companyurl = ''

      let personal = false
      if (this.projectType === 1) {
        personal = true
        companyname = this.company_name
        companyurl = this.company_url
      }

      let project_obj = {
        'title': this.title,
        'description': this.description,
        'candidate': this.$store.state.user.pk,
        'repository_link': this.project_repo,
        'demo_link': this.project_demo,
        'project_role': this.role,
        'images': this.fileList.join(','),
        'personal_company': personal,
        'company_name': companyname,
        'company_url': companyurl,
        'project_start_month': this.start_month,
        'project_end_month': this.end_month


      }
      if (this.rolevalues.length === 0) {
        this.roleerror = true
      }
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      this.$validator.validate().then(valid => {
        if (valid && this.toolsErrors.length === 0 && this.imageError === false) {
          if (this.editproject) {
            MyProjectsService.updateportfolio(this.currentproject.key, project_obj, auth)
                .then(resp => {
                  this.visible = false
                  this.FetchPortfolio()
                })

          } else {
            MyProjectsService.newportfolio(project_obj, auth)
                .then(() => {
                  this.visible = false
                  this.FetchPortfolio()

                })
          }

        } else {
          return 'nop'
        }
      })


    },
    ResetFields(data) {

      this.currentproject = null
      this.myprojects.forEach(project => {
        if (project.id === data.id) {
          const index = this.myprojects.indexOf(project);
          if (index > -1) {
            this.myprojects.splice(index, 1);
          }
          this.myprojects.push(data)
        }
      })
      this.ComputeProjects()

    },
    EditProject(project) {
      this.visible = true;
      this.rolevalues = []
      this.tags = []
      this.tagsDesign = []
      this.tagsOps = []
      this.tagsProduct = []
      this.fileList = []
      this.start_month = ''
      this.end_month = ''
      this.editproject = true
      this.card_title = 'Edit Project'
      this.currentproject = project
      this.title = project.title
      this.description = project.description
      this.project_demo = project.demo
      this.project_repo = project.repo
      if (project.end) {
        this.Inprogress = false
        this.end_month = project.end
      }
      this.start_month = project.start
      if (project.personal_company) {
        this.projectType = 1
        this.company_name = project.company_name
        this.company_url = project.company_url
        this.company_location = project.company_location

      } else {
        this.projectType = 2
      }
      const keys = Object.keys(project.fullRole);
      keys.forEach((key) => {

        if (key === 'Developer') {
          this.rolevalues.push('Developer')
          this.tags = project.fullRole[key]
        }
        if (key === 'Designer') {
          this.rolevalues.push('Designer')
          this.tagsDesign = project.fullRole[key]

        }
        if (key === 'Devops') {
          this.rolevalues.push('Devops')
          this.tagsOps = project.fullRole[key]

        }
        if (key === 'Product_Manager') {
          this.rolevalues.push('Product_Manager')
          this.tagsProduct = project.fullRole[key]

        }
      });
      this.fileList = project.images


    },
    DeleteProject(portfolio_id) {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }

      UsersService.deleteportfolio(portfolio_id, auth)
          .then(() => {

                this.visible = false
                this.myprojects = []
                this.projects = []
                this.FetchPortfolio()

              }
          )


    },

    showModal() {
      this.visible = true;
      this.editproject = false
      this.rolevalues = []
      this.tags = []
      this.tagsDesign = []
      this.tagsOps = []
      this.tagsProduct = []
      this.fileList = []
      this.start_month = ''
      this.end_month = ''
      this.title = ''
      this.description = ''
      this.project_demo = ''
      this.project_repo = ''
      this.card_title = 'New Project'
    },
    handleChange(checked) {
      return checked

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

    handleCloseDesign(removedTag) {
      const tags = this.tagsDesign.filter(tag => tag !== removedTag);
      this.tagsDesign = tags;
    },
    showInputDesign() {
      this.inputVisibleDesign = true;
      this.$nextTick(function () {
        this.$refs.input.focus();
      });
    },
    handleInputChangeDesign(e) {
      this.inputValueDesign = e.target.value;
    },
    handleInputConfirmDesign() {
      const inputValue = this.inputValueDesign;
      let tagsDesign = this.tagsDesign;
      if (inputValue && tagsDesign.indexOf(inputValue) === -1) {
        tagsDesign = [...tagsDesign, inputValue];
      }
      Object.assign(this, {
        tagsDesign,
        inputVisibleDesign: false,
        inputValueDesign: '',
      });
    },

    handleCloseProduct(removedTag) {
      const tags = this.tagsProduct.filter(tag => tag !== removedTag);
      this.tagsProduct = tags;
    },
    showInputProduct() {
      this.inputVisibleProduct = true;
      this.$nextTick(function () {
        this.$refs.input.focus();
      });
    },
    handleInputChangeProduct(e) {
      this.inputValueProduct = e.target.value;
    },
    handleInputConfirmProduct() {
      const inputValue = this.inputValueProduct;
      let tagsProduct = this.tagsProduct;
      if (inputValue && tagsProduct.indexOf(inputValue) === -1) {
        tagsProduct = [...tagsProduct, inputValue];
      }
      Object.assign(this, {
        tagsProduct,
        inputVisibleProduct: false,
        inputValueProduct: '',
      });
    },

    handleCloseOps(removedTag) {
      const tags = this.tagsOps.filter(tag => tag !== removedTag);
      this.tagsOps = tags;
    },
    showInputOps() {
      this.inputVisiblesOps = true;
      this.$nextTick(function () {
        this.$refs.input.focus();
      });
    },
    handleInputChangeOps(e) {
      this.inputValueOps = e.target.value;
    },
    handleInputConfirmOps() {
      const inputValue = this.inputValueOps;
      let tagsOps = this.tagsOps;
      if (inputValue && tagsOps.indexOf(inputValue) === -1) {
        tagsOps = [...tagsOps, inputValue];
      }
      Object.assign(this, {
        tagsOps,
        inputVisiblesOps: false,
        inputValueOps: '',
      });
    },
    handleChangeCompanyLocation(value) {
      for (const key in this.countrieslist) {
        if (value === this.countrieslist[key]) {
          this.company_location = key

        }

      }

    },
    filterOption(input, option) {
      return (
          option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
      );
    },
    onChange(checkedValues) {
      return checkedValues
    },


  },

}
</script>

<style scoped>
.nine {

}

.errorMessage {
  color: #f5222d;
  font-family: sofia_prolight
}

.card {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;

  border-radius: .25rem;
  border: 0;
  -webkit-box-shadow: 0 10px 20px 0 rgba(0, 0, 0, .05);
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, .05)
}

.card-img-top {
  width: 100%;
  height: 8vw;
  object-fit: cover;
}

.norole {
  width: 100%;
  height: 8vw;

}

.card-img-topsmall {
  width: 100%;
  height: 5vw;
  object-fit: cover;
}

.equaltable {


}
.container{
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
.equalcards {

}
.gallery {
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: 200px;
  grid-auto-flow: dense;
}
.wide {
  grid-column: span 2;
}

.tall {
  grid-row: span 2;
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
