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

                    <a-col span="4">
                      <span style="font-weight: bold">Candidate Name</span>
                    </a-col>

                    <a-col span="8">
                      Skills


                    </a-col>

                    <a-col span="4">
                      View profile

                    </a-col>
                    <a-col span="6">
                      Rejection reason(s)

                    </a-col>


                  </a-row>


                </div>


                <a-list item-layout="horizontal" :data-source="rejectedapplicants"
                        :pagination="pagination"
                        style="height: 70vh;overflow-y: scroll;margin-bottom: 1rem">
                  <div slot="footer"><b>Your ideal developer is one click away </b></div>
                  <a-list-item slot="renderItem" slot-scope="item">

                    <div class="hero" style="width: 100%">
                      <a-row>

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
                        <a-col span="6">
                          <span v-if="item.rejectioncomment">{{item.rejectioncomment}} ,</span><span v-if="item.rejectionreason">{{item.rejectionreason}}</span>

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

    </div>
  </div>
</template>

<script>

import Marketplace from "@/services/Marketplace";

export default {
name: "Rejected",
  data() {
    return {
      currentUserProfile: null,

      loading: false,
      pagination: {

        pageSize: 20,
        position:'both',
      },
      jobId: '',
      rejectedapplicants: [],





    }
  },
  components: {




  },
  mounted() {
    this.jobId = this.$store.state.route.params.jobId
    this.rejectedapplicants = this.$store.state.rejected

  },

  methods: {



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
