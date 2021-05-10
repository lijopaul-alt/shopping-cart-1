import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiSpeedometer } from "react-icons/gi";
import { Link } from "react-router-dom";
import { HiOutlineLogout } from "react-icons/hi";
import { useCartValue } from "../context/ProductContext";

function Navbar() {
  const [{ cart }] = useCartValue();
  return (
    <nav className='nav'>
      <div className='nav__container'>
        <Link to='/dashboard' className='navbar__logo'>
          <span className='navbar__logo--icon'>
            <GiSpeedometer />
          </span>
          <span className='navbar__logo--text'>SpeedCart</span>
        </Link>

        <ul className='nav__list'>
          <li className='navbar__cart'>
            <Link to='/cart' className='navbar__cart--icon'>
              <span>
                <AiOutlineShoppingCart />
              </span>
              <span className='navbar__cart--count'>{cart.length}</span>
            </Link>
          </li>
          <li className='navbar__cart'>
            <Link to='/' className='navbar__cart--icon'>
              <HiOutlineLogout />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
