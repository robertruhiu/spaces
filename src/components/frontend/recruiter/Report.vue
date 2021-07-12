<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <RecruiterSider/>
    <a-layout-content :style="{backgroundColor:'#FAFBFF'}">
      <a-card class="hellocard" :bordered="false">

        <a-row style="color: white">
          <a-col span="12">
            <a-breadcrumb>
              <a-breadcrumb-item><a @click="$router.push('/recruiter')" style="color: white">Home</a>
              </a-breadcrumb-item>

              <a-breadcrumb-item style="color: white">Candidate report</a-breadcrumb-item>


            </a-breadcrumb>
            <span style="font-size: 1.7rem;font-family: sofia_prosemibold;margin-bottom: 0;color: white">
                {{ currentUser.first_name |capitalize }} {{ currentUser.last_name |capitalize }}</span>


          </a-col>
          <a-col :xs="{span: 12, offset: 0 }" :sm="{span: 12, offset: 0 }"
                 :md="{span: 12, offset: 0 }"
                 :lg="{span: 8, offset: 0 }" :xl="{span: 6,offset: 0 }">
            <p style="color: white;font-size: 15px;font-weight: bold;">
              Overall Project Mean Score : {{ report.score }}%

            </p>

            <a :href="report.code_base" target="_blank">
              <a-button type="primary" icon="github">Code Base
              </a-button>
            </a>


          </a-col>


        </a-row>


      </a-card>

      <div style="padding: 1%;background-color: #FAFBFF">
        <a-tabs defaultActiveKey="1"
                class="cardshadow" style="padding: 1%">
          <a-tab-pane key="1">
                    <span slot="tab">
                        <a-icon type="file-done"/>
                        Report Overview
                    </span>
            <div style="height: 70vh;overflow: scroll;margin-bottom: 1rem">
              <div>
                <h3 style="font-family: sofia_probold;text-decoration: underline;text-decoration-color: #1F81CE">Project
                  Name : {{ project.name }}es</h3>
                <p>{{ project.description }}</p>
                <h3 style="font-family: sofia_promedium;text-decoration: underline;text-decoration-color: #1F81CE">Tech
                  Stack Used</h3>
                <p>{{ report.skill }}</p>


                <div>

                  <h3 style="font-family: sofia_promedium;text-decoration: underline;text-decoration-color: #1F81CE">
                    Project deliverables</h3>
                  <a-list size="small"
                          itemLayout="horizontal"
                          style="padding-right: 3%"
                  >

                    <div v-for="(value, name) in report.requirements" v-bind:key="name">
                      <a-list-item slot="renderItem">
                        <a-list-item-meta
                            description=""
                        >
                          <p slot="title">{{ name }}</p>

                        </a-list-item-meta>
                        <div>
                          <a-tag color="#87d068" v-if="value === 'success'">complete</a-tag>
                          <a-tag color="#f50" v-else>{{ value }}</a-tag>
                        </div>

                      </a-list-item>
                      <br>


                    </div>
                  </a-list>

                </div>
                <div>
                  <h3 style="font-family: sofia_promedium;text-decoration: underline;text-decoration-color: #1F81CE">Key
                    Competencies</h3>

                  <a-card>
                    <a-row :gutter="8">

                      <div v-for="(value, name) in report.competency" v-bind:key="name">

                        <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                               :md="{span: 6, offset: 0 }"
                               :lg="{span: 6, offset: 0 }" :xl="{span: 6,offset: 0 }" v-if="name === 'deliverables'">
                          <div style="text-align: center">
                            <p>Deliverables</p>
                            <img style="width: 20%" src="../../../assets/images/delivery.svg">
                            <p>{{ value }}</p>
                            <p>Metric used: Deliverables</p>
                          </div>

                        </a-col>
                        <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                               :md="{span: 6, offset: 0 }"
                               :lg="{span: 6, offset: 0 }" :xl="{span: 6,offset: 0 }"
                               v-if="name === 'code_readability'">
                          <div style="text-align: center">
                            <p>Code quality</p>
                            <img style="width: 20%" src="../../../assets/images/laptop.svg">
                            <p>{{ value }}</p>
                            <p>Metric used : Quality gates</p>
                          </div>

                        </a-col>
                        <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                               :md="{span: 6, offset: 0 }"
                               :lg="{span: 6, offset: 0 }" :xl="{span: 6,offset: 0 }" v-if="name === 'error_handling'">
                          <div style="text-align: center">
                            <p>Error handling</p>
                            <img style="width: 20%" src="../../../assets/images/404.svg">
                            <p>{{ value }}</p>
                            <p>Metric used: Errors</p>
                          </div>

                        </a-col>
                        <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                               :md="{span: 6, offset: 0 }"
                               :lg="{span: 6, offset: 0 }" :xl="{span: 6,offset: 0 }"
                               v-if="name === 'project_security'">
                          <div style="text-align: center">
                            <p>Project security</p>
                            <img style="width: 20%" src="../../../assets/images/security.svg">
                            <p>{{ value }}</p>
                            <p>Metric used: Vulnerabilities</p>
                          </div>

                        </a-col>
                      </div>

                    </a-row>
                  </a-card>
                </div>
              </div>
            </div>
          </a-tab-pane>
          <a-tab-pane key="2" forceRender>
                        <span slot="tab">
                        <a-icon type="area-chart"/>
                        Grading criteria
                    </span>

            <div style="padding: 1%;text-align: center;height: 70vh;overflow: scroll;margin-bottom: 1rem">
              <a-row :gutter="8">
                <div v-for="(value, name) in report.grading" v-bind:key="name">
                  <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                         :md="{span: 6, offset: 0 }"
                         :lg="{span: 6, offset: 0 }" :xl="{span: 6,offset: 0 }" style="margin-bottom: 1%">
                    <a-card>
                      <span slot="title">{{ name }}</span>
                      <div class="content" v-if="name === 'Tests Passed'">
                        (Number of Unit Tests passed)
                      </div>
                      <div class="content" v-else-if="name === 'Tests Failed'">
                        (Number of Unit Tests failed)
                      </div>
                      <div class="content" v-else-if="name === 'Warnings'">
                        (Total number of Warnings)
                      </div>
                      <div class="content" v-else-if="name === 'Lines of Code'">
                        (Total LOC)
                      </div>
                      <div class="content" v-else-if="name === 'Duplications'">
                        (Density of Duplications)
                      </div>
                      <div class="content" v-else-if="name === 'Classes'">
                        (Total number of Classes)
                      </div>
                      <div class="content" v-else-if="name === 'Comments'">
                        (Comment Line Density)
                      </div>
                      <div class="content" v-else-if="name === 'Errors'">
                        (Total number of Errors)
                      </div>
                      <div class="content" v-else-if="name === 'Dependencies'">
                        (Project Dependencies)
                      </div>
                      <div class="content" v-else-if="name === 'Runtime'">
                        (Project Run Time in seconds)
                      </div>
                      <div class="content" v-else-if="name === 'Quality Gates'">
                        (Code Quality Rating)
                      </div>
                      <div class="content" v-else-if="name === 'Technical Debt'">
                        (Cost of maintainability )
                      </div>
                      <div class="content">
                        <h2><strong>{{ value }}</strong></h2>
                      </div>
                    </a-card>

                  </a-col>
                </div>
              </a-row>
            </div>
          </a-tab-pane>
        </a-tabs>
      </div>
    </a-layout-content>
  </a-layout>
