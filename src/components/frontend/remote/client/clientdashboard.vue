<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">

        <Clientsider/>

        <a-layout>


            <a-layout-content :style="{ backgroundColor:'#eef5fb' }">
                <Pageheader/>


                <div :style="{ padding: '2rem', background: '#eef5fb', }">
                    <a-row style="margin-bottom: 1rem">

                        <a-col :xs="{span: 24, offset: 1 }" :sm="{span: 24, offset: 2 }" :md="{span: 24, offset: 2 }"
                               :lg="{span: 20, offset: 0 }" :xl="{span: 20, offset: 0 }">

                            <h3 style="color: #1976D2;font-weight: bold;margin-left: 1rem">Welcome to Remote Codeln.Lets
                                get you started with your project provide the details below</h3>

                        </a-col>


                    </a-row>

                    <div>
                        <div class="actioncards">
                            <a-row>
                                <a-col span="18" style="padding: 2%;">


                                    <a-row :gutter="18">
                                        <a-col span="8">
                                            <div class="stepdip" v-bind:class="{stepdipactive:step0}"
                                                 style="padding: 2%">
                                                <p class="stepcolor" v-bind:class="{stepcoloractive:step0}">Project
                                                    details</p>
                                            </div>
                                        </a-col>
                                        <a-col span="8">
                                            <div class="stepdip" v-bind:class="{stepdipactive:step1}"
                                                 style="padding: 2%">
                                                <p class="stepcolor" v-bind:class="{stepcoloractive:step1}">Tech
                                                    skills</p>
                                            </div>
                                        </a-col>
                                        <a-col span="8">
                                            <div class="stepdip" v-bind:class="{stepdipactive:step2}"
                                                 style="padding: 2%">
                                                <p class="stepcolor" v-bind:class="{stepcoloractive:step2}">Budget
                                                    and timelines</p>
                                            </div>
                                        </a-col>
                                    </a-row>


                                    <div class="steps-content" style="padding: 3%">
                                        <div v-if="current === 0">
                                            <a-form :form="createstep1">
                                                <a-row :gutter="16">
                                                    <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                                                           :md="{span: 12, offset: 0 }"
                                                           :lg="{span: 8, offset: 0 }" :xl="{span: 8, offset: 0 }">
                                                        <a-form-item
                                                                label="Project title"
                                                                :label-col="{ span: 24 }"
                                                                :wrapper-col="{ span:  24}"
                                                        >
                                                            <a-input

                                                                    name="title"


                                                            />

                                                        </a-form-item>


                                                    </a-col>

                                                    <a-col :span="24">
                                                        <a-form-item
                                                                label="Project description "
                                                                :label-col="{ span: 24 }"
                                                                :wrapper-col="{ span:  24}"
                                                        >
                                                            <vue-simplemde
                                                                    ref="markdownEditor"/>


                                                        </a-form-item>
                                                    </a-col>
                                                </a-row>
                                            </a-form>

                                        </div>
                                        <div v-if="current === 1">
                                            <a-form :form="createstep1">
                                                <a-row :gutter="16">
                                                    <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                                                           :md="{span: 12, offset: 0 }"
                                                           :lg="{span: 8, offset: 0 }" :xl="{span: 8, offset: 0 }">
                                                        <a-form-item
                                                                label="Github Url"
                                                                :label-col="{ span: 24 }"
                                                                :wrapper-col="{ span:  24}"
                                                        >
                                                            <a-input

                                                                    name="github"


                                                            />

                                                        </a-form-item>


                                                    </a-col>
                                                </a-row>
                                            </a-form>

                                        </div>
                                        <div v-if="current === 2">
                                            <a-form :form="createstep1">
                                                <a-row :gutter="16">
                                                    <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                                                           :md="{span: 12, offset: 0 }"
                                                           :lg="{span: 8, offset: 0 }" :xl="{span: 8, offset: 0 }">
                                                        <a-form-item
                                                                label="Github Url"
                                                                :label-col="{ span: 24 }"
                                                                :wrapper-col="{ span:  24}"
                                                        >
                                                            <a-input

                                                                    name="github"


                                                            />

                                                        </a-form-item>


                                                    </a-col>
                                                </a-row>
                                            </a-form>

                                        </div>
                                    </div>

                                    <div class="steps-action">
                                        <a-button v-if="current < steps.length - 1" type="primary"
                                                  @click="next">
                                            Next
                                        </a-button>
                                        <a-button
                                                v-if="current == steps.length - 1"
                                                type="primary"
                                                @click="$message.success('Processing complete!')"
                                        >
                                            Done
                                        </a-button>
                                        <a-button v-if="current > 0" style="margin-left: 8px" @click="prev">
                                            Previous
                                        </a-button>
                                    </div>


                                </a-col>
                                <a-col span="6"
                                       style="height: calc(80vh - 100px)">
                                    <div style="">
                                        <p style="padding: 2%;font-size: 1rem;font-weight: bold">Tips about our
                                            process</p>
                                        <a-carousel autoplay style="width: 25rem;">
                                            <div>creation</div>
                                            <div>escrow</div>
                                            <div>bidding</div>
                                            <div>analysis</div>
                                            <div>contract</div>
                                            <div>development</div>
                                            <div>conflict resolution</div>


                                        </a-carousel>
                                    </div>

                                </a-col>
                            </a-row>


                        </div>

                    </div>

                </div>

            </a-layout-content>
        </a-layout>
    </a-layout>


