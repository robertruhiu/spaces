<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
        <RecruiterSider/>


        <a-layout :style="{ marginLeft: '200px',backgroundColor:'#F8FAFB' }">

            <a-layout-content>
                <MycandidatesHeader/>
                <div :style="{ padding: '6px 20px', background: '#fff', minHeight: '80vh',maxWidth:'72rem'}">
                    <div style="padding-top: 2%; ">
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
                                                        <a-tag color="blue">{{paidapplicants.length}}</a-tag>
                                                    </span>

                                                    <a-tabs defaultActiveKey="1" style="z-index: 0;">


                                                        <!-------paid  candidates-------->
                                                        <a-tab-pane v-if="active" tab="Active Candidates"
                                                                    key="1">

                                                            <a-table :dataSource="paidapplicants" :scroll="{ y: 340 }"
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
                                                                    <div style="" slot="title">User profile</div>
                                                                    <template slot-scope="text,record">
                                                        <span style="margin-left: 15%">
                                                            <a @click="navigateTo({name:'mycandidatesprofile',params:{candidateId: record.profile,applicationId: record.action}})">

                                                                profile</a>
                                                        </span>
                                                                    </template>
                                                                </a-table-column>

                                                                <!-----skills--------->
                                                                <a-table-column

                                                                        dataIndex="tags"
                                                                        key="tags"
                                                                        width="20%"

                                                                >
                                                                    <div style="text-align: center" slot="title">
                                                                        Verified
                                                                        Skills
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

                                                        <!-------unpaid  candidates-------->
                                                        <a-tab-pane v-if="paying" tab="New Candidates"
                                                                    key="2">

                                                            <a-table :dataSource="unpaidapplicant" :scroll="{ y: 340 }"
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
                                                                    <div slot="title">Basic profile</div>
                                                                    <template slot-scope="text,record">
                                                        <span style="margin-left: 15%">
                                                            <a @click="navigateTo({name:'mycandidatesprofile',params:{candidateId: record.profile,applicationId: record.action}})">profile</a>
                                                        </span>
                                                                    </template>
                                                                </a-table-column>

                                                                <!-----skills--------->
                                                                <a-table-column

                                                                        dataIndex="tags"
                                                                        key="tags"
                                                                        width="20%"

                                                                >
                                                                    <div style="text-align: center" slot="title">
                                                                        Verified Skills
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
                                                                    <div style="text-align: center" slot="title">
                                                                        Pay
                                                                    </div>
                                                                    <template slot-scope="text,record">
                                                                        <div style="text-align: center">
                                                                            <a-button
                                                                                    @click="payClick(record.action,record.profile,record.name)"
                                                                                    type="primary">pay
                                                                            </a-button>
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

                                                    <a-alert style="margin-bottom: 1%"
                                                             message="Please purchase a testing bundle to enable project asignment to candidates"
                                                             type="info" closeText="Close Now"/>
                                                    <a-table :dataSource="testingstage" :scroll="{ y: 340 }"
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
                                                            <div style="" slot="title">User profile</div>
                                                            <template slot-scope="text,record">
                                                        <span style="margin-left: 15%">
                                                            <a @click="navigateTo({name:'mycandidatesprofile',params:{candidateId: record.profile,applicationId: record.action}})">profile</a>
                                                        </span>
                                                            </template>
                                                        </a-table-column>

                                                        <!-----skills--------->
                                                        <a-table-column

                                                                dataIndex="tags"
                                                                key="tags"
                                                                width="20%"

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
                                                            <div style="" slot="title">Project/Test assigned
                                                            </div>
                                                            <template slot-scope="text,record">
                                                                <span style="margin-left: 15%;">
                                                                    <a style="margin-left: 15%;" v-if="record.project"
                                                                       @click="navigateTo({name:'mypickedprojectdetails',params:{projectId:record.project.id,candidateId: record.profile,applicationId: record.action}})">
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
                                                            <div slot="title">Report status
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
                                                                                v-if="record.test_stage ==='complete'"
                                                                                @click="handleTestMenuClick(record.action,record.profile,2)">
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
                                                    <a-table :dataSource="interviewstage" :scroll="{ y: 340 }"
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
                                                            <div style="" slot="title">User profile</div>
                                                            <template slot-scope="text,record">
                                                        <span style="margin-left: 15%">
                                                            <a @click="navigateTo({name:'mycandidatesprofile',params:{candidateId: record.profile,applicationId: record.action}})">profile</a>
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

                                                        <!-----interview notes--------->
                                                        <a-table-column

                                                                dataIndex="notes"
                                                                key="notes"
                                                                width="15%"

                                                        >
                                                            <div slot="title">Interview notes
                                                            </div>
                                                            <template slot-scope="text,record">
                                                        <span style="margin-left: 25%">
                                                            <a>notes</a>
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
                                                            <div style="" slot="title">User profile</div>
                                                            <template slot-scope="text,record">
                                                        <span style="margin-left: 15%">
                                                            <a @click="navigateTo({name:'mycandidatesprofile',params:{candidateId: record.profile,applicationId: record.action}})">profile</a>
                                                        </span>
                                                            </template>
                                                        </a-table-column>


                                                        <!-----offer letter--------->
                                                        <a-table-column

                                                                dataIndex="offer"
                                                                key="offer"
                                                                width="20%"

                                                        >
                                                            <div style="margin-left: 25%" slot="title">Make offer</div>
                                                            <template slot-scope="text, record">
                                                                <a style="margin-left: 25%">offer letter</a>

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


                            <!------bundle details tab  ------>
                            <a-tab-pane key="3" forceRender>
                                <span slot="tab">
                                    <a-icon type="credit-card"/>
                                    Payment bundles
                                </span>
                                <div style="padding-left: 4%;padding-right: 4%;padding-bottom: 4%">
                                    <a-row>
                                        <a-col :span="16">
                                            <a-row :gutter="8">
                                                <a-col :span="8">
                                                    <a-card
                                                            hoverable
                                                            style="width: 10rem"
                                                    >

                                                        <a-card-meta
                                                                title="$200">
                                                            <template slot="description">
                                                                <p>10 candidates</p>
                                                                <a-button v-model="amount" @click="bundleamount(1)">
                                                                    Pick
                                                                </a-button>

                                                            </template>

                                                        </a-card-meta>
                                                    </a-card>

                                                </a-col>
                                                <a-col :span="8">
                                                    <a-card
                                                            hoverable
                                                            style="width: 10rem"
                                                    >

                                                        <a-card-meta
                                                                title="$300">
                                                            <template slot="description">
                                                                <p>15 candidates</p>
                                                                <a-button v-model="amount" @click="bundleamount(2)">
                                                                    Pick
                                                                </a-button>

                                                            </template>

                                                        </a-card-meta>
                                                    </a-card>

                                                </a-col>
                                                <a-col :span="8">
                                                    <a-card
                                                            hoverable
                                                            style="width: 10rem"
                                                    >

                                                        <a-card-meta
                                                                title="$500">
                                                            <template slot="description">
                                                                <p>25 candidates</p>
                                                                <a-button v-model="amount" @click="bundleamount(3)">
                                                                    Pick
                                                                </a-button>

                                                            </template>

                                                        </a-card-meta>
                                                    </a-card>

                                                </a-col>
                                            </a-row>
                                        </a-col>
                                        <a-col :span="8">
                                            <h3>Pay</h3>
                                            <a-card

                                                    style="width: 300px"
                                            >
                                                <img
                                                        alt="example"
                                                        src="../../../../assets/images/card.svg"
                                                        slot="cover"
                                                />
                                                <a-card-meta
                                                        style="text-align: center;"
                                                        title="Payment Methods">

                                                    <template slot="description">
                                                        <p>Amount :${{amount}}</p>
                                                        <a onClick=""><img class="ant-btn " style="width: 10rem"
                                                                           src="../../../../assets/images/flutter.svg"></a>
                                                    </template>
                                                </a-card-meta>
                                            </a-card>
                                        </a-col>
                                    </a-row>
                                </div>
                            </a-tab-pane>


                        </a-tabs>


                    </div>
                    <a-modal
                            title="Project assignments "
                            v-model="visible"
                            @ok="handleOk"
                            style="top: 60px;"
                            :footer="null"


                    >
                        <p style="text-align: center;">Would you like to get a project recommendation or pick a
                            project?</p>
                        <a-row :gutter="16">
                            <a-col :span="12">
                                <a @click="navigateTo({name:'projectlist'})">
                                    <div style="border: 1px solid #e8e8e8;padding: 2%;">
                                        <img style="margin-left: 25%;width: 50%;margin-right: 25%"
                                             src="../../../../assets/images/pick.png">
                                        <p style="text-align: center">Pick one by myself</p>

                                    </div>

                                </a>
                            </a-col>
                            <a-col :span="12">
                                <a @click="navigateTo({name:'myprojectdetails',params:{userId: recruiter,candidateId:candidateid,applicationId:applicationid}})">
                                    <div style="border: 1px solid #e8e8e8;padding: 2%;">
                                        <img style="margin-left: 25%;width: 50%;margin-right: 25%;"
                                             src="../../../../assets/images/recommend.png">
                                        <p style="text-align: center">Get recommendation</p>

                                    </div>

                                </a>
                            </a-col>
                        </a-row>

                        <div v-if="recentprojects">
                            <p>My Recent projects</p>
                            <p v-for="project in recentprojects"
                               :key="project">
                                <a v-if="recentprojects"
                                   @click="navigateTo({name:'mypickedprojectdetails',params:{projectId:project.id,candidateId: candidateid,applicationId:applicationid}})">
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

                </div>


            </a-layout-content>

        </a-layout>
    </a-layout>

