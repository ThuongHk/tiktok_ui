import Home from '~/pages/home/Home';
import Following from '~/pages/following/Following';
import Updat from '~/pages/updat/Updat';


const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/updat', component: Updat, layout: Updat }
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }