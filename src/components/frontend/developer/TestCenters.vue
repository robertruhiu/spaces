<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
        <CandidateSider/>
        <a-layout>

            <a-layout-content style="background-color: white">
                <DevHeader/>
                <div :style="{ padding: '0 2%', background: '#fff' }">
                    <a-row style="margin-top: 1rem;margin-bottom: 2%">
                        <a-col :xs="{span: 18, offset: 2 }" :sm="{span: 24, offset: 1 }" :md="{span: 24, offset: 1 }"
                               :lg="{span: 24, offset: 0 }" :xl="{span: 24, offset: 0}">

                        </a-col>

                    </a-row>
                    <div v-if="info === null"
                         :style="{boxShadow:'0 .125rem .25rem rgba(0,0,0,.075)!important',padding:'3%'}">
                        <a-steps :current="current">
                            <a-step v-for="item in steps" :key="item.title" :title="item.title"/>
                        </a-steps>
                        <div class="steps-content">
                            <div v-if="current === 0">
                                <a-row :gutter="16" style="padding-right: 2rem;padding-bottom: 1.5rem;">
                                    <p v-if="centererror" style="color: red">{{centererror}}</p>
                                    <div v-if="dataload">
                                        <div style="text-align: center;">
                                            <a-spin/>
                                        </div>
                                    </div>
                                    <div v-else>
                                        <div v-if="testcenters.length > 0">
                                            <a-col class="boxes" :xs="{span: 16, offset: 2  }"
                                                   :sm="{span: 12, offset: 0 }"
                                                   :md="{span: 10, offset: 0 }"
                                                   :lg="{span: 8, offset: 0 }" :xl="{span: 8,offset: 0 }"
                                                   v-for="center in testcenters"
                                                   v-bind:key="center">
                                                <a @click="pick(center.id)">
                                                    <a-card class="actioncards"
                                                            hoverable

                                                    >
                                                        <p style="font-weight: bold">
                                                            {{center.country}}</p>

                                                        <p style="margin: 0;">from:
                                                            {{ center.start_time }} <br>to: {{ center.end_time }} </p>
                                                        <p style="margin: 0;">Venue: {{center.venue}}</p>


                                                    </a-card>
                                                </a>


                                            </a-col>
                                        </div>
                                    </div>

                                </a-row>
                            </div>
                            <div v-else-if="current === 1">
                                <div>
                                    <p>Be modest please pick the set of you can achieve within the time limit of the
                                        test center</p>

                                    <template v-for=" tag in recommendationtags">
                                        <a-checkable-tag style="border-color: blue;font-size: 14px;margin-bottom: 1rem"
                                                         :key="tag"
                                                         :checked="selectedTags.indexOf(tag) > -1"
                                                         @change="(checked) => handleChange(tag, checked)"
                                        >
                                            {{tag}}
                                        </a-checkable-tag>
                                    </template>
                                </div>
                            </div>

                        </div>
                        <div v-if="loading === false" class="steps-action">
                            <a-button
                                    v-if="current < steps.length - 1"
                                    type="primary" @click="next(current)"
                            >
                                Next
                            </a-button>
                            <a-button
                                    v-if="current == steps.length - 1"
                                    type="primary"
                                    @click="SelectCenter"
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
                        <div v-else>
                            <div style="text-align: center;">
                                <a-spin/>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <p class="info">{{info}}</p>


                        <a-card class="actioncards"
                                hoverable

                        >
                            <p style="font-weight: bold">
                                {{appointment.test_center.country}}</p>

                            <p style="margin: 0;">from:
                                {{ appointment.test_center.start_time }} <br>to: {{ appointment.test_center.end_time }}
                            </p>
                            <p style="margin: 0;">Venue: {{appointment.test_center.venue}}</p>


                        </a-card>
                    </div>

                </div>


            </a-layout-content>


        </a-layout>
    </a-layout>
</template>

