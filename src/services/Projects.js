import Api from '@/services/Api'
export default {
    projects(job_id,auth) {
        return Api().get(`projects/projects/${job_id}`, auth)
    },
    recommendedprojects(user_id,auth) {
        return Api().get(`projects/recommendedprojects/${user_id}`, auth)
    },
    allprojects(auth) {
        return Api().get(`projects/allprojects`, auth)
    },
    projectdetails(project_id,auth) {
        return Api().get(`projects/projectdetails/${project_id}`, auth)
    },
    recentprojects(user_id,auth) {
        return Api().get(`projects/recentprojects/${user_id}`, auth)
    },
    myrecentprojects(user_id,auth) {
        return Api().get(`projects/myrecentprojects/${user_id}`, auth)
    },
    developerprojects(framework,auth) {
        return Api().get(`projects/developerprojects/${framework}`, auth)
    },
    developerprojectreport(developer_id, project_id, auth){
        return Api().get(`projects/developerprojectreport/${developer_id}/${project_id}/`, auth)
    },
    getverified(auth){
        return Api().get('projects/frameworks',auth)
    },
    selfverifyproject(developer_id,framework,auth){
        return Api().get(`projects/selfverifyproject/${developer_id}/${framework}`,auth)
    },
    selfassessprojectcreate(currentAssess,auth) {
        return Api().post('createassess',currentAssess, auth)
    },
    myprojects(dev_id, auth) {
        return Api().get(`myprojects/${dev_id}`, auth)
    },
    testcenters(dev_id, auth) {
        return Api().get(`mytestcenters/${dev_id}`, auth)
    },
    myprojectdetails(assessmentapplication_id,auth) {
        return Api().get(`myprojectdetails/${assessmentapplication_id}`, auth)
    },
    myprojectdetailspatch(assessmentapplication_id,currentAssess,auth) {
        return Api().patch(`myprojectdetailsupdater/${assessmentapplication_id}`,currentAssess, auth)
    },
    developerselectproject(project_id,auth) {
        return Api().post(`projects/developerprojects/${project_id}`, auth)
    },
    newselfverify(assessmentapplication_id,auth) {
        return Api().get(`newselfverify/${assessmentapplication_id}`, auth)
    },
}
