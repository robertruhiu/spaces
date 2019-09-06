<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
        <CandidateSider/>

        <a-layout-content style="background-color: white">
            <DevHeader/>
            <div :style="{ padding: '5px', background: '#fff',marginTop:'1rem' }">
                <a-row style="margin-bottom: 2%">
                    <a-col :xs="{span: 24, offset: 1 }" :sm="{span: 24, offset: 1 }" :md="{span: 24, offset: 1 }"
                               :lg="{span: 24, offset: 0 }" :xl="{span: 24, offset: 0}">
                        <h3 style="color: #1976D2;font-weight: bold;margin-left: 1rem">
                            Start a new project or complete the existing ones.
                        </h3>
                    </a-col>

                </a-row>
                <a-row gutter="16" style="padding-right: 2rem;padding-left: 1.5rem;padding-bottom: 1.5rem;">
                    <a-col class="tracker"
                                   :xs="{span: 24, offset: 2  }" :sm="{span: 12, offset: 0 }" :md="{span: 10, offset: 0 }"
                                   :lg="{span: 8, offset: 0 }" :xl="{span: 8,offset: 0 }">
                        <a-row class="ant-card actioncards">
                            <a @click="showModal" style="text-decoration: none;color: black">
                                <a-col span="24">
                                    <div style="text-align: center">
                                        <img class="poolavatar" src="../../../assets/images/art.svg">
                                    </div>

                                </a-col>
                                <a-col span="24" style="text-align: center">
                                    <p class="ant-card-head-title" style="font-weight: bold">new project</p>
                                    <p style="margin: 0;"> Pick framework you want to self test</p>
                                </a-col>
                            </a>

                        </a-row>


                    </a-col>
                    <div v-if="projectlist.length >0">
                        <a-col class="tracker" :xs="{span: 24, offset: 2  }" :sm="{span: 12, offset: 0 }" :md="{span: 10, offset: 0 }"
                                   :lg="{span: 8, offset: 0 }" :xl="{span: 8,offset: 0 }"v-for="project in projectlist" v-bind:key="project">
                            <a-row class="ant-card actioncards1">
                                <a style="text-decoration: none;color: black"
                                   @click="navigateTo({name:'selfverifyproject',params:{applicationId:project.id}})"
                                >
                                    <a-col span="24">
                                        <div style="text-align: center">
                                            <img style="width: 100%;height: 126px"
                                                 :src="project.project.projectimage1">
                                        </div>

                                    </a-col>
                                    <a-col span="24" style="text-align: center">
                                        <p class="ant-card-head-title" style="font-weight: bold">
                                            {{project.project.name}}</p>

                                    </a-col>
                                </a>

                            </a-row>
                        </a-col>
                    </div>


                </a-row>


            </div>
            <a-modal
                    title="Frameworks(Pick one)"
                    v-model="visible"
                    :footer="null"


            >
                <a-row :gutter="16">
                    <a-col :xs="{span: 12, offset: 0  }" :sm="{span: 8, offset: 0 }" :md="{span: 6, offset: 0 }"
                                   :lg="{span: 6, offset: 0 }" :xl="{span: 6,offset: 0 }" v-for="framework in frameworkchoices" v-bind:key="framework">
                        <a
                                @click="SelfverifyProject(framework.name)">
                            <a-row class="ant-card actioncards2">
                                <a style="text-decoration: none;color: black">
                                    <a-col span="24" style="height: 75%">
                                        <div style="text-align: center">
                                            <img style="width: 75%;" :src="framework.image">

                                        </div>

                                    </a-col>
                                    <a-col span="24" style="float: bottom">
                                        <div style="text-align: center">
                                            <p>{{framework.name}}</p>
                                        </div>

                                    </a-col>

                                </a>

                            </a-row>
                        </a>

                    </a-col>
                </a-row>

            </a-modal>
            <a-modal
                    title="Project"
                    v-model="projectchoice"
                    :footer="null"
                    width="1000px"
                    style="top: 10px;"


            >
                <a-row gutter="8" v-if="project !== null">
                    <a-col :xs="{span: 24, offset: 0  }" :sm="{span: 24, offset: 0 }" :md="{span: 24, offset: 0 }"
                                   :lg="{span: 14, offset: 0 }" :xl="{span: 14,offset: 0 }">


                        <a-carousel v-if="project.hasvideo === false" autoplay style="border:1px solid #e8e8e8;">
                            <div v-if="project.projectimage1 "><img style="width: 100%" :src="project.projectimage1"/>
                            </div>
                            <div v-if="project.projectimage2 "><img style="width: 100%" :src="project.projectimage2"/>
                            </div>
                            <div v-if="project.projectimage3 "><img style="width: 100%" :src="project.projectimage3"/>
                            </div>
                            <div v-if="project.projectimage4 "><img :src="project.projectimage4"/></div>
                            <div v-if="project.projectimage5 "><img :src="project.projectimage5"/></div>
                            <div v-if="project.projectimage6 "><img :src="project.projectimage6"/></div>
                            <div v-if="project.projectimage7 "><img :src="project.projectimage7"/></div>
                            <div v-if="project.projectimage8 "><img :src="project.projectimage8"/></div>
                            <div v-if="project.projectimage9 "><img :src="project.projectimage9"/></div>
                            <div v-if="project.projectimage10 "><img :src="project.projectimage10"/></div>
                        </a-carousel>
                        <div v-if="project.hasvideo">
                            <youtube :video-id="project.projectimage2" :player-vars="playerVars"></youtube>
                        </div>
                        <div style="border:1px solid #e8e8e8;padding: 2%;margin-top: 2%;">
                            <h4><strong>Project name:</strong> {{project.name}}</h4>
                            <p>{{project.description}}</p>

                        </div>


                    </a-col>
                    <a-col :xs="{span: 24, offset: 0  }" :sm="{span: 24, offset: 0 }" :md="{span: 24, offset: 0 }"
                                   :lg="{span: 10, offset: 0 }" :xl="{span: 10,offset: 0 }" style="padding: 0 1%;">
                        <div style="border:1px solid #e8e8e8;;padding: 2%;">
                            <div style="margin-left: 5%;margin-bottom: 2%">

                                <p>Accept Project (This will allow you to set time and get access to our
                                    IDE</p>
                                <a-button type="primary" @click="Accept(project.id,project,pickedframework)">Accept</a-button>
                                <a-button type="primary" style="margin-left: 1%" ghost
                                          @click="SelfverifyProject(pickedframework)">
                                    <a-icon type="redo"/>
                                    Get another project
                                </a-button>
                            </div>


                            <div>
                                <p style="margin-left: 5%"><strong>Requirements</strong></p>
                                <ol>
                                    <li v-if="project.requirement1">{{project.requirement1}}</li>
                                    <li v-if="project.requirement2">{{project.requirement2}}</li>
                                    <li v-if="project.requirement3">{{project.requirement3}}</li>
                                    <li v-if="project.requirement4">{{project.requirement4}}</li>
                                    <li v-if="project.requirement5">{{project.requirement5}}</li>
                                    <li v-if="project.requirement6">{{project.requirement6}}</li>
                                    <li v-if="project.requirement7">{{project.requirement7}}</li>
                                    <li v-if="project.requirement8">{{project.requirement8}}</li>
                                    <li v-if="project.requirement9">{{project.requirement9}}</li>
                                    <li v-if="project.requirement10">{{project.requirement10}}</li>


                                </ol>
                            </div>


                        </div>


                    </a-col>
                </a-row>
                <div style="text-align: center" v-else>
                    No projects at the moment for you.More will be added soon.
                </div>

            </a-modal>
        </a-layout-content>

    </a-layout>
</template>

<script>
    import DevHeader from "../../layout/DevHeader";


    import UsersService from '@/services/UsersService'
    import Projects from '@/services/Projects'
    import CandidateSider from "../../layout/CandidateSider";
    import ACol from "ant-design-vue/es/grid/Col";

    export default {
        name: "DeveloperProjects",
        data() {
            return {
                currentUserProfile: {},
                projectlist: [],
                frameworkchoices: null,
                visible: false,
                projectchoice: false,
                project: null,
                pickedframework: ''
            }
        },
        components: {
            ACol,
            DevHeader,
            CandidateSider,
        },
        async mounted() {
            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}

            };
            if (this.$store.state.user.pk) {
                this.currentUserProfile = (await UsersService.currentuser(this.$store.state.user.pk, auth)).data
                this.frameworkchoices = (await Projects.getverified(auth)).data
                this.projectlist = (await Projects.myprojects(this.$store.state.user.pk, auth)).data


            }
        },
        methods: {
            navigateTo(route) {
                this.$router.push(route)
            },
            showModal() {
                this.visible = true
            },
            SelfverifyProject(framework) {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                };

                this.visible = false
                this.projectchoice = true
                this.pickedframework = framework
                Projects.selfverifyproject(this.$store.state.user.pk,framework, auth)
                    .then(resp => this.project = resp.data[0])
                    .catch(
                        this.project = null
                    )


            },
            Accept(project, projectobject,pickedframework) {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                };
                console.log(pickedframework)
                Projects.selfassessprojectcreate(
                    {
                        stage: 'invite_accepted',
                        candidate: this.$store.state.user.pk,
                        project: project,
                        frameworktested:pickedframework
                    }
                    , auth)
                    .then(resp => {
                            this.projectlist.push(projectobject)

                            this.$router.push({
                                name: 'selfverifyproject',
                                params: {applicationId: resp.data.id}
                            })

                        }
                    )
                    .catch(err =>
                        console.log(err)
                    )


            }

        },

    }
</script>

<style scoped>
    #components-layout-demo-side .logo {
        height: 32px;
        background: rgba(255, 255, 255, .2);
        margin: 16px;
    }


    .actioncards {
        width: 16rem;
        border-radius: 0;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        padding: 0.89rem;
    }

    .actioncards1 {
        width: 16rem;
        border-radius: 0;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    .actioncards2 {
        width: 100px;
        height: 100px;
        border-radius: 0;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    .poolavatar {
        width: 30%;
        margin-top: 0.5rem;
    }

    .ant-carousel >>> .slick-slide {
        text-align: center;
        height: 338px;
        line-height: 160px;
        background: #364d7;
        overflow: hidden;
    }

    .ant-carousel >>> .custom-slick-arrow {
        width: 25px;
        height: 25px;
        font-size: 25px;
        color: black;
        background-color: rgba(31, 45, 61, .11);
        opacity: 0.3;
    }

    .ant-carousel >>> .custom-slick-arrow:before {
        display: none;
    }

    .ant-carousel >>> .custom-slick-arrow:hover {
        opacity: 1.0;
    }

    .ant-carousel >>> .slick-slide h3 {
        color: #fff;
    }
    .tracker{
        margin-bottom: 1rem;
    }
</style>
