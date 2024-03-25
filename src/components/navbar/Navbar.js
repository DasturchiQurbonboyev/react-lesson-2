import React from 'react'
import "../navbar/Navbar.css"
import { NAVBARLINKS } from '../../static'
import { GrClose } from "react-icons/gr";
import { FaApple, FaSearch } from "react-icons/fa";
import { BiShoppingBag } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import "../../js/navbar.js"


const navbarLinks = NAVBARLINKS.map((el, index) => <li key={index}><a className='navbar__link' href="#">{el}</a></li>)




function Navbar() {
    return (
        <div className='navbar'>
            <div className="navbar__top">
                <h5>Choose another country or region to see content specific to your location.</h5>
                <div className='navbar__top__reight'>
                    <input type="text" name="" id="" />
                    <button className='navbar__btn cursor__pont'>Continue</button>
                    <img src="#" alt="" />
                    <GrClose className='navbar__close__btn cursor__pont' />
                </div>
            </div>
            <div className="navbar__bottom">
                <FaApple className='navbar__img cursor__pont' />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "15px" }}>
                    <div className='navbar__linksssssss'>
                        {navbarLinks}
                    </div>
                </div>
                <div className='' style={{ display: "flex", gap: "10px" }}>
                    <FaSearch className='navbar__search navbar__img cursor__pont' />
                    <BiShoppingBag className='navbar__search navbar__img cursor__pont' />
                    <GiHamburgerMenu className='hamburger cursor__pont' />
                </div>
            </div>
            <div className="navbar__respons">
                <div className=''>
                    {navbarLinks}
                </div>
            </div>

        </div>
    )
}

export default Navbar