</template>

<script>
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
    class Candidate {
        constructor(id, name, paid, verified_skills, user_id, stage, pk, test_stage, project, projectname, status,
                    start, end, color, report, offerstatus, offerletter) {
            this.key = id;
            this.name = name;
            this.paid = paid;
            this.profile = user_id;
            this.tags = verified_skills;
            this.stage = stage
            this.action = pk
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


        }
    }

    import UsersService from '@/services/UsersService'
    import ACol from "ant-design-vue/es/grid/Col";
    import ARow from "ant-design-vue/es/grid/Row";
    import MarketPlaceService from '@/services/Marketplace'
    import RecruiterSider from "../../../layout/RecruiterSider";
    import MycandidatesHeader from '@/components/layout/MaincandidatesHeader'
    import Projectsservice from '@/services/Projects'
    import moment from 'moment';

    export default {
        name: "Mycandidates",
        data() {

            return {
                pickeddevs: [],
                paiddevs: [],
                columns,
                alldevsprofile: [],
                alldevs: [],
                candidateprofiles: [],
                unpaidapplicant: [],
                paidapplicants: [],
                interviewstage: [],
                testingstage: [],
                offerstage: [],
                hirestage: [],
                amount: null,
                active: true,
                paying: true,
                visible: false,
                recentprojects: [],
                applicationid: null,
                candidateid: null,
                interviewmodal: false,
                candidatename: null,
                starttime: null,
                endtime: null,
                interviewcandidateapplicant: null,
                showEvent: false,
                interviewstart: null,
                interviewend: null,
                interviewer: null,
                interviewerapplicationid: null,
                eventcolor: 'blue'

            }
        },
        components: {
            ARow,
            ACol,
            RecruiterSider,
            MycandidatesHeader


        },
        async mounted() {
            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}

            };
            if (this.$store.state.user.pk) {
                MarketPlaceService.mydevelopers(this.$store.state.user.pk, auth)
                    .then(resp => {
                            if (resp.data.length !== 0) {


                                for (let i = 0; i < resp.data.length; i++) {
                                    this.pickeddevs.push(resp.data[i])
                                }
                                // create a profile for each candidate comparision and matching between user,profile and devrequest model
                                for (let j = 0; j < this.pickeddevs.length; j++) { // all user profiles

                                    let verified_skills = this.pickeddevs[j].developer.verified_skills.split(',').slice(0, 2);
                                    let paid = this.pickeddevs[j].paid
                                    let id = this.pickeddevs[j].id
                                    let user_id = this.pickeddevs[j].developer.user.id
                                    let name = this.pickeddevs[j].developer.user.first_name
                                    let stage = this.pickeddevs[j].stage
                                    let pk = this.pickeddevs[j].id
                                    let test_stage = this.pickeddevs[j].test_stage
                                    let project = ''
                                    let projectname = ''
                                    if (test_stage) {
                                        project = this.pickeddevs[j].project.id
                                        projectname = this.pickeddevs[j].project.name

                                    } else {
                                        project = null
                                        projectname = null

                                    }
                                    let status = this.pickeddevs[j].interviewstatus
                                    let start = this.pickeddevs[j].interviewstarttime
                                    let end = this.pickeddevs[j].interviewendtime
                                    let color = this.pickeddevs[j].eventcolor
                                    let report = this.pickeddevs[j].report
                                    let offerstatus = this.pickeddevs[j].offerstatus
                                    let offerletter = this.pickeddevs[j].offerletter

                                    let onepickeddev = new Candidate(
                                        id, name, paid, verified_skills, user_id, stage, pk,
                                        test_stage, project, projectname, status, start, end,
                                        color, report, offerstatus, offerletter
                                    );

                                    this.candidateprofiles.push(onepickeddev)

                                }


                                // candidates sorting
                                for (let i = 0; i < this.candidateprofiles.length; i++) {
                                    if (this.candidateprofiles[i].paid === true) {
                                        this.paidapplicants.push(this.candidateprofiles[i]);


                                    } else {
                                        this.unpaidapplicant.push(this.candidateprofiles[i])


                                    }
                                    // second part of sorting conditional coz the fist condition met
                                    if (this.candidateprofiles[i].stage === 'interview') {
                                        this.interviewstage.push(this.candidateprofiles[i])

                                    } else if (this.candidateprofiles[i].stage === 'test') {
                                        this.testingstage.push(this.candidateprofiles[i])

                                    } else if (this.candidateprofiles[i].stage === 'offer') {
                                        this.offerstage.push(this.candidateprofiles[i])


                                    } else if (this.candidateprofiles[i].stage === 'hired') {
                                        this.hirestage.push(this.candidateprofiles[i])

                                    }


                                }
                                if (this.paidapplicants.length === 0) {
                                    this.active = false
                                } else {
                                    this.active = true
                                }
                                if (this.unpaidapplicant.length === 0) {
                                    this.paying = false
                                } else {
                                    this.paying = true
                                }

                            }


                        }
                    )
                    .catch();


                // recent projects
                this.recentprojects = (await Projectsservice.myrecentprojects(this.$store.state.user.pk, auth)).data

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
                MarketPlaceService.candidatemanager(interviewerapplicationid, {interviewstatus: 'deleted'}, auth)

                this.showEvent = false

            },

            async saveEvent(interviewerapplicationid, interviewstart, interviewend) {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                MarketPlaceService.candidatemanager(interviewerapplicationid, {
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

                MarketPlaceService.candidatemanager(interviewerapplicationid, {interviewstatus: 'cancelled'}, auth)

                this.showEvent = false

            },
            async CreateEvent(application_id) {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                let self =this;
                MarketPlaceService.candidatemanager(application_id, {
                    interviewstarttime: this.starttime,
                    interviewendtime: this.endtime,
                    interviewstatus: 'invite sent',
                    eventcolor: this.eventcolor
                }, auth)
                    .then(resp => {
                        this.pickeddevs = []
                        this.paiddevs = []
                        this.alldevsprofile = []
                        this.alldevs = []
                        this.candidateprofiles = []
                        this.unpaidapplicant = []
                        this.paidapplicants = []
                        this.interviewstage = []
                        this.testingstage = []
                        this.offerstage = []
                        this.hirestage = []
                        this.recentprojects = []
                        self.Datarefresh()
                        return resp

                    })
                    .catch()
                this.interviewmodal = false
            },
            navigateTo(route) {
                this.$router.push(route)
            },
            // handles active stage of applicants movement keys 1,2,3
            handleMenuClick(action, profile, id) {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                let self = this;
                if (id === 1) { // testing
                    for (let i = 0; i < this.paidapplicants.length; i++) {
                        if (this.paidapplicants[i].profile === profile) {

                            MarketPlaceService.candidatemanager(action, {stage: 'test'}, auth)
                                .then(resp => {
                                    this.pickeddevs = []
                                    this.paiddevs = []
                                    this.alldevsprofile = []
                                    this.alldevs = []
                                    this.candidateprofiles = []
                                    this.unpaidapplicant = []
                                    this.paidapplicants = []
                                    this.interviewstage = []
                                    this.testingstage = []
                                    this.offerstage = []
                                    this.hirestage = []
                                    this.recentprojects = []
                                    self.Datarefresh()
                                    return resp

                                })
                                .catch()

                        }
                    }

                } else if (id === 2) { // interview
                    for (let i = 0; i < this.paidapplicants.length; i++) {
                        if (this.paidapplicants[i].profile === profile) {
                            MarketPlaceService.candidatemanager(action, {stage: 'interview'}, auth)
                                .then(resp => {
                                    this.pickeddevs = []
                                    this.paiddevs = []
                                    this.alldevsprofile = []
                                    this.alldevs = []
                                    this.candidateprofiles = []
                                    this.unpaidapplicant = []
                                    this.paidapplicants = []
                                    this.interviewstage = []
                                    this.testingstage = []
                                    this.offerstage = []
                                    this.hirestage = []
                                    this.recentprojects = []
                                    self.Datarefresh()
                                    return resp

                                })
                                .catch()
                        }
                    }

                } else if (id === 3) { // reject
                    for (let i = 0; i < this.paidapplicants.length; i++) {
                        if (this.paidapplicants[i].profile === profile) {

                            MarketPlaceService.candidatemanager(action, {stage: 'rejected', paid: false}, auth)
                                .then(resp => {
                                    this.pickeddevs = []
                                    this.paiddevs = []
                                    this.alldevsprofile = []
                                    this.alldevs = []
                                    this.candidateprofiles = []
                                    this.unpaidapplicant = []
                                    this.paidapplicants = []
                                    this.interviewstage = []
                                    this.testingstage = []
                                    this.offerstage = []
                                    this.hirestage = []
                                    this.recentprojects = []
                                    self.Datarefresh()
                                    return resp

                                })
                                .catch()

                        }
                    }

                }
            },

            // handles movement on the testing stage keys 1,2,3
            handleTestMenuClick(action, profile, id) {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                let self = this;
                if (id === 2) { // interview
                    for (let i = 0; i < this.testingstage.length; i++) {
                        if (this.testingstage[i].profile === profile) {
                            MarketPlaceService.candidatemanager(action, {stage: 'interview'}, auth)
                                .then(resp => {
                                    this.pickeddevs = []
                                    this.paiddevs = []
                                    this.alldevsprofile = []
                                    this.alldevs = []
                                    this.candidateprofiles = []
                                    this.unpaidapplicant = []
                                    this.paidapplicants = []
                                    this.interviewstage = []
                                    this.testingstage = []
                                    this.offerstage = []
                                    this.hirestage = []
                                    this.recentprojects = []
                                    self.Datarefresh()
                                    return resp

                                })
                                .catch()


                        }
                    }

                } else if (id === 3) { // offer
                    for (let i = 0; i < this.testingstage.length; i++) {
                        if (this.testingstage[i].profile === profile) {

                            MarketPlaceService.candidatemanager(action, {stage: 'offer'}, auth)
                                .then(resp => {
                                    this.pickeddevs = []
                                    this.paiddevs = []
                                    this.alldevsprofile = []
                                    this.alldevs = []
                                    this.candidateprofiles = []
                                    this.unpaidapplicant = []
                                    this.paidapplicants = []
                                    this.interviewstage = []
                                    this.testingstage = []
                                    this.offerstage = []
                                    this.hirestage = []
                                    this.recentprojects = []
                                    self.Datarefresh()
                                    return resp

                                })
                                .catch()

                        }
                    }

                } else if (id === 4) { // reject
                    for (let i = 0; i < this.testingstage.length; i++) {
                        if (this.testingstage[i].profile === profile) {

                            MarketPlaceService.candidatemanager(action, {stage: 'rejected', paid: false}, auth)
                                .then(resp => {
                                    this.pickeddevs = []
                                    this.paiddevs = []
                                    this.alldevsprofile = []
                                    this.alldevs = []
                                    this.candidateprofiles = []
                                    this.unpaidapplicant = []
                                    this.paidapplicants = []
                                    this.interviewstage = []
                                    this.testingstage = []
                                    this.offerstage = []
                                    this.hirestage = []
                                    this.recentprojects = []
                                    self.Datarefresh()
                                    return resp

                                })
                                .catch()

                        }
                    }

                }


            },

            // handles movement on the interview stage keys 1,2,3
            handleInterviewClick(action, profile, id) {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                let self = this;
                if (id === 1) { // coding
                    for (let i = 0; i < this.interviewstage.length; i++) {
                        if (this.interviewstage[i].profile === profile) {

                            MarketPlaceService.candidatemanager(action, {stage: 'test'}, auth)
                                .then(resp => {
                                    this.pickeddevs = []
                                    this.paiddevs = []
                                    this.alldevsprofile = []
                                    this.alldevs = []
                                    this.candidateprofiles = []
                                    this.unpaidapplicant = []
                                    this.paidapplicants = []
                                    this.interviewstage = []
                                    this.testingstage = []
                                    this.offerstage = []
                                    this.hirestage = []
                                    this.recentprojects = []
                                    self.Datarefresh()
                                    return resp

                                })
                                .catch()


                        }
                    }

                } else if (id === 2) { // offer
                    for (let i = 0; i < this.interviewstage.length; i++) {
                        if (this.interviewstage[i].profile === profile) {

                            MarketPlaceService.candidatemanager(action, {stage: 'offer'}, auth)
                                .then(resp => {
                                    this.pickeddevs = []
                                    this.paiddevs = []
                                    this.alldevsprofile = []
                                    this.alldevs = []
                                    this.candidateprofiles = []
                                    this.unpaidapplicant = []
                                    this.paidapplicants = []
                                    this.interviewstage = []
                                    this.testingstage = []
                                    this.offerstage = []
                                    this.hirestage = []
                                    this.recentprojects = []
                                    self.Datarefresh()
                                    return resp

                                })
                                .catch()

                        }
                    }

                } else if (id === 3) { // reject
                    for (let i = 0; i < this.interviewstage.length; i++) {
                        if (this.interviewstage[i].profile === profile) {
                            this.interviewstage[i].stage = 'rejected'
                            MarketPlaceService.candidatemanager(action, {stage: 'rejected', paid: false}, auth)
                                .then(resp => {
                                    this.pickeddevs = []
                                    this.paiddevs = []
                                    this.alldevsprofile = []
                                    this.alldevs = []
                                    this.candidateprofiles = []
                                    this.unpaidapplicant = []
                                    this.paidapplicants = []
                                    this.interviewstage = []
                                    this.testingstage = []
                                    this.offerstage = []
                                    this.hirestage = []
                                    this.recentprojects = []
                                    self.Datarefresh()
                                    return resp

                                })
                                .catch()

                        }
                    }

                }


            },

            //pay or reject from new applicants
            payClick(pk, candidate_id, name) {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                let self = this;

                for (let i = 0; i < this.unpaidapplicant.length; i++) {
                    if (this.unpaidapplicant[i].profile === candidate_id) {

                        this.active = true

                        if (this.unpaidapplicant.length === 0) {
                            this.paying = false
                        }
                        MarketPlaceService.candidatemanager(pk, {
                            stage: 'active',
                            paid: true,
                            candidatename: name
                        }, auth)
                            .then(resp => {
                                this.pickeddevs = []
                                this.paiddevs = []
                                this.alldevsprofile = []
                                this.alldevs = []
                                this.candidateprofiles = []
                                this.unpaidapplicant = []
                                this.paidapplicants = []
                                this.interviewstage = []
                                this.testingstage = []
                                this.offerstage = []
                                this.hirestage = []
                                this.recentprojects = []
                                self.Datarefresh()
                                return resp

                            })
                            .catch()


                    }
                }


            },
            showModal(dev, application) {
                this.visible = true
                this.candidateid = dev
                this.applicationid = application

            },
            handleOk() {

                this.visible = false
            },
            bundleamount(key) {
                if (key === 1) {
                    this.amount = 200
                } else if (key === 2) {
                    this.amount = 300
                } else {
                    this.amount = 500
                }

            },
            async Datarefresh() {

                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                };
                if (this.$store.state.user.pk) {
                    MarketPlaceService.mydevelopers(this.$store.state.user.pk, auth)
                        .then(resp => {
                                if (resp.data.length !== 0) {


                                    for (let i = 0; i < resp.data.length; i++) {
                                        this.pickeddevs.push(resp.data[i])
                                    }
                                    // create a profile for each candidate comparision and matching between user,profile and devrequest model
                                    for (let j = 0; j < this.pickeddevs.length; j++) { // all user profiles

                                        let verified_skills = this.pickeddevs[j].developer.verified_skills.split(',').slice(0, 2);
                                        let paid = this.pickeddevs[j].paid
                                        let id = this.pickeddevs[j].id
                                        let user_id = this.pickeddevs[j].developer.user.id
                                        let name = this.pickeddevs[j].developer.user.first_name
                                        let stage = this.pickeddevs[j].stage
                                        let pk = this.pickeddevs[j].id
                                        let test_stage = this.pickeddevs[j].test_stage
                                        let project = ''
                                        let projectname = ''
                                        if (test_stage) {
                                            project = this.pickeddevs[j].project.id
                                            projectname = this.pickeddevs[j].project.name

                                        } else {
                                            project = null
                                            projectname = null

                                        }
                                        let status = this.pickeddevs[j].interviewstatus
                                        let start = this.pickeddevs[j].interviewstarttime
                                        let end = this.pickeddevs[j].interviewendtime
                                        let color = this.pickeddevs[j].eventcolor
                                        let report = this.pickeddevs[j].report
                                        let offerstatus = this.pickeddevs[j].offerstatus
                                        let offerletter = this.pickeddevs[j].offerletter

                                        let onepickeddev = new Candidate(
                                            id, name, paid, verified_skills, user_id, stage, pk,
                                            test_stage, project, projectname, status, start, end,
                                            color, report, offerstatus, offerletter
                                        );

                                        this.candidateprofiles.push(onepickeddev)

                                    }


                                    // candidates sorting
                                    for (let i = 0; i < this.candidateprofiles.length; i++) {
                                        if (this.candidateprofiles[i].paid === true) {
                                            this.paidapplicants.push(this.candidateprofiles[i]);


                                        } else {
                                            this.unpaidapplicant.push(this.candidateprofiles[i])


                                        }
                                        // second part of sorting conditional coz the fist condition met
                                        if (this.candidateprofiles[i].stage === 'interview') {
                                            this.interviewstage.push(this.candidateprofiles[i])

                                        } else if (this.candidateprofiles[i].stage === 'test') {
                                            this.testingstage.push(this.candidateprofiles[i])

                                        } else if (this.candidateprofiles[i].stage === 'offer') {
                                            this.offerstage.push(this.candidateprofiles[i])


                                        } else if (this.candidateprofiles[i].stage === 'hired') {
                                            this.hirestage.push(this.candidateprofiles[i])

                                        }


                                    }
                                    if (this.paidapplicants.length === 0) {
                                        this.active = false
                                    } else {
                                        this.active = true
                                    }
                                    if (this.unpaidapplicant.length === 0) {
                                        this.paying = false
                                    } else {
                                        this.paying = true
                                    }

                                }


                            }
                        )
                        .catch();


                    // recent projects
                    this.recentprojects = (await Projectsservice.myrecentprojects(this.$store.state.user.pk, auth)).data

                }

            }
        }
    }
</script>

<style scoped>
    .eventcolors {
        margin-top: 30%;
        border-radius: 50%;
        width: 20px;
        height: 20px;

    }

</style>
