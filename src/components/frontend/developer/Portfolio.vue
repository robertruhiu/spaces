<template>
<a-layout id="components-layout-demo-side" style="min-height: 100vh;">
        <CandidateSider/>
        <a-layout>

            <a-layout-content style="background-color: white">
                <PortfolioHeader/>
                <a-row style="padding: 1% 1%">
                    <a-col :span="16" style=" padding-left: 15px;padding-right: 15px;">
                        <div class="profile" style="padding-bottom: 2%">
                            <a-row>

                                <a-col :span="22">
                                    <p>About</p>
                                    <p>{{currentUserProfile.about}}</p>
                                </a-col>
                            </a-row>
                            <br>
                            <a-row>
                                <a-col :span="6">
                                    Experience:
                                    <a-tag color="#F0F6FD" style="color:#007BFF;">
                                        {{currentUserProfile.years}} years
                                    </a-tag>
                                </a-col>
                                <a-col :span="6">
                                <span>
                                    Availability :
                                <a-tag color="#F0F6FD" style="color:#007BFF;">
                                 {{currentUserProfile.availabilty}}
                            </a-tag>
                            </span>
                                </a-col>
                                <a-col :span="6">
                                <span>
                                    Location :
                                <a-tag color="#F0F6FD" style="color:#007BFF;">
                                 {{currentUserProfile.country}}
                            </a-tag>
                            </span>
                                </a-col>

                            </a-row>
                        </div>
                        <div class="bio">
                            <a-tabs defaultActiveKey="1" >
                                <a-tab-pane key="1">
                                    <span slot="tab">
                                        <a-icon type="codepen"/>
                                        Skills
                                    </span>
                                    <p>Quizzes taken by Candidate</p>
                                    <div v-if="takenquizzes.length>0">
                                        <div v-for="takenquiz in takenquizzes" v-bind:key="takenquiz">
                                        {{takenquiz.quiz.subject.name}}:
                                        <a-progress :percent="takenquiz.score"/>
                                    </div>
                                    </div>
                                    <div v-else>

                                        <p>Take a quiz under <a @click="navigateTo({name:'assessment'})">get verified</a> and it will appear here</p>
                                    </div>


                                </a-tab-pane>

                                <a-tab-pane key="2">
                                    <span slot="tab">
                                        <a-icon type="solution"/>
                                        Projects portfolio
                                    </span>
                                    <div style="padding:0 2%">
                                        <div v-if="portfolio.length>0">
                                            <div style="border-bottom: 1px solid #e8e8e8;padding-bottom: 2%;padding-top: 2%"
                                             v-for="item in portfolio" v-bind:key="item.id">
                                            <p style="font-weight: 700">{{item.title}}</p>
                                            <p>
                                                Tools used:
                                                <a-tag v-for="tag in item.tags" color="blue"
                                                       :key="tag">
                                                    {{tag}}
                                                </a-tag>

                                            </p>
                                            <p>{{item.description}}
                                            </p>
                                            <a :href=" item.demo" target="_blank">view project</a>

                                        </div>
                                        </div>
                                        <div v-else>
                                            <p>You can self test yourself under get verified and build a project
                                                or await a recruiter to asign you one.</p>
                                            <p>More projects and quizzes you have done will make your profile more appealing to them</p>
                                        </div>




                                    </div>


                                </a-tab-pane>

                                <a-tab-pane key="3">
                                    <span slot="tab">
                                        <a-icon type="hourglass"/>
                                        Work experience
                                    </span>
                                    <div style="padding:2%">
                                        <a-timeline>
                                            <a-timeline-item v-for="item in experiences" v-bind:key="item.id">
                                                <p style="font-weight: 700">{{item.title}}</p>
                                                <p><span><a-icon type="bank"/>  {{item.company}} <a-icon
                                                        type="environment"/>  {{item.location}} <a-icon
                                                        type="hourglass"/>  {{item.duration}}months</span>
                                                </p>
                                                <p>
                                                    Technologies used:
                                                    <a-tag v-for="tag in item.tags" color="blue"
                                                           :key="tag">
                                                        {{tag}}
                                                    </a-tag>

                                                </p>


                                                <p>{{item.description}}</p>

                                            </a-timeline-item>

                                        </a-timeline>


                                    </div>

                                </a-tab-pane>
                            </a-tabs>
                        </div>


                    </a-col>
                    <a-col :span="8" style="margin-top: 0.4%">
                        <div class="actions">
                            <p>Verified skills</p>

                            <p>
                                <span style="" v-for="skill in verified_skills" v-bind:key="skill">
                                <a-tag color="#BA68C8" style="color:#ffffff;">
                                    {{skill}}
                                </a-tag>
                            </span>
                            </p>
                            <p>Skill tags</p>
                            <p>Candidate skill tags(what you say you can do)
                            </p>
                            <p>
                                <span style="" v-for="skill in skills" v-bind:key="skill">
                                <a-tag color="#F0F6FD" style="color:#007BFF;">
                                    {{skill}}
                                </a-tag>
                            </span>
                            </p>






                        </div>


                    </a-col>



                </a-row>

            </a-layout-content>
        </a-layout>
    </a-layout>
