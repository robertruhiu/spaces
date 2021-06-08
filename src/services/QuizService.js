import Api from '@/services/Api'

export default {
    allquizzes(auth) {
        return Api().get('allquizzes', auth)
    },
    allsubjects(auth) {
        return Api().get('subjects', auth)
    },
    questions(quiz, auth) {
        return Api().get(`questions/${quiz}`, auth)
    },
    takequiz(candidate, quiz, auth) {
        return Api().get(`takequiz/${candidate}/${quiz}`, auth)
    },
    questionanswer(question, auth) {
        return Api().get(`questionanswers/${question}`, auth)
    },
    postanswer(instance, auth) {
        return Api().post('postanswer', instance, auth)

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
    deletequizanswer(candidate,quiz,auth){
        return Api().get(`deletequizanswer/${candidate}/${quiz}`, auth)

    },
    deleterquizrandom(candidate,quiz,auth){
        return Api().get(`deleterquizrandom/${candidate}/${quiz}`, auth)
    },
    deletequiztaken(candidate,quiz,auth){
        return Api().get(`deletequiztaken/${candidate}/${quiz}`, auth)

    }





}
