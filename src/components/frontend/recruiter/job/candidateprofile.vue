<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh;background-color:#F8FAFB ">

        <RecruiterSider/>

        <a-layout :style="{ backgroundColor:'#F8FAFB' }">


            <a-layout-content>
                <CandidateHeader/>


                <a-row style="padding: 1% 1%">
                    <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }" :md="{span: 16, offset: 0 }"
                                   :lg="{span: 16, offset: 0 }" :xl="{span: 16,offset: 0 }" style=" padding-left: 15px;padding-right: 15px;">
                        <div class="profile" style="padding-bottom: 2%">
                            <a-row>

                                <a-col :span="22">
                                    <p>About</p>
                                    <p>{{currentUserProfile.about}}</p>
                                    {{staff}}
                                </a-col>
                            </a-row>



                            <div style="margin-top: 0.5rem" v-if="application.stage === 'active' ||application.stage === 'test'|| application.stage === 'interview' ||
                             application.stage === 'offer' || staff ">
                                <a-row>
                                <a-col :span="12" class="spacer">
                                    <a-icon type="mail" /> : {{application.candidate.user.email}}

                                </a-col>
                                     <a-col :span="12" class="spacer">
                                <span>
                                    Salary expectations: ${{application.candidate.salary}} monthly

                            </span>
                                </a-col>
                                <a-col :span="6">
                                <span>
                                    <a-icon type="linkedin" /> :
                                    <a :href="application.candidate.linkedin_url" target='_blank'> Linkedin profile</a>



                            </span>
                                </a-col>
                                <a-col :span="6">
                                <span> <a-icon type="github" /> :

                                    <a :href="application.candidate.github_repo" target='_blank'>Github profile </a>


                            </span>
                                </a-col>
                                    <a-col :span="6">
                                <span>
                                    <a-icon type="file-pdf" /> :
                                    <a :href="cv" target='_blank'> Cv link</a>


                            </span>
                                </a-col>


                            </a-row>


                            </div>

                            <a-row style="margin-top: 1rem">
                                <a-col :span="6" >
                                    Experience <br>
                                    <a-tag color="#F0F6FD" style="color:#007BFF;">
                                        {{currentUserProfile.years}} years
                                    </a-tag>
                                </a-col>
                                <a-col :span="10">
                                <span>
                                    Availability <br>
                                <a-tag color="#F0F6FD" style="color:#007BFF;">
                                 {{currentUserProfile.availabilty}}
                            </a-tag>
                            </span>
                                </a-col>
                                <a-col :span="6">
                                <span>
                                    Location <br>
                                <a-tag color="#F0F6FD" style="color:#007BFF;">
                                 {{currentUserProfile.country}}
                            </a-tag>
                            </span>
                                </a-col>

                            </a-row>

                        </div>
                        <div class="bio">
                            <a-tabs defaultActiveKey="1">
                                <a-tab-pane key="1" v-if="takenquizzes.length >0">
                                    <span slot="tab">
                                        <a-icon type="codepen"/>
                                        Skills
                                    </span>
                                    <p>Quizzes taken by Candidate</p>
                                    <div v-for="takenquiz in takenquizzes" v-bind:key="takenquiz">
                                        {{takenquiz.quiz.subject.name}}:
                                        <a-progress :percent="takenquiz.score"/>
                                    </div>

                                </a-tab-pane>

                                <a-tab-pane key="2" v-if="portfolio.length>0">
                                    <span slot="tab">
                                        <a-icon type="solution"/>
                                        Projects portfolio
                                    </span>
                                    <div style="padding:0 2%">

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


                                </a-tab-pane>

                                <a-tab-pane key="3" v-if="experiences.length>0">
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


                    <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }" :md="{span: 8, offset: 0 }"
                                   :lg="{span: 8, offset: 0 }" :xl="{span: 8,offset: 0 }" style="margin-top: 0.4%;padding-left: 15px;padding-right: 15px">
                        <div class="actions">
                            <p>Skill tags</p>
                            <p>Candidate skill tags(what candidate says they can do.You can asign a
                                project to test)
                            </p>
                            <p>
                                <span style="" v-for="skill in skilltags" v-bind:key="skill.id">
                                <a-tag color="#F0F6FD" style="color:#007BFF;">
                                    {{skill}}
                                </a-tag>
                            </span>
                            </p>
                            <div v-if="application.test_stage ==='complete'">
                                <a>View Project Report</a>

                            </div>
                            <div v-else>

                                <a style="" v-if="application.project"
                                   @click="navigateTo({name:'pickedprojectdetails',params:{projectId:application.project.id,candidateId: currentUser.id,jobId:job.id,applicationId: application.id}})">
                                    <strong>Project Assigned:</strong> {{application.project.name}}
                                </a>
                                <a-button :size="small"
                                          style="background-color: #9c27b0;color: white"
                                          v-if="application.stage === 'test' && application.project === null"
                                          @click="showModal()">
                                    <a-icon type="codepen"/>
                                    Assign test
                                </a-button>



                            <p v-if="application.projectstarttime">
                            Project starttime: {{application.projectstarttime}}
                        </p>
                            </div>





                        </div>


                    </a-col>
                </a-row>
                <a-modal
                        title="Project assignments "
                        v-model="visible"
                        @ok="handleOk"
                        style="top: 60px;"
                        :footer="null"


                >
                    <p style="text-align: center;">Would you like to get a project recommendation or pick a
                        project?</p>
                    <a-row :gutter="16">
                        <a-col :span="12">
                            <a @click="navigateTo({name:'projectlist'})">
                                <div style="border: 1px solid #e8e8e8;padding: 2%;">
                                    <img style="margin-left: 25%;width: 50%;margin-right: 25%"
                                         src="../../../../assets/images/pick.png">
                                    <p style="text-align: center">Pick one by myself</p>

                                </div>

                            </a>
                        </a-col>
                        <a-col :span="12">
                            <a @click="navigateTo({name:'projectdetails',params:{jobId:job.id,candidateId: currentUser.id,applicationId:application.id}})">
                                <div style="border: 1px solid #e8e8e8;padding: 2%;">
                                    <img style="margin-left: 25%;width: 50%;margin-right: 25%;"
                                         src="../../../../assets/images/recommend.png">
                                    <p style="text-align: center">Get recommendation</p>

                                </div>

                            </a>
                        </a-col>
                    </a-row>
                    <div v-if="recentprojects.length>0">
                        <p>My Recent projects</p>
                        <p v-for="project in recentprojects"
                           :key="project">
                            <a v-if="recentprojects"
                               @click="navigateTo({name:'pickedprojectdetails',params:{projectId:project.id,jobId:job.id,candidateId: currentUser.id,applicationId:application.id}})">
                                {{project.name}}
                            </a>
                        </p>



                    </div>

                </a-modal>



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

    class Event {
        constructor(id, title, start, end, color) {
            this.key = id;
            this.title = title
            this.start = start;
            this.end = end;
            this.class = color


        }
    }


    import UsersService from '@/services/UsersService'
    import RecruiterSider from "../../../layout/RecruiterSider";
    import Marketplace from '@/services/Marketplace'
    import CandidateHeader from "../../../layout/CandidateHeader";
    import ARow from "ant-design-vue/es/grid/Row";
    import ACol from "ant-design-vue/es/grid/Col";
    import Projectsservice from '@/services/Projects'
    import moment from 'moment';
    import QuizService from '@/services/QuizService';


    export default {
        name: 'candidateprofile',
        data() {

            return {
                currentUserProfile: {},
                currentUser: {},
                skilltags: [],
                visible: false,
                inputVisible: false,
                inputValue: '',
                application: {},
                experienceslist: [],
                experiences: [],
                portoliolist: [],
                portfolio: [],
                job: {},
                recentprojects: [],
                events: [],
                picked: true,
                takenquizzes: [],
                cv:'',
                staff:false
            }
        },
        components: {
            ACol,
            ARow,

            RecruiterSider,
            CandidateHeader


        },
        async mounted() {
            moment
            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}

            }
            this.currentUser = (await UsersService.currentuser(this.$store.state.user.pk, auth)).data
            this.staff = this.currentUser.user.is_staff


            this.currentUserProfile = (await UsersService.currentuser(this.$route.params.candidateId, auth)).data
            this.skilltags = this.currentUserProfile.skills.split(',');
            this.portfoliolist = (await UsersService.portfolio(this.$route.params.candidateId, auth)).data
            this.experienceslist = (await UsersService.experience(this.$route.params.candidateId, auth)).data
            this.ApplicationId = this.$store.state.route.params.applicationId
            this.takenquizzes = (await QuizService.taken(this.currentUserProfile.id, auth)).data;

            const jobId = this.$store.state.route.params.jobId
            // current application
            if(this.ApplicationId){
                await Marketplace.retrieveapplication(this.ApplicationId, auth)
                .then(response => {
                    this.application = response.data


                })
                .catch(error => {
                    this.picked = false
                    return error


                })
            }





            this.job = (await Marketplace.specificjob(jobId, auth)).data
            if (this.currentUserProfile.file) {
                if (this.currentUserProfile.file.includes("http")) {
                    this.cv = this.currentUserProfile.file
                } else {
                    this.cv = `https://res.cloudinary.com/dwtvwjhn3/${this.currentUserProfile.file} `


                }

            }


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
            // recent projects
            if (this.$store.state.user.pk) {
                this.recentprojects = (await Projectsservice.recentprojects(this.$store.state.user.pk, auth)).data

            }
            this.allevents = (await Marketplace.allmyjobapplicants(this.$store.state.user.pk, auth)).data
            for (let i = 0; i < this.allevents.length; i++) {

                if (this.allevents[i].interviewstatus !== null) {

                    let id = this.allevents[i].id
                    let title = this.allevents[i].candidatename
                    let start = moment(this.allevents[i].interviewstarttime).format("HH:mm")
                    let end = moment(this.allevents[i].interviewendtime).format("HH:mm")
                    let color = this.allevents[i].eventcolor
                    let one_event = new Event(
                        id, title, start, end, color
                    );
                    this.events.push(one_event)


                }


            }


        },
        methods: {
            // acts as filters to project to be asigned under testing stage
            techChoices(tag, checked) {
                const {selectedtech} = this
                const nextSelectedTags = checked
                    ? [...selectedtech, tag]
                    : selectedtech.filter(t => t !== tag)

                this.selectedtech = nextSelectedTags
            },

            onChange(checkedValues) {
                this.test = checkedValues
            },
            //pick recommended
            // async Pick(name) {
            //     const auth = {
            //         headers: {Authorization: 'JWT ' + this.$store.state.token}
            //
            //     }
            //     Marketplace.pickrecommended(
            //         {
            //             job: this.$store.state.route.params.jobId,
            //             candidate: this.$route.params.candidateId,
            //             stage: 'active',
            //             selected: true,
            //             recruiter: this.$store.state.user.pk,
            //             candidatename: name
            //         },
            //         auth
            //     )
            //     this.picked = true
            //     this.$router.push({
            //         name: 'job',
            //         params: { jobId: this.$store.state.route.params.jobId}
            //     })
            //
            //
            // },
            logout() {
                this.$store.dispatch('setToken', null);
                this.$store.dispatch('setUser', null)
                this.$store.dispatch('setisLoggedIn', false)
                this.$store.dispatch('setUsertype', null)
                this.$store.dispatch('setUser_id', null)
                this.$router.push({
                    name: 'home'
                })
            },
            navigateTo(route) {
                this.$router.push(route)
            },
            showModal() {
                this.visible = true

            },
            handleOk() {

                this.visible = false
            },
        },

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
    .spacer{
        margin-bottom: 2%;
    }

</style>
