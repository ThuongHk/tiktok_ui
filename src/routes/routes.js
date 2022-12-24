import Home from '~/pages/home/Home';
import Following from '~/pages/following/Following';


const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following }
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }