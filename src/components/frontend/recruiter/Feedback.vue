<template>
    <a-layout>
        <Pageheader/>
        <a-layout-content :style="{ padding: '0 0px', marginTop: '4rem',backgroundColor:'white' }">
            <div style="margin-top: 3rem">
                <a-row style>
                    <a-col :xs="{span: 22, offset: 0 }" :sm="{span: 24, offset: 0 }" :md="{span: 18, offset: 3 }"
                           :lg="{span: 18, offset: 3 }" :xl="{span: 18, offset: 3 }"


                    >
                        <h2>Product Feedback</h2>
                        <br>
                        <div style="box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;padding: 3%;margin-bottom: 5rem">
                            <a-steps :current="current">
                                <a-step v-for="item in steps" :key="item.title" :title="item.title"/>
                            </a-steps>
                            <div class="steps-content" style="padding: 3%">{{steps[current].content}}
                                <div v-if="current === 0">

                                    <div v-for="question in codeln_survey" v-bind:key="question.id"
                                         style="margin-bottom: 1rem">
                                        <p>{{question.question}}</p>
                                        <p v-if="errorstep1.includes(question.id)" style="color: red">*required</p>
                                        <a-radio-group v-model="question.answer">


                                            <a-radio :style="radioStyle" v-for="choice in question.choices"
                                                     v-bind:key="choice" :value="choice.choice"
                                                     @change="onChangestep1(question.id,recruiter,question.question,choice.choice)">
                                                {{choice.choice}}
                                            </a-radio>

                                        </a-radio-group>

                                    </div>


                                </div>
                                <div v-if="current === 1">


                                    <div v-for="jobquestion in job_survey" v-bind:key="jobquestion.id"
                                         style="margin-bottom: 1rem">

                                        <p>{{jobquestion.question}}</p>
                                        <p v-if="errorstep2.includes(jobquestion.id)" style="color: red">*required</p>
                                        <a-radio-group v-model="jobquestion.answer"
                                        >

                                            <a-radio :style="radioStyle" v-for="choice in jobquestion.choices"
                                                     v-bind:key="choice" :value="choice.choice"
                                                     @change="onChangestep1(jobquestion.id,recruiter,jobquestion.question,choice.choice)">
                                                {{choice.choice}}
                                            </a-radio>

                                        </a-radio-group>
                                    </div>


                                </div>
                                <div v-if="current === 2">
                                    <!--                                    <div v-for="developer in developers" v-bind:key="developer">-->
                                    <!--                                        <p>{{developer.candidate.user.first_name}}-->
                                    <!--                                            {{developer.candidate.user.last_name}}</p>-->
                                    <!--                                        <div v-for="survey in dev_survey" v-bind:key="survey.id"-->
                                    <!--                                             style="margin-bottom: 1rem">-->

                                    <!--                                            <p>{{survey.question}}</p>-->
                                    <!--                                            <a-radio-group-->
                                    <!--                                            >-->

                                    <!--                                                <a-radio :style="radioStyle" v-for="choice in survey.choices"-->
                                    <!--                                                         v-bind:key="choice.id" :value="choice.choice"-->
                                    <!--                                                         @click="onChangeperdevsurvey(recruiter,survey.question,choice.choice,developer.candidate.user.id)">-->
                                    <!--                                                    {{choice.choice}}-->
                                    <!--                                                </a-radio>-->

                                    <!--                                            </a-radio-group>-->


                                    <!--                                        </div>-->

                                    <!--                                    </div>-->
                                    <div v-for="one_survey in survey"
                                         v-bind:key="one_survey.developer.candidate.user.id">
                                        <p>{{one_survey.developer.candidate.user.first_name}}
                                            {{one_survey.developer.candidate.user.last_name}}</p>
                                        <div v-for="surveyquestion in one_survey.survey" v-bind:key="surveyquestion.id"
                                             style="margin-bottom: 1rem">

                                            <p>{{surveyquestion.question}}</p>
                                            <a-radio-group
                                            >

                                                <a-radio :style="radioStyle" v-for="choice in surveyquestion.choices"
                                                         v-bind:key="choice.id" :value="choice.choice"
                                                         @click="onChangeperdevsurvey(one_survey,surveyquestion,choice.choice)">
                                                    {{choice.choice}}
                                                </a-radio>

                                            </a-radio-group>


                                        </div>

                                    </div>


                                </div>

                            </div>
                            <div class="steps-action">
                                <a-button v-if="current < steps.length - 1" type="primary" @click="next">
                                    Next
                                </a-button>
                                <a-button
                                        v-if="current == steps.length - 1"
                                        type="primary"
                                        @click="Done"
                                >
                                    Done
                                </a-button>
                                <a-button v-if="current>0" style="margin-left: 8px" @click="prev">
                                    Previous
                                </a-button>
                            </div>
                        </div>
                        {{survey[0].survey}}
                        <p>
                            {{survey[1].survey}}
                        </p>


                    </a-col>
                </a-row>

            </div>
        </a-layout-content>
        <Footer/>
    </a-layout>
</template>

