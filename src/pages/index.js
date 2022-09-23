import Home from "./Home";
import Profile from "./Profile"
import NoResult from "./NoResult";


const routes = [
  { path: '/', component: <Home />},
  { path: '/profile', component: <Profile />},
  { path: '/no-result', component: <NoResult />},
]

export default routes;