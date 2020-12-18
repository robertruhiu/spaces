<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh;background-color:#F8FAFB ">
    <RecruiterSider/>


    <a-layout :style="{backgroundColor:'white' }">


      <a-layout-content>

        <div :style="{  background: '#fff', minHeight: '75vh',
                 }">
          <a-card class="hellocard" :bordered="false">

            <a-row style="color: white">
              <a-col span="12">
                <a-breadcrumb>
                  <a-breadcrumb-item><a @click="$router.push('/recruiter')" style="color: white">Home</a>
                  </a-breadcrumb-item>
                  <a-breadcrumb-item><a @click="$router.push('/managejobs')" style="color: white">Manage Jobs</a>
                  </a-breadcrumb-item>
                  <a-breadcrumb-item><a @click="$router.push({name:'job',params: { jobId: job.id }})" style="color: white">{{job.title}}</a>
                  </a-breadcrumb-item>
                  <a-breadcrumb-item style="color: white">Test assignment</a-breadcrumb-item>


                </a-breadcrumb>
                <span style="font-size: 1.7rem;font-family: sofia_prosemibold;margin-bottom: 0;color: white">
                {{ project.name }}</span>


              </a-col>



            </a-row>


          </a-card>
          <div style="padding: 1% 2%">
            <a-row gutter="8">
              <a-col :xs="{span: 24 }" :sm="{span: 24 }" :md="{span: 24 }"
                     :lg="{span: 24 }" :xl="{span: 14 }">


                <div v-if="project.hasvideo === false">
                  <div v-if="project.projectimage1 "><img style="width: 100%"
                                                          :src="project.projectimage1"/></div>

                </div>
                <div v-if="project.hasvideo">
                  <youtube :video-id="project.projectimage2" :player-vars="playerVars"></youtube>
                </div>
                <div style="border:1px solid #e8e8e8;padding: 2%;margin-top: 2%;">
                  <h4><strong>Project name:</strong> {{ project.name }}</h4>
                  <p>{{ project.description }}</p>

                </div>


              </a-col>
              <a-col :xs="{span: 24 }" :sm="{span: 24 }" :md="{span: 24 }"
                     :lg="{span: 24 }" :xl="{span: 10 }" style="padding: 0 1%;">
                <div style="border:1px solid #e8e8e8;;padding: 3%;">
                  <p style="margin-left: 5%"><strong>Requirements</strong></p>
                  <ol>
                    <li v-if="project.requirement1">{{ project.requirement1 }}</li>
                    <li v-if="project.requirement2">{{ project.requirement2 }}</li>
                    <li v-if="project.requirement3">{{ project.requirement3 }}</li>
                    <li v-if="project.requirement4">{{ project.requirement4 }}</li>
                    <li v-if="project.requirement5">{{ project.requirement5 }}</li>
                    <li v-if="project.requirement6">{{ project.requirement6 }}</li>
                    <li v-if="project.requirement7">{{ project.requirement7 }}</li>
                    <li v-if="project.requirement8">{{ project.requirement8 }}</li>
                    <li v-if="project.requirement9">{{ project.requirement9 }}</li>
                    <li v-if="project.requirement10"><p>{{ project.requirement10 }}</p>></li>


                  </ol>
                  <div style="margin-left: 5%" v-if="application.project === null">
                    <a-button type="primary" @click="AssignProject(ApplicationId,project.id,job.id)">
                      Assign
                      project to {{ candidate.username }}
                    </a-button>


                  </div>

                </div>


              </a-col>
            </a-row>
          </div>




        </div>


      </a-layout-content>
    </a-layout>
  </a-layout>

</template>

<script>


import RecruiterSider from "../layout/RecruiterSider";
import Projectsservice from '@/services/Projects'
import Marketplace from '@/services/Marketplace'
import ACol from "ant-design-vue/es/grid/Col";


export default {
  name: "projectdetails",
  data() {
    return {
      project: null,
      job: {},
      playerVars: {
        autoplay: 1
      },
      candidate: {},
      ApplicationId: null,
      application: {},
      project_id: null,


    }
  },
  components: {
    ACol,
    RecruiterSider,
  },
  async mounted() {
    this.ApplicationId = this.$store.state.route.params.applicationId
    this.currentApplication()





  },
  methods: {
    currentApplication() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      };
      Marketplace.retrieveapplication(this.ApplicationId, auth)
          .then(resp => {
            this.application = resp.data
            this.job = this.application.job
            this.candidate = this.application.candidate
            this.fetchproject()


          })
    },
    fetchproject(){
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      };
      if (this.application.project) {
        this.project = this.application.project




      } else {
        Projectsservice.projects(this.application.job.id, auth)
            .then(resp => {
              this.project = resp.data[0]



            })
            .catch(error => {
              this.$router.push({
                name: 'projectlist',
                params: {applicationId: this.ApplicationId}
              });
              return error
            })


      }

    },
    async AssignProject(application, project, job,) {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      };

      Marketplace.pickreject(application, {test_stage: 'invite_sent', project: project}, auth)
          .then(resp => {
                Marketplace.projectemail(resp.data.id, auth)
                    .then(
                        this.$router.push({
                          name: 'job',
                          params: {jobId: job}
                        })
                    )

              }
          )
          .catch()


    }
  }
}
</script>

<style scoped>
.hellocard {
  height: 8rem;
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;
  background: #004EC7;
  border-radius: 0;
  margin-bottom: 1rem;
  color: white;

}
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 50vh;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
</style>
