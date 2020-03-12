<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh;">
        <CandidateSider/>
        <a-layout>
            <a-layout-content style="background-color: white">
                <BridgeHomeHeader/>
                <div :style="{ padding: '3% 2%', background: '#fff',marginTop:'0' }">
                    <div v-if="loading" style="text-align: center">
                        <div>
                            <a-spin/>
                        </div>

                    </div>
                    <div v-else>
                        <div v-if="portfolio.length >0">
                            <a-row :gutter="16">
                                <a-col style="margin-bottom: 1rem" :xs="{span: 24, offset: 0 }"
                                       :sm="{span: 24, offset: 0 }"
                                       :md="{span: 12, offset: 0 }"
                                       :lg="{span: 8, offset: 0 }" :xl="{span: 8,offset: 0 }"
                                       v-for="oneproject in portfolio" v-bind:key="oneproject">
                                    <a-row style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);height: 100%"
                                    >

                                        <a-col span="4"
                                               style="height: 100%;padding:5% 2%">
                                            <div class="actioncards">
                                                <div v-if="oneproject.likestate">
                                                    <div style="text-align: center;margin-bottom: 0.2rem">
                                                        <a-button icon="caret-up"
                                                                  disabled></a-button>
                                                    </div>

                                                </div>

                                                <div v-else>
                                                    <div style="text-align: center;margin-bottom: 0.2rem">
                                                        <a-button type="primary" icon="caret-up"
                                                                  @click="like(oneproject.key)"></a-button>
                                                    </div>
                                                </div>


                                                <div style="text-align: center">{{oneproject.likescount}}</div>

                                                <div v-if="oneproject.dislikestate">
                                                    <div style="text-align: center;margin-bottom: 0.2rem">
                                                        <a-button icon="caret-down"
                                                                  disabled=""></a-button>
                                                    </div>

                                                </div>

                                                <div v-else>
                                                    <div style="text-align: center;margin-bottom: 0.2rem">
                                                        <a-button icon="caret-down"
                                                                  @click="dislike(oneproject.key)"></a-button>
                                                    </div>
                                                </div>


                                            </div>
                                        </a-col>

                                        <a-col span="20" style="padding: 2%">
                                            <p>
                                                Project Title: {{oneproject.title}}
                                            </p>
                                            <p>Description :
                                                {{oneproject.project.description | truncate(100)}}
                                            </p>
                                            <p>Tech used:
                                                <span style=""
                                                      v-for="tag in oneproject.tags"
                                                      v-bind:key="tag.id">
                                                <a-tag color="#F0F6FD" style="color:#007BFF;">{{tag }}</a-tag>

                                            </span>
                                            </p>


                                            <a-button type="primary" size="small" :href="oneproject.demo"
                                                      target="_blank">View Demo
                                            </a-button>
                                            <p>
                                                <a key="submit" type="primary"
                                                   @click="ProjectModal(oneproject.project)">
                                                    view project implimented
                                                </a>
                                            </p>


                                        </a-col>


                                    </a-row>
                                </a-col>


                            </a-row>

                        </div>
                        <div v-else>

                            <a-empty/>
                        </div>
                    </div>


                    <a-modal
                            title="Project"
                            v-model="projectmodal"
                            :footer="null"
                            width="1000px"
                            style="top: 10px;"


                    >
                        <div>


                            <div>
                                <a-row gutter="8">
                                    <a-col :xs="{span: 24, offset: 0  }" :sm="{span: 24, offset: 0 }"
                                           :md="{span: 24, offset: 0 }"
                                           :lg="{span: 14, offset: 0 }" :xl="{span: 14,offset: 0 }"
                                           style="margin-bottom: 1rem">
                                        <show-at breakpoint="mediumAndBelow">
                                            <div>
                                                <a-carousel v-if="project.hasvideo === false" autoplay
                                                            style="border:1px solid #e8e8e8;">
                                                    <div v-if="project.projectimage1 "><img style="width: 100%"
                                                                                            :src="project.projectimage1"/>
                                                    </div>
                                                    <div v-if="project.projectimage2 "><img style="width: 100%"
                                                                                            :src="project.projectimage2"/>
                                                    </div>
                                                    <div v-if="project.projectimage3 "><img style="width: 100%"
                                                                                            :src="project.projectimage3"/>
                                                    </div>
                                                    <div v-if="project.projectimage4 "><img
                                                            :src="project.projectimage4"/></div>
                                                    <div v-if="project.projectimage5 "><img
                                                            :src="project.projectimage5"/></div>
                                                    <div v-if="project.projectimage6 "><img
                                                            :src="project.projectimage6"/></div>
                                                    <div v-if="project.projectimage7 "><img
                                                            :src="project.projectimage7"/></div>
                                                    <div v-if="project.projectimage8 "><img
                                                            :src="project.projectimage8"/></div>
                                                    <div v-if="project.projectimage9 "><img
                                                            :src="project.projectimage9"/></div>
                                                    <div v-if="project.projectimage10 "><img
                                                            :src="project.projectimage10"/>
                                                    </div>
                                                </a-carousel>
                                                <div v-if="project.hasvideo">
                                                    <youtube :video-id="project.projectimage2" :width="250"
                                                             :player-vars="playerVars"></youtube>
                                                </div>
                                            </div>

                                        </show-at>


                                        <hide-at breakpoint="mediumAndBelow">
                                            <div>
                                                <a-carousel v-if="project.hasvideo === false" autoplay
                                                            style="border:1px solid #e8e8e8;">
                                                    <div v-if="project.projectimage1 "><img style="width: 100%"
                                                                                            :src="project.projectimage1"/>
                                                    </div>
                                                    <div v-if="project.projectimage2 "><img style="width: 100%"
                                                                                            :src="project.projectimage2"/>
                                                    </div>
                                                    <div v-if="project.projectimage3 "><img style="width: 100%"
                                                                                            :src="project.projectimage3"/>
                                                    </div>
                                                    <div v-if="project.projectimage4 "><img
                                                            :src="project.projectimage4"/></div>
                                                    <div v-if="project.projectimage5 "><img
                                                            :src="project.projectimage5"/></div>
                                                    <div v-if="project.projectimage6 "><img
                                                            :src="project.projectimage6"/></div>
                                                    <div v-if="project.projectimage7 "><img
                                                            :src="project.projectimage7"/></div>
                                                    <div v-if="project.projectimage8 "><img
                                                            :src="project.projectimage8"/></div>
                                                    <div v-if="project.projectimage9 "><img
                                                            :src="project.projectimage9"/></div>
                                                    <div v-if="project.projectimage10 "><img
                                                            :src="project.projectimage10"/>
                                                    </div>
                                                </a-carousel>
                                                <div v-if="project.hasvideo">
                                                    <youtube :video-id="project.projectimage2" width="550"
                                                             :player-vars="playerVars"></youtube>
                                                </div>
                                            </div>

                                        </hide-at>


                                        <div style="border:1px solid #e8e8e8;padding: 2%;margin-top: 2%;">
                                            <h4><strong>Project name:</strong> {{project.name}}</h4>
                                            <p>{{project.description}}</p>

                                        </div>


                                    </a-col>
                                    <a-col :xs="{span: 24, offset: 0  }" :sm="{span: 24, offset: 0 }"
                                           :md="{span: 24, offset: 0 }"
                                           :lg="{span: 10, offset: 0 }" :xl="{span: 10,offset: 0 }"
                                           style="padding: 0 1%;">
                                        <div style="border:1px solid #e8e8e8;;padding: 2%;">


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

                            </div>
                        </div>


                    </a-modal>

                </div>
            </a-layout-content>
        </a-layout>
    </a-layout>

