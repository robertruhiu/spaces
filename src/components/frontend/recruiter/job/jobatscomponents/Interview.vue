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
                  <a-row>
                    <a-col span="1">
                      <a-checkbox >

                      </a-checkbox>

                    </a-col>
                    <a-col span="4">
                      <span style="font-weight: bold">Candidate Name</span>
                    </a-col>

                    <a-col span="8">
                      Skills


                    </a-col>

                    <a-col span="4">
                      View profile

                    </a-col>
                    <a-col span="4">
                      Notes


                    </a-col>
                    <a-col span="2">
                      Actions

                    </a-col>
                  </a-row>


                </div>


                <a-list item-layout="horizontal" :data-source="interviewapplicants"
                        :pagination="pagination"
                        style="height: 70vh;overflow-y: scroll;margin-bottom: 1rem">
                  <div slot="footer"><b>Your ideal developer is one click away </b></div>
                  <a-list-item slot="renderItem" slot-scope="item">

                    <div class="hero" style="width: 100%">
                      <a-row>
                        <a-col span="1">
                          <a-checkbox >

                          </a-checkbox>
                        </a-col>
                        <a-col span="4">
                          <span style="font-weight: bold">{{ item.candidate.user.first_name}} {{ item.candidate.user.last_name}} </span>
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
                        <a-col span="4">
                          <a @click="OpenNotes(item)">
                            create/edit notes
                          </a>


                        </a-col>
                        <a-col span="2">
                          <a-dropdown-button @click="UploadOffer(item)">
                            <span v-if="item.offerletter">
                              Offer made
                            </span>
                            <span v-else>
                              Make offer
                            </span>

                            <a-menu slot="overlay" >
                              <a-menu-item  @click="Move(item)" key="1"> <a-icon type="codepen" />Testing skills </a-menu-item>
                              <a-menu-item  @click="rejectionmodalOpen(item)" key="2"> <a-icon type="user" />reject </a-menu-item>

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
      <a-modal v-model="visible" title="Upload offer letter" :footer="null" >
        <div v-if="currentApplication">

          <div v-if="currentApplication.offerletter">
            <a target="_blank" :href="currentApplication.offerletter">{{ currentApplication.offerletter }}</a>
            <a-popconfirm
                title="Are you sure delete this file?"
                ok-text="Yes"
                cancel-text="No"
                @confirm="removefile"

            >
              <a href="#"><a-icon type="delete" theme="twoTone" two-tone-color="#eb2f96"/></a>

            </a-popconfirm>

          </div>
          <div v-else>
            <div v-if="uploading">
              <span>Uploading file <a-spin/></span>

            </div>
            <input style="margin-top: 1rem" v-else
                   @change="handleUpload" type="file">
          </div>

        </div>


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
import axios from 'axios'
import Marketplace from "@/services/Marketplace";
import moment from "moment";
import VueSimplemde from "vue-simplemde";
import 'simplemde/dist/simplemde.min.css';
export default {
name: "Interview",
  data() {
    return {
      currentUserProfile: null,
      applicants: null,
      loading: false,
      pagination: {

        pageSize: 20,
      },
      jobId: '',
      interviewapplicants: [],
      notesmodal:false,
      applicationactive: {},
      visible:false,
      uploading:false,
      currentApplication:null,
      reasonslist: ['Unaffordable salary expectations', 'Sloppy application', 'Wrong skill set', 'Unsuitable personality', 'Bad fit',
        'Not on time', 'Sloppy appearance', 'Lack of passion', 'Poor follow-up questions', 'Not responsive', 'Co-workers don’t approve', 'not enough experience'],
      reasonspicked: [],
      reasoncomment: '',
      rejectionmodal:false,



    }
  },
  components: {

    VueSimplemde,


  },
  mounted() {
    this.jobId = this.$store.state.route.params.jobId
    if(this.$store.state.interview.length>0){

      if(this.$store.state.interview[0].job === Number(this.jobId)){
        this.interviewapplicants = this.$store.state.interview
        
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
        if(applicant.stage === 'interview' && applicant.stage !== 'rejected' ){
          this.interviewapplicants.push(applicant)
        }
      })
      this.loading = false
      this.$store.dispatch('setinterview', this.interviewapplicants)
    },
    OpenNotes(application){
      this.notesmodal = true
      this.applicationactive =application
    },
    SaveNotes() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      Marketplace.pickreject(this.applicationactive.id, {notes: this.applicationactive.notes}, auth)
      this.notesmodal = false

    },
    UploadOffer(item){
      this.visible = !this.visible
      this.currentApplication = item

    },
    Move(item){
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      const index = this.interviewapplicants.indexOf(item);
      if (index > -1) {
        this.interviewapplicants.splice(index, 1);
      }
      this.$store.dispatch('setinterview', this.interviewapplicants)
      this.$store.state.test.push(item)
      this.$store.state.leads.forEach(oneapplicant=>{
        if(oneapplicant.id === item.id){
          oneapplicant.stage ='test'
        }
      })
      Marketplace.pickreject(item.id, {stage: 'test'}, auth)

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
        const index = this.interviewapplicants.indexOf(profile);
        if (index > -1) {
          this.interviewapplicants.splice(index, 1);
        }
        this.$store.dispatch('setinterview', this.interviewapplicants)
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

    },
    async handleUpload(e) {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
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
      this.$message.success('offer letter uploaded');
      this.currentApplication.offerletter = res.data.secure_url
      this.uploading = false
      Marketplace.pickreject(this.currentApplication.id, {offerletter: res.data.secure_url}, auth)


    },
    removefile(){
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      this.currentApplication.offerletter = null
      this.uploading = false
      Marketplace.pickreject(this.currentApplication.id, {offerletter: null}, auth)
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
