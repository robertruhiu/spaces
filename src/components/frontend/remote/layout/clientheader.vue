<template>
    <div>


        <a-layout-header :style="{width: '100%',backgroundColor:'#004ec7',height:'6rem',padding: '1px 30px 0',
            borderBottom: '1px solid #e8e8e8'}">


            <a-row>

                <a-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
                <span style="color: white;font-size: 1rem;font-weight:bold">{{greeting}}
                   Dennis Ruhiu</span>

                </a-col>


            </a-row>


        </a-layout-header>


    </div>


</template>

<script>


    import moment from 'moment';

    export default {
        name: "clientheader",
        components: {},
        data() {

            return {

                greeting: null,

                top: 0

            }
        },
        async mounted() {
            moment
            let today = new Date()
            let curHr = today.getHours()

            if (curHr < 12) {
                this.greeting = 'Good Morning'

            } else if (curHr < 18) {
                this.greeting = 'Good Afternoon'

            } else {
                this.greeting = 'Good Evening'

            }


        },
        filters: {},
        methods: {

            navigateTo(route) {
                this.$router.push(route)
            },


        },
    }
</script>

<style scoped>


</style>