<script>
    class CodelnSurvey {
        constructor(id, choices, question, answer) {
            this.id = id
            this.question = question;
            this.choices = choices;
            this.answer = answer;


        }
    }

    class JobSurvey {
        constructor(id, choices, question, answer) {
            this.id = id
            this.question = question;
            this.choices = choices;
            this.answer = answer;


        }
    }

    class DevSurvey {
        constructor(id, choices, question, answer) {
            this.id = id
            this.question = question;
            this.choices = choices;
            this.answer = answer;


        }
    }


    class SurveyAnswer {
        constructor(recruiter_feedback_id, question, text, developer_id) {
            this.recruiter_feedback_id = recruiter_feedback_id;
            this.question = question;
            this.text = text;
            this.developer_id = developer_id;
        }
    }

    import Pageheader from '../../layout/Header';
    import Footer from '../../layout/Footer';
    import Marketplace from "../../../services/Marketplace";


    export default {
        name: 'Feedback',
        components: {Footer, Pageheader},
        data() {
            return {
                feedback: {},
                developers: {},
                job_survey: [],
                dev_survey: [],
                codeln_survey: [],
                perdev_survey: [],
                survey_answers: [],
                current: 0,
                survey: [],
                steps: [{
                    title: 'Codeln Survey',

                }, {
                    title: 'Job Survey',

                }, {
                    title: 'Dev Survey',

                }],
                radioStyle: {
                    display: 'block',
                    height: '30px',
                    lineHeight: '30px',
                },
                errorstep1: [],
                errorstep2: [],
                errorstep3: [],
                recruiter: null,

            }
        },
        async mounted() {
            Marketplace.recruiterfeedback().then(resp => {
                this.feedback = resp.data
                this.developers = resp.data.developers
                this.recruiter = this.developers[0].recruiter.id
                for (let survey of resp.data.survey_questions) {

                    if (survey.type === 'job_survey') {
                        let question = survey.question
                        let choices = survey.choices
                        let answer = survey.answer
                        let id = survey.id
                        let onesurveyquestion = new JobSurvey(id, choices, question, answer)


                        this.job_survey.push(onesurveyquestion)
                    } else if (survey.type === 'dev_survey') {
                        let onesurveyquestion = null


                        let question = survey.question
                        let choices = survey.choices
                        let answer = null
                        let id = survey.id

                        onesurveyquestion = new DevSurvey(id, choices, question, answer)


                        this.dev_survey.push(onesurveyquestion)


                    } else if (survey.type === 'codeln_survey') {

                        // this.codeln_survey = survey
                        let question = survey.question
                        let choices = survey.choices
                        let answer = survey.answer
                        let id = survey.id

                        let onesurveyquestion = new CodelnSurvey(id, choices, question, answer)


                        this.codeln_survey.push(onesurveyquestion)


                    }


                }
                this.developers.forEach(dev => {
                    let survey_object = {developer: dev, survey: this.dev_survey}
                    this.survey.push(survey_object)
                })


            }).catch()
        },
        methods: {
            async submitFeedback() {
                Marketplace.submitfeedback(this.survey_answers).then(resp => {
                        this.survey_answers = []


                    }
                ).catch(error => {
                    return error
                });
            },

            onSurveySave(recruiter_feedback_id, question, text, developer_id) {
                let developer = developer_id || null;
                let surveyAnswer = new SurveyAnswer(recruiter_feedback_id, question, text, developer);
                this.survey_answers.push(surveyAnswer);
            },
            onChangestep1(question_id, recruiter_feedback_id, question, text, developer_id) {
                if (this.errorstep1.includes(question_id)) {
                    const index = this.errorstep1.indexOf(question_id);
                    if (index > -1) {
                        this.errorstep1.splice(index, 1);
                    }

                } else {
                    let developer = developer_id || null;
                    let surveyAnswer = new SurveyAnswer(recruiter_feedback_id, question, text, developer);
                    this.survey_answers.push(surveyAnswer);

                }

            },
            onChangestep2(question_id) {
                if (this.errorstep2.includes(question_id)) {
                    const index = this.errorstep2.indexOf(question_id);
                    if (index > -1) {
                        this.errorstep2.splice(index, 1);
                    }

                }

            },

            onChangeperdevsurvey(survey_object, question, answer) {
                this.survey.forEach(one_survey => {
                    if (one_survey === survey_object) {
                        one_survey.survey.forEach(questionobject => {
                            if (questionobject === question) {
                                questionobject.answer = answer
                            }

                        })
                    }
                })


            },
            next() {
                let self = this

                if (this.current === 0) {
                    this.errorstep1 = []

                    this.codeln_survey.forEach(element => {

                            if (element.answer === undefined) {
                                this.errorstep1.push(element.id)
                            }
                        }
                    )
                    ;
                    if (this.errorstep1.length === 0) {
                        self.submitFeedback()
                        this.current++;
                    }


                } else if (this.current === 1) {
                    this.errorstep2 = []

                    this.job_survey.forEach(element => {

                            if (element.answer === undefined) {
                                this.errorstep2.push(element.id)
                            }
                        }
                    )
                    ;
                    if (this.errorstep2.length === 0) {
                        self.submitFeedback()
                        this.current++;
                    }


                } else if (this.current === 2) {
                    this.errorstep2 = []

                    this.dev_survey.forEach(element => {

                            if (element.answer === undefined) {
                                this.errorstep2.push(element.id)
                            }
                        }
                    )
                    ;
                    if (this.errorstep2.length === 0) {
                        self.submitFeedback()
                        this.$router.push({
                            name: 'recruiter',
                        })

                    }


                }

            },
            Done() {
                let self = this
                this.errorstep2 = []
                self.submitFeedback()
                this.$router.push({
                    name: 'recruiter',
                })
            },
            prev() {
                this.current--;
            },
        }

    };
</script>

<style scoped></style>
