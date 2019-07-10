import Api from '@/services/Api'

export default {

  pickdev (user_id,dev,auth) {
    return Api().put(`marketplace/devrequest/${user_id}/${dev} `,auth)
  },
  mydevs (user_id,auth) {
    return Api().get(`marketplace/alldevrequests/${user_id}`,auth)
  },
   myjobs (user_id,auth) {
    return Api().get(`marketplace/myjobs/${user_id}`,auth)
  },
  applicants (job_id,auth) {
    return Api().get(`marketplace/jobapplicants/${job_id}`,auth)
  },
  specificjob (job_id,auth) {
    return Api().get(`marketplace/specificjob/${job_id}`,auth)
  },
  specificjobapplicants (job_id,auth) {
    return Api().get(`marketplace/specificjobapplicants/${job_id}`,auth)
  },
}
