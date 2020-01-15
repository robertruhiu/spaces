<template>
    <a-layout>

        <Pageheader/>
        <div :style="{ background: '#fff', minHeight: '81vh' }">
            <a-row style="padding: 3%">
                <a-col :xs="{span: 18, offset: 0 }" :sm="{span: 12, offset: 6 }" :md="{span: 12, offset: 6 }"
                       :lg="{span: 12, offset: 8 }" :xl="{span: 12, offset: 9 }">
                </a-col>
            </a-row>
        </div>
        <Footer/>
    </a-layout>
</template>

<script>
    import Pageheader from '@/components/layout/Header.vue'
    import Footer from '@/components/layout/Footer.vue'

    export default {
        name: "unsubscribed",
        components: {

            Pageheader,
            Footer,

        },
    }
</script>

<style scoped>

</style>