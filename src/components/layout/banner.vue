<template>
    <div style="background-color: white">
        <hide-at breakpoint="mediumAndBelow">
            <a-affix :offsetBottom="this.bottom">
                <div>
                    <span v-if="isHidden === false" style="align-content: end">
                        <span v-on:click="isHidden = true">
                            <a-button type="primary" size="small">
                                        <a-icon type="close"/>
                                    </a-button>
                            </span>
                    </span>


                    <a-row style="" v-if="isHidden === false">


                        <a-col span="12" class="customborderimage">
                            <div>
                                <img style="width: 100%;height: 11rem" src="../../assets/images/cropped.png">
                            </div>

                        </a-col>
                        <a-col span="4" style="background-color: white;padding: 2%;height: 11rem;" class="customborder">
                          <p>Do you have a project and are looking for developers to build it for you?Get started on remote codeln</p>
                          <a href="https://remote.codeln.com/" target="_blank">
                            <a-button type="primary" >
                              Visit
                              <a-icon type="right"/>
                            </a-button>
                          </a>







                        </a-col>

                    </a-row>
                </div>


            </a-affix>
        </hide-at>
        <show-at breakpoint="mediumAndBelow">
            <a-affix :offsetBottom="this.bottom">
                <span v-if="isHidden === false" style="align-content: end">
                        <span v-on:click="isHidden = true">
                            <a-button type="primary" size="small">
                                        <a-icon type="close"/>
                                    </a-button>
                            </span>
                    </span>
                <div style="background-color: #3854c6; padding: 31px;min-height: 10rem;padding-top: 3rem"
                     v-if="isHidden === false">

                    <div style="color: white">

                        <a-row :gutter="16" v-if="isHidden === false">
                            <a-col :xs="{span: 8, offset: 0 }" :sm="{span: 8, offset: 0 }"
                                   :md="{span: 8, offset: 0 }"
                                   :lg="{span: 12, offset: 0 }" :xl="{span: 12, offset: 0 }">
                                <h2 style="color: white">Codeln Remote</h2>
                            </a-col>
                            <a-col :xs="{span: 16, offset: 0 }" :sm="{span: 16, offset: 0 }"
                                   :md="{span: 16, offset: 0 }"
                                   :lg="{span: 8, offset: 0 }" :xl="{span: 8, offset: 0 }">
                                <div>

                                    <p>The fastest way to secure remote gigs and projects</p>

                                  <a href="https://remote.codeln.com/" target="_blank">
                                    <a-button type="primary" >Visit
                                      <a-icon type="right"/>
                                    </a-button>
                                  </a>

                                </div>

                            </a-col>


                        </a-row>
                    </div>


                </div>
            </a-affix>
        </show-at>
    </div>


</template>

<script>
    import {hideAt, showAt} from 'vue-breakpoints'



    export default {
        name: "developerfooter",

        data() {
            return {
                loading: false,
                bottom: 10,
                remote: false,
                isHidden: false,
            };
        },
        components: {
            hideAt, showAt
        },
        async mounted() {

        },
        methods: {
            closebanner() {
                console.log('am closed')
            }


        }
    }
</script>

<style scoped>
    a {
        color: #ffffff;
    }

    .icons-list >>> .anticon {
        margin-right: 6px;
        font-size: 24px;
    }

    .customborder {

        box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important
    }

    .customborderimage {

        box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important
    }

</style>
