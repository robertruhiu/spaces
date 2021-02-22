<template>
  <div>
    <div >
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

                    <a-col span="3">
                      <span style="font-weight: bold">Name</span>
                    </a-col>
                    <a-col span="2">
                      <span style="font-weight: bold">Country</span>
                    </a-col>
                    <a-col span="2">
                      <span style="font-weight: bold">Stage</span>
                    </a-col>

                    <a-col span="4">
                      Skills


                    </a-col>
                    <a-col span="2">
                      View profile

                    </a-col>
                    <a-col span="2">
                      Application date

                    </a-col>
                    <a-col span="3">
                      Application Relevance
                    </a-col>
                    <a-col span="2">
                      Notes


                    </a-col>
                    <a-col span="4">
                      Move to

                    </a-col>
                  </a-row>


                </div>


                <a-list item-layout="horizontal" :data-source="leads"
                        :pagination="pagination"
                         style="height: 70vh;overflow-y: scroll;margin-bottom: 1rem">
                  <div slot="footer"><b>Your ideal developer is one click away </b></div>
                  <a-list-item slot="renderItem" slot-scope="item" >

                    <div class="hero" style="width: 100%;background-color: white">
                      <a-row :gutter="16">

                        <a-col span="3">
                          <span style="font-weight: bold">{{ item.candidate.user.first_name}} {{ item.candidate.user.last_name}} </span>
                        </a-col>
                        <a-col span="2">
                          <span style="font-weight: bold">{{ item.candidate.country}}  </span>
                        </a-col>
                        <a-col span="2">
                          <span style="font-weight: bold">{{ item.stage}}  </span>
                        </a-col>

                        <a-col span="4">
                          <span v-if="item.candidate.skills">
                            <span style="" v-for="skill in item.candidate.skills.split(',').slice(0, 4)" v-bind:key="skill.id">
                              <a-tag color="#F0F6FD" style="color:#007BFF;">{{ skill }}</a-tag>
                            </span>
                          </span>


                        </a-col>

                        <a-col span="2">
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
                        <a-col span="2">
                          {{item.created | moment}}


                        </a-col>

                        <a-col span="3">
                          <a-rate v-model="item.relevance" @change="Relevance(item)" :tooltips="desc" />


                        </a-col>
                        <a-col span="2">
                          <a @click="OpenNotes(item)">
                            create/edit notes
                          </a>


                        </a-col>

                        <a-col span="4">
                          <a-dropdown-button >
                            move to
                            <a-menu slot="overlay" >
                              <a-menu-item  v-if="item.stage ==='test'" disabled> <a-icon type="codepen" />Testing skills </a-menu-item>
                              <a-menu-item key="1" v-else @click="Move(item,'test')"> <a-icon type="codepen" />Testing skills </a-menu-item>
                              <a-menu-item  v-if="item.stage ==='interview'" disabled> <a-icon type="book" />Interview </a-menu-item>
                              <a-menu-item key="2" v-else @click="Move(item,'interview')"> <a-icon type="book" />Interview </a-menu-item>
                              <a-menu-item key="3" @click="rejectionmodalOpen(item)"> <a-icon type="close" />reject</a-menu-item>


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

      <a-modal  v-model="notesmodal" title="Candidate notes" on-ok="handleOk" :footer="null">

        <vue-simplemde v-model="applicationactive.notes"  ref="markdownEditor"/>
        <a-button @click="SaveNotes">Save</a-button>
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

        <a-button style="margin-top: 1rem" @click="Reject" type="primary">submit</a-button>




      </a-modal>
    </div>
  </div>
</template>

<script>
import Marketplace from "@/services/Marketplace";
import moment from "moment";

import VueSimplemde from "vue-simplemde";
import 'simplemde/dist/simplemde.min.css';
export default {
name: "leads",
  data() {
    return {
      currentUserProfile: null,
      applicants: null,
      loading: false,
      pagination: {
        position:'both',

        pageSize: 20,
      },
      jobId: '',
      leads: [],
      notesmodal:false,
      applicationactive: {},
      reasonslist: ['Unaffordable salary expectations', 'Sloppy application', 'Wrong skill set', 'Unsuitable personality', 'Bad fit',
        'Not on time', 'Sloppy appearance', 'Lack of passion', 'Poor follow-up questions', 'Not responsive', 'Co-workers don’t approve', 'not enough experience'],
      reasonspicked: [],
      reasoncomment: '',
      rejectionmodal:false,
      newapplicants:[],
      interviewapplicants:[],
      rejected:[],
      testapplicants:[],
      desc: ['unfit', 'average', 'under review', 'waiting list/has merit', 'qualifies'],


    }
  },
  components: {

    VueSimplemde


  },

  mounted() {
    this.jobId = this.$store.state.route.params.jobId
    this.leads = this.$store.state.leads

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


    Move(item,stage){
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      if(stage==='test'){

        if(item.stage ==='interview'){
          let interviewindex = -1
          this.interviewapplicants = this.$store.state.interview
          this.interviewapplicants.forEach(application=>{
            if(application.id === item.id){
              interviewindex = this.interviewapplicants.indexOf(application);
            }
          })
          if (interviewindex > -1) {
            this.interviewapplicants.splice(interviewindex, 1);
          }
          this.$store.dispatch('setinterview', this.interviewapplicants)
        }
        item.stage = 'test'
        this.testapplicants = this.$store.state.test
        this.testapplicants.push(item)
        this.$store.dispatch('settest', this.testapplicants)
        this.$message.info('Candidate moved to testing skills');

        Marketplace.pickreject(item.id, {stage: 'test'}, auth)

      }else if (stage === 'interview'){

        if(item.stage ==='test'){

          let testindex = -1
          this.testapplicants = this.$store.state.test
          this.testapplicants.forEach(application=>{
            if(application.id === item.id){
              testindex = this.testapplicants.indexOf(application);
            }
          })
          if (testindex > -1) {
            this.testapplicants.splice(testindex, 1);

          }


          this.$store.dispatch('settest', this.testapplicants)
        }
        item.stage = 'interview'
        this.interviewapplicants = this.$store.state.interview
        this.interviewapplicants.push(item)
        this.$store.dispatch('setinterview', this.interviewapplicants)
        this.$message.info('Candidate is now in the interview stage');
        Marketplace.pickreject(item.id, {stage: 'interview'}, auth)

      }
    },
    OpenNotes(application){
      this.notesmodal = true
      this.applicationactive =application
    },
    SaveNotes() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      Marketplace.pickreject(this.currentapplication.id, {notes: this.applicationactive.notes}, auth)
      this.notesmodal = false

    },
    onPickReason(checkedValues) {
      this.reasonspicked = checkedValues

    },
    rejectionmodalOpen(item){
      this.rejectionmodal = true
      this.applicationactive = item
    },
    Reject(){
      let profile = this.applicationactive
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      };
      this.rejectionmodal = true


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
            const index = this.leads.indexOf(profile);
            if (index > -1) {
              this.leads.splice(index, 1);
            }
            if(profile.stage ==='test'){
              const testindex = this.$store.state.test.indexOf(profile);
              if (testindex > -1) {
                this.$store.state.test.splice(testindex, 1);
              }
            }
            if(profile.stage ==='interview'){
              const interviewindex = this.$store.state.interview.indexOf(profile);
              if (interviewindex > -1) {
                this.$store.state.interview.splice(interviewindex, 1);
              }
            }
            this.$store.dispatch('setleads', this.leads)
            this.$store.state.rejected.push(profile)
          })


    },
    Relevance(item){
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      };


      Marketplace.pickreject(item.id, {
        relevance: item.relevance,


      }, auth)

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
