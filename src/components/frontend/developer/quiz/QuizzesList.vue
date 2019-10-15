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
                        <a-spin/>

                    </div>
                    <div v-else>
                        <div v-if="takenquizzes.length >0">
                        <a-row style="padding: 2%" gutter="16">
                            <a-col :xs="{span: 24, offset: 0  }" :sm="{span: 24, offset: 0 }"
                                   :md="{span: 12, offset: 0 }"
                                   :lg="{span: 6, offset: 0 }" :xl="{span: 6,offset: 0 }" v-for="quiz in takenquizzes"
                                   v-bind:key="quiz">


                                <a-row class="ant-card actioncards">
                                    <a-col span="24">
                                        <div style="text-align: center">
                                            <img class="poolavatar" :src="quiz.quiz.subject.image">
                                        </div>
                                    </a-col>
                                    <a-col span="24" style="text-align: center">
                                        {{quiz.quiz.name}}
                                        score:{{quiz.score}}


                                    </a-col>


                                </a-row>


                            </a-col>
                        </a-row>
                    </div>

                    <a-row style="padding: 2%" gutter="16">

                        <a-col :xs="{span: 24, offset: 0  }" :sm="{span: 24, offset: 0 }" :md="{span: 12, offset: 0 }"
                               :lg="{span: 6, offset: 0 }" :xl="{span: 6,offset: 0 }" v-for="quiz in untaken"
                               v-bind:key="quiz">

                            <a @click="navigateTo({name:'takequiz',params:{candidateId:currentUserProfile.user.id,quizId: quiz.id,}})">


                                <a-row class="ant-card actioncards">
                                    <a-col span="24">
                                        <div style="text-align: center">
                                            <img class="poolavatar" :src="quiz.subject.image">
                                        </div>
                                    </a-col>
                                    <a-col span="24" style="text-align: center">
                                        {{quiz.name}}


                                    </a-col>


                                </a-row>

                            </a>


                        </a-col>

                    </a-row>

                    </div>



                </div>
            </a-layout-content>
            <banner/>
        </a-layout>
    </a-layout>

</template>

<script>


    import CandidateSider from "../../../layout/CandidateSider";
    import DevHeader from "../../../layout/DevHeader";
    import QuizService from '@/services/QuizService';
    import UsersService from '@/services/UsersService'
    import banner from '@/components/layout/banner'

    export default {
        name: "QuizzesList",
        data() {
            return {
                quizzes: [],
                currentUserProfile: null,
                takenquizzes: [],
                untaken: [],
                waiting:true,
                taken:[],
                sasa:[]


            }
        },
        components: {
            DevHeader,
            CandidateSider,banner

        },
        async mounted() {
            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}

            }
            this.currentUserProfile = (await UsersService.currentuser(this.$store.state.user.pk, auth)).data
            this.quizzes = (await QuizService.allquizzes(auth)).data;
            this.takenquizzes = (await QuizService.taken(this.$store.state.user.pk, auth)).data;

            let ds =[]
            if (this.takenquizzes.length > 0) {
                for (let i = 0; i < this.quizzes.length; i++) {
                    for (let j = 0; j < this.takenquizzes.length; j++) {
                        if (this.quizzes[i].id === this.takenquizzes[j].quiz.id) {
                            this.taken.push(this.quizzes[i].id)
                        }else {
                            ds.push(this.quizzes[i].id)
                        }
                    }
                }
            } else {
                this.untaken = this.quizzes
            }
            this.waiting = false
            this.sasa = Array.from(new Set(ds))
            for (let i = 0; i < this.quizzes.length; i++) {
                for(let j=0;j<this.sasa.length;j++){
                    if(this.quizzes[i].id === this.sasa[j]){
                        this.untaken.push(this.quizzes[i])

                    }

            }
            }




        },
        methods: {
            navigateTo(route) {
                this.$router.push(route);
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
        width: 30%;

    }
</style>
