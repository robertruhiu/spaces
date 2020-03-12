<template>
    <div>
        <a-layout-header class='header' :style="{width: '100%',height:'9rem',padding: '1px 30px 0',
            borderBottom: '1px solid #e8e8e8'}">


            <div style="padding: 0 1%">
                <a-row>
                    <a-col span="17">

                        <span v-if="path === 'html'"
                              style="color: white;font-weight: bold;font-size: 21px">Html & Css</span>
                        <span v-else style="color: white;font-weight: bold;font-size: 21px">{{path | capitalize}}</span>

                    </a-col>
                    <a-col span="6">
                        <img class="sdg4" :src='subject.image'>
                        <hide-at breakpoint="mediumAndBelow">
                            <img v-if="css" class="sdg4" :src='css.image'>
                        </hide-at>

                    </a-col>
                </a-row>


            </div>


        </a-layout-header>

    </div>
</template>

<script>
    import QuizService from '@/services/QuizService';
    import {hideAt, showAt} from 'vue-breakpoints'


    export default {
        name: "resourceheader",
        components: {
            hideAt


        },
        data() {

            return {
                path: '',
                subject: {},
                subjects: {},
                css: {}

            }

        },
        filters: {
            capitalize: function (value) {
                if (!value) return ''
                value = value.toString()
                return value.charAt(0).toUpperCase() + value.slice(1)
            }
        },
        async mounted() {
            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}

            }
            this.path = this.$route.params.path
            this.subjects = (await QuizService.allsubjects(auth)).data
            for (let i = 0; i < this.subjects.length; i++) {
                if (this.subjects[i].name === this.path) {
                    this.subject = this.subjects[i]
                }
            }
            if (this.subject.name === 'html') {
                for (let j = 0; j < this.subjects.length; j++) {
                    if (this.subjects[j].name === 'css') {
                        this.css = this.subjects[j]

                    }

                }
            }
        }
    }
</script>

<style scoped>
    .header {
        background: #004ec7 url();
        background-position: bottom;
        background-repeat: no-repeat;
    }

    .sdg4 {
        width: 8rem;
    }

</style>