<template>
    <a-layout>

        <Pageheader/>
        <a-layout-content :style="{ padding: '0 0px', }">

            <div :style="{ background: '#fff', padding: '24px', minHeight: '81vh' }">
                <a-row v-if="!$store.state.isUserLoggedIn" style="padding: 3%;margin-top: 4rem">
                    <a-col :xs="{span: 18, offset: 0 }" :sm="{span: 12, offset: 6 }" :md="{span: 12, offset: 6 }"
                           :lg="{span: 12, offset: 8 }" :xl="{span: 12, offset: 9 }">
                        <a-card title="Register" :style="{width:'21rem'}">

                            <p class="alert" v-if="error">{{error}}</p>
                            <a-form
                                    id="components-form-demo-normal-login"
                                    :form="registerform"
                                    class="login-form"

                            >
                                <a-form-item>
                                    <a-input v-model="firstname"
                                             v-validate="'required'"
                                             name="firstname"
                                             placeholder="firstname"
                                    >

                                    </a-input>
                                    <div v-if="errors.has('firstname')" style="color: #f5222d;"
                                         class="ant-form-explain">{{
                                        errors.first('firstname') }}
                                    </div>
                                </a-form-item>
                                <a-form-item>
                                    <a-input v-model="lastname"
                                             v-validate="'required'"
                                             name="lastname"

                                             placeholder="lastname"
                                    >

                                    </a-input>
                                    <div v-if="errors.has('lastname')" style="color: #f5222d;" class="ant-form-explain">
                                        {{
                                        errors.first('lastname') }}
                                    </div>
                                </a-form-item>
                                <a-form-item>
                                    <a-input v-model="email"
                                             v-validate="'required|email'"
                                             name="email"

                                             placeholder="Email"
                                    >
                                        <a-icon
                                                slot="prefix"
                                                type="user"
                                                style="color: rgba(0,0,0,.25)"
                                        />
                                    </a-input>

                                    <div v-if="errors.has('email')" style="color: #f5222d;" class="ant-form-explain">{{
                                        errors.first('email') }}
                                    </div>
                                </a-form-item>
                                <a-form-item>


                                    <a-input v-validate="'required|verify_password'" name="password"
                                             type="password"
                                             v-model="password1"
                                             :class="{'is-danger': errors.has('password')}" placeholder="Password"
                                             ref="password">
                                        <a-icon
                                                slot="prefix"
                                                type="lock"
                                                style="color: rgba(0,0,0,.25)"
                                        />
                                    </a-input>
                                    <span style="color: #f5222d;" v-show="errors.has('password')"
                                          class="help is-danger">{{ errors.first('password') }}</span>


                                </a-form-item>
                                <a-form-item>


                                    <a-input v-model="password2" v-validate="'required|confirmed:password'"
                                             name="password_confirmation"
                                             type="password" :class="{'is-danger': errors.has('password_confirmation')}"
                                             placeholder="Password, Again" data-vv-as="password">
                                        <a-icon
                                                slot="prefix"
                                                type="lock"
                                                style="color: rgba(0,0,0,.25)"
                                        />
                                    </a-input>
                                    <span style="color: #f5222d;" v-show="errors.has('password_confirmation')"
                                          class="help is-danger">{{ errors.first('password_confirmation') }}</span>
                                </a-form-item>
                                <a-form-item v-if="loading === false">


                                    <a-button @click="register"
                                              type="primary"
                                              class="login-form-button"
                                    >
                                        Register
                                    </a-button>

                                </a-form-item>
                                <a-form-item v-else>


                                    <div style="text-align: center;">
                                        <a-spin/>
                                    </div>


                                </a-form-item>
                            </a-form>
                        </a-card>
                    </a-col>
                </a-row>


                <a-row v-if="$store.state.isUserLoggedIn && currentUserProfile.user_type == null"
                       style="margin-top: 4rem;padding: 3%">

                    <a-col :xs="{span: 18, offset: 0 }" :sm="{span: 12, offset: 6 }" :md="{span: 18, offset: 6 }"
                           :lg="{span: 18, offset: 6 }" :xl="{span: 12, offset: 6 }">
                        <h2 style="margin-left: 25%">Choose profile</h2>


                        <div>
                            <a-radio-group v-model="currentUserProfile.user_type">
                                <a-radio-button class="radiochoice"
                                                style="border-radius: 0;box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;"
                                                value="recruiter">
                                    <img style="margin-left: 25%;width: 50%;margin-right: 25%"
                                         src="../../../assets/images/interview.svg">
                                    <p style="text-align: center">Recruiter</p>
                                </a-radio-button>
                                <a-radio-button class="radiochoice"
                                                style="border-radius: 0;box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;"
                                                value="developer">
                                    <img style="margin-left: 25%;width: 50%;margin-right: 25%;"
                                         src="../../../assets/images/programmer.svg">
                                    <p style="text-align: center">Developer</p>
                                </a-radio-button>
                            </a-radio-group>


                        </div>

                    </a-col>
                </a-row>


                <a-row v-if="currentUserProfile.user_type && currentUserProfile.user_type ==='developer'"
                       style="margin-top: 4rem"
                >
                    <a-col :xs="{span: 22, offset: 0 }" :sm="{span: 24, offset: 0 }" :md="{span: 18, offset: 3 }"
                           :lg="{span: 18, offset: 3 }" :xl="{span: 18, offset: 3 }"
                           :style="{boxShadow:'0 .125rem .25rem rgba(0,0,0,.075)!important'}">
                        <div style="padding: 3%">
                            <a-steps :current="current">
                                <a-step v-for="item in steps" :key="item.title" :title="item.title"/>
                            </a-steps>

                            <div class="steps-content">
                                <div if v-if="current === 0">
                                    <a-form :form="developerstep1">
                                        <a-row :gutter="16">
                                            <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                                                   :md="{span: 12, offset: 0 }"
                                                   :lg="{span: 8, offset: 0 }" :xl="{span: 8, offset: 0 }">
                                                <a-form-item
                                                        label="Github Url"
                                                        :label-col="{ span: 24 }"
                                                        :wrapper-col="{ span:  24}"
                                                >
                                                    <a-input
                                                            v-validate="{required: true,url: {require_protocol: true }}"
                                                            name="github"
                                                            v-model="currentUserProfile.github_repo"

                                                    />
                                                </a-form-item>

                                                <span style="color: #f5222d;" v-show="errors.has('github')"
                                                      class="help is-danger">{{ errors.first('github') }}</span>

                                            </a-col>

                                            <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                                                   :md="{span: 12, offset: 0 }"
                                                   :lg="{span: 8, offset: 0 }" :xl="{span: 8, offset: 0 }">
                                                <a-form-item
                                                        label="Linkedin Url"
                                                        :label-col="{ span: 24 }"
                                                        :wrapper-col="{ span:  24}"
                                                >
                                                    <a-input
                                                            v-validate="{required: true,url: {require_protocol: true }}"
                                                            name="linkedin"
                                                            v-model="currentUserProfile.linkedin_url"

                                                    />
                                                    <span style="color: #f5222d;" v-show="errors.has('linkedin')"
                                                          class="help is-danger">{{ errors.first('linkedin') }}</span>
                                                </a-form-item>

                                            </a-col>

                                            <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                                                   :md="{span: 12, offset: 0 }"
                                                   :lg="{span: 8, offset: 0 }" :xl="{span: 8, offset: 0 }">
                                                <a-form-item
                                                        label="Country"
                                                        :label-col="{ span: 24 }"
                                                        :wrapper-col="{ span:  24}"
                                                >
                                                    <country-select v-validate="'required'"
                                                                    name="location"
                                                                    v-model="currentUserProfile.country"
                                                                    class="ant-input"

                                                    />
                                                    <span style="color: #f5222d;" v-show="errors.has('location')"
                                                          class="help is-danger">{{ errors.first('location') }}</span>
                                                </a-form-item>

                                            </a-col>


                                        </a-row>
                                        <a-row :gutter="16">

                                            <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                                                   :md="{span: 12, offset: 0 }"
                                                   :lg="{span: 8, offset: 0 }" :xl="{span: 8, offset: 0 }"


                                            >
                                                <a-form-item
                                                        label="Gender"
                                                        :label-col="{ span: 24 }"
                                                        :wrapper-col="{ span: 24 }"
                                                >
                                                    <a-select v-validate="'required'"
                                                              name="gender"

                                                              placeholder="Select a option and change input text above"
                                                              v-model="currentUserProfile.gender"
                                                    >
                                                        <a-select-option value="male">
                                                            male
                                                        </a-select-option>
                                                        <a-select-option value="female">
                                                            female
                                                        </a-select-option>
                                                    </a-select>
                                                    <span style="color: #f5222d;" v-show="errors.has('gender')"
                                                          class="help is-danger">{{ errors.first('gender') }}</span>
                                                </a-form-item>
                                            </a-col>

                                            <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                                                   :md="{span: 12, offset: 0 }"
                                                   :lg="{span: 8, offset: 0 }" :xl="{span: 8, offset: 0 }">
                                                <a-form-item
                                                        label="Years of experience"
                                                        :label-col="{ span: 24 }"
                                                        :wrapper-col="{ span: 24 }"
                                                >
                                                    <a-select v-validate="'required'"
                                                              name="experience"

                                                              placeholder="Select a option and change input text above"
                                                              v-model="currentUserProfile.years"
                                                    >
                                                        <a-select-option value="0-1">
                                                            0-1
                                                        </a-select-option>
                                                        <a-select-option value="1-2">
                                                            1-2
                                                        </a-select-option>
                                                        <a-select-option value="2-4">
                                                            2-4
                                                        </a-select-option>
                                                        <a-select-option value="4-above">
                                                            4-above
                                                        </a-select-option>
                                                    </a-select>
                                                    <span style="color: #f5222d;" v-show="errors.has('experience')"
                                                          class="help is-danger">{{ errors.first('experience') }}</span>
                                                </a-form-item>

                                            </a-col>

                                            <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                                                   :md="{span: 12, offset: 0 }"
                                                   :lg="{span: 8, offset: 0 }" :xl="{span: 8, offset: 0 }">
                                                <a-form-item
                                                        label="Preffered work type"
                                                        :label-col="{ span: 24 }"
                                                        :wrapper-col="{ span: 24 }"
                                                >
                                                    <a-select v-validate="'required'"
                                                              name="work_type"

                                                              placeholder="Select a option and change input text above"
                                                              v-model="currentUserProfile.availabilty"
                                                    >
                                                        <a-select-option value="contract">
                                                            contract
                                                        </a-select-option>
                                                        <a-select-option value="fulltime">
                                                            fulltime
                                                        </a-select-option>
                                                        <a-select-option value="parttime">
                                                            part time
                                                        </a-select-option>
                                                        <a-select-option value="remote">
                                                            remote
                                                        </a-select-option>
                                                    </a-select>
                                                    <span style="color: #f5222d;" v-show="errors.has('work_type')"
                                                          class="help is-danger">{{ errors.first('work_type') }}</span>
                                                </a-form-item>

                                            </a-col>
                                        </a-row>


                                    </a-form>
                                </div>

                                <div if v-else-if="current === 1">
                                    <a-row :gutter="16">
                                        <a-col :span="24">

                                            <a-form-item

                                                    label="What are your tech skills "
                                                    :label-col="{ span: 24 }"
                                                    :wrapper-col="{ span:  24}"
                                            >
                                                <template v-for="(tag, index) in tags">
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


                                        </a-col>

                                        <a-col :span="24">
                                            <a-form-item
                                                    label="Bio (300 characters max)"
                                                    :label-col="{ span: 24 }"
                                                    :wrapper-col="{ span:  24}"
                                            >

                                                <a-textarea name="bio"
                                                            maxlength="300"
                                                            v-model="currentUserProfile.about"
                                                            placeholder="Tell us something about yourself"
                                                            :rows="4"/>

                                                <div v-for="error in errorlist" v-bind:key="error">
                                                    <div v-if="error === 'about'" style="color: red">
                                                        write something about yourself
                                                    </div>

                                                </div>
                                            </a-form-item>

                                        </a-col>
                                        <a-col :span="24" style="margin-bottom: 1rem">
                                            <span>
                                                Monthly Salary expectations
                                            </span>
                                            <a-input-number
                                                    :defaultValue="1000"
                                                    :formatter="value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
                                                    :parser="value => value.replace(/\$\s?|(,*)/g, '')"
                                                    v-model="currentUserProfile.salary"
                                            />
                                            <div v-for="error in errorlist" v-bind:key="error">
                                                <div v-if="error === 'salary'" style="color: red">
                                                    Your salary value required
                                                </div>

                                            </div>

                                        </a-col>
                                        <a-col :span="24" style="margin-bottom: 1rem">
                                            <a-checkbox v-model="currentUserProfile.csa">Are you part of the CodeLn
                                                Student
                                                Ambassador Program?
                                            </a-checkbox>

                                        </a-col>
                                        <a-col :span="24">
                                            <div v-if="cv">
                                                <a :href="cv" target="_blank">cv link</a>
                                            </div>

                                            <div v-else>
                                                <div v-if="uploading">
                                                    <span>Uploading file <a-spin/></span>

                                                </div>
                                                <div v-else>
                                                    Upload cv
                                                    <input style="margin-top: 1rem" type="file" @change="handleUpload">
                                                </div>
                                                <div v-for="error in errorlist" v-bind:key="error">
                                                    <div v-if="error === 'cv'" style="color: red">
                                                        please upload cv
                                                    </div>

                                                </div>


                                            </div>
                                        </a-col>
                                    </a-row>
                                </div>

                                <div if v-else-if="current === 2">
                                    <span>
                                        <strong>Add personal projects you have build</strong>
                                        <span style="float: right;color: blue">
                                            <a @click="CreateProject">
                                                <a-icon type="plus-circle" theme="twoTone"/>Add
                                            </a>
                                        </span>
                                    </span>
                                    <div v-if="portfolio.length>0">
                                        <div style="border-bottom: 1px solid #e8e8e8;padding-bottom: 2%;padding-top: 2%"
                                             v-for="item in portfolio" v-bind:key="item.id">
                                            <p style="font-weight: 700">
                                                {{item.title}}


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

                                </div>

                                <div if v-else-if="current === 3">
                                    <span>
                                        <strong>Add your recent work stints.Experience builds trust</strong>
                                        <span style="float: right;color: blue">
                                            <a @click="CreateExperience">
                                                <a-icon type="plus-circle" theme="twoTone"/>Add
                                            </a>
                                        </span>
                                        <div v-if="experiences.length>0">
                                            <a-timeline>
                                                <a-timeline-item v-for="item in experiences" v-bind:key="item.id">

                                                    <p style="font-weight: 700">
                                                        {{item.title}}


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
                                    </span>
                                </div>

                            </div>
                            <div class="steps-action">


                                    <span>
                                        <span v-if="loading">
                                            <a-spin/>
                                        </span>
                                        <span v-else>
                                            <a-button
                                                    v-if="current < steps.length - 1"
                                                    type="primary" @click="next(current)"
                                            >
                                    Next
                                </a-button>
                                        </span>
                                    </span>

                                <span>
                                    <div v-if="loading" style="text-align: center;">
                                <a-spin/>
                            </div>
                                    <span v-else>
                                         <a-button
                                                 v-if="current == steps.length - 1"
                                                 type="primary"
                                                 @click="onComplete"
                                         >
                                    Done
                                </a-button>
                                    </span>

                                </span>

                                <a-button
                                        v-if="current>0"
                                        style="margin-left: 8px"
                                        @click="prev"
                                >
                                    Previous
                                </a-button>
                            </div>
                        </div>

                    </a-col>
                </a-row>


                <a-row v-if="currentUserProfile.user_type && currentUserProfile.user_type ==='recruiter'"
                       style="margin-top: 4rem">
                    <a-col :xs="{span: 22, offset: 0 }" :sm="{span: 24, offset: 0 }" :md="{span: 18, offset: 3 }"
                           :lg="{span: 18, offset: 3 }" :xl="{span: 18, offset: 3 }"
                           :style="{boxShadow:'0 .125rem .25rem rgba(0,0,0,.075)!important'}">
                        <div style="padding: 3%">
                            <a-steps :current="current1">
                                <a-step v-for="item in steps1" :key="item.title" :title="item.title"/>
                            </a-steps>
                            <div class="steps-content">
                                <div if v-if="current1 === 0">
                                    <a-form :form="recruiterstep1">
                                        <a-row :gutter="16">
                                            <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                                                   :md="{span: 12, offset: 0 }"
                                                   :lg="{span: 8, offset: 0 }" :xl="{span: 8, offset: 0 }">
                                                <a-form-item
                                                        label="Company name"
                                                        :label-col="{ span: 24 }"
                                                        :wrapper-col="{ span:  24}"
                                                >
                                                    <a-input
                                                            v-validate="{required: true}"
                                                            name="company"
                                                            v-model="currentUserProfile.company"

                                                    />
                                                </a-form-item>

                                                <span style="color: #f5222d;" v-show="errors.has('company')"
                                                      class="help is-danger">{{ errors.first('company') }}</span>

                                            </a-col>

                                            <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                                                   :md="{span: 12, offset: 0 }"
                                                   :lg="{span: 8, offset: 0 }" :xl="{span: 8, offset: 0 }">
                                                <a-form-item
                                                        label="Company website link"
                                                        :label-col="{ span: 24 }"
                                                        :wrapper-col="{ span:  24}"
                                                >
                                                    <a-input
                                                            v-validate="{required: true,url: {require_protocol: true }}"
                                                            name="website"
                                                            v-model="currentUserProfile.company_url"

                                                    />
                                                    <span style="color: #f5222d;" v-show="errors.has('website')"
                                                          class="help is-danger">{{ errors.first('website') }}</span>
                                                </a-form-item>

                                            </a-col>

                                            <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                                                   :md="{span: 12, offset: 0 }"
                                                   :lg="{span: 8, offset: 0 }" :xl="{span: 8, offset: 0 }">
                                                <a-form-item
                                                        label="Company location"
                                                        :label-col="{ span: 24 }"
                                                        :wrapper-col="{ span:  24}"
                                                >
                                                    <country-select v-validate="'required'"
                                                                    name="location"
                                                                    v-model="currentUserProfile.country"
                                                                    class="ant-input"
                                                    />
                                                    <span style="color: #f5222d;" v-show="errors.has('location')"
                                                          class="help is-danger">{{ errors.first('location') }}</span>
                                                </a-form-item>

                                            </a-col>


                                        </a-row>
                                        <a-row :gutter="16">

                                            <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                                                   :md="{span: 12, offset: 0 }"
                                                   :lg="{span: 8, offset: 0 }" :xl="{span: 8, offset: 0 }"


                                            >
                                                <a-form-item
                                                        label="Job role"
                                                        :label-col="{ span: 24 }"
                                                        :wrapper-col="{ span:  24}"
                                                >
                                                    <a-input


                                                            v-model="currentUserProfile.job_role"
                                                            placeholder="Recruiter,CTO,HR,CEO etc"

                                                    />
                                                </a-form-item>

                                            </a-col>
                                            <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                                                   :md="{span: 12, offset: 0 }"
                                                   :lg="{span: 8, offset: 0 }" :xl="{span: 8, offset: 0 }"


                                            >
                                                <a-form-item
                                                        label="Industry"
                                                        :label-col="{ span: 24 }"
                                                        :wrapper-col="{ span:  24}"
                                                >
                                                    <a-input
                                                            v-model="currentUserProfile.industry"

                                                    />
                                                </a-form-item>

                                            </a-col>


                                        </a-row>


                                    </a-form>
                                </div>
                                <div if v-if="current1 === 1">
                                    <a-row :gutter="16">
                                        <a-col :span="24">

                                            <a-form-item>
                                                <p>Pick skills to enable candidate
                                                    recommendations</p>
                                                <div>

                                                    <template v-for=" tag in recommendationtags">
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
                                        </a-col>
                                    </a-row>
                                </div>
                            </div>
                            <div class="steps-action">
                                <span>
                                        <span v-if="loading">
                                            <a-spin/>
                                        </span>
                                        <span v-else>
                                            <a-button
                                                    v-if="current1 < steps1.length - 1"
                                                    type="primary" @click="next1(current)"
                                            >
                                    Next
                                </a-button>
                                        </span>
                                    </span>
                                <a-button
                                        v-if="current1 == steps1.length - 1"
                                        type="primary"
                                        @click="onCompleteRecruiter"
                                >
                                    Done
                                </a-button>
                                <a-button
                                        v-if="current1>0"
                                        style="margin-left: 8px"
                                        @click="prev1"
                                >
                                    Previous
                                </a-button>
                            </div>
                        </div>
                    </a-col>


                </a-row>


                <!--Create project--->
                <a-modal
                        title="New portfolio project"
                        v-model="createproject"
                        style="top: 1rem;"

                >
                    <template slot="footer">
                        <div>
                            <div v-if="loading" style="text-align: center;">
                                <a-spin/>
                            </div>
                            <a-button v-else key="submit" type="primary" @click="SavenewProject">
                                Save
                            </a-button>
                        </div>


                    </template>
                    <a-form
                            :form="projectform"

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
                                           :afterClose2="() => handleClose2(tag)" color="#2db7f5">
                                        {{`${tag.slice(0, 20)}...`}}
                                    </a-tag>
                                </a-tooltip>
                                <a-tag v-else :key="tag" :closable="index >= 0"
                                       :afterClose2="() => handleClose2(tag)" color="#2db7f5">
                                    {{tag}}
                                </a-tag>
                            </template>
                            <a-input
                                    v-if="inputVisible2"
                                    ref="input"
                                    type="text"
                                    size="small"
                                    :style="{ width: '78px' }"
                                    :value="inputValue2"
                                    @change="handleInputChange2"
                                    @blur="handleInputConfirm2"
                                    @keyup.enter="handleInputConfirm2"
                            />
                            <a-tag v-else @click="showInput2"
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


                <!--Create experience--->
                <a-modal
                        title="New Work Experience"
                        v-model="createexperience"
                        style="top: 1rem"

                >
                    <template slot="footer">
                        <div>
                            <div v-if="loading" style="text-align: center;">
                                <a-spin/>
                            </div>
                            <a-button v-else key="submit" type="primary" @click="SavenewExperience">
                                Save
                            </a-button>
                        </div>


                    </template>
                    <a-form
                            :form="experienceform"

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


            </div>


        </a-layout-content>

        <Footer/>
    </a-layout>


