import Api from '@/services/Api'

export default {


    pickdev(user_id, dev, auth) {
        return Api().put(`marketplace/devrequest/${user_id}/${dev} `, auth)
    },
    mydevs(user_id, auth) {
        return Api().get(`marketplace/alldevrequests/${user_id}`, auth)
    },
    alljobs() {
        return Api().get('marketplace/alljobs')
    },
    myjobs(user_id, auth) {
        return Api().get(`marketplace/myjobs/${user_id}`, auth)
    },
    applicants(job_id, auth) {
        return Api().get(`marketplace/jobapplicants/${job_id}`, auth)
    },
    specificjob(job_id, auth) {
        return Api().get(`marketplace/specificjob/${job_id}`, auth)
    },
    specificjobapplicants(job_id, auth) {
        return Api().get(`marketplace/specificjobapplicants/${job_id}`, auth)
    },
    joboneapplicant(candidate_id, job_id, auth) {
        return Api().get(`marketplace/myjobapplication/${candidate_id}/${job_id}`, auth)
    },
    updatejob(job_id, CurrentJob, auth) {
        return Api().patch(`marketplace/updatejob/${job_id} `, CurrentJob, auth)
    },

    pickreject(jobapplication_id,Currentapplication, auth) {
        return Api().patch(`marketplace/pickreject/${jobapplication_id} `, Currentapplication,auth)
    },
    createupdatejob(currentJob, auth) {
        return Api().post(`marketplace/createupdatejob`, currentJob, auth)
    }
}
