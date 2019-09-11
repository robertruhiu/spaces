<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">

        <!--        <RecruiterSider/>-->

        <a-layout :style="{ marginLef: '200px',backgroundColor:'#ffffff', padding: '48px' }">
            <a-layout-content>
                <a-card title="Cart">
                    <h3 :style="{ marginBottom: '16px' }">Default Size</h3>
                    <a-list
                            bordered
                            :dataSource="my_cartitems"
                    >
                        <a-list-item slot="renderItem" slot-scope="item, index">
                            <a-list-item>{{item.developer.user.first_name}}</a-list-item>
                            <a-list-item>{{item.developer.user.last_name}}</a-list-item>
                        </a-list-item>
                        <div slot="footer"><a-button type="primary" @click="RemoveDeveloper(item.id)">Remove</a-button></div>
                    </a-list>
                    <!--                    <div>-->
                    <!--                        Review your Order-->
                    <!--&lt;!&ndash;                        <a-card v-for="item in my_cartitems">&ndash;&gt;-->
                    <!--&lt;!&ndash;                            &lt;!&ndash;                        {{item.developer}}&ndash;&gt;&ndash;&gt;-->
                    <!--&lt;!&ndash;                            {{item.developer.verified_skills}}&ndash;&gt;-->
                    <!--&lt;!&ndash;                            <br>&ndash;&gt;-->
                    <!--&lt;!&ndash;                            {{item.developer.country}}&ndash;&gt;-->
                    <!--&lt;!&ndash;                            <br>&ndash;&gt;-->
                    <!--&lt;!&ndash;                            {{item.developer.availabilty}}&ndash;&gt;-->
                    <!--&lt;!&ndash;                            <br>&ndash;&gt;-->

                    <!--&lt;!&ndash;                            {{item.developer.tags}}&ndash;&gt;-->
                    <!--&lt;!&ndash;                            <br>&ndash;&gt;-->
                    <!--&lt;!&ndash;                            {{item.developer.language}}&ndash;&gt;-->
                    <!--&lt;!&ndash;                            <br>&ndash;&gt;-->
                    <!--&lt;!&ndash;                            {{item.developer.language}}&ndash;&gt;-->
                    <!--&lt;!&ndash;                            <br>&ndash;&gt;-->
                    <!--&lt;!&ndash;                            <a-button type="primary" @click="RemoveDeveloper(item.id)">Remove</a-button>&ndash;&gt;-->
                                                <template class="ant-card-actions" slot="actions">
                                                    <p> Total Amount: {{ item.cart.total_amount}}</p>
                                                    <p>Pay Now</p>
                                                </template>
                    <!--                        </a-card>-->
                    <!--                    </div>-->
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
        name: "Checkout",
        data() {
            return {
                currentUserProfile: {},
                my_cart: '8',
                projectlist: [],
                my_cartitems: [],
            }
        },
        components: {
            // eslint-disable-next-line vue/no-unused-components
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