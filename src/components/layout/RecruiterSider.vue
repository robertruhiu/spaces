<template>

    <a-layout-sider
            breakpoint="lg"
            collapsedWidth="0"
            @collapse="onCollapse"
            @breakpoint="onBreakpoint"
            style="box-shadow: 2px 0 6px rgba(0,21,41,.35);background-color: white"

    >
        <a-affix offsetTop="this.top">
        <hide-at :breakpoints="{small: 425, medium: 768}" breakpoint="mediumAndBelow">
            <router-link to="/">

                <img v-bind:style="logo"
                     style="width: 9rem;height: 2rem;margin-top: 1rem;margin-bottom: 1rem;margin-left: 1rem"
                     v-bind:src="defaultlogo"
                >

            </router-link>
        </hide-at>

            <hide-at breakpoint="mediumAndBelow">
                <a-menu :defaultSelectedKeys="['1']" mode="inline" style="min-height: 85vh">
                    <a-menu-item key="1">
                        <router-link to="/recruiter">
                            <a-icon type="dashboard"/>
                            <span>Dashboard</span>
                        </router-link>
                    </a-menu-item>


                    <a-menu-item key="10">

                        <a v-on:click="showDrawer">
                            <a-icon type="edit"/>
                            <span>Post a job</span>
                        </a>

                    </a-menu-item>


                    <a-menu-item key="2" v-if="myjobs.length >0">
                        <router-link to="/managejobs">
                            <a-icon type="project"/>
                            <span>My jobs
                    </span>
                        </router-link>
                    </a-menu-item>
                    <a-menu-item v-else disabled>

                        <a-icon type="project"/>
                        <span>My jobs</span>

                    </a-menu-item>
                    <a-menu-item key="3" v-if="mycandidates.length >0">
                        <router-link to="/mycandidates">
                            <a-icon type="team"/>
                            <span>My Candidates</span>
                        </router-link>

                    </a-menu-item>
                    <a-menu-item v-else disabled>

                        <a-icon type="team"/>
                        <span>My Candidates</span>

                    </a-menu-item>

                    <a-menu-item key="4">
                        <router-link to="/talent">
                            <a-icon type="star"/>
                            <span>Talent Pool</span>
                        </router-link>

                    </a-menu-item>
                    <a-menu-item key="8">
                        <router-link to="/calendar">
                            <a-icon type="calendar"/>
                            <span>Calendar</span>
                        </router-link>

                    </a-menu-item>

                    <a-menu-item key="6">
                        <router-link to="/myprofile">
                            <a-icon type="user"/>
                            <span>My profile</span>
                        </router-link>

                    </a-menu-item>
                    <a-menu-item key="7">
                        <a @click="logout">
                            <a-icon type="export"/>
                            <span>  Logout</span>
                        </a>

                    </a-menu-item>


                </a-menu>
            </hide-at>

        </a-affix>


        <show-at breakpoint="mediumAndBelow">
            <a-menu :defaultSelectedKeys="['1']" mode="inline" style="min-height: 85vh">
                <a-menu-item key="1">
                    <router-link to="/recruiter">
                        <a-icon type="dashboard"/>
                        <span>Dashboard</span>
                    </router-link>
                </a-menu-item>


                <a-menu-item key="2" v-if="myjobs.length >0">
                    <router-link to="/managejobs">
                        <a-icon type="project"/>
                        <span>My jobs
                    </span>
                    </router-link>
                </a-menu-item>
                <a-menu-item v-else disabled>

                    <a-icon type="project"/>
                    <span>My jobs</span>

                </a-menu-item>
                <a-menu-item key="3" v-if="mycandidates.length >0">
                    <router-link to="/mycandidates">
                        <a-icon type="team"/>
                        <span>My Candidates</span>
                    </router-link>

                </a-menu-item>
                <a-menu-item v-else disabled>

                    <a-icon type="team"/>
                    <span>My Candidates</span>

                </a-menu-item>

                <a-menu-item key="4">
                    <router-link to="/talent">
                        <a-icon type="star"/>
                        <span>Talent Pool</span>
                    </router-link>

                </a-menu-item>
                <a-menu-item key="8">
                    <router-link to="/calendar">
                        <a-icon type="calendar"/>
                        <span>Calendar</span>
                    </router-link>

                </a-menu-item>

                <a-menu-item key="6">
                    <router-link to="/myprofile">
                        <a-icon type="user"/>
                        <span>My profile</span>
                    </router-link>

                </a-menu-item>
                <a-menu-item key="7">
                    <a @click="logout">
                        <a-icon type="export"/>
                        <span>  Logout</span>
                    </a>

                </a-menu-item>


            </a-menu>
        </show-at>

        <!----Post Job modal------->

        <a-drawer
                title="Create a new job"
                :width="720"
                @close="onClose"
                :visible="visible"
                :wrapStyle="{overflow: 'auto',paddingBottom: '108px'}"
        >
            <a-steps :current="current">
                <a-step v-for="item in steps" :key="item.title" :title="item.title"/>
            </a-steps>
            <a-form :form="form">
                <div class="steps-content">
                    <div v-if="current === 0">
                        <a-row :gutter="32">
                            <a-col :span="8" style="padding-right: 1%">
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
                            <a-col :span="8" style="padding-right: 1%">
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
                            <a-col :span="8" style="padding-right: 1%">
                                <a-form-item label="Developer Experience">
                                    <a-select
                                            placeholder="Select a option"
                                            v-model="job.dev_experience"
                                    >
                                        <a-select-option value="Entry">
                                            Entry
                                        </a-select-option>
                                        <a-select-option value="Junior">
                                            Junior
                                        </a-select-option>
                                        <a-select-option value="Mid-Level">
                                            Mid-Level
                                        </a-select-option>
                                        <a-select-option value="Senior">
                                            Senior
                                        </a-select-option>
                                    </a-select>
                                    <span v-for="error in errorlist" v-bind:key="error">
                                                <span v-if="error === 'experience'" style="color: red">
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
                                <a-form-item label="Salary range per month ">
                                    <a-input placeholder="1000-1500$" v-model="job.remuneration">
                                    </a-input>
                                    <span v-for="error in errorlist" v-bind:key="error">
                                                <span v-if="error === 'remuneration'" style="color: red">
                                                    * required field
                                                </span>
                                            </span>
                                </a-form-item>
                            </a-col>
                        </a-row>
                        <a-row>
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
                            <a-col :span="12" style="padding-right: 1%">
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
                                message="Your job will be under reviewed before it appears on the job board.Contact will be made if any issue"
                                type="info" closeText="Close Now"/>
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
                                <p>Monthly renumeration * : {{job.remuneration}}</p>

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
                <a-step v-for="item in steps" :key="item.title" :title="item.title"/>
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
                                <a-form-item label="Developer Experience">
                                    <a-select
                                            placeholder="Select a option"
                                            v-model="job.dev_experience"
                                    >
                                        <a-select-option value="Entry">
                                            Entry
                                        </a-select-option>
                                        <a-select-option value="Junior">
                                            Junior
                                        </a-select-option>
                                        <a-select-option value="Mid-Level">
                                            Mid-Level
                                        </a-select-option>
                                        <a-select-option value="Senior">
                                            Senior
                                        </a-select-option>
                                    </a-select>
                                    <span v-for="error in errorlist" v-bind:key="error">
                                                <span v-if="error === 'experience'" style="color: red">
                                                    * required field
                                                </span>
                                            </span>
                                </a-form-item>
                            </a-col>
                        </a-row>
                        <a-row>
                            <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                                   :md="{span: 12, offset: 0 }"
                                   :lg="{span: 8, offset: 0 }" :xl="{span: 8, offset: 0 }" style="padding-right: 1%">
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
                                   :lg="{span: 8, offset: 0 }" :xl="{span: 8, offset: 0 }" style="padding-right: 1%">
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
                            <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                                   :md="{span: 12, offset: 0 }"
                                   :lg="{span: 8, offset: 0 }" :xl="{span: 8, offset: 0 }" style="padding-right: 1%">
                                <a-form-item label="Salary range per month ">
                                    <a-input placeholder="1000-1500$" v-model="job.remuneration">
                                    </a-input>
                                    <span v-for="error in errorlist" v-bind:key="error">
                                                <span v-if="error === 'remuneration'" style="color: red">
                                                    * required field
                                                </span>
                                            </span>
                                </a-form-item>
                            </a-col>
                        </a-row>
                        <a-row>
                            <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                                   :md="{span: 12, offset: 0 }"
                                   :lg="{span: 8, offset: 0 }" :xl="{span: 8, offset: 0 }" style="padding-right: 1%">
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
                                   :lg="{span: 8, offset: 0 }" :xl="{span: 8, offset: 0 }" style="padding-right: 1%">
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
                                message="Your job will be under reviewed before it appears on the job board.Contact will be made if any issue"
                                type="info" closeText="Close Now"/>
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
                                <p>Monthly renumeration * : {{job.remuneration}}</p>

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
    </a-layout-sider>


