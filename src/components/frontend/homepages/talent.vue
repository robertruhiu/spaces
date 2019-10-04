<template>
    <a-layout :style="{background:'#fff'}">
        <pageheader></pageheader>
        <a-layout-content :style="{ padding: '0 0px' }">
            <div>
                <a-row style="background-color:#004ec7;position: fixed;width: 100%;z-index: 1;margin-top: 4rem;padding-bottom: 1rem ">
                    <hide-at breakpoint="mediumAndBelow">
                        <a-col span="4">
                            <h3 style="color: white;font-size: 1.5rem;padding-left: 4rem;padding-top: 1rem;">Talent</h3>
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

            <div style="margin-top: 10rem">
                <a-row>



                    <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0}" :md="{span: 16, offset: 4 }"
                           :lg="{span: 16, offset: 4 }" :xl="{span: 16, offset: 4 }">
                        <a-alert message="If you have a posted  job you can attach picked candidates to it.You can do this on manage candidates page" type="info" closeText="Close Now" />
                        <div v-if="loading" class="loading" style="text-align: center;min-height:40vh ">
                            <a-spin size="large"/>
                        </div>
                        <div v-else>
                            <a-list style="padding-bottom: 2rem"
                                    itemLayout="vertical"
                                    size="large"
                                    :pagination="pagination"
                                    :dataSource="filteredList"
                            >

                                <a-list-item
                                        slot="renderItem" slot-scope="item" key="item.title">


                                    <show-at breakpoint="mediumAndBelow">
                                        <div style="padding: 2%">


                                            <a-row class="lightshadow" style="height: 13rem;padding: 3%">

                                                <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                                                       :md="{span: 24, offset: 0 }"
                                                       :lg="{span: 15, offset: 0 }" :xl="{span: 15, offset: 0 }"
                                                       style="padding: 2%">
                                                    <span >
                                                                <a-avatar class="poolavatar1"
                                                                >
                                                                    {{item.name}}
                                                                </a-avatar>
                                                                <span style="margin-left: 1rem">Bio</span>
                                                            </span>
                                                    <p>{{item.about | truncate(100)}}<a
                                                            @click="navigateTo({name:'candidatetalentprofile',params:{candidateProfileID: item.id}})">read
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
                                                                  @click="navigateTo({name:'candidatetalentprofile',params:{candidateProfileID: item.id}})">
                                                            View Profile
                                                        </a-button>
                                                    </div>


                                                </a-col>


                                            </a-row>
                                        </div>


                                    </show-at>


                                    <hide-at breakpoint="mediumAndBelow">


                                        <a-row style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);height: 9rem">
                                            <a-col span="4"
                                                   style="background-color:#0679FB;height: 100% ">
                                                <a-avatar class="poolavatar"
                                                >
                                                    {{item.name}}
                                                    <span style="font-size: 1rem" v-if="item.verified"><a-icon
                                                            type="check-circle"/></span>

                                                </a-avatar>
                                            </a-col>
                                            <a-col span="15" style="padding: 2%">
                                                <p>Bio</p>

                                                <p>{{item.about | truncate(100)}}<a
                                                        @click="navigateTo({name:'candidatetalentprofile',params:{candidateProfileID: item.id}})">read
                                                    more</a>
                                                </p>

                                                <p>
                                                    Skills :
                                                    <span style="" v-for="skill in item.skills"
                                                          v-bind:key="skill.id">
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


                                                    <span style="" v-for="available in item.availabilty"
                                                          v-bind:key="available.id">
                                                <a-tag color="#F7E7F5" style="color:#B82EA4;">{{available}}</a-tag>

                                            </span>


                                                </div>
                                                <div style="margin-top: 2rem">
                                                    <a-button type="primary" ghost
                                                              @click="navigateTo({name:'candidatetalentprofile',params:{candidateProfileID: item.id}})">
                                                        View Profile
                                                    </a-button>
                                                </div>


                                            </a-col>


                                        </a-row>


                                    </hide-at>


                                </a-list-item>
                            </a-list>
                        </div>


                    </a-col>


                </a-row>


            </div>


        </a-layout-content>

    </a-layout>


