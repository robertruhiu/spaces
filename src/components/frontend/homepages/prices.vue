<template>
    <a-layout>

        <Pageheader/>
        <a-layout-content :style="{ padding: '0 0px', marginTop: '4rem' }">

            <div :style="{ background: '#fff', minHeight: '60vh',padding:'0 2%' }">
                <a-row :gutter="16" style="padding: 3%">


                    <a-col class="tracker" :xs="{span: 24, offset: 0  }" :sm="{span: 12, offset: 0 }"
                           :md="{span: 12, offset: 0 }"
                           :lg="{span: 6, offset: 0 }" :xl="{span: 6,offset: 0 }">
                        <a-row class='managecard' hoverable>
                            <a-col span="24">
                                <div style="text-align:center;padding: 5%;">
                                    <p style="color: #1976D2;font-weight: bold;text-align: center;font-size: 1rem">
                                        Basic</p>

                                </div>
                                <a-progress :percent="100" strokeColor="#4DB3D3" :showInfo="false"/>

                            </a-col>
                            <a-col span="24">
                                <div style="padding: 5%">
                                    <p style="color: #1976D2;text-align: center;font-size: 1rem">$100</p>
                                    <div style="text-align: center">
                                        <p>4 Complete candidates profiles</p>
                                        <p>Free job posting</p>
                                        <p>Access to verified candidates</p>
                                        <p>Intuitive inbuilt ATS</p>
                                        <p>Smart Candidate Recommendation System</p>
                                        <p>Access to technology reports, trends and insights</p>
                                    </div>


                                </div>

                            </a-col>
                        </a-row>


                    </a-col>

                    <a-col class="tracker" :xs="{span: 24, offset: 0  }" :sm="{span: 12, offset: 0 }"
                           :md="{span: 12, offset: 0 }"
                           :lg="{span: 6, offset: 0 }" :xl="{span: 6,offset: 0 }">
                        <a-row class='managecard' hoverable>
                            <a-col span="24">
                                <div style="text-align:center;padding: 5%;">
                                    <p style="color: #1976D2;font-weight: bold;text-align: center;font-size: 1rem">
                                        Plus</p>
                                </div>
                                <a-progress :percent="100" strokeColor="#4DB3D3" :showInfo="false"/>

                            </a-col>
                            <a-col span="24">
                                <div style="padding: 5%">
                                    <p style="color: #1976D2;text-align: center;font-size: 1rem">$200</p>
                                    <div style="text-align: center">
                                        <p>10 Complete candidates profiles</p>
                                        <p>Free job posting</p>
                                        <p>Access to verified candidates</p>
                                        <p>Intuitive inbuilt ATS</p>
                                        <p>Smart Candidate Recommendation System</p>
                                        <p>Access to technology reports, trends and insights</p>
                                    </div>


                                </div>

                            </a-col>
                        </a-row>


                    </a-col>

                    <a-col class="tracker" :xs="{span: 24, offset: 0  }" :sm="{span: 12, offset: 0 }"
                           :md="{span: 12, offset: 0 }"
                           :lg="{span: 6, offset: 0 }" :xl="{span: 6,offset: 0 }">
                        <a-row class='managecard' hoverable>
                            <a-col span="24">
                                <div style="text-align:center;padding: 5%;">
                                    <p style="color: #1976D2;font-weight: bold;text-align: center;font-size: 1rem">
                                        Business</p>
                                </div>
                                <a-progress :percent="100" strokeColor="#0868AC" :showInfo="false"/>

                            </a-col>
                            <a-col span="24">
                                <div style="padding: 5%">
                                    <p style="color: #1976D2;text-align: center;font-size: 1rem">$500</p>
                                    <div style="text-align: center">
                                        <p>33 Complete candidates profiles</p>
                                        <p>Free job posting</p>
                                        <p>Access to verified candidates</p>
                                        <p>Intuitive inbuilt ATS</p>
                                        <p>Smart Candidate Recommendation System</p>
                                        <p>Candidate timeline events,interview notes and rating by other recruiters</p>
                                        <p>Access to technology reports, trends and insights</p>
                                    </div>

                                </div>

                            </a-col>
                        </a-row>


                    </a-col>

                    <a-col :xs="{span: 24, offset: 0  }" :sm="{span: 12, offset: 0 }" :md="{span: 12, offset: 0 }"
                           :lg="{span: 6, offset: 0 }" :xl="{span: 6,offset: 0 }" class="tracker">
                        <a-row class='managecard' hoverable>
                            <a-col span="24">
                                <div style="text-align:center;padding: 5%;">
                                    <p style="color: #1976D2;font-weight: bold;text-align: center;font-size: 1rem">
                                        Enterprise</p>
                                </div>
                                <a-progress :percent="100" strokeColor="#084081" :showInfo="false"/>

                            </a-col>
                            <a-col span="24">
                                <div style="padding: 5%">
                                    <div style="text-align: center;margin-bottom: 1rem">
                                        <a-button type="primary" style="font-size: 1rem" href="mailto:sales@codeln.com?subject=Enterprise package!">Contact Us</a-button>

                                    </div>
                                    <div style="text-align: center">
                                        <p>Unlimited access to complete candidates profiles</p>
                                        <p>Free job posting</p>
                                        <p>Access to verified candidates</p>
                                        <p>Intuitive inbuilt ATS</p>
                                        <p>Smart Candidate Recommendation System</p>
                                        <p>Dedicated Account Executive</p>
                                        <p>Candidate timeline events,interview notes and rating by other recruiters</p>
                                        <p>6 months talent warranty</p>
                                        <p>Access to exclusive list of top performing candidates</p>
                                    </div>


                                </div>

                            </a-col>
                        </a-row>


                    </a-col>


                </a-row>


            </div>
<!--            &lt;!&ndash;-&#45;&#45;clients&#45;&#45;&ndash;&gt;-->
<!--            <div :style="{ background: '#fff', padding: '31px', minHeight: '60vh' }">-->
<!--                <div style="background-color: #ffffff;">-->
<!--                    <div style="text-align: center">-->
<!--                        <h2 class="headers">You're in good company</h2>-->
<!--                        <p style="font-size: 1rem;">Companies around the world use Codeln tech recruiting platform to improve-->
<!--                            their hiring processes.</p>-->

<!--                    </div>-->



<!--                </div>-->

<!--            </div>-->


        </a-layout-content>
        <banner/>

        <Footer/>
    </a-layout>

</template>

<script>

    import Pageheader from '@/components/layout/Header.vue'
    import Footer from '@/components/layout/Footer.vue'
    import AuthService from '@/services/AuthService'
    import User from '@/services/UsersService'
    import banner from '@/components/layout/banner'

    export default {
        name: "prices",
        components: {

            Pageheader,
            Footer,banner

        },
        data() {
            return {}
        }
    }
</script>

<style scoped>
    .managecard {
        border: 1px solid #1876d21c;
        min-height: 65vh;
        box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;

    }

    .text-muted {
        color: rgba(0, 0, 0, 0.45);
    }

    .tracker {
        margin-bottom: 1rem;
    }

    .headers {
        color: #007BFF;
        font-size: 1.5rem;
    }


</style>
