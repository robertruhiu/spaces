<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh;background-color:#F8FAFB ">

        <RecruiterSider/>

        <a-layout :style="{ marginLeft: '200px',backgroundColor:'#F8FAFB' }">


            <a-layout-content>
                <CandidateHeader/>


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
                                    Javascript :
                                    <a-progress :percent="30"/>
                                    java:
                                    <a-progress :percent="50"/>
                                    React:
                                    <a-progress :percent="70"/>
                                    Angular:
                                    <a-progress :percent="89"/>
                                </a-tab-pane>

                                <a-tab-pane key="2">
                                    <span slot="tab">
                                        <a-icon type="solution"/>
                                        Projects portfolio
                                    </span>
                                    <div style="padding:0 2%">

                                        <div style="border-bottom: 1px solid #e8e8e8;padding-bottom: 2%;padding-top: 2%" v-for="item in portfolio" v-bind:key="item.id">
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

                            <p>
                                <a-button type="primary" @click="showModal">Asign code test</a-button>
                            </p>


                        </div>


                    </a-col>
                </a-row>
                <a-modal
                        title="Pick  technologies "
                        v-model="visible"
                        @ok="handleOk"
                        style="top: 20px;"


                >
                    <a-alert style="margin-bottom: 1%"
                             message="Testing bundle needed to enable project asignment to candidates" type="info"/>
                    <template slot="footer">
                        <a-button key="back" @click="handleOk">Return</a-button>
                        <a-button key="submit" type="primary">
                            Submit
                        </a-button>
                    </template>
                    <p>My choices :
                        <span>
                                <a-tag v-for="tag in selectedtech" color="blue"
                                       :key="tag">{{tag.name}}</a-tag>
                            </span>
                    </p>
                    <a-row :gutter="8">
                        <a-col :span="6" v-for=" tag in techchoicestags" :key="tag" style="margin-bottom: 1%;">
                            <a-checkable-tag
                                    :key="tag"
                                    :checked="selectedtech.indexOf(tag) > -1"
                                    @change="(checked) => techChoices(tag, checked)"
                                    style="width: 5.6rem;height:6.0rem"
                            >
                                <img style="width: 100%;" :src='tag.image'>
                                <div style="text-align: center;">{{tag.name}}</div>

                            </a-checkable-tag>

                        </a-col>
                    </a-row>


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


    import UsersService from '@/services/UsersService'
    import RecruiterSider from "../../layout/RecruiterSider";

    import CandidateHeader from "../../layout/CandidateHeader";
    import ARow from "ant-design-vue/es/grid/Row";
    import ACol from "ant-design-vue/es/grid/Col";


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
                techchoicestags: [
                    {name: 'javascript', image: 'https://res.cloudinary.com/dwtvwjhn3/image/upload/v1563533210/images/production/icons8-javascript_vsjvup.svg'},
                    {name: 'react', image: 'https://res.cloudinary.com/dwtvwjhn3/image/upload/v1563533216/images/production/react_hxj4ki.svg'},
                    {name: 'html', image: 'https://res.cloudinary.com/dwtvwjhn3/image/upload/v1563533441/images/production/css-3_gcvrpj.png'},
                    {name: 'css', image: 'https://res.cloudinary.com/dwtvwjhn3/image/upload/v1563533441/images/production/html-5_sttz5d.png'},
                    {name: 'php', image: 'https://res.cloudinary.com/dwtvwjhn3/image/upload/v1563533215/images/production/php_qtwuri.svg'},
                    {name: 'nodejs', image: 'https://res.cloudinary.com/dwtvwjhn3/image/upload/v1563533210/images/production/icons8-nodejs_xxsktw.svg'},
                    {name: 'python', image: 'https://res.cloudinary.com/dwtvwjhn3/image/upload/v1563533215/images/production/python_nrtl3e.svg'},
                    {name: 'sql', image: 'https://res.cloudinary.com/dwtvwjhn3/image/upload/v1563533214/images/production/mysql_qkvupj.svg'},
                    {name: 'postgres', image: 'https://res.cloudinary.com/dwtvwjhn3/image/upload/v1563532798/images/postgresql_j8ggec.png'},
                    {name: 'android', image: 'https://res.cloudinary.com/dwtvwjhn3/image/upload/v1563533205/images/production/android_uylhbx.svg'},
                    {
                        name: 'angular',
                        image: 'https://res.cloudinary.com/dwtvwjhn3/image/upload/v1563532798/images/angular_yntlau.png'
                    },
                    {
                        name: 'vue',
                        image: 'https://res.cloudinary.com/dwtvwjhn3/image/upload/v1563532798/images/vue_m4s1mo.png'
                    },
                    {name: 'laravel', image: 'https://res.cloudinary.com/dwtvwjhn3/image/upload/v1563533214/images/production/Laravel_lxvtad.svg'},
                    {
                        name: 'django',
                        image: 'https://res.cloudinary.com/dwtvwjhn3/image/upload/v1563532797/images/django_nncvxo.jpg'
                    },
                    {name: 'bootstrap', image: 'https://res.cloudinary.com/dwtvwjhn3/image/upload/v1563532994/images/bootstrap_fihh5l.png'},
                    {name: 'java', image: 'https://res.cloudinary.com/dwtvwjhn3/image/upload/v1563532994/images/java_tayu3b.png'},

                ],
                selectedtech: [],
                experienceslist: [],
                experiences: [],
                portoliolist:[],
                portfolio :[]
            }
        },
        components: {
            ACol,
            ARow,

            RecruiterSider,
            CandidateHeader


        },
        async mounted() {

            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}

            }
            this.currentUser = (await UsersService.retrieveuser(this.$route.params.candidateID, auth)).data
            this.currentUserProfile = (await UsersService.currentuser(this.$route.params.candidateID, auth)).data
            this.skilltags = this.currentUserProfile.skills.split(',');
            this.portfoliolist = (await UsersService.portfolio(this.$route.params.candidateID, auth)).data
            this.experienceslist = (await UsersService.experience(this.$route.params.candidateID, auth)).data


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
        methods: {
            // acts as filters to project to be asigned under testing stage
            techChoices(tag, checked) {
                const {selectedtech} = this
                const nextSelectedTags = checked
                    ? [...selectedtech, tag]
                    : selectedtech.filter(t => t !== tag)
                console.log('You are interested in: ', nextSelectedTags)
                this.selectedtech = nextSelectedTags
            },

            onChange(checkedValues) {
                this.test = checkedValues
            },
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
            handleOk(e) {

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

</style>
