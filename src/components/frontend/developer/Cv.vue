<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh;">
    <CandidateSider/>
    <a-layout>

      <a-layout-content style="background-color: #FAFBFF">
        <a-card class="hellocard" :bordered="false">
          <a-row style="color: white">
            <a-col span="12">
          <a-breadcrumb>
            <a-breadcrumb-item><a @click="$router.push('/developer')" style="color: white">Dashboard</a></a-breadcrumb-item>
            <a-breadcrumb-item style="color: white"><a @click="$router.push('/demo')" style="color: white">Portfolio</a></a-breadcrumb-item>
            <a-breadcrumb-item style="color: white">Cv</a-breadcrumb-item>

          </a-breadcrumb>
          <span style="font-size: 1.7rem;font-family: sofia_prosemibold;margin-bottom: 0;color: white">
                {{ $store.state.user_object.user.first_name | capitalize }} {{ $store.state.user_object.user.last_name | capitalize }}</span>
          <p>Email: {{$store.state.user_object.user.email}}</p>
              <p>Linkedin: {{$store.state.user_object.linkedin_url}}</p>

            </a-col>
            <a-col span="12">
              <p>Phone Number: {{$store.state.user_object.phone_number}}</p>
              <p>Location: {{$store.state.user_object.country}}</p>
              <p>Years of Experience: {{$store.state.user_object.years}}</p>
              <p>Salary Monthly Expectations: $ {{$store.state.user_object.salary}}</p>
            </a-col>
          </a-row>



        </a-card>
        <div style=" ;padding: 1%">
          <a-row :gutter="16">
            <a-col span="16" :offset="4">
              <div style="padding: 1%;min-height: 40vh" class="cardshadow">
                <div style="overflow-y: scroll;padding: 1%;height: 70vh;">
                  <p style="font-family: sofia_probold;text-decoration: underline;text-decoration-color: #1F81CE">About</p>
                  <p style="font-family: sofia_prolight">
                    {{currentUserProfile.about}}
                  </p>
                  <p style="font-family: sofia_probold;text-decoration: underline;text-decoration-color: #1F81CE">Skilled in</p>
                  <div>
                    <a-tag color="#1F81CE" style="margin-bottom: 1rem">
                      react
                    </a-tag>
                    <a-tag color="#1F81CE" style="margin-bottom: 1rem">
                      django
                    </a-tag>
                    <a-tag color="#1F81CE" style="margin-bottom: 1rem">
                      vue
                    </a-tag>

                  </div>
                  <p style="font-family: sofia_probold;text-decoration: underline;text-decoration-color: #1F81CE">Work Experience</p>
                  <div>
                    <a-timeline>
                      <a-timeline-item
                      >

                        <p style="font-weight: 700">
                          Kefri conso


                        </p>
                        <p><span><a-icon type="bank"/>  codeln <a-icon
                            type="environment"/>  Ghana </span>
                        </p>
                        <p>
                          Technologies used:
                          <a-tag color="#1F81CE">
                            vue js
                          </a-tag>
                          <a-tag color="#1F81CE">
                            django
                          </a-tag>

                        </p>


                        <p>Designing and implementing use case of UX processes of the user story</p>
                        <p>2013 -2017</p>

                      </a-timeline-item>


                    </a-timeline>
                    <a-timeline>

                      <a-timeline-item
                      >

                        <p style="font-weight: 700">
                          Kefri conso


                        </p>
                        <p><span><a-icon type="bank"/>  codeln <a-icon
                            type="environment"/>  Ghana</span>
                        </p>
                        <p>
                          Technologies used:
                          <a-tag color="#1F81CE">
                            vue js
                          </a-tag>
                          <a-tag color="#1F81CE">
                            django
                          </a-tag>

                        </p>


                        <p>Designing and implementing use case of UX processes of the user story</p>
                        <p>2013 -2017</p>

                      </a-timeline-item>

                    </a-timeline>
                  </div>
                  <p style="font-family: sofia_probold;text-decoration: underline;text-decoration-color: #1F81CE">PORTFOLIO / GIGS</p>
                  <a-row gutter="16">


                    <a-col span="12" style="margin-bottom: 1rem">
                      <a-card class="nine">

                        <img
                            class="card-img-top"
                            slot="cover"
                            alt="example"
                            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"




                        />



                        <a-card-meta >
                          <template slot="description">
                            Feb 2018 – Mar 2018

                            <p>Role in Project:</p>
                            <a-tag color="#1F81CE" style="margin-bottom: 1rem">
                              Developer
                            </a-tag>
                            <p>Tools used:</p>
                            <a-tag color="#1F81CE" style="margin-bottom: 1rem">
                              react
                            </a-tag>
                            <a-tag color="#1F81CE" style="margin-bottom: 1rem">
                              django
                            </a-tag>
                            <a-tag color="#1F81CE" style="margin-bottom: 1rem">
                              vue
                            </a-tag>
                            <p>Description: You can develop,design,product or even devops.</p>
                          </template>
                        </a-card-meta>
                      </a-card>
                    </a-col>
                    <a-col span="12" style="margin-bottom: 1rem" >
                      <a-card class="nine">

                        <img
                            class="card-img-top"
                            slot="cover"
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"




                        />



                        <a-card-meta >
                          <template slot="description">
                            Feb 2018 – Mar 2018

                            <p>Role in Project:</p>
                            <a-tag color="#1F81CE" style="margin-bottom: 1rem">
                              Developer
                            </a-tag>
                            <a-tag color="#1F81CE" style="margin-bottom: 1rem">
                              Designer
                            </a-tag>
                            <p>Tools used:</p>
                            <a-tag color="#1F81CE" style="margin-bottom: 1rem">
                              react
                            </a-tag>
                            <a-tag color="#1F81CE" style="margin-bottom: 1rem">
                              django
                            </a-tag>
                            <a-tag color="#1F81CE" style="margin-bottom: 1rem">
                              vue
                            </a-tag>
                            <a-tag color="#1F81CE" style="margin-bottom: 1rem">
                              Adobe Illustrator
                            </a-tag>
                            <p>Description: You can develop,design,product or even devops.</p>
                          </template>
                        </a-card-meta>
                      </a-card>
                    </a-col>


                  </a-row>
                  <p style="font-family: sofia_probold;text-decoration: underline;text-decoration-color: #1F81CE">Education</p>
                  <a-timeline>
                    <a-timeline-item
                    >

                      <p style="font-weight: 700">
                        Jaramogi Oginga Odinga University


                      </p>

                      <p>
                        Bsc Computer Security forensics


                      </p>


                      <p>2013 -2017</p>

                    </a-timeline-item>


                  </a-timeline>
                  <a-timeline>

                    <a-timeline-item
                    >

                      <p style="font-weight: 700">
                        Jaramogi Oginga Odinga University


                      </p>

                      <p>
                        Bsc Computer Security forensics


                      </p>


                      <p>2013 -2017</p>

                    </a-timeline-item>

                  </a-timeline>
                  <p style="font-family: sofia_probold;text-decoration: underline;text-decoration-color: #1F81CE">Certifications</p>
                  <a-timeline>
                    <a-timeline-item
                    >

                      <p style="font-weight: 700">
                        Product Marketing certification


                      </p>

                      <p>
                        Issuing organization: Product school


                      </p>


                      <p>Issued on : Aug 2020</p>

                    </a-timeline-item>


                  </a-timeline>
                </div>

              </div>

            </a-col>
          </a-row>


        </div>



      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import CandidateSider from "@/components/frontend/developer/layout/CandidateSider";
import moment from "moment";


export default {
  name: "Cv",
  data() {

    return {
      currentUserProfile: {},


    }
  },
  components: {
    CandidateSider

  },
  async mounted() {
    this.currentUserProfile = this.$store.state.user_object


  },

  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
}
</script>

<style scoped>
.hellocard {


  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;

  background: #004EC7;
  border-radius: 0;
  margin-bottom: 1rem;
  color: white;


}
.card-img-top{
  width: 100%;
  height: 15vw;
  object-fit: cover;
}
.cardshadow {
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;
  background: white;
  border-radius: 0;

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
