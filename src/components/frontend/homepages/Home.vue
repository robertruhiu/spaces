<template>
    <div>

        <div>
            <a-layout :style="{background:'#fff'}">
                <pageheader></pageheader>

                <a-layout-content :style="{ padding: '0 0px', marginTop: '2rem' }">
                    <!-----header---->

                    <div :style="{ background: '#fff', padding: '24px', minHeight: '100vh' }">
                        <a-row>
                            <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                                   :md="{span: 18, offset: 4 }"
                                   :lg="{span: 11, offset: 1 }" :xl="{span: 11, offset: 1 }">
                                <show-at breakpoint="mediumAndBelow">
                                    <div style="margin-top: 3rem">
                                        <h1 style="font-size:2.5rem;font-weight: bold;color: #007BFF;margin-bottom: 0">
                                            Hire
                                            Skilled
                                            Developers
                                            Faster</h1>

                                        <h4 style="color: #55A7FF;font-size: 1.5rem">Your ideal developer is just a
                                            click away</h4>
                                        <router-link to="/talent">
                                            <a-button type="primary" style="height: 2.6rem;width: 8rem" :size="large">
                                                Hire a
                                                Dev
                                            </a-button>
                                        </router-link>
                                        <router-link to="/jobs">
                                            <a-button type="primary"
                                                      style="margin-left: 1rem;height: 2.6rem;width: 8rem"
                                                      ghost>Get hired
                                            </a-button>
                                        </router-link>


                                    </div>
                                </show-at>
                                <hide-at breakpoint="mediumAndBelow">
                                    <div style="margin-top: 8rem">
                                        <h1 style="font-size:2.5rem;font-weight: bold;color: #007BFF;margin-bottom: 0">
                                            Hire
                                            Skilled
                                            Developers
                                            Faster</h1>

                                        <h4 style="color: #55A7FF;font-size: 1.5rem">Your ideal developer is just a
                                            click away</h4>
                                        <router-link to="/talent">
                                            <a-button type="primary" style="height: 2.6rem;width: 8rem" :size="large">
                                                Hire a
                                                Dev
                                            </a-button>
                                        </router-link>
                                        <router-link to="/jobs">
                                            <a-button type="primary"
                                                      style="margin-left: 1rem;height: 2.6rem;width: 8rem"
                                                      ghost>Get hired
                                            </a-button>
                                        </router-link>


                                    </div>
                                </hide-at>


                            </a-col>
                            <hide-at breakpoint="mediumAndBelow">


                                <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                                       :md="{span: 24, offset: 0 }"
                                       :lg="{span: 12, offset: 0 }" :xl="{span: 12, offset: 0 }">
                                    <img src="https://res.cloudinary.com/dwtvwjhn3/image/upload/v1564580623/images/header_bg_hstf4v.png"
                                         style="width: 100%;float: right;">
                                    <div>

                                    </div>
                                </a-col>
                            </hide-at>


                        </a-row>
                        <hide-at breakpoint="mediumAndBelow">
                            <a-row :style="{ padding: '0 5%'  }">
                                <div class="press">
                                    <div>
                                        <a-row>
                                            <a-col :span="6">
                                                <a target="_blank"
                                                   href="https://techcrunch.com/2018/12/11/introducing-the-startups-and-agenda-for-startup-battlefield-africa/">
                                                    <img class="pressitemtech"
                                                         src="../../../assets/images/props/b_tc.png">
                                                </a>
                                            </a-col>
                                            <a-col :span="6">
                                                <a target="_blank" href="https://meltwater.org/blog/mest-company-codeln-wins-launched-in-africa-pitch-competition-social-media-week-lagos/">
                                                    <img class="pressitemseed"
                                                         src="https://smwlagos.com/wp-content/uploads/2019/09/SMW-LAGOS-03.png">
                                                </a>

                                            </a-col>
                                            <a-col :span="6">
                                                <a target="_blank"
                                                   href="http://disrupt-africa.com/2018/09/mest-invests-700k-in-7-african-tech-startups/">
                                                    <img class="pressitemdisrupt"
                                                         src="../../../assets/images/props/b_da.png">
                                                </a>

                                            </a-col>
                                            <a-col :span="6">
                                                <a target="_blank"
                                                   href="https://www.forbes.com/sites/tobyshapshak/2018/09/10/renowned-african-incubator-mest-celebrates-10-years-with-700000-investment/#6821e7772af5">
                                                    <img class="pressitemforbes"
                                                         src="../../../assets/images/props/b_f.png">
                                                </a>

                                            </a-col>
                                        </a-row>
                                    </div>
                                </div>
                            </a-row>
                        </hide-at>


                    </div>
                    <!-----how it works---->
                    <div :style="{ background: '#fff', padding: '31px', minHeight: '60vh' }">
                        <div style="background-color: #ffffff;">
                            <div style="text-align: center">
                                <h2 class="headers">How Codeln Works</h2>
                                <p>Our process is optimised to enable you to identify and onboard talent</p>
                            </div>


                            <a-row gutter="16" style="padding: 3%">
                                <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                                       :md="{span: 8, offset: 0 }"
                                       :lg="{span: 8, offset: 0 }" :xl="{span: 8, offset: 0 }"
                                       style="margin-bottom: 1rem">
                                    <img class="imagecenter" src="../../../assets/images/props/search.png"/>

                                    <p style="text-align: center;font-size: 1rem">
                                        We provide
                                        you a unique
                                        pool of verified developers
                                        with varied technologies.You can easily filter them to identify
                                        potential
                                        candidates
                                        for your job

                                    </p>

                                </a-col>

                                <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                                       :md="{span: 8, offset: 0 }"
                                       :lg="{span: 8, offset: 0 }" :xl="{span: 8, offset: 0 }"
                                       style="margin-bottom: 1rem">
                                    <img class="imagecenter" src="../../../assets/images/props/pick.png"/>

                                    <p style="text-align: center;font-size: 1rem">
                                        We believe in
                                        transparency
                                        thus we ensure developer profiles encompass their verified skills,work
                                        experience and past projects.

                                    </p>

                                </a-col>

                                <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                                       :md="{span: 8, offset: 0 }"
                                       :lg="{span: 8, offset: 0 }" :xl="{span: 8, offset: 0 }"
                                       style="margin-bottom: 1rem">
                                    <img class="imagecenter" src="../../../assets/images/props/coding.png"/>

                                    <p style="text-align: center;font-size: 1rem">
                                        Once you have picked talent you can take advantage of
                                        our robust applicant tracking system to manage your candidates

                                    </p>


                                </a-col>
                            </a-row>
                        </div>

                    </div>
                    <!--                    &lt;!&ndash;-&#45;&#45;services&#45;&#45;&ndash;&gt;-->

                    <!--                    <div :style="{  minHeight: '55vh' }">-->
                    <!--                        <h2 class="headers" style="text-align: center">-->
                    <!--                            Our Services-->
                    <!--                        </h2>-->


                    <!--                        <a-row  :style="{padding:'3%'}">-->
                    <!--                            <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"-->
                    <!--                                   :md="{span: 24, offset: 0 }"-->
                    <!--                                   :lg="{span: 8, offset: 0 }" :xl="{span: 8, offset: 0 }">-->


                    <!--                            </a-col>-->


                    <!--                        </a-row>-->


                    <!--                    </div>-->
                    <!-----talent---->

                    <div :style="{ background: '#fff', minHeight: '400px' }">
                        <a-row style="margin-top: 0">
                            <hide-at breakpoint="mediumAndBelow">
                                <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                                       :md="{span: 10, offset: 0 }"
                                       :lg="{span: 10, offset: 0 }" :xl="{span: 10, offset: 0 }">
                                    <img src="https://res.cloudinary.com/dwtvwjhn3/image/upload/v1564580623/images/talent_profile_bg_wt23ka.png"
                                         style="width: 100%;margin-top: 30%">
                                </a-col>
                            </hide-at>
                            <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                                   :md="{span: 24, offset: 0 }"
                                   :lg="{span: 14, offset: 0 }" :xl="{span: 14, offset: 0 }">
                                <div>
                                    <div style="padding: 2%">
                                        <h2 class="headers">Our Talent Pool</h2>
                                        <p>We believe that your ideal developer should be only a click away,take
                                            advantage
                                            of some of our
                                            filters to easily access candidates </p>

                                    </div>


                                    <div v-if="loading" class="loading" style="text-align: center;margin-top: 25%;">
                                        <a-spin size="large"/>
                                    </div>

                                    <div v-else>

                                        <show-at breakpoint="mediumAndBelow">
                                            <div style="padding: 2%">
                                                <div v-for="item in listData" v-bind:key="item.id"
                                                     style="margin-bottom: 1rem">

                                                    <a-row style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);height: 12rem">

                                                        <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                                                               :md="{span: 24, offset: 0 }"
                                                               :lg="{span: 15, offset: 0 }" :xl="{span: 15, offset: 0 }"
                                                               style="padding: 2%">
                                                            <p>Bio</p>
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
                                            </div>

                                        </show-at>


                                        <hide-at breakpoint="mediumAndBelow">
                                            <div style="padding: 2%">
                                                <div v-for="item in listData" v-bind:key="item.id" style=" ">
                                                    <div style="margin-bottom: 1rem">
                                                        <a-row style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);height: 9rem">
                                                            <a-col span="4"
                                                                   style="background-color:#0679FB;height: 100% ">
                                                                <a-avatar class="poolavatar"
                                                                >
                                                                    {{item.name}}
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
                                                                    <a-tag color="#F7E7F5" style="color: #B82EA4">
                                                                        {{item.availabilty}}

                                                                    </a-tag>


                                                                </div>
                                                                <div style="margin-top: 2rem">
                                                                    <a-button type="primary" ghost
                                                                              @click="navigateTo({name:'candidatetalentprofile',params:{candidateProfileID: item.id}})">
                                                                        View Profile
                                                                    </a-button>
                                                                </div>


                                                            </a-col>


                                                        </a-row>
                                                    </div>


                                                </div>
                                            </div>

                                        </hide-at>


                                    </div>


                                </div>
                            </a-col>
                            <a-col :span="24">
                                <div class="center">
                                    <p style="text-align: center">
                                        <router-link to="talent">
                                            <a-button type='primary'
                                                      style="width: 10rem;color: white;height: 3rem;border-radius: 23px">
                                                View
                                                more
                                                Talent
                                            </a-button>
                                        </router-link>

                                    </p>
                                </div>
                            </a-col>
                        </a-row>
                    </div>
                    <!-----why us---->

                    <div :style="{ background: '#fff', padding: '31px', minHeight: '50vh' }">


                        <h2 class="headers" style="text-align: center">Why Should You Hire with us</h2>


                        <a-row :gutter="16" :style="{padding:'3%'}">
                            <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }" :md="{span: 8, offset: 0 }"
                                   :lg="{span: 8, offset: 0 }" :xl="{span: 8, offset: 0 }">
                                <img class="imagecenter" src="../../../assets/images/props/hire_icon.png"/>
                                <h3 class="" style="text-align: center">Verified Developers</h3>
                                <p style="text-align: center;font-size: 1rem">
                                    As Codeln we facilitate skill verification of candidate before
                                    they are presented to the talent pool thus ensuring quality of skill.
                                </p>


                            </a-col>
                            <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }" :md="{span: 8, offset: 0 }"
                                   :lg="{span: 8, offset: 0 }" :xl="{span: 8, offset: 0 }">
                                <img class="imagecenter" src="../../../assets/images/props/time-management.png"/>
                                <h3 style="text-align: center">Cost Efficient</h3>
                                <p style="text-align: center;font-size: 1rem">
                                    Our process aims to facilitate a rapid hire thus enabling
                                    you to cut back on costs caused by downtime

                                </p>


                            </a-col>
                            <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }" :md="{span: 8, offset: 0 }"
                                   :lg="{span: 8, offset: 0 }" :xl="{span: 8, offset: 0 }">
                                <img class="imagecenter" src="../../../assets/images/props/analytics.png"/>
                                <h3 style="text-align: center">Robust Applicant System</h3>
                                <p style="text-align: center;font-size: 1rem">We ensure that you enjoy a fluid candidate
                                    management
                                    from when you identify them up to your choice to hire them.</p>


                            </a-col>
                        </a-row>

                    </div>

                    <!-----partners---->
                    <div :style="{  padding: '31px', minHeight: '55vh' }">
                        <h2 class="headers" style="text-align: center">
                            Trusted By
                        </h2>
                        <a-row :gutter="16" :style="{padding:'3%'}">
                            <a-col :xs="{span: 12, offset: 0 }" :sm="{span: 12, offset: 0 }"
                                   :md="{span: 6, offset: 0 }"
                                   :lg="{span: 6, offset: 0 }" :xl="{span: 6, offset: 0 }">

                                <img class="imagecenter" style="width: 70%;margin-top: 1rem"
                                     src="../../../assets/images/props/b_mest.png"
                                />


                            </a-col>
                            <a-col :xs="{span: 12, offset: 0 }" :sm="{span: 12, offset: 0 }"
                                   :md="{span: 6, offset: 0 }"
                                   :lg="{span: 6, offset: 0 }" :xl="{span: 6, offset: 0 }"
                                   style="padding-left: 0;padding-right: 0">
                                <img style="width: 30%" class="imagecenter" src="../../../assets/images/props/b_7a.png"
                                />
                            </a-col>
                            <a-col :xs="{span: 12, offset: 0 }" :sm="{span: 12, offset: 0 }"
                                   :md="{span: 6, offset: 0 }"
                                   :lg="{span: 6, offset: 0 }" :xl="{span: 6, offset: 0 }">

                                <img class="imagecenter" style="width: 50%;margin-top: 0.5rem"
                                     src="../../../assets/images/props/b_DIV.png"
                                />


                            </a-col>
                            <a-col :xs="{span: 12, offset: 0 }" :sm="{span: 12, offset: 0 }"
                                   :md="{span: 6, offset: 0 }"
                                   :lg="{span: 6, offset: 0 }" :xl="{span: 6, offset: 0 }"
                                   style="padding-left: 0;padding-right: 0">
                                <img class="imagecenter" style="width: 40%;margin-top: 1rem"
                                     src="../../../assets/images/props/b_enpact.png"
                                />
                            </a-col>

                        </a-row>

                    </div>


                </a-layout-content>
                <Footer/>
            </a-layout>

        </div>
    </div>


