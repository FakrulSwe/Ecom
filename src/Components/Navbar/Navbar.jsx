import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa';
import Select from '../SelectDrop/Select';
import { IoLocationOutline } from "react-icons/io5";
import axios from 'axios';


const Navbar = () => {

  const [isOpenDropDown, setisOpenDropDown] = useState(false);
    
    const [categories, setCategories] = useState([
        'Jewelry',
        'Bags',
        'Shoes',
        'Beauty Products',
        'Mens Clothing',
        'Womens Clotiong',
        'Baby Items',
        'Phone accessories',
        'Office & School',
        'Seasonal Products',
        'Eyewear',
        'Sports & Fitness',
        'Entertainment Items',
        'Watches',
        'Automobile Items',
        'Groceries',
        'Outdoor & Travelling',
        'Electronics',
        'Home And Kitchen',
        'Tools & Home',
    ]);

    const countryList = [];

    useEffect(()=>{
        getCountry('https://countriesnow.space/api/v0.1/countries/');
    },[]);

    const getCountry = async(url)=>{
        try{
            await axios.get(url).then((res)=>{
                if(res!==null){
                    res.data.data.map((item,index)=>{
                        countryList.push(item.country);
                    })
                    // console.log(res.data.data);
                    
                }
            })
        }catch(error){
            console.log(error.message);
        }
    }

  const [menu,setMenu]    = useState("shop")


  return (
    <div className        = 'navbar'>
      <div className      = "nav-logo">
        <img src          = {logo} alt="" />
        {/* <p>ECOM</p> */}
        <Link style={{ textDecoration: 'none' }} to='/'><p>ECOM</p></Link>
      </div>
      <div>
        <div className="headerSearch">
          <Select data={categories} placeholder={'All Categories'} icon={false}/>
              <div className="search">
                  <input type="text" placeholder='Search for items....'/>
                  <FaSearch className='positionselect cursor'/>
              </div>
          </div>
        </div>
      <ul className       = "nav-menu">
        <li onClick       = {()=>{setMenu("shop")}}><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link> {menu === "shop"?<hr/>:<></>}</li>
        <li onClick       = {()=>{setMenu("mens")}}><Link style={{ textDecoration: 'none' }} to='/mens'>Men</Link> {menu === "mens"?<hr/>:<></>}</li>
        <li onClick       = {()=>{setMenu("womens")}}><Link style={{ textDecoration: 'none' }} to='/womens'>Women</Link> {menu === "womens"?<hr/>:<></>}</li>
        <li onClick       = {()=>{setMenu("kids")}}><Link style={{ textDecoration: 'none' }} to='/kids'>Kids</Link> {menu === "kids"?<hr/>:<></>}</li>
      </ul>

      <div className="countyrSearch">
          <div className="ml-auto d-flex align-item-center">
              <div className="countrywrapper">
                  <Select data={countryList}placeholder={'Your Location'} icon={<IoLocationOutline style={{opacity:'10'}}/>}/>
              </div>
          </div>
                    
      </div>
      <div className      = "nav-login-cart">
        <Link to          = '/signup'><button>Login</button></Link>
        <Link to          = '/cart'><img src = {cart_icon} alt="" /></Link>
        <div className    = "nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar
