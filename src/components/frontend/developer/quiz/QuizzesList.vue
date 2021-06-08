<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <CandidateSider/>
    <a-layout>

      <a-layout-content style="background-color: white">
        <DevHeader/>
        <div :style="{ padding: '5px', background: '#fff',marginTop:'1rem' }">
          <a-row style="">
            <a-col :xs="{span: 24, offset: 1 }" :sm="{span: 24, offset: 1 }" :md="{span: 24, offset: 1 }"
                   :lg="{span: 24, offset: 0 }" :xl="{span: 24, offset: 0}">
              <h3 style="margin-left: 1rem;color: #1976D2;font-weight: bold">
                Passed quizzes will reflect on your portfolio
              </h3>
            </a-col>
          </a-row>

          <div style="text-align: center" v-if="waiting">
            <div style="padding: 2%">
              <a-skeleton active />
              <a-skeleton active />
              <a-skeleton active />
            </div>


          </div>
          <div v-else  style="height: 90vh;overflow-y: scroll;">
            <div v-if="takenquizzes.length >0">
              <a-row style="padding: 2%" gutter="16">
                <a-col :xs="{span: 24, offset: 0  }" :sm="{span: 24, offset: 0 }"
                       :md="{span: 12, offset: 0 }"
                       :lg="{span: 6, offset: 0 }" :xl="{span: 6,offset: 0 }" v-for="quiz in takenquizzes"
                       v-bind:key="quiz">
                  <a-card class="nine" >
                    <div style="text-align: center;">
                      <img
                          class="card-img-top"
                          slot="cover"
                          alt="example"
                          :src="quiz.quiz.subject.image"




                      />
                    </div>





                    <a-card-meta >
                      <template slot="description">
                        <span>{{ quiz.quiz.name }}
                          score:{{ quiz.score }}</span>
                        <a-button style="float: right" size="small" @click="showModal(quiz.quiz.id)" type="danger">
                          Retake
                        </a-button>

                      </template>
                    </a-card-meta>
                  </a-card>





                </a-col>
              </a-row>
            </div>

            <a-row style="padding: 2%" gutter="16">

              <a-col :xs="{span: 24, offset: 0  }" :sm="{span: 24, offset: 0 }" :md="{span: 12, offset: 0 }"
                     :lg="{span: 6, offset: 0 }" :xl="{span: 6,offset: 0 }" v-for="quiz in untaken"
                     v-bind:key="quiz" style="margin-bottom: 1rem">

                <a @click="navigateTo({name:'takequiz',params:{candidateId:currentUserProfile.user.id,quizId: quiz.id,}})">
                  <a-card class="nine" >
                    <div style="text-align: center;">
                      <img
                          class="card-img-top"
                          slot="cover"
                          alt="example"
                          :src="quiz.subject.image"




                      />
                    </div>





                    <a-card-meta >
                      <template slot="description">
                        <span>{{ quiz.name }}
                          </span>


                      </template>
                    </a-card-meta>
                  </a-card>




                </a>


              </a-col>

            </a-row>

          </div>
          <a-modal v-model="retakemodal" title="Retake Quiz">
            <template slot="footer">
              <a-button key="back" @click="handleCancel">
                Return
              </a-button>
              <a-button key="submit" type="danger" :loading="retakeload" @click="retake(retakequizid)">
                Retake
              </a-button>
            </template>

            <p>Are you sure you want to retake?</p>


          </a-modal>


        </div>
      </a-layout-content>

    </a-layout>
  </a-layout>

</template>

<script>


import CandidateSider from "../layout/CandidateSider";
import DevHeader from "../layout/DevHeader";
import QuizService from '@/services/QuizService';
import UsersService from '@/services/UsersService'
import User from "@/services/UsersService";

export default {
  name: "QuizzesList",
  data() {
    return {
      quizzes: [],
      currentUserProfile: null,
      takenquizzes: [],
      untaken: [],
      waiting: true,
      taken: [],
      sasa: [],
      retakeload: false,
      retakemodal: false,
      retakequizid: '',
      UniqueUntakenQuizIds:[]


    }
  },
  components: {
    DevHeader,
    CandidateSider,

  },
  async mounted() {

    this.currentUserProfile = this.$store.state.user_object
    this.fetchQuizzes()






  },
  methods: {

    fetchQuizzes(){
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      QuizService.allquizzes(auth)
      .then(resp=>{
        this.quizzes = resp.data

        this.fetchTaken()
      })


    },
    fetchTaken(){
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      QuizService.taken(this.$store.state.user.pk, auth)
      .then(resp=>{
        this.takenquizzes = resp.data
        this.computeQuizzes()

      })
    },
    computeQuizzes(){
      let allquizids = []
      let takenIds =[]
      if (this.takenquizzes.length > 0) {
        this.takenquizzes.forEach(taken=>{
          takenIds.push(taken.quiz.id)

        })


      } else {
        this.untaken = this.quizzes
      }
      this.quizzes.forEach(quiz=>{
        allquizids.push(quiz.id)

      })
      takenIds.forEach(id=>{
        const index = allquizids.indexOf(id);
        if (index > -1) {
          allquizids.splice(index, 1);
        }
      })

      this.quizzes.forEach(quiz=>{
        allquizids.forEach(id=>{
          if(quiz.id === id){
            this.untaken.push(quiz)
          }
        })
      })

      this.waiting = false
      // remove duplicate ids in untakenquizIds


    },
    navigateTo(route) {
      this.$router.push(route);
    },
    showModal(quiz) {
      this.retakequizid = quiz

      this.retakemodal = true;
    },
    retake(quiz) {
      this.retakeload = true
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }

      QuizService.deletequizanswer(this.currentUserProfile.user.id, quiz, auth)
          .then(() => {
                QuizService.deletequiztaken(this.currentUserProfile.user.id, quiz, auth)
                    .then(() => {
                          QuizService.deleterquizrandom(this.currentUserProfile.user.id, quiz, auth)
                              .then(() => {
                                    this.retakequizid = ''
                                    this.retakeload = false
                                    this.$router.push({
                                      name: 'takequiz',
                                      params: {candidateId: this.currentUserProfile.user.id, quizId: quiz,}
                                    })

                                  }
                              )

                        }
                    )
              }
          )


    },
    handleCancel() {
      this.retakemodal = false;
      this.retakeload = false
    },
  }
}
</script>

<style scoped>
.actioncards {

  border-radius: 0;
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;
  padding: 0.89rem;
  height: 8rem;
  margin-bottom: 1rem;
}

.poolavatar {
  width: 23%;

}
.card-img-top{


  width: 30%;



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
