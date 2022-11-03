import { Routes , Route } from 'react-router-dom';
import './App.css';
import routes from './pages/index'
import Footer from './components/footer/Footer';
import HeaderStyle2 from './components/header/HeaderStyle2';



export default function App() {

      return(
        <>
          <HeaderStyle2 />
            <Routes>
                {
                  routes.map((data,index) => (
                      <Route onUpdate={() => window.scrollTo(0, 0)} exact={true} path={data.path} element={data.component} key={index} />
                  ))
                }
            </Routes>
          <Footer/>
      </>
      )
}

