<template>
    <a-layout>
        <Pageheader/>
        <a-layout-content :style="{ padding: '0 0px', marginTop: '4rem' }">
            <div style="margin-top: 3rem">
                <a-row style>
                    <a-col :span="24"
                           style="padding-left: 25%;padding-right: 25%;padding-bottom: 5%;"
                    >
                        <h2>Product Feedback</h2>
                        {{ codeln_survey }}
                        <button @click="onSurveySave">Save The Abv</button>
                        <br>
                        <br>
                        {{job_survey}}
                        <button @click="onSurveySave">Save The Abv</button>

                        <li v-for="developer in developers">
                            {{developer.name}}
                            {{dev_survey}}
                            <button @click="onSurveySave">Save The Abv</button>
                        </li>
                        <br>
                        <button @click="submitFeedback">Submit Feedback</button>
                    </a-col>
                </a-row>
            </div>
        </a-layout-content>
        <Footer/>
    </a-layout>
</template>

<script>
    class SurveyAnswer {
        constructor(recruiter_feedback_id, question, text, developer_id) {
            this.recruiter_feedback_id=recruiter_feedback_id;
            this.question=question;
            this.text=text;
            this.developer_id=developer_id;
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
                job_survey: {},
                dev_survey: {},
                codeln_survey: {},
               survey_answers: {
                    "type": "codeln_survey",
                   "question": "How likely are you to use Codeln again?",
                   "choices": [ { "choice": "Highly Likely", "position": 1 },
                       { "choice": "Not Likely", "position": 2 } ]
               },
            }
        },
        async mounted() {
            Marketplace.recruiterfeedback(this.$route.params.slug).then(resp => {
                this.feedback = resp.data
                this.developers = resp.data.developers
                for (let survey of resp.data.survey_questions) {
                    // this.job_survey = resp.data.survey_questions[0].type
                    if (survey.type == 'job_survey'){
                        this.job_survey = survey
                    }else if (survey.type == 'dev_survey'){
                        this.dev_survey = survey
                    }else if (survey.type == 'codeln_survey'){
                        this.codeln_survey = survey
                    }
                }
            }).catch()
        },
        methods: {
            async submitFeedback() {
                Marketplace.submitfeedback( this.$route.params.slug, this.survey_answers).then(
                    this.$router.push({
                            name: 'recruiter',
                        })
                ).catch(error=>{ return error});
            },

            onSurveySave(recruiter_feedback_id, question, text, developer_id){
                let developer  =developer_id || null ;
                let surveyAnswer = new SurveyAnswer(recruiter_feedback_id, question, text, developer);
                this.survey_answers.push(surveyAnswer);
            }
        }

    };
</script>

<style scoped></style>
