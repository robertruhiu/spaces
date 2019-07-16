<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
        <RecruiterSider/>


        <a-layout>

            <a-layout-content>
                <Jobheader/>


                <div :style="{ padding: '6px 20px', background: '#fff', minHeight: '80vh' }">
                    <div style="padding-top: 1%;">
                        <a-tabs defaultActiveKey="1"
                                style="z-index: 0;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">

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

                                                All Applicants
                                            </span>
                                                    <a-tabs defaultActiveKey="1" style="z-index: 0;">


                                                        <!-------active  candidates-------->
                                                        <a-tab-pane v-if="pickedapplicants.length > 0" tab="Active"
                                                                    key="1">

                                                            <a-table :dataSource="pickedapplicants" :scroll="{ y: 340 }"
                                                                     size="middle">


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
                                                                <a-table-column
                                                                        dataIndex="profile"
                                                                        key="profile"
                                                                        width="20%"


                                                                >
                                                                    <span slot="title">User profile</span>
                                                                    <template slot-scope="text,record">
                                                        <span>
                                                            <a @click="navigateTo({name:'candidateprofile',params:{candidateID: record.profile,jobID:job.id}})">profile</a>
                                                        </span>
                                                                    </template>
                                                                </a-table-column>
                                                                <a-table-column
                                                                        title="Tags"
                                                                        dataIndex="tags"
                                                                        key="tags"
                                                                        width="20%"
                                                                >
                                                                    <template slot-scope="tags">
                                                        <span>
                                                            <a-tag v-for="tag in tags" color="blue"
                                                                   :key="tag">{{tag}}</a-tag>
                                                        </span>
                                                                    </template>
                                                                </a-table-column>


                                                                <a-table-column
                                                                        title="Stage"
                                                                        dataIndex="stage"
                                                                        key="stage"
                                                                        width="20%"
                                                                >
                                                                    <template slot-scope="text, record">
                                                        <span>
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
                                                                                        schedule interview
                                                                                    </a-menu-item>
                                                                                    <a-menu-item
                                                                                            @click="handleMenuClick(record.action,record.profile,3)">
                                                                                        <a-icon
                                                                                                type="like"/>
                                                                                        make offer
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
                                                        <a-tab-pane v-if="newapplicant.length > 0" tab="New Applicants"
                                                                    key="2">

                                                            <a-table :dataSource="newapplicant" :scroll="{ y: 340 }"
                                                                     size="middle">


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
                                                                <a-table-column
                                                                        dataIndex="profile"
                                                                        key="profile"
                                                                        width="20%"


                                                                >
                                                                    <span slot="title">User profile</span>
                                                                    <template slot-scope="text,record">
                                                        <span>
                                                            <a @click="navigateTo({name:'candidateprofile',params:{candidateID: record.profile,jobID:job.id}})">profile</a>
                                                        </span>
                                                                    </template>
                                                                </a-table-column>
                                                                <a-table-column
                                                                        title="Tags"
                                                                        dataIndex="tags"
                                                                        key="tags"
                                                                        width="20%"
                                                                >
                                                                    <template slot-scope="tags">
                                                        <span>
                                                            <a-tag v-for="tag in tags" color="blue"
                                                                   :key="tag">{{tag}}</a-tag>
                                                        </span>
                                                                    </template>
                                                                </a-table-column>


                                                                <a-table-column
                                                                        title="Stage"
                                                                        dataIndex="stage"
                                                                        key="stage"
                                                                        width="20%"
                                                                >
                                                                    <template slot-scope="text, record">
                                                        <span>
                                                            <!------------stage (new,active,test,interview,offer,hire)---------------->
                                                            <a-tag color="#8BC34A"
                                                                   style="text-align: center;width: 4rem;">{{record.stage}}</a-tag>

                                                        </span>
                                                                    </template>

                                                                </a-table-column>
                                                                <a-table-column
                                                                        dataIndex="action"
                                                                        key="action"
                                                                        width="20%"


                                                                >
                                                                    <span slot="title">Pick/Reject</span>
                                                                    <template slot-scope="text,record">
                                                                        <a-button-group>
                                                                            <a-button
                                                                                    @click="pickrejectClick(record.action,record.profile,true)"
                                                                                    type="primary">pick
                                                                            </a-button>
                                                                            <a-button
                                                                                    @click="pickrejectClick(record.action,record.profile,false)">
                                                                                reject
                                                                            </a-button>

                                                                        </a-button-group>
                                                                    </template>
                                                                </a-table-column>


                                                            </a-table>


                                                        </a-tab-pane>

                                                        <!-------system recommmended candidates-------->
                                                        <a-tab-pane tab="Recommended Candidates" key="3">Content of Tab
                                                            Pane
                                                            3
                                                        </a-tab-pane>
                                                    </a-tabs>
                                                </a-tab-pane>

                                                <!------test stage ------>
                                                <a-tab-pane key="2">
                                            <span slot="tab">

                                                Coding test
                                            </span>
                                                    <div v-if="testingstage.length > 0">
                                                        <a-table :dataSource="testingstage" :scroll="{ y: 340 }"
                                                                 size="middle">


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
                                                            <a-table-column
                                                                    dataIndex="profile"
                                                                    key="profile"
                                                                    width="20%"


                                                            >
                                                                <span slot="title">User profile</span>
                                                                <template slot-scope="text,record">
                                                        <span>
                                                            <a @click="navigateTo({name:'candidateprofile',params:{candidateID: record.profile,jobID:job.id}})">profile</a>
                                                        </span>
                                                                </template>
                                                            </a-table-column>
                                                            <a-table-column
                                                                    title="Tags"
                                                                    dataIndex="tags"
                                                                    key="tags"
                                                                    width="20%"
                                                            >
                                                                <template slot-scope="tags">
                                                        <span>
                                                            <a-tag v-for="tag in tags" color="blue"
                                                                   :key="tag">{{tag}}</a-tag>
                                                        </span>
                                                                </template>
                                                            </a-table-column>


                                                            <a-table-column
                                                                    title="Stage"
                                                                    dataIndex="stage"
                                                                    key="stage"
                                                                    width="20%"
                                                            >
                                                                <template slot-scope="text, record">
                                                        <span>
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
                                                            <a-table-column
                                                                    title="Choices"
                                                                    width="10%"


                                                            >

                                                                <template slot-scope="text,record">
                                                                    <a-dropdown>
                                                                        <a-menu slot="overlay">
                                                                            <a-menu-item
                                                                                    @click="handleMenuClick(record.action,record.profile,1)">
                                                                                <a-icon
                                                                                        type="user"/>
                                                                                assign test
                                                                            </a-menu-item>
                                                                            <a-menu-item
                                                                                    @click="handleMenuClick(record.action,record.profile,2)">
                                                                                <a-icon
                                                                                        type="user"/>
                                                                                schedule interview
                                                                            </a-menu-item>
                                                                            <a-menu-item
                                                                                    @click="handleMenuClick(record.action,record.profile,3)">
                                                                                <a-icon
                                                                                        type="user"/>
                                                                                make offer
                                                                            </a-menu-item>
                                                                        </a-menu>
                                                                        <a-button type="primary" style="height: 30px">
                                                                            choices
                                                                            <a-icon type="down"/>
                                                                        </a-button>
                                                                    </a-dropdown>

                                                                </template>


                                                            </a-table-column>


                                                        </a-table>
                                                    </div>
                                                    <div v-else>
                                                        <a-table :dataSource="testingstage" :scroll="{ y: 340 }"
                                                                 size="middle">


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
                                                            <a-table-column
                                                                    dataIndex="profile"
                                                                    key="profile"
                                                                    width="20%"


                                                            >
                                                                <span slot="title">User profile</span>
                                                                <template slot-scope="text,record">
                                                        <span>
                                                            <a @click="navigateTo({name:'candidateprofile',params:{candidateID: record.profile,jobID:job.id}})">profile</a>
                                                        </span>
                                                                </template>
                                                            </a-table-column>
                                                            <a-table-column
                                                                    title="Tags"
                                                                    dataIndex="tags"
                                                                    key="tags"
                                                                    width="20%"
                                                            >
                                                                <template slot-scope="tags">
                                                        <span>
                                                            <a-tag v-for="tag in tags" color="blue"
                                                                   :key="tag">{{tag}}</a-tag>
                                                        </span>
                                                                </template>
                                                            </a-table-column>


                                                            <a-table-column
                                                                    title="Stage"
                                                                    dataIndex="stage"
                                                                    key="stage"
                                                                    width="20%"
                                                            >
                                                                <template slot-scope="text, record">
                                                        <span>
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
                                                            <a-table-column
                                                                    title="Choices"
                                                                    width="10%"


                                                            >

                                                                <template slot-scope="text,record">
                                                                    <a-dropdown>
                                                                        <a-menu slot="overlay">
                                                                            <a-menu-item
                                                                                    @click="handleMenuClick(record.action,record.profile,1)">
                                                                                <a-icon
                                                                                        type="user"/>
                                                                                assign test
                                                                            </a-menu-item>
                                                                            <a-menu-item
                                                                                    @click="handleMenuClick(record.action,record.profile,2)">
                                                                                <a-icon
                                                                                        type="user"/>
                                                                                schedule interview
                                                                            </a-menu-item>
                                                                            <a-menu-item
                                                                                    @click="handleMenuClick(record.action,record.profile,3)">
                                                                                <a-icon
                                                                                        type="user"/>
                                                                                make offer
                                                                            </a-menu-item>
                                                                        </a-menu>
                                                                        <a-button type="primary" style="height: 30px">
                                                                            choices
                                                                            <a-icon type="down"/>
                                                                        </a-button>
                                                                    </a-dropdown>

                                                                </template>


                                                            </a-table-column>


                                                        </a-table>
                                                    </div>
                                                </a-tab-pane>


                                                <!------interview stage ------>
                                                <a-tab-pane key="3">
                                            <span slot="tab">

                                                Interview
                                            </span>
                                                    <div v-if="interviewstage.length > 0">
                                                        <a-table :dataSource="interviewstage" :scroll="{ y: 340 }"
                                                                 size="middle">


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
                                                            <a-table-column
                                                                    dataIndex="profile"
                                                                    key="profile"
                                                                    width="20%"


                                                            >
                                                                <span slot="title">User profile</span>
                                                                <template slot-scope="text,record">
                                                        <span>
                                                            <a @click="navigateTo({name:'candidateprofile',params:{candidateID: record.profile,jobID:job.id}})">profile</a>
                                                        </span>
                                                                </template>
                                                            </a-table-column>
                                                            <a-table-column
                                                                    title="Tags"
                                                                    dataIndex="tags"
                                                                    key="tags"
                                                                    width="20%"
                                                            >
                                                                <template slot-scope="tags">
                                                        <span>
                                                            <a-tag v-for="tag in tags" color="blue"
                                                                   :key="tag">{{tag}}</a-tag>
                                                        </span>
                                                                </template>
                                                            </a-table-column>


                                                            <a-table-column
                                                                    title="Stage"
                                                                    dataIndex="stage"
                                                                    key="stage"
                                                                    width="20%"
                                                            >
                                                                <template slot-scope="text, record">
                                                        <span>
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
                                                            <a-table-column
                                                                    title="Choices"
                                                                    width="10%"


                                                            >

                                                                <template slot-scope="text,record">
                                                                    <a-dropdown>
                                                                        <a-menu slot="overlay">
                                                                            <a-menu-item
                                                                                    @click="handleMenuClick(record.action,record.profile,1)">
                                                                                <a-icon
                                                                                        type="user"/>
                                                                                assign test
                                                                            </a-menu-item>
                                                                            <a-menu-item
                                                                                    @click="handleMenuClick(record.action,record.profile,2)">
                                                                                <a-icon
                                                                                        type="user"/>
                                                                                schedule interview
                                                                            </a-menu-item>
                                                                            <a-menu-item
                                                                                    @click="handleMenuClick(record.action,record.profile,3)">
                                                                                <a-icon
                                                                                        type="user"/>
                                                                                make offer
                                                                            </a-menu-item>
                                                                        </a-menu>
                                                                        <a-button type="primary" style="height: 30px">
                                                                            choices
                                                                            <a-icon type="down"/>
                                                                        </a-button>
                                                                    </a-dropdown>

                                                                </template>


                                                            </a-table-column>


                                                        </a-table>
                                                    </div>
                                                    <div v-else>
                                                        <a-table :dataSource="interviewstage" :scroll="{ y: 340 }"
                                                                 size="middle">


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
                                                            <a-table-column
                                                                    dataIndex="profile"
                                                                    key="profile"
                                                                    width="20%"


                                                            >
                                                                <span slot="title">User profile</span>
                                                                <template slot-scope="text,record">
                                                        <span>
                                                            <a @click="navigateTo({name:'candidateprofile',params:{candidateID: record.profile,jobID:job.id}})">profile</a>
                                                        </span>
                                                                </template>
                                                            </a-table-column>
                                                            <a-table-column
                                                                    title="Tags"
                                                                    dataIndex="tags"
                                                                    key="tags"
                                                                    width="20%"
                                                            >
                                                                <template slot-scope="tags">
                                                        <span>
                                                            <a-tag v-for="tag in tags" color="blue"
                                                                   :key="tag">{{tag}}</a-tag>
                                                        </span>
                                                                </template>
                                                            </a-table-column>


                                                            <a-table-column
                                                                    title="Stage"
                                                                    dataIndex="stage"
                                                                    key="stage"
                                                                    width="20%"
                                                            >
                                                                <template slot-scope="text, record">
                                                        <span>
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
                                                            <a-table-column
                                                                    title="Choices"
                                                                    width="10%"


                                                            >

                                                                <template slot-scope="text,record">
                                                                    <a-dropdown>
                                                                        <a-menu slot="overlay">
                                                                            <a-menu-item
                                                                                    @click="handleMenuClick(record.action,record.profile,1)">
                                                                                <a-icon
                                                                                        type="user"/>
                                                                                assign test
                                                                            </a-menu-item>
                                                                            <a-menu-item
                                                                                    @click="handleMenuClick(record.action,record.profile,2)">
                                                                                <a-icon
                                                                                        type="user"/>
                                                                                schedule interview
                                                                            </a-menu-item>
                                                                            <a-menu-item
                                                                                    @click="handleMenuClick(record.action,record.profile,3)">
                                                                                <a-icon
                                                                                        type="user"/>
                                                                                make offer
                                                                            </a-menu-item>
                                                                        </a-menu>
                                                                        <a-button type="primary" style="height: 30px">
                                                                            choices
                                                                            <a-icon type="down"/>
                                                                        </a-button>
                                                                    </a-dropdown>

                                                                </template>


                                                            </a-table-column>


                                                        </a-table>
                                                    </div>
                                                </a-tab-pane>

                                                <!------offers stage ------>
                                                <a-tab-pane key="4">
                                            <span slot="tab">

                                                Offers
                                            </span>
                                                    <div v-if="offerstage.length > 0">
                                                        <a-table :dataSource="offerstage" :scroll="{ y: 340 }"
                                                                 size="middle">


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
                                                            <a-table-column
                                                                    dataIndex="profile"
                                                                    key="profile"
                                                                    width="20%"


                                                            >
                                                                <span slot="title">User profile</span>
                                                                <template slot-scope="text,record">
                                                        <span>
                                                            <a @click="navigateTo({name:'candidateprofile',params:{candidateID: record.profile,jobID:job.id}})">profile</a>
                                                        </span>
                                                                </template>
                                                            </a-table-column>
                                                            <a-table-column
                                                                    title="Tags"
                                                                    dataIndex="tags"
                                                                    key="tags"
                                                                    width="20%"
                                                            >
                                                                <template slot-scope="tags">
                                                        <span>
                                                            <a-tag v-for="tag in tags" color="blue"
                                                                   :key="tag">{{tag}}</a-tag>
                                                        </span>
                                                                </template>
                                                            </a-table-column>


                                                            <a-table-column
                                                                    title="Stage"
                                                                    dataIndex="stage"
                                                                    key="stage"
                                                                    width="20%"
                                                            >
                                                                <template slot-scope="text, record">
                                                        <span>
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
                                                            <a-table-column
                                                                    title="Choices"
                                                                    width="10%"


                                                            >

                                                                <template slot-scope="text,record">
                                                                    <a-dropdown>
                                                                        <a-menu slot="overlay">
                                                                            <a-menu-item
                                                                                    @click="handleMenuClick(record.action,record.profile,1)">
                                                                                <a-icon
                                                                                        type="user"/>
                                                                                assign test
                                                                            </a-menu-item>
                                                                            <a-menu-item
                                                                                    @click="handleMenuClick(record.action,record.profile,2)">
                                                                                <a-icon
                                                                                        type="user"/>
                                                                                schedule interview
                                                                            </a-menu-item>
                                                                            <a-menu-item
                                                                                    @click="handleMenuClick(record.action,record.profile,3)">
                                                                                <a-icon
                                                                                        type="user"/>
                                                                                make offer
                                                                            </a-menu-item>
                                                                        </a-menu>
                                                                        <a-button type="primary" style="height: 30px">
                                                                            choices
                                                                            <a-icon type="down"/>
                                                                        </a-button>
                                                                    </a-dropdown>

                                                                </template>


                                                            </a-table-column>


                                                        </a-table>
                                                    </div>
                                                    <div v-else>
                                                        <a-table :dataSource="offerstage" :scroll="{ y: 340 }"
                                                                 size="middle">


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
                                                            <a-table-column
                                                                    dataIndex="profile"
                                                                    key="profile"
                                                                    width="20%"


                                                            >
                                                                <span slot="title">User profile</span>
                                                                <template slot-scope="text,record">
                                                        <span>
                                                            <a @click="navigateTo({name:'candidateprofile',params:{candidateID: record.profile,jobID:job.id}})">profile</a>
                                                        </span>
                                                                </template>
                                                            </a-table-column>
                                                            <a-table-column
                                                                    title="Tags"
                                                                    dataIndex="tags"
                                                                    key="tags"
                                                                    width="20%"
                                                            >
                                                                <template slot-scope="tags">
                                                        <span>
                                                            <a-tag v-for="tag in tags" color="blue"
                                                                   :key="tag">{{tag}}</a-tag>
                                                        </span>
                                                                </template>
                                                            </a-table-column>


                                                            <a-table-column
                                                                    title="Stage"
                                                                    dataIndex="stage"
                                                                    key="stage"
                                                                    width="20%"
                                                            >
                                                                <template slot-scope="text, record">
                                                        <span>
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
                                                            <a-table-column
                                                                    title="Choices"
                                                                    width="10%"


                                                            >

                                                                <template slot-scope="text,record">
                                                                    <a-dropdown>
                                                                        <a-menu slot="overlay">
                                                                            <a-menu-item
                                                                                    @click="handleMenuClick(record.action,record.profile,1)">
                                                                                <a-icon
                                                                                        type="user"/>
                                                                                assign test
                                                                            </a-menu-item>
                                                                            <a-menu-item
                                                                                    @click="handleMenuClick(record.action,record.profile,2)">
                                                                                <a-icon
                                                                                        type="user"/>
                                                                                schedule interview
                                                                            </a-menu-item>
                                                                            <a-menu-item
                                                                                    @click="handleMenuClick(record.action,record.profile,3)">
                                                                                <a-icon
                                                                                        type="user"/>
                                                                                make offer
                                                                            </a-menu-item>
                                                                        </a-menu>
                                                                        <a-button type="primary" style="height: 30px">
                                                                            choices
                                                                            <a-icon type="down"/>
                                                                        </a-button>
                                                                    </a-dropdown>

                                                                </template>


                                                            </a-table-column>


                                                        </a-table>
                                                    </div>
                                                </a-tab-pane>

                                                <!------hires stage ------>
                                                <a-tab-pane key="5">
                                            <span slot="tab">

                                                Hires
                                            </span>
                                                    <div v-if="hirestage.length > 0">
                                                        <a-table :dataSource="hirestage" :scroll="{ y: 340 }"
                                                                 size="middle">


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
                                                            <a-table-column
                                                                    dataIndex="profile"
                                                                    key="profile"
                                                                    width="20%"


                                                            >
                                                                <span slot="title">User profile</span>
                                                                <template slot-scope="text,record">
                                                        <span>
                                                            <a @click="navigateTo({name:'candidateprofile',params:{candidateID: record.profile,jobID:job.id}})">profile</a>
                                                        </span>
                                                                </template>
                                                            </a-table-column>
                                                            <a-table-column
                                                                    title="Tags"
                                                                    dataIndex="tags"
                                                                    key="tags"
                                                                    width="20%"
                                                            >
                                                                <template slot-scope="tags">
                                                        <span>
                                                            <a-tag v-for="tag in tags" color="blue"
                                                                   :key="tag">{{tag}}</a-tag>
                                                        </span>
                                                                </template>
                                                            </a-table-column>


                                                            <a-table-column
                                                                    title="Stage"
                                                                    dataIndex="stage"
                                                                    key="stage"
                                                                    width="20%"
                                                            >
                                                                <template slot-scope="text, record">
                                                        <span>
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
                                                            <a-table-column
                                                                    title="Choices"
                                                                    width="10%"


                                                            >

                                                                <template slot-scope="text,record">
                                                                    <a-dropdown>
                                                                        <a-menu slot="overlay">
                                                                            <a-menu-item
                                                                                    @click="handleMenuClick(record.action,record.profile,1)">
                                                                                <a-icon
                                                                                        type="user"/>
                                                                                assign test
                                                                            </a-menu-item>
                                                                            <a-menu-item
                                                                                    @click="handleMenuClick(record.action,record.profile,2)">
                                                                                <a-icon
                                                                                        type="user"/>
                                                                                schedule interview
                                                                            </a-menu-item>
                                                                            <a-menu-item
                                                                                    @click="handleMenuClick(record.action,record.profile,3)">
                                                                                <a-icon
                                                                                        type="user"/>
                                                                                make offer
                                                                            </a-menu-item>
                                                                        </a-menu>
                                                                        <a-button type="primary" style="height: 30px">
                                                                            choices
                                                                            <a-icon type="down"/>
                                                                        </a-button>
                                                                    </a-dropdown>

                                                                </template>


                                                            </a-table-column>


                                                        </a-table>
                                                    </div>
                                                    <div v-else>
                                                        <a-table :dataSource="hirestage" :scroll="{ y: 340 }"
                                                                 size="middle">


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
                                                            <a-table-column
                                                                    dataIndex="profile"
                                                                    key="profile"
                                                                    width="20%"


                                                            >
                                                                <span slot="title">User profile</span>
                                                                <template slot-scope="text,record">
                                                        <span>
                                                            <a @click="navigateTo({name:'candidateprofile',params:{candidateID: record.profile,jobID:job.id}})">profile</a>
                                                        </span>
                                                                </template>
                                                            </a-table-column>
                                                            <a-table-column
                                                                    title="Tags"
                                                                    dataIndex="tags"
                                                                    key="tags"
                                                                    width="20%"
                                                            >
                                                                <template slot-scope="tags">
                                                        <span>
                                                            <a-tag v-for="tag in tags" color="blue"
                                                                   :key="tag">{{tag}}</a-tag>
                                                        </span>
                                                                </template>
                                                            </a-table-column>


                                                            <a-table-column
                                                                    title="Stage"
                                                                    dataIndex="stage"
                                                                    key="stage"
                                                                    width="20%"
                                                            >
                                                                <template slot-scope="text, record">
                                                        <span>
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
                                                            <a-table-column
                                                                    title="Choices"
                                                                    width="10%"


                                                            >

                                                                <template slot-scope="text,record">
                                                                    <a-dropdown>
                                                                        <a-menu slot="overlay">
                                                                            <a-menu-item
                                                                                    @click="handleMenuClick(record.action,record.profile,1)">
                                                                                <a-icon
                                                                                        type="user"/>
                                                                                assign test
                                                                            </a-menu-item>
                                                                            <a-menu-item
                                                                                    @click="handleMenuClick(record.action,record.profile,2)">
                                                                                <a-icon
                                                                                        type="user"/>
                                                                                schedule interview
                                                                            </a-menu-item>
                                                                            <a-menu-item
                                                                                    @click="handleMenuClick(record.action,record.profile,3)">
                                                                                <a-icon
                                                                                        type="user"/>
                                                                                make offer
                                                                            </a-menu-item>
                                                                        </a-menu>
                                                                        <a-button type="primary" style="height: 30px">
                                                                            choices
                                                                            <a-icon type="down"/>
                                                                        </a-button>
                                                                    </a-dropdown>

                                                                </template>


                                                            </a-table-column>


                                                        </a-table>
                                                    </div>

                                                </a-tab-pane>
                                            </a-tabs>

                                        </a-col>

                                    </a-row>
                                </div>

                            </a-tab-pane>


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
                                                <a-form-item label="Location">
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
                                            <a-col :span="24">
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
                                            <a-col :span="24">
                                                <a-form-item
                                                        label="Job description "
                                                        :label-col="{ span: 24 }"
                                                        :wrapper-col="{ span:  24}"
                                                >

                                                    <a-textarea v-model="job.description"
                                                                placeholder="A bit about the job"
                                                                :rows="6"/>
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
                    <p>
                        <a-button type="primary" @click="showModal">Asign code test</a-button>
                    </p>
                    <a-modal
                            title="Pick  technologies "
                            v-model="visible"
                            @ok="handleOk"
                            style="top: 20px;"


                    >
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
                            <a-col :span="6" v-for=" tag in techchoicestags" :key="tag" style="margin-bottom: 1%;" >
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

    ];

    //applicants structure on table
    class Applicant {
        constructor(id, name, stage, tags, user_id, selected, pk) {
            this.key = id;
            this.name = name;
            this.stage = stage;
            this.profile = user_id;
            this.action = pk
            this.tags = tags;
            this.selected = selected;


        }
    }

    import UsersService from '@/services/UsersService'
    import ACol from "ant-design-vue/es/grid/Col";
    import ARow from "ant-design-vue/es/grid/Row";
    import Marketplace from '@/services/Marketplace'
    import Jobheader from '@/components/layout/Jobheader'
    import RecruiterSider from "../../layout/RecruiterSider";


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
                techchoicestags: [
                    {name:'javascript',image:'https://i.ibb.co/dPbdXXr/javascript.png'},
                    {name:'react',image:'https://i.ibb.co/0ZyDJvM/iconfinder-React-js-logo-1174949.png'},
                    {name:'html',image:'https://i.ibb.co/tc74V6V/html-5.png'},
                    {name:'css',image:'https://i.ibb.co/JFq3pRy/css-3.png'},
                    {name:'php',image:'https://i.ibb.co/18R20M7/php.png'},
                    {name:'nodejs',image:'https://i.ibb.co/s5KqNVq/iconfinder-nodejs-512-339733.png'},
                    {name:'python',image:'https://i.ibb.co/WFv6Y09/python.png'},
                    {name:'sql',image:'https://i.ibb.co/H724NDW/sql.png'},
                    {name:'postgres',image:'http://www.joshuaatteberry.com/img/postgresql.png'},
                    {name:'android',image:'https://i.ibb.co/W6XRn8Z/android.png'},
                    {name:'angular',image:'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fc%2Fcf%2FAngular_full_color_logo.svg%2F1200px-Angular_full_color_logo.svg.png&f=1'},
                    {name:'vue',image:'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F95%2FVue.js_Logo_2.svg%2F1200px-Vue.js_Logo_2.svg.png&f=1'},
                    {name:'laravel',image:'https://i.ibb.co/0MtxRk9/lARA.png'},
                    {name:'django',image:'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.3HgSI9fFykV9W7bWiDwa0AHaHa%26pid%3DApi&f=1'},
                    {name:'bootstrap',image:'https://i.ibb.co/bgXz8xY/bootstrap.png'},
                    {name:'java',image:'https://i.ibb.co/n1dts5w/java.png'},

                    ],
                selectedtech: []


            }
        },
        components: {
            ARow,
            ACol,
            RecruiterSider,
            Jobheader,


        },
        async mounted() {

            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}

            };
            this.currentUserProfile = (await UsersService.currentuser(this.$store.state.user.pk, auth)).data

            this.alldevsprofile = (await UsersService.devs()).data;
            this.alldevs = (await UsersService.allusers()).data;
            const jobId = this.$store.state.route.params.jobId
            this.job = (await Marketplace.specificjob(jobId, auth)).data
            this.skills = this.job.tech_stack.split(',')
            let temptaglist = this.job.tech_stack;
            let array = temptaglist.replace(/'/g, '').replace(/ /g, '').split(',');

            this.tags = array
            // getting applicants for job
            this.applicants = (await Marketplace.specificjobapplicants(jobId, auth)).data

            // create a profile for each applicant comparision and matching between user,profile and applicant model
            for (let i = 0; i < this.alldevs.length; i++) { //all users
                for (let j = 0; j < this.applicants.length; j++) { //all applicants for this job
                    for (let l = 0; l < this.alldevsprofile.length; l++) { // all user profiles
                        if (this.alldevs[i].id === this.applicants[j].candidate && this.alldevsprofile[l].user === this.alldevs[i].id) {

                            let tags = this.alldevsprofile[l].skills.split(',').slice(0, 2);
                            let stage = this.applicants[j].stage
                            let id = this.applicants[j].id
                            let pk = this.applicants[j].id
                            let user_id = this.applicants[j].candidate
                            let name = this.alldevs[i].username
                            let selected = this.applicants[j].selected
                            let onepickeddev = new Applicant(
                                id, name, stage, tags, user_id, selected, pk
                            );

                            this.applicantprofile.push(onepickeddev)


                        }
                    }


                }


            }


            // applicants sorting
            for (let i = 0; i < this.applicantprofile.length; i++) {
                if (this.applicantprofile[i].selected === false) {
                    this.newapplicant.push(this.applicantprofile[i])
                } else if (this.applicantprofile[i].selected) {
                    this.pickedapplicants.push(this.applicantprofile[i])

                } else if (this.applicantprofile[i].stage === 'interview') {
                    this.interviewstage.push(this.applicantprofile[i])
                } else if (this.applicantprofile[i].stage === 'test') {
                    this.testingstage.push(this.applicantprofile[i])
                } else if (this.applicantprofile[i].stage === 'offer') {
                    this.offerstage.push(this.applicantprofile[i])
                } else if (this.applicantprofile[i].stage === 'hired') {
                    this.hirestage.push(this.applicantprofile[i])
                }


            }


        },
        methods: {
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
            showModal() {
                this.visible = true
            },
            handleOk(e) {

                this.visible = false
            },
            handleSubmit: async function () {

                try {
                    const auth = {
                        headers: {Authorization: 'JWT ' + this.$store.state.token}

                    }

                    const response = await Marketplace.updatejob(this.job.id, this.job, auth)
                    response()


                } catch (error) {
                    this.error = error.response.data.error

                }


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
            handleMenuClick(action, profile, id) {
                if (id === 1) { // testing
                    for (let i = 0; i < this.pickedapplicants.length; i++) {
                        if (this.pickedapplicants[i].profile === profile) {
                            this.pickedapplicants[i].stage = 'test'
                            this.testingstage.push(this.pickedapplicants[i])

                        }
                    }

                } else if (id === 2) {
                    for (let i = 0; i < this.pickedapplicants.length; i++) {
                        if (this.pickedapplicants[i].profile === profile) {
                            this.pickedapplicants[i].stage = 'interview'
                            this.interviewstage.push(this.pickedapplicants[i])
                        }
                    }

                } else if (id === 3) {
                    for (let i = 0; i < this.pickedapplicants.length; i++) {
                        if (this.pickedapplicants[i].profile === profile) {
                            this.pickedapplicants[i].stage = 'offer'
                            this.offerstage.push(this.pickedapplicants[i])
                        }
                    }
                }
            },
            pickrejectClick(job_id, candidate_id, key) {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                if (key) {
                    for (let i = 0; i < this.newapplicant.length; i++) {
                        if (this.newapplicant[i].profile === candidate_id) {
                            this.newapplicant[i].stage = 'active'
                            this.pickedapplicants.push(this.newapplicant[i])
                            let index = this.newapplicant.indexOf(this.newapplicant[i]);
                            this.newapplicant.splice(index, 1);
                            Marketplace.pickreject(job_id, {stage: 'active', selected: true}, auth)


                        }
                    }
                } else {
                    for (let i = 0; i < this.newapplicant.length; i++) {
                        if (this.newapplicant[i].profile === candidate_id) {

                            let index = this.newapplicant.indexOf(this.newapplicant[i]);
                            this.newapplicant.splice(index, 1);
                            Marketplace.pickreject(job_id, {stage: 'rejected', selected: false}, auth)


                        }
                    }
                }


            },
            navigateTo(route) {
                this.$router.push(route)
            },
            handleClose(removedTag) {
                const tags = this.tags.filter(tag => tag !== removedTag)
                this.tags = tags
                let alltags = this.tags.join(", ")
                this.job.tech_stack = alltags

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

</style>