</template>

<script>
    //experience structure on table
    class Experience {
        constructor(id, title, description, company, location, duration, tech_used) {
            this.key = id;
            this.title = title;
            this.description = description;
            this.company = company;
            this.duration = duration;
            this.tags = tech_used;
            this.location = location;

        }
    }

    class Portfolio {
        constructor(id, title, description, demo, tech_used) {
            this.key = id;
            this.title = title;
            this.description = description;
            this.demo = demo;
            this.tags = tech_used;


        }
    }
    import CandidateSider from "../../layout/CandidateSider";
    import PortfolioHeader from "../../layout/PortfolioHeader";
    import UsersService from '@/services/UsersService'
    import QuizService from '@/services/QuizService';
    export default {
        name: "Portfolio",
        data() {

            return {
                currentUserProfile: null,
                currentUser: null,
                skills: [],
                verified_skills: [],
                experienceslist: [],
                experiences: [],
                portoliolist: [],
                portfolio: [],
                takenquizzes: [],



            }
        },
        components: {
            PortfolioHeader,
            CandidateSider,
        },
        async mounted(){
            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}

            }
            this.currentUser = (await UsersService.retrieveuser(this.$store.state.user.pk, auth)).data
            this.currentUserProfile = (await UsersService.currentuser(this.$store.state.user.pk, auth)).data
            this.skills = this.currentUserProfile.skills.split(',');
            this.verified_skills = this.currentUserProfile.verified_skills.split(',');
            this.portfoliolist = (await UsersService.portfolio(this.$store.state.user.pk, auth)).data
            this.experienceslist = (await UsersService.experience(this.$store.state.user.pk, auth)).data
            this.takenquizzes = (await QuizService.taken(this.$store.state.user.pk, auth)).data;


            for (let i = 0; i < this.portfoliolist.length; i++) {
                let id = this.portfoliolist[i]
                let title = this.portfoliolist[i].title
                let description = this.portfoliolist[i].description
                let demo = this.portfoliolist[i].demo_link
                let tech_used = this.portfoliolist[i].tech_tags.split(',');

                let one_portfolio = new Portfolio(
                    id, title, description, demo, tech_used
                );
                this.portfolio.push(one_portfolio)


            }
            for (let i = 0; i < this.experienceslist.length; i++) {
                let id = this.experienceslist[i]
                let title = this.experienceslist[i].title
                let description = this.experienceslist[i].description
                let company = this.experienceslist[i].company
                let location = this.experienceslist[i].location
                let duration = this.experienceslist[i].duration
                let tech_used = this.experienceslist[i].tech_tags.split(',');

                let one_experience = new Experience(
                    id, title, description, company, location, duration, tech_used
                );
                this.experiences.push(one_experience)


            }
        },
        methods:{
            navigateTo(route) {
                this.$router.push(route)
            },
        }
    }
</script>

<style scoped>
    .bio {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        background-color: white;
        min-height: 50vh;
        margin: 1%;
        padding-left: 15px;
        padding-right: 15px;
        padding-top: 2%;
        padding-bottom: 5%;
    }

    .actions {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        background-color: white;
        min-height: 30vh;
        margin: 1%;
        padding: 4%;
    }

    .profile {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        background-color: white;
        margin: 1%;
        padding: 4%;
    }

</style>