</template>
<script>

    class Developer {
        constructor(id, name, skills, about, location, availabilty, verified) {
            this.id = id;
            this.name = name;
            this.skills = skills;
            this.about = about;
            this.location = location;
            this.availabilty = availabilty
            this.verified = verified
        }
    }

    //experience structure on table


    import "../../../assets/css/styles.css";
    import Pageheader from '@/components/layout/Header.vue'
    import ARow from "ant-design-vue/es/grid/Row";
    import ACol from "ant-design-vue/es/grid/Col";
    import UsersService from '@/services/UsersService';
    import {showAt, hideAt} from 'vue-breakpoints'

    import Vue from 'vue'

    var VueTruncate = require('vue-truncate-filter')
    Vue.use(VueTruncate)


    const plainOptions = ['Fulltime', 'Contract', 'Remote', 'Parttime']
    const defaultCheckedList = ['Fulltime', 'Contract', 'Remote', 'Parttime']
    const plainOptions1 = ['1 year', '2 years', '3 years', '4 years above']
    const defaultCheckedList1 = ['1 year', '2 years', '3 years', '4 years above']
    export default {
        name: 'talent',
        data() {
            return {
                visible: false,
                devs: null,
                alldevs: null,
                search: '',
                profile: {},
                country: null,
                checkedList: defaultCheckedList,
                indeterminate: true,
                checkAll: false,
                plainOptions,
                checkedList1: defaultCheckedList1,
                indeterminate1: true,
                checkAll1: false,
                mydevs: null,
                tags: [],
                loading: true,
                dataSource: ['Django', 'Javascript', 'Python', 'Php', 'Postgres', 'Sql', 'Html', 'Css', 'bootstrap', 'React', 'Java',
                    'React Native', 'Redux', 'Flask ', 'Go', 'Expressjs', 'Vuejs',
                    'Angular', 'Ios', 'flutter', 'Ionic', 'Rails', 'Meteor', 'AI', 'Cybersecurity',
                    'Blockchain', 'Arduino', 'Spring', 'Bitcoin', 'Kotlin', 'Scala', 'Nativescript ',
                    'Android', 'Website', 'Mobile'],


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
                        return page
                    },
                    pageSize: 20,
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
            showAt, hideAt,

        },

        async mounted() {
            this.devs = (await UsersService.devs()).data;
            this.loading = false
            for (let i = 0; i < this.devs.length; i++) {
                let skill_list = []
                if (this.devs[i].skills) {
                    skill_list = this.devs[i].skills.split(',').slice(0, 4)
                }


                let id = this.devs[i].user.id
                let name = this.devs[i].user.first_name[0].toUpperCase() + this.devs[i].user.last_name[0].toUpperCase()
                let skills = skill_list
                let about = this.devs[i].about
                let location = this.devs[i].country
                let availabilty = []
                if(this.devs[i].availabilty){
                    availabilty = this.devs[i].availabilty.split(',').slice(0, 2)
                }
                let verified = false
                if (this.devs[i].verified_skills) {
                    verified = true
                }
                let onedev = new Developer(
                    id, name, skills, about, location, availabilty, verified
                )


                this.listData.push(onedev)

            }


        },


        methods: {
            navigateTo(route) {
                this.$router.push(route)
            },
            filterOption(input, option) {
                return option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
            },
            onClose() {
                this.visible = false
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
                return this.listData.filter(dev => {


                    return dev.skills.toString().toLowerCase().includes(this.search.toLowerCase())
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
    .lightshadow{
        box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
        border: 1px solid rgba(0,0,0,.125);
    }
    .poolavatar1 {
        background-color: #0679FB;

    }


</style>
