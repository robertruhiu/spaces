import Api from '@/services/Api'
export default {


    projects(job_id,auth) {
        return Api().get(`projects/projects/${job_id}`, auth)
    },
    allprojects(auth) {
        return Api().get(`projects/allprojects`, auth)
    },
    projectdetails(project_id,auth) {
        return Api().get(`projects/projectdetails/${project_id}`, auth)
    },


}