<script>
    import UsersService from '@/services/UsersService';
    import CandidateSider from "../../layout/CandidateSider";
    import DevHeader from "../../layout/DevHeader";
    import ACol from "ant-design-vue/es/grid/Col";
    import ARow from "ant-design-vue/es/grid/Row";
    import ServerManagement from "../../../services/ServerManagement";
    import Projects from '@/services/Projects'
    import MarketPlaceService from '@/services/Marketplace'


    export default {
        name: "TestCenters",
        data() {
            return {
                loading: false,
                dataload: false,
                currentUserProfile: {},
                testcenters: [],
                selected_center: "",
                current: 0,
                steps: [{
                    title: 'Select test center',

                }, {
                    title: 'Pick framework',

                }],
                pickedcenter: {
                    center: '',
                    tags: ''
                },
                recommendationtags: ['Django', 'Postgres', 'Sql', 'bootstrap', 'React', 'Java',
                    'React Native', 'Redux', 'Flask ', 'Go', 'Expressjs', 'Vuejs',
                    'Angular', 'Ios', 'flutter', 'Ionic', 'Rails', 'Meteor',
                    'Arduino', 'Spring', 'Nativescript ',
                    'Android',],
                selectedTags: [],
                centererror: '',
                info: null,
                appointment: null
            }
        },
        components: {
            DevHeader,
            CandidateSider,
            ACol,
            ARow,
        },
        async mounted() {
            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}
            }
            if (this.$store.state.user.pk) {
                this.currentUserProfile = (await UsersService.currentuser(this.$store.state.user.pk, auth)).data;
                this.dataload = true
                this.testcenters = (await ServerManagement.testcenters(auth)).data
                this.dataload = false
                this.projectlist = (await Projects.myprojects(this.$store.state.user.pk, auth)).data
                if (this.projectlist) {
                    for (let i = 0; i < this.projectlist.length; i++) {
                        if (this.projectlist[i].test_center) {
                            this.info = 'you already have an existing appointment'
                            this.appointment = this.projectlist[i]

                        }

                    }
                }


            }
        },
        methods: {
            navigateTo(route) {
                this.$router.push(route)
            },
            pick(id) {
                this.current++
                this.pickedcenter.center = id
                this.centererror = ''
            },
            async SelectCenter() {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}
                };
                this.loading = true

                ServerManagement.selectcenter(
                    {
                        candidate: this.$store.state.user.pk,
                        test_center: this.pickedcenter.center,
                        frameworktested: this.pickedcenter.tags
                    }, auth)
                    .then(resp => {


                            Projects.myprojects(this.$store.state.user.pk, auth)
                                .then(resp => {

                                    this.projectlist = resp.data

                                    if (this.projectlist) {
                                        for (let i = 0; i < this.projectlist.length; i++) {
                                            if (this.projectlist[i].test_center) {
                                                this.info = 'You have succesfully booked an appointment.more details have been sent to your email'
                                                this.appointment = this.projectlist[i]
                                                this.loading = false


                                            }

                                        }

                                    }


                                })
                            MarketPlaceService.newonsite(resp.data.id, auth)
                                .then()
                                .catch()


                        }
                    )
                ;
            },
            next(current) {
                if (current === 0) {

                    if (this.pickedcenter.center === '') {
                        this.centererror = 'please pick center'
                    } else {
                        this.current++
                    }
                }


            }
            ,
            prev() {
                this.current--
            }
            ,
            handleClose(removedTag) {
                const tags = this.tags.filter(tag => tag !== removedTag)
                this.tags = tags
                let alltags = this.tags.join(", ")
                this.pickedcenter.tags = alltags

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
                this.pickedcenter.tags = alltags
                Object.assign(this, {
                    tags,
                    inputVisible: false,
                    inputValue: '',
                })
            }
            ,
            handleChange(tag, checked) {
                const {selectedTags} = this
                const nextSelectedTags = checked
                    ? [...selectedTags, tag]
                    : selectedTags.filter(t => t !== tag)

                this.selectedTags = nextSelectedTags
                let alltags = this.selectedTags.join(", ")
                this.pickedcenter.tags = alltags
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

    .projcard {
        min-height: 200px;
    }

    .projcard:hover {
        border-color: #004ec7;
    }

    #components-layout-demo-side .logo {
        height: 32px;
        background: rgba(255, 255, 255, .2);
        margin: 16px;
    }

    .me {
        width: 70px;
        height: 70px;
        color: blue;
    }

    .me:hover {
        fill: red;
    }

    .boxes {
        margin-bottom: 1rem;
        padding-left: 0;
        padding-right: 0;


    }

    .poolavatar {
        width: 30%;
        margin-top: 0.5rem;
    }

    .talentcard {
        margin-bottom: 1rem;
    }

    .center {
        margin: auto;
        width: 60%;


    }

    .actioncards {
        width: 16rem;
        border-radius: 0;
        border: 1px solid #ebedf0;

    }

    .steps-content {
        margin-top: 1rem;


        min-height: 200px;

        padding: 2%;
    }

    .steps-action {
        margin-top: 24px;
    }

    .actioncards2 {
        width: 100px;
        height: 100px;
        border-radius: 0;
        border: 1px solid #ebedf0;
    }

    .alert {
        padding: 8px;
        background-color: #fff1f0;
        border: 1px solid #ffa39e;
    }

    .info {
        padding: 8px;
        background-color: #f6ffed;
        border: 1px solid #b7eb8f;
    }
</style>
