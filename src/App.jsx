import { Routes , Route } from 'react-router-dom';
import './App.css';
import routes from './pages/index'
import Footer from './components/footer/Footer';
import HeaderStyle2 from './components/header/HeaderStyle2';
import { AnimatedRoutes } from 'react-animated-router';
import 'react-animated-router/animate.css'; 



export default function App() {

      return(
        <>
          <HeaderStyle2 />
            <AnimatedRoutes>
                {
                  routes.map((data,index) => (
                      <Route onUpdate={() => window.scrollTo(0, 0)} exact={true} path={data.path} element={data.component} key={index} />
                  ))
                }
            </AnimatedRoutes>
          <Footer/>
      </>
      )
}

