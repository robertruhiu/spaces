<template>
    <div style="text-align: center;background-color: white">
        <hide-at breakpoint="mediumAndBelow">
        <a-affix :offsetBottom="this.bottom">
            <div>
                <img style="height: 8rem;" src="../../assets/images/banner.png" >
            </div>

        </a-affix>
        </hide-at>
    </div>








</template>

<script>
    import { hideAt} from 'vue-breakpoints'

    export default {
        name: "developerfooter",

        data() {
            return {

                bottom: 10,
            };
        },
        components: {
            hideAt,
        },
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
