 <template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <Smallsider/>


    <a-layout :style="{ backgroundColor:'#ffffff' }">

      <a-layout-content :style="{ minHeight: '280px', }">
        <a-card class="hellocard" :bordered="false">

          <a-row style="color: white">
            <a-col span="12">
              <a-breadcrumb>
                <a-breadcrumb-item><a @click="$router.push('/recruiter')" style="color: white">Home</a>
                </a-breadcrumb-item>
                <a-breadcrumb-item><a @click="$router.push('/managejobs')" style="color: white">Manage Jobs</a>
                </a-breadcrumb-item>
                <a-breadcrumb-item style="color: white">{{ job.title }}</a-breadcrumb-item>


              </a-breadcrumb>
              <span style="font-size: 1.7rem;font-family: sofia_prosemibold;margin-bottom: 0;color: white">
                {{ job.title }}</span>
              <div v-if="$store.state.user_object.user.is_staff">Email of job owner : {{owner.user.email}}</div>


            </a-col>

            <a-col :xs="{span: 12, offset: 0 }" :sm="{span: 12, offset: 0 }"
                   :md="{span: 12, offset: 0 }"
                   :lg="{span: 8, offset: 0 }" :xl="{span: 6,offset: 0 }">
              <a-button-group>
                <a-button type="primary" icon="share-alt">Share Job</a-button>

                <social-sharing :url=joburl
                                :title=job.title
                                :description=job.description
                                quote="Apply for this job at the link below."
                                :hashtags=job.tech_stack
                                inline-template>
                  <network network="facebook">
                    <a-button type="primary" icon="facebook"/>
                  </network>

                </social-sharing>
                <social-sharing :url=joburl
                                :title=job.title
                                :description=job.description
                                :hashtags=job.tech_stack
                                inline-template>

                  <network network="twitter">
                    <a-button type="primary" icon="twitter"/>
                  </network>
                </social-sharing>


              </a-button-group>


            </a-col>


          </a-row>


        </a-card>

        <a-row>


          <a-col :xs="{span: 24 }" :sm="{span: 24 }" :md="{span: 24 }"
                 :lg="{span: 24 }" :xl="{span: 24 }">
            <div style="padding: 1%;">
              <a-tabs type="card" animated :size="large">

                <a-tab-pane key="1">
                  <span slot="tab">
                    <a-icon type="usergroup-add" />
                    New Applicants
                  </span>
                  <Applicants/>
                </a-tab-pane>
                <a-tab-pane key="2">
                  <span slot="tab">
                    <a-icon type="funnel-plot" />
                    Leads
                  </span>
                  <Leads/>
                </a-tab-pane>
                <a-tab-pane key="4">
                  <span slot="tab">
                    <a-icon type="codepen"/>
                    Testing skills
                  </span>
                  <Test/>
                </a-tab-pane>
                <a-tab-pane key="3">
                  <span slot="tab">
                    <a-icon type="book" />
                    Interviews
                  </span>
                  <Interview/>
                </a-tab-pane>
                <a-tab-pane key="6">
                  <span slot="tab">
                    <a-icon type="close" />
                    Rejected
                  </span>
                  <Rejected/>
                </a-tab-pane>
                <a-tab-pane key="5">
                  <span slot="tab">
                    <a-icon type="edit" />
                    Edit job
                  </span>
                  <EditJob v-bind:job="job"/>
                </a-tab-pane>
                <a-button slot="tabBarExtraContent" @click="publishUnpublish" v-if="!published && $store.state.user_object.user.is_staff">
                  Publish job
                </a-button>
                <a-button slot="tabBarExtraContent" @click="warning" v-if="!published && !$store.state.user_object.user.is_staff">
                  Publish job
                </a-button>
                <a-button slot="tabBarExtraContent" @click="publishUnpublish" v-if="published">
                  Unpublish job
                </a-button>
<!--                <a-button slot="tabBarExtraContent" @click="ChangeOwner" v-if=" $store.state.user_object.user.is_staff">-->
<!--                  Change owner-->
<!--                </a-button>-->


              </a-tabs>
            </div>
          </a-col>
        </a-row>

        <!-- <show-at :breakpoints="{ small: 900}" breakpoint="small">
          <Mobilebase v-bind:job="job"/>
        </show-at> -->
        <show-at :breakpoints="{small: 900}" breakpoint="mediumAndAbove">

        <lena/>
        </show-at>


      </a-layout-content>


    </a-layout>
  </a-layout>

</template>

<script>
import lena from '@/components/frontend/recruiter/lena/lena'
import Marketplace from '@/services/Marketplace'
import { showAt} from 'vue-breakpoints'
import Applicants from "@/components/frontend/recruiter/job/jobatscomponents/applicants"
import Leads from "@/components/frontend/recruiter/job/jobatscomponents/leads"
import Test from "@/components/frontend/recruiter/job/jobatscomponents/test"
import Interview from "@/components/frontend/recruiter/job/jobatscomponents/Interview"
import EditJob from "@/components/frontend/recruiter/job/jobatscomponents/EditJob";
import Smallsider from "@/components/frontend/recruiter/layout/Smallsider";
import Rejected from "@/components/frontend/recruiter/job/jobatscomponents/rejected"
import Mobilebase from '@/components/frontend/recruiter/job/jobatscomponents/mobilecomponents/Mobilebase';
import User from "@/services/UsersService";
import moment from 'moment';
export default {
  name: "job",
  components: {

    Smallsider,
    Applicants, Leads, Test, Interview, lena, EditJob,Rejected,showAt,Mobilebase


  },
  data() {

    return {
      job: {},
      joburl: '',
      published: false,
      owner:{}


    }
  },

  mounted() {
    this.fetchJob()
    this.jobId = this.$store.state.route.params.jobId

    if (this.$store.state.job_id !== Number(this.jobId)) {
      this.$store.dispatch('setjob_id', Number(this.jobId))



    }
  },
  methods: {
    fetchJob() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      };
      const jobId = this.$store.state.route.params.jobId
      // current job
      Marketplace.specificjob(jobId, auth)
          .then(resp => {
            this.job = resp.data
            this.joburl = `https://www.codeln.com/jobdetails/${this.job.id}`
            this.published = this.job.published

            let currentdate = moment()
            let deadline = moment(this.job.deadline)
            let difference = deadline.diff(currentdate)
            if(difference<0){
              this.deadlinepassed()
            }
            this.fetchOwner()
          })

    },

    fetchOwner(){
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      };
      User.currentuser(this.job.posted_by, auth)
      .then(resp=>{
        this.owner = resp.data
      })

    },
    publishUnpublish() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      };
      this.published = !this.published
      const jobId = this.$store.state.route.params.jobId
      Marketplace.updatejob(jobId, {published: this.published}, auth)
          .then(()=>{
            if(this.published === true){
              Marketplace.recruiterpublished(jobId, auth)
                .then()
              Marketplace.publishedemails(jobId, auth)
                .then()

            }

          })

    },
    deadlinepassed() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      };
      this.published = false
      const jobId = this.$store.state.route.params.jobId
      Marketplace.updatejob(jobId, {published: this.published}, auth)
          .then()

    },
    warning() {
      this.$message.warning(' Job awaiting verification from codeln to for it to appear on job board');
    },
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



</style>
