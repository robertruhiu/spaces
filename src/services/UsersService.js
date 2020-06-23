import Api from '@/services/Api'

export default {
    authenticated(user_id, auth) {
        return Api().get(`getprofile/${user_id} `, auth)
    },

    devs(auth) {
        return Api().get('qualified', auth)
    },
    sliceddevs() {
        return Api().get('userssliced')
    },
    allusers() {
        return Api().get('allusers')
    },
    currentuser(user_id, auth) {
        return Api().get(`getprofile/${user_id} `, auth)
    },
    retrieveuser(user_id, auth) {
        return Api().get(`getuser/${user_id} `, auth)
    },
    experience(candidate_id, auth) {
        return Api().get(`getexperience/${candidate_id} `, auth)
    },
    newexperience(Experience, auth) {
        return Api().post('newexperience ', Experience, auth)
    },
    updateexperience(experience_id, Experience, auth) {
        return Api().patch(`updateexperience/${experience_id} `, Experience, auth)
    },
    deleteexperience(experience_id, auth) {
        return Api().delete(`updateexperience/${experience_id} `, auth)
    },
    portfolio(portfolio_id, auth) {
        return Api().get(`getportofolio/${portfolio_id} `, auth)
    },
    newuser(user_id, auth) {
        return Api().post(`newuser/${user_id} `, auth)
    },
    newportfolio(Portfolio, auth) {
        return Api().post('newportfolio ', Portfolio, auth)
    },
    newresource(Resource, auth) {
        return Api().post('newresource ', Resource, auth)
    },
    subjectresources(subject_id, auth) {
        return Api().get(`subjectresources/${subject_id} `, auth)
    },
    resourceslikeupdate(resource_id, path_data, auth) {
        return Api().patch(`resourceslikeupdate/${resource_id} `, path_data, auth)
    },
    updateportfolio(portfolio_id, Portfolio, auth) {
        return Api().patch(`updateportfolio/${portfolio_id} `, Portfolio, auth)
    },
    deleteportfolio(portfolio_id, auth) {
        return Api().delete(`updateportfolio/${portfolio_id} `, auth)
    },

    update(user_id, currentUserProfile, auth) {
        return Api().put(`updater/${user_id} `, currentUserProfile, auth)
    },
    updatepatch(user_id, patchdata, auth) {
        return Api().patch(`updater/${user_id} `, patchdata, auth)
    },
    talentorder() {
        return Api().get('talentorder')
    },
    unsubscribe(token) {
        return Api().get(`unsubscribe/${token} `)
    },
    portfoliolikeupdate(portfolio_id, path_data, auth) {
        return Api().patch(`portfoliolikeupdate/${portfolio_id} `, path_data, auth)
    },


}
