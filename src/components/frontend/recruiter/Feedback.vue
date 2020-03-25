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
                        <br>
                        <br>
                        {{job_survey}}

                        <li v-for="developer in developers">
                            {{developer.name}}
                            {{dev_survey}}
                        </li>
<!--                            <div style="background:#ECECEC; padding:30px">-->
<!--                                <a-card title="Card title" :bordered="false" style="width: 300px">-->
<!--                                    <p>Card content</p>-->
<!--                                    <p>Card content</p>-->
<!--                                    <p>Card content</p>-->
<!--                                </a-card>-->
<!--                            </div>-->
                    </a-col>
                </a-row>
            </div>
        </a-layout-content>
        <Footer/>
    </a-layout>
</template>

<script>
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
                job_survey_answer: {},
                dev_survey_answer: {},
                codeln_survey_answer: {},
            }
        },
        async mounted() {
            Marketplace.recruiterfeedback().then(resp => {
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
            async SubmitFeedback() {
                Marketplace.submitfeedback()
            }
        }

    };
</script>

<style scoped></style>
