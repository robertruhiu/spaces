<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
        <RecruiterSider/>


        <a-layout :style="{ backgroundColor:'#F8FAFB' }">

            <a-layout-content>
                <Jobheader/>


                <div :style="{ padding: '6px 20px', background: '#fff', minHeight: '80vh',maxWidth:'72rem' }">
                    <div style="padding-top: 2%;">
                        <a-row style="padding-bottom: 1%">
                            <a-col span="20">
                                <a-alert v-if="updated" message="Job details have been updated" type="success"
                                         closeText="Close Now"/>
                            </a-col>
                            <a-col span="4">
                                <div v-if="dataload" style="text-align: center">
                                    <a-spin/>
                                </div>
                                <div v-else>
                                    <a-popover title="Picked candidates" trigger="click" placement="bottomRight"
                                               v-if="pickedprofiles.length >0">
                                        <template slot="content">
                                            <div>
                                                <div v-for="profile in pickedprofiles" v-bind:key="profile"
                                                     style="border-bottom: 1px solid #e8e8e8;padding-top: 1rem">
                                                    <p>{{profile.name}}

                                                        <span style="float: right"><a
                                                                @click="remove(profile.id,profile.type,profile.application_id)"><a-icon
                                                                type="close-circle" theme="twoTone"/></a></span>
                                                    </p>

                                                </div>
                                                <span v-if="paidbundleexists === false">
                                            <p style="padding-top: 1rem">Total:{{amount}}</p>
                                        </span>
                                                <div style="text-align: center" v-if="waiting">
                                                    <a-spin/>

                                                </div>
                                                <p style="font-size: 12px" v-if="conditions === false">

                                                    <a-checkbox @change="Check" v-model="conditions"></a-checkbox>
                                                    <a @click="TermsModal"> I agree to the terms and conditions</a>
                                                </p>
                                                <p style="font-size: 12px">
                                                    <router-link to="/prices">Bundle prices</router-link>
                                                </p>


                                                <div v-if="paidbundleexists">
                                                    <p style="font-size: 12px">
                                                        existing bundle. bundle limit
                                                        {{paiddevs.length}}/{{bundlelimit}}
                                                    </p>
                                                    <p v-if="exceeded" style="font-size: 12px;color: red">
                                                        {{exceeded}}</p>
                                                    <div style="text-align: center">
                                                        <a-button type="primary" @click="addtopaid">Checkout</a-button>
                                                    </div>


                                                </div>
                                                <div v-else>
                                                    <div style="text-align: center" v-if="conditions">
                                                        <paystack
                                                                :amount="topay"
                                                                :email="email"
                                                                :paystackkey="paystackkey"
                                                                :currency="currency"
                                                                :reference="reference"
                                                                :callback="callback"
                                                                :close="close"
                                                                :embed="false"
                                                        >
                                                            <i class="fas fa-money-bill-alt"></i>
                                                            Make Payment
                                                        </paystack>
                                                    </div>
                                                    <div style="text-align: center" v-else>
                                                        <a-button type="primary" disabled>Checkout</a-button>
                                                    </div>
                                                </div>
                                            </div>
                                        </template>
                                        <a-button type="primary">Picked Candidates</a-button>
                                    </a-popover>
                                </div>


                            </a-col>

                        </a-row>


                        <a-tabs defaultActiveKey="1"
                                style="z-index: 0;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
                            <!------allapplicants tabs  ------>
                            <a-tab-pane key="1" style="">
                                <span slot="tab">
                                    <a-icon type="usergroup-add"/>
                                    Applicants
                                </span>
                                <div style="margin-left:0">
                                    <a-row :gutter="16">

                                        <a-col :span="24"
                                               style="padding-bottom: 1%;padding-right: 2%">
                                            <a-tabs defaultActiveKey="1" tabPosition=left style="z-index: 0;">
                                                <!------allapplicants stage ------>
                                                <a-tab-pane key="1">
                                                    <span slot="tab">
                                                        Active Applicants
                                                        <a-tag color="blue">{{pickedapplicants.length}}</a-tag>
                                                    </span>
                                                    <div style="text-align: center" v-if="waiting">
                                                        <a-spin/>

                                                    </div>

                                                    <a-tabs v-else defaultActiveKey="1" style="z-index: 0;">

                                                        <!-------active  candidates-------->
                                                        <a-tab-pane v-if="active" tab="Active"
                                                                    key="1">

                                                            <a-table :dataSource="pickedapplicants" :scroll="{ y: 340 }"
                                                                     size="middle">

                                                                <!-----name--------->
                                                                <a-table-column
                                                                        dataIndex="name"
                                                                        key="name"
                                                                        width="10%"


                                                                >
                                                                    <span slot="title">Name</span>
                                                                    <template slot-scope="text,record">
                                                        <span>
                                                            {{record.name}} {{record.last_name}}
                                                            <span v-if="record.verified"><a-icon type="check"/></span>
                                                        </span>
                                                                    </template>
                                                                </a-table-column>

                                                                <!-----profile--------->
                                                                <a-table-column
                                                                        dataIndex="profile"
                                                                        key="profile"
                                                                        width="10%"


                                                                >
                                                                    <div style="" slot="title">User profile</div>
                                                                    <template slot-scope="text,record">
                                                        <span style="margin-left: 15%">
                                                            <a @click="navigateTo({name:'candidateprofile',params:{candidateId: record.profile,jobId:job.id,applicationId: record.action}})">profile</a>
                                                        </span>
                                                                    </template>
                                                                </a-table-column>

                                                                <!-----skills--------->
                                                                <a-table-column

                                                                        dataIndex="tags"
                                                                        key="tags"
                                                                        width="20%"

                                                                >
                                                                    <div style="margin-left: 40%" slot="title">Skills
                                                                    </div>
                                                                    <template slot-scope="tags">
                                                                        <div style="text-align: center">
                                                                            <span>
                                                            <a-tag v-for="tag in tags" color="blue"
                                                                   :key="tag">{{tag}}</a-tag>
                                                        </span>
                                                                        </div>
                                                                    </template>
                                                                </a-table-column>

                                                                <!-----stage--------->
                                                                <a-table-column

                                                                        dataIndex="stage"
                                                                        key="stage"
                                                                        width="20%"

                                                                >
                                                                    <div style="margin-left: 25%" slot="title">Stage
                                                                    </div>
                                                                    <template slot-scope="text, record">
                                                        <span style="margin-left: 25%">
                                                            <a-tag v-if="record.stage === 'active'"
                                                                   color="#8BC34A"
                                                                   style="text-align: center;width: 4rem;">{{record.stage}}</a-tag>
                                                    <a-tag v-else-if="record.stage === 'test'" color="#9C27B0"
                                                           style="text-align: center;width: 4rem;">{{record.stage}}</a-tag>
                                                    <a-tag v-else-if="record.stage === 'interview'" color="#FF4081"
                                                           style="text-align: center;width: 4rem;">{{record.stage}}</a-tag>
                                                            <a-tag v-else-if="record.stage === 'offer'"
                                                                   color="#03A9F4"
                                                                   style="text-align: center;width: 4rem;">{{record.stage}}</a-tag>
                                                            <a-tag v-else-if="record.stage === 'pending'"
                                                                   color="#953D66"
                                                                   style="text-align: center;width: 4rem;">{{record.stage}}</a-tag>
                                                        </span>
                                                                    </template>

                                                                </a-table-column>

                                                                <!-----action--------->
                                                                <a-table-column
                                                                        title="action"
                                                                        width="10%"


                                                                >

                                                                    <template slot-scope="text,record">
                                                                        <div v-if="record.stage ==='active'">
                                                                            <a-dropdown>
                                                                                <a-menu slot="overlay">
                                                                                    <a-menu-item
                                                                                            @click="handleMenuClick(record.action,record.profile,1)">
                                                                                        <a-icon
                                                                                                type="codepen"/>
                                                                                        assign project test
                                                                                    </a-menu-item>
                                                                                    <a-menu-item
                                                                                            @click="handleMenuClick(record.action,record.profile,2)">
                                                                                        <a-icon
                                                                                                type="calendar"/>
                                                                                        interview candidate
                                                                                    </a-menu-item>
                                                                                    <a-menu-item
                                                                                            @click="handleMenuClick(record.action,record.profile,3)">
                                                                                        <a-icon
                                                                                                type="close"/>
                                                                                        reject candidate
                                                                                    </a-menu-item>
                                                                                </a-menu>
                                                                                <a-button type="primary"
                                                                                          style="height: 30px">
                                                                                    choices
                                                                                    <a-icon type="down"/>
                                                                                </a-button>
                                                                            </a-dropdown>

                                                                        </div>
                                                                        <div v-else>
                                                                            --

                                                                        </div>


                                                                    </template>


                                                                </a-table-column>


                                                            </a-table>

                                                        </a-tab-pane>

                                                        <!-------new  candidates-------->
                                                        <a-tab-pane v-if="newapplicant.length >0" tab="New Applicants"
                                                                    key="2">

                                                            <a-table :dataSource="newapplicant" :scroll="{ y: 340 }"
                                                                     size="middle">

                                                                <!-----name--------->
                                                                <a-table-column
                                                                        dataIndex="name"
                                                                        key="name"
                                                                        width="10%"


                                                                >
                                                                    <span slot="title">Name</span>
                                                                    <template slot-scope="text,record">
                                                        <span>
                                                            {{record.name}}
                                                        </span>
                                                                    </template>
                                                                </a-table-column>

                                                                <!-----profile--------->
                                                                <a-table-column
                                                                        dataIndex="profile"
                                                                        key="profile"
                                                                        width="10%"


                                                                >
                                                                    <div slot="title">User profile</div>
                                                                    <template slot-scope="text,record">
                                                        <span style="margin-left: 15%">
                                                            <a @click="navigateTo({name:'candidateprofile',params:{candidateId: record.profile,jobId:job.id,applicationId: record.action}})">profile</a>
                                                        </span>
                                                                    </template>
                                                                </a-table-column>

                                                                <!-----skills--------->
                                                                <a-table-column

                                                                        dataIndex="tags"
                                                                        key="tags"
                                                                        width="25%"

                                                                >
                                                                    <div style="margin-left: 33%" slot="title">Skills
                                                                    </div>
                                                                    <template slot-scope="tags">
                                                                        <div style="text-align: center">
                                                                            <span>
                                                            <a-tag v-for="tag in tags" color="blue"
                                                                   :key="tag">{{tag}}</a-tag>
                                                        </span>
                                                                        </div>

                                                                    </template>
                                                                </a-table-column>

                                                                <!-----stage--------->
                                                                <a-table-column

                                                                        dataIndex="stage"
                                                                        key="stage"
                                                                        width="20%"

                                                                >
                                                                    <div style="margin-left: 25%" slot="title">Stage
                                                                    </div>
                                                                    <template slot-scope="text, record">
                                                        <span style="margin-left: 25%">
                                                            <!------------stage (new,active,test,interview,offer,hire)---------------->
                                                            <a-tag color="#EA6A47"
                                                                   style="text-align: center;">{{record.stage}}</a-tag>

                                                        </span>
                                                                    </template>

                                                                </a-table-column>

                                                                <!-----action--------->
                                                                <a-table-column
                                                                        dataIndex="action"
                                                                        key="action"
                                                                        width="20%"


                                                                >
                                                                    <div style="margin-left: 10%" slot="title">
                                                                        Pick/Reject
                                                                    </div>
                                                                    <template slot-scope="text,record">
                                                                        <div v-if="currentUserProfile.user.is_staff">
                                                                            <a-button-group>
                                                                                <a-button
                                                                                        @click="pickrejectAdmin(record.action,record.profile,true,record.name)"
                                                                                        type="primary">pick
                                                                                </a-button>
                                                                                <a-button
                                                                                        @click="pickrejectAdmin(record.action,record.profile,false,record.name)">
                                                                                    reject
                                                                                </a-button>

                                                                            </a-button-group>

                                                                        </div>
                                                                        <div v-else>
                                                                            <div v-if="record.carted">
                                                                                --
                                                                            </div>

                                                                            <a-button-group v-else>
                                                                                <a-button
                                                                                        @click="pickrejectClick(record.action,record.profile,true,record.name)"
                                                                                        type="primary">pick
                                                                                </a-button>
                                                                                <a-button
                                                                                        @click="pickrejectClick(record.action,record.profile,false,record.name)">
                                                                                    reject
                                                                                </a-button>

                                                                            </a-button-group>
                                                                        </div>

                                                                    </template>
                                                                </a-table-column>


                                                            </a-table>

                                                        </a-tab-pane>

                                                        <!-------system recommmended candidates-------->
                                                        <a-tab-pane v-if="recommended" tab="Recommended Candidates"
                                                                    key="3">
                                                            <a-table :dataSource="recommmedcandidates"
                                                                     :scroll="{ y: 340 }"
                                                                     size="middle">

                                                                <!-----name--------->
                                                                <a-table-column
                                                                        dataIndex="name"
                                                                        key="name"
                                                                        width="10%"


                                                                >
                                                                    <span slot="title">Name</span>
                                                                    <template slot-scope="text,record">
                                                        <span>
                                                            {{record.name}}
                                                            <span v-if="record.verified"><a-icon type="check"/></span>
                                                        </span>
                                                                    </template>
                                                                </a-table-column>

                                                                <!-----profile--------->
                                                                <a-table-column
                                                                        dataIndex="profile"
                                                                        key="profile"
                                                                        width="10%"


                                                                >
                                                                    <div slot="title">User profile</div>
                                                                    <template slot-scope="text,record">
                                                        <span style="margin-left: 15%">
                                                            <a @click="navigateTo({name:'recommendedprofile',params:{candidateId: record.profile,jobId:job.id,}})">profile</a>
                                                        </span>
                                                                    </template>
                                                                </a-table-column>

                                                                <!-----skills--------->
                                                                <a-table-column

                                                                        dataIndex="tags"
                                                                        key="tags"
                                                                        width="20%"

                                                                >
                                                                    <div style="text-align: center;" slot="title">Skills
                                                                    </div>
                                                                    <template slot-scope="tags">
                                                                        <div style="text-align: center;">
                                                                            <span>
                                                            <a-tag v-for="tag in tags" color="blue"
                                                                   :key="tag">{{tag}}</a-tag>
                                                        </span>
                                                                        </div>

                                                                    </template>
                                                                </a-table-column>

                                                                <!-----stage--------->
                                                                <a-table-column

                                                                        dataIndex="stage"
                                                                        key="stage"
                                                                        width="20%"

                                                                >
                                                                    <div style="margin-left: 15%" slot="title">Stage
                                                                    </div>
                                                                    <template slot-scope="text, record">
                                                        <span style="margin-left: 5%">

                                                            <a-tag color="#1C4E80"
                                                                   style="">{{record.stage}}</a-tag>

                                                        </span>
                                                                    </template>

                                                                </a-table-column>

                                                                <!-----action--------->
                                                                <a-table-column
                                                                        dataIndex="action"
                                                                        key="action"
                                                                        width="20%"


                                                                >
                                                                    <div style="margin-left: 10%" slot="title">
                                                                        Pick
                                                                    </div>
                                                                    <template slot-scope="text,record">
                                                                        <div v-if="currentUserProfile.user.is_staff">
                                                                            <div style="margin-left: 5%">
                                                                                <a-button :size="small"
                                                                                          @click="pickrecommedationAdmin(job.id,record.profile,2)"
                                                                                          type="primary">pick
                                                                                </a-button>


                                                                            </div>
                                                                        </div>
                                                                        <div v-else>
                                                                            <div style="margin-left: 5%">
                                                                                <a-button :size="small"
                                                                                          @click="pickrecommedationClick(job.id,record.profile,2)"
                                                                                          type="primary">pick
                                                                                </a-button>


                                                                            </div>
                                                                        </div>

                                                                    </template>
                                                                </a-table-column>


                                                            </a-table>


                                                        </a-tab-pane>


                                                    </a-tabs>
                                                </a-tab-pane>

                                                <!------test stage ------>
                                                <a-tab-pane key="2">
                                                    <span slot="tab">
                                                        Coding test
                                                        <a-tag color="blue">{{testingstage.length}}</a-tag>
                                                    </span>

                                                    <a-table :dataSource="testingstage" :scroll="{ y: 340 }"
                                                             size="middle">

                                                        <!-----name--------->
                                                        <a-table-column
                                                                dataIndex="name"
                                                                key="name"
                                                                width="12%"


                                                        >
                                                            <span slot="title">Name</span>
                                                            <template slot-scope="text,record">
                                                        <span>
                                                            {{record.name}} {{record.last_name}}
                                                            <span v-if="record.verified"><a-icon type="check"/></span>
                                                        </span>
                                                            </template>
                                                        </a-table-column>

                                                        <!-----profile--------->
                                                        <a-table-column
                                                                dataIndex="profile"
                                                                key="profile"
                                                                width="10%"


                                                        >
                                                            <div style="" slot="title">User profile</div>
                                                            <template slot-scope="text,record">

                                                        <span style="margin-left: 15%">

                                                            <a @click="navigateTo({name:'candidateprofile',params:{candidateId: record.profile,jobId:job.id,applicationId: record.action}})">profile

                                                            </a>
                                                        </span>
                                                            </template>
                                                        </a-table-column>

                                                        <!-----skills--------->
                                                        <a-table-column

                                                                dataIndex="tags"
                                                                key="tags"
                                                                width="25%"

                                                        >
                                                            <div style="margin-left: 33%" slot="title">Skills</div>
                                                            <template slot-scope="tags">
                                                                <div style="text-align: center">
                                                                    <span>
                                                            <a-tag v-for="tag in tags" color="blue"
                                                                   :key="tag">{{tag}}</a-tag>
                                                        </span>
                                                                </div>

                                                            </template>
                                                        </a-table-column>

                                                        <!-----project asignment--------->
                                                        <a-table-column

                                                                dataIndex="project"
                                                                key="project"
                                                                width="15%"

                                                        >
                                                            <div style="" slot="title">Test assigned
                                                            </div>
                                                            <template slot-scope="text,record">
                                                                <span style="">
                                                                    <a style="margin-left: 15%;" v-if="record.project"
                                                                       @click="navigateTo({name:'pickedprojectdetails',params:{projectId:record.project,candidateId: record.profile,jobId:job.id,
                                                                       applicationId: record.action}})">
                                                                        {{record.projectname}}
                                                                    </a>

                                                                    <a-button :size="small"
                                                                              style="background-color: #9c27b0;color: white"
                                                                              v-else
                                                                              @click="showModal(record.profile,record.action)">
                                                                        <a-icon type="codepen"/>
                                                                        Assign test
                                                                </a-button>
                                                                </span>

                                                            </template>


                                                        </a-table-column>

                                                        <!-----report--------->
                                                        <a-table-column

                                                                dataIndex="profile"
                                                                key="report"
                                                                width="15%"

                                                        >
                                                            <div slot="title">Project status
                                                            </div>
                                                            <template slot-scope="text,record">
                                                        <span v-if="record.test_stage " style="margin-left: 20%">
                                                            <span v-if="record.test_stage === 'complete'">
                                                                <a @click="navigateTo({name:'report',params:{candidateId: record.profile,projectId:record.project}})">
                                                                    report
                                                                </a>
                                                            </span>
                                                            <span v-else>
                                                                {{record.test_stage}}
                                                            </span>

                                                        </span>
                                                                <span v-else style="margin-left: 20%">
                                                            --
                                                        </span>
                                                            </template>

                                                        </a-table-column>

                                                        <!-----action--------->
                                                        <a-table-column
                                                                title="action"
                                                                width="10%"


                                                        >

                                                            <template slot-scope="text,record">

                                                                <a-dropdown>
                                                                    <a-menu slot="overlay">


                                                                        <a-menu-item
                                                                                v-if="record.test_stage === 'complete'"
                                                                                @click="handleTestMenuClick(record.action,record.profile,2)"
                                                                        >
                                                                            <a-icon
                                                                                    type="calendar"/>
                                                                            schedule interview
                                                                        </a-menu-item>
                                                                        <a-menu-item
                                                                                v-else
                                                                                disabled


                                                                        >
                                                                            <a-icon
                                                                                    type="calendar"/>
                                                                            schedule interview
                                                                        </a-menu-item>

                                                                        <a-menu-item
                                                                                @click="handleTestMenuClick(record.action,record.profile,4)">
                                                                            <a-icon
                                                                                    type="close"/>
                                                                            reject candidate
                                                                        </a-menu-item>
                                                                    </a-menu>
                                                                    <a-button type="primary"
                                                                              style="height: 30px">
                                                                        choices
                                                                        <a-icon type="down"/>
                                                                    </a-button>
                                                                </a-dropdown>


                                                            </template>


                                                        </a-table-column>


                                                    </a-table>
                                                </a-tab-pane>

                                                <!------interview stage ------>
                                                <a-tab-pane key="3">
                                                    <span slot="tab">
                                                        Interview
                                                        <a-tag color="blue">{{interviewstage.length}}</a-tag>
                                                    </span>
                                                    <a-alert style="margin-bottom: 1%"
                                                             message="Interview notes enables you to write and keep notes on the candidate"
                                                             type="info" closeText="Close Now"/>
                                                    <a-table :dataSource="interviewstage" :scroll="{ y: 340 }"
                                                             size="middle">


                                                        <!-----name--------->
                                                        <a-table-column
                                                                dataIndex="name"
                                                                key="name"
                                                                width="12%"


                                                        >
                                                            <span slot="title">Name</span>
                                                            <template slot-scope="text,record">
                                                        <span>
                                                            {{record.name}} {{record.last_name}}
                                                            <span v-if="record.verified"><a-icon type="check"/></span>
                                                        </span>
                                                            </template>
                                                        </a-table-column>

                                                        <!-----profile--------->
                                                        <a-table-column
                                                                dataIndex="profile"
                                                                key="profile"
                                                                width="10%"


                                                        >
                                                            <div style="" slot="title">User profile</div>
                                                            <template slot-scope="text,record">
                                                        <span style="margin-left: 15%">
                                                            <a @click="navigateTo({name:'candidateprofile',params:{candidateId: record.profile,jobId:job.id,applicationId: record.action}})">profile</a>
                                                        </span>
                                                            </template>
                                                        </a-table-column>

                                                        <!-----skills--------->
                                                        <a-table-column

                                                                dataIndex="tags"
                                                                key="tags"
                                                                width="25%"

                                                        >
                                                            <div style="margin-left: 33%" slot="title">Skills</div>
                                                            <template slot-scope="tags">
                                                                <div style="text-align: center">
                                                                    <span>
                                                            <a-tag v-for="tag in tags" color="blue"
                                                                   :key="tag">{{tag}}</a-tag>
                                                        </span>
                                                                </div>

                                                            </template>
                                                        </a-table-column>

                                                        <!-----interview schedule--------->
                                                        <a-table-column

                                                                dataIndex="interview"
                                                                key="interview"
                                                                width="15%"

                                                        >
                                                            <div style="" slot="title">Interview
                                                            </div>
                                                            <template slot-scope="text,record">
                                                                <div v-if="record.interviewstatus === 'deleted'"
                                                                     style="margin-left: 7%">
                                                                    <a-button :size="small"
                                                                              style="background-color: #673AB7;color: white"
                                                                              @click="onEventCreate(record.action,record.name)">
                                                                        <a-icon type="calendar"/>
                                                                        create
                                                                    </a-button>
                                                                </div>
                                                                <div v-else-if="record.interviewstatus === 'cancelled'"
                                                                     style="margin-left: 7%">
                                                                    <a-button :size="small"
                                                                              style="background-color: #673AB7;color: white"
                                                                              @click="onEventCreate(record.action,record.name)">
                                                                        <a-icon type="calendar"/>
                                                                        create
                                                                    </a-button>
                                                                </div>
                                                                <div v-else-if="record.interviewstatus === null"
                                                                     style="margin-left: 7%">
                                                                    <a-button :size="small"
                                                                              style="background-color: #673AB7;color: white"
                                                                              @click="onEventCreate(record.action,record.name)">
                                                                        <a-icon type="calendar"/>
                                                                        create
                                                                    </a-button>
                                                                </div>
                                                                <span v-else style="margin-left: 12%;">
                                                                    <a-button type="primary" ghost
                                                                              @click="onEventClick(record.action,record.name,record.interviewstart,record.interviewend,record.color)">
                                                                        view
                                                                    </a-button>


                                                                </span>


                                                            </template>


                                                        </a-table-column>

                                                        <!-----interview status--------->
                                                        <a-table-column

                                                                dataIndex="interviewstatus"
                                                                key="interviewstatus"
                                                                width="15%"

                                                        >
                                                            <div style="" slot="title">Interview status
                                                            </div>
                                                            <template slot-scope="text,record">
                                                                <div style="text-align: center">
                                                                    <span v-if="record.interviewstatus">
                                                                        {{record.interviewstatus}}
                                                                    </span>
                                                                    <span v-else>
                                                                    ---
                                                                </span>
                                                                </div>


                                                            </template>


                                                        </a-table-column>

                                                        <!--                                                        &lt;!&ndash;-&#45;&#45;interview notes-&#45;&#45;&#45;&#45;&#45;&#45;&ndash;&gt;-->
                                                        <!--                                                        <a-table-column-->

                                                        <!--                                                                dataIndex="notes"-->
                                                        <!--                                                                key="notes"-->
                                                        <!--                                                                width="15%"-->

                                                        <!--                                                        >-->
                                                        <!--                                                            <div slot="title">Interview notes-->
                                                        <!--                                                            </div>-->
                                                        <!--                                                            <template slot-scope="text,record">-->
                                                        <!--                                                        <span style="margin-left: 25%">-->
                                                        <!--                                                            <a @click="navigateTo({name:'candidateprofile',params:{candidateId: record.profile,jobId:job.id,applicationId: record.action}})">notes</a>-->
                                                        <!--                                                        </span>-->


                                                        <!--                                                            </template>-->

                                                        <!--                                                        </a-table-column>-->

                                                        <!-----action--------->
                                                        <a-table-column
                                                                title="action"
                                                                width="10%"


                                                        >

                                                            <template slot-scope="text,record">

                                                                <a-dropdown>
                                                                    <a-menu slot="overlay">


                                                                        <a-menu-item
                                                                                @click="handleInterviewClick(record.action,record.profile,2)">
                                                                            <a-icon
                                                                                    type="like"/>
                                                                            make offer
                                                                        </a-menu-item>
                                                                        <a-menu-item
                                                                                @click="handleInterviewClick(record.action,record.profile,3)">
                                                                            <a-icon
                                                                                    type="close"/>
                                                                            reject candidate
                                                                        </a-menu-item>
                                                                    </a-menu>
                                                                    <a-button type="primary"
                                                                              style="height: 30px">
                                                                        choices
                                                                        <a-icon type="down"/>
                                                                    </a-button>
                                                                </a-dropdown>


                                                            </template>


                                                        </a-table-column>


                                                    </a-table>
                                                </a-tab-pane>

                                                <!------offers stage ------>
                                                <a-tab-pane key="4">
                                                    <span slot="tab">
                                                        Offers
                                                        <a-tag color="blue">{{offerstage.length}}</a-tag>
                                                    </span>
                                                    <a-table :dataSource="offerstage" :scroll="{ y: 340 }"
                                                             size="middle">

                                                        <!-----name--------->
                                                        <a-table-column
                                                                dataIndex="name"
                                                                key="name"
                                                                width="12%"


                                                        >
                                                            <span slot="title">Name</span>
                                                            <template slot-scope="text,record">
                                                        <span>
                                                            {{record.name}} {{record.last_name}}
                                                            <span v-if="record.verified"><a-icon type="check"/></span>
                                                        </span>
                                                            </template>
                                                        </a-table-column>

                                                        <!-----profile--------->
                                                        <a-table-column
                                                                dataIndex="profile"
                                                                key="profile"
                                                                width="10%"


                                                        >
                                                            <div style="" slot="title">User profile</div>
                                                            <template slot-scope="text,record">
                                                        <span style="margin-left: 15%">
                                                            <a @click="navigateTo({name:'candidateprofile',params:{candidateId: record.profile,jobId:job.id,applicationId: record.action}})">profile</a>
                                                        </span>
                                                            </template>
                                                        </a-table-column>


                                                        <!-----offer letter--------->
                                                        <a-table-column

                                                                dataIndex="offerletter"
                                                                key="offerletter"
                                                                width="10%"

                                                        >
                                                            <div style="text-align: center" slot="title">Make offer
                                                            </div>
                                                            <template slot-scope="text, record">
                                                                <div style="text-align: center">
                                                                    <a-button v-if="record.offerletter === null "
                                                                              type="primary" size="small"
                                                                              @click="openWidget()">Upload offer letter
                                                                    </a-button>
                                                                    <a v-else :href="record.offerletter"
                                                                       target="_blank">{{record.offerletter}}</a>
                                                                </div>


                                                            </template>

                                                        </a-table-column>

                                                        <!-----offer letter status--------->
                                                        <a-table-column

                                                                dataIndex="offerstatus"
                                                                key="offerstatus"
                                                                width="20%"

                                                        >
                                                            <div style="text-align: center" slot="title">Offer Status
                                                            </div>
                                                            <template slot-scope="text, record">
                                                                <div style="text-align: center">
                                                                    <span v-if="record.offerstatus">
                                                                    {{record.offerstatus}}
                                                                </span>
                                                                    <span v-else>
                                                                    --
                                                                </span>
                                                                </div>


                                                            </template>

                                                        </a-table-column>

                                                        <!-----action--------->
                                                        <a-table-column

                                                                width="20%"


                                                        >
                                                            <div style="margin-left: 10%" slot="title">Hire/reject?
                                                            </div>

                                                            <template slot-scope="text,record">
                                                                <a-button-group>
                                                                    <a-button
                                                                            @click="pickrejectClick(record.action,record.profile,true)"
                                                                            type="primary">Hired
                                                                    </a-button>
                                                                    <a-button
                                                                            @click="pickrejectClick(record.action,record.profile,false)">
                                                                        Rejected
                                                                    </a-button>

                                                                </a-button-group>
                                                            </template>


                                                        </a-table-column>


                                                    </a-table>

                                                </a-tab-pane>


                                            </a-tabs>

                                        </a-col>

                                    </a-row>
                                </div>

                            </a-tab-pane>


                            <!------job details tab  ------>
                            <a-tab-pane key="2" forceRender>
                                <span slot="tab">
                                    <a-icon type="profile"/>
                                    Job Details
                                </span>
                                <div style="padding-left: 4%;padding-right: 4%;padding-bottom: 4%">
                                    <a-form :form="form"
                                            @submit="handleSubmit">
                                        <a-row :gutter="16">
                                            <a-col :span="8">
                                                <a-form-item label="Title">
                                                    <a-input v-model="job.title">

                                                    </a-input>
                                                </a-form-item>
                                            </a-col>
                                            <a-col :span="8">
                                                <a-form-item label="Job role">
                                                    <a-select

                                                            placeholder="Select a option and change input text above"
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
                                                </a-form-item>


                                            </a-col>
                                            <a-col :span="8">
                                                <a-form-item label="Developer Experience">
                                                    <a-select

                                                            placeholder="Select a option and change input text above"
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
                                                </a-form-item>

                                            </a-col>
                                            <a-col :span="8">
                                                <a-form-item label="Contract type">
                                                    <a-select

                                                            placeholder="Select a option and change input text above"
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
                                                </a-form-item>

                                            </a-col>
                                            <a-col :span="8">
                                                <a-form-item>
                                                    <span>Location : {{job.location}}</span>
                                                    <country-select v-model="job.location"
                                                                    class="ant-input"
                                                    />
                                                </a-form-item>

                                            </a-col>
                                            <a-col :span="8">
                                                <a-form-item label="Salary range ">
                                                    <a-input v-model="job.remuneration">

                                                    </a-input>
                                                </a-form-item>

                                            </a-col>
                                            <a-col :span="12">
                                                <a-form-item
                                                        label="Which tech skills are you looking for? "
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
                                            <a-col :span="12">
                                                <a-form-item label="Deadline ">
                                                    Current deadline {{deadline}}
                                                    <a-date-picker @change="onDate"

                                                                   format="YYYY-MM-DD"
                                                                   :disabledDate="disabledDate"

                                                    />

                                                </a-form-item>
                                            </a-col>
                                            <a-col :span="24">
                                                <a-form-item
                                                        label="Job description "
                                                        :label-col="{ span: 24 }"
                                                        :wrapper-col="{ span:  24}"
                                                >
                                                    <vue-simplemde v-model="job.description" ref="markdownEditor"/>


                                                </a-form-item>

                                            </a-col>
                                        </a-row>


                                        <a-form-item>


                                            <a-button
                                                    type="primary"
                                                    html-type="submit"

                                            >
                                                Submit Changes
                                            </a-button>


                                        </a-form-item>
                                    </a-form>


                                </div>


                            </a-tab-pane>


                        </a-tabs>

                    </div>
                    <!---assign project--->
                    <a-modal
                            title="Project assignments "
                            v-model="visible"
                            style="top: 60px;"
                            :footer="null"


                    >
                        <p style="text-align: center;">Would you like to get a project recommendation or pick a
                            project?</p>
                        <a-row :gutter="16">
                            <a-col :span="12">
                                <a @click="navigateTo({name:'projectlist',params:{jobId:job.id,applicationId:applicationid}})">
                                    <div style="border: 1px solid #e8e8e8;padding: 2%;">
                                        <img style="margin-left: 25%;width: 50%;margin-right: 25%"
                                             src="../../../../assets/images/pick.png">
                                        <p style="text-align: center">Pick one by myself</p>

                                    </div>

                                </a>
                            </a-col>
                            <a-col :span="12">
                                <a @click="navigateTo({name:'projectdetails',params:{jobId:job.id,candidateId: candidate,applicationId:applicationid}})">
                                    <div style="border: 1px solid #e8e8e8;padding: 2%;">
                                        <img style="margin-left: 25%;width: 50%;margin-right: 25%;"
                                             src="../../../../assets/images/recommend.png">
                                        <p style="text-align: center">Get recommendation</p>


                                    </div>

                                </a>
                            </a-col>
                        </a-row>
                        <div v-if="recentprojects.length >= 1">
                            <p>My Recent projects</p>
                            <p v-for="project in recentprojects"
                               :key="project">
                                <a v-if="recentprojects"
                                   @click="navigateTo({name:'pickedprojectdetails',params:{projectId:project.id,jobId:job.id,candidateId: candidate,applicationId:applicationid}})">
                                    {{project.name}}
                                </a>
                            </p>


                        </div>

                    </a-modal>
                    <!---create event--->
                    <a-modal

                            v-model="interviewmodal"


                    >
                        <template slot="title">


                        </template>

                        <a-form
                                :form="form"

                        >
                            <a-form-item
                                    label="Interview with"
                                    :label-col="{ span: 5 }"
                                    :wrapper-col="{ span: 10 }"
                            >
                                <a-input v-model="candidatename" disabled/>
                            </a-form-item>


                            <a-form-item label="Start "
                                         :label-col="{ span: 5 }"
                                         :wrapper-col="{ span: 8 }">

                                <a-date-picker
                                        v-model="starttime"

                                        showTime
                                        format="YYYY-MM-DD HH:mm"
                                        placeholder="Select Time"
                                        @change="onChange"

                                />


                            </a-form-item>
                            <a-form-item label="Finish "
                                         :label-col="{ span: 5 }"
                                         :wrapper-col="{ span: 8 }">
                                <a-date-picker
                                        v-model="endtime"
                                        showTime
                                        format="YYYY-MM-DD HH:mm"
                                        placeholder="Select Time"
                                        @change="onChange"

                                />


                            </a-form-item>
                            <a-form-item label="Event color"
                                         :label-col="{ span: 5 }"
                                         :wrapper-col="{ span: 3 }">
                                <a-select
                                        defaultValue="blue"
                                        v-model="eventcolor"
                                >
                                    <a-select-option value="blue">
                                        <a-tag color="#029BE4" class="eventcolors"></a-tag>
                                    </a-select-option>
                                    <a-select-option value="green">
                                        <a-tag color="#3BB679" class="eventcolors"></a-tag>
                                    </a-select-option>
                                    <a-select-option value="purple">
                                        <a-tag color="#a515ae" class="eventcolors"></a-tag>
                                    </a-select-option>
                                    <a-select-option value="tomato">
                                        <a-tag color="tomato" class="eventcolors"></a-tag>
                                    </a-select-option>
                                </a-select>

                            </a-form-item>


                        </a-form>
                        <template slot="footer">

                            <a-button @click="CreateEvent(interviewcandidateapplicant)"
                                      type="primary"
                                      html-type="submit"
                            >
                                Save
                            </a-button>

                        </template>


                    </a-modal>
                    <!---edit event--->
                    <a-modal

                            v-model="showEvent"


                    >
                        <template slot="title">

                            <span><a-button type="danger" @click="deleteEvent(interviewerapplicationid)" ghost
                                            icon="delete"></a-button></span>


                        </template>


                        <a-form
                                :form="form"

                        >
                            <a-form-item
                                    label="Interview with"
                                    :label-col="{ span: 5 }"
                                    :wrapper-col="{ span: 10 }"
                            >
                                <a-input v-model="interviewer" disabled/>
                            </a-form-item>


                            <a-form-item label="Start time "
                                         :label-col="{ span: 5 }"
                                         :wrapper-col="{ span: 8 }">

                                <a-date-picker
                                        v-model="interviewstart"
                                        showTime
                                        format="YYYY-MM-DD HH:mm"
                                        placeholder="Select Time"
                                        @change="onChange"

                                />


                            </a-form-item>
                            <a-form-item label="End time "
                                         :label-col="{ span: 5 }"
                                         :wrapper-col="{ span: 8 }">
                                <a-date-picker
                                        v-model="interviewend"
                                        showTime
                                        format="YYYY-MM-DD HH:mm"
                                        placeholder="Select Time"
                                        @change="onChange"

                                />


                            </a-form-item>
                            <a-form-item label="Event color"
                                         :label-col="{ span: 5 }"
                                         :wrapper-col="{ span: 3 }">
                                <a-select

                                        v-model="eventcolor"

                                >
                                    <a-select-option value="blue">
                                        <a-tag color="#029BE4" class="eventcolors"></a-tag>
                                    </a-select-option>
                                    <a-select-option value="green">
                                        <a-tag color="#3BB679" class="eventcolors"></a-tag>
                                    </a-select-option>
                                    <a-select-option value="purple">
                                        <a-tag color="#a515ae" class="eventcolors"></a-tag>
                                    </a-select-option>
                                    <a-select-option value="tomato">
                                        <a-tag color="tomato" class="eventcolors"></a-tag>
                                    </a-select-option>
                                </a-select>

                            </a-form-item>


                        </a-form>
                        <template slot="footer">
                            <a-button key="submit" type="danger" ghost :loading="loading"
                                      @click="cancelEvent(interviewerapplicationid)">
                                Cancel event
                            </a-button>
                            <a-button
                                    type="primary"
                                    html-type="submit"
                                    @click="saveEvent(interviewerapplicationid,interviewstart,interviewend)"
                            >
                                Save
                            </a-button>

                        </template>


                    </a-modal>
                    <!---pay model--->
                    <!-----terms and conditions modal----->
                    <a-modal
                            title="Terms and Conditions"
                            v-model="terms"

                    >
                        <template slot="footer">

                            <a-button v-if="conditions === false" type="primary" @click="Agree">
                                I Agree
                            </a-button>
                            <a-button v-else type="danger" @click="Agree">
                                I Disagree
                            </a-button>
                        </template>
                        <tc/>
                    </a-modal>


                </div>


            </a-layout-content>


        </a-layout>
    </a-layout>

