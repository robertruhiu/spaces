<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <CandidateSider/>
    <a-layout>

      <a-layout-content style="background-color: white">
        <a-card class="hellocard" :bordered="false">


          <a-breadcrumb>
            <a-breadcrumb-item><a @click="$router.push('/developer')" style="color: white">Dashboard</a>
            </a-breadcrumb-item>
            <a-breadcrumb-item style="color: white"><a @click="$router.push('/assessment')" style="color: white">Skill Verification</a></a-breadcrumb-item>
            <a-breadcrumb-item style="color: white">Quiz List</a-breadcrumb-item>

          </a-breadcrumb>
          <span style="font-size: 1.7rem;font-family: sofia_prosemibold;margin-bottom: 0;color: white">
                Passed quizzes will reflect on your portfolio</span>


        </a-card>
        <div :style="{ padding: '5px', background: '#fff',marginTop:'1rem' }">


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
import QuizService from '@/services/QuizService';


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
.hellocard {
  height: 8rem;
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;
  background: #004EC7;
  border-radius: 0;
  color: white;

}

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
