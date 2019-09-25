<template>
    <div>

        <div v-if="pickedprofiles.length>0" class="profile">
            <div style="padding: 7%">
                <p>Added Candidates</p>
                <p>
                    <a-icon type="check-circle" theme="twoTone"/>
                    indicates verified candidate
                </p>
                <div v-for="profile in pickedprofiles" v-bind:key="profile"
                     style="border-bottom: 1px solid #e8e8e8;padding-top: 1rem">
                    <p>{{profile.name}} <span v-if="profile.verified"><a-icon
                            type="check-circle" theme="twoTone"/></span>
                        <span style="float: right"><a :@click="remove(profile.id)"><a-icon
                                type="close-circle" theme="twoTone"/></a></span>
                    </p>

                </div>

                <p style="padding-top: 1rem">Total:{{amount}}</p>

                <div style="text-align: center">
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
                            :customer_firstname="customer_firstname"
                            :customer_lastname="customer_lastname"
                            :custom_title="custom.title"
                            :custom_description="custom.description"
                            :custom_logo="custom.logo"
                            :redirect_url="redirectUrl"
                            :payment_plan="paymentPlan"
                            :subaccounts="subaccounts"
                            :payment_method="paymentMethod">
                    </Rave>
                </div>


            </div>
        </div>
        <div class="profile">
            <div style="padding: 4%;margin: 3%;padding-bottom: 7%">
                <div style="text-align: center">
                    <img src="../../../../assets/images/profile.png"
                         style="width: 50%;padding-bottom: 2rem">
                </div>


                <p style="text-align: center;">I like this profile</p>
                <div style="text-align: center">
                    <div v-for="dev in devrequestdevs" :key="dev">

                        <a-button v-if="dev === currentUserProfile.id"
                                  style="margin-left: 1rem;"
                                  type="primary"
                                  @click="navigateTo({name:'mycandidates'})">
                            manage candidate
                        </a-button>

                    </div>

                    <a-button type="primary"
                              @click="pickcandidate(currentUserProfile.id)">
                        Add to my Candidates

                    </a-button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    class Cart {
        constructor(id, name, verified) {
            this.id = id;
            this.name = name;
            this.verified = verified;


        }
    }

    import UsersService from '@/services/UsersService';
    import Payments from '@/services/Payments';
    import Rave from "./Rave";
    import MarketPlaceService from '@/services/Marketplace'

    export default {
        name: "Checkout",
        data() {
            return {

                currentUserProfile: {},
                cart: [],
                pickeddevs: [],
                pickeddevlist: [],
                cart_items: [],
                mycart: null,
                carts: [],
                devrequestdevs: [],
                devrequestpicked: false,
                devs: [],
                pickedprofiles: [],
                amount: 0,
                raveKey: "FLWPUBK-37536a50fc02bed5bddf5ebe89a18e7c-X",
                email: "",
                currency: "USD",
                country: "GH",
                customer_firstname: '',
                customer_lastname: '',

                custom: {
                    title: "Codeln",
                    description: "Payment for Codeln Developers",
                    logo: "https://www.codeln.com/img/logobg.f302741d.svg"
                },

                paymentPlan: "", // add payments plan ID here
                paymentMethod: "", // add 'card' or 'account' if you want a specific feature. Leave empty if you want all features
                subaccounts: {
                    id: "", // id of the subaccount; get from your dashboard
                    transaction_split_ratio: "", //
                    transaction_charge_type: "", //include this if the you want a flat fee eg: flat
                    transaction_charge: "" // include the flat fee amount you want eg: 100
                }
            }
        },
        components: {
            Rave,

        },
        async mounted() {
            this.customer_firstname = this.$store.state.user.first_name
            this.customer_lastname = this.$store.state.user.last_name
            this.email = this.$store.state.user.email
            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}
            };
            let dev_id = this.$route.params.candidateProfileID

            this.currentUserProfile = (await UsersService.currentuser(this.$route.params.candidateProfileID, auth)).data
            if (this.$store.state.user.pk) {
                this.carts = (await Payments.cartlist(this.$store.state.user.pk, auth)).data;

                if (this.carts.length > 0) {
                    this.mycart = this.carts[0]
                    if (this.mycart.devs) {
                        this.pickeddevs = this.mycart.devs.split(',');

                    }


                } else {

                    this.cart = (await Payments.cartcreate({user: this.$store.state.user.pk}, auth)).data;
                }
                for (let i = 0; i < this.pickeddevs.length; i++) {
                    this.pickeddevlist.push(Number(this.pickeddevs[i]))
                    if (Number(this.pickeddevs[i]) === dev_id) {
                        console.log(dev_id)
                    }
                }

                this.devs = (await UsersService.devs()).data;
                if (this.pickeddevlist.length > 0) {
                    for (let i = 0; i < this.devs.length; i++) {
                        for (let j = 0; j < this.pickeddevlist.length; j++) {
                            if (this.devs[i].id === this.pickeddevlist[j]) {
                                let id = this.devs[i].id
                                let name = this.devs[i].user.first_name
                                let verified = false
                                if (this.devs[i].verified_skills) {
                                    verified = true
                                }

                                let one_profile = new Cart(
                                    id, name, verified
                                );
                                this.pickedprofiles.push(one_profile)

                            }

                        }

                    }
                }


            }


            if (this.pickeddevs.length <= 10) {
                this.amount = 200
            } else {
                this.amount = 400
            }
            // dev request already paid for will enable the direct manage button
            MarketPlaceService.mydevelopers(this.$store.state.user.pk, auth)
                .then(resp => {

                        if (resp.data.length !== 0) {


                            for (let i = 0; i < resp.data.length; i++) {
                                this.devrequestdevs.push(Number(resp.data[i].developer.id))
                            }
                            for (let j = 0; j < this.devrequestdevs.length; j++) {
                                if (this.currentUserProfile.id === this.devrequestdevs[j]) {
                                    this.devrequestpicked = true
                                }
                            }
                        }


                    }
                )
                .catch();


        }
        ,
        computed: {
            reference() {
                let text = "";
                let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
                for (let i = 0; i < 10; i++)
                    text += possible.charAt(Math.floor(Math.random() * possible.length));
                return text;
            }
        }
        ,
        methods: {
            navigateTo(route) {
                this.$router.push(route)
            }
            ,
            pickcandidate() {
                let self = this

                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}
                };
                this.pickeddevs.push(this.$route.params.candidateProfileID)
                let developers = this.pickeddevs.join(',')

                Payments.cartitemadd(this.mycart.id, {devs: developers}, auth)
                    .then(resp => {
                        this.pickedprofiles = []
                        self.refresh()


                    })
                    .catch(error => {
                        return error
                    });


            }
            ,
            async refresh() {
                this.devs = (await UsersService.devs()).data;

                for (let i = 0; i < this.devs.length; i++) {
                    if (this.pickeddevs.length > 0) {
                        for (let j = 0; j < this.pickeddevs.length; j++) {

                            if (this.devs[i].id === Number(this.pickeddevs[j])) {
                                let id = this.devs[i].id
                                let name = this.devs[i].user.first_name
                                let verified = false
                                if (this.devs[i].verified_skills) {
                                    verified = true
                                }

                                let one_profile = new Cart(
                                    id, name, verified
                                );
                                this.pickedprofiles.push(one_profile)

                            }

                        }

                    }

                }
                if (this.pickeddevs.length <= 10) {
                    this.amount = 200
                } else {
                    this.amount = 400
                }

            }
            ,

            remove(dev_id) {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}
                };

                let self = this
                var index = this.pickeddevs.indexOf(dev_id.toString());
                if (index > -1) {
                    this.pickeddevs.splice(index, 1);
                    let developers = this.pickeddevs.join(',')

                    Payments.cartitemadd(this.mycart.id, {devs: developers}, auth)
                        .then(resp => {
                            this.pickedprofiles = []
                            self.refresh()
                            return resp


                        })
                        .catch(error => {
                            return error
                        });
                }

            }
            ,

            callback: function (response) {
                let self = this
                if (response.success) {
                    const auth = {
                        headers: {Authorization: 'JWT ' + this.$store.state.token}
                    }
                    for (let j = 0; j < this.pickedprofiles.length; j++) {
                        let picked_developer = {
                            owner: this.$store.state.user.pk,
                            developer: this.pickedprofiles[j].id,
                            paid: true,
                            stage: 'new'
                        }

                        MarketPlaceService.pickdeveloper(picked_developer, auth)
                            .then(resp => {


                                    return resp
                                }
                            )
                            .catch(error => {
                                return error


                            });

                    }
                    Payments.cartitemadd(this.mycart.id, {checked_out: true}, auth)
                        .then(resp => {
                            self.close()
                            return resp
                        })
                        .catch(error => {
                            return error
                        });

                    this.$router.push({
                        name: 'mycandidates'
                    })
                }


            }
            ,
            close: function () {
                console.log("Payment closed")
            }
            ,
        }
    }
</script>

<style scoped>
    .profile {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        background-color: white;
        margin: 1%;

    }

</style>
