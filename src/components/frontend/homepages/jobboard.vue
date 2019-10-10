<template>
    <a-layout :style="{background:'#fff'}">
        <pageheader></pageheader>
        <a-layout-content :style="{ padding: '0 0px' }">

            <div>
                <a-row style="background-color:#004ec7;position: fixed;width: 100%;z-index: 1;margin-top: 4rem;padding-bottom: 1rem ">
                    <hide-at breakpoint="mediumAndBelow">
                        <a-col span="4">
                            <h3 style="color: white;font-size: 1.5rem;padding-left: 4rem;padding-top: 1rem;">Job
                                board</h3>
                        </a-col>
                    </hide-at>

                    <a-col :xs="{span: 20, offset: 4 }" :sm="{span: 20, offset: 4 }" :md="{span: 20, offset: 4 }"
                           :lg="{span: 20, offset: 0 }" :xl="{span: 20, offset: 0 }">

                        <div style="padding-top: 2rem;" class='center'>

                            <a-auto-complete
                                    :dataSource="dataSource"
                                    style="width: 80%;z-index: 0"
                                    placeholder="Search skills like react,javascript,vue python"
                                    :filterOption="filterOption"
                                    v-model="search"


                            >

                                <a-input>
                                    <a-icon slot="suffix" type="search" class="certain-category-icon"/>
                                </a-input>
                            </a-auto-complete>


                            <span>



                            </span>


                        </div>
                    </a-col>

                </a-row>
            </div>

            <div style="margin-top: 10rem;padding-bottom: 1rem">
                <a-row>

                    <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0}" :md="{span: 16, offset: 4 }"
                           :lg="{span: 16, offset: 4 }" :xl="{span: 16, offset: 4 }">
                        <div v-if="loading" class="loading" style="text-align: center;min-height: 40vh">
                            <a-spin size="large"/>
                        </div>

                        <div v-else>
                            <a-list
                                    itemLayout="vertical"
                                    size="large"
                                    :pagination="pagination"
                                    :dataSource="filteredList"

                            >

                                <a-list-item
                                        slot="renderItem" slot-scope="item" key="item.title">


                                    <hide-at breakpoint="mediumAndBelow">

                                        <a-row style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);height: 9rem">
                                            <a-col span="4" style="background-color:#0679FB;height: 100% ">
                                                <p class="jobtitle">{{item.title}}</p>


                                            </a-col>
                                            <a-col span="15" style="padding: 2%">

                                                <p>Job Description</p>
                                                <p>{{item.description | truncate(100)}}<a
                                                        @click="navigateTo({name:'jobdetails',params:{jobId: item.id}})">read
                                                    more</a>
                                                </p>

                                                <p>
                                                    Skills looking for :
                                                    <span style="" v-for="skill in item.skills" v-bind:key="skill.id">
                                                <a-tag color="#F0F6FD" style="color:#007BFF;">{{skill}}</a-tag>

                                            </span>
                                                </p>


                                            </a-col>
                                            <a-col span="5">
                                                <div style="padding-top: 1rem;">

                                                    <a-tag color="#F0F6FD" style='color: #007BFF'>
                                                        <a-icon type="environment"/>
                                                        {{item.location}}
                                                    </a-tag>



                                                </div>
                                                <div style="margin-top: 2rem">
                                                    <a-button type="primary" ghost
                                                              @click="navigateTo({name:'jobdetails',params:{jobId: item.id}})">
                                                        View details
                                                    </a-button>
                                                </div>


                                            </a-col>


                                        </a-row>


                                    </hide-at>

                                    <show-at breakpoint="mediumAndBelow">
                                        <div style="padding: 2%">
                                            <a-row class="lightshadow" style="height: 13rem;padding: 3%">

                                                <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                                                       :md="{span: 24, offset: 0 }"
                                                       :lg="{span: 15, offset: 0 }" :xl="{span: 15, offset: 0 }"
                                                       style="padding: 2%">
                                                    <span><strong>{{item.title}} |  {{item.location}}</strong></span>
                                                    <p>{{item.description | truncate(100)}}<a
                                                            @click="navigateTo({name:'jobdetails',params:{jobId: item.id}})">read
                                                        more</a>
                                                    </p>

                                                    <p>
                                                        Skills :
                                                        <span style="" v-for="skill in  item.skills.slice(0,3)"
                                                              v-bind:key="skill.id">
                                                <a-tag color="#F0F6FD" style="color:#007BFF;">{{skill}}</a-tag>

                                            </span>
                                                    </p>

                                                    <div style="margin-bottom: 1%;text-align: center">
                                                        <a-button type="primary" ghost
                                                                  @click="navigateTo({name:'jobdetails',params:{jobId: item.id}})">
                                                            View details
                                                        </a-button>
                                                    </div>


                                                </a-col>


                                            </a-row>
                                        </div>


                                    </show-at>


                                </a-list-item>
                            </a-list>
                        </div>


                    </a-col>
                </a-row>
            </div>


        </a-layout-content>
        <Footer/>
    </a-layout>

</template>