</template>

<script>

import ACol from "ant-design-vue/es/grid/Col";

import UsersService from '@/services/UsersService'
import RecruiterSider from "./layout/RecruiterSider";
import Projectsservice from '@/services/Projects'
import Marketplace from '@/services/Marketplace'

export default {

  name: "DeveloperProjectReport",
  data() {
    return {
      currentUser: {},
      report: {},
      project: {},
      playerVars: {
        autoplay: 1
      },
      Requirementslist: [],


    }
  },
  components: {
    ACol,
    RecruiterSider,

  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  async mounted() {
    const auth = {
      headers: {Authorization: 'JWT ' + this.$store.state.token}
    };
    if (this.$store.state.user.pk) {

      const projectId = this.$store.state.route.params.projectId;
      const reportId = this.$store.state.route.params.reportId;
      this.project = (await Projectsservice.projectdetails(projectId, auth)).data
      this.currentUser = (await UsersService.retrieveuser(this.$route.params.candidateId, auth)).data

      this.report = (await Marketplace.getreport(reportId, auth)).data
      for (let i = 0; i < this.report.requirements.length; i++) {
        this.Requirementslist.push(this.report.requirements[i])
      }

    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    }
    ,
    callback(key) {
      console.log(key);
    },
  },
}
</script>

<style scoped>
.reportdiv {
  background-color: white;
  padding: 24px;
}

.hellocard {
  height: 8rem;
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;
  background: #004EC7;
  border-radius: 0;

  color: white;

}

.cardshadow {

  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;

  background: white;
  border-radius: 0;

}

</style>
