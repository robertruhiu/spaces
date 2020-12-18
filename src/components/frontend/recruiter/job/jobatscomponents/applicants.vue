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

                    <a-col span="4">
                      <span style="font-weight: bold">Candidate Name</span>
                    </a-col>
                    <a-col span="2">
                      <span style="font-weight: bold">Country</span>
                    </a-col>

                    <a-col span="8">
                      Skills


                    </a-col>

                    <a-col span="4">
                      View profile

                    </a-col>
                    <a-col span="2">
                      Actions

                    </a-col>
                  </a-row>


                </div>


                <a-list item-layout="horizontal" :data-source="newapplicants"
                        :pagination="pagination"
                        style="height: 70vh;overflow-y: scroll;margin-bottom: 1rem">
                  <div slot="footer"><b>Your ideal developer is one click away </b></div>
                  <a-list-item slot="renderItem" slot-scope="item">

                    <div class="hero" style="width: 100%">
                      <a-row :gutter="16">

                        <a-col span="4">
                          <span style="font-weight: bold">{{ item.candidate.user.first_name}} {{ item.candidate.user.last_name}} </span>
                        </a-col>
                        <a-col span="2">
                          <span style="font-weight: bold">{{item.candidate.country}}</span>
                        </a-col>


                        <a-col span="8">
                          <span v-if="item.candidate.skills">
                            <span style="" v-for="skill in item.candidate.skills.split(',').slice(0, 5)" v-bind:key="skill.id">
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
                        <a-col span="2">
                          <a-dropdown-button @click="Accept(item)">
                            Accept application
                            <a-menu slot="overlay" @click="rejectionmodalOpen(item)">
                              <a-menu-item key="1"> <a-icon type="close" />reject </a-menu-item>

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
  name: "applicants",
  data() {
    return {
      currentUserProfile: null,
      applicants: null,
      loading: false,
      pagination: {

        pageSize: 20,
      },
      jobId: '',
      newapplicants: [],
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

    if(this.$store.state.applicants.length>0){
      if(this.$store.state.applicants[0].job === Number(this.jobId)){
        this.newapplicants = this.$store.state.applicants
        
      }else {
        this.fetchApplicants()
      }


    }else {
      this.fetchApplicants()
    }


  },
  filters: {
    moment: function (date) {
      return moment(date).format('MMMM Do YYYY');
    }
  },
  methods: {
    
    fetchApplicants() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      };
      this.loading = true
      Marketplace.specificjobapplicants(this.jobId, auth)
          .then(resp => {
            this.applicants = resp.data
            this.ComputeNewApplicants()
          })
    },
    ComputeNewApplicants(){
      this.applicants.forEach(applicant=>{
        if(applicant.selected === false && applicant.stage !== 'rejected' ){
          this.newapplicants.push(applicant)
        }
      })
      this.loading = false
      this.$store.dispatch('setapplicants', this.newapplicants)
    },
    Accept(profile){
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      };
      const index = this.newapplicants.indexOf(profile);

      if (index > -1) {
        this.newapplicants.splice(index, 1);
      }
      profile.stage = 'active'
      this.$store.dispatch('setapplicants', this.newapplicants)
      this.$store.state.leads.push(profile)
      this.$message.info('Application added to leads');
      Marketplace.pickreject(profile.id, {carted: true, selected: true, stage: 'active'}, auth)


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

      Marketplace.pickreject(profile.id, {
        stage: 'rejected',
        selected: false,

      }, auth)
      .then(()=>{
        this.rejectionmodal = false
        const index = this.newapplicants.indexOf(profile);
        if (index > -1) {
          this.newapplicants.splice(index, 1);
        }
        this.$message.info('Application added to the rejected list');
        this.$store.dispatch('setapplicants', this.newapplicants)
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