</template>

<script>


    class Portfolio {
        constructor(id, title, description, demo, tech_used, repo, project, likes, dislikes, likescount, likestate, dislikestate) {
            this.key = id;
            this.title = title;
            this.description = description;
            this.demo = demo;
            this.tags = tech_used;
            this.repo = repo
            this.project = project
            this.likescount = likescount
            this.likes = likes
            this.likestate = likestate
            this.dislikestate = dislikestate
            this.dislikes = dislikes


        }
    }

    import UsersService from '@/services/UsersService'
    import Vue from 'vue'

    var VueTruncate = require('vue-truncate-filter')
    Vue.use(VueTruncate)
    import CandidateSider from "../../layout/CandidateSider";
    import BridgeHomeHeader from "../../layout/bridgehomeheader";
    import {showAt, hideAt} from 'vue-breakpoints'

    export default {
        name: "cohortprojects",
        components: {
            BridgeHomeHeader,
            CandidateSider,
            showAt, hideAt,
        },
        data() {

            return {
                portfolio: [],
                projectmodal: false,
                project: {},
                loading: false,
                currentUserProfile: null,

            }
        },
        async mounted() {
            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}

            }
            this.loading = true
            this.currentUserProfile = (await UsersService.currentuser(this.$store.state.user.pk, auth)).data


            this.portfoliolist = (await UsersService.portfolio(this.$store.state.user.pk, auth)).data


            for (let i = 0; i < this.portfoliolist.length; i++) {
                if (this.portfoliolist[i].csa) {

                    let id = this.portfoliolist[i].id
                    let title = this.portfoliolist[i].title
                    let description = this.portfoliolist[i].description
                    let demo = this.portfoliolist[i].demo_link
                    let tech_used = []
                    if (this.portfoliolist[i].tech_tags) {
                        tech_used = this.portfoliolist[i].tech_tags.split(',');
                    }
                    let project = this.portfoliolist[i].project

                    let repo = this.portfoliolist[i].repository_link
                    let like_list = []
                    if (this.portfoliolist[i].likes) {
                        like_list = this.portfoliolist[i].likes.split(',');
                    }
                    let dislike_list = []
                    if (this.portfoliolist[i].dislikes) {
                        dislike_list = this.portfoliolist[i].dislikes.split(',');
                    }
                    let likescount = like_list.length - dislike_list.length
                    let likes = like_list
                    let dislikes = dislike_list
                    let likesusersstring = this.portfoliolist[i].likes
                    let dislikesusersstring = this.portfoliolist[i].dislikes
                    let likestate = false
                    if (likesusersstring) {
                        likestate = likesusersstring.includes(this.currentUserProfile.id);
                    }


                    let dislikestate = false
                    if (dislikesusersstring) {
                        dislikestate = dislikesusersstring.includes(this.currentUserProfile.id);
                    }

                    let one_portfolio = new Portfolio(
                        id, title, description, demo, tech_used, repo, project, likes, dislikes, likescount, likestate, dislikestate
                    );
                    this.portfolio.push(one_portfolio)

                }


            }

            this.loading = false


        },
        methods: {
            ProjectModal(project) {
                this.project = project
                this.projectmodal = true
            },
            async like(id) {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                let index = 0
                for (let i = 0; i < this.portfolio.length; i++) {
                    if (this.portfolio[i].id === id)
                        index = this.portfolio[i]


                }

                this.portfolio[index].likescount++
                if (this.portfolio[index].dislikestate) {
                    this.portfolio[index].dislikes = this.portfolio[index].dislikes.slice(this.currentUserProfile.id)
                    this.portfolio[index].likestate = true
                    this.portfolio[index].dislikestate = false
                    this.portfolio[index].likes.push(this.currentUserProfile.id)

                } else {
                    this.portfolio[index].likes.push(this.currentUserProfile.id)
                    this.portfolio[index].likestate = true
                }


                UsersService.portfoliolikeupdate(id,
                    {
                        dislikes: this.portfolio[index].dislikes.join(','),
                        likes: this.portfolio[index].likes.join(','),
                    }
                    , auth)
                    .then()
                    .catch()


            },
            async dislike(id) {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                let index = 0
                for (let i = 0; i < this.portfolio.length; i++) {
                    if (this.portfolio[i].id === id)
                        index = this.portfolio[i]

                }
                this.portfolio[index].likescount--


                if (this.portfolio[index].likestate) {


                    this.portfolio[index].likes = this.portfolio[index].likes.slice(this.currentUserProfile.id)
                    this.portfolio[index].likestate = false
                    this.portfolio[index].dislikestate = true
                    this.portfolio[index].dislikes.push(this.currentUserProfile.id)


                } else {
                    this.portfolio[index].dislikes.push(this.currentUserProfile.id)
                    this.portfolio[index].dislikestate = true

                }


                UsersService.portfoliolikeupdate(id,
                    {
                        dislikes: this.portfolio[index].dislikes.join(','),
                        likes: this.portfolio[index].likes.join(','),
                    }
                    , auth)
                    .then()
                    .catch()


            },
        }
    }
</script>

<style scoped>
    .actioncards {
        width: 80%;

        padding: 0.1rem;
        border-radius: 0;


    }


</style>