<template>
    <div class="rave">
        <button class="button" v-on:click="payWithRave">Pay Now</button>
    </div>
</template>

<script>
    export default {
        name: 'Rave',
        props: {
            isProduction: {
                type: Boolean,
                required: false,
                default: false //set to true if you are going live
            },
            email: {
                type: String,
                required: true
            },
            amount: {
                type: Number,
                required: true
            },
            raveKey: {
                type: String,
                required: true
            },
            reference: {
                type: String,
                required: true
            },
            callback: {
                type: Function,
                required: true,
                default: (response) => {
                }
            },
            close: {
                type: Function,
                required: true,
                default: () => {
                }
            },
            metadata: {
                type: Object,
                default: function () {
                    return {}
                }
            },
            currency: {
                type: String,
                default: 'NGN'
            },
            country: {
                type: String,
                default: 'NG'
            },
            customer_firstname: {
                type: String,
                default: ''
            },
            customer_lastname: {
                type: String,
                default: ''
            },
            custom_title: {
                type: String,
                default: 'Codeln'
            },
            custom_description: {
                type: String,
                default: ''
            },
            custom_logo: {
                type: String,
                default: ''
            },
            redirect_url: {
                type: String,
                default: ''
            },
            payment_plan: {
                type: Number,
                default: String
            },
            subaccounts: {
                type: Object,
                default: function () {
                    return {}
                }
            },
            payment_method: {
                type: String,
                default: ''
            },
            hosted_payment: {
                type: Number,
                default: ''
            }
        },
        data() {
            return {
                msg: 'Rave Modal',
                payload: {}
            }
        },
        created() {
            const script = document.createElement('script')
            script.src = (!this.isProduction)
                ? 'https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/flwpbf-inline.js'
                : 'https://api.ravepay.co/flwv3-pug/getpaidx/api/flwpbf-inline.js'
            document.getElementsByTagName('head')[0].appendChild(script)
        },
        methods: {
            payWithRave() {
                window.getpaidSetup({
                    customer_email: this.email,
                    amount: this.amount,
                    txref: this.reference,
                    PBFPubKey: this.raveKey,
                    onclose: () => this.close(),
                    callback: response => this.callback(response),
                    meta: this.metadata,
                    currency: this.currency,
                    country: this.country,
                    customer_firstname: this.customer_firstname,
                    customer_lastname: this.customer_lastname,
                    custom_title: this.custom_title,
                    custom_description: this.custom_description,
                    custom_logo: this.custom_logo,
                    redirect_url: this.redirect_url,
                    payment_plan: this.payment_plan,
                    subaccounts: this.subaccounts,
                    payment_method: this.payment_method,
                    hosted_payment: this.hosted_payment
                })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .button {
        color: rgb(85, 19, 207);
        width: 250px;
        height: 50px;
        font-weight: 800;
    }
</style>