<template>
  <a-layout>

    <Pageheader/>
    <a-layout-content :style="{ padding: '0 0px', marginTop: '4rem' }">

      <div :style="{ background: '#fff', minHeight: '60vh',padding:'0 2%' }">
        <a-row :gutter="16" style="padding: 3%">


          <a-col class="tracker" :xs="{span: 24, offset: 0  }" :sm="{span: 12, offset: 0 }"
                 :md="{span: 12, offset: 0 }"
                 :lg="{span: 6, offset: 6 }" :xl="{span: 6,offset: 6 }">
            <a-row class='managecard' hoverable>
              <a-col span="24">
                <div style="text-align:center;padding: 5%;">
                  <p style="color: #1976D2;font-weight: bold;text-align: center;font-size: 1rem">
                    Full-time hire </p>
                </div>
                <a-progress :percent="100" strokeColor="#0868AC" :showInfo="false"/>

              </a-col>
              <a-col span="24">
                <div style="padding: 5%">

                  <p style="text-align: center;font-weight: bold">This plan is for you if you need
                    employees to work with you for more than a year (remotely or on-site).</p>

                  <div style="">
                    <p>Recruiter Billing: One-time payment of a Commission Fee. The Commission Fee
                      starts from
                      12% of
                      the candidate's annual gross salary based on the role you are hiring for,
                      see our
                      <router-link to="terms">Terms</router-link>
                      for more details.
                    </p>
                    <p>Perks:</p>
                    <ul>
                      <li>Dedicated Account Executive</li>
                      <li>Unlimited free job posting

                      </li>
                      <li>
                        Free job links for public sharing

                      </li>
                      <li>
                        Controlled Unlimited access to our talent
                      </li>
                      <li>
                        Tested and Verified Talent
                      </li>
                      <li>
                        Online interview booking
                      </li>
                      <li>Swift online support

                      </li>

                      <li>Simplified invoicing and payments
                      </li>
                      <li>Assessment for Software Engineers (Project-Based Coding Tests)</li>
                      <li>Intuitive inbuilt Applicant tracking system</li>
                      <li>Smart Candidate Recommendation System
                      </li>
                      <li>Collaborate on interview notes with your co-recruiters
                      </li>
                      <li>6 months talent warranty</li>
                      <li>Access to exclusive list of top performing candidates</li>
                      <li>Access to our exclusive Africa technology report, trends and insights
                      </li>
                    </ul>


                  </div>

                </div>

              </a-col>
            </a-row>


          </a-col>

          <a-col :xs="{span: 24, offset: 0  }" :sm="{span: 12, offset: 0 }" :md="{span: 12, offset: 0 }"
                 :lg="{span: 6, offset: 0 }" :xl="{span: 6,offset: 0 }" class="tracker">
            <a-row class='managecard' hoverable>
              <a-col span="24">
                <div style="text-align:center;padding: 5%;">
                  <p style="color: #1976D2;font-weight: bold;text-align: center;font-size: 1rem">
                    Contract hire</p>
                </div>
                <a-progress :percent="100" strokeColor="#084081" :showInfo="false"/>

              </a-col>
              <a-col span="24">
                <div style="padding: 5%">

                  <div style="text-align: center">
                    <img src="@/assets/images/innovation.svg" style="width: 60%" alt="">
                    <p style="font-weight: bold">This plan is for you if you need employees to work
                      on a short term contract (less than a year)</p>
                    <p>Recruiter Billing: the commission fee will be calculated on a prorata basis
                      depending
                      on the number of
                      months that the candidate will work for you. The Commission fee is only paid
                      once.
                    </p>
                    <p>Enjoy all fulltime hire perks.</p>
                    <p> Let's grow with you.</p>


                  </div>


                </div>

              </a-col>
            </a-row>


          </a-col>


        </a-row>


      </div>
      <!--            &lt;!&ndash;-&#45;&#45;clients&#45;&#45;&ndash;&gt;-->
      <!--            <div :style="{ background: '#fff', padding: '31px', minHeight: '60vh' }">-->
      <!--                <div style="background-color: #ffffff;">-->
      <!--                    <div style="text-align: center">-->
      <!--                        <h2 class="headers">You're in good company</h2>-->
      <!--                        <p style="font-size: 1rem;">Companies around the world use Codeln tech recruiting platform to improve-->
      <!--                            their hiring processes.</p>-->

      <!--                    </div>-->


      <!--                </div>-->

      <!--            </div>-->


    </a-layout-content>

    <Footer/>
  </a-layout>

</template>

<script>

import Pageheader from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import UsersService from '@/services/UsersService';

import Vue from 'vue'


export default {
  name: "prices",
  components: {

    Pageheader,
    Footer,


  },
  data() {
    return {
      devs: null,


    }
  },
  async mounted() {
    const auth = {
      headers: {Authorization: 'JWT ' + this.$store.state.token}

    }


  },

  methods: {
    onUpdate(payload) {
      this.results = payload
      console.log(this.results.formattedNumber)
    },


  }


}
</script>

<style scoped>
.managecard {
  border: 1px solid #1876d21c;
  min-height: 79vh;
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;


}

.text-muted {
  color: rgba(0, 0, 0, 0.45);
}

.tracker {
  margin-bottom: 1rem;
}

.headers {
  color: #007BFF;
  font-size: 1.5rem;
}


</style>
