<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">

        <RecruiterSider/>

        <a-layout :style="{ backgroundColor:'#ffffff' }">


            <a-layout-content>
                <Pageheader/>


                <div :style="{ padding: '5px', background: '#fff',marginTop:'1rem' }">
                    <a-row style="margin-bottom: 1rem">

                        <a-col :xs="{span: 24, offset: 1 }" :sm="{span: 24, offset: 2 }" :md="{span: 24, offset: 2 }"
                               :lg="{span: 20, offset: 0 }" :xl="{span: 20, offset: 0 }">

                            <h3 style="color: #1976D2;font-weight: bold;margin-left: 1rem">What would you like to
                                do today?</h3>

                        </a-col>
                        <a-col :xs="{span: 24, offset: 1 }" :sm="{span: 24, offset: 2 }" :md="{span: 24, offset: 2 }"
                               :lg="{span: 4, offset: 0 }" :xl="{span:4, offset: 0 }">
                            <a-button @click="tor" type="primary" icon="info-circle">Page tour</a-button>


                        </a-col>

                    </a-row>
                    <a-row
                            style="padding-left: 1rem"


                    >
                        <show-at breakpoint="mediumAndBelow">
                            <a v-on:click="showJobmodal">
                                <a-col class="boxes" :xs="{span: 24, offset: 2 }" :sm="{span: 10, offset: 2 }"
                                       :md="{span: 10, offset: 2 }"
                                       :lg="{span: 10, offset: 1 }" :xl="{span: 6,offset: 0 }">

                                    <a-row class="ant-card actioncards v-step-3">
                                        <a-col span="24">
                                            <div style="text-align: center">
                                                <img class="poolavatar" src="../../../assets/images/edit-tools.svg">
                                            </div>
                                        </a-col>
                                        <a-col span="24" style="text-align: center">
                                            <p>Post a Job</p>
                                            <p style="margin: 0;">Get devs for your vacancy</p>


                                        </a-col>

                                    </a-row>

                                </a-col>
                            </a>
                        </show-at>

                        <hide-at breakpoint="mediumAndBelow">
                            <a v-on:click="showDrawer">
                                <a-col class="boxes" :xs="{span: 24, offset: 2 }" :sm="{span: 10, offset: 2 }"
                                       :md="{span: 10, offset: 2 }"
                                       :lg="{span: 10, offset: 1 }" :xl="{span: 6,offset: 0 }">

                                    <a-row class="ant-card actioncards v-step-0 ">
                                        <a-col span="24">
                                            <div style="text-align: center">
                                                <img class="poolavatar" src="../../../assets/images/edit-tools.svg">
                                            </div>
                                        </a-col>
                                        <a-col span="24" style="text-align: center">
                                            <p>Post a Job</p>
                                            <p style="margin: 0;">Get devs for your vacancy</p>


                                        </a-col>

                                    </a-row>

                                </a-col>
                            </a>
                        </hide-at>


                        <router-link to="managejobs" v-if="jobs.length>0">
                            <a-col class="boxes  " :xs="{span: 24, offset: 2  }" :sm="{span: 10, offset: 2 }"
                                   :md="{span: 10, offset: 2 }"
                                   :lg="{span: 10, offset: 1 }" :xl="{span: 6,offset: 0  }">

                                <a-row class="ant-card actioncards v-step-1">
                                    <a-col span="24">
                                        <div style="text-align: center">
                                            <img class="poolavatar" src="../../../assets/images/cv.svg">
                                        </div>
                                    </a-col>
                                    <a-col span="24" style="text-align: center">
                                        <p>Manage Jobs</p>
                                        <p style="margin: 0;">Manage job applications</p>


                                    </a-col>


                                </a-row>

                            </a-col>
                        </router-link>

                        <router-link to="mycandidates" v-if="mycandidates.length >0">

                            <a-col class="boxes " :xs="{span: 24, offset: 2 }" :sm="{span: 10, offset: 2 }"
                                   :md="{span: 10, offset: 2 }"
                                   :lg="{span: 10, offset: 1 }" :xl="{span: 6,offset: 0  }">
                                <a-row class="ant-card actioncards v-step-2">
                                    <a-col span="24">
                                        <div style="text-align: center">
                                            <img class="poolavatar" src="../../../assets/images/statistics.svg">
                                        </div>
                                    </a-col>
                                    <a-col span="24" style="text-align: center">
                                        <p>Manage Candidates</p>
                                        <p style="margin: 0;">Manage picked from talent</p>


                                    </a-col>


                                </a-row>
                            </a-col>
                        </router-link>

                        <router-link to="talent">
                            <a-col class="boxes " :xs="{span: 24, offset: 2  }" :sm="{span: 10, offset: 2 }"
                                   :md="{span: 10, offset: 2 }"
                                   :lg="{span: 10, offset: 1 }" :xl="{span: 6,offset: 0 }">
                                <a-row class="ant-card actioncards" data-v-step="2">
                                    <a-col span="24">
                                        <div style="text-align: center">
                                            <img class="poolavatar" src="../../../assets/images/star.svg">
                                        </div>
                                    </a-col>
                                    <a-col span="24" style="text-align: center">
                                        <p>Browse the Talent Pool</p>
                                        <p style="margin: 0;">View more devs from pool</p>


                                    </a-col>


                                </a-row>
                            </a-col>
                        </router-link>
                        <v-tour name="demo" :steps="steps"></v-tour>

                    </a-row>

                </div>


                <!----Post Job drawer desktops------->
                <a-drawer
                        title="Create a new job"
                        :width="720"
                        @close="onClose"
                        :visible="visible"
                        :wrapStyle="{overflow: 'auto',paddingBottom: '108px'}"
                >
                    <a-steps :current="current">
                        <a-step v-for="item in job_steps" :key="item.title" :title="item.title"/>
                    </a-steps>
                    <a-form :form="form">
                        <div class="steps-content">
                            <div v-if="current === 0">
                                <a-row :gutter="32">
                                    <a-col :xs="{span: 6, offset: 0 }" :sm="{span: 6, offset: 0 }"
                                           :md="{span: 8, offset: 0 }"
                                           :lg="{span: 8, offset: 0 }" :xl="{span: 8, offset: 0 }"
                                           style="padding-right: 1%">
                                        <a-form-item label="Job Title">


                                            <a-input v-model="job.title">

                                            </a-input>
                                            <span v-for="error in errorlist" v-bind:key="error">
                                                <span v-if="error === 'title'" style="color: red">
                                                    * required field
                                                </span>
                                            </span>


                                        </a-form-item>
                                    </a-col>
                                    <a-col :xs="{span: 6, offset: 0 }" :sm="{span: 6, offset: 0 }"
                                           :md="{span: 8, offset: 0 }"
                                           :lg="{span: 8, offset: 0 }" :xl="{span: 8, offset: 0 }"
                                           style="padding-right: 1%">
                                        <a-form-item label="Job role">
                                            <a-select
                                                    placeholder="Select a option"
                                                    v-model="job.job_role"
                                            >
                                                <a-select-option value="Full Stack Developer">
                                                    Full Stack Developer
                                                </a-select-option>
                                                <a-select-option value="Frontend Developer">
                                                    Frontend Developer
                                                </a-select-option>
                                                <a-select-option value="Backend  Developer">
                                                    Backend Developer
                                                </a-select-option>
                                                <a-select-option value="Android  Developer">
                                                    Android Developer
                                                </a-select-option>
                                                <a-select-option value="Graphic Designer">
                                                    Graphic Designer
                                                </a-select-option>
                                                <a-select-option value="IOS Developer">
                                                    IOS Developer
                                                </a-select-option>
                                                <a-select-option value="Data Scientist">
                                                    Data Scientist
                                                </a-select-option>
                                            </a-select>
                                            <span v-for="error in errorlist" v-bind:key="error">
                                                <span v-if="error === 'role'" style="color: red">
                                                    * required field
                                                </span>
                                            </span>
                                        </a-form-item>
                                    </a-col>
                                    <a-col :xs="{span: 6, offset: 0 }" :sm="{span: 6, offset: 0 }"
                                           :md="{span: 8, offset: 0 }"
                                           :lg="{span: 8, offset: 0 }" :xl="{span: 8, offset: 0 }"
                                           style="padding-right: 1%">
                                        <a-form-item label="Years of Experience">
                                            <a-select
                                                    placeholder="Select a option"
                                                    v-model="job.years_experience"
                                            >

                                                <a-select-option value="0-3">
                                                    0-1
                                                </a-select-option>
                                                <a-select-option value="3-5">
                                                    1-3
                                                </a-select-option>
                                                <a-select-option value="5-above">
                                                    3-above
                                                </a-select-option>

                                            </a-select>
                                            <span v-for="error in errorlist" v-bind:key="error">
                                                <span v-if="error === 'years'" style="color: red">
                                                    * required field
                                                </span>
                                            </span>
                                        </a-form-item>
                                    </a-col>
                                </a-row>
                                <a-row>
                                    <a-col :span="8" style="padding-right: 1%">
                                        <a-form-item label="Contract type">
                                            <a-select
                                                    placeholder="Select a option"
                                                    v-model="job.engagement_type"
                                            >
                                                <a-select-option value="Full-time">
                                                    Full-time
                                                </a-select-option>
                                                <a-select-option value="Part-time">
                                                    Part-time
                                                </a-select-option>
                                                <a-select-option value="Contract">
                                                    Contract
                                                </a-select-option>
                                                <a-select-option value="Remote">
                                                    Remote
                                                </a-select-option>
                                                <a-select-option value="Freelance">
                                                    Freelance
                                                </a-select-option>
                                            </a-select>
                                            <span v-for="error in errorlist" v-bind:key="error">
                                                <span v-if="error === 'engagement'" style="color: red">
                                                    * required field
                                                </span>
                                            </span>
                                        </a-form-item>
                                    </a-col>
                                    <a-col :span="8" style="padding-right: 1%">
                                        <a-form-item label="Location">
                                            <country-select v-model="job.location"
                                                            class="ant-input"
                                            />
                                            <span v-for="error in errorlist" v-bind:key="error">
                                                <span v-if="error === 'location'" style="color: red">
                                                    * required field
                                                </span>
                                            </span>
                                        </a-form-item>
                                    </a-col>
                                    <a-col :span="8" style="padding-right: 1%">
                                        <a-form-item label="City of operation  ">
                                            <a-input placeholder="lagos,accra,nairobi...etc" v-model="job.city">
                                            </a-input>

                                        </a-form-item>
                                    </a-col>
                                </a-row>
                                <a-row>
                                    <a-col :span="12" style="padding-right: 1%">
                                        <a-form-item label="Salary range per month ">
                                            <a-input-group compact>
                                                <a-select default-value="USD" style="width: 5rem"
                                                          v-model="currencytype">

                                                    <a-select-option v-for="currency in currenciesarray"
                                                                     v-bind:key="currency.code">

                                                        {{currency.code}}
                                                    </a-select-option>


                                                </a-select>
                                                <a-input-number :min="300" style=" width: 100px; text-align: center"
                                                                placeholder="Minimum" v-model="min"/>
                                                <a-input
                                                        style=" width: 30px; border-left: 0; pointer-events: none; backgroundColor: #fff"
                                                        placeholder="~"
                                                        disabled
                                                />
                                                <a-input-number :min="400"
                                                                style="width: 100px; text-align: center; border-left: 0"
                                                                placeholder="Maximum" v-model="max"/>
                                            </a-input-group>


                                            <span v-for="error in errorlist" v-bind:key="error">
                                                <span v-if="error === 'min'" style="color: red">
                                                    * required field(min)
                                                </span>
                                                <span v-else-if="error==='max'" style="color: red">
                                                    * required field(max)
                                                </span>
                                            </span>

                                        </a-form-item>
                                    </a-col>
                                    <a-col :span="8" style="padding-right: 1%">
                                        <a-form-item label="Deadline ">
                                            <a-date-picker v-model="job.deadline"
                                                           placeholder="Applications deadline"
                                                           format="YYYY-MM-DD HH:mm:ss"
                                                           :disabledDate="disabledDate"
                                                           :disabledTime="disabledDateTime"
                                                           :showTime="{ defaultValue: moment('00:00:00', 'HH:mm:ss') }"
                                            />
                                            <span v-for="error in errorlist" v-bind:key="error">
                                                <span v-if="error === 'deadline'" style="color: red">
                                                    * required field
                                                </span>
                                            </span>
                                        </a-form-item>
                                    </a-col>


                                </a-row>
                                <a-row>

                                    <a-col :span="8" style="padding-right: 1%">
                                        <a-form-item label="Developers needed ">
                                            <a-input-number :min="1" v-model="job.num_devs_wanted"/>

                                            <span v-for="error in errorlist" v-bind:key="error">
                                                <span v-if="error === 'num_devs_wanted'" style="color: red">
                                                    * required field
                                                </span>
                                            </span>
                                        </a-form-item>
                                    </a-col>


                                </a-row>


                            </div>
                            <div v-if="current === 1">
                                <a-row :gutter="16">
                                    <a-col :span="24">
                                        <a-form-item>
                                            <p style="margin-bottom: 0">Pick skills you are looking for</p>
                                            <div>
                                                <template v-for=" tag in recommendationtags">
                                                    <a-checkable-tag style="border-color: blue;font-size: 12px"
                                                                     :key="tag"
                                                                     :checked="selectedTags.indexOf(tag) > -1"
                                                                     @change="(checked) => handleChange(tag, checked)"
                                                    >
                                                        {{tag}}
                                                    </a-checkable-tag>

                                                </template>
                                                <span v-for="error in errorlist1" v-bind:key="error">
                                                <span v-if="error === 'tech_stack'" style="color: red">
                                                    * please pick atleast 1
                                                </span>
                                            </span>
                                            </div>
                                        </a-form-item>
                                    </a-col>
                                    <a-col :span="24">
                                        <a-form-item
                                                label="Job description "
                                                :label-col="{ span: 24 }"
                                                :wrapper-col="{ span:  24}"
                                        >
                                            <vue-simplemde v-model="job.description" ref="markdownEditor"/>

                                            <span v-for="error in errorlist1" v-bind:key="error">
                                                <span v-if="error === 'description'" style="color: red">
                                                    * required field
                                                </span>
                                            </span>
                                        </a-form-item>
                                    </a-col>
                                </a-row>
                            </div>
                            <div v-if="current === 2">
                                <p>Preview of how job will appear on job board</p>
                                <a-alert
                                        message="Your job will be reviewed by an account manager.They will update and publish it as soon if it matches your expectations."
                                        type="info"/>
                                <div class="jobdetails">
                                    <div style="border-bottom: 1px solid #e8e8e8;margin-bottom: 1%;padding-bottom: 3%;">
                            <span>
                                <span style="font-weight: 700;font-size: large">{{job.title}}</span>

                            </span>

                                    </div>
                                    <div>

                                        <p><strong>Company name:</strong> {{job.company}}
                                            <span style="margin-left: 5%">
                                    Location : {{job.location}}
                                </span>

                                        </p>
                                        <p>Monthly renumeration * : {{renumeration}}</p>

                                        <p>
                                            Skills looking for :
                                            <span style="" v-for="skill in selectedTags" v-bind:key="skill">
                                    <a-tag color="#F0F6FD" style="color:#007BFF;">{{skill}}</a-tag>
                                </span>
                                        </p>
                                        <p>Application Deadline : {{job.deadline}}</p>
                                    </div>
                                    <div>
                                        <p style="font-weight: 700">Job Details</p>
                                        <markdown>{{job.description}}</markdown>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="steps-action">
                            <a-button
                                    v-if="current < steps.length - 1"
                                    type="primary" @click="next(current)"
                            >
                                Next
                            </a-button>
                            <a-button
                                    v-if="current == steps.length - 1"
                                    type="primary"
                                    @click="done"

                            >
                                Done
                            </a-button>
                            <a-button
                                    v-if="current>0"
                                    style="margin-left: 8px"
                                    @click="prev"
                            >
                                Previous
                            </a-button>
                        </div>

                    </a-form>

                </a-drawer>
                <!----Post Job drawer mobile------->
                <a-modal
                        title="Create a new job"
                        v-model="jobmobile"
                        style="top: 20px;"
                        :footer="null"
                >
                    <a-steps :current="current">
                        <a-step v-for="item in job_steps" :key="item.title" :title="item.title"/>
                    </a-steps>
                    <a-form :form="form">
                        <div class="steps-content">
                            <div v-if="current === 0">
                                <a-row :gutter="32">
                                    <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                                           :md="{span: 12, offset: 0 }"
                                           :lg="{span: 8, offset: 0 }" :xl="{span: 8, offset: 0 }"
                                           style="padding-right: 1%">
                                        <a-form-item label="Job Title">


                                            <a-input v-model="job.title">

                                            </a-input>
                                            <span v-for="error in errorlist" v-bind:key="error">
                                                <span v-if="error === 'title'" style="color: red">
                                                    * required field
                                                </span>
                                            </span>


                                        </a-form-item>
                                    </a-col>
                                    <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                                           :md="{span: 12, offset: 0 }"
                                           :lg="{span: 8, offset: 0 }" :xl="{span: 8, offset: 0 }"
                                           style="padding-right: 1%">
                                        <a-form-item label="Job role">
                                            <a-select
                                                    placeholder="Select a option"
                                                    v-model="job.job_role"
                                            >
                                                <a-select-option value="Full Stack Developer">
                                                    Full Stack Developer
                                                </a-select-option>
                                                <a-select-option value="Frontend Developer">
                                                    Frontend Developer
                                                </a-select-option>
                                                <a-select-option value="Backend  Developer">
                                                    Backend Developer
                                                </a-select-option>
                                                <a-select-option value="Android  Developer">
                                                    Android Developer
                                                </a-select-option>
                                                <a-select-option value="Graphic Designer">
                                                    Graphic Designer
                                                </a-select-option>
                                                <a-select-option value="IOS Developer">
                                                    IOS Developer
                                                </a-select-option>
                                                <a-select-option value="Data Scientist">
                                                    Data Scientist
                                                </a-select-option>
                                            </a-select>
                                            <span v-for="error in errorlist" v-bind:key="error">
                                                <span v-if="error === 'role'" style="color: red">
                                                    * required field
                                                </span>
                                            </span>
                                        </a-form-item>
                                    </a-col>
                                    <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                                           :md="{span: 12, offset: 0 }"
                                           :lg="{span: 8, offset: 0 }" :xl="{span: 8, offset: 0 }"
                                           style="padding-right: 1%">
                                        <a-form-item label="Years of Experience">
                                            <a-select
                                                    placeholder="Select a option"
                                                    v-model="job.years_experience"
                                            >

                                                <a-select-option value="0-3">
                                                    0-3
                                                </a-select-option>
                                                <a-select-option value="3-5">
                                                    3-5
                                                </a-select-option>
                                                <a-select-option value="5-above">
                                                    5-above
                                                </a-select-option>

                                            </a-select>
                                            <span v-for="error in errorlist" v-bind:key="error">
                                                <span v-if="error === 'years'" style="color: red">
                                                    * required field
                                                </span>
                                            </span>
                                        </a-form-item>
                                    </a-col>
                                </a-row>
                                <a-row>
                                    <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                                           :md="{span: 12, offset: 0 }"
                                           :lg="{span: 8, offset: 0 }" :xl="{span: 8, offset: 0 }"
                                           style="padding-right: 1%">
                                        <a-form-item label="Contract type">
                                            <a-select
                                                    placeholder="Select a option"
                                                    v-model="job.engagement_type"
                                            >
                                                <a-select-option value="Full-time">
                                                    Full-time
                                                </a-select-option>
                                                <a-select-option value="Part-time">
                                                    Part-time
                                                </a-select-option>
                                                <a-select-option value="Contract">
                                                    Contract
                                                </a-select-option>
                                                <a-select-option value="Remote">
                                                    Remote
                                                </a-select-option>
                                                <a-select-option value="Freelance">
                                                    Freelance
                                                </a-select-option>
                                            </a-select>
                                            <span v-for="error in errorlist" v-bind:key="error">
                                                <span v-if="error === 'engagement'" style="color: red">
                                                    * required field
                                                </span>
                                            </span>
                                        </a-form-item>
                                    </a-col>
                                    <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                                           :md="{span: 12, offset: 0 }"
                                           :lg="{span: 8, offset: 0 }" :xl="{span: 8, offset: 0 }"
                                           style="padding-right: 1%">
                                        <a-form-item label="Salary range per month ">
                                            <a-input-group compact>
                                                <a-select default-value="USD" style="width: 5rem"
                                                          v-model="currencytype">

                                                    <a-select-option v-for="currency in currenciesarray"
                                                                     v-bind:key="currency.code">

                                                        {{currency.code}}
                                                    </a-select-option>


                                                </a-select>
                                                <a-input-number :min="300" style=" width: 100px; text-align: center"
                                                                placeholder="Minimum" v-model="min"/>
                                                <a-input
                                                        style=" width: 30px; border-left: 0; pointer-events: none; backgroundColor: #fff"
                                                        placeholder="~"
                                                        disabled
                                                />
                                                <a-input-number :min="400"
                                                                style="width: 100px; text-align: center; border-left: 0"
                                                                placeholder="Maximum" v-model="max"/>
                                            </a-input-group>


                                            <span v-for="error in errorlist" v-bind:key="error">
                                                <span v-if="error === 'min'" style="color: red">
                                                    * required field(min)
                                                </span>
                                                <span v-else-if="error==='max'" style="color: red">
                                                    * required field(max)
                                                </span>
                                            </span>

                                        </a-form-item>
                                    </a-col>
                                    <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                                           :md="{span: 12, offset: 0 }"
                                           :lg="{span: 8, offset: 0 }" :xl="{span: 8, offset: 0 }"
                                           style="padding-right: 1%">
                                        <a-form-item label="Location">
                                            <country-select v-model="job.location"
                                                            class="ant-input"
                                            />
                                            <span v-for="error in errorlist" v-bind:key="error">
                                                <span v-if="error === 'location'" style="color: red">
                                                    * required field
                                                </span>
                                            </span>
                                        </a-form-item>
                                    </a-col>

                                </a-row>
                                <a-row>
                                    <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                                           :md="{span: 12, offset: 0 }"
                                           :lg="{span: 8, offset: 0 }" :xl="{span: 8, offset: 0 }"
                                           style="padding-right: 1%">
                                        <a-form-item label="Deadline ">
                                            <a-date-picker v-model="job.deadline"
                                                           placeholder="Applications deadline"
                                                           format="YYYY-MM-DD HH:mm:ss"
                                                           :disabledDate="disabledDate"
                                                           :disabledTime="disabledDateTime"
                                                           :showTime="{ defaultValue: moment('00:00:00', 'HH:mm:ss') }"
                                            />
                                            <span v-for="error in errorlist" v-bind:key="error">
                                                <span v-if="error === 'deadline'" style="color: red">
                                                    * required field
                                                </span>
                                            </span>
                                        </a-form-item>
                                    </a-col>
                                    <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                                           :md="{span: 12, offset: 0 }"
                                           :lg="{span: 8, offset: 0 }" :xl="{span: 8, offset: 0 }"
                                           style="padding-right: 1%">
                                        <a-form-item label="Developers needed ">
                                            <a-input-number :min="1" v-model="job.num_devs_wanted"/>

                                            <span v-for="error in errorlist" v-bind:key="error">
                                                <span v-if="error === 'num_devs_wanted'" style="color: red">
                                                    * required field
                                                </span>
                                            </span>
                                        </a-form-item>
                                    </a-col>
                                </a-row>


                            </div>
                            <div v-if="current === 1">
                                <a-row :gutter="16">
                                    <a-col :span="24">
                                        <a-form-item>
                                            <p style="margin-bottom: 0">Pick skills you are looking for</p>
                                            <div>
                                                <template v-for=" tag in recommendationtags">
                                                    <a-checkable-tag style="border-color: blue;font-size: 12px"
                                                                     :key="tag"
                                                                     :checked="selectedTags.indexOf(tag) > -1"
                                                                     @change="(checked) => handleChange(tag, checked)"
                                                    >
                                                        {{tag}}
                                                    </a-checkable-tag>

                                                </template>
                                                <span v-for="error in errorlist1" v-bind:key="error">
                                                <span v-if="error === 'tech_stack'" style="color: red">
                                                    * please pick atleast 1
                                                </span>
                                            </span>
                                            </div>
                                        </a-form-item>
                                    </a-col>
                                    <a-col :span="24">
                                        <a-form-item
                                                label="Job description "
                                                :label-col="{ span: 24 }"
                                                :wrapper-col="{ span:  24}"
                                        >
                                            <vue-simplemde v-model="job.description" ref="markdownEditor"/>
                                            <span v-for="error in errorlist1" v-bind:key="error">
                                                <span v-if="error === 'description'" style="color: red">
                                                    * required field
                                                </span>
                                            </span>
                                        </a-form-item>
                                    </a-col>
                                </a-row>
                            </div>
                            <div v-if="current === 2">
                                <p>Preview of how job will appear on job board</p>
                                <a-alert
                                        message="Your job will be reviewed by an account manager.They will update and publish it as soon if it matches your expectations.
                                        "
                                        type="info"/>
                                <div class="jobdetails">
                                    <div style="border-bottom: 1px solid #e8e8e8;margin-bottom: 1%;padding-bottom: 3%;">
                            <span>
                                <span style="font-weight: 700;font-size: large">{{job.title}}</span>

                            </span>

                                    </div>
                                    <div>

                                        <p><strong>Company name:</strong> {{job.company}}
                                            <span style="margin-left: 5%">
                                    Location : {{job.location}}
                                </span>

                                        </p>
                                        <p>Monthly renumeration * : {{renumeration}}</p>

                                        <p>
                                            Skills looking for :
                                            <span style="" v-for="skill in selectedTags" v-bind:key="skill">
                                    <a-tag color="#F0F6FD" style="color:#007BFF;">{{skill}}</a-tag>
                                </span>
                                        </p>
                                        <p>Application Deadline : {{job.deadline}}</p>
                                    </div>
                                    <div>
                                        <p style="font-weight: 700">Job Details</p>
                                        <markdown>{{job.description}}</markdown>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="steps-action">
                            <a-button
                                    v-if="current < steps.length - 1"
                                    type="primary" @click="next(current)"
                            >
                                Next
                            </a-button>
                            <a-button
                                    v-if="current == steps.length - 1"
                                    type="primary"
                                    @click="done"

                            >
                                Done
                            </a-button>
                            <a-button
                                    v-if="current>0"
                                    style="margin-left: 8px"
                                    @click="prev"
                            >
                                Previous
                            </a-button>
                        </div>

                    </a-form>


                </a-modal>


            </a-layout-content>

        </a-layout>
    </a-layout>