<script>
    class Job {
        constructor(id, title, deadline, location, contract, skills, description, company) {
            this.id = id;
            this.title = title;
            this.description = description;
            this.location = location;
            this.contract = contract;
            this.skills = skills;
            this.company = company

        }
    }


    import "../../../assets/css/styles.css";
    import Pageheader from '@/components/layout/Header.vue'
    import Footer from '@/components/layout/Footer.vue'
    import ARow from "ant-design-vue/es/grid/Row";
    import ACol from "ant-design-vue/es/grid/Col";
    import Marketplace from '@/services/Marketplace'
    import {showAt, hideAt} from 'vue-breakpoints'

    var VueTruncate = require('vue-truncate-filter')
    import Vue from 'vue'

    Vue.use(VueTruncate)

    const plainOptions = ['Fulltime', 'Contract', 'Remote', 'Parttime']
    const defaultCheckedList = ['Fulltime', 'Contract', 'Remote', 'Parttime']
    const plainOptions1 = ['1 year', '2 years', '3 years', '4 years above']
    const defaultCheckedList1 = ['1 year', '2 years', '3 years', '4 years above']
    export default {
        name: 'jobboard',
        data() {
            return {
                jobs: null,
                alljobs: null,
                job: {},
                search: '',
                country: null,
                checkedList: defaultCheckedList,
                indeterminate: true,
                checkAll: false,
                plainOptions,
                checkedList1: defaultCheckedList1,
                indeterminate1: true,
                checkAll1: false,
                dataSource: ['Django', 'Javascript', 'Python', 'Php', 'Postgres', 'Sql', 'Html', 'Css', 'bootstrap', 'React', 'Java',
                    'React Native', 'Redux', 'Flask ', 'Go', 'Expressjs', 'Vuejs',
                    'Angular', 'Ios', 'flutter', 'Ionic', 'Rails', 'Meteor', 'AI', 'Cybersecurity',
                    'Blockchain', 'Arduino', 'Spring', 'Bitcoin', 'Kotlin', 'Scala', 'Nativescript ',
                    'Android', 'Website', 'Mobile'],
                loading: true,
                plainOptions1,

                pStyle: {
                    fontSize: '16px',
                    color: 'rgba(0,0,0,0.85)',
                    lineHeight: '24px',
                    display: 'block',
                    marginBottom: '16px',
                },
                pStyle2: {
                    marginBottom: '24px'
                },
                listData: [],
                pagination: {
                    onChange: (page) => {
                        return page;
                    },
                    pageSize: 10,
                },
                actions: [
                    {type: 'star-o', text: '156'},
                    {type: 'like-o', text: '156'},
                    {type: 'message', text: '2'},
                ],
            }
        },
        components: {
            ACol,
            ARow,
            Pageheader,
            Footer,
            showAt, hideAt,
        },
        async mounted() {

            this.jobs = (await Marketplace.alljobs()).data
            this.loading = false

            for (let i = 0; i < this.jobs.length; i++) {

                let skill_list = this.jobs[i].tech_stack.split(',').slice(0, 2);

                let id = this.jobs[i].id
                let skills = skill_list
                let title = this.jobs[i].title
                let deadline = this.jobs[i].deadline

                let location = this.jobs[i].location
                let contract = this.jobs[i].engagement_type
                let description = this.jobs[i].description
                let company = this.jobs[i].company


                let onejob = new Job(id, title, deadline, location, contract, skills, description, company)


                this.listData.push(onejob)


            }


        },

        methods: {
            navigateTo(route) {
                this.$router.push(route)
            },
            filterOption(input, option) {
                return option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
            },

            onChange(checkedList) {
                this.indeterminate = !!checkedList.length && (checkedList.length < plainOptions.length)
                this.checkAll = checkedList.length === plainOptions.length
            },
            onCheckAllChange(e) {
                Object.assign(this, {
                    checkedList: e.target.checked ? plainOptions : [],
                    indeterminate: false,
                    checkAll: e.target.checked,
                })
            },
            onChange1(checkedList1) {
                this.indeterminate1 = !!checkedList1.length && (checkedList1.length < plainOptions1.length)
                this.checkAll1 = checkedList1.length === plainOptions1.length
            },
            onCheckAllChange1(e) {
                Object.assign(this, {
                    checkedList1: e.target.checked ? plainOptions1 : [],
                    indeterminate1: false,
                    checkAll1: e.target.checked,
                })
            },

        },
        computed: {
            filteredList() {
                return this.listData.filter(job => {

                    return job.skills.toString().toLowerCase().includes(this.search.toLowerCase())
                })
            }
        }
    }

</script>

<style scoped>
    .poolavatar {
        width: 80px;
        height: 80px;
        line-height: 80px;
        font-size: 30px;
        background-color: #0679FB;
        margin: 25% 25%;
    }

    .talentcard {
        margin-bottom: 1rem;
    }


    .jobtitle {
        margin-top: 2rem;
        color: white;
        margin-left: 10%;
        font-weight: 700;
        font-size: 1rem;
    }
    .lightshadow{
        box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
        border: 1px solid rgba(0,0,0,.125);
    }
    .poolavatar1 {
        background-color: #0679FB;

    }


</style>
