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
                            <a-tabs defaultActiveKey="1">
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

                                        <p>Take a quiz under <a @click="navigateTo({name:'assessment'})">get
                                            verified</a> and it will appear here</p>
                                    </div>


                                </a-tab-pane>

                                <a-tab-pane key="2">
                                    <span slot="tab">
                                        <a-icon type="solution"/>
                                        Projects portfolio
                                    </span>
                                    <div style="padding:0 2%">
                                        <div v-if="codelnprojects.length>0">
                                            <div style="border-bottom: 1px solid #e8e8e8;padding-bottom: 2%;padding-top: 2%"
                                                 v-for="item in codelnprojects" v-bind:key="item.id">
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
                                            <p>You can self test yourself in get verified menu <a
                                                    @click="navigateTo({name:'developerprojects'})">build a project</a>
                                                or await a recruiter to asign you one.</p>
                                            <p>More projects you have done will make your profile more appealing to
                                                them</p>
                                        </div>


                                    </div>


                                </a-tab-pane>

                                <a-tab-pane key="4">
                                    <span slot="tab">
                                        <a-icon type="solution"/>
                                        Personal portfolio
                                    </span>
                                    <div style="padding:0 2%">
                                        <span style="float: right;color: blue">
                                            <a @click="CreateProject">
                                                <a-icon type="plus-circle" theme="twoTone"/>Add
                                            </a>
                                        </span>
                                        <div v-if="portfolio.length>0">
                                            <div style="border-bottom: 1px solid #e8e8e8;padding-bottom: 2%;padding-top: 2%"
                                                 v-for="item in portfolio" v-bind:key="item.id">
                                                <p style="font-weight: 700">
                                                    {{item.title}}
                                                    <a @click="EditProject(item)">
                                                        <a-icon type="edit" theme="twoTone"/>
                                                    </a>

                                                </p>
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
                                            <p>More projects and quizzes you have done will make your profile more
                                                appealing to them</p>
                                        </div>


                                    </div>


                                </a-tab-pane>

                                <a-tab-pane key="3">
                                    <span slot="tab">
                                        <a-icon type="hourglass"/>
                                        Work experience
                                    </span>
                                    <div style="padding:2%">
                                        <span style="float: right;color: blue">
                                            <a @click="CreateExperience">
                                                <a-icon type="plus-circle" theme="twoTone"/>Add
                                            </a>
                                        </span>
                                        <br>
                                        <div v-if="experiences.length>0">
                                            <a-timeline>
                                                <a-timeline-item v-for="item in experiences" v-bind:key="item.id">

                                                    <p style="font-weight: 700">
                                                        {{item.title}}
                                                        <a @click="EditExperience(item)">
                                                            <a-icon type="edit" theme="twoTone"/>
                                                        </a>

                                                    </p>
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
                                        <div v-else>
                                            <p>Add your recent work stints.Experience builds trust</p>


                                        </div>


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
                <a-modal
                        title="New portfolio project"
                        v-model="createproject"
                        style="top: 20px;"
                        @ok="handleOk"
                >
                    <template slot="footer">

                        <a-button key="submit" type="primary" :loading="loading" @click="SavenewProject">
                            Save
                        </a-button>
                    </template>
                    <a-form
                            :form="form"

                    >
                        <a-form-item
                                label="Title"
                                :label-col="{ span: 24 }"
                                :wrapper-col="{ span: 24 }"
                        >
                            <a-input v-model="projecttitle"

                            />
                        </a-form-item>
                        <a-form-item
                                label="Demo link"
                                :label-col="{ span: 24 }"
                                :wrapper-col="{ span: 24 }"
                        >
                            <a-input v-model="projectdemo"

                            />
                        </a-form-item>
                        <a-form-item
                                label="Repository link"
                                :label-col="{ span: 24 }"
                                :wrapper-col="{ span: 24 }"
                        >
                            <a-input v-model="projectrepo"

                            />
                        </a-form-item>

                        <a-form-item
                                label="Tech used in the project "
                                :label-col="{ span: 24 }"
                                :wrapper-col="{ span:  24}"
                        >
                            <template v-for="(tag, index) in projecttags">
                                <a-tooltip v-if="tag.length > 20" :key="tag" :title="tag">
                                    <a-tag :key="tag"
                                           :afterClose="() => handleClose(tag)" color="#2db7f5">
                                        {{`${tag.slice(0, 20)}...`}}
                                    </a-tag>
                                </a-tooltip>
                                <a-tag v-else :key="tag" :closable="index >= 0"
                                       :afterClose="() => handleClose(tag)" color="#2db7f5">
                                    {{tag}}
                                </a-tag>
                            </template>
                            <a-input
                                    v-if="inputVisible"
                                    ref="input"
                                    type="text"
                                    size="small"
                                    :style="{ width: '78px' }"
                                    :value="inputValue"
                                    @change="handleInputChange"
                                    @blur="handleInputConfirm"
                                    @keyup.enter="handleInputConfirm"
                            />
                            <a-tag v-else @click="showInput"
                                   style="background: #fff; borderStyle: dashed;">
                                <a-icon type="plus"/>
                                New Tag
                            </a-tag>

                        </a-form-item>
                        <a-form-item
                                label="Project Description"
                                :label-col="{ span: 24 }"
                                :wrapper-col="{ span: 24 }"
                        >
                            <a-textarea placeholder="About the project" :rows="4" v-model="projectdescription"/>
                        </a-form-item>


                    </a-form>

                </a-modal>

                <a-modal
                        title="editproject"
                        v-model="editproject"

                >
                    <template slot="footer">

                        <a-button key="submit" type="primary" :loading="loading" @click="UpdateProject">
                            Save
                        </a-button>
                    </template>

                    <a-form
                            :form="form"

                    >
                        <a-form-item
                                label="Title"
                                :label-col="{ span: 24 }"
                                :wrapper-col="{ span: 24 }"
                        >
                            <a-input v-model="currentproject.title"

                            />

                        </a-form-item>
                        <a-form-item
                                label="Demo link"
                                :label-col="{ span: 24 }"
                                :wrapper-col="{ span: 24 }"
                        >
                            <a-input v-model="currentproject.demo"

                            />
                        </a-form-item>
                        <a-form-item
                                label="Repository link"
                                :label-col="{ span: 24 }"
                                :wrapper-col="{ span: 24 }"
                        >
                            <a-input v-model="currentproject.repo"

                            />

                        </a-form-item>
                        <a-form-item
                                label="Tech used in the project "
                                :label-col="{ span: 24 }"
                                :wrapper-col="{ span:  24}"
                        >
                            <template v-for="(tag, index) in projecttags">
                                <a-tooltip v-if="tag.length > 20" :key="tag" :title="tag">
                                    <a-tag :key="tag"
                                           :afterClose="() => handleClose(tag)" color="#2db7f5">
                                        {{`${tag.slice(0, 20)}...`}}
                                    </a-tag>
                                </a-tooltip>
                                <a-tag v-else :key="tag" :closable="index >= 0"
                                       :afterClose="() => handleClose(tag)" color="#2db7f5">
                                    {{tag}}
                                </a-tag>
                            </template>
                            <a-input
                                    v-if="inputVisible"
                                    ref="input"
                                    type="text"
                                    size="small"
                                    :style="{ width: '78px' }"
                                    :value="inputValue"
                                    @change="handleInputChange"
                                    @blur="handleInputConfirm"
                                    @keyup.enter="handleInputConfirm"
                            />
                            <a-tag v-else @click="showInput"
                                   style="background: #fff; borderStyle: dashed;">
                                <a-icon type="plus"/>
                                New Tag
                            </a-tag>

                        </a-form-item>


                        <a-form-item
                                label="Project Description"
                                :label-col="{ span: 24 }"
                                :wrapper-col="{ span: 24 }"
                        >
                            <a-textarea placeholder="About the project" :rows="4" v-model="currentproject.description"/>
                        </a-form-item>


                    </a-form>
                </a-modal>

                <a-modal
                        title="createexperience"
                        v-model="createexperience"
                        @ok="handleOk"
                >
                    <template slot="footer">

                        <a-button key="submit" type="primary" :loading="loading" @click="handleOk">
                            Save
                        </a-button>
                    </template>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </a-modal>

                <a-modal
                        title="editexperience"
                        v-model="editexperience"
                        @ok="handleOk"
                >
                    {{currentexperience}}
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
        constructor(id, title, description, demo, tech_used, repo) {
            this.key = id;
            this.title = title;
            this.description = description;
            this.demo = demo;
            this.tags = tech_used;
            this.repo = repo


        }
    }

    import CandidateSider from "../../layout/CandidateSider";
    import PortfolioHeader from "../../layout/PortfolioHeader";
    import UsersService from '@/services/UsersService'
    import QuizService from '@/services/QuizService';
    import Projects from '@/services/Projects'

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
                codelnprojects: [],
                createproject: false,
                editproject: false,
                createexperience: false,
                editexperience: false,
                currentproject: {},
                currentexperience: {},
                projecttags: [],
                inputVisible: false,
                inputValue: '',
                portfoliotags: [],
                inputVisible1: false,
                inputValue1: '',
                projecttitle: '',
                projectdemo: '',
                projectrepo: '',
                projectdescription: '',
                projecttech: ''


            }
        },
        components: {
            PortfolioHeader,
            CandidateSider,
        },
        async mounted() {
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

            let tempcodelnprojects = (await Projects.myprojects(this.$store.state.user.pk, auth)).data


            for (let i = 0; i < this.portfoliolist.length; i++) {
                let id = this.portfoliolist[i].id
                let title = this.portfoliolist[i].title
                let description = this.portfoliolist[i].description
                let demo = this.portfoliolist[i].demo_link
                let tech_used = this.portfoliolist[i].tech_tags.split(',');
                let repo = this.portfoliolist[i].repository_link

                let one_portfolio = new Portfolio(
                    id, title, description, demo, tech_used, repo
                );
                this.portfolio.push(one_portfolio)


            }
            for (let i = 0; i < this.experienceslist.length; i++) {
                let id = this.experienceslist[i].id
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
            tempcodelnprojects.forEach((project) => {
                if (project.stage === 'analysis_complete' && project.report !== null) {
                    this.codelnprojects.push(project)

                }
            });

        },

        methods: {
            navigateTo(route) {
                this.$router.push(route)
            },
            handleClose(removedTag) {
                const tags = this.projecttags.filter(tag => tag !== removedTag)
                this.projecttags = tags
                let alltags = this.projecttags.join(", ")
                this.projecttech = alltags

            },
            // create
            showInput() {
                this.inputVisible = true
                this.$nextTick(function () {
                    this.$refs.input.focus()
                })
            },

            handleInputChange(e) {
                this.inputValue = e.target.value
            },

            handleInputConfirm() {
                const inputValue = this.inputValue
                let projecttags = this.projecttags
                if (inputValue && projecttags.indexOf(inputValue) === -1) {
                    projecttags = [...projecttags, inputValue]
                }

                let alltags = projecttags.join(", ")
                this.projecttech = alltags
                Object.assign(this, {
                    projecttags,
                    inputVisible: false,
                    inputValue: '',
                })
            },
            // edit

            CreateProject() {
                this.createproject = true
            },

            EditProject(project) {
                this.currentproject = project
                this.projecttags = project.tags
                this.editproject = true
            },

            CreateExperience() {
                this.createexperience = true
            },

            EditExperience(experience) {
                this.currentexperience = experience
                this.editexperience = true
            },

            SavenewProject() {

                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }


                UsersService.newportfolio(
                    {
                        candidate: this.$store.state.user.pk,
                        title: this.projecttitle,
                        description: this.projectdescription,
                        repository_link: this.projectrepo,
                        demo_link: this.projectdemo,
                        tech_tags: this.projecttech

                    },
                    auth)
                    .then(resp => {
                            this.createproject = true
                            this.projecttitle = ''
                            this.projectdemo = ''
                            this.projectrepo = ''
                            this.projectdescription = ''
                            this.projecttech = ''

                            return resp

                        }
                    )
                    .catch()

            },
            UpdateProject() {
                let self = this;
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                this.currentproject.tags = this.projecttags.join(", ")
                UsersService.updateportfolio(this.currentproject.key,
                    {
                        title: this.currentproject.title,
                        description: this.currentproject.description,
                        repository_link: this.currentproject.repo,
                        demo_link: this.currentproject.demo,
                        tech_tags: this.currentproject.tags
                    },
                    auth)
                    .then(resp => {
                            this.currentproject = {}
                            this.portfolio = []
                            this.experiences = []
                            this.codelnprojects = []
                            this.portfoliolist = []
                            this.experienceslist = []
                            this.takenquizzes = []
                            this.editproject = false

                            self.Datarefresh


                            return resp

                        }
                    )
                    .catch()

            }
        },
        Datarefresh() {
            console.log('hi')

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
