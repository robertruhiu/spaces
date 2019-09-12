<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
        <br>
        <!--        <RecruiterSider/>-->
        <a-layout :style="{ marginLef: '200px',backgroundColor:'#ffffff', padding: '48px' }">
            <a-layout-content>
                <a-card title="Checkout">
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
                                <Rave
                                        style-class="paymentbtn"
                                        :email="email"
                                        :amount="amount"
                                        :reference="reference"
                                        :rave-key="raveKey"
                                        :callback="callback"
                                        :close="close"
                                        :currency="currency"
                                        :country="country"
                                        :customer_firstname="customer.firstname"
                                        :customer_lastname="customer.lastname"
                                        :custom_title="custom.title"
                                        :custom_description="custom.description"
                                        :custom_logo="custom.logo"
                                        :redirect_url="redirectUrl"
                                        :payment_plan="paymentPlan"
                                        :subaccounts="subaccounts"
                                        :payment_method="paymentMethod">
                                </Rave>
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
    import Payments from '@/services/Payments';
    import Card from "ant-design-vue/es/card/Card";
    import Rave from "./Rave";

    export default {
        name: "Checkout",
        data() {
            return {
                currentUserProfile: {},
                my_cart: [],
                my_cartitems: [],
                raveKey: "FLWPUBK-37320275f784b16ec1e30b1342c0a223-X",
                email: "test@example.com", // email address of your client
                amount: 10,  // replace with your desired amount
                currency: "USD", // supported currencies NGN, USD, EUR, GBP UGX, TZX, GHS, KES, ZAR
                country: "NG", // pass country NG, GH, KE, ZA
                customer: {
                    firstname: "Phil", // add customer firstname
                    lastname: "sang" // add customer lastname
                },
                custom: {
                    title: "Codeln", // add custom title
                    description: "Yada yada", // add a description
                    logo: "bla" // add logo
                },
                redirectUrl: 'http://localhost:8081/#/recruiter', // add redirect url
                paymentPlan: "", // add payments plan ID here
                paymentMethod: "", // add 'card' or 'account' if you want a specific feature. Leave empty if you want all features
                subaccounts: {
                    id: "RS_73954F005E68DADF3483197D5CF13E1E", // id of the subaccount; get from your dashboard
                    transaction_split_ratio: "", //
                    transaction_charge_type: "", //include this if the you want a flat fee eg: flat
                    transaction_charge: "" // include the flat fee amount you want eg: 100
                }
            }
        },
        components: {
            Rave,
            Card,
        },
        async mounted() {
            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}
            };
            if (this.$store.state.user.pk) {
                this.currentUserProfile = (await UsersService.currentuser(this.$store.state.user.pk, auth)).data
                this.my_cart = (await Payments.cartcreate(this.currentUserProfile.id, auth)).data
                this.amount = this.my_cart.total_amount
                this.fname = this.currentUserProfile.user.first_name
                this.lname = this.currentUserProfile.user.last_name
                this.email = this.currentUserProfile.user.email
                this.my_cartitems = (await Payments.cartitems(this.my_cart.id, auth)).data
            }

        },
        computed: {
            reference() {
                let text = "";
                let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
                for (let i = 0; i < 10; i++)
                    text += possible.charAt(Math.floor(Math.random() * possible.length));
                return text;
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
            callback: function (response) {
                console.log(response)
            },
            close: function () {
                console.log("Payment closed")
            },
        }
    }
</script>

<style scoped>

</style>