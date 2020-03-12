<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh;">
        <CandidateSider/>
        <a-layout>
            <a-layout-content style="background-color: white">
                <BridgeHomeHeader/>
                <div :style="{ padding: '5px', background: '#fff',marginTop:'1rem' }">
                    <a-row style="margin-bottom: 1rem;padding: 0 3%">

                        <a-col :xs="{span: 24, offset: 1 }" :sm="{span: 24, offset: 2 }" :md="{span: 24, offset: 2 }"
                               :lg="{span: 24, offset: 0 }" :xl="{span: 24, offset: 0 }">

                            <h3 style="color: #1976D2;font-weight: bold;">Pick a path you want to
                                specialize in </h3>

                        </a-col>


                    </a-row>
                    <a-row>
                        <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                               :md="{span: 24, offset: 0 }"
                               :lg="{span: 20, offset: 0 }" :xl="{span: 20, offset: 0 }">
                            <a-row style="margin-bottom: 1rem;padding: 0 3%">

                                <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                                       :md="{span: 24, offset: 0 }"
                                       :lg="{span: 24, offset: 0 }" :xl="{span: 24, offset: 0 }"
                                       style="margin-bottom: 1rem">

                                    <div class="actioncards2">
                                        <h2 style="margin-bottom: 1rem">Frontend Development</h2>
                                        <a-timeline>
                                            <a-timeline-item>
                                                <p>
                                                    <strong>Fundamentals (all 3 are fundamentals please cover them
                                                        all)</strong>
                                                <p>
                                                    <a-row :gutter="16">

                                                        <a-col :xs="{span: 10, offset: 0 }" :sm="{span: 10, offset: 0 }"
                                                               :md="{span: 10, offset: 0 }"
                                                               :lg="{span: 6, offset: 0 }" :xl="{span: 6,offset: 0 }">
                                                            <router-link :to="{name:'resources',params:{path:'html'}}">
                                                                <div class="actioncards">
                                                                    html&css
                                                                </div>
                                                            </router-link>
                                                        </a-col>

                                                        <a-col :xs="{span: 4, offset: 0 }" :sm="{span: 4, offset: 0 }"
                                                               :md="{span: 4, offset: 0 }"
                                                               :lg="{span: 2, offset: 0 }" :xl="{span: 2,offset: 0 }">
                                                            <div class="pointers">
                                                                --->
                                                            </div>

                                                        </a-col>

                                                        <a-col :xs="{span: 10, offset: 0 }" :sm="{span: 10, offset: 0 }"
                                                               :md="{span: 10, offset: 0 }"
                                                               :lg="{span: 6, offset: 0 }" :xl="{span: 6,offset: 0 }">
                                                            <router-link
                                                                    :to="{name:'resources',params:{path:'javascript'}}">
                                                                <div class="actioncards">
                                                                    javascript
                                                                </div>
                                                            </router-link>
                                                        </a-col>


                                                    </a-row>
                                                </p>


                                            </a-timeline-item>
                                            <a-timeline-item>
                                                <p><strong>Frameworks: Pick one to build</strong>
                                                <p>
                                                    <a-row :gutter="16">
                                                        <router-link :to="{name:'resources',params:{path:'vuejs'}}">
                                                            <a-col :xs="{span: 10, offset: 0 }"
                                                                   :sm="{span: 10, offset: 0 }"
                                                                   :md="{span: 10, offset: 0 }"
                                                                   :lg="{span: 6, offset: 0 }"
                                                                   :xl="{span: 6,offset: 0 }"
                                                                   style="margin-bottom: 1rem">
                                                                <div class="actioncards">
                                                                    Vue js
                                                                </div>

                                                            </a-col>
                                                        </router-link>

                                                        <a-col :xs="{span: 2, offset: 0 }" :sm="{span: 2, offset: 0 }"
                                                               :md="{span: 2, offset: 0 }"
                                                               :lg="{span: 2, offset: 0 }" :xl="{span: 2,offset: 0 }"
                                                               style="margin-bottom: 1rem">
                                                            <div class="pointers">
                                                                or
                                                            </div>

                                                        </a-col>
                                                        <router-link :to="{name:'resources',params:{path:'reactjs'}}">
                                                            <a-col :xs="{span: 10, offset: 0 }"
                                                                   :sm="{span: 10, offset: 0 }"
                                                                   :md="{span: 10, offset: 0 }"
                                                                   :lg="{span: 6, offset: 0 }"
                                                                   :xl="{span: 6,offset: 0 }"
                                                                   style="margin-bottom: 1rem">
                                                                <div class="actioncards">
                                                                    React js
                                                                </div>

                                                            </a-col>
                                                        </router-link>
                                                        <a-col :xs="{span: 2, offset: 0 }" :sm="{span: 2, offset: 0 }"
                                                               :md="{span: 2, offset: 0 }"
                                                               :lg="{span: 2, offset: 0 }" :xl="{span: 2,offset: 0 }"
                                                               style="margin-bottom: 1rem">
                                                            <div class="pointers">
                                                                or
                                                            </div>

                                                        </a-col>
                                                        <router-link :to="{name:'resources',params:{path:'angular'}}">
                                                            <a-col :xs="{span: 10, offset: 0 }"
                                                                   :sm="{span: 10, offset: 0 }"
                                                                   :md="{span: 10, offset: 0 }"
                                                                   :lg="{span: 6, offset: 0 }"
                                                                   :xl="{span: 6,offset: 0 }"
                                                                   style="margin-bottom: 1rem">

                                                                <div class="actioncards">
                                                                    Angular
                                                                </div>

                                                            </a-col>
                                                        </router-link>
                                                    </a-row>
                                                </p>


                                            </a-timeline-item>

                                        </a-timeline>


                                    </div>

                                </a-col>
                                <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                                       :md="{span: 24, offset: 0 }"
                                       :lg="{span: 24, offset: 0 }" :xl="{span: 24, offset: 0 }"
                                       style="margin-bottom: 1rem">

                                    <div class="actioncards2">

                                        <h2 style="margin-bottom: 1rem">Backend Development</h2>
                                        <p><strong>Each language matches a framework to use.They cannot be
                                            interchanged.Pick
                                            one</strong></p>
                                        <a-row style="padding-top: 2%" :gutter="32">
                                            <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                                                   :md="{span: 8, offset: 0 }"
                                                   :lg="{span: 8, offset: 0 }" :xl="{span: 8,offset: 0 }"
                                                   style="margin-bottom: 1rem">
                                                <a-timeline>
                                                    <a-timeline-item style="margin-bottom: 1rem">
                                                        <router-link
                                                                :to="{name:'resources',params:{path:'javascript'}}">

                                                            <div class="actioncards">
                                                                Javascript
                                                            </div>

                                                        </router-link>

                                                    </a-timeline-item>
                                                    <a-timeline-item>
                                                        <router-link :to="{name:'resources',params:{path:'nodejs'}}">

                                                            <div class="actioncards">
                                                                Express(nodejs)
                                                            </div>


                                                        </router-link>
                                                    </a-timeline-item>
                                                </a-timeline>

                                            </a-col>
                                            <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                                                   :md="{span: 8, offset: 0 }"
                                                   :lg="{span: 8, offset: 0 }" :xl="{span: 8,offset: 0 }"
                                                   style="margin-bottom: 1rem">
                                                <a-timeline>
                                                    <a-timeline-item style="margin-bottom: 1rem">
                                                        <router-link :to="{name:'resources',params:{path:'python'}}">

                                                            <div class="actioncards">
                                                                Python
                                                            </div>


                                                        </router-link>

                                                    </a-timeline-item>
                                                    <a-timeline-item>
                                                        <router-link :to="{name:'resources',params:{path:'django'}}">

                                                            <div class="actioncards">
                                                                Django
                                                            </div>


                                                        </router-link>
                                                    </a-timeline-item>
                                                </a-timeline>

                                            </a-col>
                                            <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                                                   :md="{span: 8, offset: 0 }"
                                                   :lg="{span: 8, offset: 0 }" :xl="{span: 8,offset: 0 }"
                                                   style="margin-bottom: 1rem">
                                                <a-timeline>
                                                    <a-timeline-item style="margin-bottom: 1rem">
                                                        <router-link :to="{name:'resources',params:{path:'php'}}">

                                                            <div class="actioncards">
                                                                Php
                                                            </div>


                                                        </router-link>

                                                    </a-timeline-item>
                                                    <a-timeline-item>
                                                        <router-link :to="{name:'resources',params:{path:'laravel'}}">

                                                            <div class="actioncards">
                                                                Laravel
                                                            </div>


                                                        </router-link>
                                                    </a-timeline-item>
                                                </a-timeline>

                                            </a-col>
                                        </a-row>


                                    </div>

                                </a-col>


                            </a-row>
                        </a-col>
                        <hide-at breakpoint="mediumAndBelow">
                            <a-col span="4">
                                <div class="advice">
                                    <strong>Unsure of which language to choose or path to follow</strong>
                                    <p>Here are some resources that can enable you to make the best decision</p>

                                    <p><a href="https://roadmap.sh/" target="_blank">1.Roadmap to becoming a web
                                        developer</a></p>

                                    <p><a href="https://research.hackerrank.com/developer-skills/2019" target="_blank">2.Current
                                        skills in demand in market</a></p>

                                    <p>
                                        <a href="https://medium.com/javascript-scene/how-popular-is-javascript-in-2019-823712f7c4b1"
                                           target="_blank">3.Why javascript</a></p>
                                    <p><a href="https://www.lambdatest.com/blog/top-javascript-frameworks-for-2019/"
                                          target="_blank">4.Javascript frameworks</a></p>
                                    <p><a href="https://www.youtube.com/watch?v=SWZ_4YBFBhs" target="_blank">5.Which
                                        javascript framework to use(Angular/React/Vue)</a></p>
                                    <p><a href="https://www.youtube.com/watch?v=pkdgVYehiTE" target="_blank">6.Frontend
                                        vs Backend vs Fullstack Web Development - What should you learn?</a></p>

                                </div>

                            </a-col>
                        </hide-at>

                    </a-row>

                </div>

            </a-layout-content>
        </a-layout>
    </a-layout>
</template>

<script>
    import CandidateSider from "../../layout/CandidateSider";
    import BridgeHomeHeader from "../../layout/bridgehomeheader";
    import {hideAt} from 'vue-breakpoints'

    export default {
        name: "paths",
        components: {
            BridgeHomeHeader,
            CandidateSider,
            hideAt
        },
    }
</script>

<style scoped>
    .actioncards {
        width: 100%;

        padding: 0.89rem;

        border-radius: 0;

        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);


    }

    .actioncards2 {

        border-radius: 0;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        padding: 0.89rem;

    }

    .pointers {
        margin-top: 1rem;
        text-align: center;
    }

    .advice {

        padding: 4%;
        border-radius: 0;
        border: 1px solid hsla(240, 1%, 74%, .3);


    }

</style>