</template>


<script>
    import Pageheader from '@/components/layout/Header.vue'
    import Footer from '@/components/layout/Footer.vue'
    import AuthService from '@/services/AuthService'
    import UsersService from '@/services/UsersService'
    import ARow from "ant-design-vue/es/grid/Row";
    import ACol from "ant-design-vue/es/grid/Col";
    import ARadioButton from "ant-design-vue/es/radio/RadioButton";
    import 'vue-form-wizard/dist/vue-form-wizard.min.css'
    import VeeValidate from 'vee-validate';
    import axios from 'axios'
    import cloudinary from 'cloudinary-core'
    import Vue from 'vue'

    Vue.use(cloudinary)


    Vue.use(VeeValidate);

    VeeValidate.Validator.extend('verify_password', {
        getMessage: field => `The password must contain at least: 1 uppercase, 1 lowercase, 1 number,8 characters min`,
        validate: value => {
            var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
            return strongRegex.test(value);
        }
    });

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


    export default {
        name: 'register',

        components: {
            ACol,
            ARadioButton,
            ARow,

            Pageheader,
            Footer,


        },
        data() {
            return {
                loading: false,
                savedevdetails: false,
                saverecruiterdetails: false,
                usertype: null,
                firstname: '',
                lastname: '',
                email: '',
                password1: '',
                password2: '',
                error: null,
                currentUserProfile: {},
                tags: [],
                inputVisible: false,
                inputValue: '',
                recommendationtags: ['Django', 'Html', 'Css', 'bootstrap', 'React', 'Java',
                    'React Native', 'Redux', 'Flask ', 'Go', 'Expressjs', 'Vuejs',
                    'Angular', 'Ios', 'flutter', 'Ionic', 'Rails', 'Meteor', 'AI', 'Cybersecurity',
                    'Blockchain', 'Arduino', 'Spring', 'Bitcoin', 'Kotlin', 'Scala', 'Nativescript ',
                    'Android', 'Website', 'Mobile'],
                selectedTags: [],
                current: 0,
                steps: [{
                    title: 'Personal Details',

                }, {
                    title: 'Skills and bio',

                }, {
                    title: 'Work experience',

                },
                    {
                        title: 'Past projects',

                    }],
                current1: 0,
                steps1: [{
                    title: 'Company details',

                }, {
                    title: 'Skills of interest',

                }],
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
                inputVisible2: false,
                inputValue2: '',
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
                errorlist: [],
                cv: null,
                uploading: false,
                profile: {},
                experienceform: this.$form.createForm(this),
                projectform: this.$form.createForm(this),
                registerform: this.$form.createForm(this),
                developerstep1: this.$form.createForm(this),
                recruiterstep1: this.$form.createForm(this),


            }
        },

        async mounted() {
            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}

            }
            if (this.$store.state.user.pk) {
                this.loading = true
                this.currentUserProfile = (await UsersService.currentuser(this.$store.state.user.pk, auth)).data
                this.loading = false
                this.cv = this.currentUserProfile.file
                if (this.currentUserProfile.skills) {
                    let temptaglist = this.currentUserProfile.skills;

                    let array = temptaglist.replace(/'/g, '').replace(/ /g, '').split(',');

                    this.tags = array
                }

                this.portfoliolist = (await UsersService.portfolio(this.$store.state.user.pk, auth)).data
                this.experienceslist = (await UsersService.experience(this.$store.state.user.pk, auth)).data
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


            }


        },

        methods: {
            validateFirstStep() {
                let next = false
                next = this.$validator.validateAll()

                return next


            },
            register() {
                this.$validator.validateAll().then((values) => {
                    if (values) {
                        this.loading = true


                        AuthService.register({
                            first_name: this.firstname,
                            last_name: this.lastname,
                            email: this.email,
                            password1: this.password1,
                            password2: this.password2
                        })
                            .then(resp => {

                                this.$store.dispatch('setToken', resp.data.token)
                                this.$store.dispatch('setUser', resp.data.user)
                                const auth = {
                                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                                }

                                UsersService.currentuser(this.$store.state.user.pk, auth)
                                    .then(resp => {
                                        this.currentUserProfile = resp.data

                                    })
                                    .catch()
                                this.cv = this.currentUserProfile.file
                                if (this.currentUserProfile.skills) {
                                    let temptaglist = this.currentUserProfile.skills;

                                    let array = temptaglist.replace(/'/g, '').replace(/ /g, '').split(',');

                                    this.tags = array
                                }

                                UsersService.portfolio(this.$store.state.user.pk, auth)
                                    .then(resp => {
                                        this.portfoliolist = resp.data

                                    })
                                    .catch()
                                UsersService.experience(this.$store.state.user.pk, auth)
                                    .then(resp => {
                                        this.experienceslist = resp.data

                                    })
                                    .catch()
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


                                this.loading = false


                            })
                            .catch(error => {
                                this.loading = false

                                this.error = 'check details incorrect'

                            });


                    }
                })
            },
            stepsaves() {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                this.loading = true

                this.currentUserProfile.user = this.$store.state.user.pk
                this.profile = {
                    gender: this.currentUserProfile.gender,
                    linkedin_url: this.currentUserProfile.linkedin_url,
                    github_repo: this.currentUserProfile.github_repo,
                    years: this.currentUserProfile.years,
                    availabilty: this.currentUserProfile.availabilty,
                    country: this.currentUserProfile.country

                }


                UsersService.update(this.$store.state.user.pk, this.currentUserProfile, auth)
                    .then(resp => {
                        this.current++
                        this.loading = false


                    })
                    .catch(error => {
                        console.log(error)
                        this.loading = false


                    });


            },
            stepsaves1() {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                this.loading = true
                if (this.cv !== null) {
                    this.currentUserProfile.file = this.cv.slice(48)
                }
                this.currentUserProfile.user = this.$store.state.user.pk
                this.profile = {
                    gender: this.currentUserProfile.gender,
                    linkedin_url: this.currentUserProfile.linkedin_url,
                    github_repo: this.currentUserProfile.github_repo,
                    years: this.currentUserProfile.years,
                    availabilty: this.currentUserProfile.availabilty,
                    country: this.currentUserProfile.country

                }


                UsersService.update(this.$store.state.user.pk, this.currentUserProfile, auth)
                    .then(resp => {
                        this.current1++
                        this.loading = false


                    })
                    .catch(error => {
                        console.log(error)
                        this.loading = false


                    });


            },


            onComplete() {


                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                this.currentUserProfile.stage = 'complete'


                this.$store.dispatch('setUsertype', this.currentUserProfile.user_type)
                this.$store.dispatch('setUser_id', this.currentUserProfile.user)
                UsersService.update(this.$store.state.user.pk, this.currentUserProfile, auth)
                    .then(resp => {
                        if (this.currentUserProfile.user_type === 'developer') {

                            this.$router.push({
                                name: 'developer'
                            })

                        } else {
                            this.$router.push({
                                name: 'recruiter'
                            })

                        }


                    })
                    .catch(error => {
                        console.log(error)


                    });


            },
            onCompleteRecruiter() {

                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                this.currentUserProfile.stage = 'complete'
                this.$store.dispatch('setUsertype', this.currentUserProfile.user_type)
                this.$store.dispatch('setUser_id', this.currentUserProfile.user)
                UsersService.update(this.$store.state.user.pk, this.currentUserProfile, auth)
                    .then(resp => {
                        if (this.currentUserProfile.user_type === 'developer') {

                            this.$router.push({
                                name: 'developer'
                            })

                        } else {
                            this.$router.push({
                                name: 'recruiter'
                            })

                        }


                    })
                    .catch(error => {
                        console.log(error)


                    });


            },


            handleClose(removedTag) {
                const tags = this.tags.filter(tag => tag !== removedTag)
                this.tags = tags
                let alltags = this.tags.join(", ")
                this.currentUserProfile.skills = alltags

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
                const inputValue = this.inputValue.toLowerCase()
                let tags = this.tags
                if (inputValue && tags.indexOf(inputValue) === -1) {
                    tags = [...tags, inputValue]
                }

                let alltags = tags.join(", ")
                this.currentUserProfile.skills = alltags
                Object.assign(this, {
                    tags,
                    inputVisible: false,
                    inputValue: '',
                })
            },
            handleChange(tag, checked) {
                const {selectedTags} = this
                const nextSelectedTags = checked
                    ? [...selectedTags, tag]
                    : selectedTags.filter(t => t !== tag)

                this.selectedTags = nextSelectedTags
                let alltags = this.selectedTags.join(", ")
                this.currentUserProfile.skills = alltags
            },
            next(current) {
                let self = this

                if (current === 0) {

                    this.$validator.validateAll().then((values) => {
                        if (values) {
                            self.stepsaves()
                        }
                    })


                } else if (current === 1) {
                    if (this.currentUserProfile.user_type === 'developer') {
                        this.errorlist = []
                        if (this.currentUserProfile.about === null) {
                            this.errorlist.push('about')

                        }
                        if (this.cv === null) {
                            this.errorlist.push('cv')

                        }
                        if (this.currentUserProfile.salary === null) {
                            this.errorlist.push('salary')

                        }


                        if (this.errorlist.length === 0) {
                            self.stepsaves()

                        }
                    } else {
                        self.stepsaves()

                    }


                } else if (current === 2) {
                    this.current++
                }


            },
            prev() {
                this.current--
            },
            next1(current) {
                let self = this

                if (current === 0) {

                    this.$validator.validateAll().then((values) => {
                        if (values) {
                            self.stepsaves1()
                        }
                    })


                } else if (current === 1) {
                    self.stepsaves1()


                }


            },
            prev1() {
                this.current1--
            },
            CreateProject() {
                this.createproject = true
            },
            SavenewProject() {

                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                this.loading = true
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
                                    let id = resp.data.id
                                    let title = resp.data.title
                                    let description = resp.data.description
                                    let demo = resp.data.demo_link
                                    let tech_used = resp.data.tech_tags.split(',');
                                    let repo = resp.data.repository_link

                                    let one_portfolio = new Portfolio(
                                        id, title, description, demo, tech_used, repo
                                    );
                                    this.portfolio.push(one_portfolio)
                                    this.loading = false

                                    this.createproject = false
                                    this.projecttitle = ''
                                    this.projectdemo = ''
                                    this.projectrepo = ''
                                    this.projectdescription = ''
                                    this.projecttech = ''
                                    this.projecttags = []


                                    return resp

                                }
                            )
                            .catch()

                    } else {
                        this.loading = false

                    }
                })


            },

            CreateExperience() {
                this.createexperience = true
            },
            SavenewExperience() {


                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                this.loading = true
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
                                    let id = resp.data.id
                                    let title = resp.data.title
                                    let description = resp.data.description
                                    let company = resp.data.company
                                    let location = resp.data.location
                                    let duration = resp.data.duration
                                    let tech_used = resp.data.tech_tags.split(',');

                                    let one_experience = new Experience(
                                        id, title, description, company, location, duration, tech_used
                                    );
                                    this.experiences.push(one_experience)
                                    this.loading = false

                                    this.createexperience = false

                                    this.experiencetitle = ''
                                    this.experiencecompany = ''
                                    this.experienceduration = ''
                                    this.experiencelocation = ''
                                    this.experiencetech = ''
                                    this.experiencedescription = ''
                                    this.experiencetags = []


                                    return resp

                                }
                            )
                            .catch(error => {
                                console.log(error)
                            })
                    } else {
                        this.loading = false

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


            handleClose2(removedTag) {
                const tags = this.projecttags.filter(tag => tag !== removedTag)
                this.projecttags = tags
                let alltags = this.projecttags.join(", ")
                this.projecttech = alltags

            },

            showInput2() {
                this.inputVisible2 = true
                this.$nextTick(function () {
                    this.$refs.input.focus()
                })
            },

            handleInputChange2(e) {
                this.inputValue2 = e.target.value
            },

            handleInputConfirm2() {
                const inputValue = this.inputValue2
                let projecttags = this.projecttags
                if (inputValue && projecttags.indexOf(inputValue) === -1) {
                    projecttags = [...projecttags, inputValue]
                }

                let alltags = projecttags.join(", ")
                this.projecttech = alltags
                Object.assign(this, {
                    projecttags,
                    inputVisible2: false,
                    inputValue2: '',
                })
            },
            async handleUpload(e) {
                this.uploading = true
                const cloudName = 'dwtvwjhn3';
                const unsignedUploadPreset = 'ml_default';

                // console.log(e);
                const file = e.target.files[0];
                const formData = new FormData();
                formData.append('file', file);
                formData.append('upload_preset', unsignedUploadPreset);
                let CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/${cloudName}/raw/upload`

                // Send to cloudianry
                const res = await axios.post(
                    CLOUDINARY_URL,
                    formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        },

                    }
                );

                this.cv = res.data.secure_url
                this.currentUserProfile.file = this.cv.slice(48)


            }


        }


    }
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
    .center {
        margin: auto;
        width: 60%;

        padding: 10px;
    }

    .center1 {
        margin: auto;
        width: 32rem;

        padding: 0;
    }

    #components-form-demo-normal-login .login-form {
        max-width: 300px;
    }

    #components-form-demo-normal-login .login-form-button {
        width: 100%;
    }

    .radiochoice {
        height: 10rem;
        width: 15rem;
        margin: 4px;

    }

    ul {
        list-style-type: none;
    }


    .steps-content {
        margin-top: 1rem;


        min-height: 200px;

        padding: 2%;
    }

    .steps-action {
        margin-top: 24px;
    }

</style>