</template>
<script>
    import moment from 'moment';
    import Largelogo from '@/assets/logobg.svg'
    import 'vue-form-wizard/dist/vue-form-wizard.min.css'
    import Marketplace from '@/services/Marketplace'
    import AFormItem from "ant-design-vue/es/form/FormItem";
    import ACol from "ant-design-vue/es/grid/Col";
    import UsersService from '@/services/UsersService'
    import {showAt, hideAt} from 'vue-breakpoints'
    import VueSimplemde from 'vue-simplemde'
    import 'simplemde/dist/simplemde.min.css';
    import markdown from 'vue-markdown'


    export default {
        name: 'RecruiterSider',
        data() {

            return {
                top: 0,
                defaultlogo: Largelogo,
                visible: false,
                job: {
                    title: null,
                    job_role: null,
                    dev_experience: null,
                    engagement_type: null,
                    location: null,
                    remuneration: null,
                    deadline: null,
                    num_devs_wanted: null,
                    tech_stack: null,
                    description: null
                },

                inputVisible: false,
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
                errorlist: [],
                errorlist1: [],
                current: 0,
                steps: [{
                    title: 'Job details',

                }, {
                    title: 'Skills of interest',

                }, {
                    title: 'Job Review',

                }],
                myjobs: [],
                mycandidates: [],
                currentUserProfile: null,
                jobmobile: false

            }
        },
        components: {
            ACol,
            AFormItem,
            hideAt, showAt,
            VueSimplemde, markdown


        },
        async mounted() {

            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}

            }
            if (this.$store.state.user.pk) {
                this.myjobs = (await Marketplace.myjobssliced(this.$store.state.user.pk, auth)).data
                this.mycandidates = (await Marketplace.mydeveloperssimple(this.$store.state.user.pk, auth)).data
                this.currentUserProfile = (await UsersService.currentuser(this.$store.state.user.pk, auth)).data


            }


        },
        methods: {
            moment,
            disabledDate(current) {
                // Can not select days before today and today
                return current && current < moment().endOf('day');
            },

            onCollapse(collapsed, type) {
                return type;
            },
            onBreakpoint(broken) {
                return broken;
            },
            async mounted() {


            },

            logout() {
                this.$store.dispatch('setToken', null);
                this.$store.dispatch('setUser', null)
                this.$store.dispatch('setisLoggedIn', false)
                this.$store.dispatch('setUsertype', null)
                this.$store.dispatch('setUser_id', null)
                this.$store.dispatch('setNext', null)
                this.$store.dispatch('setCart', null)
                this.$store.dispatch('setPicked', null)
                this.$store.dispatch('setLanguage', null)
                this.$store.dispatch('setCountry', null)
                this.$store.dispatch('setRecommend', null)
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
                        experience: this.job.dev_experience,
                        engagement: this.job.engagement_type
                        ,
                        location: this.job.location,
                        renumeration: this.job.remuneration,
                        deadline: this.job.deadline,
                        num_devs_wanted: this.job.num_devs_wanted
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
                Marketplace.createjob(this.job, auth)
                    .then(resp => {
                        this.visible = false
                        this.$router.push({
                            name: 'managejobs'
                        })


                    })
                    .catch(error => {
                        this.visible = false
                        this.$router.push({
                            name: 'recruiter'
                        })

                    });
            }
        }
    }
</script>

<style scoped>


</style>
