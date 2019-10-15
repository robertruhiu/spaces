<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh;">
        <CandidateSider/>
        <a-layout>

            <a-layout-content style="background-color: white">
                <PortfolioHeader/>
                <a-row style="padding: 1% 1%;">
                    <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }" :md="{span: 16, offset: 0 }"
                                   :lg="{span: 16, offset: 0 }" :xl="{span: 16,offset: 0 }" style=" padding-left: 15px;padding-right: 15px;">
                        <div class="profile" style="padding-bottom: 2%">
                            <a-row>

                                <a-col :span="24">
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
                                <a-col :span="12">
                                <span>
                                    Availability:
                                <span style="" v-for="available in availability" v-bind:key="available">
                                <a-tag color="#F0F6FD" style="color:#007BFF;">
                                    {{available}}
                                </a-tag>
                            </span>
                            </span>
                                </a-col>
                                <a-col :span="6">
                                <span>
                                    Location:
                                <a-tag color="#F0F6FD" style="color:#007BFF;">
                                 {{currentUserProfile.country}}
                            </a-tag>
                            </span>
                                </a-col>

                            </a-row>
                        </div>
                        <show-at breakpoint="mediumAndBelow">
                            <div class="bio1">
                                <!---quizzes--->
                                <div>
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
                                </div>
                            </div>


                        </show-at>
                        <show-at breakpoint="mediumAndBelow">


                            <div class="bio1">
                                 <!---on codeln projects--->
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
                            </div>


                        </show-at>
                        <show-at breakpoint="mediumAndBelow">


                            <div class="bio1">
                                <!---personal portfolio--->
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
                            </div>


                        </show-at>
                        <show-at breakpoint="mediumAndBelow">


                            <div class="bio1">
                                 <!---work--->
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
                            </div>
                        </show-at>


                        <hide-at breakpoint="mediumAndBelow">
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
                        </hide-at>





                    </a-col>
                    <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }" :md="{span: 8, offset: 0 }"
                                   :lg="{span: 8, offset: 0 }" :xl="{span: 8,offset: 0 }" style="margin-top: 0.4%">
                        <div class="actions">
                            <a-row>
                                <a-col span="24">
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
                                </a-col>
                            </a-row>



                        </div>


                    </a-col>


                </a-row>

                <!--Create project--->
                <a-modal
                        title="New portfolio project"
                        v-model="createproject"
                        style="top: 1rem;"
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
                                     v-validate.disable="'required'" name="project_title"

                            />
                            <span style="color: #f5222d;" v-show="errors.has('project_title')"
                                  class="help is-danger">{{ errors.first('project_title') }}</span>
                        </a-form-item>
                        <a-form-item
                                label="Demo link"
                                :label-col="{ span: 24 }"
                                :wrapper-col="{ span: 24 }"
                        >
                            <a-input v-model="projectdemo"
                                     v-validate.disable="{required: true,url: {require_protocol: true }}"
                                     name="project_demo"

                            />
                            <span style="color: #f5222d;" v-show="errors.has('project_demo')"
                                  class="help is-danger">{{ errors.first('project_demo') }}</span>
                        </a-form-item>
                        <a-form-item
                                label="Repository link"
                                :label-col="{ span: 24 }"
                                :wrapper-col="{ span: 24 }"
                        >
                            <a-input v-model="projectrepo"
                                     v-validate.disable="{required: true,url: {require_protocol: true }}"
                                     name="project_repo"

                            />
                            <span style="color: #f5222d;" v-show="errors.has('project_repo')"
                                  class="help is-danger">{{ errors.first('project_repo') }}</span>
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
                            <a-textarea maxlength="400" placeholder="About the project" :rows="4"
                                        v-model="projectdescription"
                                        v-validate.disable="'required'" name="project_description"/>
                            <span style="color: #f5222d;" v-show="errors.has('project_description')"
                                  class="help is-danger">{{ errors.first('project_description') }}</span>
                        </a-form-item>


                    </a-form>

                </a-modal>

                <!--edit project--->
                <a-modal
                        title="Edit project"
                        v-model="editproject"
                        style="top: 1rem"

                >
                    <template slot="footer">
                        <a-button key="delete" type="danger" ghost @click="DeleteProject(currentproject.key)">
                            Delete
                        </a-button>

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
                                     v-validate.disable="'required'" name="project_title"

                            />
                            <span style="color: #f5222d;" v-show="errors.has('project_title')"
                                  class="help is-danger">{{ errors.first('project_title') }}</span>

                        </a-form-item>
                        <a-form-item
                                label="Demo link"
                                :label-col="{ span: 24 }"
                                :wrapper-col="{ span: 24 }"
                        >
                            <a-input v-model="currentproject.demo"
                                     v-validate.disable="{required: true,url: {require_protocol: true }}"
                                     name="project_demo"

                            />
                            <span style="color: #f5222d;" v-show="errors.has('project_demo')"
                                  class="help is-danger">{{ errors.first('project_demo') }}</span>
                        </a-form-item>
                        <a-form-item
                                label="Repository link"
                                :label-col="{ span: 24 }"
                                :wrapper-col="{ span: 24 }"
                        >
                            <a-input v-model="currentproject.repo"
                                     v-validate.disable="{required: true,url: {require_protocol: true }}"
                                     name="project_repo"

                            />
                            <span style="color: #f5222d;" v-show="errors.has('project_repo')"
                                  class="help is-danger">{{ errors.first('project_repo') }}</span>

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
                            <a-textarea maxlength="400" placeholder="About the project" :rows="4"
                                        v-model="currentproject.description"
                                        v-validate.disable="'required'" name="project_description"/>
                            <span style="color: #f5222d;" v-show="errors.has('project_description')"
                                  class="help is-danger">{{ errors.first('project_description') }}</span>
                        </a-form-item>


                    </a-form>
                </a-modal>

                <!--Create experience--->
                <a-modal
                        title="New Work Experience"
                        v-model="createexperience"
                        style="top: 1rem"

                >
                    <template slot="footer">

                        <a-button key="submit" type="primary" @click="SavenewExperience">
                            Save
                        </a-button>
                    </template>
                    <a-form
                            :form="form"

                    >
                        <a-form-item
                                label="Job title"
                                :label-col="{ span: 24 }"
                                :wrapper-col="{ span: 24 }"
                        >
                            <a-input v-model="experiencetitle"
                                     v-validate.disable="'required'"
                                     name="experiencetitle"

                            />
                            <span style="color: #f5222d;" v-show="errors.has('experience_title')"
                                  class="help is-danger">{{ errors.first('experience_title') }}</span>

                        </a-form-item>
                        <a-form-item
                                label="Company"
                                :label-col="{ span: 24 }"
                                :wrapper-col="{ span: 24 }"
                        >
                            <a-input v-model="experiencecompany"
                                     v-validate.disable="'required'"
                                     name="experience_company"


                            />
                            <span style="color: #f5222d;" v-show="errors.has('experience_company')"
                                  class="help is-danger">{{ errors.first('experience_company') }}</span>

                        </a-form-item>
                        <a-form-item
                                label="Duration in months"
                                :label-col="{ span: 24 }"
                                :wrapper-col="{ span: 24 }"
                        >

                            <a-input-number :min="1" :max="200" v-model="experienceduration"
                                            v-validate.disable="'required'"
                                            name="experience_duration"

                            />
                            months
                            <span style="color: #f5222d;" v-show="errors.has('experience_duration')"
                                  class="help is-danger">{{ errors.first('experience_duration') }}</span>

                        </a-form-item>
                        <a-form-item
                                label="Location"
                                :label-col="{ span: 24 }"
                                :wrapper-col="{ span: 24 }"
                        >

                            <country-select
                                    name="location"
                                    v-model="experiencelocation"
                                    class="ant-input"
                                    v-validate.disable="'required'"

                            />
                            <span style="color: #f5222d;" v-show="errors.has('location')"
                                  class="help is-danger">{{ errors.first('location') }}</span>
                        </a-form-item>


                        <a-form-item
                                label="Technologies used "
                                :label-col="{ span: 24 }"
                                :wrapper-col="{ span:  24}"
                        >
                            <template v-for="(tag, index) in experiencetags">
                                <a-tooltip v-if="tag.length > 20" :key="tag" :title="tag">
                                    <a-tag :key="tag"
                                           :afterClose="() => handleClose1(tag)" color="#2db7f5">
                                        {{`${tag.slice(0, 20)}...`}}
                                    </a-tag>
                                </a-tooltip>
                                <a-tag v-else :key="tag" :closable="index >= 0"
                                       :afterClose="() => handleClose1(tag)" color="#2db7f5">
                                    {{tag}}
                                </a-tag>
                            </template>
                            <a-input
                                    v-if="inputVisible1"
                                    ref="input"
                                    type="text"
                                    size="small"
                                    :style="{ width: '78px' }"
                                    :value="inputValue1"
                                    @change="handleInputChange1"
                                    @blur="handleInputConfirm1"
                                    @keyup.enter="handleInputConfirm1"
                            />
                            <a-tag v-else @click="showInput1"
                                   style="background: #fff; borderStyle: dashed;">
                                <a-icon type="plus"/>
                                New Tag
                            </a-tag>


                        </a-form-item>
                        <a-form-item
                                label="Work description"
                                :label-col="{ span: 24 }"
                                :wrapper-col="{ span: 24 }"
                        >
                            <a-textarea maxlength="400"
                                        placeholder="A description of your role and responsibilites(400 char max)"
                                        :rows="4"
                                        v-model="experiencedescription"
                                        v-validate.disable="'required'"
                                        name="experiencedescription"

                            />
                            <span style="color: #f5222d;" v-show="errors.has('experience_description')"
                                  class="help is-danger">{{ errors.first('experience_description') }}</span>

                        </a-form-item>


                    </a-form>

                </a-modal>

                <!--edit experience--->
                <a-modal
                        title="Edit work experience"
                        v-model="editexperience"
                        style="top: 1rem"

                >
                    <template slot="footer">
                        <a-button key="delete" type="danger" ghost @click="DeleteExperience(currentexperience.key)">
                            Delete
                        </a-button>

                        <a-button key="submit" type="primary" @click="UpdateExperience">
                            Save
                        </a-button>
                    </template>
                    <a-form
                            :form="form"

                    >
                        <a-form-item
                                label="Job title"
                                :label-col="{ span: 24 }"
                                :wrapper-col="{ span: 24 }"
                        >
                            <a-input v-model="currentexperience.title"
                                     v-validate.disable="'required'"
                                     name="experience_title"

                            />
                            <span style="color: #f5222d;" v-show="errors.has('experience_title')"
                                  class="help is-danger">{{ errors.first('experience_title') }}</span>

                        </a-form-item>
                        <a-form-item
                                label="Company"
                                :label-col="{ span: 24 }"
                                :wrapper-col="{ span: 24 }"
                        >
                            <a-input v-model="currentexperience.company"
                                     v-validate.disable="'required'"
                                     name="experience_company"


                            />
                            <span style="color: #f5222d;" v-show="errors.has('experience_company')"
                                  class="help is-danger">{{ errors.first('experience_company') }}</span>

                        </a-form-item>
                        <a-form-item
                                label="Duration in months"
                                :label-col="{ span: 24 }"
                                :wrapper-col="{ span: 24 }"
                        >

                            <a-input-number :min="1" :max="200" v-model="currentexperience.duration"
                                            v-validate.disable="'required'"
                                            name="experience_duration"

                            />
                            months
                            <span style="color: #f5222d;" v-show="errors.has('experience_duration')"
                                  class="help is-danger">{{ errors.first('experience_duration') }}</span>

                        </a-form-item>
                        <a-form-item
                                label="Location"
                                :label-col="{ span: 24 }"
                                :wrapper-col="{ span: 24 }"
                        >

                            <country-select
                                    name="location"
                                    v-model="currentexperience.location"
                                    class="ant-input"
                                    v-validate.disable="'required'"

                            />
                            current:{{currentexperience.location}}
                            <span style="color: #f5222d;" v-show="errors.has('location')"
                                  class="help is-danger">{{ errors.first('location') }}</span>
                        </a-form-item>


                        <a-form-item
                                label="Technologies used "
                                :label-col="{ span: 24 }"
                                :wrapper-col="{ span:  24}"
                        >
                            <template v-for="(tag, index) in experiencetags">
                                <a-tooltip v-if="tag.length > 20" :key="tag" :title="tag">
                                    <a-tag :key="tag"
                                           :afterClose="() => handleClose1(tag)" color="#2db7f5">
                                        {{`${tag.slice(0, 20)}...`}}
                                    </a-tag>
                                </a-tooltip>
                                <a-tag v-else :key="tag" :closable="index >= 0"
                                       :afterClose="() => handleClose1(tag)" color="#2db7f5">
                                    {{tag}}
                                </a-tag>
                            </template>
                            <a-input
                                    v-if="inputVisible1"
                                    ref="input"
                                    type="text"
                                    size="small"
                                    :style="{ width: '78px' }"
                                    :value="inputValue1"
                                    @change="handleInputChange1"
                                    @blur="handleInputConfirm1"
                                    @keyup.enter="handleInputConfirm1"
                            />
                            <a-tag v-else @click="showInput1"
                                   style="background: #fff; borderStyle: dashed;">
                                <a-icon type="plus"/>
                                New Tag
                            </a-tag>


                        </a-form-item>
                        <a-form-item
                                label="Work description"
                                :label-col="{ span: 24 }"
                                :wrapper-col="{ span: 24 }"
                        >
                            <a-textarea maxlength="400"
                                        placeholder="A description of your role and responsibilites(400 char max)"
                                        :rows="4"
                                        v-model="currentexperience.description"
                                        v-validate.disable="'required'"
                                        name="experience_description"

                            />
                            <span style="color: #f5222d;" v-show="errors.has('experience_description')"
                                  class="help is-danger">{{ errors.first('experience_description') }}</span>

                        </a-form-item>


                    </a-form>

                </a-modal>

            </a-layout-content>
            <banner/>
        </a-layout>
    </a-layout>
