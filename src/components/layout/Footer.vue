<template>
    <a-layout-footer style="min-height: 16rem;background-color: #1875d2;">
        <a-row :gutter="16" :style="{marginTop: '2rem',padding:'0 6rem'}">
            <a-col :span="6">
                <img class="imagecenter" src="../../assets/logo.svg" style="width: 70%">
            </a-col>
            <a-col :span="18">
                <footer id="footer">
            <div class="footer-wrap">
                <div class="ant-row">
                    <div class="ant-col-xs-24 ant-col-sm-24 ant-col-md-8">
                        <div class="footer-center"><h2 style="color: white">Services</h2>
                            <div>
                                <router-link to="talent">
                                    Talent
                                </router-link>



                            </div>
                            <div>
                                <router-link to="jobs">
                                    Job Board
                                </router-link>


                            </div>

                        </div>
                    </div>
                    <div class="ant-col-xs-24 ant-col-sm-24 ant-col-md-8">
                        <div class="footer-center"><h2 style="color: white">Company</h2>
                            <div><router-link to="privacy">Privacy</router-link></div>
                            <div><router-link to="terms">Terms</router-link></div>

                        </div>
                    </div>
                    <div class="ant-col-xs-24 ant-col-sm-24 ant-col-md-8">
                        <div class="footer-center"><h2 style="color: white">Contact</h2>

                            <div class="icons-list">
                                <a href="mailto:info@codeln.com" target="_top">
                                <a-icon  type="message"/>
                                </a>
                                <a class="text-muted" href="https://www.facebook.com/CodelnSpaces/" target="_blank">
                                <a-icon   type="facebook"/>
                                </a>
                                <a class="text-muted" href="https://www.linkedin.com/company/codeln/" target="_blank">
                                <a-icon  type="linkedin"/>
                                </a>
                                <a class="text-muted" href="https://twitter.com/Codeln_spaces" target="_blank">
                                <a-icon   type="twitter" />
                                </a>
                            </div>


                        </div>
                    </div>

                </div>
            </div>
        </footer>
            </a-col>


        </a-row>


    </a-layout-footer>
</template>

<script>

    import ACol from "ant-design-vue/es/grid/Col";
    export default {
        name: "Footer",
        components: {ACol},
    }
</script>

<style scoped>
    .imagecenter {


    }

    a {
        color: #ffffff;
    }

    .icons-list >>> .anticon {
        margin-right: 6px;
        font-size: 24px;
    }


</style>
