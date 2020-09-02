<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
        <RecruiterSider/>


        <a-layout :style="{ backgroundColor:'#F8FAFB' }">

            <a-layout-content>
                <Jobheader/>


                <div :style="{ padding: '4px 10px', background: '#fff', minHeight: '80vh',maxWidth:'72rem' }">
                    <div>
                        <a-row style="padding-bottom: 1%">
                            <a-col span="20">
                                <a-alert v-if="updated" message="Job details have been updated" type="success"
                                         closeText="Close Now"/>
                            </a-col>

                            <a-modal
                                    title="Activate job"
                                    v-model="activatejobmodal"
                                    style="top: 20px;"
                                    :footer="null"
                            >
                                <div>
                                    <p>Hello to activate the tracking system and move candidates around.
                                    <p>Click on the Make Payment button below.</p>
                                    <p>This is set to enable you to pay the commission discussed with you by your
                                        account manger.</p>
                                    <p>Commission amount:$ {{job.commission}}</p>

                                    <a-checkbox @change="Verifyterms" v-model="job.terms">
                                        I have read and I accept
                                        <router-link to="terms">Terms</router-link>
                                        of service
                                    </a-checkbox>
                                    <div v-if="job.terms === false">

                                        <a-button type="primary" disabled style="margin-top: 1rem">
                                            Make payment
                                        </a-button>
                                    </div>
                                    <div v-else style="margin-top: 1rem">
                                        <paystack
                                                :amount="topaycommission"
                                                :email="email"
                                                :paystackkey="paystackkey"
                                                :currency="currency"
                                                :reference="reference"
                                                :callback="callbackjobverified"
                                                :close="close"
                                                :embed="false"
                                        >
                                            <i class="fas fa-money-bill-alt"></i>
                                            Make Payment
                                        </paystack>
                                    </div>

                                </div>


                            </a-modal>

                        </a-row>
                        <hide-at breakpoint="mediumAndBelow">
                        <span>
                            <a-row :gutter="16" style="margin-bottom: 1rem">
                                <a-col span="22" style="margin-bottom: 1rem">
                                    <a-alert v-if="currentUserProfile.user.is_staff" :message="adminmodewarning"
                                             type="warning" closeText="Close Now"/>


                                </a-col>
                                 <a-col span="2">
                                    <a-button @click="tor" type="primary" icon="info-circle">Page tour</a-button>
                                </a-col>

                            </a-row>


                        </span>
                        </hide-at>

                        <hide-at breakpoint="mediumAndBelow">
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
                                                <a-tabs defaultActiveKey="1" tabPosition=left
                                                        style="z-index: 0;min-height: 350px">
                                                    <!------allapplicants stage ------>
                                                    <a-tab-pane key="1">
                                                    <span slot="tab" class="v-step-0">
                                                        Active Applicants
                                                        <a-tag color="blue">{{pickedapplicants.length}}</a-tag>
                                                    </span>
                                                        <div style="text-align: center" v-if="waiting">
                                                            <a-spin/>

                                                        </div>

                                                        <a-tabs v-else defaultActiveKey="1" style="z-index: 0;">

                                                            <!-------active  candidates-------->
                                                            <a-tab-pane v-if="active"
                                                                        key="1">
                                                            <span slot="tab">
                                                                <a-tooltip placement="topLeft">
                                                                    <template slot="title">
                                                                        <span>See all the candidates that you picked for this job. Here you can see what stage
                                                                            they are in under the “Stage” column.</span>
                                                                    </template>
                                                                    Picked Candidates <a-icon type="question-circle"/>
                                                                </a-tooltip>

                                                            </span>


                                                                <a-table :dataSource="pickedapplicants"
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
                                                            <router-link
                                                                    style="text-decoration: none"
                                                                    :to="{name:'candidateprofile',params:{candidateId: record.profile,jobId:job.id,applicationId: record.action}}"
                                                                    target='_blank'>
                                                            profile
                                                            </router-link>
                                                            <!--                                                            <a  @click="navigateTo({name:'candidateprofile',params:{candidateId: record.profile,jobId:job.id,applicationId: record.action}})" target='_blank'>profile</a>-->
                                                        </span>
                                                                        </template>
                                                                    </a-table-column>

                                                                    <!-----skills--------->
                                                                    <a-table-column

                                                                            dataIndex="tags"
                                                                            key="tags"
                                                                            width="20%"

                                                                    >
                                                                        <div style="width: 100%" slot="title">
                                                                            Skills
                                                                        </div>
                                                                        <template slot-scope="tags">
                                                                            <div style="">
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
                                                                        <div style="width: 100%" slot="title">Stage
                                                                        </div>
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
                                                            <a-tag v-else-if="record.stage === 'pending'"
                                                                   color="#953D66"
                                                                   style="text-align: center;width: 4rem;">{{record.stage}}</a-tag>
                                                        </span>
                                                                        </template>

                                                                    </a-table-column>

                                                                    <!-----application date--------->
                                                                    <a-table-column

                                                                            dataIndex="created"
                                                                            key="created"
                                                                            width="25%"

                                                                    >
                                                                        <div style="width: 100%" slot="title">
                                                                            Application date
                                                                        </div>
                                                                        <template slot-scope="text, record">
                                                        <span>

                                                            <a-tag
                                                                    style="text-align: center;">{{record.created}}</a-tag>

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
                                                                                                @click="onReject(record.action,record.stage,record.profile,3)"
                                                                                        >
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
                                                            <a-tab-pane v-if="newapplicant.length >0"
                                                                        key="2">
                                                            <span slot="tab">
                                                                <a-tooltip placement="topLeft">
                                                                    <template slot="title">
                                                                        <span>Pick or reject candidates who applied from the job board</span>
                                                                    </template>
                                                                    New Applicants <a-icon type="question-circle"/>
                                                                </a-tooltip>

                                                            </span>

                                                                <a-table :dataSource="newapplicant"
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
                                                            <router-link
                                                                    style="text-decoration: none"
                                                                    :to="{name:'candidateprofile',params:{candidateId: record.profile,jobId:job.id,applicationId: record.action}}"
                                                                    target='_blank'>
                                                            profile
                                                            </router-link>
                                                            <!--                                                            <a target='_blank' @click="navigateTo({name:'candidateprofile',params:{candidateId: record.profile,jobId:job.id,applicationId: record.action}})">profile</a>-->
                                                        </span>
                                                                        </template>
                                                                    </a-table-column>

                                                                    <!-----skills--------->
                                                                    <a-table-column

                                                                            dataIndex="tags"
                                                                            key="tags"
                                                                            width="25%"

                                                                    >
                                                                        <div style="width: 100%" slot="title">
                                                                            Skills
                                                                        </div>
                                                                        <template slot-scope="tags">
                                                                            <div>
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
                                                                            width="10%"

                                                                    >
                                                                        <div style="width: 100%" slot="title">Stage
                                                                        </div>
                                                                        <template slot-scope="text, record">
                                                        <span>
                                                            <!------------stage (new,active,test,interview,offer,hire)---------------->
                                                            <a-tag color="#EA6A47"
                                                                   style="text-align: center;">{{record.stage}}</a-tag>

                                                        </span>
                                                                        </template>

                                                                    </a-table-column>

                                                                    <!-----application date--------->
                                                                    <a-table-column

                                                                            dataIndex="created"
                                                                            key="created"
                                                                            width="25%"

                                                                    >
                                                                        <div style="width: 100%" slot="title">
                                                                            Application date
                                                                        </div>
                                                                        <template slot-scope="text, record">
                                                        <span>

                                                            <a-tag
                                                                    style="text-align: center;">{{record.created}}</a-tag>

                                                        </span>
                                                                        </template>
                                                                    </a-table-column>

                                                                    <!-----action--------->
                                                                    <a-table-column
                                                                            dataIndex="action"
                                                                            key="action"
                                                                            width="20%"


                                                                    >
                                                                        <div style="width: 100%" slot="title">
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
                                                                                            @click="onReject(record.action,record.stage,record.profile)"
                                                                                    >
                                                                                        reject
                                                                                    </a-button>

                                                                                </a-button-group>

                                                                            </div>
                                                                            <div v-else>

                                                                                <a-button-group>
                                                                                    <a-button v-if="job.verified"
                                                                                              @click="pickrejectAdmin(record.action,record.profile,true,record.name)"
                                                                                              type="primary">pick
                                                                                    </a-button>
                                                                                    <a-button v-else
                                                                                              @click="activatejob()"
                                                                                              type="primary">pick
                                                                                    </a-button>
                                                                                    <a-button
                                                                                            @click="onReject(record.action,record.stage,record.profile)"
                                                                                    >
                                                                                        reject
                                                                                    </a-button>

                                                                                </a-button-group>
                                                                            </div>

                                                                        </template>
                                                                    </a-table-column>


                                                                </a-table>

                                                            </a-tab-pane>

                                                            <!-------system recommmended candidates-------->
                                                            <a-tab-pane v-if="recommended"
                                                                        key="3">
                                                            <span slot="tab">
                                                                <a-tooltip placement="topLeft">
                                                                    <template slot="title">
                                                                        <span>See candidates that match the skills on your job and invite them to apply by picking.</span>
                                                                    </template>
                                                                    Recommended Candidates <a-icon
                                                                        type="question-circle"/>
                                                                </a-tooltip>

                                                            </span>


                                                                <a-table :dataSource="recommmedcandidates"

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
                                                            <router-link
                                                                    style="text-decoration: none"
                                                                    :to="{name:'recommendedprofile',params:{candidateId: record.profile,jobId:job.id,}}"
                                                                    target='_blank'>
                                                            profile
                                                            </router-link>
                                                            <!--                                                            <a @click="navigateTo({name:'recommendedprofile',params:{candidateId: record.profile,jobId:job.id,}})" target='_blank'>profile</a>-->
                                                        </span>
                                                                        </template>
                                                                    </a-table-column>

                                                                    <!-----skills--------->
                                                                    <a-table-column

                                                                            dataIndex="tags"
                                                                            key="tags"
                                                                            width="20%"

                                                                    >
                                                                        <div style="width: 100%;" slot="title">
                                                                            Skills
                                                                        </div>
                                                                        <template slot-scope="tags">
                                                                            <div>
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
                                                                        <div style="width: 100%" slot="title">Stage
                                                                        </div>
                                                                        <template slot-scope="text, record">
                                                        <span style="">

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
                                                                        <div style="width: 100%" slot="title">
                                                                            Pick
                                                                        </div>
                                                                        <template slot-scope="text,record">
                                                                            <div v-if="currentUserProfile.user.is_staff">
                                                                                <div>
                                                                                    <a-button :size="small"
                                                                                              @click="pickrecommedationAdmin(job.id,record.profile,2)"
                                                                                              type="primary">pick
                                                                                    </a-button>


                                                                                </div>
                                                                            </div>
                                                                            <div v-else-if="job.published">
                                                                                <div v-if="job.verified">
                                                                                    <div>
                                                                                        <a-button :size="small"
                                                                                                  @click="pickrecommedationAdmin(job.id,record.profile,2)"
                                                                                                  type="primary">pick
                                                                                        </a-button>


                                                                                    </div>
                                                                                </div>
                                                                                <div v-else-if="job.verified === false">
                                                                                    <div>
                                                                                        <a-button :size="small"
                                                                                                  @click="activatejob()"

                                                                                                  type="primary">pick
                                                                                        </a-button>


                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div v-else>
                                                                                awaiting publishing
                                                                            </div>


                                                                        </template>
                                                                    </a-table-column>


                                                                </a-table>


                                                            </a-tab-pane>
                                                            <!-------rejected candidates-------->
                                                            <a-tab-pane v-if="rejectedcandidates"
                                                                        key="4">
                                                            <span slot="tab">

                                                                    Rejected Candidates


                                                            </span>


                                                                <a-table :dataSource="rejectedcandidateslist"

                                                                         size="middle">

                                                                    <!-----name--------->
                                                                    <a-table-column
                                                                            dataIndex="name"
                                                                            key="name"
                                                                            width="25%"


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
                                                                            width="25%"


                                                                    >
                                                                        <div slot="title">User profile</div>
                                                                        <template slot-scope="text,record">
                                                        <span>
                                                            <router-link
                                                                    style="text-decoration: none"
                                                                    :to="{name:'recommendedprofile',params:{candidateId: record.profile,jobId:job.id,}}"
                                                                    target='_blank'>
                                                            profile
                                                            </router-link>
                                                            <!--                                                            <a @click="navigateTo({name:'recommendedprofile',params:{candidateId: record.profile,jobId:job.id,}})" target='_blank'>profile</a>-->
                                                        </span>
                                                                        </template>
                                                                    </a-table-column>

                                                                    <!-----skills--------->
                                                                    <a-table-column

                                                                            dataIndex="tags"
                                                                            key="tags"
                                                                            width="25%"

                                                                    >
                                                                        <div style="text-align: center;" slot="title">
                                                                            Skills
                                                                        </div>
                                                                        <template slot-scope="tags">
                                                                            <div>
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
                                                                            width="25%"

                                                                    >
                                                                        <div style="text-align: center" slot="title">
                                                                            Stage
                                                                        </div>
                                                                        <template slot-scope="text, record">
                                                                            <div>
                                                                            <span>

                                                            <a-tag color="#1C4E80"
                                                                   style="">{{record.stage}}</a-tag>

                                                        </span>
                                                                            </div>

                                                                        </template>

                                                                    </a-table-column>


                                                                </a-table>


                                                            </a-tab-pane>


                                                        </a-tabs>
                                                    </a-tab-pane>

                                                    <!------test stage ------>
                                                    <a-tab-pane key="2">
                                                    <span slot="tab" class="v-step-1">
                                                        Coding test
                                                        <a-tag color="blue">{{testingstage.length}}</a-tag>
                                                    </span>

                                                        <a-table :dataSource="testingstage" :scroll="{ y: 400 }"
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
                                                            <router-link
                                                                    style="text-decoration: none"
                                                                    :to="{name:'candidateprofile',params:{candidateId: record.profile,jobId:job.id,applicationId: record.action}}"
                                                                    target='_blank'>
                                                            profile
                                                            </router-link>

                                                            <!--&lt;!&ndash;                                                            <a @click="navigateTo({name:'candidateprofile',params:{candidateId: record.profile,jobId:job.id,applicationId: record.action}})" target='_blank'>profile&ndash;&gt;-->

                                                            <!--                                                            </a>-->
                                                        </span>
                                                                </template>
                                                            </a-table-column>

                                                            <!-----skills--------->
                                                            <a-table-column

                                                                    dataIndex="tags"
                                                                    key="tags"
                                                                    width="25%"

                                                            >
                                                                <div style="width: 100%" slot="title">Skills</div>
                                                                <template slot-scope="tags">
                                                                    <div>
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
                                                                <div style="" slot="title">
                                                                    <a-tooltip placement="topLeft">
                                                                        <template slot="title">
                                                                            <span>Enables you to easily assign project tests to candidates. Recommended projects are suggested based on the skills on your job.</span>
                                                                        </template>
                                                                        Test assigned
                                                                        <a-icon type="question-circle"/>
                                                                    </a-tooltip>

                                                                </div>
                                                                <template slot-scope="text,record">
                                                                <span style="">
                                                                    <router-link v-if="record.project"
                                                                                 style="text-decoration: none"
                                                                                 :to="{name:'pickedprojectdetails',params:{projectId:record.project,candidateId: record.profile,jobId:job.id,
                                                                       applicationId: record.action}}"
                                                                                 target='_blank'>
                                                            {{record.projectname}}
                                                            </router-link>


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
                                                                <div slot="title">
                                                                    <a-tooltip placement="topLeft">
                                                                        <template slot="title">
                                                                            <span>Easily track the candidate’s progress in the test from invitation, in progress to completion. Upon completion, a report link will appear.</span>
                                                                        </template>
                                                                        Test status
                                                                        <a-icon type="question-circle"/>
                                                                    </a-tooltip>
                                                                </div>
                                                                <template slot-scope="text,record">
                                                                    <span v-if="record.test_stage">
                                                                        <span v-if="record.report">

                                                                <div v-if="record.report.report_ready">

                                                                    <a @click="navigateTo({name:'report',params:{candidateId: record.profile,projectId:record.project,reportId:record.report.id}})">
                                                                    report
                                                                </a>
                                                                </div>


                                                                        <span v-else>


                                                                <span v-if="record.test_stage === 'complete'">
                                                                    report generating
                                                                </span>
                                                                <span v-else>
                                                                    {{record.test_stage}}
                                                                </span>

                                                            </span>
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

                                                                                    @click="handleTestMenuClick(record.action,record.profile,2)"
                                                                            >
                                                                                <a-icon
                                                                                        type="calendar"/>
                                                                                schedule interview
                                                                            </a-menu-item>


                                                                            <a-menu-item
                                                                                    @click="onReject(record.action,record.stage,record.profile,4)"
                                                                            >
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
                                                    <span slot="tab" class="v-step-2">
                                                        Interview
                                                        <a-tag color="blue">{{interviewstage.length}}</a-tag>
                                                    </span>
                                                        <a-alert style="margin-bottom: 1%"
                                                                 message="Interview notes enables you to write and keep notes on the candidate"
                                                                 type="info" closeText="Close Now"/>
                                                        <a-table :dataSource="interviewstage" :scroll="{ y: 400 }"
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
                                                            <router-link
                                                                    style="text-decoration: none"
                                                                    :to="{name:'candidateprofile',params:{candidateId: record.profile,jobId:job.id,applicationId: record.action}}"
                                                                    target='_blank'>
                                                            profile
                                                            </router-link>
                                                            <!--                                                            <a target='_blank' @click="navigateTo({name:'candidateprofile',params:{candidateId: record.profile,jobId:job.id,applicationId: record.action}})">profile</a>-->
                                                        </span>
                                                                </template>
                                                            </a-table-column>

                                                            <!-----skills--------->
                                                            <a-table-column

                                                                    dataIndex="tags"
                                                                    key="tags"
                                                                    width="25%"

                                                            >
                                                                <div style="width: 100%" slot="title">Skills</div>
                                                                <template slot-scope="tags">
                                                                    <div style="">
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
                                                                <div style="" slot="title">Interview notes
                                                                </div>
                                                                <template slot-scope="text,record">
                                                                    <div style="text-align: center">


                                                                        <a-button :size="small"
                                                                                  v-if="record.notes"
                                                                                  style="background-color: #673AB7;color: white"
                                                                                  @click="onNoteEdit(record.action,record.notes)"
                                                                        >
                                                                            <a-icon type="edit"/>
                                                                            edit
                                                                        </a-button>
                                                                        <a-button :size="small" v-else
                                                                                  style="background-color: #673AB7;color: white"
                                                                                  @click="onNoteCreate(record.action)"
                                                                        >
                                                                            <a-icon type="plus"/>
                                                                            add
                                                                        </a-button>

                                                                    </div>


                                                                </template>


                                                            </a-table-column>


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
                                                                                    @click="onReject(record.action,record.stage,record.profile,3)"
                                                                            >
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
                                                    <span slot="tab" class="v-step-3">
                                                        Offers
                                                        <a-tag color="blue">{{offerstage.length}}</a-tag>
                                                    </span>
                                                        <a-table :dataSource="offerstage" :scroll="{ y: 400 }"
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
                                                            <router-link
                                                                    style="text-decoration: none"
                                                                    :to="{name:'candidateprofile',params:{candidateId: record.profile,jobId:job.id,applicationId: record.action}}"
                                                                    target='_blank'>
                                                            profile
                                                            </router-link>
                                                            <!--                                                            <a target='_blank' @click="navigateTo({name:'candidateprofile',params:{candidateId: record.profile,jobId:job.id,applicationId: record.action}})">profile</a>-->
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
                                                                                  @click="openWidget()">Upload offer
                                                                            letter
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
                                                                <div style="text-align: center" slot="title">Offer
                                                                    Status
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

                                                                                @click="onReject(record.action,record.stage,record.profile)">
                                                                            Rejected
                                                                        </a-button>

                                                                    </a-button-group>
                                                                </template>


                                                            </a-table-column>


                                                        </a-table>

                                                    </a-tab-pane>

                                                    <v-tour name="demo" :steps="steps"></v-tour>


                                                </a-tabs>


                                            </a-col>

                                        </a-row>
                                    </div>

                                </a-tab-pane>


                                <!------job details tab  ------>
                                <a-tab-pane key="2" forceRender>
                                <span slot="tab">
                                    <a-icon type="profile"/>
                                    <a-tooltip placement="topLeft">
                                        <template slot="title">
                                            <span>Click to edit your job post</span>
                                        </template>
                                        Job Details <a-icon type="question-circle"/>
                                    </a-tooltip>

                                </span>
                                    <div style="padding-left: 4%;padding-right: 4%;padding-bottom: 4%">

                                        <a-form :form="form"
                                                @submit="handleSubmit">
                                            <a-row :gutter="16">
                                                <a-col :xs="{span: 12, offset: 0 }" :sm="{span: 12, offset: 0 }"
                                                       :md="{span: 12, offset: 0 }"
                                                       :lg="{span: 8, offset: 0 }" :xl="{span: 8,offset: 0 }">
                                                    <a-form-item label="Title">
                                                        <a-input v-model="job.title">

                                                        </a-input>
                                                    </a-form-item>
                                                </a-col>
                                                <a-col :xs="{span: 12, offset: 0 }" :sm="{span: 12, offset: 0 }"
                                                       :md="{span: 12, offset: 0 }"
                                                       :lg="{span: 8, offset: 0 }" :xl="{span: 8,offset: 0 }">
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
                                                <a-col :xs="{span: 12, offset: 0 }" :sm="{span: 12, offset: 0 }"
                                                       :md="{span: 12, offset: 0 }"
                                                       :lg="{span: 8, offset: 0 }" :xl="{span: 8,offset: 0 }">
                                                    <a-form-item label="Experience">
                                                      <a-select
                                                          placeholder="Select a option"
                                                          v-model="job.years_experience"
                                                      >

                                                        <a-select-option value="0-1">
                                                          0-1
                                                        </a-select-option>
                                                        <a-select-option value="1-3">
                                                          1-3
                                                        </a-select-option>
                                                        <a-select-option value="3-above">
                                                          3-above
                                                        </a-select-option>

                                                      </a-select>
                                                    </a-form-item>

                                                </a-col>
                                            </a-row>
                                            <!------commission entry added for staff access------>
                                            <a-row :gutter="16">
                                                <div v-if="currentUserProfile.user.is_staff">
                                                    <a-col :xs="{span: 12, offset: 0 }" :sm="{span: 12, offset: 0 }"
                                                           :md="{span: 12, offset: 0 }"
                                                           :lg="{span: 6, offset: 0 }" :xl="{span: 6,offset: 0 }">
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
                                                    <a-col :xs="{span: 12, offset: 0 }" :sm="{span: 12, offset: 0 }"
                                                           :md="{span: 12, offset: 0 }"
                                                           :lg="{span: 6, offset: 0 }" :xl="{span: 6,offset: 0 }">
                                                        <a-form-item>
                                                            <span>Location : {{job.location}}</span>
                                                            <country-select v-model="job.location"
                                                                            class="ant-input"
                                                            />
                                                        </a-form-item>

                                                    </a-col>
                                                    <a-col :xs="{span: 12, offset: 0 }" :sm="{span: 12, offset: 0 }"
                                                           :md="{span: 12, offset: 0 }"
                                                           :lg="{span: 6, offset: 0 }" :xl="{span: 6,offset: 0 }">
                                                        <a-form-item label="Salary range ">
                                                            <a-input v-model="job.remuneration">

                                                            </a-input>
                                                        </a-form-item>

                                                    </a-col>
                                                    <a-col :xs="{span: 12, offset: 0 }" :sm="{span: 12, offset: 0 }"
                                                           :md="{span: 12, offset: 0 }"
                                                           :lg="{span: 6, offset: 0 }" :xl="{span: 6,offset: 0 }">
                                                        <a-form-item label="Commission ">
                                                            <a-input v-model="job.commission">

                                                            </a-input>
                                                        </a-form-item>

                                                    </a-col>
                                                </div>
                                                <div v-else>
                                                    <a-col :xs="{span: 12, offset: 0 }" :sm="{span: 12, offset: 0 }"
                                                           :md="{span: 12, offset: 0 }"
                                                           :lg="{span: 8, offset: 0 }" :xl="{span: 8,offset: 0 }">
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
                                                    <a-col :xs="{span: 12, offset: 0 }" :sm="{span: 12, offset: 0 }"
                                                           :md="{span: 12, offset: 0 }"
                                                           :lg="{span: 8, offset: 0 }" :xl="{span: 8,offset: 0 }">
                                                        <a-form-item>
                                                            <span>Location : {{job.location}}</span>
                                                            <country-select v-model="job.location"
                                                                            class="ant-input"
                                                            />
                                                        </a-form-item>

                                                    </a-col>
                                                    <a-col :xs="{span: 12, offset: 0 }" :sm="{span: 12, offset: 0 }"
                                                           :md="{span: 12, offset: 0 }"
                                                           :lg="{span: 8, offset: 0 }" :xl="{span: 8,offset: 0 }">
                                                        <a-form-item label="Salary range ">
                                                            <a-input v-model="job.remuneration">

                                                            </a-input>
                                                        </a-form-item>

                                                    </a-col>


                                                </div>


                                            </a-row>
                                            <a-row>

                                                <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                                                       :md="{span: 24, offset: 0 }"
                                                       :lg="{span: 12, offset: 0 }" :xl="{span: 12,offset: 0 }">
                                                    <a-form-item
                                                            label="Which tech skills are you looking for? "

                                                    >
                                                        <template v-for="(tag, index) in tags">
                                                            <a-tooltip v-if="tag.length > 20" :key="tag" :title="tag">
                                                                <a-tag :key="tag"
                                                                       :afterClose="() => handleClose(tag)"
                                                                       color="#2db7f5">
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
                                                <a-col :xs="{span: 12, offset: 0 }" :sm="{span: 12, offset: 0 }"
                                                       :md="{span: 12, offset: 0 }"
                                                       :lg="{span: 12, offset: 0 }" :xl="{span: 12,offset: 0 }">
                                                    <a-form-item :label="deadlineformated">

                                                        <a-date-picker @change="onDate"


                                                                       format="YYYY-MM-DD"
                                                                       :disabledDate="disabledDate"

                                                        />

                                                    </a-form-item>
                                                </a-col>
                                            </a-row>
                                            <a-row>

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
                        </hide-at>

                        <show-at breakpoint="mediumAndBelow">
                            <div style="margin-top: 1rem">
                                <div style="width: 22rem">

                                    <a-tabs defaultActiveKey="46"
                                            :tabPosition="mode"

                                            @prevClick="selectstage"
                                            @nextClick="selectstage"

                                    >
                                        <!------picked tab  ------>
                                        <a-tab-pane tab="Picked" key="46">
                                            <a-list itemLayout="horizontal" :dataSource="pickedapplicants">
                                                <a-list-item slot="renderItem" slot-scope="item" key="item.title">
                                                    <div class="mobcards" style="width: 100%">
                                                        <a-row>
                                                            <a-col span="16">
                                                                <p>Name: {{item.name}} {{item.last_name}}</p>


                                                                <p> Stage:
                                                                    <a-tag v-if="item.stage === 'active'"
                                                                           color="#8BC34A"
                                                                           style="text-align: center;width: 4rem;">
                                                                        {{item.stage}}
                                                                    </a-tag>
                                                                    <a-tag v-else-if="item.stage === 'test'"
                                                                           color="#9C27B0"
                                                                           style="text-align: center;width: 4rem;">
                                                                        {{item.stage}}
                                                                    </a-tag>
                                                                    <a-tag v-else-if="item.stage === 'interview'"
                                                                           color="#FF4081"
                                                                           style="text-align: center;width: 4rem;">
                                                                        {{item.stage}}
                                                                    </a-tag>
                                                                    <a-tag v-else-if="item.stage === 'offer'"
                                                                           color="#03A9F4"
                                                                           style="text-align: center;width: 4rem;">
                                                                        {{item.stage}}
                                                                    </a-tag>
                                                                    <a-tag v-else-if="item.stage === 'pending'"
                                                                           color="#953D66"
                                                                           style="text-align: center;width: 4rem;">
                                                                        {{item.stage}}
                                                                    </a-tag>

                                                                </p>

                                                                <a-tag v-for="tag in item.tags" color="blue"
                                                                       :key="tag">{{tag}}
                                                                </a-tag>
                                                            </a-col>
                                                            <a-col span="8">
                                                                <p>
                                                                    <router-link
                                                                            style="text-decoration: none"
                                                                            :to="{name:'recommendedprofile',params:{candidateId: item.profile,jobId:job.id,}}"
                                                                            target='_blank'>
                                                                        profile
                                                                    </router-link>
                                                                </p>
                                                                <br>
                                                                <div v-if="item.stage ==='active'">
                                                                    <a-dropdown>
                                                                        <a-menu slot="overlay">
                                                                            <a-menu-item
                                                                                    @click="handleMenuClick(item.action,item.profile,1)">
                                                                                <a-icon
                                                                                        type="codepen"/>
                                                                                assign project test
                                                                            </a-menu-item>
                                                                            <a-menu-item
                                                                                    @click="handleMenuClick(item.action,item.profile,2)">
                                                                                <a-icon
                                                                                        type="calendar"/>
                                                                                interview candidate
                                                                            </a-menu-item>
                                                                            <a-menu-item
                                                                                    @click="handleMenuClick(item.action,item.profile,3)">
                                                                                <a-icon
                                                                                        type="close"/>
                                                                                reject candidate
                                                                            </a-menu-item>
                                                                        </a-menu>
                                                                        <a-button type="primary"
                                                                                  size="small"
                                                                                  style="height: 30px">
                                                                            choices
                                                                            <a-icon type="down"/>
                                                                        </a-button>
                                                                    </a-dropdown>

                                                                </div>
                                                                <div v-else>
                                                                    --

                                                                </div>

                                                            </a-col>
                                                        </a-row>
                                                    </div>


                                                </a-list-item>
                                            </a-list>
                                        </a-tab-pane>
                                        <!------new applicants tab  ------>
                                        <a-tab-pane tab="New" key="47" forceRender>
                                            <a-list itemLayout="horizontal" :dataSource="newapplicant">
                                                <a-list-item slot="renderItem" slot-scope="item" key="item.title">
                                                    <div class="mobcards" style="width: 100%">
                                                        <a-row>
                                                            <a-col span="16">
                                                                <p>Name: {{item.name}}</p>


                                                                <p> Stage:
                                                                    <a-tag color="#EA6A47"
                                                                           style="">{{item.stage}}
                                                                    </a-tag>

                                                                </p>

                                                                <a-tag v-for="tag in item.tags" color="blue"
                                                                       :key="tag">{{tag}}
                                                                </a-tag>
                                                            </a-col>
                                                            <a-col span="8">
                                                                <p>
                                                                    <router-link
                                                                            style="text-decoration: none"
                                                                            :to="{name:'recommendedprofile',params:{candidateId: item.profile,jobId:job.id,}}"
                                                                            target='_blank'>
                                                                        profile
                                                                    </router-link>
                                                                </p>
                                                                <br>
                                                                <div v-if="currentUserProfile.user.is_staff">
                                                                    <a-button-group size="small">
                                                                        <a-button
                                                                                @click="pickrejectAdmin(item.action,item.profile,true,item.name)"
                                                                                type="primary">pick
                                                                        </a-button>
                                                                        <a-button
                                                                                @click="pickrejectAdmin(item.action,item.profile,false,item.name)">
                                                                            reject
                                                                        </a-button>

                                                                    </a-button-group>

                                                                </div>

                                                                <div v-else>
                                                                    <a-button-group size="small">
                                                                        <a-button v-if="job.verified"
                                                                                  @click="pickrejectAdmin(item.action,item.profile,true,item.name)"
                                                                                  type="primary">pick
                                                                        </a-button>
                                                                        <a-button v-else
                                                                                  @click="activatejob()"
                                                                                  type="primary">pick
                                                                        </a-button>
                                                                        <a-button
                                                                                @click="onReject(item.action,item.stage,item.profile)"
                                                                        >
                                                                            reject
                                                                        </a-button>

                                                                    </a-button-group>


                                                                </div>

                                                            </a-col>
                                                        </a-row>
                                                    </div>


                                                </a-list-item>
                                            </a-list>
                                        </a-tab-pane>
                                        <!------recommended candidates  tab  ------>
                                        <a-tab-pane tab="Recommended" key="48">
                                            <a-list itemLayout="horizontal" :dataSource="recommmedcandidates"
                                                    :pagination="paginationmob">
                                                <a-list-item slot="renderItem" slot-scope="item" key="item.title">
                                                    <div class="mobcards" style="width: 100%">
                                                        <a-row>
                                                            <a-col span="18">
                                                                <p>Name: {{item.name}}</p>


                                                                <p> Stage
                                                                    <a-tag color="#1C4E80"
                                                                           style="">{{item.stage}}
                                                                    </a-tag>

                                                                </p>

                                                                <a-tag v-for="tag in item.tags" color="blue"
                                                                       :key="tag">{{tag}}
                                                                </a-tag>
                                                            </a-col>
                                                            <a-col span="6">
                                                                <p>
                                                                    <router-link
                                                                            style="text-decoration: none"
                                                                            :to="{name:'recommendedprofile',params:{candidateId: item.profile,jobId:job.id,}}"
                                                                            target='_blank'>
                                                                        profile
                                                                    </router-link>
                                                                </p>
                                                                <br>
                                                                <div v-if="currentUserProfile.user.is_staff">
                                                                    <div style="margin-left: 5%">
                                                                        <a-button :size="small"
                                                                                  @click="pickrecommedationAdmin(job.id,item.profile,2)"
                                                                                  type="primary">pick
                                                                        </a-button>


                                                                    </div>
                                                                </div>
                                                                <div v-else-if="job.published">
                                                                    <div v-if="job.verified">
                                                                        <div>
                                                                            <a-button :size="small"
                                                                                      @click="pickrecommedationAdmin(job.id,item.profile,2)"
                                                                                      type="primary">pick
                                                                            </a-button>


                                                                        </div>
                                                                    </div>
                                                                    <div v-else-if="job.verified === false">
                                                                        <div>
                                                                            <a-button :size="small"
                                                                                      @click="activatejob()"

                                                                                      type="primary">pick
                                                                            </a-button>


                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div v-else>
                                                                    ---
                                                                </div>


                                                            </a-col>
                                                        </a-row>


                                                    </div>


                                                </a-list-item>
                                            </a-list>
                                        </a-tab-pane>
                                        <!------testing  tab  ------>
                                        <a-tab-pane tab="Testing" key="49">
                                            <a-list itemLayout="horizontal" :dataSource="testingstage">
                                                <a-list-item slot="renderItem" slot-scope="item" key="item.title">
                                                    <div class="mobcards" style="width: 100%">

                                                        <a-row>
                                                            <a-col span="16">
                                                                <p>Name: {{item.name}} {{item.last_name}}</p>
                                                                <p>
                                                                    <router-link
                                                                            style="text-decoration: none"
                                                                            :to="{name:'recommendedprofile',params:{candidateId: item.profile,jobId:job.id,}}"
                                                                            target='_blank'>
                                                                        profile
                                                                    </router-link>
                                                                </p>


                                                                <a-tag v-for="tag in item.tags" color="blue"
                                                                       :key="tag">{{tag}}
                                                                </a-tag>
                                                            </a-col>
                                                            <a-col span="8">

                                                                <span v-if="item.test_stage">
                                                                        <span v-if="item.report">

                                                                <div v-if="item.report.report_ready">

                                                                    <a @click="navigateTo({name:'report',params:{candidateId: item.profile,projectId:item.project,reportId:item.report.id}})">
                                                                    report
                                                                </a>
                                                                </div>


                                                                        <span v-else>


                                                                <span v-if="item.test_stage === 'complete'">
                                                                    report generating
                                                                </span>
                                                                <span v-else>
                                                                    {{item.test_stage}}
                                                                </span>

                                                            </span>
                                                                    </span>
                                                                    </span>
                                                                <span v-else style="margin-left: 20%">
                                                                        --
                                                                    </span>
                                                                <br>
                                                                <router-link v-if="item.project"
                                                                             style="text-decoration: none"
                                                                             :to="{name:'pickedprojectdetails',params:{projectId:item.project,candidateId: item.profile,jobId:job.id,
                                                                       applicationId: item.action}}"
                                                                             target='_blank'>
                                                                    {{item.projectname}}
                                                                </router-link>


                                                                <a-button :size="small"
                                                                          style="background-color: #9c27b0;color: white"
                                                                          v-else
                                                                          @click="showModal(item.profile,item.action)">

                                                                    Assign test
                                                                </a-button>

                                                                <a-dropdown>
                                                                    <a-menu slot="overlay">


                                                                        <a-menu-item
                                                                                v-if="item.test_stage === 'complete'"
                                                                                @click="handleTestMenuClick(item.action,item.profile,2)"
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
                                                                                @click="handleTestMenuClick(item.action,item.stage,item.profile,4)">
                                                                            <a-icon
                                                                                    type="close"/>
                                                                            reject candidate
                                                                        </a-menu-item>
                                                                    </a-menu>
                                                                    <a-button type="primary" size="small"
                                                                              style="height: 30px">
                                                                        choices
                                                                        <a-icon type="down"/>
                                                                    </a-button>
                                                                </a-dropdown>


                                                            </a-col>
                                                        </a-row>
                                                    </div>


                                                </a-list-item>
                                            </a-list>
                                        </a-tab-pane>
                                        <!------interview tab  ------>
                                        <a-tab-pane tab="Interview" key="50">
                                            <a-list itemLayout="horizontal" :dataSource="interviewstage">
                                                <a-list-item slot="renderItem" slot-scope="item" key="item.title">
                                                    <div class="mobcards" style="width: 100%">

                                                        <a-row>
                                                            <a-col span="16">
                                                                <p>Name: {{item.name}} {{item.last_name}}</p>
                                                                <p>
                                                                    <router-link
                                                                            style="text-decoration: none"
                                                                            :to="{name:'recommendedprofile',params:{candidateId: item.profile,jobId:job.id,}}"
                                                                            target='_blank'>
                                                                        profile
                                                                    </router-link>
                                                                </p>


                                                                <a-tag v-for="tag in item.tags" color="blue"
                                                                       :key="tag">{{tag}}
                                                                </a-tag>
                                                            </a-col>
                                                            <a-col span="8">
                                                                <!-----interview schedule--------->
                                                                <div v-if="item.interviewstatus === 'deleted'"
                                                                     style="margin-left: 7%">
                                                                    <a-button :size="small"
                                                                              style="background-color: #673AB7;color: white"
                                                                              @click="onEventCreate(item.action,item.name)">
                                                                        <a-icon type="calendar"/>
                                                                        create
                                                                    </a-button>
                                                                </div>
                                                                <div v-else-if="item.interviewstatus === 'cancelled'"
                                                                     style="margin-left: 7%">
                                                                    <a-button :size="small"
                                                                              style="background-color: #673AB7;color: white"
                                                                              @click="onEventCreate(item.action,item.name)">
                                                                        <a-icon type="calendar"/>
                                                                        create
                                                                    </a-button>
                                                                </div>
                                                                <div v-else-if="item.interviewstatus === null"
                                                                     style="margin-left: 7%">
                                                                    <a-button :size="small"
                                                                              style="background-color: #673AB7;color: white"
                                                                              @click="onEventCreate(item.action,item.name)">
                                                                        <a-icon type="calendar"/>
                                                                        create
                                                                    </a-button>
                                                                </div>
                                                                <span v-else style="margin-left: 12%;">
                                                                    <a-button type="primary" ghost size="small"
                                                                              @click="onEventClick(item.action,item.name,item.interviewstart,item.interviewend,item.color)">
                                                                        view
                                                                    </a-button>


                                                                </span>

                                                                <!-----interview status--------->
                                                                <div style="text-align: center">
                                                                    <span v-if="item.interviewstatus">
                                                                        {{item.interviewstatus}}
                                                                    </span>
                                                                    <span v-else>
                                                                    ---
                                                                </span>
                                                                </div>


                                                                <a-dropdown>
                                                                    <a-menu slot="overlay">


                                                                        <a-menu-item
                                                                                @click="handleInterviewClick(item.action,item.profile,2)">
                                                                            <a-icon
                                                                                    type="like"/>
                                                                            make offer
                                                                        </a-menu-item>
                                                                        <a-menu-item
                                                                                @click="handleInterviewClick(item.action,item.profile,3)">
                                                                            <a-icon
                                                                                    type="close"/>
                                                                            reject candidate
                                                                        </a-menu-item>
                                                                    </a-menu>
                                                                    <a-button type="primary" size="small"
                                                                              style="height: 30px">
                                                                        choices
                                                                        <a-icon type="down"/>
                                                                    </a-button>
                                                                </a-dropdown>


                                                            </a-col>
                                                        </a-row>
                                                    </div>


                                                </a-list-item>
                                            </a-list>
                                        </a-tab-pane>
                                        <!------edit job tab  ------>
                                        <a-tab-pane tab="Edit Job" key="51">
                                            <div style="padding-left: 4%;padding-right: 4%;padding-bottom: 4%">
                                                <a-form :form="form"
                                                        @submit="handleSubmit">
                                                    <a-row :gutter="16">
                                                        <a-col :xs="{span: 12, offset: 0 }" :sm="{span: 12, offset: 0 }"
                                                               :md="{span: 12, offset: 0 }"
                                                               :lg="{span: 8, offset: 0 }" :xl="{span: 8,offset: 0 }">
                                                            <a-form-item label="Title">
                                                                <a-input v-model="job.title">

                                                                </a-input>
                                                            </a-form-item>
                                                        </a-col>
                                                        <a-col :xs="{span: 12, offset: 0 }" :sm="{span: 12, offset: 0 }"
                                                               :md="{span: 12, offset: 0 }"
                                                               :lg="{span: 8, offset: 0 }" :xl="{span: 8,offset: 0 }">
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
                                                        <a-col :xs="{span: 12, offset: 0 }" :sm="{span: 12, offset: 0 }"
                                                               :md="{span: 12, offset: 0 }"
                                                               :lg="{span: 8, offset: 0 }" :xl="{span: 8,offset: 0 }">
                                                            <a-form-item label="Experience">
                                                              <a-select
                                                                  placeholder="Select a option"
                                                                  v-model="job.years_experience"
                                                              >

                                                                <a-select-option value="0-1">
                                                                  0-1
                                                                </a-select-option>
                                                                <a-select-option value="1-3">
                                                                  1-3
                                                                </a-select-option>
                                                                <a-select-option value="3-above">
                                                                  3-above
                                                                </a-select-option>

                                                              </a-select>
                                                            </a-form-item>

                                                        </a-col>
                                                        <a-col :xs="{span: 12, offset: 0 }" :sm="{span: 12, offset: 0 }"
                                                               :md="{span: 12, offset: 0 }"
                                                               :lg="{span: 8, offset: 0 }" :xl="{span: 8,offset: 0 }">
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
                                                        <a-col :xs="{span: 12, offset: 0 }" :sm="{span: 12, offset: 0 }"
                                                               :md="{span: 12, offset: 0 }"
                                                               :lg="{span: 8, offset: 0 }" :xl="{span: 8,offset: 0 }">
                                                            <a-form-item>
                                                                <span>Location : {{job.location}}</span>
                                                                <country-select v-model="job.location"
                                                                                class="ant-input"
                                                                />
                                                            </a-form-item>

                                                        </a-col>
                                                        <a-col :xs="{span: 12, offset: 0 }" :sm="{span: 12, offset: 0 }"
                                                               :md="{span: 12, offset: 0 }"
                                                               :lg="{span: 8, offset: 0 }" :xl="{span: 8,offset: 0 }">
                                                            <a-form-item label="Salary range ">
                                                                <a-input v-model="job.remuneration">

                                                                </a-input>
                                                            </a-form-item>

                                                        </a-col>
                                                        <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                                                               :md="{span: 24, offset: 0 }"
                                                               :lg="{span: 12, offset: 0 }" :xl="{span: 12,offset: 0 }">
                                                            <a-form-item
                                                                    label="Which tech skills are you looking for? "

                                                            >
                                                                <template v-for="(tag, index) in tags">
                                                                    <a-tooltip v-if="tag.length > 20" :key="tag"
                                                                               :title="tag">
                                                                        <a-tag :key="tag"
                                                                               :afterClose="() => handleClose(tag)"
                                                                               color="#2db7f5">
                                                                            {{`${tag.slice(0, 20)}...`}}
                                                                        </a-tag>
                                                                    </a-tooltip>
                                                                    <a-tag v-else :key="tag" :closable="index >= 0"
                                                                           :afterClose="() => handleClose(tag)"
                                                                           color="#2db7f5">
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
                                                        <a-col :xs="{span: 12, offset: 0 }" :sm="{span: 12, offset: 0 }"
                                                               :md="{span: 12, offset: 0 }"
                                                               :lg="{span: 12, offset: 0 }" :xl="{span: 12,offset: 0 }">
                                                            <a-form-item :label="deadlineformated">

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
                                                                <vue-simplemde v-model="job.description"
                                                                               ref="markdownEditor"/>


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
                                        <!------rejected tab  ------>
                                        <a-tab-pane tab="Rejected" key="52">
                                            <a-list itemLayout="horizontal" :dataSource="rejectedcandidateslist">
                                                <a-list-item slot="renderItem" slot-scope="item" key="item.title">
                                                    <div class="mobcards" style="width: 100%">
                                                        <a-row>
                                                            <a-col span="18">
                                                                <p>Name: {{item.name}}</p>


                                                                <p> Stage:
                                                                    <a-tag color="#1C4E80"
                                                                           style="">{{item.stage}}
                                                                    </a-tag>

                                                                </p>

                                                                <a-tag v-for="tag in item.tags" color="blue"
                                                                       :key="tag">{{tag}}
                                                                </a-tag>
                                                            </a-col>
                                                            <a-col span="6">
                                                                <p>
                                                                    <router-link
                                                                            style="text-decoration: none"
                                                                            :to="{name:'recommendedprofile',params:{candidateId: item.profile,jobId:job.id,}}"
                                                                            target='_blank'>
                                                                        profile
                                                                    </router-link>
                                                                </p>


                                                            </a-col>
                                                        </a-row>
                                                    </div>


                                                </a-list-item>
                                            </a-list>
                                        </a-tab-pane>
                                    </a-tabs>
                                </div>


                            </div>

                        </show-at>


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
                            <a-col :span="8">
                                <a @click="navigateTo({name:'projectlist',params:{jobId:job.id,applicationId:applicationid}})">
                                    <div style="border: 1px solid #e8e8e8;padding: 2%;">
                                        <img style="margin-left: 25%;width: 50%;margin-right: 25%"
                                             src="../../../../assets/images/pick.png">
                                        <p style="text-align: center">Pick one by myself</p>

                                    </div>

                                </a>
                            </a-col>
                            <a-col :span="8">
                                <a @click="navigateTo({name:'projectdetails',params:{jobId:job.id,candidateId: candidate,applicationId:applicationid}})">
                                    <div style="border: 1px solid #e8e8e8;padding: 2%;">
                                        <img style="margin-left: 25%;width: 50%;margin-right: 25%;"
                                             src="../../../../assets/images/recommend.png">
                                        <p style="text-align: center">Get recommendation</p>


                                    </div>

                                </a>
                            </a-col>
                            <a-col :span="8">
                                <a href="mailto:info@codeln.com" target="_top">
                                    <div style="border: 1px solid #e8e8e8;padding: 2%;">
                                        <img style="margin-left: 25%;width: 50%;margin-right: 25%;"
                                             src="../../../../assets/images/custom.png">
                                        <p style="text-align: center">Custom test</p>


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

                    <!-----add interview notes modal----->
                    <a-modal title="Add a note" v-model="addnotemodal">
                        <template slot="footer">


                            <a-button key="submit"
                                      type="primary" :loading="notesubmission" @click="Notesubmit(note_id)">
                                Submit
                            </a-button>

                        </template>
                        <a-textarea v-model="interviewnotes"

                                    :autoSize="{ minRows: 2, maxRows: 6 }"
                        />


                    </a-modal>

                    <!-----edit interview notes modal----->
                    <a-modal title="Edit note" v-model="editnotemodal">
                        <template slot="footer">


                            <a-button key="submit"
                                      type="primary" :loading="notesubmission" @click="Notesubmit(note_id)">
                                Submit
                            </a-button>

                        </template>
                        <a-textarea v-model="interviewnotes"

                                    :autoSize="{ minRows: 2, maxRows: 6 }"
                        />

                    </a-modal>

                    <!-----reject candidate reason modal----->
                    <a-modal title="Rejection reasons" v-model="rejectionmodal">
                        <template slot="footer">
                            <a-button key="submit" v-if="rejectionstage === 'new' "
                                      type="primary" :loading="rejectsubmit"
                                      @click="pickrejectAdmin(rejectioninstance,rejectionprofile,false)"


                            >

                                Submit
                            </a-button>


                            <a-button key="submit" v-if="rejectionstage === 'interview'"
                                      type="primary" :loading="rejectsubmit"
                                      @click="handleInterviewClick(rejectioninstance,rejectionprofile,3)">
                                Submit
                            </a-button>
                            <a-button key="submit" v-if="rejectionstage === 'offer'"
                                      type="primary" :loading="rejectsubmit"
                                      @click="pickrejectClick(rejectioninstance,rejectionprofile,false)">

                                Submit
                            </a-button>
                            <a-button key="submit" v-if="rejectionstage === 'test'"
                                      type="primary" :loading="rejectsubmit"
                                      @click="handleTestMenuClick(rejectioninstance,rejectionprofile,4)"
                            >

                                Submit
                            </a-button>
                            <a-button key="submit" v-if="rejectionstage === 'active'"
                                      type="primary" :loading="rejectsubmit"
                                      @click="handleMenuClick(rejectioninstance,rejectionprofile,3)"

                            >

                                Submit
                            </a-button>


                        </template>

                        <a-checkbox-group @change="onPickReason">
                            <a-row>
                                <div v-for="reason in reasonslist" v-bind:key="reason">
                                    <a-col :span="24">
                                        <a-checkbox :value="reason">{{reason}}</a-checkbox>
                                    </a-col>
                                </div>


                            </a-row>

                        </a-checkbox-group>
                        <div>


                            <p>got a specific reason</p>
                            <a-textarea v-model="reasoncomment"

                                        :autoSize="{ minRows: 2, maxRows: 6 }"
                            />

                        </div>


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
    import {showAt, hideAt} from 'vue-breakpoints'

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
            dataIndex: 'notes',
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
        {
            title: 'Application date',
            dataIndex: 'created',
            key: 'created',

        },

    ];


    //applicants structure on table
    class Applicant {
        constructor(id, name, stage, tags, user_id, selected, pk, test_stage, project, projectname, status, start,
                    end, color, report, offerstatus, offerletter, carted, verified, last_name, notes, created) {
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
            this.notes = notes
            this.created = created


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
                rejectedcandidateslist: [],
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
                rejectedcandidates: false,
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
                amount: 0,
                mount: 100,
                paystack_amount: 0,
                currency: "USD",
                cart: [],
                cart_items: [],
                pickedprofiles: [],
                updated: false,
                adminmodewarning: '',
                recommend_id: [],
                steps: [
                    {
                        target: '.v-step-0',
                        content: 'You can pick or reject applications from the “new applicants” tab.  Note that candidates with a tick are candidates that we have pre-verified. ' +
                            'You can also invite candidates to apply by picking from the “recommended candidates” tab. Manage all picked candidates from the “picked candidates” tab.' +
                            ' Take action by clicking the “choices” button to move active candidates to the test or interview stage.',
                        params: {
                            placement: 'bottom',
                            enableScrolling: false

                        }
                    },
                    {
                        target: '.v-step-1',
                        content: 'Here you see only candidates you have chosen to test. Click on the “Assign test” button to assign them a test from our library. ' +
                            'Note that our tests are project-based tests and take about 3 hours for candidates to complete. You can pick a test by yourself or get a' +
                            ' recommendation based on your job. Once the candidate is done with the project test,' +
                            ' you will receive a report on their performance. You can choose to move them to the next stage.',
                        params: {
                            placement: 'bottom',
                            enableScrolling: false

                        }
                    },
                    {
                        target: '.v-step-2',
                        content: 'Here you see only candidates you have chosen to interview. Click on the ‘Create” button to invite the candidate for an interview, ' +
                            'select time and date and save. Once the candidate accepts, ' +
                            'the event will drop under your calendar. After the interview, click the “Choices” button for the next action.',
                        params: {
                            placement: 'bottom',
                            enableScrolling: false

                        }
                    },
                    {
                        target: '.v-step-3',
                        content: 'At this stage, you can easily upload an offer letter for the candidate to see. If they accept or reject, it will be reflected.\n',
                        params: {
                            placement: 'bottom',
                            enableScrolling: false

                        }

                    }
                ],
                deadlineformated: '',
                customStyle:
                    'background: #f0f6fd;border-radius: 4px;margin-bottom: 24px;border: 0;overflow: hidden',
                mode: 'top',
                paginationmob: {
                    onChange: page => {
                        console.log(page);
                    },
                    pageSize: 10,
                },
                addnotemodal: false,
                editnotemodal: false,
                interviewnotes: '',
                note_id: '',
                notesubmission: false,
                rejectionmodal: false,
                reasonslist: ['Unaffordable salary expectations', 'Sloppy application', 'Wrong skill set', 'Unsuitable personality', 'Bad fit',
                    'Not on time', 'Sloppy appearance', 'Lack of passion', 'Poor follow-up questions', 'Not responsive', 'Co-workers don’t approve', 'not enough experience'],
                reasonspicked: [],
                reasoncomment: '',
                rejectionstage: '',
                rejectioninstance: '',
                rejectionprofile: '',
                stagekey: '',
                rejectsubmit: false,
                jobverification: '',
                activatejobmodal: false


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
            VueSimplemde, markdown, paystack,
            showAt, hideAt


        },
        async mounted() {
            moment


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
                this.alldevsprofile = (await UsersService.devs(auth)).data;


                const jobId = this.$store.state.route.params.jobId
                // current job
                this.job = (await Marketplace.specificjob(jobId, auth)).data
                this.adminmodewarning = 'Admin mode this job is posted by' + ' ' + this.job.company + '.Dont move candidates if you not assigned as their account manager'
                this.jobverification = 'Hello to activate the tracking system  and move candidates around.\n Click on the Make Payment button belwo.This is set to enable you to pay the commission discussed with you by your account manger.\n Commission amount:' + ' ' + this.job.commission
                this.deadlineformated = moment(this.job.deadline).format("YYYY-MM-DD")
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
                    let notes = ''
                    if (this.applicants[j].notes) {
                        notes = this.applicants[j].notes
                    }

                    let status = this.applicants[j].interviewstatus
                    let start = this.applicants[j].interviewstarttime
                    let end = this.applicants[j].interviewendtime
                    let color = this.applicants[j].eventcolor
                    let report = this.applicants[j].report
                    let offerstatus = this.applicants[j].offerstatus
                    let offerletter = this.applicants[j].offerletter
                    let carted = this.applicants[j].carted
                    let created = moment(this.applicants[j].created).format("YYYY-MM-DD HH:mm")
                    let onepickeddev = new Applicant(
                        id, name, stage, tags, user_id, selected, pk, test_stage, project, projectname, status, start,
                        end, color, report, offerstatus, offerletter, carted, verified, last_name, notes, created
                    );

                    this.applicantprofile.push(onepickeddev)


                }


                // applicants sorting
                for (let i = 0; i < this.applicantprofile.length; i++) {
                    if (this.applicantprofile[i].selected === false && this.applicantprofile[i].stage !== 'rejected') {
                        this.newapplicant.push(this.applicantprofile[i])
                    } else if (this.applicantprofile[i].selected) {
                        this.pickedapplicants.push(this.applicantprofile[i])

                    } else if (this.applicantprofile[i].stage === 'rejected') {
                        this.rejectedcandidateslist.push(this.applicantprofile[i])

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
                                this.recommend_id.push(this.alldevsprofile[l].user.email)

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
                this.$store.dispatch('setRecommend', this.recommend_id)


                // applicants tabs conditional render remains true as per state if length of applicants respectively is greater than one
                if (this.pickedapplicants.length > 0) {
                    this.active = true

                } else if (this.newapplicant.length > 0) {
                    this.newapplications = true

                } else if (this.recommmedcandidates.length > 0) {
                    this.recommended = true

                }
                if (this.rejectedcandidateslist.length > 0) {
                    this.rejectedcandidates = true

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
            },
            topaycommission() {
                return this.job.commission * 100
            },

        },
        methods: {

            selectstage(val) {
                console.log(val);
            },
            moment,
            // tour section
            tor() {
                this.$tours['demo'].start()
            },
            tabscroller(val) {
                console.log(val);
            },
            onNoteCreate(application) {
                this.note_id = application
                this.addnotemodal = true


            },
            onReject(application, stage, profile, key) {
                if (key !== null) {
                    this.stagekey = key
                }
                this.rejectionprofile = profile
                this.rejectioninstance = application
                this.rejectionstage = stage
                this.rejectionmodal = true


            },
            onPickReason(checkedValues) {
                this.reasonspicked = checkedValues

            },

            onNoteEdit(application, notes) {
                this.note_id = application
                this.interviewnotes = notes
                this.editnotemodal = true


            },

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
                this.deadlineformated = moment(date).format("YYYY-MM-DD")

                this.deadline = date
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
            //  accepts terms for job verify new methodolgy
            Verifyterms: async function () {

                try {
                    const auth = {
                        headers: {Authorization: 'JWT ' + this.$store.state.token}

                    }
                    this.job.terms = true
                    Marketplace.updatejob(this.job.id, {terms: true}, auth)
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
                this.rejectsubmit = true
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

                            Marketplace.pickreject(action, {
                                stage: 'rejected',
                                selected: false,
                                rejectionreason: this.reasonspicked.join(','),
                                rejectioncomment: this.reasoncomment
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
                                    Marketplace.rejectionemail(action, auth)
                                        .then()
                                    return resp
                                })
                                .catch()

                        }
                    }

                }
                this.rejectsubmit = false
                this.rejectionmodal = false
            }
            ,

            // handles movement on the testing stage keys 1,2,3
            handleTestMenuClick(action, profile, id) {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                this.waiting = true
                this.rejectsubmit = true
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

                            Marketplace.pickreject(action, {
                                stage: 'rejected',
                                selected: false,
                                rejectionreason: this.reasonspicked.join(','),
                                rejectioncomment: this.reasoncomment
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
                                    Marketplace.rejectionemail(action, auth)
                                        .then()
                                    return resp
                                })
                                .catch()

                        }
                    }

                }
                this.rejectsubmit = false
                this.rejectionmodal = false


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

                            Marketplace.pickreject(action, {
                                stage: 'rejected', selected: false,
                                rejectionreason: this.reasonspicked.join(','), rejectioncomment: this.reasoncomment
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
                                    Marketplace.rejectionemail(action, auth)
                                        .then()
                                    return resp
                                })
                                .catch()

                        }
                    }

                }

                this.rejectionmodal = false


            }
            ,

            //pick or reject from new applicants
            pickrejectClick(job_id, candidate_id, key, name) {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                this.waiting = true
                this.rejectsubmit = true
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
                                rejectionreason: this.reasonspicked.join(','),
                                rejectioncomment: this.reasoncomment

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
                                    Marketplace.rejectionemail(job_id, auth)
                                        .then()
                                    return resp
                                })
                                .catch()


                        }
                    }
                }
                this.rejectsubmit = false
                this.rejectionmodal = false


            }
            ,

            //pick or reject from new applicants(admin actions)
            pickrejectAdmin(job_id, candidate_id, key, name) {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                this.waiting = true
                this.rejectsubmit = true
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
                                        Marketplace.pickedcandidateemail(job_id, auth)
                                            .then()
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
                                    Marketplace.rejectionemail(job_id, auth)
                                        .then()
                                    return resp
                                })
                                .catch()


                        }
                    }
                }
                this.rejectionmodal = false
                this.rejectsubmit = false


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
                        let created = moment(this.applicants[j].created).format("YYYY-MM-DD HH:mm")
                        let onepickeddev = new Applicant(
                            id, name, stage, tags, user_id, selected, pk, test_stage, project, projectname, status, start,
                            end, color, report, offerstatus, offerletter, carted, created
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
            callbackjobverified: function (response) {
                if (response.status === 'success') {
                    try {
                        const auth = {
                            headers: {Authorization: 'JWT ' + this.$store.state.token}

                        }
                        this.job.verified = true
                        this.job.transaction_id = response.trxref,

                            Marketplace.updatejob(this.job.id, this.job, auth)
                                .then()


                    } catch
                        (error) {
                        this.error = error.response.data.error

                    }


                }


            }
            ,
            close: function () {
                console.log("Payment closed")
            }
            ,
            Notesubmit(application) {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                this.notesubmission = true


                Marketplace.pickreject(application, {
                    notes: this.interviewnotes,

                }, auth)
                    .then(resp => {
                            for (let i = 0; i < this.interviewstage.length; i++) {
                                if (this.interviewstage[i].key === application) {
                                    this.interviewstage[i].notes = this.interviewnotes


                                }
                            }
                            return resp

                        }
                    )
                    .catch()
                this.notesubmission = false
                this.editnotemodal = false
                this.addnotemodal = false

            },
            activatejob() {
                this.activatejobmodal = true
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

    .mobcards {
        padding: 1rem !important;
        box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;
        border: 1px solid rgba(0, 0, 0, .125);


        border-radius: .25rem !important;

    }

</style>
