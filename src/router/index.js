import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/store'
import Home from '@/components/frontend/homepages/Home'
import Register from '@/components/frontend/homepages/Register'
import Login from '@/components/frontend/homepages/Login'
import Talent from '@/components/frontend/homepages/talent'
import Privacy from '@/components/frontend/homepages/privacy'
import Terms from '@/components/frontend/homepages/terms'
import JobBoard from '@/components/frontend/homepages/jobboard'
import JobDetails from '@/components/frontend/homepages/jobdetails'
import RecruiterDashboard from '@/components/frontend/recruiter/Dashboard'
import ManageJobs from '@/components/frontend/recruiter/Managejob'
import MyCandidates from '@/components/frontend/recruiter/Mycandidates'
import TalentProfile from '@/components/frontend/recruiter/candidatetalentprofile'
import CandidateProfile from '@/components/frontend/recruiter/candidateprofile'
import Job from '@/components/frontend/recruiter/job'
import Projectdetails from '@/components/frontend/recruiter/projectdetails'
import Projectlist from '@/components/frontend/recruiter/projectlist'
import Calendar from '@/components/frontend/recruiter/calendar'
import DeveloperDashboard from '@/components/frontend/developer/DevDashboard'

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
            path: '/pickedprojectdetails/:projectId/:jobId/:candidateId/:applicationId',
            name: 'pickedprojectdetails',
            component: Projectdetails,
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
            path: '/candidatetalentprofile/:candidateProfileID',
            name: 'candidatetalentprofile',
            component: TalentProfile,
            meta: {
                requiresAuth: true
            }
        },


    ]
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
