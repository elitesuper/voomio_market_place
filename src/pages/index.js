import Home from "./Home";
import Profile from "./Profile"
import Detail from "./Detail"
import NoResult from "./NoResult";


const routes = [
  { path: '/', component: <Home />},
  { path: '/profile', component: <Profile />},
  { path: '/detail', component: <Detail />},
  { path: '/no-result', component: <NoResult />},
]

export default routes;