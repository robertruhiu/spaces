<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh;background-color:#F8FAFB ">
        <RecruiterSider/>


        <a-layout :style="{backgroundColor:'#F8FAFB',marginTop: '1rem' }">


            <a-layout-content style="margin-top: 5%">
            </a-layout-content>
        </a-layout>
    </a-layout>

</template>

<script>
    import UsersService from '@/services/UsersService'
    import RecruiterSider from "../../layout/RecruiterSider";
    import ARow from "ant-design-vue/es/grid/Row";
    import ACol from "ant-design-vue/es/grid/Col";
    import MarketPlaceService from '@/services/Marketplace'
    export default {
        name: "projectdetails",
        components: {
            ACol,
            ARow,
            RecruiterSider,
        },
    }
</script>

<style scoped>

</style>
