<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">

        <!--        <RecruiterSider/>-->

        <a-layout :style="{ marginLef: '200px',backgroundColor:'#ffffff', padding: '48px' }">
            <a-layout-content>
                <a-card title="Cart">
                    <!--                    convert to table and strip some data-->
                    {{ currentUserProfile}}
                    <div>

                    </div>
                </a-card>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>

<script>
    import UsersService from '@/services/UsersService';
    import Projects from '@/services/Projects';
    import Payments from '@/services/Payments';
    import Card from "ant-design-vue/es/card/Card";

    export default {
        name: "Cart",
        data() {
            return {
                currentUserProfile: {},
                my_cart: [],
                projectlist: [],
                my_cartitems: [],
            }
        },
        components: {
            Card,
        },
        async mounted() {
            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}
            };
            if (this.$store.state.user.pk) {
                this.currentUserProfile = (await UsersService.currentuser(this.$store.state.user.pk, auth)).data
                this.projectlist = (await Projects.myprojects(this.$store.state.user.pk, auth)).data
                this.my_cart = (await Payments.cartcreate(this.currentUserProfile.id, auth)).data
                this.my_cartitems = (await Payments.cartitems(this.my_cart.id, auth)).data
            }

        },
        methods: {
            navigateTo(route) {
                this.$router.push(route)
            },
            AddDeveloper() {


            },
            RemoveDeveloper() {

            },
        },
    }
</script>

<style scoped>

</style>
