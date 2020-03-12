import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/store'

const Home = () => import('@/components/frontend/homepages/Home')
const Register = () => import('@/components/frontend/homepages/Register')
const Login = () => import('@/components/frontend/homepages/Login')
const BridgesHome = () => import('@/components/frontend/bridges/bridgeshome')
const Prices = () => import('@/components/frontend/homepages/prices')
const Forgot = () => import('@/components/frontend/homepages/forgot')
const Reset = () => import('@/components/frontend/homepages/passwordreset')
const Talent = () => import('@/components/frontend/homepages/talent')
const Privacy = () => import('@/components/frontend/homepages/privacy')
const Terms = () => import('@/components/frontend/homepages/terms')
const JobBoard = () => import('@/components/frontend/homepages/jobboard')
const JobDetails = () => import('@/components/frontend/homepages/jobdetails')
const RecruiterDashboard = () => import('@/components/frontend/recruiter/Dashboard')
const ManageJobs = () => import('@/components/frontend/recruiter/job/Managejob')
const MyCandidates = () => import('@/components/frontend/recruiter/candidates/Mycandidates')
const TalentProfile = () => import('@/components/frontend/recruiter/candidatetalentprofile')
const CandidateProfile = () => import('@/components/frontend/recruiter/job/candidateprofile')
const MyCandidateProfile = () => import('@/components/frontend/recruiter/candidates/mycandidatesprofile')
const Job = () => import('@/components/frontend/recruiter/job/job')
const Projectdetails = () => import('@/components/frontend/recruiter/job/projectdetails')
const MyProjectdetails = () => import('@/components/frontend/recruiter/candidates/myprojectdetails')
const Projectlist = () => import('@/components/frontend/recruiter/projectlist')
const MyProjectlist = () => import('@/components/frontend/recruiter/candidates/myprojectlist')
const Calendar = () => import('@/components/frontend/recruiter/calendar')
const DeveloperDashboard = () => import('@/components/frontend/developer/DevDashboard')
const Myprofile = () => import('@/components/frontend/recruiter/Myprofile')
const Assessment = () => import('@/components/frontend/developer/Assessment')
const AssessmentType = () => import('@/components/frontend/developer/AssesmentType')
const TestCenters = () => import('@/components/frontend/developer/TestCenters')
const DeveloperProfile = () => import('@/components/frontend/developer/Myprofile')
const ManageApplications = () => import('@/components/frontend/developer/ManageApplications')
const DeveloperProjects = () => import('@/components/frontend/developer/DeveloperProjects')
const QuizzesList = () => import('@/components/frontend/developer/quiz/QuizzesList')
const DeveloperProjectDetails = () => import('@/components/frontend/developer/DeveloperProjectDetails')
const Report = () => import('@/components/frontend/recruiter/Report');
const Portfolio = () => import('@/components/frontend/developer/Portfolio');
const DevCalendar = () => import('@/components/frontend/developer/DevCalendar');
const Commmunity = () => import('@/components/frontend/developer/community');
const TakeQuiz = () => import('@/components/frontend/developer/quiz/takequiz');
const SelfverifyProject = () => import('@/components/frontend/developer/SelfverifyProject');
const Bridgesdashboard = () => import('@/components/frontend/bridges/bridgesdashboard');
const Unsubscribe = () => import('@/components/frontend/homepages/unsubscribed')
const Cart = () => import('@/components/frontend/recruiter/cart/Cart');
const Checkout = () => import('@/components/frontend/recruiter/cart/Checkout');
const Paths = () => import('@/components/frontend/bridges/paths');
const Resources = () => import('@/components/frontend/bridges/resources');
const CohortSubmissions = () => import('@/components/frontend/bridges/cohortprojects');

Vue.use(Router);

let router = new Router({
    mode: 'history',
    base: __dirname,
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
            path: '/post/:post',
            name: 'post',
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
            path: '/forgot',
            name: 'forgot',
            component: Forgot
        },
        {
            path: '/unsubscribe/:token',
            name: 'unsubscribe',
            component: Unsubscribe
        },
        {
            path: '/password_reset_confirm/:uid/:token',
            name: 'reset',
            component: Reset,
            props: (route) => ({
                uid: route.query.uid,
                token: route.query.token,
            })
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
            path: '/developerprofile',
            name: 'developerprofile',
            component: DeveloperProfile,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: Portfolio,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/bridgesdashboard',
            name: 'bridgesdashboard',
            component: Bridgesdashboard,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/bridgesHome',
            name: 'bridgesHome',
            component: BridgesHome,

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
            path: '/devcalendar',
            name: 'devcalendar',
            component: DevCalendar,
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
            path: '/assignedproject/:projectId/:applicationId/:type',
            name: 'assignedproject',
            component: DeveloperProjectDetails,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/selfverifyproject/:applicationId',
            name: 'selfverifyproject',
            component: SelfverifyProject,
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
            path: '/projectlist/:jobId/:applicationId',
            name: 'projectlist',
            component: Projectlist,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/myprojectlist/:applicationId',
            name: 'myprojectlist',
            component: MyProjectlist,
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
            path: '/recommendedprofile/:candidateId/:jobId',
            name: 'recommendedprofile',
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
            path: '/selectassesment',
            name: 'assessmenttype',
            component: AssessmentType,
            meta: {
                requiresAuth: true
            }
        },

        {
            path: '/testcenters',
            name: 'testcenters',
            component: TestCenters,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/assessment',
            name: 'assessment',
            component: Assessment,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/developerprojects/',
            name: 'developerprojects',
            component: DeveloperProjects,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/quizlist',
            name: 'quizlist',
            component: QuizzesList,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/manageapplications',
            name: 'manageapplications',
            component: ManageApplications,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/developerprojectdetails/:projectId',
            name: 'developerprojectdetails',
            component: DeveloperProjectDetails,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/report/:candidateId/:projectId/',
            name: 'report',
            component: Report,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/takequiz/:candidateId/:quizId/',
            name: 'takequiz',
            component: TakeQuiz,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/cart',
            name: 'cart',
            component: Cart,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/checkout',
            name: 'checkout',
            component: Checkout,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/community',
            name: 'community',
            component: Commmunity,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/prices',
            name: 'prices',
            component: Prices,

        },
        {
            path: '/paths',
            name: 'paths',
            component: Paths,
            meta: {
                requiresAuth: true
            }

        },
        {
            path: '/resources/:path',
            name: 'resources',
            component: Resources,
            meta: {
                requiresAuth: true
            }

        },
        {
            path: '/cohortsprojects',
            name: 'cohortsprojects',
            component: CohortSubmissions,

        },
    ],
    scrollBehavior(to, from, savedPosition) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({x: 0, y: 0})
            }, 1)
        })
    }

})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {


        if (store.getters.isLoggedIn) {


            next();
            return
        }
        next('/login')

    } else {
        next()
    }
})


export default router
