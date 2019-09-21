import Api from '@/services/Api'

export default {
    allquizzes(auth) {
        return Api().get('allquizzes', auth)
    },
    questions(quiz,auth) {
        return Api().get(`questions/${quiz}`, auth)
    },
    takequiz(candidate,quiz,auth){
        return Api().get(`takequiz/${candidate}/${quiz}`,auth)
    },
    postanswer(instance,auth){
        return Api().post('postanswer',instance, auth)

    },
    score(candidate,quiz,auth){
        return Api().get(`score/${candidate}/${quiz}`, auth)

    },
    taken(candidate,auth){
        return Api().get(`taken/${candidate}`, auth)

    },
    updaterandomquiz(randomquizid, questions, auth) {
        return Api().patch(`updaterandquiz/${randomquizid} `, questions, auth)
    },

}
