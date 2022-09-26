import React, {useState} from 'react';
import {   Routes , Route } from 'react-router-dom';
import './App.css';
import routes from './pages/index'
import Footer from './components/footer/Footer';
import HeaderStyle2 from './components/header/HeaderStyle2';


function App() {
    const [currentAccount, setCurrentAccount] = useState(null);    
    const setAccount = (_account) => {
        setCurrentAccount(_account);
    }
    

    const [web3Api, setWeb3Api] = useState(null);   

    return (
        <>
        <HeaderStyle2 setAccount={setAccount} setWeb3Api={setWeb3Api} />
        <Routes >
            {
            routes.map((data,index) => (
                <Route onUpdate={() => window.scrollTo(0, 0)} exact={true} path={data.path} element={data.component} key={index} />
            ))
            }
      </Routes>
      <Footer/>
      </>
    );
}

export default App;
