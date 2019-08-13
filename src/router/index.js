import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/store'
const  Home = () => import('@/components/frontend/homepages/Home')
const  Register = () => import('@/components/frontend/homepages/Register')
const  Login = () => import('@/components/frontend/homepages/Login')
const  Talent = () => import('@/components/frontend/homepages/talent')
const  Privacy = () => import('@/components/frontend/homepages/privacy')
const  Terms = () => import('@/components/frontend/homepages/terms')
const  JobBoard = () => import('@/components/frontend/homepages/jobboard')
const  JobDetails = () => import('@/components/frontend/homepages/jobdetails')
const  RecruiterDashboard = () => import('@/components/frontend/recruiter/Dashboard')
const  ManageJobs = () => import('@/components/frontend/recruiter/job/Managejob')
const  MyCandidates = () => import('@/components/frontend/recruiter/candidates/Mycandidates')
const  TalentProfile = () => import('@/components/frontend/recruiter/candidatetalentprofile')
const  CandidateProfile = () => import('@/components/frontend/recruiter/job/candidateprofile')
const  MyCandidateProfile = () => import('@/components/frontend/recruiter/candidates/mycandidatesprofile')
const  Job = () => import('@/components/frontend/recruiter/job/job')
const  Projectdetails = () => import('@/components/frontend/recruiter/job/projectdetails')
const  MyProjectdetails = () => import('@/components/frontend/recruiter/candidates/myprojectdetails')
const  Projectlist = () => import('@/components/frontend/recruiter/projectlist')
const  Calendar = () => import('@/components/frontend/recruiter/calendar')
const  DeveloperDashboard = () => import('@/components/frontend/developer/DevDashboard')
const  Myprofile = () => import('@/components/frontend/recruiter/Myprofile')
const Assessment = () => import('@/components/frontend/developer/Assessment')


const DeveloperProjects = () => import('@/components/frontend/developer/DeveloperProjects')
const DeveloperQuizes = () => import('@/components/frontend/developer/DeveloperQuizes')
const DeveloperProjectDetails = () => import('@/components/frontend/developer/DeveloperProjectDetails')
const DeveloperProjectReport = () =>import('@/components/frontend/developer/DeveloperProjectReport');

Vue.use(Router);

let router =  new Router({

    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/recruiter',
            name: 'recruiter',
            component: RecruiterDashboard,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/developer',
            name: 'developer',
            component: DeveloperDashboard,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/myprofile',
            name: 'myprofile',
            component: Myprofile,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/talent',
            name: 'talent',
            component: Talent,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobBoard
        },
        {
            path: '/privacy',
            name: 'privacy',
            component: Privacy
        },
        {
            path: '/terms',
            name: 'terms',
            component: Terms
        },
        {
            path: '/managejobs',
            name: 'managejobs',
            component: ManageJobs,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/mycandidates',
            name: 'mycandidates',
            component: MyCandidates,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/job/:jobId',
            name: 'job',
            component: Job
        },
        {
            path: '/jobdetails/:jobId',
            name: 'jobdetails',
            component: JobDetails,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/calendar',
            name: 'calendar',
            component: Calendar,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/projectdetails/:jobId/:candidateId/:applicationId',
            name: 'projectdetails',
            component: Projectdetails,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/myprojectdetails/:userId/:candidateId/:applicationId',
            name: 'myprojectdetails',
            component: MyProjectdetails,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/pickedprojectdetails/:projectId/:jobId/:candidateId/:applicationId',
            name: 'pickedprojectdetails',
            component: Projectdetails,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/mypickedprojectdetails/:projectId/:candidateId/:applicationId',
            name: 'mypickedprojectdetails',
            component: MyProjectdetails,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/projectlist',
            name: 'projectlist',
            component: Projectlist,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/candidateprofile/:candidateId/:jobId/:applicationId',
            name: 'candidateprofile',
            component: CandidateProfile,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/mycandidatesprofile/:candidateId/:applicationId',
            name: 'mycandidatesprofile',
            component: MyCandidateProfile,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/candidatetalentprofile/:candidateProfileID',
            name: 'candidatetalentprofile',
            component: TalentProfile,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/assesment/',
            name: 'assessment',
            component: Assessment,
            // meta: {
            //     requiresAuth: true
            // }
        },
        {
            path: '/developerprojects/',
            name: 'developerprojects',
            component: DeveloperProjects,
            // meta: {
            //     requiresAuth: true
            // }
        },
        {
            path: '/quizes/',
            name: 'developerquizes',
            component: DeveloperQuizes,
            // meta: {
            //     requiresAuth: true
            // }
        },
        {
            path: '/developerprojectdetails/:projectId',
            name: 'developerprojectdetails',
            component: DeveloperProjectDetails,
            // meta: {
            //     requiresAuth: true
            // }
        },
        {
            path: '/developerprojectreport/:candidateId/:projectId/',
            name: 'developerprojectreport',
            component: DeveloperProjectReport,
            // meta: {
            //     requiresAuth: true
            // }
        },
    ],

})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {


      next()
      return
    }
    next('/login')

  } else {
    next()
  }
})


export default router
