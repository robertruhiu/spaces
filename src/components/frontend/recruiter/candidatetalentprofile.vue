<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh;background-color:#F8FAFB ">
        <pageheader></pageheader>


        <a-layout :style="{backgroundColor:'#F8FAFB',marginTop: '1rem' }">
            <a-layout-content style="margin-top: 3%">


                <a-row style="padding: 1% 1%">
                    <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }" :md="{span: 24, offset: 0 }"
                           :lg="{span: 6, offset: 0 }" :xl="{span: 6, offset: 0 }" style=" ">
                        <div class="profile" style="padding-bottom: 2%;margin: 3%">
                            <a-avatar class="poolavatar" shape="square"
                                      style="">
                                {{currentUserProfile.user.first_name[0].toUpperCase() }}
                                {{currentUserProfile.user.last_name[0].toUpperCase()}}
                                <span style="font-size: 1rem" v-if="currentUserProfile.verified_skills"><a-icon
                                        type="check-circle"/></span>

                            </a-avatar>
                            <div style="padding: 4%">
                                <p>About</p>
                                <p>{{currentUserProfile.about}}</p>

                                <br>

                                <p v-if="verified_skills.length>0">
                                    Verified skills:
                                    <span style="" v-for="skill in verified_skills"
                                          v-bind:key="skill.id">
                                                <a-tag color="#F0F6FD" style="color:#007BFF;">{{skill}}</a-tag>

                                            </span>
                                </p>
                                <p v-if="skilltags.length>0">
                                    Skill tags:
                                    <span style="" v-for="skill in skilltags"
                                          v-bind:key="skill.id">
                                                <a-tag color="#F0F6FD" style="color:#007BFF;">{{skill}}</a-tag>

                                            </span>

                                </p>
                                <p>Experience :
                                    <a-tag color="#F0F6FD" style="color:#007BFF;">
                                        {{currentUserProfile.years}} years
                                    </a-tag>
                                </p>
                                <p>

                                    Availability :
                                    <a-tag color="#F0F6FD" style="color:#007BFF;">
                                        {{currentUserProfile.availabilty}}
                                    </a-tag>


                                </p>
                                <p>
                                    Salary expectation :
                                    <a-tag color="#F0F6FD" style="color:#007BFF;">
                                        ${{currentUserProfile.salary}} /month
                                    </a-tag>
                                </p>

                                <p>Location :
                                    <a-tag color="#F0F6FD" style="color:#007BFF;">
                                        {{currentUserProfile.country}}
                                    </a-tag>

                                </p>

                            </div>


                        </div>


                    </a-col>

                    <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }" :md="{span: 24, offset: 0 }"
                           :lg="{span: 14, offset: 0 }" :xl="{span: 14, offset: 0 }" style=" ">
                        <div>
                            <hide-at breakpoint="mediumAndBelow">
                                <div class="bio">

                                    <a-tabs defaultActiveKey="1">
                                        <a-tab-pane key="1" v-if="takenquizzes.length >0">
                                    <span slot="tab">
                                        <a-icon type="codepen"/>
                                        Skills
                                    </span>
                                            <p>Quizzes taken by Candidate</p>
                                            <div v-if="quizload">
                                                <div style="text-align: center;">
                                                    <a-spin/>
                                                </div>
                                            </div>
                                            <div v-else>
                                                <div v-for="takenquiz in takenquizzes" v-bind:key="takenquiz">
                                                    {{takenquiz.quiz.subject.name}}:
                                                    <a-progress :percent="takenquiz.score"/>
                                                </div>
                                            </div>


                                        </a-tab-pane>

                                        <a-tab-pane key="2" v-if="portfolio.length >0">
                                    <span slot="tab">
                                        <a-icon type="solution"/>
                                        Projects portfolio
                                    </span>
                                            <div style="padding:0 2%">
                                                <div v-if="portfolioload">
                                                    <div style="text-align: center;">
                                                        <a-spin/>
                                                    </div>
                                                </div>
                                                <div v-else>
                                                    <div style="border-bottom: 1px solid #e8e8e8;padding-bottom: 2%;padding-top: 2%"
                                                         v-for="item in portfolio" v-bind:key="item.id">
                                                        <p style="font-weight: 700">{{item.title}}</p>
                                                        <p>
                                                            Tools used:
                                                            <a-tag v-for="tag in item.tags" color="blue"
                                                                   :key="tag">
                                                                {{tag}}
                                                            </a-tag>

                                                        </p>
                                                        <p>{{item.description}}
                                                        </p>
                                                        <a :href=" item.demo" target="_blank">view project</a>

                                                    </div>
                                                </div>


                                            </div>


                                        </a-tab-pane>

                                        <a-tab-pane key="3" v-if="experiences.length>0">
                                    <span slot="tab">
                                        <a-icon type="hourglass"/>
                                        Work experience
                                    </span>
                                            <div style="padding:2%">
                                                <div v-if="experienceload">
                                                    <div style="text-align: center;">
                                                        <a-spin/>
                                                    </div>
                                                </div>
                                                <div v-else>
                                                    <a-timeline>
                                                        <a-timeline-item v-for="item in experiences"
                                                                         v-bind:key="item.id">
                                                            <p style="font-weight: 700">{{item.title}}</p>
                                                            <p><span><a-icon type="bank"/>  {{item.company}} <a-icon
                                                                    type="environment"/>  {{item.location}} <a-icon
                                                                    type="hourglass"/>  {{item.duration}}months</span>
                                                            </p>
                                                            <p>
                                                                Technologies used:
                                                                <a-tag v-for="tag in item.tags" color="blue"
                                                                       :key="tag">
                                                                    {{tag}}
                                                                </a-tag>

                                                            </p>


                                                            <p>{{item.description}}</p>

                                                        </a-timeline-item>

                                                    </a-timeline>
                                                </div>


                                            </div>

                                        </a-tab-pane>

                                    </a-tabs>
                                </div>
                            </hide-at>
                        </div>


                        <div style="margin-bottom: 1rem;padding:2%" v-if="takenquizzes.length>0">
                            <show-at breakpoint="mediumAndBelow">
                                <div class="bio">
                                    <p style="padding-top: 2%"><strong>Quizzes taken by Candidate</strong></p>
                                    <div v-for="takenquiz in takenquizzes" v-bind:key="takenquiz">
                                        {{takenquiz.quiz.subject.name}}:
                                        <a-progress :percent="takenquiz.score"/>
                                    </div>
                                </div>


                            </show-at>
                        </div>
                        <div style="margin-bottom: 1rem;padding:2%" v-if="portfolio.length>0">
                            <show-at breakpoint="mediumAndBelow">
                                <div class="bio">

                                    <p style="padding-top: 2%"><strong>Projects portfolio</strong></p>
                                    <div>

                                        <div style="border-bottom: 1px solid #e8e8e8;padding-bottom: 2%;padding-top: 2%"
                                             v-for="item in portfolio" v-bind:key="item.id">
                                            <p style="font-weight: 700">{{item.title}}</p>
                                            <p>
                                                Tools used:
                                                <a-tag v-for="tag in item.tags" color="blue"
                                                       :key="tag">
                                                    {{tag}}
                                                </a-tag>

                                            </p>
                                            <p>{{item.description}}
                                            </p>
                                            <a :href=" item.demo" target="_blank">view project</a>

                                        </div>


                                    </div>
                                </div>


                            </show-at>
                        </div>

                        <div style="margin-bottom: 1rem;padding:2%" v-if="experiences.length>0">
                            <show-at breakpoint="mediumAndBelow">
                                <div class="bio">


                                    <p style="padding-top: 2%"><strong>Work experience</strong></p>
                                    <div>
                                        <a-timeline>
                                            <a-timeline-item v-for="item in experiences" v-bind:key="item.id">
                                                <p style="font-weight: 700">{{item.title}}</p>
                                                <p><span><a-icon type="bank"/>  {{item.company}} <a-icon
                                                        type="environment"/>  {{item.location}} <a-icon
                                                        type="hourglass"/>  {{item.duration}}months</span>
                                                </p>
                                                <p>
                                                    Technologies used:
                                                    <a-tag v-for="tag in item.tags" color="blue"
                                                           :key="tag">
                                                        {{tag}}
                                                    </a-tag>

                                                </p>


                                                <p>{{item.description}}</p>

                                            </a-timeline-item>

                                        </a-timeline>


                                    </div>
                                </div>

                            </show-at>
                        </div>


                    </a-col>
                    <hide-at breakpoint="mediumAndBelow">
                        <div v-if="this.$store.state.usertype === 'recruiter'">

                            <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                                   :md="{span: 24, offset: 0 }"
                                   :lg="{span: 4, offset: 0 }" :xl="{span: 4, offset: 0 }">


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
                                                <span style="float: right"><a @click="remove(profile.id)"><a-icon
                                                        type="close-circle" theme="twoTone"/></a></span>
                                            </p>

                                        </div>
                                        <span v-if="paidbundleexists === false">
                                            <p style="padding-top: 1rem">Total:{{amount}}</p>
                                        </span>


                                        <div v-if="paidbundleexists">
                                            <p style="font-size: 12px">
                                                existing bundle. bundle limit
                                                {{paiddevs.length}}/{{bundlelimit}}
                                            </p>
                                            <div style="text-align: center">
                                                <a-button type="primary" @click="addtopaid">Checkout</a-button>
                                            </div>


                                        </div>
                                        <div v-else>
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
                                </div>
                                <div v-if="managecandidate === false">
                                    <div class="profile">
                                        <div style="padding: 4%;margin: 3%;padding-bottom: 7%">
                                            <div style="text-align: center">
                                                <img src="../../../assets/images/profile.png"
                                                     style="width: 50%;padding-bottom: 2rem">
                                            </div>


                                            <p style="text-align: center;">I like this profile</p>
                                            <div style="text-align: center">

                                                <div v-if="paidprofile === false">
                                                    <div v-if="addcart">
                                                        <div style="text-align: center;">
                                                            <a-spin/>
                                                        </div>
                                                    </div>
                                                    <div v-else>
                                                        <a-button v-if="picked === false" type="primary"
                                                                  @click="pickcandidate(currentUserProfile.id)">
                                                            Add to my Candidates
                                                        </a-button>
                                                    </div>


                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div v-for="dev in pickeddevpaid" :key="dev">
                                    <div v-if="dev.id === currentUserProfile.id">
                                        <div class="profile">
                                            <div style="padding: 4%;margin: 3%;padding-bottom: 7%">
                                                <div style="text-align: center">
                                                    <img src="../../../assets/images/profile.png"
                                                         style="width: 50%;padding-bottom: 2rem">
                                                </div>


                                                <p style="text-align: center;">I like this profile</p>
                                                <div style="text-align: center">
                                                    <div>

                                                        <a-button
                                                                style="margin-left: 1rem;"
                                                                type="primary"
                                                                @click="navigateTo({name:'mycandidates'})">
                                                            manage candidate
                                                        </a-button>

                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>


                            </a-col>
                        </div>
                    </hide-at>


                </a-row>


            </a-layout-content>

        </a-layout>
    </a-layout>
