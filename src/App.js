
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Routes , Route} from 'react-router-dom'
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart'
import ShopCategory from './Pages/ShopCategory'
import Shop2 from './Pages/Shop2';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assetes/banner_mens.png'
import women_banner from './Components/Assetes/banner_women.png'
import kid_banner from './Components/Assetes/banner_kids.png'

function App() {
  return (
    <div >
    
      <Navbar/>
     
      <Routes>
<Route path='/' element={<Shop2/>}/>
<Route path='/men' element={<ShopCategory banner={men_banner} category="men"/>}/>
<Route path='/women' element={<ShopCategory banner={women_banner} category="women"/>}/>
<Route path='/child' element={<ShopCategory banner={kid_banner} category="child"/>}/>
<Route path="/Product" element={<Product/>}>
  <Route path=':productId' element={<Product/>}/>
</Route>
<Route path='/Cart' element={<Cart/>}/>
<Route path='/login' element={<LoginSignup/>}/>
      </Routes>
 <Footer/>
    </div>
  );
}

export default App;
