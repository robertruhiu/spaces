import Api from '@/services/Api'
export default {
    testcenters(auth) {
        return Api().get(`servermanagement/test_centers`, auth)
    },
    selectcenter(test, auth) {
        return Api().post(`servermanagement/manual_test/`, test, auth)
    },
}