</template>

<script>
    import Clientsider from '@/components/frontend/remote/layout/clientsider.vue'
    import Pageheader from '@/components/frontend/remote/layout/clientheader.vue'
    import VueSimplemde from 'vue-simplemde'
    import 'simplemde/dist/simplemde.min.css';


    export default {
        name: "clientdashboard",
        components: {

            Clientsider,
            Pageheader, VueSimplemde

        },
        data() {
            return {
                current: 0,
                step0: true,
                step1: false,
                step2: false,
                steps: [
                    {
                        title: 'First',
                        content: 'First-content',
                    },
                    {
                        title: 'Second',
                        content: 'Second-content',
                    },
                    {
                        title: 'Last',
                        content: 'Last-content',
                    },
                ],
                createstep1: this.$form.createForm(this),
            };
        },
        methods: {
            next() {
                this.step0 = false
                this.step1 = false
                this.step2 = false
                this.current++;
                if (this.current === 0) {
                    this.step0 = true
                } else if (this.current === 1) {
                    this.step0 = true
                    this.step1 = true
                } else if (this.current === 2) {
                    this.step0 = true
                    this.step1 = true
                    this.step2 = true
                }
            },
            prev() {
                this.step0 = false
                this.step1 = false
                this.step2 = false
                this.current--;
                if (this.current === 0) {
                    this.step0 = true
                } else if (this.current === 1) {
                    this.step0 = true
                    this.step1 = true
                } else if (this.current === 2) {
                    this.step2 = true
                }
            },
        },
    }
</script>

<style scoped>

    .poolavatar {
        width: 30%;
        margin-top: 0.5rem;
    }

    .actioncards {
        border-radius: 7px;
        background: #edf2fb;
        box-shadow: -5px -5px 13px #b9bdc4,
        5px 5px 13px #ffffff;


    }

    .steps-content {
        margin-top: 16px;
        border: 1px dashed #e9e9e9;
        border-radius: 6px;
        background-color: #fafafa;
        min-height: 50vh;
        text-align: center;
        padding-top: 80px;
    }

    .steps-action {
        margin-top: 24px;
    }

    .stepdip {
        height: 3rem;
        border-radius: 2px;
        background: #ffffff;
        box-shadow: inset 12px 12px 14px #f7f7f7,
        inset -12px -12px 14px #ffffff;
    }

    .stepdipactive {
        height: 3rem;
        border-radius: 2px;
        background: #ffffff;
        box-shadow: 11px 11px 23px #ccd5de,
        -11px -11px 23px #faffff;
        color: #2e7dfe;
    }

    .stepcolor {
        color: #566c82;
    }

    .stepcoloractive {
        color: #2e7dfe;
    }

    .ant-carousel >>> .slick-slide {
        text-align: center;
        height: calc(80vh - 200px);
        line-height: 160px;
        background: #79a2f1;
        overflow: hidden;
    }

    .ant-carousel >>> .slick-slide h3 {
        color: #fff;
    }


</style>