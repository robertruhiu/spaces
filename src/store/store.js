import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import sharedMutations from 'vuex-shared-mutations';

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,

    state: {
        user_id: null,
        token: null,
        user: null,
        user_object:null,
        isUserLoggedIn: false,
        usertype: null,
        next: null,
        language: null,
        country: null,
        cart: null,
        candidate: null,
        removed: false,
        cart_ids: [],
        managed: false,
        recommended: [],
        lazyloader:null,
        lazypage:null,
        applicants:[],
        leads:[],
        interview:[],
        test:[],
        rejected:[],
        job_id:'',
        registrationstep:0


    },
    mutations: {
        setjob_id(state, job_id) {
            state.job_id = job_id
        },
        setapplicants(state, applicants) {
            state.applicants = applicants
        },
        setleads(state, leads) {
            state.leads = leads
        },
        setinterview(state, interview) {
            state.interview = interview
        },
        settest(state, test) {
            state.test = test
        },
        setrejected(state, rejected) {
            state.rejected = rejected
        },
        setToken(state, token) {
            state.token = token
            state.isUserLoggedIn = !!(token)

        },
        setUser(state, user) {
            state.user = user
        },
        setuser_object(state, user_object) {
            state.user_object = user_object
        },
        setlazyloader(state, lazyloader) {
            state.lazyloader = lazyloader
        },
        setlazypage(state, lazypage) {
            state.lazypage = lazypage
        },
        setCandidate(state, candidate) {
            state.candidate = candidate
        },
        setAuthenticated(state, isAuthenticated) {
            state.isUserLoggedIn = isAuthenticated
        },
        setisLoggedIn(state, isAuthenticated) {
            state.isUserLoggedIn = isAuthenticated
        },
        setUsertype(state, usertype) {
            state.usertype = usertype
        },
        setUser_id(state, user_id) {
            state.user_id = user_id
        },
        setNext(state, next) {
            state.next = next
        },
        setLanguage(state, language) {
            state.language = language
        },
        setCountry(state, country) {
            state.country = country
        },
        setCart(state, cart) {
            state.cart = cart
            state.removed = false
            state.managed = false
            state.cart_ids = []
        },
        setRemove(state, remove) {
            state.removed = remove
        },
        setPicked(state, picked) {
            state.picked = picked
        },
        setRecommend(state, recommended) {
            state.recommended = recommended
        },

        add(state, candidateobject) {
            state.cart.push(candidateobject)
            state.cart = state.cart.reduce(function (field, e1) {
                var matches = field.filter(function (e2) {
                    return e1.id == e2.id
                });
                if (matches.length == 0) {
                    field.push(e1);
                }
                return field;
            }, []);
            if (candidateobject.id === state.candidate.id) {
                state.removed = false
            }
            state.cart_ids.push(Number(candidateobject.id))

        },

        manage(state) {
            for (let i = 0; i < state.cart.length; i++) {
                if (state.cart[i].id === state.candidate.id) {
                    state.managed = true
                }
            }
            state.cart = []


        },
        remove(state, n) {
            for (let i = 0; i < state.cart.length; i++) {
                if (state.cart[i].id === n) {
                    if (i > -1) {
                        state.cart.splice(i, 1);
                    }
                }
            }
            if (n === state.candidate.id) {
                state.removed = true
            }


        },
        setRegistrationStep(state, registrationstep) {
            state.registrationstep = registrationstep
        },


    },
    actions: {
        setToken({commit}, token) {
            commit('setToken', token)
        },
        setRegistrationStep({commit}, step) {
            commit('setRegistrationStep', step)
        },
        setisLoggedIn({commit}, isAuthenticated) {
            commit('setisLoggedIn', isAuthenticated)
        },
        setlazyloader({commit}, lazyloader) {
            commit('setlazyloader', lazyloader)
        },
        setlazypage({commit}, lazypage) {
            commit('setlazypage', lazypage)
        },
        setUser({commit}, user) {
            commit('setUser', user)
        },
        setuser_object({commit}, user_object) {
            commit('setuser_object', user_object)
        },

        setCandidate({commit}, candidate) {
            commit('setCandidate', candidate)
        },
        setUsertype({commit}, usertype) {
            commit('setUsertype', usertype)
        },
        setUser_id({commit}, user_id) {
            commit('setUser_id', user_id)
        },
        setNext({commit}, next) {
            commit('setNext', next)
        },
        setLanguage({commit}, language) {
            commit('setLanguage', language)
        },
        setCountry({commit}, country) {
            commit('setCountry', country)
        },
        setCart({commit}, cart) {
            commit('setCart', cart)
        },
        setPicked({commit}, picked) {
            commit('setPicked', picked)
        },
        setRecommend({commit}, recommended) {
            commit('setRecommend', recommended)
        },
        setapplicants({commit}, applicants) {
            commit('setapplicants', applicants)
        },
        setleads({commit}, leads) {
            commit('setleads', leads)
        },
        setinterview({commit}, interview) {
            commit('setinterview', interview)
        },
        settest({commit}, test) {
            commit('settest', test)
        },
        setrejected({commit}, rejected) {
            commit('setrejected', rejected)
        },
        setjob_id({commit}, job_id) {
            commit('setjob_id', job_id)
        },


    },
    getters: {
        isLoggedIn: state => !!state.token,
    },
    plugins: [
        createPersistedState(),
        sharedMutations({predicate: ['add', 'remove', 'picked', 'manage']})
    ],
})
