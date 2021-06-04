<template>
  <div>
    <div>
      <a-row :gutter="16" style="margin-left: 0;margin-right: 0">

        <a-col :xs="{span: 24, offset: 0}" :sm="{span: 24, offset: 0 }"
               :md="{span: 24, offset: 0 }"
               :lg="{span: 24, offset: 0 }" :xl="{span: 24,offset: 0 }">
          <div v-if="loading" class="loading" style="text-align: center;">
            <a-row :gutter="16" style="margin-left: 0;margin-right: 0">


              <a-col :xs="{span: 24 }" :sm="{span: 24 }" :md="{span: 24 }"
                     :lg="{span: 24 }" :xl="{span: 24 }">

                <a-skeleton active/>
                <a-skeleton active/>
                <a-skeleton active/>
              </a-col>
            </a-row>
          </div>
          <div v-else>
            <a-row :gutter="16" style="margin-left: 0;margin-right: 0">

              <a-col :xs="{span: 24 }" :sm="{span: 24 }" :md="{span: 24 }"
                     :lg="{span: 24 }" :xl="{span: 24 }">
                <div class="hero" style="background-color: #FAFAFA">
                  <a-row :gutter="16">

                    <a-col span="4">
                      <span style="font-weight: bold">Candidate Name</span>
                    </a-col>


                    <a-col span="4">
                      Skills


                    </a-col>

                    <a-col span="4">
                      View profile

                    </a-col>
                    <a-col span="4">
                      Test assigned

                    </a-col>
                    <a-col span="4">
                      Test status

                    </a-col>
                    <a-col span="4">
                      Actions

                    </a-col>
                  </a-row>


                </div>


                <a-list item-layout="horizontal" :data-source="testapplicants"
                        :pagination="pagination"
                        style="height: 70vh;overflow: scroll;margin-bottom: 1rem">
                  <div slot="footer"><b>Your ideal developer is one click away </b></div>
                  <a-list-item slot="renderItem" slot-scope="item">


                    <div class="hero" style="width: 100%">
                      <a-row :gutter="16">


                        <a-col span="4">
                          <span
                              style="font-weight: bold">{{ item.candidate.user.first_name }} {{ item.candidate.user.last_name }} </span>
                        </a-col>


                        <a-col span="4">
                          <span v-if="item.candidate.skills">
                            <span style="" v-for="skill in item.candidate.skills.split(',').slice(0, 5)"
                                  v-bind:key="skill.id">
                              <a-tag color="#F0F6FD" style="color:#007BFF;">{{ skill }}</a-tag>
                            </span>
                          </span>


                        </a-col>


                        <a-col span="4">
                          <router-link
                              style="text-decoration: none"
                              :to="{name:'candidateprofile',params:{applicationId: item.id}}"
                              target='_blank'>
                            <a-button
                                :size="small">
                              view profile
                            </a-button>
                          </router-link>

                        </a-col>
                        <a-col span="4">

                          <router-link v-if="item.project"
                                       style="text-decoration: none"
                                       :to="{name:'pickedprojectdetails',params:{projectId:item.project.id,applicationId: item.id}}"
                                       target='_blank'>
                            {{ item.project.name }}
                          </router-link>
                          <a-button :size="small"
                                    style="background-color: #9c27b0;color: white"
                                    v-else
                                    @click="showModal(item.candidate,item.id)">
                            <a-icon type="codepen"/>
                            Assign test
                          </a-button>


                        </a-col>
                        <a-col span="4">

                          <span v-if="item.test_stage">
                            <span v-if="item.report">
                              <div v-if="item.report.report_ready">
                                <a @click="navigateTo({name:'report',params:{candidateId: item.profile,projectId:item.project,reportId:item.report.id}})">
                                  report
                                </a>
                              </div>
                              <span v-else>
                                <span v-if="item.test_stage === 'complete'">
                                  report generating
                                </span>
                                <span v-else>
                                  {{record.test_stage}}
                                </span>
                              </span>
                            </span>
                          </span>
                          <span v-else style="margin-left: 20%">
                            --
                          </span>

                        </a-col>
                        <a-col span="4">
                          <a-dropdown-button @click="Move(item,'interview')">
                            <a-icon type="book" />Interview
                            <a-menu slot="overlay" @click="rejectionmodalOpen(item)">
                              <a-menu-item key="1">
                                <a-icon type="close"/>
                                reject
                              </a-menu-item>

                            </a-menu>
                          </a-dropdown-button>

                        </a-col>
                      </a-row>


                    </div>
                  </a-list-item>
                </a-list>


              </a-col>
            </a-row>
          </div>

        </a-col>
      </a-row>
      <!---assign project--->
      <a-modal
          title="Project assignments "
          v-model="visible"
          style="top: 60px;"
          :footer="null"


      >
        <p style="text-align: center;">Would you like to get a project recommendation or pick a
          project?</p>
        <a-row :gutter="16">
          <a-col :span="12">
            <a @click="navigateTo({name:'projectlist',params:{jobId:jobId,applicationId:application_id}})">
              <div style="border: 1px solid #e8e8e8;padding: 2%;">
                <img style="margin-left: 25%;width: 50%;margin-right: 25%"
                     src="@/assets/images/pick.png">
                <p style="text-align: center">Pick one by myself</p>

              </div>

            </a>
          </a-col>
          <a-col :span="12">
            <a href="mailto:info@codeln.com" target="_top">
              <div style="border: 1px solid #e8e8e8;padding: 2%;">
                <img style="margin-left: 25%;width: 50%;margin-right: 25%;"
                     src="@/assets/images/custom.png">
                <p style="text-align: center">Custom test</p>


              </div>

            </a>
          </a-col>
        </a-row>


      </a-modal>
      <!-----reject candidate reason modal----->
      <a-modal title="Rejection reasons" v-model="rejectionmodal" :footer="null" >
        <a-checkbox-group @change="onPickReason">
          <a-row>
            <div v-for="reason in reasonslist" v-bind:key="reason">
              <a-col :span="24">
                <a-checkbox :value="reason">{{reason}}</a-checkbox>
              </a-col>
            </div>


          </a-row>

        </a-checkbox-group>
        <div>


          <p>got a specific reason</p>
          <a-textarea v-model="reasoncomment"

                      :autoSize="{ minRows: 2, maxRows: 6 }"
          />

        </div>

        <a-button style="margin-top: 1rem" @click="Reject(applicationactive)" type="primary">submit</a-button>




      </a-modal>
    </div>
  </div>
