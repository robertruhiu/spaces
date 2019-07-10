<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
        <RecruiterSider/>


        <a-layout>

            <a-layout-content>
                <a-layout-header
                        :style="{ position: 'fixed', zIndex: 1, width: '100%',backgroundColor:'#004ec7',minHeight:'100px' }">
                    <a-row>
                        <a-col :span="20">
                            <span>
                                <span style="color: white;line-height: 13px;font-size: 17px;font-weight:bold;margin-top: 15%">
                                {{job.title}}</span>
                                <span style="float: right">
                                    <a-button type="primary">Unpublish Job</a-button>
                                </span>
                            </span>

                            <p style="color: white;font-size: 12px;font-weight: bold;line-height: 0;">
                                <a-icon type="environment"/>
                                {{job.location}}
                            </p>

                        </a-col>


                    </a-row>


                </a-layout-header>


                <div :style="{ padding: '3px 20px', background: '#fff', minHeight: '80vh',marginTop:'6rem' }">
                    <div style="padding-top: 1%;">
                        <a-tabs defaultActiveKey="1" type="card"
                                style="z-index: 0;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
                            <a-tab-pane  key="1">
                                <span slot="tab">
                                    <a-icon type="usergroup-add" />
                                    Applicants
                                </span>
                                <a-row :gutter="16">

                                    <a-col :span="24"
                                           style="padding-bottom: 1%;padding-right: 2%">
                                        <a-tabs defaultActiveKey="1" tabPosition=left style="z-index: 0;">
                                            <a-tab-pane key="1">
                                            <span slot="tab">

                                                All Applicants
                                            </span>
                                                <a-tabs defaultActiveKey="1" style="z-index: 0;">


                                                    <a-tab-pane v-if="pickeddevs" tab="Active" key="1">

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
                                                            <a @click="navigateTo({name:'candidateprofile',params:{candidateID: record.profile}})">profile</a>
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
                                                            <a-tag v-if="record.stage === 'new'"
                                                                   color="#0679fb"
                                                                   style="text-align: center;width: 5rem;">{{record.stage}}</a-tag>
                                                    <a-tag v-else-if="record.stage === 'test'" color="#403A56"
                                                           style="text-align: center;width: 5rem;">{{record.stage}}</a-tag>
                                                    <a-tag v-else-if="record.stage === 'interview'" color="#FE55F2"
                                                           style="text-align: center;width: 5rem;">{{record.stage}}</a-tag>
                                                            <a-tag v-else-if="record.stage === 'offer'"
                                                                   color="#FF7E3F"
                                                                   style="text-align: center;width: 5rem;">{{record.stage}}</a-tag>
                                                        </span>
                                                                </template>

                                                            </a-table-column>
                                                            <a-table-column
                                                                    title="Action"
                                                                    width="10%"


                                                            >
                                                    <span slot-scope="action">
                                                    <a-dropdown>
                                                        <a-menu slot="overlay" @click="handleMenuClick">
                                                            <a-menu-item key="1"><a-icon
                                                                    type="user"/>1st menu item</a-menu-item>
                                                            <a-menu-item key="2"><a-icon
                                                                    type="user"/>2nd menu item</a-menu-item>
                                                            <a-menu-item key="3"><a-icon
                                                                    type="user"/>3rd item</a-menu-item>
                                                        </a-menu>
                                                        <a-button type="primary" style="height: 30px">
                                                            Button <a-icon type="down"/>
                                                        </a-button>
                                                    </a-dropdown>

                                                </span>
                                                            </a-table-column>


                                                        </a-table>
                                                    </a-tab-pane>
                                                    <a-tab-pane tab="New Applicants" key="2">

                                                        {{newapplicant}}
                                                    </a-tab-pane>
                                                    <a-tab-pane tab="Recommended Candidates" key="3">Content of Tab Pane
                                                        3
                                                    </a-tab-pane>
                                                </a-tabs>
                                            </a-tab-pane>

                                            <!------test stage ------>
                                            <a-tab-pane key="2">
                                            <span slot="tab">

                                                Coding test
                                            </span>
                                                {{testingstage}}
                                            </a-tab-pane>
                                            <!------interview stage ------>


                                            <a-tab-pane key="3">
                                            <span slot="tab">

                                                Interview
                                            </span>
                                                {{interviewstage}}
                                            </a-tab-pane>

                                            <!------offers stage ------>
                                            <a-tab-pane key="4">
                                            <span slot="tab">

                                                Offers
                                            </span>
                                                {{offerstage}}
                                            </a-tab-pane>

                                            <!------hires stage ------>
                                            <a-tab-pane key="5">
                                            <span slot="tab">

                                                Hires
                                            </span>
                                                {{offerstage}}
                                            </a-tab-pane>
                                        </a-tabs>

                                    </a-col>

                                </a-row>
                            </a-tab-pane>


                            <a-tab-pane  key="2" forceRender>
                                <span slot="tab">
                                    <a-icon type="profile" />
                                    Job Details
                                </span>
                                details
                            </a-tab-pane>


                            <a-tab-pane  key="3">
                               <span slot="tab">
                                    <a-icon type="calendar"/>
                                    Calendar
                                </span>
                            </a-tab-pane>
                        </a-tabs>
                    </div>


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
            key: 'action',
            scopedSlots: {customRender: 'action'},
        }];


    class Applicant {
        constructor(id, name, stage, tags, user_id) {
            this.key = id;
            this.name = name;
            this.stage = stage;
            this.profile = user_id;
            this.tags = tags


        }
    }

    import UsersService from '@/services/UsersService'
    import ACol from "ant-design-vue/es/grid/Col";
    import ARow from "ant-design-vue/es/grid/Row";
    import Marketplace from '@/services/Marketplace'
    import Pageheader from '@/components/layout/Pageheader'
    import RecruiterSider from "../../layout/RecruiterSider";


    export default {
        name: "job",
        data() {
            return {
                currentUserProfile: null,

                job: {},
                alldevs: null,
                alldevsprofile: null,
                columns,
                pickeddevs: true,
                applicants: [],
                newapplicant: [],
                pickedapplicants: [],
                interviewstage: [],
                testingstage: [],
                offerstage: [],


            }
        },
        components: {
            ARow,
            ACol,
            Pageheader,
            RecruiterSider,


        },
        async mounted() {

            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}

            }
            this.currentUserProfile = (await UsersService.currentuser(this.$store.state.user.pk, auth)).data
            this.alldevsprofile = (await UsersService.devs()).data;
            this.alldevs = (await UsersService.allusers()).data;
            const jobId = this.$store.state.route.params.jobId
            this.job = (await Marketplace.specificjob(jobId, auth)).data
            this.applicants = (await Marketplace.specificjobapplicants(jobId, auth)).data
            if (this.applicants.length === 0) {
                this.pickeddevs = false
            }
            for (let i = 0; i < this.applicants.length; i++) {
                if (this.applicants[i].selected === false) {
                    this.newapplicant.push(this.applicants[i])
                }
                if (this.applicants[i].stage === 'interview') {
                    this.interviewstage.push(this.applicants[i])
                }
                if (this.applicants[i].stage === 'test') {
                    this.testingstage.push(this.applicants[i])
                }
                if (this.applicants[i].stage === 'offer') {
                    this.offerstage.push(this.applicants[i])
                }

            }


            for (let i = 0; i < this.alldevs.length; i++) {
                for (let j = 0; j < this.applicants.length; j++) {
                    for (let l = 0; l < this.alldevsprofile.length; l++) {
                        if (this.alldevs[i].id === this.applicants[j].candidate && this.alldevsprofile[l].user === this.alldevs[i].id && this.applicants[j].selected) {
                            let tags = this.alldevsprofile[l].skills.split(',');
                            let stage = this.applicants[j].stage
                            let id = this.applicants[j].id
                            let user_id = this.applicants[j].candidate
                            let name = this.alldevs[i].username
                            let onepickeddev = new Applicant(
                                id, name, stage, tags, user_id
                            )
                            this.pickedapplicants.push(onepickeddev)


                        }
                    }


                }


            }


        },
        methods: {
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
            handleMenuClick(e) {
                console.log('click', e);
            },
            navigateTo(route) {
                this.$router.push(route)
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