</template>

<script>
    //experience structure on table
    import ACol from "ant-design-vue/es/grid/Col";
    import banner from '@/components/layout/banner'

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
    import Vue from 'vue'
    import VeeValidate from 'vee-validate';
    import {showAt, hideAt} from 'vue-breakpoints'

    Vue.use(VeeValidate);

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
                experiencetags: [],
                inputVisible: false,
                inputValue: '',
                portfoliotags: [],
                inputVisible1: false,
                inputValue1: '',
                projecttitle: '',
                projectdemo: '',
                projectrepo: '',
                projectdescription: '',
                projecttech: '',
                experiencetitle: '',
                experiencecompany: '',
                experienceduration: '',
                experiencelocation: '',
                experiencetech: '',
                experiencedescription: '',
                availability:[]


            }
        },
        components: {
            ACol,
            PortfolioHeader,
            CandidateSider,
            hideAt, showAt,banner
        },
        async mounted() {
            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}

            }
            this.currentUser = (await UsersService.retrieveuser(this.$store.state.user.pk, auth)).data
            this.currentUserProfile = (await UsersService.currentuser(this.$store.state.user.pk, auth)).data
            if(this.currentUserProfile.skills){
                this.skills = this.currentUserProfile.skills.split(',');
            }
            if(this.currentUserProfile.availabilty){
                this.availability = this.currentUserProfile.availabilty.split(',');
            }

            if(this.currentUserProfile.verified_skills){
                this.verified_skills = this.currentUserProfile.verified_skills.split(',');
            }

            this.portfoliolist = (await UsersService.portfolio(this.$store.state.user.pk, auth)).data
            this.experienceslist = (await UsersService.experience(this.$store.state.user.pk, auth)).data

            this.takenquizzes = (await QuizService.taken(this.$store.state.user.pk, auth)).data;

            let tempcodelnprojects = (await Projects.myprojects(this.$store.state.user.pk, auth)).data


            for (let i = 0; i < this.portfoliolist.length; i++) {
                let id = this.portfoliolist[i].id
                let title = this.portfoliolist[i].title
                let description = this.portfoliolist[i].description
                let demo = this.portfoliolist[i].demo_link
                let tech_used =[]
                if(this.portfoliolist[i].tech_tags){
                    tech_used = this.portfoliolist[i].tech_tags.split(',');
                }

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
                let tech_used =[]
                if(this.experienceslist[i].tech_tags){
                    tech_used = this.experienceslist[i].tech_tags.split(',');
                }

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
                this.experiencetags = experience.tags
                this.editexperience = true
            },
            async Refresh() {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                this.portfoliolist = (await UsersService.portfolio(this.$store.state.user.pk, auth)).data
                this.experienceslist = (await UsersService.experience(this.$store.state.user.pk, auth)).data


                for (let i = 0; i < this.portfoliolist.length; i++) {
                    let id = this.portfoliolist[i].id
                    let title = this.portfoliolist[i].title
                    let description = this.portfoliolist[i].description
                    let demo = this.portfoliolist[i].demo_link
                    let tech_used =[]
                    if(this.portfoliolist[i].tech_tags){
                        tech_used = this.portfoliolist[i].tech_tags.split(',');
                    }

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
                    let tech_used =[]
                    if(this.experienceslist[i].tech_tags){
                        tech_used = this.experienceslist[i].tech_tags.split(',');
                    }

                    let one_experience = new Experience(
                        id, title, description, company, location, duration, tech_used
                    );
                    this.experiences.push(one_experience)


                }


            },

            SavenewProject() {
                let self = this;

                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                this.$validator.validate().then(valid => {
                    if (valid) {
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
                                    this.portfolio = []
                                    this.portfoliolist = []
                                    this.experienceslist = []
                                    this.experiences = []
                                    this.createproject = false
                                    this.projecttitle = ''
                                    this.projectdemo = ''
                                    this.projectrepo = ''
                                    this.projectdescription = ''
                                    this.projecttech = ''
                                    self.Refresh()

                                    return resp

                                }
                            )
                            .catch()

                    }
                })


            },

            UpdateProject() {
                let self = this;
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                this.$validator.validate().then(valid => {
                    if (valid) {
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
                                    this.portfolio = []
                                    this.portfoliolist = []
                                    this.experienceslist = []
                                    this.experiences = []
                                    this.editproject = false
                                    self.Refresh()


                                    return resp

                                }
                            )
                            .catch()
                    }
                })


            },

            SavenewExperience() {
                let self = this;

                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                this.$validator.validate().then(valid => {
                    if (valid) {
                        UsersService.newexperience(
                            {
                                candidate: this.$store.state.user.pk,
                                title: this.experiencetitle,
                                description: this.experiencedescription,
                                company: this.experiencecompany,
                                tech_tags: this.experiencetech,
                                location: this.experiencelocation,
                                duration: this.experienceduration

                            },
                            auth)
                            .then(resp => {
                                    this.portfolio = []
                                    this.portfoliolist = []
                                    this.experienceslist = []
                                    this.experiences = []
                                    this.createexperience = false

                                    this.experiencetitle = ''
                                    this.experiencecompany = ''
                                    this.experienceduration = ''
                                    this.experiencelocation = ''
                                    this.experiencetech = ''
                                    this.experiencedescription = ''

                                    self.Refresh()

                                    return resp

                                }
                            )
                            .catch()
                    }
                })


            },

            UpdateExperience() {
                let self = this;
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                this.$validator.validate().then(valid => {
                    if (valid) {
                        this.currentexperience.tags = this.experiencetags.join(", ")
                        UsersService.updateexperience(this.currentexperience.key,
                            {
                                title: this.currentexperience.title,
                                description: this.currentexperience.description,
                                company: this.currentexperience.company,
                                duration: this.currentexperience.duration,
                                tech_tags: this.currentexperience.tags,
                                location: this.currentexperience.location,


                            },
                            auth)
                            .then(resp => {
                                    this.portfolio = []
                                    this.portfoliolist = []
                                    this.experienceslist = []
                                    this.experiences = []

                                    this.editexperience = false
                                    self.Refresh()


                                    return resp

                                }
                            )
                            .catch()

                    }
                })


            },

            handleClose1(removedTag) {
                const tags = this.experiencetags.filter(tag => tag !== removedTag)
                this.experiencetags = tags
                let alltags = this.experiencetags.join(", ")
                this.experiencetech = alltags

            },

            showInput1() {
                this.inputVisible1 = true
                this.$nextTick(function () {
                    this.$refs.input.focus()
                })
            },

            handleInputChange1(e) {
                this.inputValue1 = e.target.value
            },

            handleInputConfirm1() {
                const inputValue = this.inputValue1
                let experiencetags = this.experiencetags
                if (inputValue && experiencetags.indexOf(inputValue) === -1) {
                    experiencetags = [...experiencetags, inputValue]
                }

                let alltags = experiencetags.join(", ")
                this.experiencetech = alltags
                Object.assign(this, {
                    experiencetags,
                    inputVisible1: false,
                    inputValue1: '',
                })
            },

            DeleteProject(portfolio_id) {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                let self = this;
                UsersService.deleteportfolio(portfolio_id,auth)
                    .then(resp => {
                            this.portfolio = []
                            this.portfoliolist = []
                            this.experienceslist = []
                            this.experiences = []
                            this.editproject = false
                            self.Refresh()
                            return resp

                        }
                    )
                    .catch()


            },
            DeleteExperience(experience_id) {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                let self = this;
                UsersService.deleteexperience(experience_id,auth)
                    .then(resp => {
                            this.portfolio = []
                            this.portfoliolist = []
                            this.experienceslist = []
                            this.experiences = []
                            this.editproject = false
                            self.Refresh()
                            return resp

                        }
                    )
                    .catch()
            }
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
    .bio1 {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        background-color: white;

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