</template>


<script>

    class Developer {
        constructor(id, name, skills, about, location, availabilty) {
            this.id = id;
            this.name = name;
            this.skills = skills;
            this.about = about;
            this.location = location;
            this.availabilty = availabilty

        }
    }

    import Pageheader from '@/components/layout/Header.vue'
    import Footer from '@/components/layout/Footer.vue'
    import ARow from "ant-design-vue/es/grid/Row";
    import ACol from "ant-design-vue/es/grid/Col";
    import UsersService from '@/services/UsersService'
    import Vue from 'vue'
    import {showAt, hideAt} from 'vue-breakpoints'

    var VueTruncate = require('vue-truncate-filter')
    Vue.use(VueTruncate)

    export default {

        name: 'home',
        data() {
            return {
                devs: null,
                alldevs: null,
                listData: [],
                loading: true,
                tempdata: []

            }
        },

        components: {
            ACol,
            ARow,
            showAt, hideAt,
            Pageheader,
            Footer,

        },
        async mounted() {

            this.devs = (await UsersService.sliceddevs()).data

            this.loading = false

            for (let i = 0; i < this.devs.length; i++) {
                let skill_list = []
                if (this.devs[i].skills) {
                    skill_list = this.devs[i].skills.split(',').slice(0, 4);
                }


                let id = this.devs[i].user.id
                let name = this.devs[i].user.first_name[0].toUpperCase() + this.devs[i].user.last_name[0].toUpperCase()
                let skills = skill_list
                let about = this.devs[i].about
                let location = this.devs[i].country
                let availabilty = this.devs[i].availabilty
                let onedev = new Developer(
                    id, name, skills, about, location, availabilty
                )


                this.listData.push(onedev)

            }


        },
        methods: {
            navigateTo(route) {
                this.$router.push(route)
            },
        },


    }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    ul {
        list-style-type: none;
    }

    ul a {
        color: #fff;
        text-decoration: none;
        transition: .2s ease-in;
    }

    .press {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        height: 80px;
        margin-top: 0%;
        background-color: #F0F9FE;
        border-radius: 3px;
    }

    .pressitemtech {
        width: 48%;
        margin-top: 1rem;
        margin-left: 23%;


    }

    .pressitemseed {
        width: 24%;
        margin-top: 0.7rem;
        margin-left: 23%;
        -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
        filter: grayscale(100%);


    }

    .pressitemdisrupt {
        width: 27%;
        margin-top: 1rem;
        margin-left: 23%;


    }

    .pressitemforbes {
        width: 28%;
        margin-top: 1.5rem;
        margin-left: 23%;


    }

    .smallheader {
        color: #B627A1;
        margin-bottom: 0;

    }

    .headers {
        color: #007BFF;
        font-size: 1.5rem;
    }

    .workscard {


        background-color: white;
        border: 0
    }

    .poolavatar {
        width: 80px;
        height: 80px;
        line-height: 80px;
        font-size: 30px;
        background-color: #0679FB;
        margin: 29% 14%;
    }

    .talentcard {
        margin-bottom: 1rem;
    }

    .center {
        margin: auto;
        width: 60%;

        padding: 10px;
    }

    .imagecenter {
        display: block;
        margin-left: auto;
        margin-right: auto;

    }

    .actioncards {


    }

    .poolavatar1 {
        width: 20%;
        margin-top: 0.5rem;
    }

    .poolavatar2 {
        width: 14%;
        margin-top: 0.5rem;
    }


</style>
