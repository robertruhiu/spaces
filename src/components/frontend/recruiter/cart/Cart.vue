<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">

        <!--        <RecruiterSider/>-->

        <a-layout :style="{ marginLef: '200px',backgroundColor:'#ffffff', padding: '48px' }">
            <a-layout-content>
                <a-card title="Cart">
                    <!--                    convert to table and strip some data-->
                    <div>
                        <a-card v-for="item in my_cartitems">
                            <!--                        {{item.developer}}-->
                            {{item.developer.verified_skills}}
                            <br>
                            {{item.developer.country}}
                            <br>
                            {{item.developer.availabilty}}
                            <br>

                            {{item.developer.tags}}
                            <br>
                            {{item.developer.language}}
                            <br>
                            {{item.developer.language}}
                            <br>
                            <a-button type="primary" @click="RemoveDeveloper(item.id)">Remove</a-button>
                            <template class="ant-card-actions" slot="actions">
                                <p> Total Amount: {{ item.cart.total_amount}}</p>
                                <p>Checkout</p>
                            </template>
                        </a-card>
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
                my_cart: 8,
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
                // this.my_cart = (await Payments.cartcreate(this.$store.state.user.pk, auth)).data
                this.my_cartitems = (await Payments.cartitems(this.my_cart, auth)).data
            }

        },
        methods: {
            navigateTo(route) {
                this.$router.push(route)
            },
            AddDeveloper(developer_id, cart_id) {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                };
                Payments.cartitemadd(developer_id, cart_id, auth)
                    .then(resp => {
                        this.cartitems.push(developer)
                    })
                    .catch(err =>
                        console.log(err)
                    )
            },
            RemoveDeveloper(cart_item_id) {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                };
                Payments.cartitemdelete(cart_item_id, auth)
                    .then(resp => {
                        this.$router.push({
                            name: 'cart',
                        })
                    })
                    .catch(err =>
                        console.log(err))
            },
        },
    }
</script>

<style scoped>

</style>
