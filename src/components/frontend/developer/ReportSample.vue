<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh;">
    <CandidateSider/>
    <a-layout>

      <a-layout-content style="background-color: white">
        <div style="padding: 2%;height: 100vh;overflow-y: scroll;margin-bottom: 1rem">
          <a-card style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
            <div >
              <a-tabs default-active-key="1" >
                <a-tab-pane key="1" tab="Overview">
                  <a-card class="nine" style="color: black;margin-bottom: 1rem">
                  <a-row>
                    <a-col span="14">
                      <p style="font-family: sofia_probold;font-size: 1rem">Candidate Details</p>
                      <p><strong>Name:</strong> {{$store.state.user.first_name}}  {{$store.state.user.last_name}}</p>
                      <p><strong>Email:</strong> {{$store.state.user.email}}  </p>

                    </a-col>
                    <a-col span="6">
                      <a-card class="nine" style="color: black;margin-bottom: 1rem">
                        <div style="text-align: center">

                        </div>
                        <a-card-meta style="color:#000;text-align: center">
                          <template slot="description" >
                            <p  style="font-weight: bold;color: black;font-size: 1.5rem">Mean Score</p>
                            <p style="font-size: 1rem;color :black">64%
                              <a-avatar
                                shape="square"
                                size="large"
                                style="backgroundColor: #007BFF"

                            >
                              B
                            </a-avatar></p>

                            <br>
                            <a-button type="primary" @click="navigateTo({name:'testcenters'})"> View Code Base</a-button>


                          </template>
                        </a-card-meta>
                      </a-card>

                    </a-col>
                  </a-row>
                  </a-card>
                  <div style="padding: 1%;margin-bottom: 1rem">
                    <p style="font-family: sofia_probold;font-size: 1rem"><strong>Project Details</strong></p>
                    <a-row gutter="16">
                      <a-col span="12">
                        <p style="font-family: sofia_probold">Project Description</p>
                        <p>Koffi - a Tour Operator in Africa, organizes over 20 Tours for Tourists every year.
                          He wants a platform that will allow him create visibility for his services.
                          He wants Tourists to be able to view pictures from his Tours and also easily book a Tour from their mobile device</p>
                      </a-col>
                      <a-col span="12">
                        <p style="font-family: sofia_probold">Tech Stack used</p>
                        <div>
                          <a-tag color="#2db7f5">
                            react
                          </a-tag>
                          <a-tag color="#2db7f5">
                            firebase
                          </a-tag>
                          <a-tag color="#2db7f5">
                            graphql
                          </a-tag>
                          <a-tag color="#2db7f5">
                            mongo
                          </a-tag>

                        </div>

                      </a-col>
                    </a-row>
                  </div>




                  <p style="font-family: sofia_probold;font-size: 1rem"><strong>Project deliverables</strong></p>
                  <a-card class="nine" style="color: black;margin-bottom: 1rem">
                    <a-list
                        itemLayout="horizontal"
                        style="padding-right: 3%"
                    >

                      <div v-for="requirement in requirements" v-bind:key="requirement">
                        <a-list-item slot="renderItem">
                          <a-list-item-meta
                              description=""
                          >
                            <p slot="title">{{requirement.title}}</p>

                          </a-list-item-meta>
                          <div>
                            <a-tag color="#87d068" v-if="requirement.status === 'complete'">complete</a-tag>
                            <a-tag color="#f50" v-else>incomplete</a-tag>

                          </div>

                        </a-list-item>
                        <br>


                      </div>
                    </a-list>
                  </a-card>

                  <p style="font-family: sofia_probold;font-size: 1rem">Key competences</p>
                  <a-card class="nine" style="color: black;margin-bottom: 1rem">

                    <a-card-meta style="color:#000;text-align: center">
                      <template slot="description" >
                        <a-row>
                          <a-col span="6">
                            Deliverables
                            <p style="font-size: 1rem;color :black">68%
                              <a-avatar
                                  shape="square"
                                  size="large"
                                  style="backgroundColor: #007BFF"

                              >
                                B
                              </a-avatar></p>
                          </a-col>
                          <a-col span="6">
                            Error Handling
                            <p style="font-size: 1rem;color :black">80%
                              <a-avatar
                                  shape="square"
                                  size="large"
                                  style="backgroundColor: #87d068"

                              >
                                A
                              </a-avatar></p>

                          </a-col>
                          <a-col span="6">
                            Project Security
                            <p style="font-size: 1rem;color :black">72%
                              <a-avatar
                                  shape="square"
                                  size="large"
                                  style="backgroundColor: #007BFF"

                              >
                                B
                              </a-avatar></p>

                          </a-col>
                          <a-col span="6">
                            Code Readabilty
                            <p style="font-size: 1rem;color :black">38%
                              <a-avatar
                                  shape="square"
                                  size="large"
                                  style="backgroundColor: #f50"

                              >
                                C
                              </a-avatar></p>

                          </a-col>
                        </a-row>

                      </template>
                    </a-card-meta>
                  </a-card>
                </a-tab-pane>
                <a-tab-pane key="2" tab="Grading criteria" force-render>
                  <a-row gutter="16">
                    <a-col  :xs="{span: 18, offset: 2  }" :sm="{span: 12, offset: 0 }" :md="{span: 10, offset: 0 }"
                           :lg="{span: 6, offset: 0 }" :xl="{span: 6,offset: 0 }" style="margin-bottom: 1rem">
                      <a-card>
                        <a-statistic
                            title="Tests Passed"
                            :value="6"
                            :precision="2"

                            :value-style="{ color: '#3f8600' }"
                            style="margin-right: 50px"
                        >

                        </a-statistic>
                      </a-card>
                    </a-col>
                    <a-col  :xs="{span: 18, offset: 2  }" :sm="{span: 12, offset: 0 }" :md="{span: 10, offset: 0 }"
                            :lg="{span: 6, offset: 0 }" :xl="{span: 6,offset: 0 }" style="margin-bottom: 1rem">
                      <a-card>
                        <a-statistic
                            title="Tests Failed"
                            :value="2"
                            :precision="2"

                            :value-style="{ color: '#ff0000' }"
                            style="margin-right: 50px"
                        >

                        </a-statistic>
                      </a-card>
                    </a-col>
                    <a-col  :xs="{span: 18, offset: 2  }" :sm="{span: 12, offset: 0 }" :md="{span: 10, offset: 0 }"
                            :lg="{span: 6, offset: 0 }" :xl="{span: 6,offset: 0 }" style="margin-bottom: 1rem">
                      <a-card>
                        <a-statistic
                            title="Warnings"
                            :value="8"
                            :precision="2"


                            style="margin-right: 50px"
                        >

                        </a-statistic>
                      </a-card>
                    </a-col>
                    <a-col  :xs="{span: 18, offset: 2  }" :sm="{span: 12, offset: 0 }" :md="{span: 10, offset: 0 }"
                            :lg="{span: 6, offset: 0 }" :xl="{span: 6,offset: 0 }" style="margin-bottom: 1rem">
                      <a-card>
                        <a-statistic
                            title="Errors"
                            :value="1"
                            :precision="2"


                            style="margin-right: 50px"
                        >

                        </a-statistic>
                      </a-card>
                    </a-col>
                    <a-col  :xs="{span: 18, offset: 2  }" :sm="{span: 12, offset: 0 }" :md="{span: 10, offset: 0 }"
                            :lg="{span: 6, offset: 0 }" :xl="{span: 6,offset: 0 }" style="margin-bottom: 1rem">
                      <a-card>
                        <a-statistic
                            title="Lines of Code"
                            :value="169"
                            :precision="2"


                            style="margin-right: 50px"
                        >

                        </a-statistic>
                      </a-card>
                    </a-col>
                    <a-col  :xs="{span: 18, offset: 2  }" :sm="{span: 12, offset: 0 }" :md="{span: 10, offset: 0 }"
                            :lg="{span: 6, offset: 0 }" :xl="{span: 6,offset: 0 }" style="margin-bottom: 1rem">
                      <a-card>
                        <a-statistic
                            title="Duplications"
                            :value="0"
                            :precision="2"
                            suffix="%"


                            style="margin-right: 50px"
                        >

                        </a-statistic>
                      </a-card>
                    </a-col>
                    <a-col  :xs="{span: 18, offset: 2  }" :sm="{span: 12, offset: 0 }" :md="{span: 10, offset: 0 }"
                            :lg="{span: 6, offset: 0 }" :xl="{span: 6,offset: 0 }" style="margin-bottom: 1rem">
                      <a-card>
                        <a-statistic
                            title="Classes"
                            :value="0"
                            :precision="2"


                            style="margin-right: 50px"
                        >

                        </a-statistic>
                      </a-card>
                    </a-col>

                    <a-col  :xs="{span: 18, offset: 2  }" :sm="{span: 12, offset: 0 }" :md="{span: 10, offset: 0 }"
                            :lg="{span: 6, offset: 0 }" :xl="{span: 6,offset: 0 }" style="margin-bottom: 1rem">
                      <a-card>
                        <a-statistic
                            title="Comments"
                            :value="0"
                            :precision="2"
                            suffix="%"


                            style="margin-right: 50px"
                        >

                        </a-statistic>
                      </a-card>
                    </a-col>
                    <a-col  :xs="{span: 18, offset: 2  }" :sm="{span: 12, offset: 0 }" :md="{span: 10, offset: 0 }"
                            :lg="{span: 6, offset: 0 }" :xl="{span: 6,offset: 0 }" style="margin-bottom: 1rem">
                      <a-card>
                        <a-statistic
                            title="Dependencies"
                            :value="0"
                            :precision="2"


                            style="margin-right: 50px"
                        >

                        </a-statistic>
                      </a-card>
                    </a-col>
                    <a-col  :xs="{span: 18, offset: 2  }" :sm="{span: 12, offset: 0 }" :md="{span: 10, offset: 0 }"
                            :lg="{span: 6, offset: 0 }" :xl="{span: 6,offset: 0 }" style="margin-bottom: 1rem">
                      <a-card>
                        <a-statistic
                            title="Run time"
                            :value="0"
                            :precision="2"
                            suffix="s"


                            style="margin-right: 50px"
                        >

                        </a-statistic>
                      </a-card>
                    </a-col>
                    <a-col  :xs="{span: 18, offset: 2  }" :sm="{span: 12, offset: 0 }" :md="{span: 10, offset: 0 }"
                            :lg="{span: 6, offset: 0 }" :xl="{span: 6,offset: 0 }" style="margin-bottom: 1rem">
                      <a-card>
                        <a-statistic
                            title="Technical Debt"
                            :value="0"
                            :precision="2"


                            style="margin-right: 50px"
                        >

                        </a-statistic>
                      </a-card>
                    </a-col>
                    <a-col  :xs="{span: 18, offset: 2  }" :sm="{span: 12, offset: 0 }" :md="{span: 10, offset: 0 }"
                            :lg="{span: 6, offset: 0 }" :xl="{span: 6,offset: 0 }" style="margin-bottom: 1rem">
                      <a-card>
                        <a-statistic
                            title="Quality Gates"
                            :value="22"
                            :precision="2"


                            style="margin-right: 50px"
                        >

                        </a-statistic>
                      </a-card>
                    </a-col>
                  </a-row>













                </a-tab-pane>

              </a-tabs>
            </div>
          </a-card>
        </div>




      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import CandidateSider from "@/components/frontend/developer/layout/CandidateSider";