</template>


<script>
    //experience structure on table


    class Experience {
        constructor(id, title, description, company, location, duration, tech_used) {
            this.key = id;
            this.title = title;
            this.description = description;
            this.company = company;
            this.duration = duration;
            this.tags = tech_used;
            this.location = location;

        }
    }

    class Portfolio {
        constructor(id, title, description, demo, tech_used) {
            this.key = id;
            this.title = title;
            this.description = description;
            this.demo = demo;
            this.tags = tech_used;


        }
    }

    class Cart {
        constructor(id, name, verified) {
            this.id = id;
            this.name = name;
            this.verified = verified;


        }
    }


    import UsersService from '@/services/UsersService'
    import Pageheader from '@/components/layout/Header.vue'
    import ARow from "ant-design-vue/es/grid/Row";
    import ACol from "ant-design-vue/es/grid/Col";
    import MarketPlaceService from '@/services/Marketplace'
    import QuizService from '@/services/QuizService';
    import Payments from '@/services/Payments';
    import {showAt, hideAt} from 'vue-breakpoints'
    import Rave from "@/components/frontend/recruiter/cart/Rave";


    export default {
        name: 'candidatetalentprofile',
        data() {

            return {
                currentUserProfile: {},
                skilltags: [],
                verified_skills: [],
                visible: false,
                inputVisible: false,
                inputValue: '',
                experienceslist: [],
                experiences: [],
                portoliolist: [],
                portfolio: [],
                picked: false,
                pickeddevs: [],
                takenquizzes: [],
                cart: [],
                cart_items: [],
                mycart: null,
                carts: [],
                devs: [],
                pickedprofiles: [],
                amount: 0,
                raveKey: "FLWPUBK-37320275f784b16ec1e30b1342c0a223-X",
                email: "",
                currency: "USD",
                country: "GH",
                customer_firstname: '',
                customer_lastname: '',

                custom: {
                    title: "Codeln",
                    description: "Yada yada",
                    logo: "bla"
                },

                paymentPlan: "", // add payments plan ID here
                paymentMethod: "", // add 'card' or 'account' if you want a specific feature. Leave empty if you want all features
                subaccounts: {
                    id: "RS_73954F005E68DADF3483197D5CF13E1E", // id of the subaccount; get from your dashboard
                    transaction_split_ratio: "", //
                    transaction_charge_type: "", //include this if the you want a flat fee eg: flat
                    transaction_charge: "" // include the flat fee amount you want eg: 100
                },
                pickeddevpaid: [],
                paidprofile: false,
                paiddevs: [],
                paidbundleexists: false,
                bundlelimit: 0,
                addcart: false,
                portfolioload: true,
                experienceload: true,
                quizload: true,
                managecandidate: false

            }
        },
        components: {
            ACol,
            ARow,
            Pageheader,
            showAt, hideAt,
            Rave


        },
        async mounted() {

            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}

            }
            if (this.$store.state.user.pk) {
                this.customer_firstname = this.$store.state.user.first_name
                this.customer_lastname = this.$store.state.user.last_name
                this.email = this.$store.state.user.email
                let dev_id = this.$route.params.candidateProfileID


                this.currentUserProfile = (await UsersService.currentuser(this.$route.params.candidateProfileID, auth)).data

                if (this.currentUserProfile.skills) {
                    this.skilltags = this.currentUserProfile.skills.split(',');
                }
                if (this.currentUserProfile.verified_skills) {
                    this.verified_skills = this.currentUserProfile.verified_skills.split(',');
                }


                UsersService.portfolio(this.currentUserProfile.id, auth)
                    .then(resp => {
                        this.portfolioload = false
                        this.portfoliolist = resp.data
                    })
                    .catch(error => {
                        return error
                    })

                UsersService.experience(this.currentUserProfile.id, auth)
                    .then(resp => {
                        this.experienceload = false
                        this.experienceslist = resp.data
                    })
                    .catch(error => {
                        return error
                    })

                QuizService.taken(this.currentUserProfile.id, auth)
                    .then(resp => {
                        this.quizload = false
                        this.takenquizzes = resp.data
                    })
                    .catch(error => {
                        return error
                    })
                this.carts = (await Payments.cartlist(this.$store.state.user.pk, auth)).data;


                if (this.carts.length > 0) {
                    this.mycart = this.carts[0]
                    if (this.mycart.devspending) {
                        this.pickeddevs = this.mycart.devspending.split(',');

                    }
                    if (this.mycart.devspaid) {
                        this.paiddevs = this.mycart.devspaid.split(',');
                    }
                    if (this.mycart.amount) {
                        this.paidbundleexists = true
                        if (this.mycart.amount === 200) {
                            this.bundlelimit = 10
                        } else if (400 <= this.mycart.amount > 200) {
                            this.bundlelimit = 20
                        }
                    }


                } else {

                    this.mycart = (await Payments.cartcreate({user: this.$store.state.user.pk}, auth)).data;
                }


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
                            if (this.$route.params.candidateProfileID === Number(this.pickeddevs[j])) {
                                this.managecandidate = true
                            }

                        }

                    }


                }


                let p = false
                this.pickeddevs.forEach(function (dev) {

                    if (Number(dev) === dev_id) {
                        p = true

                    }


                })
                this.picked = p
                if (this.pickeddevs.length <= 10) {
                    this.amount = 200
                } else {
                    this.amount = 400
                }
                MarketPlaceService.mydevelopers(this.$store.state.user.pk, auth)
                    .then(resp => {

                            if (resp.data.length !== 0) {


                                for (let i = 0; i < resp.data.length; i++) {
                                    this.pickeddevpaid.push(resp.data[i].developer)
                                }

                                for (let i = 0; i < this.pickeddevpaid.length; i++) {
                                    if (this.$route.params.candidateProfileID === this.pickeddevpaid[i].id) {
                                        this.paidprofile = true
                                        this.managecandidate = true

                                    }
                                }

                            }


                        }
                    )
                    .catch();


                for (let i = 0; i < this.portfoliolist.length; i++) {
                    let id = this.portfoliolist[i]
                    let title = this.portfoliolist[i].title
                    let description = this.portfoliolist[i].description
                    let demo = this.portfoliolist[i].demo_link
                    let tech_used = this.portfoliolist[i].tech_tags.split(',');

                    let one_portfolio = new Portfolio(
                        id, title, description, demo, tech_used
                    );
                    this.portfolio.push(one_portfolio)


                }
                for (let i = 0; i < this.experienceslist.length; i++) {
                    let id = this.experienceslist[i]
                    let title = this.experienceslist[i].title
                    let description = this.experienceslist[i].description
                    let company = this.experienceslist[i].company
                    let location = this.experienceslist[i].location
                    let duration = this.experienceslist[i].duration
                    let tech_used = this.experienceslist[i].tech_tags.split(',');

                    let one_experience = new Experience(
                        id, title, description, company, location, duration, tech_used
                    );
                    this.experiences.push(one_experience)


                }

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
            pickcandidate() {
                this.addcart = true


                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}
                };
                this.pickeddevs.push(this.currentUserProfile.id.toString())

                let developers = this.pickeddevs.join(',')

                Payments.cartitemadd(this.mycart.id, {devspending: developers}, auth)
                    .then(resp => {
                        this.picked = true

                        let id = this.currentUserProfile.id
                        let name = this.currentUserProfile.user.first_name
                        let verified = false
                        if (this.currentUserProfile.verified_skills) {
                            verified = true
                        }
                        let one_profile = new Cart(
                            id, name, verified
                        );
                        this.pickedprofiles.push(one_profile)
                        this.addcart = false
                        this.managecandidate = true


                    })
                    .catch(error => {
                        this.addcart = false
                        this.picked = false
                        return error

                    });


            },


            logout() {
                this.$store.dispatch('setToken', null);
                this.$store.dispatch('setUser', null)
                this.$store.dispatch('setisLoggedIn', false)
                this.$store.dispatch('setUsertype', null)
                this.$store.dispatch('setUser_id', null)
                this.$router.push({
                    name: 'home'
                })
            },
            async refresh() {


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

            },

            remove(dev_id) {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}
                };
                let self = this
                if (dev_id === this.currentUserProfile.id) {
                    this.picked = false
                }
                var index = this.pickeddevs.indexOf(dev_id.toString());
                if (index > -1) {
                    this.pickeddevs.splice(index, 1);
                    let developers = this.pickeddevs.join(',')

                    Payments.cartitemadd(this.mycart.id, {devspending: developers}, auth)
                        .then(resp => {
                            this.pickedprofiles = []
                            this.managecandidate = false
                            self.refresh()


                        })
                        .catch(error => {
                            return error
                        });
                }

            },
            addtopaid() {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}
                }
                this.paiddevs = this.paiddevs.concat(this.pickeddevs);
                this.pickeddevs = []
                let developerspaid = this.paiddevs.join(',')
                let developerspending = this.pickeddevs.join(',')

                Payments.cartitemadd(this.mycart.id, {
                    devspending: developerspending,
                    devspaid: developerspaid,

                }, auth)
                    .then(resp => {
                        return resp
                    })


                this.pickeddevs = []
                for (let j = 0; j < this.pickedprofiles.length; j++) {
                    let picked_developer = {
                        owner: this.$store.state.user.pk,
                        developer: this.pickedprofiles[j].id,
                        paid: true,
                        stage: 'active'
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
                if (this.paiddevs.length === 10) {
                    Payments.cartitemadd(this.mycart.id, {checked_out: true}, auth)
                        .then(resp => {
                            self.close()
                            return resp
                        })
                        .catch(error => {
                            return error
                        });

                }
                this.$router.push({
                    name: 'mycandidates'
                })
            },

            callback: function (response) {
                let self = this
                if (response.success) {
                    const auth = {
                        headers: {Authorization: 'JWT ' + this.$store.state.token}
                    }
                    this.paiddevs = this.paiddevs.concat(this.pickeddevs);
                    this.pickeddevs = []
                    let developerspaid = this.paiddevs.join(',')
                    let developerspending = this.pickeddevs.join(',')

                    Payments.cartitemadd(this.mycart.id, {
                        devspending: developerspending,
                        devspaid: developerspaid,
                        amount: response.tx.amount,
                        transaction_id: response.tx.txRef
                    }, auth)
                        .then(resp => {
                            return resp
                        })


                    this.pickeddevs = []
                    for (let j = 0; j < this.pickedprofiles.length; j++) {
                        let picked_developer = {
                            owner: this.$store.state.user.pk,
                            developer: this.pickedprofiles[j].id,
                            paid: true,
                            stage: 'active'
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
                    if (this.paiddevs.length === 10) {
                        Payments.cartitemadd(this.mycart.id, {checked_out: true}, auth)
                            .then(resp => {
                                self.close()
                                return resp
                            })
                            .catch(error => {
                                return error
                            });

                    }


                    this.$router.push({
                        name: 'mycandidates'
                    })
                }


            },
            close: function () {
                console.log("Payment closed")
            },


        }
        ,

    }

</script>

<style scoped>
    .bio {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        background-color: white;
        min-height: 50vh;
        margin-right: 1%;
        margin-left: 1%;
        padding-left: 15px;
        padding-right: 15px;
        padding-top: 1%;
        margin-top: 0.2%;
        padding-bottom: 5%;
    }

    .actions {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        background-color: white;
        min-height: 30vh;

        padding: 4%;
    }

    .profile {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        background-color: white;
        margin: 1%;

    }

    .poolavatar {
        width: 100%;
        height: 8rem;
        line-height: 124px;
        font-size: 30px;
        background-color: #0679FB;
        border-radius: 0;


    }

</style>