</template>

<script>
import Marketplace from "@/services/Marketplace";
import moment from "moment";

export default {
  name: "test",
  data() {
    return {
      currentUserProfile: null,
      applicants: null,
      loading: false,
      pagination: {
        pageSize: 20,
        position:'both',
      },
      jobId: '',
      testapplicants: [],
      visible: false,
      candidate:null,
      application_id:null,
      reasonslist: ['Unaffordable salary expectations', 'Sloppy application', 'Wrong skill set', 'Unsuitable personality', 'Bad fit',
        'Not on time', 'Sloppy appearance', 'Lack of passion', 'Poor follow-up questions', 'Not responsive', 'Co-workers don’t approve', 'not enough experience'],
      reasonspicked: [],
      reasoncomment: '',
      rejectionmodal:false,
      applicationactive: {},


    }
  },
  mounted() {
    this.jobId = this.$store.state.route.params.jobId
    this.testapplicants = this.$store.state.test

  },
  filters: {
    moment: function (date) {
      return moment(date).format('MMMM Do YYYY');
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    },


    showModal(candidate, application_id) {
      this.visible = true
      this.candidate = candidate
      this.application_id = application_id

    },
    Move(item){
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      const index = this.testapplicants.indexOf(item);
      if (index > -1) {
        this.testapplicants.splice(index, 1);
      }
      this.$store.dispatch('settest', this.testapplicants)
      this.$store.state.interview.push(item)
      this.$store.state.leads.forEach(oneapplicant=>{
        if(oneapplicant.id === item.id){
          oneapplicant.stage ='test'
        }
      })
      this.$store.state.leads.forEach(oneapplicant=>{
        if(oneapplicant.id === item.id){
          oneapplicant.stage ='interview'
        }
      })
      Marketplace.pickreject(item.id, {stage: 'interview'}, auth)

    },
    rejectionmodalOpen(item){
      this.rejectionmodal = true
      this.applicationactive = item
    },
    onPickReason(checkedValues) {
      this.reasonspicked = checkedValues

    },
    Reject(profile){
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      };
      let rejectionreasons = ''
      let rejectionstatement =''
      if(this.reasoncomment){
        rejectionstatement = this.reasoncomment
        profile.rejectioncomment =this.reasoncomment
      }
      if(this.reasonspicked){
        rejectionreasons = this.reasonspicked.join(',')
        profile.rejectionreason = this.reasonspicked.join(',')
      }

      Marketplace.pickreject(profile.id, {
        stage: 'rejected',
        selected: false,
        rejectioncomment:rejectionstatement,
        rejectionreason:rejectionreasons

      }, auth)
      .then(()=>{
        this.rejectionmodal = false
        const index = this.testapplicants.indexOf(profile);
        if (index > -1) {
          this.testapplicants.splice(index, 1);
        }
        this.$store.dispatch('settest', this.testapplicants)
        this.$store.state.leads.forEach(lead =>{
          if(lead.id === profile.id){
            const indexlead = this.$store.state.leads.indexOf(lead);
            if (indexlead > -1) {
                this.$store.state.leads.splice(index, 1);
                }
          }
        })
        this.$store.state.rejected.push(profile)

      })

    }

  }
}
</script>

<style scoped>
#components-back-top-demo-custom .ant-back-top {
  bottom: 100px;
}

#components-back-top-demo-custom .ant-back-top-inner {
  height: 40px;
  width: 40px;
  line-height: 40px;
  border-radius: 4px;
  background-color: #1088e9;
  color: #fff;
  text-align: center;
  font-size: 20px;
}

.hellocard {
  height: 8rem;
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;
  background: white;
  border-radius: 0;
  margin-bottom: 1rem;

}


.hero {
  padding: 0.5% 1%;
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;
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