import Projects from '@/services/Projects'

const requirements = [
  {
    title: 'Create an easy to understand Ui Ux of a shopping experience.',
    status: 'complete'
  },
  {
    title: 'Create a login and signup page use Allauth(django) or Auth(laravel) or Passportjs(express) package to manage this.User model(id,email,password).' +
        'Use package as per framework assigned to build on.',
    status: 'incomplete'
  },
  {
    title: 'Create an index page that shows the houses on sale their pictures, prices and descriptions style it to make it appealing as possible.' +
        ' Fetch house details from the database.',
    status: 'complete'
  },
  {
    title: 'Create the backend page for the app. This is to be used to edit, update, create or delete houses to be sold.' +
        'House model(id,item_name,description,price,pictures).You can have several pictures for the house',
    status: 'incomplete'
  },
  {
    title: 'User should be able to pick an item and add to cart.Use session cart to store items chosen temporarily.' +
        'Don\'t save cart data in database.Cart model(id,item_id,item_name,user_id)',
    status: 'complete'
  },
]

export default {
  name: "ReportSample",
  data() {
    return {
      currentUserProfile: {},
      project: {},
      Requirementslist: [],
      requirements



    }
  },
  components: {

    CandidateSider,

  },
  async mounted() {
    this.currentUserProfile = this.$store.state.user

    this.getProject()

  },
  methods:{
    getProject(){
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      Projects.projectdetails(this.$route.params.projectId,auth)
      .then(resp=>{
        this.project = resp.data


      })
    }


  }
}
</script>

<style scoped>
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
