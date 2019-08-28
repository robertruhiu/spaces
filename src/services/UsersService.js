import Api from '@/services/Api'

export default {
  authenticated (user_id,auth){
    return Api().get(`getprofile/${user_id} `,auth)
  },

  devs (){
    return Api().get('users')
  },
  allusers (){
    return Api().get('allusers')
  },
  currentuser (user_id,auth) {
    return Api().get(`getprofile/${user_id} `,auth)
  },
  retrieveuser (user_id,auth) {
    return Api().get(`getuser/${user_id} `,auth)
  },
  talentuser (id) {
    return Api().get(`gettalent/${id} `)
  },
  experience (candidate_id,auth) {
    return Api().get(`getexperience/${candidate_id} `,auth)
  },
  newexperience (Experience,auth) {
    return Api().post('newexperience ',Experience,auth)
  },
  updateexperience (experience_id,Experience,auth) {
    return Api().patch(`updateexperience/${experience_id} `,Experience,auth)
  },
  portfolio (portfolio_id,auth) {
    return Api().get(`getportofolio/${portfolio_id} `,auth)
  },
  newportfolio (Portfolio,auth) {
    return Api().post('newportfolio ',Portfolio,auth)
  },
  updateportfolio (portfolio_id,Portfolio,auth) {
    return Api().patch(`updateportfolio/${portfolio_id} `,Portfolio,auth)
  },

  update (user_id,currentUserProfile,auth) {
    return Api().patch(`updater/${user_id} `,currentUserProfile,auth)
  },

}
