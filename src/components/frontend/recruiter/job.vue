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
                                                            <a-tag v-if="record.stage === 'new'"
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
                                                        <a-tab-pane v-if="newapplicant.length > 0" tab="New Applicants"
                                                                    key="2">

                                                            <a-tag color="#F0F6FD" style="color:#007BFF;">hio</a-tag>


                                                        </a-tab-pane>
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
    import Jobheader from '@/components/layout/Jobheader'
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
                skills: [],
                tags: [],
                selectedTags: [],
                inputVisible: false,
                inputValue: '',



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

            }
            this.currentUserProfile = (await UsersService.currentuser(this.$store.state.user.pk, auth)).data
            this.alldevsprofile = (await UsersService.devs()).data;
            this.alldevs = (await UsersService.allusers()).data;
            const jobId = this.$store.state.route.params.jobId
            this.job = (await Marketplace.specificjob(jobId, auth)).data
            this.skills = this.job.tech_stack.split(',')
            let temptaglist = this.job.tech_stack;

            let array = temptaglist.replace(/'/g, '').replace(/ /g, '').split(',');

            this.tags = array
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
            handleMenuClick(e) {
                console.log('click', e);
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