</template>

<script>

    // table structure
    import AFormItem from "ant-design-vue/es/form/FormItem";
    import VueSimplemde from 'vue-simplemde'
    import 'simplemde/dist/simplemde.min.css';
    import markdown from 'vue-markdown'

    const columns = [
        {
            title: 'Username',
            dataIndex: 'name',
            key: 'name',

        },
        {
            title: 'Profile',
            dataIndex: 'profile',
            key: 'profile',

        },
        {
            title: 'report',
            dataIndex: 'report',
            key: 'report',

        },
        {
            title: 'Project',
            dataIndex: 'profile',
            key: 'project',

        },
        {
            title: 'Interview',
            dataIndex: 'profile',
            key: 'interview',

        },
        {
            title: 'Notes',
            dataIndex: 'profile',
            key: 'notes',

        },

        {
            title: 'Stage',
            dataIndex: 'stage',
            key: 'stage',
            scopedSlots: {customRender: 'stage'}
        },

        {
            title: 'Tags',
            dataIndex: 'tags',
            key: 'tags',
            scopedSlots: {customRender: 'tags'}
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',

        },
        {
            title: 'Test_stage',
            dataIndex: 'test_stage',
            key: 'test_stage',

        },
        {
            title: 'Project',
            dataIndex: 'project',
            key: 'project',

        },
        {
            title: 'Projectname',
            dataIndex: 'projectname',
            key: 'projectname',

        },
        {
            title: 'Interviewstatus',
            dataIndex: 'interviewstatus',
            key: 'interviewstatus',

        },
        {
            title: 'InterviewStart',
            dataIndex: 'interviewstart',
            key: 'interviewstart',

        },
        {
            title: 'InterviewEnd',
            dataIndex: 'interviewend',
            key: 'interviewend',

        },
        {
            title: 'Color',
            dataIndex: 'color',
            key: 'color',

        },
        {
            title: 'Offer Status',
            dataIndex: 'offerstatus',
            key: 'offerstatus',

        },
        {
            title: 'Offer letter',
            dataIndex: 'offerletter',
            key: 'offerletter',

        },

    ];


    //applicants structure on table
    class Applicant {
        constructor(id, name, stage, tags, user_id, selected, pk, test_stage, project, projectname, status, start,
                    end, color, report, offerstatus, offerletter, carted, verified, last_name) {
            this.key = id;
            this.name = name;
            this.last_name = last_name;
            this.stage = stage;
            this.profile = user_id;
            this.action = pk
            this.tags = tags;
            this.selected = selected;
            this.test_stage = test_stage;
            this.project = project
            this.projectname = projectname
            this.interviewstatus = status
            this.interviewstart = start
            this.interviewend = end
            this.color = color
            this.report = report
            this.offerstatus = offerstatus
            this.offerletter = offerletter
            this.carted = carted
            this.verified = verified;


        }
    }


    //recommended candidate structure on table
    class Recommended {
        constructor(id, name, stage, tags, user_id, selected, verified) {
            this.key = id;
            this.name = name;
            this.stage = stage;
            this.profile = user_id;
            this.action = id
            this.tags = tags;
            this.selected = selected;
            this.verified = verified;


        }
    }

    class Cart {
        constructor(id, name, verified, type, application_id) {
            this.id = id;
            this.name = name;
            this.verified = verified;
            this.type = type
            this.application_id = application_id


        }
    }


    import moment from 'moment';
    import paystack from 'vue-paystack';
    import UsersService from '@/services/UsersService'
    import ACol from "ant-design-vue/es/grid/Col";
    import ARow from "ant-design-vue/es/grid/Row";
    import Marketplace from '@/services/Marketplace'
    import Jobheader from '@/components/layout/Jobheader'
    import RecruiterSider from "../../../layout/RecruiterSider";
    import Projectsservice from '@/services/Projects'
    import '../../../../assets/css/vuecal.css'
    import Rave from "@/components/frontend/recruiter/cart/Rave";
    import tc from '@/components/frontend/homepages/tc'
    import Payments from '@/services/Payments';


    export default {
        name: "job",
        data() {
            return {
                currentUserProfile: null,
                test: [],
                job: {},
                alldevs: null,
                alldevsprofile: null,
                columns,
                applicants: [],
                recommmedcandidates: [],
                recommmedcandidatesverified: [],
                applicantprofile: [],
                newapplicant: [],
                pickedapplicants: [],
                interviewstage: [],
                testingstage: [],
                offerstage: [],
                hirestage: [],
                skills: [],
                tags: [],
                selectedTags: [],
                inputVisible: false,
                inputValue: '',
                visible: false,
                active: false,
                newapplications: false,
                recommended: false,
                deadline: null,
                candidate: null,
                applicationid: null,
                projects: [],
                recentprojects: [],
                interviewmodal: false,
                candidatename: null,
                starttime: null,
                endtime: null,
                interviewcandidateapplicant: null,
                showEvent: false,
                interviewer: null,
                interviewerapplicationid: null,
                eventcolor: 'blue',
                waiting: true,
                placements: 'bottomRight',
                dataload: false,
                exceeded: '',
                terms: false,
                conditions: false,
                pickeddevpaid: [],
                paiddevs: [],
                pickeddevs: [],
                paidbundleexists: false,
                //paystck config
                // paystackkey: "pk_test_b152b53265c577aaee13f4e6ed09bca1768fbbb2", //paystack public key
                paystackkey: "pk_live_33025d4840017202a65e05c8ba2d2e907aae7cf9", //paystack public key
                email: "", // Customer email
                // amount: 363000,// in kobo
                amount:0,
                mount:100,
                paystack_amount: 0,
                currency: "USD",
                cart: [],
                cart_items: [],
                pickedprofiles: [],
                updated: false


            }
        },
        components: {
            AFormItem,
            ARow,
            ACol,
            RecruiterSider,
            Jobheader,
            Rave,
            tc,
            VueSimplemde, markdown, paystack


        },
        async mounted() {


            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}

            };
            if (this.$store.state.user.pk) {
                this.waiting = true
                this.currentUserProfile = (await UsersService.currentuser(this.$store.state.user.pk, auth)).data
                this.customer_firstname = this.$store.state.user.first_name
                this.customer_lastname = this.$store.state.user.last_name
                this.email = this.$store.state.user.email
                // all developer profile list api fetch
                this.alldevsprofile = (await UsersService.devs()).data;


                const jobId = this.$store.state.route.params.jobId
                // current job
                this.job = (await Marketplace.specificjob(jobId, auth)).data
                this.deadline = this.job.deadline
                // used as part of system recommendation of candidates
                this.skills = this.job.tech_stack.split(',')
                // allows compatible storage of list to string
                let temptaglist = this.job.tech_stack;
                this.tags = temptaglist.replace(/'/g, '').replace(/ /g, '').split(',')


                // getting applicants for job
                this.applicants = (await Marketplace.specificjobapplicants(jobId, auth)).data


                // create a profile for each applicant comparision and matching between user,profile and applicant model

                for (let j = 0; j < this.applicants.length; j++) { //all applicants for this job
                    let tags = []
                    if (this.applicants[j].candidate.skills) {
                        tags = this.applicants[j].candidate.skills.split(',').slice(0, 2);
                    }

                    let stage = this.applicants[j].stage
                    let id = this.applicants[j].id
                    let pk = this.applicants[j].id
                    let user_id = this.applicants[j].candidate.id
                    let name = this.applicants[j].candidate.user.first_name
                    let last_name = this.applicants[j].candidate.user.last_name
                    let selected = this.applicants[j].selected
                    let test_stage = this.applicants[j].test_stage
                    let project = ''
                    let projectname = ''
                    if (test_stage) {
                        project = this.applicants[j].project.id
                        projectname = this.applicants[j].project.name

                    } else {
                        project = null
                        projectname = null

                    }
                    let verified = false
                    if (this.applicants[j].candidate.verified_skills) {
                        verified = true
                    }

                    let status = this.applicants[j].interviewstatus
                    let start = this.applicants[j].interviewstarttime
                    let end = this.applicants[j].interviewendtime
                    let color = this.applicants[j].eventcolor
                    let report = this.applicants[j].report
                    let offerstatus = this.applicants[j].offerstatus
                    let offerletter = this.applicants[j].offerletter
                    let carted = this.applicants[j].carted
                    let onepickeddev = new Applicant(
                        id, name, stage, tags, user_id, selected, pk, test_stage, project, projectname, status, start,
                        end, color, report, offerstatus, offerletter, carted, verified, last_name
                    );

                    this.applicantprofile.push(onepickeddev)


                }


                // applicants sorting
                for (let i = 0; i < this.applicantprofile.length; i++) {
                    if (this.applicantprofile[i].selected === false && this.applicantprofile[i].stage !== 'rejected') {
                        this.newapplicant.push(this.applicantprofile[i])
                    } else if (this.applicantprofile[i].selected) {
                        this.pickedapplicants.push(this.applicantprofile[i])

                    }
                    // second part of sorting conditional coz the fist condition met
                    if (this.applicantprofile[i].stage === 'interview') {
                        this.interviewstage.push(this.applicantprofile[i])

                    } else if (this.applicantprofile[i].stage === 'test') {
                        this.testingstage.push(this.applicantprofile[i])

                    } else if (this.applicantprofile[i].stage === 'offer') {
                        this.offerstage.push(this.applicantprofile[i])


                    } else if (this.applicantprofile[i].stage === 'hired') {
                        this.hirestage.push(this.applicantprofile[i])

                    }


                }
                this.waiting = false


                // system recommend candidates (all candidates with matching skill tags - current applicants)
                let allrecommedednouniquefilter = []
                for (let x = 0; x < this.alldevsprofile.length; x++) {
                    for (let z = 0; z < this.tags.length; z++) {
                        if (this.alldevsprofile[x].skills) {
                            if (this.alldevsprofile[x].skills) {
                                if (this.alldevsprofile[x].skills.includes(this.tags[z].toLowerCase())) { // direct comparision direct match for now
                                    let user_id = this.alldevsprofile[x].id
                                    allrecommedednouniquefilter.push(user_id)

                                }

                            } else if (this.alldevsprofile[x].verified_skills) {
                                if (this.alldevsprofile[x].verified_skills.includes(this.tags[z].toLowerCase())) { // direct comparision direct match for now
                                    let user_id = this.alldevsprofile[x].id
                                    allrecommedednouniquefilter.push(user_id)

                                }

                            }

                        }

                    }
                }

                // allows unique filter under codeln recommended candidates id
                function onlyUnique(value, index, self) {
                    return self.indexOf(value) === index;
                }

                // finds the difference to eliminate candidates already picked/selected or applied from recommended
                Array.prototype.diff = function (a) {
                    return this.filter(function (i) {
                        return a.indexOf(i) < 0;
                    });
                };


                let allrecommended = allrecommedednouniquefilter.filter(onlyUnique);
                let allapplicants = []
                for (let x = 0; x < this.applicants.length; x++) {
                    allapplicants.push(this.applicants[x].candidate.id)
                }
                let recommededlist = allrecommended.diff(allapplicants);


                // create a profile for each recommended comparision and matching between user,profile
                if (recommededlist.length > 0) {

                    for (let l = 0; l < this.alldevsprofile.length; l++) { // all user profiles
                        for (let k = 0; k < recommededlist.length; k++) {
                            if (this.alldevsprofile[l].id === recommededlist[k] && this.alldevsprofile[l].country === this.job.location) {
                                let tags = []
                                let verified = false
                                if (this.alldevsprofile[l].skills) {
                                    tags = this.alldevsprofile[l].skills.split(',').slice(0, 3);

                                }
                                if (this.alldevsprofile[l].verified_skills) {
                                    verified = true

                                }

                                let stage = 'recommended'
                                let id = this.alldevsprofile[l].id

                                let user_id = this.alldevsprofile[l].id
                                let name = this.alldevsprofile[l].user.first_name
                                let selected = false
                                let onerecommed = new Recommended(
                                    id, name, stage, tags, user_id, selected, verified
                                );

                                this.recommmedcandidates.push(onerecommed)


                            }

                        }
                        this.recommended = true

                    }


                } else {
                    this.recommended = false
                }


                // applicants tabs conditional render remains true as per state if length of applicants respectively is greater than one
                if (this.pickedapplicants.length > 0) {
                    this.active = true
                } else if (this.newapplicant.length > 0) {
                    this.newapplications = true
                } else if (this.recommmedcandidates.length > 0) {
                    this.recommended = true
                }

                // recent projects
                this.recentprojects = (await Projectsservice.recentprojects(this.$store.state.user.pk, auth)).data

                // cart system for job ats begins here
                this.dataload = true
                this.carts = (await Payments.cartlist(this.job.posted_by, auth)).data;


                if (this.carts.length > 0) {
                    this.mycart = this.carts[0]
                    this.conditions = this.mycart.conditions
                    if (this.mycart.devspending) {
                        this.pickeddevs = this.mycart.devspending.split(',');

                    }
                    if (this.mycart.devspaid) {
                        this.paiddevs = this.mycart.devspaid.split(',');
                    }
                    if (this.mycart.amount) {
                        this.paidbundleexists = true
                        if (this.mycart.amount === 100) {
                            this.bundlelimit = 4
                        } else if (this.mycart.amount === 200) {
                            this.bundlelimit = 10
                        } else if (400 <= this.mycart.amount > 200) {
                            this.bundlelimit = 20
                        }
                    }
                    if (this.paiddevs.length > this.bundlelimit) {
                        this.exceeded = 'you have exceeded your current bundle limit.remove some picked candidates'

                    }


                } else {

                    this.mycart = (await Payments.cartcreate({user: this.$store.state.user.pk}, auth)).data;
                }
                this.devs = (await UsersService.devs()).data;

                for (let i = 0; i < this.applicants.length; i++) {
                    if (this.pickeddevs.length > 0) {
                        for (let j = 0; j < this.pickeddevs.length; j++) {

                            if (this.applicants[i].candidate.id === Number(this.pickeddevs[j])) {

                                let id = this.applicants[i].candidate.id
                                let name = this.applicants[i].candidate.user.first_name
                                let type = this.applicants[i].type
                                let verified = false
                                let application_id = this.applicants[i].id
                                if (this.devs[i].verified_skills) {
                                    verified = true
                                }

                                let one_profile = new Cart(
                                    id, name, verified, type, application_id
                                );
                                this.pickedprofiles.push(one_profile)

                            }


                        }

                    }


                }
                if (this.pickeddevs.length <= 4) {
                    this.amount = 100
                } else if (this.pickeddevs.length <= 10) {
                    this.amount = 200
                } else {
                    this.amount = 500
                }
                this.dataload = false


            }


        },
        computed: {
            reference() {
                let text = "";
                let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
                for (let i = 0; i < 10; i++)
                    text += possible.charAt(Math.floor(Math.random() * possible.length));
                return text;
            },
            topay() {
                return this.amount * 100
            }
        },
        methods: {
            moment,
            onEventClick(application_id, name, start, end, color) {
                this.interviewerapplicationid = application_id
                this.interviewer = name
                this.interviewstart = moment(start)
                this.interviewend = moment(end)
                this.eventcolor = color


                this.showEvent = true


            },

            onEventCreate(application_id, candidate_name) {
                this.interviewmodal = true
                this.candidatename = candidate_name;
                this.interviewcandidateapplicant = application_id


            },

            async deleteEvent(interviewerapplicationid) {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                Marketplace.pickreject(interviewerapplicationid, {interviewstatus: 'deleted'}, auth)

                this.showEvent = false

            },
            async saveEvent(interviewerapplicationid, interviewstart, interviewend) {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                Marketplace.pickreject(interviewerapplicationid, {
                    interviewstarttime: interviewstart,
                    interviewendtime: interviewend,
                    eventcolor: this.eventcolor
                }, auth)

                this.showEvent = false

            },
            async cancelEvent(interviewerapplicationid) {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }

                Marketplace.pickreject(interviewerapplicationid, {interviewstatus: 'cancelled'}, auth)

                this.showEvent = false

            },

            disabledDate(current) {
                // Can not select days before today and today
                return current && current < moment().endOf('day');
            },
            onDate(date, dateString) {

                this.deadline = dateString
            },

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

            showModal(dev, application) {
                this.visible = true
                this.candidate = dev
                this.applicationid = application
            },


            //  enables current job to be updated
            handleSubmit: async function () {

                try {
                    const auth = {
                        headers: {Authorization: 'JWT ' + this.$store.state.token}

                    }
                    this.job.deadline = this.deadline
                    this.updated = true
                    Marketplace.updatejob(this.job.id, this.job, auth)
                        .then()


                } catch
                    (error) {
                    this.error = error.response.data.error

                }


            }
            ,

            //logout
            logout() {
                this.$store.dispatch('setToken', null);
                this.$store.dispatch('setUser', null)
                this.$store.dispatch('setisLoggedIn', false)
                this.$store.dispatch('setUsertype', null)
                this.$store.dispatch('setUser_id', null)
                this.$router.push({
                    name: 'home'
                })
            }
            ,

            // handles active stage of applicants movement keys 1,2,3
            handleMenuClick(action, profile, id) {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                this.waiting = true
                let self = this;

                if (id === 1) { // testing
                    for (let i = 0; i < this.pickedapplicants.length; i++) {
                        if (this.pickedapplicants[i].profile === profile) {
                            Marketplace.pickreject(action, {stage: 'test'}, auth)
                                .then(resp => {
                                    this.applicants = []
                                    this.newapplicant = []
                                    this.pickedapplicants = []
                                    this.interviewstage = []
                                    this.testingstage = []
                                    this.offerstage = []
                                    this.hirestage = []
                                    this.recommmedcandidates = []
                                    this.applicantprofile = []

                                    self.Datarefresh()
                                    return resp
                                })
                                .catch()

                        }
                    }

                } else if (id === 2) { // interview
                    for (let i = 0; i < this.pickedapplicants.length; i++) {
                        if (this.pickedapplicants[i].profile === profile) {
                            Marketplace.pickreject(action, {stage: 'interview'}, auth)
                                .then(resp => {
                                    this.applicants = []
                                    this.newapplicant = []
                                    this.pickedapplicants = []
                                    this.interviewstage = []
                                    this.testingstage = []
                                    this.offerstage = []
                                    this.hirestage = []
                                    this.recommmedcandidates = []
                                    this.applicantprofile = []
                                    self.Datarefresh()
                                    return resp
                                })
                                .catch()
                        }
                    }

                } else if (id === 3) { // reject
                    for (let i = 0; i < this.pickedapplicants.length; i++) {
                        if (this.pickedapplicants[i].profile === profile) {

                            Marketplace.pickreject(action, {stage: 'rejected', selected: false}, auth)
                                .then(resp => {
                                    this.applicants = []
                                    this.newapplicant = []
                                    this.pickedapplicants = []
                                    this.interviewstage = []
                                    this.testingstage = []
                                    this.offerstage = []
                                    this.hirestage = []
                                    this.recommmedcandidates = []
                                    this.applicantprofile = []
                                    self.Datarefresh()
                                    return resp
                                })
                                .catch()

                        }
                    }

                }
            }
            ,

            // handles movement on the testing stage keys 1,2,3
            handleTestMenuClick(action, profile, id) {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                this.waiting = true
                let self = this;
                if (id === 2) { // interview
                    for (let i = 0; i < this.testingstage.length; i++) {
                        if (this.testingstage[i].profile === profile) {
                            Marketplace.pickreject(action, {stage: 'interview'}, auth)
                                .then(resp => {
                                    this.applicants = []
                                    this.newapplicant = []
                                    this.pickedapplicants = []
                                    this.interviewstage = []
                                    this.testingstage = []
                                    this.offerstage = []
                                    this.hirestage = []
                                    this.recommmedcandidates = []
                                    this.applicantprofile = []
                                    self.Datarefresh()
                                    return resp
                                })
                                .catch()


                        }
                    }

                } else if (id === 3) { // offer
                    for (let i = 0; i < this.testingstage.length; i++) {
                        if (this.testingstage[i].profile === profile) {
                            Marketplace.pickreject(action, {stage: 'offer'}, auth)
                                .then(resp => {
                                    this.applicants = []
                                    this.newapplicant = []
                                    this.pickedapplicants = []
                                    this.interviewstage = []
                                    this.testingstage = []
                                    this.offerstage = []
                                    this.hirestage = []
                                    this.recommmedcandidates = []
                                    this.applicantprofile = []
                                    self.Datarefresh()
                                    return resp
                                })
                                .catch()

                        }
                    }

                } else if (id === 4) { // reject
                    for (let i = 0; i < this.testingstage.length; i++) {
                        if (this.testingstage[i].profile === profile) {

                            Marketplace.pickreject(action, {stage: 'rejected', selected: false}, auth)
                                .then(resp => {
                                    this.applicants = []
                                    this.newapplicant = []
                                    this.pickedapplicants = []
                                    this.interviewstage = []
                                    this.testingstage = []
                                    this.offerstage = []
                                    this.hirestage = []
                                    this.recommmedcandidates = []
                                    this.applicantprofile = []
                                    self.Datarefresh()
                                    return resp
                                })
                                .catch()

                        }
                    }

                }


            }
            ,

            // handles movement on the interview stage keys 1,2,3
            handleInterviewClick(action, profile, id) {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                this.waiting = true
                let self = this;
                if (id === 1) {
                    for (let i = 0; i < this.interviewstage.length; i++) {
                        if (this.interviewstage[i].profile === profile) {
                            Marketplace.pickreject(action, {stage: 'test'}, auth)
                                .then(resp => {
                                    this.applicants = []
                                    this.newapplicant = []
                                    this.pickedapplicants = []
                                    this.interviewstage = []
                                    this.testingstage = []
                                    this.offerstage = []
                                    this.hirestage = []
                                    this.recommmedcandidates = []
                                    this.applicantprofile = []
                                    self.Datarefresh()
                                    return resp
                                })
                                .catch()


                        }
                    }

                } else if (id === 2) { // offer
                    for (let i = 0; i < this.interviewstage.length; i++) {
                        if (this.interviewstage[i].profile === profile) {

                            Marketplace.pickreject(action, {stage: 'offer'}, auth)
                                .then(resp => {
                                    this.applicants = []
                                    this.newapplicant = []
                                    this.pickedapplicants = []
                                    this.interviewstage = []
                                    this.testingstage = []
                                    this.offerstage = []
                                    this.hirestage = []
                                    this.recommmedcandidates = []
                                    this.applicantprofile = []
                                    self.Datarefresh()
                                    return resp
                                })
                                .catch()

                        }
                    }

                } else if (id === 3) { // reject
                    for (let i = 0; i < this.interviewstage.length; i++) {
                        if (this.interviewstage[i].profile === profile) {
                            Marketplace.pickreject(action, {stage: 'rejected', selected: false}, auth)
                                .then(resp => {
                                    this.applicants = []
                                    this.newapplicant = []
                                    this.pickedapplicants = []
                                    this.interviewstage = []
                                    this.testingstage = []
                                    this.offerstage = []
                                    this.hirestage = []
                                    this.recommmedcandidates = []
                                    this.applicantprofile = []
                                    self.Datarefresh()
                                    return resp
                                })
                                .catch()

                        }
                    }

                }


            }
            ,

            //pick or reject from new applicants
            pickrejectClick(job_id, candidate_id, key, name) {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                this.waiting = true
                let self = this;
                if (key) {
                    for (let i = 0; i < this.newapplicant.length; i++) {

                        if (this.newapplicant[i].profile === candidate_id) {


                            const auth = {
                                headers: {Authorization: 'JWT ' + this.$store.state.token}
                            };
                            this.pickeddevs.push(candidate_id.toString())

                            let developers = this.pickeddevs.join(',')

                            Payments.cartitemadd(this.mycart.id, {devspending: developers}, auth)
                                .then(resp => {
                                        this.pickedprofiles = []
                                        self.refresh()


                                    }
                                )
                                .catch(error => {
                                    this.addcart = false
                                    this.picked = false
                                    return error

                                });
                            Marketplace.pickreject(job_id, {carted: true}, auth)
                                .then(resp => {
                                        this.applicants = []
                                        this.newapplicant = []
                                        this.pickedapplicants = []
                                        this.interviewstage = []
                                        this.testingstage = []
                                        this.offerstage = []
                                        this.hirestage = []
                                        this.recommmedcandidates = []
                                        this.applicantprofile = []
                                        this.waiting = false
                                        self.Datarefresh()
                                        return resp
                                    }
                                )
                                .catch()


                        }
                    }
                } else {
                    for (let i = 0; i < this.newapplicant.length; i++) {
                        if (this.newapplicant[i].profile === candidate_id) {


                            if (this.newapplicant.length === 0) {
                                this.newapplications = false
                            }
                            Marketplace.pickreject(job_id, {
                                stage: 'rejected',
                                selected: false,

                            }, auth)
                                .then(resp => {
                                    this.applicants = []
                                    this.newapplicant = []
                                    this.pickedapplicants = []
                                    this.interviewstage = []
                                    this.testingstage = []
                                    this.offerstage = []
                                    this.hirestage = []
                                    this.recommmedcandidates = []
                                    this.applicantprofile = []
                                    self.Datarefresh()
                                    return resp
                                })
                                .catch()


                        }
                    }
                }


            }
            ,

            //pick or reject from new applicants(admin actions)
            pickrejectAdmin(job_id, candidate_id, key, name) {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                this.waiting = true
                let self = this;
                if (key) {
                    for (let i = 0; i < this.newapplicant.length; i++) {

                        if (this.newapplicant[i].profile === candidate_id) {


                            const auth = {
                                headers: {Authorization: 'JWT ' + this.$store.state.token}
                            };
                            this.pickeddevs.push(candidate_id.toString())


                            Marketplace.pickreject(job_id, {carted: true, selected: true, stage: 'active'}, auth)
                                .then(resp => {
                                        this.applicants = []
                                        this.newapplicant = []
                                        this.pickedapplicants = []
                                        this.interviewstage = []
                                        this.testingstage = []
                                        this.offerstage = []
                                        this.hirestage = []
                                        this.recommmedcandidates = []
                                        this.applicantprofile = []
                                        this.waiting = false
                                        self.Datarefresh()
                                        return resp
                                    }
                                )
                                .catch()


                        }
                    }
                } else {
                    for (let i = 0; i < this.newapplicant.length; i++) {
                        if (this.newapplicant[i].profile === candidate_id) {


                            if (this.newapplicant.length === 0) {
                                this.newapplications = false
                            }
                            Marketplace.pickreject(job_id, {
                                stage: 'rejected',
                                selected: false,

                            }, auth)
                                .then(resp => {
                                    this.applicants = []
                                    this.newapplicant = []
                                    this.pickedapplicants = []
                                    this.interviewstage = []
                                    this.testingstage = []
                                    this.offerstage = []
                                    this.hirestage = []
                                    this.recommmedcandidates = []
                                    this.applicantprofile = []
                                    self.Datarefresh()
                                    return resp
                                })
                                .catch()


                        }
                    }
                }


            }
            ,

            // pick from recommedation list
            pickrecommedationClick(job_id, candidate_id, key) {

                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                this.waiting = true

                if (key === 1) {
                    for (let i = 0; i < this.recommmedcandidatesverified.length; i++) {


                        if (this.recommmedcandidatesverified[i].profile === candidate_id) {

                            if (this.recommmedcandidates.length === 0 && this.recommmedcandidatesverified.length === 0) {
                                this.recommended = false
                            }
                            let self = this;


                            Marketplace.pickrecommended(
                                {
                                    job: job_id,
                                    candidate: candidate_id,
                                    stage: 'new',
                                    selected: false,
                                    recruiter: this.$store.state.user.pk,


                                },
                                auth
                            )
                                .then(resp => {
                                        this.applicants = []
                                        this.newapplicant = []
                                        this.pickedapplicants = []
                                        this.interviewstage = []
                                        this.testingstage = []
                                        this.offerstage = []
                                        this.hirestage = []
                                        this.recommmedcandidates = []
                                        this.recommmedcandidatesverified = []
                                        this.applicantprofile = []
                                        this.waiting = false
                                        self.Datarefresh()
                                        return resp


                                    }
                                )
                                .catch()


                        }
                    }

                } else if (key === 2) {
                    this.dataload = true
                    for (let i = 0; i < this.recommmedcandidates.length; i++) {
                        if (this.recommmedcandidates[i].profile === candidate_id) {

                            if (this.recommmedcandidates.length === 0 && this.recommmedcandidatesverified.length === 0) {
                                this.recommended = false
                            }
                            let self = this;


                            const auth = {
                                headers: {Authorization: 'JWT ' + this.$store.state.token}
                            };
                            this.pickeddevs.push(candidate_id.toString())

                            let developers = this.pickeddevs.join(',')

                            Payments.cartitemadd(this.mycart.id, {devspending: developers}, auth)
                                .then(resp => {
                                    this.pickedprofiles = []
                                    this.dataload = false
                                    self.refresh()


                                })
                                .catch(error => {
                                    this.addcart = false

                                    return error

                                });
                            Marketplace.pickrecommended(
                                {
                                    job: job_id,
                                    candidate: candidate_id,
                                    stage: 'new',
                                    selected: false,
                                    recruiter: this.$store.state.user.pk,
                                    carted: true,
                                    type: 'recommend'

                                },
                                auth
                            )
                                .then(resp => {
                                        this.applicants = []
                                        this.newapplicant = []
                                        this.pickedapplicants = []
                                        this.interviewstage = []
                                        this.testingstage = []
                                        this.offerstage = []
                                        this.hirestage = []
                                        this.recommmedcandidates = []
                                        this.recommmedcandidatesverified = []
                                        this.applicantprofile = []

                                        this.waiting = false
                                        self.Datarefresh()
                                        return resp


                                    }
                                )
                                .catch()


                        }
                    }

                }


            }
            ,

            // pick from recommedation list(admin actions)
            pickrecommedationAdmin(job_id, candidate_id, key) {

                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                this.waiting = true

                if (key === 1) {
                    for (let i = 0; i < this.recommmedcandidatesverified.length; i++) {


                        if (this.recommmedcandidatesverified[i].profile === candidate_id) {

                            if (this.recommmedcandidates.length === 0 && this.recommmedcandidatesverified.length === 0) {
                                this.recommended = false
                            }
                            let self = this;


                            Marketplace.pickrecommended(
                                {
                                    job: job_id,
                                    candidate: candidate_id,
                                    stage: 'pending',
                                    selected: false,
                                    recruiter: this.$store.state.user.pk,


                                },
                                auth
                            )
                                .then(resp => {
                                        this.applicants = []
                                        this.newapplicant = []
                                        this.pickedapplicants = []
                                        this.interviewstage = []
                                        this.testingstage = []
                                        this.offerstage = []
                                        this.hirestage = []
                                        this.recommmedcandidates = []
                                        this.recommmedcandidatesverified = []
                                        this.applicantprofile = []
                                        this.waiting = false
                                        self.Datarefresh()
                                        return resp


                                    }
                                )
                                .catch()


                        }
                    }

                } else if (key === 2) {

                    for (let i = 0; i < this.recommmedcandidates.length; i++) {
                        if (this.recommmedcandidates[i].profile === candidate_id) {

                            if (this.recommmedcandidates.length === 0 && this.recommmedcandidatesverified.length === 0) {
                                this.recommended = false
                            }
                            let self = this;


                            const auth = {
                                headers: {Authorization: 'JWT ' + this.$store.state.token}
                            };

                            Marketplace.pickrecommended(
                                {
                                    job: job_id,
                                    candidate: candidate_id,
                                    stage: 'pending',
                                    selected: true,
                                    recruiter: this.$store.state.user.pk,
                                    carted: true,
                                    type: 'recommend'

                                },
                                auth
                            )
                                .then(resp => {
                                        Marketplace.newpick(resp.data.id, auth)
                                            .then()
                                            .catch()
                                        this.applicants = []
                                        this.newapplicant = []
                                        this.pickedapplicants = []
                                        this.interviewstage = []
                                        this.testingstage = []
                                        this.offerstage = []
                                        this.hirestage = []
                                        this.recommmedcandidates = []
                                        this.recommmedcandidatesverified = []
                                        this.applicantprofile = []

                                        this.waiting = false
                                        self.Datarefresh()

                                        return resp


                                    }
                                )
                                .catch()


                        }
                    }

                }


            }
            ,

            navigateTo(route) {
                this.$router.push(route)
            }
            ,

            handleClose(removedTag) {
                const tags = this.tags.filter(tag => tag !== removedTag)
                this.tags = tags
                let alltags = this.tags.join(", ")
                this.job.tech_stack = alltags

            }
            ,

            showInput() {
                this.inputVisible = true
                this.$nextTick(function () {
                    this.$refs.input.focus()
                })
            }
            ,

            handleInputChange(e) {
                this.inputValue = e.target.value
            }
            ,

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
            }
            ,


            bundleamount(key) {
                if (key === 1) {
                    this.amount = 200
                } else if (key === 2) {
                    this.amount = 300
                } else {
                    this.amount = 500
                }

            }
            ,

            async CreateEvent(application_id) {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                let self = this;

                Marketplace.pickreject(application_id, {
                    interviewstarttime: this.starttime,
                    interviewendtime: this.endtime,
                    interviewstatus: 'invite sent',
                    eventcolor: this.eventcolor,
                }, auth)
                    .then(resp => {
                            this.applicants = []
                            this.newapplicant = []
                            this.pickedapplicants = []
                            this.interviewstage = []
                            this.testingstage = []
                            this.offerstage = []
                            this.hirestage = []
                            this.recommmedcandidates = []
                            this.applicantprofile = []
                            self.Datarefresh()
                            return resp

                        }
                    )
                    .catch()


                this.interviewmodal = false
            }
            ,
            // upload offer letter
            async Datarefresh() {
                this.waiting = true

                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                };

                if (this.$store.state.user.pk) {


                    const jobId = this.$store.state.route.params.jobId


                    // getting applicants for job
                    this.applicants = (await Marketplace.specificjobapplicants(jobId, auth)).data


                    // create a profile for each applicant comparision and matching between user,profile and applicant model

                    for (let j = 0; j < this.applicants.length; j++) { //all applicants for this job

                        let tags = []
                        if (this.applicants[j].candidate.skills) {
                            tags = this.applicants[j].candidate.skills.split(',').slice(0, 2);
                        }

                        let stage = this.applicants[j].stage
                        let id = this.applicants[j].id
                        let pk = this.applicants[j].id
                        let user_id = this.applicants[j].candidate.id
                        let name = this.applicants[j].candidate.user.first_name
                        let selected = this.applicants[j].selected
                        let test_stage = this.applicants[j].test_stage
                        let project = ''
                        let projectname = ''
                        if (test_stage) {
                            project = this.applicants[j].project.id
                            projectname = this.applicants[j].project.name

                        } else {
                            project = null
                            projectname = null

                        }

                        let status = this.applicants[j].interviewstatus
                        let start = this.applicants[j].interviewstarttime
                        let end = this.applicants[j].interviewendtime
                        let color = this.applicants[j].eventcolor
                        let report = this.applicants[j].report
                        let offerstatus = this.applicants[j].offerstatus
                        let offerletter = this.applicants[j].offerletter
                        let carted = this.applicants[j].carted
                        let onepickeddev = new Applicant(
                            id, name, stage, tags, user_id, selected, pk, test_stage, project, projectname, status, start,
                            end, color, report, offerstatus, offerletter, carted
                        );

                        this.applicantprofile.push(onepickeddev)


                    }


                    // applicants sorting
                    for (let i = 0; i < this.applicantprofile.length; i++) {
                        if (this.applicantprofile[i].selected === false && this.applicantprofile[i].stage !== 'rejected') {
                            this.newapplicant.push(this.applicantprofile[i])
                        } else if (this.applicantprofile[i].selected) {
                            this.pickedapplicants.push(this.applicantprofile[i])

                        }
                        // second part of sorting conditional coz the fist condition met
                        if (this.applicantprofile[i].stage === 'interview') {
                            this.interviewstage.push(this.applicantprofile[i])

                        } else if (this.applicantprofile[i].stage === 'test') {
                            this.testingstage.push(this.applicantprofile[i])

                        } else if (this.applicantprofile[i].stage === 'offer') {
                            this.offerstage.push(this.applicantprofile[i])


                        } else if (this.applicantprofile[i].stage === 'hired') {
                            this.hirestage.push(this.applicantprofile[i])

                        }


                    }
                    // system recommend candidates (all candidates with matching skill tags - current applicants)
                    let allrecommedednouniquefilter = []
                    for (let x = 0; x < this.alldevsprofile.length; x++) {
                        for (let z = 0; z < this.tags.length; z++) {
                            if (this.alldevsprofile[x].skills) {
                                if (this.alldevsprofile[x].skills) {
                                    if (this.alldevsprofile[x].skills.includes(this.tags[z].toLowerCase())) { // direct comparision direct match for now
                                        let user_id = this.alldevsprofile[x].id
                                        allrecommedednouniquefilter.push(user_id)

                                    }

                                } else if (this.alldevsprofile[x].verified_skills) {
                                    if (this.alldevsprofile[x].verified_skills.includes(this.tags[z].toLowerCase())) { // direct comparision direct match for now
                                        let user_id = this.alldevsprofile[x].id
                                        allrecommedednouniquefilter.push(user_id)

                                    }

                                }

                            }

                        }
                    }

                    // allows unique filter under codeln recommended candidates id
                    function onlyUnique(value, index, self) {
                        return self.indexOf(value) === index;
                    }

                    // finds the difference to eliminate candidates already picked/selected or applied from recommended
                    Array.prototype.diff = function (a) {
                        return this.filter(function (i) {
                            return a.indexOf(i) < 0;
                        });
                    };


                    let allrecommended = allrecommedednouniquefilter.filter(onlyUnique);
                    let allapplicants = []
                    for (let x = 0; x < this.applicants.length; x++) {
                        allapplicants.push(this.applicants[x].candidate.id)
                    }
                    let recommededlist = allrecommended.diff(allapplicants);


                    // create a profile for each recommended comparision and matching between user,profile
                    if (recommededlist.length > 0) {

                        for (let l = 0; l < this.alldevsprofile.length; l++) { // all user profiles
                            for (let k = 0; k < recommededlist.length; k++) {
                                if (this.alldevsprofile[l].id === recommededlist[k]) {
                                    let tags = []
                                    if (this.alldevsprofile[l].skills) {
                                        tags = this.alldevsprofile[l].skills.split(',').slice(0, 3);

                                    }

                                    let stage = 'recommended'
                                    let id = this.alldevsprofile[l].id

                                    let user_id = this.alldevsprofile[l].id
                                    let name = this.alldevsprofile[l].user.first_name
                                    let selected = false
                                    let onerecommed = new Recommended(
                                        id, name, stage, tags, user_id, selected,
                                    );

                                    this.recommmedcandidates.push(onerecommed)


                                }

                            }
                            this.recommended = true

                        }


                    } else {
                        this.recommended = false
                    }


                    // applicants tabs conditional render remains true as per state if length of applicants respectively is greater than one
                    if (this.pickedapplicants.length > 0) {
                        this.active = true
                    } else if (this.newapplicant.length > 0) {
                        this.newapplications = true
                    } else if (this.recommmedcandidates.length > 0) {
                        this.recommended = true
                    }


                    this.waiting = false


                }
                this.waiting = false

            }
            ,
            async refresh() {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}
                };
                this.waiting = true
                // cart system for job ats begins here
                // getting applicants for job
                this.applicants = (await Marketplace.specificjobapplicants(this.$store.state.route.params.jobId, auth)).data
                this.dataload = true
                this.carts = (await Payments.cartlist(this.$store.state.user.pk, auth)).data;


                if (this.carts.length > 0) {
                    this.mycart = this.carts[0]
                    this.conditions = this.mycart.conditions
                    if (this.mycart.devspending) {
                        this.pickeddevs = this.mycart.devspending.split(',');

                    }
                    if (this.mycart.devspaid) {
                        this.paiddevs = this.mycart.devspaid.split(',');
                    }
                    if (this.mycart.amount) {
                        this.paidbundleexists = true
                        if (this.mycart.amount === 100) {
                            this.bundlelimit = 4
                        } else if (this.mycart.amount === 200) {
                            this.bundlelimit = 10
                        } else if (400 <= this.mycart.amount > 200) {
                            this.bundlelimit = 20
                        }
                    }


                } else {

                    this.mycart = (await Payments.cartcreate({user: this.$store.state.user.pk}, auth)).data;
                }


                if (this.pickeddevs.length <= 4) {
                    this.amount = 100
                } else if (this.pickeddevs.length <= 10) {
                    this.amount = 200
                } else {
                    this.amount = 500
                }
                this.dataload = false


                for (let i = 0; i < this.applicants.length; i++) {
                    if (this.pickeddevs.length > 0) {
                        for (let j = 0; j < this.pickeddevs.length; j++) {

                            if (this.applicants[i].candidate.id === Number(this.pickeddevs[j])) {

                                let id = this.applicants[i].candidate.id
                                let name = this.applicants[i].candidate.user.first_name
                                let type = this.applicants[i].type
                                let verified = false
                                let application_id = this.applicants[i].id
                                if (this.devs[i].verified_skills) {
                                    verified = true
                                }

                                let one_profile = new Cart(
                                    id, name, verified, type, application_id
                                );
                                this.pickedprofiles.push(one_profile)

                            }


                        }

                    }


                }
                if (this.pickeddevs.length <= 4) {
                    this.amount = 100
                } else if (this.pickeddevs.length <= 10) {
                    this.amount = 200
                } else {
                    this.amount = 500
                }
                this.waiting = false

            }
            ,
            TermsModal() {
                this.terms = true
            }
            ,
            Agree() {
                if (this.conditions === true) {
                    this.conditions = false
                } else {
                    this.conditions = true
                }

                this.terms = false
            }
            ,
            Check(e) {
                this.conditions = e.target.checked
            }
            ,
            remove(dev_id, type, application_id) {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}
                };
                this.waiting = true
                let self = this

                var index = this.pickeddevs.indexOf(dev_id.toString());
                if (index > -1) {
                    this.pickeddevs.splice(index, 1);
                    let developers = this.pickeddevs.join(',')

                    Payments.cartitemadd(this.mycart.id, {devspending: developers}, auth)
                        .then(resp => {
                            this.pickedprofiles = []
                            self.refresh()


                        })
                        .catch(error => {
                            return error
                        });
                    if (type === 'applied') {
                        Marketplace.pickreject(application_id, {carted: false}, auth)
                            .then(resp => {
                                    this.applicants = []
                                    this.newapplicant = []
                                    this.pickedapplicants = []
                                    this.interviewstage = []
                                    this.testingstage = []
                                    this.offerstage = []
                                    this.hirestage = []
                                    this.recommmedcandidates = []
                                    this.applicantprofile = []
                                    this.waiting = false
                                    self.Datarefresh()
                                    return resp
                                }
                            )
                            .catch()

                    } else if (type === 'recommend') {
                        Marketplace.deletejobapplication(application_id, auth)
                            .then(resp => {
                                    this.applicants = []
                                    this.newapplicant = []
                                    this.pickedapplicants = []
                                    this.interviewstage = []
                                    this.testingstage = []
                                    this.offerstage = []
                                    this.hirestage = []
                                    this.recommmedcandidates = []
                                    this.applicantprofile = []
                                    this.waiting = false
                                    self.Datarefresh()
                                    return resp
                                }
                            )
                            .catch()

                    }

                }

            }
            ,
            addtopaid() {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}
                }
                this.waiting = true
                let self = this

                this.paiddevs = this.paiddevs.concat(this.pickeddevs);
                if (this.paiddevs.length > this.bundlelimit) {
                    this.exceeded = 'you have exceeded your current bundle limit.remove some picked candidates'

                } else {
                    this.pickeddevs = []
                    let developerspaid = this.paiddevs.join(',')
                    let developerspending = this.pickeddevs.join(',')

                    if (this.bundlelimit === this.paiddevs.length) {
                        Payments.cartitemadd(this.mycart.id, {
                            devspending: developerspending,
                            devspaid: developerspaid,
                            checked_out: true

                        }, auth)
                            .then(resp => {
                                return resp
                            })

                    } else {
                        Payments.cartitemadd(this.mycart.id, {
                            devspending: developerspending,
                            devspaid: developerspaid,

                        }, auth)
                            .then(resp => {


                                return resp
                            })
                    }
                    for (let j = 0; j < this.pickedprofiles.length; j++) {


                        Marketplace.pickreject(this.pickedprofiles[j].application_id, {
                            selected: true,
                            stage: 'active'
                        }, auth)
                            .then(resp => {
                                    this.pickedprofiles = []
                                    self.refresh()
                                    this.applicants = []
                                    this.newapplicant = []
                                    this.pickedapplicants = []
                                    this.interviewstage = []
                                    this.testingstage = []
                                    this.offerstage = []
                                    this.hirestage = []
                                    this.recommmedcandidates = []
                                    this.applicantprofile = []
                                    self.Datarefresh()
                                    this.waiting = false
                                    return resp

                                }
                            )
                            .catch(error => {
                                return error


                            });


                    }


                }


            }
            ,

            callback: function (response) {
                let self = this
                this.waiting = true
                if (response.status === 'success') {
                    const auth = {
                        headers: {Authorization: 'JWT ' + this.$store.state.token}
                    }
                    this.paiddevs = this.paiddevs.concat(this.pickeddevs);
                    this.pickeddevs = []
                    let developerspaid = this.paiddevs.join(',')
                    let developerspending = this.pickeddevs.join(',')

                    Payments.cartitemadd(this.mycart.id, {
                        devspending: developerspending,
                        devspaid: developerspaid,
                        amount: this.amount,
                        transaction_id: response.trxref,
                        type: 'job',
                        conditions: true
                    }, auth)
                        .then(resp => {
                            return resp
                        })


                    for (let j = 0; j < this.pickedprofiles.length; j++) {


                        Marketplace.pickreject(this.pickedprofiles[j].application_id, {
                            selected: true,
                            stage: 'active'
                        }, auth)
                            .then(resp => {
                                    this.pickedprofiles = []
                                    self.refresh()
                                    this.applicants = []
                                    this.newapplicant = []
                                    this.pickedapplicants = []
                                    this.interviewstage = []
                                    this.testingstage = []
                                    this.offerstage = []
                                    this.hirestage = []
                                    this.recommmedcandidates = []
                                    this.applicantprofile = []
                                    this.waiting = false
                                    self.Datarefresh()
                                    return resp

                                }
                            )
                            .catch(error => {
                                return error


                            });


                    }


                    if (this.amount === 100) {
                        let bundlelimit = 4
                        if (this.paiddevs === bundlelimit) {
                            Payments.cartitemadd(this.mycart.id, {checked_out: true}, auth)
                                .then()
                                .catch();
                        }

                    } else if (this.amount === 200) {
                        let bundlelimit = 10
                        if (this.paiddevs === bundlelimit) {
                            Payments.cartitemadd(this.mycart.id, {checked_out: true}, auth)
                                .then()
                                .catch();
                        }
                    } else if (500 <= this.amount > 200) {
                        let bundlelimit = 33
                        if (this.paiddevs === bundlelimit) {
                            Payments.cartitemadd(this.mycart.id, {checked_out: true}, auth)
                                .then()
                                .catch();
                        }
                    }


                }


            }
            ,
            close: function () {
                console.log("Payment closed")
            }
            ,


        },
    }
</script>

<style scoped>
    #components-layout-demo-side .logo {
        height: 32px;
        background: rgba(255, 255, 255, .2);
        margin: 16px;
    }

    .ant-tabs-tab-active {
        color: #1890ff;
        font-weight: 500;
    }

    .customtable {


    }

    .radiochoice {
        height: 10rem;
        width: 15rem;
        margin: 4px;

    }

    .center1 {
        margin: auto;
        width: 32rem;

        padding: 0;
    }

    .eventcolors {
        margin-top: 30%;
        border-radius: 50%;
        width: 20px;
        height: 20px;

    }

</style>
