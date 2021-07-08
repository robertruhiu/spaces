<template>
<div>
  <a-skeleton active v-if="dataload" />


  <a-row :gutter="16" v-else  class="container">
    <a-col span="24" v-for="project in projects" v-bind:key="project" class="equaltable">
      <a-card class="card-3 " v-if="project.role" style="margin-bottom: 1rem">
        <a-row>
          <a-col :span="16">
            <span style="font-family: sofia_probold"> {{ project.title |capitalize }}</span>
            <br>
            {{ project.start  | moment }}
            <span v-if="project.end"> to {{ project.end  | moment }}</span>
            <br>



            <p>Role in Project</p>
            <span v-for="role in project.role" v-bind:key="role">
                    <a-tag style="margin-bottom: 1rem">
                    {{ role }}
                  </a-tag>
                  </span>



            <p>Tools used </p>
            <span v-for="tool in project.tools" v-bind:key="tool">
                    <a-tag color="#1F81CE" style="margin-bottom: 1rem">
                    {{ tool }}
                  </a-tag>
                  </span>



            <p>{{ project.description |truncate }}.</p>

          </a-col>
          <a-col :span="8">
            <img
                class="card-img-top"
                style="border-radius: 2%"

                alt="example"
                :src="`https://res.cloudinary.com/dwtvwjhn3/raw/upload/${project.images[0]}`"


            />
          </a-col>
        </a-row>




      </a-card>


    </a-col>






  </a-row>
</div>
</template>

<script>

import moment from "moment";
import MyProjectsService from "@/services/UsersService";
let countries = require("@/store/location.json")
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
  name: "projects",
  data() {
    return {
      dataload:false,
      myprojects: [],
      projects: [],



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
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
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
  }
}
</script>

<style scoped>
.nine {

}

.errorMessage {
  color: #f5222d;
  font-family: sofia_prolight
}
.card-3 {
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
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
