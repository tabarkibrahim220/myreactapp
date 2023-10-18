import React, { useContext, useState } from 'react'
import './Navbar.css'

import cart_icon from '../Assetes/cart_icon.png'
import {Link} from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
 const Navbar = () => {
    const[menu, setMenu] = useState("shop");
const {getTotalCartItems}= useContext(ShopContext)


    return (
        <div className='navbar'>
<div className='nav-logo'>
   
<p>NONO SHOP</p>
</div>
<ul className='nav-menu'>
    <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to ='/'>Shop</Link>{menu==="shop"?<h/>:<></>}</li>
    <li onClick={()=>{setMenu("men")}}><Link style={{textDecoration:'none'}}to='/men'>Men</Link>{menu==="men"?<h/>:<></>}</li>
    <li onClick={()=>{setMenu("woman")}}><Link style={{textDecoration:'none'}} to='/women'>Women</Link> {menu==="woman"?<h/>:<></>}</li>
    
</ul>
<div className='nav-login-cart'>
   <Link to='/login'> <button>Login</button></Link>
   <Link to='/cart'><img style={{

width:"56px"

   }} src={cart_icon} alt=''/></Link>
    <div className="nav-cart-count">{getTotalCartItems()}</div>
</div>
        </div>
    )
 }
 export default Navbar