<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
        <CandidateSider/>
        <a-layout>

            <a-layout-content style="background-color: white">
                <DevHeader/>
                <div :style="{ padding: '5px', background: '#fff',marginTop:'1rem' }">

                    <div>
                        <a-progress :percent="percent" style="padding-right: 2%;padding-left: 2%;padding-top: 2%"/>
                        <a-form :form="form">
                            <div class="steps-content">
                                <a-row>
                                    <a-col :xs="{span: 24, offset: 0  }" :sm="{span: 24, offset: 0 }" :md="{span: 12, offset: 0 }"
                                   :lg="{span: 12, offset: 0 }" :xl="{span: 12,offset: 0 }">
                                        <p>{{steps[current].text}}</p>
                                        <a-form-item>
                                            <p v-if="error" style="color: red">{{error}}</p>
                                            <a-radio-group v-model="currentanswer"
                                                           v-for="answer in steps[current].answers" v-bind:key="answer"
                                            >
                                                <a-radio :style="radioStyle" :value="answer">
                                                    {{answer.text}}
                                                </a-radio>

                                            </a-radio-group>
                                        </a-form-item>


                                    </a-col>
                                    <a-col :xs="{span: 24, offset: 0  }" :sm="{span: 24, offset: 0 }" :md="{span: 12, offset: 0 }"
                                   :lg="{span: 12, offset: 0 }" :xl="{span: 12,offset: 0 }">
                                        <img :src="steps[current].codesample">
                                    </a-col>

                                </a-row>

                            </div>
                            <div class="steps-action">

                                <a-button
                                        v-if="current < steps.length - 1"
                                        type="primary"
                                        @click="next(currentanswer,steps[current].key,randomquiz_id,steps[current].quiz)"
                                >
                                    Next
                                </a-button>
                                <a-button
                                        v-if="current == steps.length - 1"
                                        type="primary"
                                        @click="Done(currentanswer,steps[current].key,randomquiz_id,steps[current].quiz)"
                                >
                                    Finish
                                </a-button>

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

    class Question {
        constructor(pk, id, text, answers, quiz, codesample) {
            this.randomquiz_id = pk;
            this.question_id = id;
            this.text = text;
            this.answers = answers;
            this.codesample = codesample;
            this.quiz = quiz;


        }
    }

    import CandidateSider from "../../../layout/CandidateSider";
    import DevHeader from "../../../layout/DevHeader";
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
                percent: 0

            }
        },
        components: {

            ARow,
            DevHeader,
            CandidateSider,

        },
        async mounted() {
            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}

            }
            this.quiz = (await QuizService.takequiz(this.$store.state.user.pk, this.$route.params.quizId, auth)).data;
            this.questions = (await QuizService.questions(this.$route.params.quizId, auth)).data;
            let randlist
            let randquizids = []
            for (let j = 0; j < this.quiz.length; j++) {
                randquizids.push(this.quiz[j].id)
                randlist = this.quiz[j].questions.split(',')

            }
            this.randomquiz_id = randquizids[0]


            for (let i = 0; i < randlist.length; i++) {
                this.listint.push(Number(randlist[i]))
            }
            this.percent = 100 - (this.listint.length / 30 * 100)


            for (let i = 0; i < this.questions.length; i++) {
                for (let j = 0; j < this.listint.length; j++) {
                    if (this.questions[i].id === this.listint[j]) {
                        this.quizquestions.push(this.questions[i])
                    }
                }
            }
            for (let i = 0; i < this.quizquestions.length; i++) {
                let pk = this.randomquiz_id
                let id = this.quizquestions[i].id
                let text = this.quizquestions[i].text
                let answers = this.quizquestions[i].answers
                let quiz = this.quizquestions[i].quiz
                let codesample = this.quizquestions[i].codesample

                let one_question = new Question(
                    pk, id, text, answers, quiz, codesample
                );
                this.steps.push(one_question)

            }


        },
        methods: {
            navigateTo(route) {
                this.$router.push(route);
            },

            next(answer, question_id, randomquizid, quiz_id) {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                if (answer !== null) {


                    let index = this.listint.indexOf(question_id);
                    this.listint.splice(index, 1);

                    let newquestionlist = this.listint.join()
                    QuizService.postanswer({
                        answer: answer.id,
                        student: this.$store.state.user.pk,
                        quiz: quiz_id
                    }, auth)
                        .then(
                            QuizService.updaterandomquiz(randomquizid, {questions: newquestionlist}, auth)
                                .then(
                                    this.current++,
                                    this.currentanswer = null,
                                    this.error = null,
                                    this.percent = 100 - (this.listint.length / 30 * 100)
                                ).catch(

                            )
                        )
                        .catch()


                } else {
                    this.error = 'please pick one'
                }


            },
            Done(answer, question_id, randomquizid, quiz_id) {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                if (answer !== null) {
                    let index = this.listint.indexOf(question_id);
                    this.listint.splice(index, 1);

                    let newquestionlist = this.listint.join()
                    QuizService.postanswer({
                        answer: answer.id,
                        student: this.$store.state.user.pk,
                        quiz: quiz_id
                    }, auth)
                        .then(
                            QuizService.updaterandomquiz(randomquizid, {questions: newquestionlist}, auth)
                                .then(
                                    QuizService.score(this.$store.state.user.pk,quiz_id, auth)
                                        .then(
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