</template>


<script>


    import UsersService from '@/services/UsersService'
    import Marketplace from '@/services/Marketplace'
    import ACol from "ant-design-vue/es/grid/Col";
    import ARow from "ant-design-vue/es/grid/Row";
    import Pageheader from '@/components/layout/Pageheader'
    import RecruiterSider from "../../layout/RecruiterSider";
    import moment from 'moment';
    import 'vue-form-wizard/dist/vue-form-wizard.min.css'
    import {showAt, hideAt} from 'vue-breakpoints'
    import mde from 'simplemde'
    import VueSimplemde from 'vue-simplemde'
    import 'simplemde/dist/simplemde.min.css';
    import markdown from 'vue-markdown'
    import Vue from 'vue'
    import VueTour from 'vue-tour'
    import 'vue-tour/dist/vue-tour.css'

    let currencies = require("@/store/currency")

    Vue.use(VueTour)


    export default {
        name: 'index',
        data() {

            return {
                currentUserProfile: null,
                jobs: null,
                mycandidates: [],
                visible: false,
                job: {
                    title: null,
                    job_role: null,
                    engagement_type: null,
                    location: null,
                    remuneration: null,
                    deadline: null,
                    num_devs_wanted: null,
                    tech_stack: null,
                    description: null,
                    commission: null,
                    years_experience: null,
                    dev_experience: 'Mid-Level'

                },
                inputVisible: false,
                currentUser: {},
                inputValue: '',
                recommendationtags: ['Django', 'Javascript', 'Python', 'Php', 'Postgres', 'Sql',
                    'Html', 'Css', 'bootstrap', 'React', 'Java',
                    'React Native', 'Redux', 'Flask ', 'Go', 'Expressjs', 'Vuejs',
                    'Angular', 'Ios', 'flutter', 'Ionic', 'C#', 'C', 'Swift', 'Nodejs',
                    'Typescript', 'Firebase', 'Xamarin', 'Spark', '.Net', 'Redis', 'Sqlite', 'Rails', 'Meteor', 'AI', 'Cybersecurity',
                    'Blockchain', 'Arduino', 'Spring', 'Bitcoin', 'Kotlin', 'Scala',
                    'Nativescript ',
                    'Android', 'figma', 'photoshop', 'adobexd', 'UI/UX', 'DevOps'],

                selectedTags: [],
                loading: true,
                errorlist: [],
                errorlist1: [],
                current: 0,
                job_steps: [{
                    title: 'Job details',

                }, {
                    title: 'Skills of interest',

                }, {
                    title: 'Job Review',

                }],

                jobmobile: false,
                content: '',
                steps: [],
                min: null,
                max: null,
                currencytype: 'USD',


            }

        },
        components: {
            ARow,
            ACol,
            Pageheader,
            RecruiterSider,
            showAt, hideAt,
            mde, VueSimplemde, markdown


        },
        created() {
            if (this.$route.params.post) {
                this.showDrawer()
            }
        },
        computed: {
            currenciesarray: () => currencies,
            renumeration() {
                let monthly = this.currencytype + this.min + ' - ' + this.max
                return monthly
            },
            commission() {
                let amount = 0
                if (this.job.years_experience === '0-1' || this.job.years_experience === '1-3') {
                    amount = 0.12 * (((this.max + this.min) / 2) * 12)
                } else {
                    amount = 0.15 * (((this.max + this.min) / 2) * 12)
                }
                return amount

            }
        },
        async mounted() {


            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}

            }
            let viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

            if (this.$store.state.user.pk) {

                this.currentUserProfile = (await UsersService.currentuser(this.$store.state.user.pk, auth)).data
                this.jobs = (await Marketplace.myjobssliced(this.$store.state.user.pk, auth)).data

                this.mycandidates = (await Marketplace.mydeveloperssimple(this.$store.state.user.pk, auth)).data
                if (viewport_width >= 1128) {
                    if (this.mycandidates.length > 0 && this.jobs.length > 0) {
                        this.steps.push(
                            {
                                target: '.v-step-0',  // We're using document.querySelector() under the hood
                                content: 'A form enabling you to post a job on the platform'
                            },
                            {
                                target: '.v-step-1',
                                content: 'Access your list of jobs you previously placed'
                            },
                            {
                                target: '.v-step-2',
                                content: 'Manage picked candidates from the talent pool'
                            },
                            {
                                target: '[data-v-step="2"]',
                                content: 'Our talent pool a list of profiles from which you can pick from',

                            }
                        )

                    } else {
                        if (this.jobs.length > 0) {
                            this.steps.push(
                                {
                                    target: '.v-step-0',  // We're using document.querySelector() under the hood
                                    content: 'A form enabling you to post a job on the platform'
                                },
                                {
                                    target: '.v-step-1',
                                    content: 'Access your list of jobs you previously placed'
                                },
                                {
                                    target: '[data-v-step="2"]',
                                    content: 'Our talent pool a list of profiles from which you can pick from',

                                })
                        } else if (this.mycandidates.length > 0) {
                            this.steps.push(
                                {
                                    target: '.v-step-0',  // We're using document.querySelector() under the hood
                                    content: 'A form enabling you to post a job on the platform'
                                },
                                {
                                    target: '.v-step-2',
                                    content: 'Manage picked candidates from the talent pool'
                                },
                                {
                                    target: '[data-v-step="2"]',
                                    content: 'Our talent pool a list of profiles from which you can pick from',

                                })

                        } else {
                            this.steps.push(
                                {
                                    target: '.v-step-0',  // We're using document.querySelector() under the hood
                                    content: 'A form enabling you to post a job on the platform'
                                },
                                {
                                    target: '[data-v-step="2"]',
                                    content: 'Our talent pool a list of profiles from which you can pick from',

                                })
                        }

                    }

                } else {
                    if (this.mycandidates.length > 0 && this.jobs.length > 0) {
                        this.steps.push(
                            {
                                target: '.v-step-3',  // We're using document.querySelector() under the hood
                                content: 'A form enabling you to post a job on the platform'
                            },
                            {
                                target: '.v-step-1',
                                content: 'Access your list of jobs you previously placed'
                            },
                            {
                                target: '.v-step-2',
                                content: 'Manage picked candidates from the talent pool'
                            },
                            {
                                target: '[data-v-step="2"]',
                                content: 'Our talent pool a list of profiles from which you can pick from',

                            }
                        )

                    } else {
                        if (this.jobs.length > 0) {
                            this.steps.push(
                                {
                                    target: '.v-step-3',  // We're using document.querySelector() under the hood
                                    content: 'A form enabling you to post a job on the platform'
                                },
                                {
                                    target: '.v-step-1',
                                    content: 'Access your list of jobs you previously placed'
                                },
                                {
                                    target: '[data-v-step="2"]',
                                    content: 'Our talent pool a list of profiles from which you can pick from',

                                })
                        } else if (this.mycandidates.length > 0) {
                            this.steps.push(
                                {
                                    target: '.v-step-3',  // We're using document.querySelector() under the hood
                                    content: 'A form enabling you to post a job on the platform'
                                },
                                {
                                    target: '.v-step-2',
                                    content: 'Manage picked candidates from the talent pool'
                                },
                                {
                                    target: '[data-v-step="2"]',
                                    content: 'Our talent pool a list of profiles from which you can pick from',

                                })

                        } else {
                            this.steps.push(
                                {
                                    target: '.v-step-3',  // We're using document.querySelector() under the hood
                                    content: 'A form enabling you to post a job on the platform'
                                },
                                {
                                    target: '[data-v-step="2"]',
                                    content: 'Our talent pool a list of profiles from which you can pick from',

                                })
                        }


                    }

                }


                this.loading = false

            }


        },
        methods: {
            moment,
            disabledDate(current) {
                // Can not select days before today and today
                return current && current < moment().endOf('day');
            },

            onCollapse(collapsed) {
                return collapsed;
            },
            onBreakpoint(broken) {
                return broken;
            },
            tor() {
                this.$tours['demo'].start()
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
            async showDrawer() {

                this.job.posted_by = this.currentUserProfile.id
                this.job.company = this.currentUserProfile.company
                this.visible = true

            },
            async showJobmodal() {
                this.job.posted_by = this.currentUserProfile.id
                this.job.company = this.currentUserProfile.company
                this.jobmobile = true

            },
            onClose() {
                this.visible = false
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
                let tags = this.tags
                if (inputValue && tags.indexOf(inputValue) === -1) {
                    tags = [...tags, inputValue]
                }

                let alltags = tags.join(", ")
                this.job.tech_stack = alltags
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
                this.job.tech_stack = alltags
            },
            next(current) {


                if (current === 0) {
                    this.errorlist = []

                    let list1 = {
                        title: this.job.title,
                        role: this.job.job_role,
                        engagement: this.job.engagement_type
                        ,
                        location: this.job.location,
                        min: this.min,
                        max: this.max,
                        deadline: this.job.deadline,
                        num_devs_wanted: this.job.num_devs_wanted,
                        years: this.job.years_experience
                    }
                    for (const [key, value] of Object.entries(list1)) {

                        if (value === null || value === undefined) {

                            this.errorlist.push(key)
                        }
                    }
                    if (this.errorlist.length === 0) {

                        this.current++
                    }


                } else if (current === 1) {
                    this.errorlist1 = []
                    let list1 = {
                        tech_stack: this.job.tech_stack,
                        description: this.job.description
                    }
                    for (const [key, value] of Object.entries(list1)) {

                        if (value === null || value === undefined) {
                            this.errorlist1.push(key)
                        }
                    }
                    if (this.errorlist1.length === 0) {
                        this.current++
                    }


                }


            },
            prev() {
                this.current--
            },
            async done() {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                this.job.commission = this.commission
                this.job.remuneration = this.renumeration
                Marketplace.createjob(this.job, auth)
                    .then(resp => {

                        this.visible = false
                        this.$router.push({
                            name: 'managejobs'
                        })
                        Marketplace.newjobemail(resp.data.id, auth)
                            .then()
                            .catch()


                    })
                    .catch(error => {
                        this.visible = false
                        this.$router.push({
                            name: 'recruiter'
                        })

                    });
            }

        },

    }
</script>

<style scoped>


    .me {
        width: 70px;
        height: 70px;
        color: blue;
    }

    .me:hover {
        fill: red;
    }

    .boxes {


        margin-bottom: 1rem;


    }

    .poolavatar {
        width: 30%;
        margin-top: 0.5rem;
    }

    .talentcard {
        margin-bottom: 1rem;
    }

    .center {
        margin: auto;
        width: 60%;


    }

    .actioncards {
        width: 15rem;
        border-radius: 0;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        padding: 0.89rem;
    }

    .steps-content {
        margin-top: 16px;


    }

    .steps-action {
        margin-top: 24px;
    }

    .jobdetails {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        background-color: white;
        padding: 2%;

    }


</style>
