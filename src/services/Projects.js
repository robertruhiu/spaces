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
    developerselectproject(project_id,auth) {
        return Api().post(`projects/developerprojects/${project_id}`, auth)
    },
    developerprojectreport(developer_id, project_id, auth){
        return Api().get(`projects/developerprojectreport/${developer_id}/${project_id}/`, auth)
    },

}
