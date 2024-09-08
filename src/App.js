import { Route,Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import AboutUs from './components/pages/AboutUs';
import Contactus from './components/pages/Contactus';
import Productdetail from './components/pages/Productdetail';
import Sitemap from './components/sitemap/Sitemap';

function App() {
  return (
    <>
    
      <Routes>
       
        <Route path='/'  element={<Home/>}/>
        
        <Route path='/sitemap'  element={<Sitemap/>}/>
        <Route path='/product'  element={<Products/>}/>
        <Route path='/services'  element={<Services/>}/>
        <Route path='/aboutus'  element={<AboutUs/>}/>
        <Route path='/contactus'  element={<Contactus/>}/>
        <Route path='/productdetail/:id'  element={<Productdetail/>}/>
      

      </Routes>



    </>
  );
}

export default App;
