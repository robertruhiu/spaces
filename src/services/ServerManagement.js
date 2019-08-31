import Api from '@/services/Api'
export default {
    schedulejob(currentAssess, auth) {
        return Api().post(`schedulejob/`,currentAssess, auth)
    },
}
