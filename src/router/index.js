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
import RecruiterDashboard from '@/components/frontend/recruiter/Dashboard'
import ManageJobs from '@/components/frontend/recruiter/Managejob'
import MyCandidates from '@/components/frontend/recruiter/Mycandidates'
import CandidateProfile from '@/components/frontend/recruiter/candidateprofile'
import Job from '@/components/frontend/recruiter/job'
import Calendar from '@/components/frontend/recruiter/calendar'
import DeveloperDashboard from '@/components/frontend/developer/DevDashboard'

Vue.use(Router);

let router =  new Router({
    mode: 'history',
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
            component: RecruiterDashboard
        },
        {
            path: '/developer',
            name: 'developer',
            component: DeveloperDashboard
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
            component: ManageJobs
        },
        {
            path: '/mycandidates',
            name: 'mycandidates',
            component: MyCandidates
        },
        {
            path: '/job/:jobId',
            name: 'job',
            component: Job
        },
        {
            path: '/calendar',
            name: 'calendar',
            component: Calendar
        },
        {
            path: '/candidateprofile/:candidateID/:jobID',
            name: 'candidateprofile',
            component: CandidateProfile
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
