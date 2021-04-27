<template>
<div>
  <div style="">
    <div v-if="fetchjobs">
      <a-row style="color: black">
        <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }" :md="{span: 20, offset: 2 }"
               :lg="{span: 18, offset: 4 }" :xl="{span: 18, offset: 4 }">

          <a-skeleton active />

        </a-col>
      </a-row>
    </div>
    <div v-else>
      <div style="padding: 2% 5%" v-if="bidstageprojects.length>0">


            <div style=" ">

              <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="Projects">

                <a-list-item slot="renderItem" key="item.title" slot-scope="item" class="shadowsmall" style="background-color: #F1F3F9">

                  <template slot="actions">
                        <span>
                                <a-icon type="calendar" style="margin-right: 8px"/>
                                {{ item.time }} days
                              </span>
                    <span>
                                <a-icon type="banks" style="margin-right: 8px"/>
                                {{ item.budget }}$ budget
                              </span>
                    <span>
                                <a-icon type="banks" style="margin-right: 8px"/>
                          <a-tag v-for="tag in item.tools" color="blue"
                                 :key="tag">
                            {{ tag }}
                          </a-tag>

                              </span>
                    <a-space>

                          <span v-if="$store.state.user_object">
                          <span v-if="item.bid">
                            <a-tag color="green"><a-icon type="file-done"/>
                              bid placed
                            </a-tag>
                          </span>
                          <span v-else>
                                  <a-button type="primary" size="small"
                                            v-if="$store.state.user_object.user_type==='developer'"
                                            @click="Apply">
                              Apply
                            </a-button>

                                </span>

                        </span>
                      <span v-else>
                        <a-button type="primary" size="small"
                                  @click="navigateTo({name:'login'})">Login to apply</a-button>

                      </span>

                    </a-space>



                  </template>
                  <p style="font-family: sofia_probold"> {{ item.title }}</p>
                  <a-collapse >
                    <a-collapse-panel key="1" header="Project description.">
                      <markdown>{{ item.description }}</markdown>
                    </a-collapse-panel>
                  </a-collapse>


                </a-list-item>
              </a-list>


            </div>




      </div>
      <a-result status="404" title="" sub-title="Sorry, no new gigs
       available at the moment." v-else>

      </a-result>
    </div>
  </div>
  <a-modal v-model="applymodal" title="How to join and start working on Remote Codeln" :footer="null">
    <p v-if="currentUserProfile.remote_entry && !currentUserProfile.remote_verified" style="text-align: center">
      <a-icon type="hourglass" spin theme="twoTone" /> profile under verification
    </p>
    <div style="text-align: center">
      <a href="https://remote.codeln.com/Jobs" target="_blank"  >
        <a-button type="primary" v-if="currentUserProfile.remote_entry && currentUserProfile.remote_verified" >
          Go to Remote Codeln
        </a-button>
      </a>
    </div>
    <a-timeline style="padding: 1%" v-if="currentUserProfile.remote_entry === false">

      <a-timeline-item>Opt into remote codeln  <a-switch defaultChecked @change='RemoteEntry' v-model="currentUserProfile.remote_entry"/></a-timeline-item>
      <a-timeline-item>Your profile goes under review</a-timeline-item>
      <a-timeline-item>Successful profile can now apply for gigs</a-timeline-item>
    </a-timeline>

  </a-modal>
</div>
</template>

<script>
import Project from "@/services/Projects";
import markdown from 'vue-markdown'
import UsersService from "@/services/UsersService";
class BidProjects {
  constructor(id, title, description, budget, time, tools, bid) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.budget = budget;
    this.time = time;
    this.tools = tools;
    this.bid = bid


  }
}
export default {
name: "Remotejobs",
  data() {
    return {

      pagination: {
        pageSize: 4,
      },
      visible: false,
      project: {},
      tags: [],
      bidstageprojects: [],
      loading: false,
      bids: [],
      fetchjobs:false,
      applymodal:false,
      currentUserProfile:{}

    }
  },
  components: {
    markdown


  },

  async mounted() {

    this.FetchProjects()
    if(this.$store.state.user_object){
      this.currentUserProfile = this.$store.state.user_object
    }


  },
  computed: {
    Projects() {
      let projects = []

      this.bidstageprojects.forEach(project => {
        let bid = false
        this.bids.forEach(bidplaced => {
          if (project.id === bidplaced.project.id) {
            bid = true
          }
        })
        let timestring = project.timeline.split(" ")

        let id = project.id
        let title = project.title
        let description = project.description
        let budget = project.budget
        let time = Number(timestring[0])
        let tools = project.tools.split(',')


        let oneproject = new BidProjects(id, title, description, budget, time, tools, bid)


        projects.push(oneproject)

      })


      return projects

    },

  },


  methods: {

    FetchProjects() {
      this.bidstageprojects = []
      this.fetchjobs = true
      Project.bidstageprojects()
          .then(resp => {

            resp.data.forEach(project => {
              if (project.verified && project.stage === 'bid') {
                this.bidstageprojects.push(project)
              }
            })
            this.fetchjobs = false


          })


    },
    Apply(){
      this.applymodal = true
    },
    RemoteEntry() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }


      UsersService.updatepatch(this.$store.state.user.pk, {remote_entry: this.currentUserProfile.remote_entry}, auth)
          .then(resp => {

            return resp


          })
          .catch(error => {

            return error


          });

    },
    navigateTo(route) {
      this.$router.push(route)
    },


  }
}
</script>

<style scoped>
.shadowsmall {

  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;
  background: white;
  border-radius: 0;
  border: 1px solid #e8e8e8;


  padding: 2%;
  margin-bottom: 1rem;
}
</style>
