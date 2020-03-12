<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh;">
        <CandidateSider/>
        <a-layout>
            <a-layout-content style="background-color: white">
                <ResourceHeader/>
                <div :style="{ padding: '5px', background: '#fff',marginTop:'1rem' }">
                    <a-row style="margin-bottom: 1rem;padding: 0 3%">
                        <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }" :md="{span: 24, offset: 0 }"
                               :lg="{span: 15, offset: 0 }" :xl="{span: 15, offset: 0 }">

                            <h3 style="color: #1976D2;font-weight: bold;">Learn {{path}} online from the best
                                {{path}} tutorials submitted & voted by the programming community</h3>

                        </a-col>
                        <a-col :xs="{span: 12, offset: 0 }" :sm="{span: 12, offset: 0 }" :md="{span: 12, offset: 0 }"
                               :lg="{span: 4, offset: 0 }" :xl="{span:4, offset: 0 }">
                            <a-button type="primary" icon="plus" @click="showModal">Add a resource</a-button>


                        </a-col>
                        <show-at breakpoint="mediumAndBelow">

                            <a-col :xs="{span: 12, offset: 0 }" :sm="{span: 12, offset: 0 }"
                                   :md="{span: 12, offset: 0 }"
                                   :lg="{span: 4, offset: 0 }" :xl="{span:4, offset: 0 }">
                                <a-button type="primary" @click="showMobile">Get verified</a-button>


                            </a-col>
                        </show-at>


                    </a-row>

                    <div style="padding:0 3%">
                        <hide-at breakpoint="mediumAndBelow">
                            <a-row :gutter="16">
                                <a-col span="4">
                                    <strong>Aspects to learn(recommended)</strong>
                                    <p>Source:{{subject.provider}}</p>
                                    <div style="overflow:scroll; max-height:70vh;">
                                        <a-list itemLayout="horizontal" :dataSource="syllabus">
                                            <a-list-item slot="renderItem" slot-scope="item">
                                                {{item}}
                                            </a-list-item>
                                        </a-list>
                                    </div>

                                </a-col>
                                <a-col span="14">

                                    <div style="padding:  0">

                                        <div v-if="loading" style="text-align: center">
                                            <div>
                                                <a-spin/>
                                            </div>

                                        </div>
                                        <div v-else>
                                            <div v-if="resources.length >0">
                                                <a-list style=""
                                                        itemLayout="vertical"
                                                        size="large"
                                                        :pagination="pagination"
                                                        :dataSource="resources"
                                                >

                                                    <a-list-item
                                                            slot="renderItem" slot-scope="resource" key="resource">
                                                        <a-row style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);height: 8rem;margin-bottom: 1rem"
                                                        >
                                                            <a-col span="3"
                                                                   style="height: 100%;padding: 2%">
                                                                <div class="actioncards">
                                                                    <div v-if="resource.likestate">
                                                                        <div style="text-align: center;margin-bottom: 0.2rem">
                                                                            <a-button icon="caret-up"
                                                                                      disabled></a-button>
                                                                        </div>
                                                                    </div>

                                                                    <div v-else>
                                                                        <div style="text-align: center;margin-bottom: 0.2rem">
                                                                            <a-button type="primary" icon="caret-up"
                                                                                      @click="like(resource.id)"></a-button>
                                                                        </div>
                                                                    </div>


                                                                    <div style="text-align: center">
                                                                        {{resource.likescount}}
                                                                    </div>

                                                                    <div v-if="resource.dislikestate">
                                                                        <div style="text-align: center;margin-bottom: 0.2rem">
                                                                            <a-button icon="caret-down"
                                                                                      disabled=""></a-button>
                                                                        </div>

                                                                    </div>

                                                                    <div v-else>
                                                                        <div style="text-align: center;margin-bottom: 0.2rem">
                                                                            <a-button icon="caret-down"
                                                                                      @click="dislike(resource.id)"></a-button>
                                                                        </div>
                                                                    </div>


                                                                </div>
                                                            </a-col>
                                                            <a-col span="20" style="padding: 2%">
                                                                <p>
                                                                    <a style="text-decoration: none"
                                                                       :href="resource.link" target='_blank'>
                                                                        {{resource.title}}
                                                                    </a>
                                                                </p>

                                                                <a-row :gutter="16">
                                                                    <a-col span="6"><p>{{resource.provider}}</p></a-col>
                                                                    <a-col>
                                                    <span style="" v-for="tag in resource.tags"
                                                          v-bind:key="tag.id">
                                                <a-tag color="#108ee9" style="color: white;">{{tag }}</a-tag>

                                            </span>

                                                                    </a-col>
                                                                </a-row>


                                                            </a-col>


                                                        </a-row>
                                                    </a-list-item>
                                                </a-list>

                                            </div>
                                            <div v-else>

                                                <a-empty/>
                                            </div>


                                        </div>

                                    </div>

                                </a-col>
                                <a-col span="6">
                                    <div style="padding: 2% 0">
                                        <a-card title="Get verified" style="width: 300px">

                                            <p>Feeling comfortable with your progress get your skills tested here</p>
                                            <div v-if="loading" style="text-align: center">
                                                <div>
                                                    <a-spin/>
                                                </div>

                                            </div>
                                            <div v-else>

                                                <div v-if="availablequiz">
                                                    <div v-if="path === 'html'">
                                                        <p>Step 1.Quizzes</p>
                                                        <p>
                                                            <router-link
                                                                    :to="{name:'takequiz',params:{candidateId:currentUserProfile.user.id,quizId: current.id,}}">
                                                                {{path}} quiz
                                                            </router-link>
                                                        </p>

                                                        <div v-for="quiz in quizzes" v-bind:key="quiz">
                                                            <div v-if="quiz.name === 'css'">
                                                                <p>
                                                                    <router-link
                                                                            :to="{name:'takequiz',params:{candidateId:currentUserProfile.user.id,quizId: quiz.id,}}">
                                                                        css quiz
                                                                    </router-link>
                                                                </p>

                                                            </div>

                                                        </div>


                                                    </div>

                                                    <div v-else>
                                                        <div v-if="currenttaken.length>0">
                                                            <div v-for="taken in currenttaken" v-bind:key="taken">
                                                                <div v-if="taken.id === current.id">
                                                                    <p>Step 1.
                                                                        {{path}} :score = {{taken.score}}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div v-else>
                                                            <p>Step 1.
                                                                <router-link
                                                                        :to="{name:'takequiz',params:{candidateId:currentUserProfile.user.id,quizId: current.id,}}">
                                                                    {{path}} quiz
                                                                </router-link>
                                                            </p>
                                                        </div>


                                                    </div>

                                                    <div v-if="noproject.includes(path) === false">
                                                        <p>
                                                            Step 2. Project challenge
                                                        </p>
                                                        <div v-if="currenttaken.length >0">
                                                            <div v-if="currentproject">
                                                                <a style=""
                                                                   @click="navigateTo({name:'selfverifyproject',params:{applicationId:currentproject.id}})"
                                                                >{{currentproject.project.name}}</a>
                                                            </div>

                                                            <div v-else>
                                                                <div v-if="path==='html'">
                                                                    <a-button type="primary">Request Project</a-button>
                                                                </div>
                                                                <div v-else>
                                                                    <a-button type="primary"
                                                                              @click="SelfverifyProject(path)">
                                                                        Request Project
                                                                    </a-button>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div v-else>
                                                            <a-button type="primary" disabled="">Request Project
                                                            </a-button>
                                                        </div>

                                                    </div>


                                                </div>
                                                <div v-else>
                                                    <div v-if="noproject.includes(path) === false">

                                                        <p>
                                                            Project challenge :
                                                        </p>
                                                        <div v-if="currentproject">
                                                            <a style=""
                                                               @click="navigateTo({name:'selfverifyproject',params:{applicationId:currentproject.id}})"
                                                            >{{currentproject.project.name}}</a>
                                                        </div>

                                                        <div v-else>
                                                            <a-button type="primary" @click="SelfverifyProject(path)">
                                                                Request Project
                                                            </a-button>
                                                        </div>

                                                    </div>

                                                </div>

                                            </div>

                                        </a-card>

                                    </div>

                                </a-col>
                            </a-row>
                        </hide-at>
                        <show-at breakpoint="mediumAndBelow">
                            <div style="padding:  0">

                                <div v-if="loading" style="text-align: center">
                                    <div>
                                        <a-spin/>
                                    </div>

                                </div>
                                <div v-else>
                                    <div v-if="resources.length >0">
                                        <a-list style=""
                                                itemLayout="vertical"
                                                size="large"
                                                :pagination="pagination"
                                                :dataSource="resources"
                                        >

                                            <a-list-item
                                                    slot="renderItem" slot-scope="resource" key="resource">
                                                <a-row style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);margin-bottom: 1rem"
                                                >
                                                    <a-col span="4"
                                                           style="height: 100%;padding: 2%">
                                                        <div class="actioncards">
                                                            <div v-if="resource.likestate">
                                                                <div style="text-align: center;margin-bottom: 0.2rem">
                                                                    <a-button icon="caret-up"
                                                                              disabled></a-button>
                                                                </div>
                                                            </div>

                                                            <div v-else>
                                                                <div style="text-align: center;margin-bottom: 0.2rem">
                                                                    <a-button type="primary" icon="caret-up"
                                                                              @click="like(resource.id)"></a-button>
                                                                </div>
                                                            </div>


                                                            <div style="text-align: center">
                                                                {{resource.likescount}}
                                                            </div>

                                                            <div v-if="resource.dislikestate">
                                                                <div style="text-align: center;margin-bottom: 0.2rem">
                                                                    <a-button icon="caret-down"
                                                                              disabled=""></a-button>
                                                                </div>

                                                            </div>

                                                            <div v-else>
                                                                <div style="text-align: center;margin-bottom: 0.2rem">
                                                                    <a-button icon="caret-down"
                                                                              @click="dislike(resource.id)"></a-button>
                                                                </div>
                                                            </div>


                                                        </div>
                                                    </a-col>
                                                    <a-col span="20" style="padding: 2%">
                                                        <p>
                                                            <a style="text-decoration: none"
                                                               :href="resource.link" target='_blank'>
                                                                {{resource.title}}
                                                            </a>
                                                        </p>

                                                        <a-row :gutter="16">
                                                            <a-col span="4"><p>{{resource.provider}}</p></a-col>
                                                            <a-col span="24">
                                                    <span style="" v-for="tag in resource.tags"
                                                          v-bind:key="tag.id">
                                                <a-tag color="#108ee9" style="color: white;">{{tag }}</a-tag>

                                            </span>

                                                            </a-col>
                                                        </a-row>


                                                    </a-col>


                                                </a-row>
                                            </a-list-item>
                                        </a-list>

                                    </div>
                                    <div v-else>

                                        <a-empty/>
                                    </div>


                                </div>

                            </div>


                        </show-at>


                    </div>

                    <!--  modal for adding resources-->

                    <a-modal title="New resource" v-model="visible">
                        <template slot="footer">
                            <div v-if="submiting" style="text-align: center">
                                <div>
                                    <a-spin/>
                                </div>

                            </div>
                            <div v-else>


                                <a-button key="submit" type="primary" @click="submit">
                                    Submit
                                </a-button>
                            </div>


                        </template>
                         <a-alert
                                 message="Resource submitted will be first verified by moderators before appearing on the resources list"
                                 type="info"/>
                        <a-form
                                :form="form"

                        >
                            <a-form-item
                                    label="Resource title"
                                    :label-col="{ span: 24 }"
                                    :wrapper-col="{ span: 24 }"
                            >
                                <a-input v-model="title"
                                         v-validate.disable="'required'" name="title"


                                />
                                <span style="color: #f5222d;" v-show="errors.has('title')"
                                      class="help is-danger">{{ errors.first('title') }}</span>

                            </a-form-item>
                            <a-form-item
                                    label="Resource link"
                                    :label-col="{ span: 24 }"
                                    :wrapper-col="{ span: 24 }"
                            >
                                <a-input v-model="link"
                                         v-validate.disable="{required: true,url: {require_protocol: true }}"
                                         name="link"


                                />
                                <span style="color: #f5222d;" v-show="errors.has('link')"
                                      class="help is-danger">{{ errors.first('link') }}</span>

                            </a-form-item>
                            <a-form-item
                                    label="Site offering resource.example(udemy or codeacademy)"
                                    :label-col="{ span: 24 }"
                                    :wrapper-col="{ span: 24 }"
                            >
                                <a-input v-model="provider"
                                         v-validate.disable="'required'" name="provider"


                                />
                                <span style="color: #f5222d;" v-show="errors.has('provider')"
                                      class="help is-danger">{{ errors.first('provider') }}</span>

                            </a-form-item>

                            <a-form-item
                                    label="Resource tags "
                                    :label-col="{ span: 24 }"
                                    :wrapper-col="{ span:  24}"
                            >
                                <div>

                                    <template v-for=" tag in tags">
                                        <a-checkable-tag style="border-color: blue;font-size: 14px"
                                                         :key="tag"
                                                         :checked="selectedTags.indexOf(tag) > -1"
                                                         @change="(checked) => handleChange(tag, checked)"
                                        >
                                            {{tag}}
                                        </a-checkable-tag>
                                    </template>
                                </div>


                            </a-form-item>


                        </a-form>
                    </a-modal>

                    <!--  modal for get verified mobile view-->

                    <a-modal title="Get verified" v-model="verifymobile">
                        <template slot="footer">
                            <a-button key="back" @click="handleCancel">Return</a-button>

                        </template>
                        <div style="padding: 2% 0">
                            <p>Feeling comfortable with your progress get your skills tested here</p>
                            <div v-if="loading" style="text-align: center">
                                <div>
                                    <a-spin/>
                                </div>

                            </div>
                            <div v-else>

                                <div v-if="availablequiz">
                                    <div v-if="path === 'html'">
                                        <p>Step 1.Quizzes</p>
                                        <p>
                                            <router-link
                                                    :to="{name:'takequiz',params:{candidateId:currentUserProfile.user.id,quizId: current.id,}}">
                                                {{path}} quiz
                                            </router-link>
                                        </p>

                                        <div v-for="quiz in quizzes" v-bind:key="quiz">
                                            <div v-if="quiz.name === 'css'">
                                                <p>
                                                    <router-link
                                                            :to="{name:'takequiz',params:{candidateId:currentUserProfile.user.id,quizId: quiz.id,}}">
                                                        css quiz
                                                    </router-link>
                                                </p>

                                            </div>

                                        </div>


                                    </div>

                                    <div v-else>
                                        <div v-if="currenttaken.length>0">
                                            <div v-for="taken in currenttaken" v-bind:key="taken">
                                                <div v-if="taken.id === current.id">
                                                    <p>Step 1.
                                                        {{path}} :score = {{taken.score}}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div v-else>
                                            <p>Step 1.
                                                <router-link
                                                        :to="{name:'takequiz',params:{candidateId:currentUserProfile.user.id,quizId: current.id,}}">
                                                    {{path}} quiz
                                                </router-link>
                                            </p>
                                        </div>


                                    </div>

                                    <div v-if="noproject.includes(path) === false">
                                        <p>
                                            Step 2. Project challenge
                                        </p>
                                        <div v-if="currenttaken.length >0">
                                            <div v-if="currentproject">
                                                <a style=""
                                                   @click="navigateTo({name:'selfverifyproject',params:{applicationId:currentproject.id}})"
                                                >{{currentproject.project.name}}</a>
                                            </div>

                                            <div v-else>
                                                <div v-if="path==='html'">
                                                    <a-button type="primary">Request Project</a-button>
                                                </div>
                                                <div v-else>
                                                    <a-button type="primary"
                                                              @click="SelfverifyProject(path)">
                                                        Request Project
                                                    </a-button>
                                                </div>
                                            </div>

                                        </div>
                                        <div v-else>
                                            <a-button type="primary" disabled="">Request Project</a-button>
                                        </div>

                                    </div>


                                </div>
                                <div v-else>
                                    <div v-if="noproject.includes(path) === false">

                                        <p>
                                            Project challenge :
                                        </p>
                                        <div v-if="currentproject">
                                            <a style=""
                                               @click="navigateTo({name:'selfverifyproject',params:{applicationId:currentproject.id}})"
                                            >{{currentproject.project.name}}</a>
                                        </div>

                                        <div v-else>
                                            <a-button type="primary" @click="SelfverifyProject(path)">
                                                Request Project
                                            </a-button>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </a-modal>

                    <!--  modal for project to be picked-->

                    <a-modal
                            title="Project"
                            v-model="projectchoice"
                            :footer="null"
                            width="1000px"
                            style="top: 10px;"


                    >
                        <div>
                            <div v-if="project === null">
                                <a-spin/>
                            </div>
                            <div v-else>
                                <a-row gutter="8" v-if="project !== null">
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
                                            <div style="margin-left: 5%;margin-bottom: 2%">

                                                <p>Accept Project (This will allow you to set time and get access to our
                                                    IDE</p>
                                                <div v-if="acceptload">
                                                    <a-spin/>
                                                </div>
                                                <div v-else>
                                                    <a-button type="primary"
                                                              @click="Accept(project.id,project,path)">
                                                        Accept
                                                    </a-button>
                                                    <a-button type="primary" style="margin-left: 1%" ghost
                                                              @click="SelfverifyProject(path)">
                                                        <a-icon type="redo"/>
                                                        Get another
                                                    </a-button>
                                                </div>

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
                            </div>
                        </div>


                    </a-modal>

                </div>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>

<script>
    import CandidateSider from "../../layout/CandidateSider";
    import ResourceHeader from "../../layout/resourceheader";
    import QuizService from '@/services/QuizService';
    import UsersService from '@/services/UsersService'
    import VeeValidate from 'vee-validate';
    import Vue from 'vue'
    import Projects from '@/services/Projects'
    import {showAt, hideAt} from 'vue-breakpoints'

    Vue.use(VeeValidate);

    class Taken {
        constructor(id, score) {
            this.id = id
            this.score = score
        }
    }

    class Resource {
        constructor(id, title, tags, provider, likescount, link, likes, likestate, dislikestate, dislikes) {
            this.id = id
            this.title = title
            this.tags = tags
            this.provider = provider
            this.likescount = likescount
            this.link = link
            this.likes = likes
            this.likestate = likestate
            this.dislikestate = dislikestate
            this.dislikes = dislikes


        }
    }


    export default {
        name: "resources",
        components: {
            ResourceHeader,
            CandidateSider,
            showAt, hideAt,
        },

        data() {

            return {
                path: '',
                quizzes: [],
                currentUserProfile: null,
                visible: false,
                tags: ['free', 'video', 'beginner', 'paid', 'book', 'practiceprogram', 'intermediate', 'expert'],
                selectedTags: [],
                likes: 12,
                subject: {},
                subjects: {},
                current: {},
                submiting: false,
                link: '',
                title: '',
                provider: '',
                loading: false,
                valid: false,
                resources: [],
                takenquizzes: [],
                taken: [],
                availablequiz: false,
                takenquiz: false,
                currenttaken: [],
                noproject: ['javascript', 'python', 'php'],
                projectmodal: false,
                project: null,
                projectchoice: false,
                waiting: false,
                currentproject: null,
                acceptload: false,
                syllabus: [],
                pagination: {
                    onChange: (page) => {
                        return page
                    },
                    pageSize: 4,
                },
                verifymobile: false


            }

        },
        async mounted() {

            this.path = this.$route.params.path
            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}

            }
            this.loading = true


            this.currentUserProfile = (await UsersService.currentuser(this.$store.state.user.pk, auth)).data


            this.quizzes = (await QuizService.allquizzes(auth)).data;
            this.subjects = (await QuizService.allsubjects(auth)).data
            this.takenquizzes = (await QuizService.taken(this.$store.state.user.pk, auth)).data;
            if (this.takenquizzes.length > 0) {
                for (let j = 0; j < this.takenquizzes.length; j++) {
                    let id = this.takenquizzes[j].quiz.id
                    let score = this.takenquizzes[j].score
                    let taken = new Taken(
                        id, score
                    )


                    this.taken.push(taken)


                }

            }


            for (let i = 0; i < this.subjects.length; i++) {
                if (this.subjects[i].name === this.path) {
                    this.subject = this.subjects[i]
                    if (this.subject.syllabus) {
                        this.syllabus = this.subject.syllabus.split(',');
                    }

                }
            }
            for (let i = 0; i < this.quizzes.length; i++) {

                if (this.quizzes[i].subject.id === this.subject.id) {
                    this.current = this.quizzes[i]
                    this.availablequiz = true
                }

            }

            this.allsubjectresources = (await UsersService.subjectresources(this.subject.id, auth)).data
            for (let i = 0; i < this.allsubjectresources.length; i++) {
                let tags_list = []
                if (this.allsubjectresources[i].tags) {
                    tags_list = this.allsubjectresources[i].tags.split(',');
                }
                let like_list = []
                if (this.allsubjectresources[i].likes) {
                    like_list = this.allsubjectresources[i].likes.split(',');
                }
                let dislike_list = []
                if (this.allsubjectresources[i].dislikes) {
                    dislike_list = this.allsubjectresources[i].dislikes.split(',');
                }


                let id = this.allsubjectresources[i].id
                let title = this.allsubjectresources[i].title
                let tags = tags_list
                let provider = this.allsubjectresources[i].provider
                let likescount = like_list.length - dislike_list.length
                let link = this.allsubjectresources[i].link
                let likes = like_list
                let dislikes = dislike_list
                let likesusersstring = this.allsubjectresources[i].likes
                let dislikesusersstring = this.allsubjectresources[i].dislikes
                let likestate = false
                if (likesusersstring) {
                    likestate = likesusersstring.includes(this.currentUserProfile.id);
                }


                let dislikestate = false
                if (dislikesusersstring) {
                    dislikestate = dislikesusersstring.includes(this.currentUserProfile.id);
                }


                let oneresource = new Resource(
                    id, title, tags, provider, likescount, link, likes, likestate, dislikestate, dislikes
                )


                this.resources.push(oneresource)

            }

            for (let i = 0; i < this.takenquizzes.length; i++) {
                if (this.takenquizzes[i].quiz.id === this.current.id) {
                    let id = this.takenquizzes[i].quiz.id
                    let score = this.takenquizzes[i].score
                    let taken = new Taken(
                        id, score
                    )


                    this.currenttaken.push(taken)


                }
            }
            this.projectlist = (await Projects.myprojects(this.$store.state.user.pk, auth)).data
            for (let i = 0; i < this.projectlist.length; i++) {
                if (this.projectlist[i].csa && this.projectlist[i].frameworktested === this.path) {
                    this.currentproject = this.projectlist[i]
                }
            }

            this.loading = false
        },
        methods: {
            navigateTo(route) {
                this.$router.push(route)
            },
            showModal() {
                this.visible = true;
            },
            showMobile() {
                this.verifymobile = true;
            },
            handleCancel() {
                this.verifymobile = false;
            },
            showProjectModal() {
                this.projectmodal = true
            },
            async like(resource) {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                let index = 0
                for (let i = 0; i < this.resources.length; i++) {
                    if (this.resources[i].id === resource)
                        index = this.resources[i]

                }
                this.resources[this.resources.indexOf(index)].likescount++
                if (this.resources[this.resources.indexOf(index)].dislikestate) {
                    this.resources[this.resources.indexOf(index)].dislikes = this.resources[this.resources.indexOf(index)].dislikes.slice(this.currentUserProfile.id)
                    this.resources[this.resources.indexOf(index)].likestate = true
                    this.resources[this.resources.indexOf(index)].dislikestate = false
                    this.resources[this.resources.indexOf(index)].likes.push(this.currentUserProfile.id)

                } else {
                    this.resources[this.resources.indexOf(index)].likes.push(this.currentUserProfile.id)
                    this.resources[this.resources.indexOf(index)].likestate = true
                }


                UsersService.resourceslikeupdate(resource,
                    {
                        dislikes: this.resources[this.resources.indexOf(index)].dislikes.join(','),
                        likes: this.resources[this.resources.indexOf(index)].likes.join(','),
                    }
                    , auth)
                    .then()
                    .catch()


            },
            async dislike(resource) {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                let index = 0
                for (let i = 0; i < this.resources.length; i++) {
                    if (this.resources[i].id === resource)
                        index = this.resources[i]

                }
                this.resources[this.resources.indexOf(index)].likescount--


                if (this.resources[this.resources.indexOf(index)].likestate) {


                    this.resources[this.resources.indexOf(index)].likes = this.resources[this.resources.indexOf(index)].likes.slice(this.currentUserProfile.id)
                    this.resources[this.resources.indexOf(index)].likestate = false
                    this.resources[this.resources.indexOf(index)].dislikestate = true
                    this.resources[this.resources.indexOf(index)].dislikes.push(this.currentUserProfile.id)


                } else {
                    this.resources[this.resources.indexOf(index)].dislikes.push(this.currentUserProfile.id)
                    this.resources[this.resources.indexOf(index)].dislikestate = true

                }


                UsersService.resourceslikeupdate(resource,
                    {
                        dislikes: this.resources[this.resources.indexOf(index)].dislikes.join(','),
                        likes: this.resources[this.resources.indexOf(index)].likes.join(','),
                    }
                    , auth)
                    .then()
                    .catch()


            },


            handleChange(tag, checked) {
                const {selectedTags} = this;
                const nextSelectedTags = checked
                    ? [...selectedTags, tag]
                    : selectedTags.filter(t => t !== tag);
                this.selectedTags = nextSelectedTags;
            },
            submit() {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                this.submiting = true

                this.$validator.validate().then(valid => {
                    if (valid) {
                        UsersService.newresource(
                            {
                                title: this.title,
                                link: this.link,
                                subject: this.subject.id,
                                provider: this.provider,
                                tags: this.selectedTags.join(",")


                            }, auth)
                            .then(resp => {
                                this.title = ''
                                this.link = ''
                                this.provider = ''
                                this.selectedTags = []
                                this.visible = false
                                this.submiting = false
                            })
                            .catch(e => {
                                console.log(e)
                            })
                    } else (
                        this.submiting = false
                    )
                })


            },
            SelfverifyProject(framework) {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                };
                this.verifymobile = false
                this.waiting = true


                this.projectchoice = true
                if (this.path === 'html') {
                    Projects.basicproject(this.$store.state.user.pk, framework, auth)
                        .then(resp => {
                                this.project = resp.data[0]

                            }
                        )
                        .catch(
                            this.project = null
                        )

                } else {
                    Projects.selfverifyproject(this.$store.state.user.pk, framework, auth)
                        .then(resp => {
                                this.project = resp.data[0]

                            }
                        )
                        .catch(
                            this.project = null
                        )
                }

                this.waiting = false


            },

            Accept(project, projectobject, pickedframework) {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                };
                this.acceptload = true

                Projects.selfassessprojectcreate(
                    {
                        stage: 'invite_accepted',
                        candidate: this.$store.state.user.pk,
                        project: project,
                        frameworktested: pickedframework,
                        csa: true
                    }
                    , auth)
                    .then(resp => {
                            this.projectlist.push(projectobject)
                            this.acceptload = false


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
        }
    }
</script>

<style scoped>
    .actioncards {
        width: 80%;
        background-color: #f5f5f5;
        padding: 0.1rem;
        border-radius: 0;
        border: 1px solid hsla(240, 1%, 74%, .3);


    }
</style>