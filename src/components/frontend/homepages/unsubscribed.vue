<template>
    <a-layout>

        <Pageheader/>
        <div :style="{ background: '#fff', minHeight: '81vh' }">
            <a-row style="padding: 3%">
                <a-col :xs="{span: 18, offset: 0 }" :sm="{span: 12, offset: 6 }" :md="{span: 12, offset: 6 }"
                       :lg="{span: 12, offset: 8 }" :xl="{span: 12, offset: 9 }">
                    <a-card title="Email preferences" :style="{width:'21rem',marginTop:'2rem'}">


                        <div v-if="loading" style="text-align: center">
                            <a-spin/>
                        </div>
                        <p v-if="status">
                            You have successfully unsubscribed from our email notification services,You can always opt
                            in by enabling them in your "My Profile"
                        </p>
                        <p v-else>
                            Wrong token used to subscribe
                        </p>


                    </a-card>

                </a-col>
            </a-row>
        </div>
        <Footer/>
    </a-layout>
</template>

<script>
    import Pageheader from '@/components/layout/Header.vue'
    import Footer from '@/components/layout/Footer.vue'
    import UsersService from '@/services/UsersService'

    export default {
        name: "unsubscribed",
        data() {
            return {
                loading: false,
                status: null
            }
        },
        components: {

            Pageheader,
            Footer,

        },
        async mounted() {
            this.loading = true
            UsersService.unsubscribe(this.$store.state.route.params.token)
                .then(resp => {
                    this.status = true
                    this.loading = false


                })
                .catch(err => {
                    this.status = false
                    this.loading = false

                })

        }
    }
</script>

<style scoped>

</style>