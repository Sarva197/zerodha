import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Menu() {
    const [selctedMenu , setselctedMenu] = useState(0);
    const [profileClick , setProfileClick] = useState(false);

    const handleMenuClick = (idx)=>{
        setselctedMenu(idx);
    }

    const handleProfileClick = (idx)=>{
        setProfileClick(!profileClick);
    }

    const menuClass = "menu"; 
    const activeMenuClass = "menu selected"
  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
          <Link  to="/" style={{textDecoration:'none'}} onClick={()=>handleMenuClick(0)}> 
            <p className={selctedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
          <Link  to="/orders" style={{textDecoration:'none'}} onClick={()=>handleMenuClick(1)}>
            <p className={selctedMenu === 1 ? activeMenuClass : menuClass}>Orders</p>
            </Link>
          </li> 
          <li>
          <Link  to="/holdings" style={{textDecoration:'none'}} onClick={()=>handleMenuClick(2)}>
            <p className={selctedMenu === 2 ? activeMenuClass : menuClass}>Holdings</p>
             </Link>
          </li>
          <li>
          <Link  to="/positions" style={{textDecoration:'none'}} onClick={()=>handleMenuClick(3)}>
            <p className={selctedMenu === 3 ? activeMenuClass : menuClass}>Positions</p> 
            </Link>
          </li>
          <li>
          <Link  to="/funds" style={{textDecoration:'none'}} onClick={()=>handleMenuClick(4)}>
            <p className={selctedMenu === 4 ? activeMenuClass : menuClass}>Funds</p>
             </Link>
          </li>
          <li>
            <Link  to="/apps" style={{textDecoration:'none'}} onClick={()=>handleMenuClick(5)}>
            <p className={selctedMenu === 5 ? activeMenuClass : menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile">
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  )
}

export default Menu