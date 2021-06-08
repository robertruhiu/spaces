<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <CandidateSider/>
    <a-layout>

      <a-layout-content style="background-color: white">
        <DevHeader/>
        <div :style="{ padding: '5px', background: '#fff',marginTop:'1rem' }">

          <div>
            <div style="padding: 2%">
              <a-progress :percent="percent |roundNumber" />
            </div>


            <a-form :form="form">
              <div class="steps-content">

                <a-row>
                  <a-col :xs="{span: 24, offset: 0  }" :sm="{span: 24, offset: 0 }"
                         :md="{span: 12, offset: 0 }"
                         :lg="{span: 12, offset: 0 }" :xl="{span: 12,offset: 0 }">
                    <span v-if="questionloading">
                      <a-skeleton active />
                    </span>

                    <p v-else>{{ currentquestion.text }}</p>
                    <span v-if="answerloading">
                      <a-skeleton active />
                    </span>

                    <a-form-item v-else>
                      <p v-if="error" style="color: red">{{ error }}</p>
                      <a-radio-group v-model="currentanswer"
                                     v-for="answer in currentanswersList" v-bind:key="answer"
                      >
                        <a-radio :style="radioStyle" :value="answer">
                          {{ answer.text }}
                        </a-radio>

                      </a-radio-group>
                    </a-form-item>


                  </a-col>
                  <a-col :xs="{span: 24, offset: 0  }" :sm="{span: 24, offset: 0 }"
                         :md="{span: 12, offset: 0 }"
                         :lg="{span: 12, offset: 0 }" :xl="{span: 12,offset: 0 }">
                    <span v-if="questionloading">
                      <a-skeleton active />
                    </span>
                    <img :src="currentquestion.codesample" v-else>
                  </a-col>

                </a-row>

              </div>
              <div class="steps-action">

                <div v-if="answerloading">
                  <a-button
                      v-if="quizquestions.length >1"
                      type="primary"
                      disabled

                  >
                    Next
                  </a-button>
                  <a-button
                      v-if="quizquestions.length === 1"
                      type="primary"
                      disabled

                  >
                    Finish
                  </a-button>

                </div>
                <div v-else>
                  <a-button
                      v-if="quizquestions.length >1"
                      type="primary"
                      @click="next(currentanswer,currentquestion.id,quiz.id,$route.params.quizId)"

                  >
                    Next
                  </a-button>
                  <a-button
                      v-if="quizquestions.length === 1"
                      type="primary"
                      @click="Done(currentanswer)"
                  >
                    Finish
                  </a-button>

                </div>



              </div>

            </a-form>

          </div>


        </div>


      </a-layout-content>


    </a-layout>
  </a-layout>

</template>

<script>
import ARow from "ant-design-vue/es/grid/Row";



import CandidateSider from "../layout/CandidateSider";
import DevHeader from "../layout/DevHeader";
import QuizService from '@/services/QuizService';


export default {
  name: "takequiz",
  data() {
    return {
      quiz: null,
      questions: null,
      quizquestions: [],
      current: 0,
      steps: [],
      radioStyle: {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
      },
      currentanswer: null,
      error: null,
      listint: [],
      randomquiz_id: null,
      percent: 0,
      currentanswersList:[],
      currentquestion: {},
      questionloading:false,
      answerloading:false

    }
  },
  components: {

    ARow,
    DevHeader,
    CandidateSider,

  },
  async mounted() {

    this.fetchRandQuiz()


  },
  filters: {
    roundNumber: function (value) {

      return Math.round(value);
    }
  },
  methods: {
    fetchRandQuiz() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      this.questionloading = true
      this.answerloading = true
      QuizService.takequiz(this.$store.state.user.pk, this.$route.params.quizId, auth)
      .then(resp=>{
        this.quiz = resp.data[0]

        let randomquestionsIdlist = this.quiz.questions.split(',')
        randomquestionsIdlist.forEach(stringID=>{
          this.listint.push(Number(stringID))
        })


        this.percent = 100 - (this.listint.length / 30 * 100)
        this.fetchQuestions()
      })


    },
    fetchQuestions(){
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      QuizService.questions(this.$route.params.quizId, auth)
      .then(resp=>{
        this.questions = resp.data
        this.ComputeQuiz()
      })

    },
    ComputeQuiz(){
      this.listint.forEach(questionIdint=>{
        this.questions.forEach(question=>{
          if(question.id===questionIdint){
            this.quizquestions.push(question)
          }
        })
      })
      this.currentquestion = this.quizquestions[0]
      this.questionloading = false
      this.fetchCurrentQuestionanswers()




    },
    fetchCurrentQuestionanswers(){
      this.answerloading = true
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      QuizService.questionanswer(this.listint[0],auth)
      .then(resp=>{
        this.currentanswersList = resp.data
        this.answerloading = false


      })
    },


    navigateTo(route) {
      this.$router.push(route);
    },

    next(answer) {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      if (answer !== null) {
        this.questionloading = true

        let index = this.listint.indexOf(this.currentquestion.id);
        this.listint.splice(index, 1);
        let indexquestions = this.quizquestions.indexOf(this.currentquestion);
        this.quizquestions.splice(indexquestions, 1);
        this.currentquestion = this.quizquestions[0]
        this.questionloading = false
        this.currentanswer =null
        this.current++
        this.error = null
        this.percent = 100 - (this.listint.length / 30 * 100)
        this.fetchCurrentQuestionanswers()

        let newquestionlist = this.listint.join()
        QuizService.postanswer({
          answer: answer.id,
          student: this.$store.state.user.pk,
          quiz: this.$route.params.quizId
        }, auth)
            .then(
                QuizService.updaterandomquiz(this.quiz.id, {questions: newquestionlist}, auth)
                    .then().catch(

                )
            )
            .catch()


      } else {
        this.error = 'please pick one'
      }


    },
    Done(answer) {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      if (answer !== null) {
        let index = this.listint.indexOf(this.currentquestion.id);
        this.listint.splice(index, 1);

        let indexquestions = this.quizquestions.indexOf(this.currentquestion);
        this.quizquestions.splice(indexquestions, 1);
        this.answerloading = true

        let newquestionlist = this.listint.join()
        QuizService.postanswer({
          answer: answer.id,
          student: this.$store.state.user.pk,
          quiz: this.$route.params.quizId
        }, auth)
            .then(
                QuizService.updaterandomquiz(this.quiz.id, {questions: newquestionlist}, auth)
                    .then(
                        QuizService.score(this.$store.state.user.pk, this.$route.params.quizId, auth)
                            .then(
                                this.answerloading = true,
                                this.current++,
                                this.currentanswer = null,
                                this.error = null,
                                this.percent = 100 - (this.listint.length / 30 * 100),
                                this.$router.push({
                                  name: 'quizlist'
                                })

                            )
                            .catch()
                    ).catch(

                )
            )
            .catch()
      } else {
        this.error = 'please pick one'
      }

    },


  }
}
</script>

<style scoped>
.steps-content {
  margin-top: 16px;
  border: 1px dashed #e9e9e9;
  border-radius: 6px;
  background-color: #fafafa;
  min-height: 200px;
  padding: 2%;
  margin-left: 2%;
  margin-right: 2%;
}

.steps-action {
  margin-top: 24px;
  margin-left: 2%;
  margin-right: 2%;
}

</style>
