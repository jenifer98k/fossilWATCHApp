import React from 'react'
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
  <nav>
    <div class="wrapper">
      <div class="logo"><a href="#">Fossil</a>
       </div>
      <input type="radio" name="slider" id="menu-btn"/>
      <input type="radio" name="slider" id="close-btn"/>
      <ul class="nav-links">
        <label for="close-btn" class="btn close-btn"><i class="fas fa-times"></i></label>
        <li>  <Link to="/">Home</Link>
        </li>
      
        {/* <li><a href="#">Womens</a></li> */}
        {/* <li>
          <a href="#" class="desktop-item">Models</a>
          <input type="checkbox" id="showDrop"/>
          <label for="showDrop" class="mobile-item">Dropdown Menu</label>
          <ul class="drop-menu">
            <li><a href="#">Men watch</a></li>
            <li><a href="#">Women Watch</a></li>
            <li><a href="#">Kids Watch</a></li>
           
          </ul>
        </li> */}
        <li>
          <a href="#" class="desktop-item">
          <Link to="women">Women</Link>
          </a>
          <input type="checkbox" id="showMega"/>
          <label for="showMega" class="mobile-item">
          <Link to="women">Women1</Link>
          </label>
          <div class="mega-box">
            <div class="content">
              <div class="row">
                <img src="/images/women.jpg" alt=""/>
              </div>
              <div class="row">
                <header>Watches</header>
                <ul class="mega-links">
                  <li><a href="#">Mechanic Watch</a></li>
                  <li><a href="#">Leather Watch</a></li>
                  <li><a href="#">Smart Watch</a></li>
                  <li><a href="#"> steel Watch</a></li>
                </ul>
              </div>
              <div class="row">
                <header>Hand Bags</header>
                <ul class="mega-links">
                  <li><a href="#">Tote Bag</a></li>
                  <li><a href="#">Office bag</a></li>
                  <li><a href="#">Leather Bag</a></li>
                  <li><a href="#">Travel bag</a></li>
                </ul>
              </div>
              <div class="row">
                <header>Wallets</header>
                <ul class="mega-links">
                  <li><a href="#">Phone Wallets</a></li>
                  <li><a href="#">Zip Wallets</a></li>
                  <li><a href="#">Privacy Seal</a></li>
                  <li><a href="#">Website design</a></li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li>
          <a href="#" class="desktop-item">
          <Link to="men">Men</Link>
          </a>
          <input type="checkbox" id="showMega"/>
          <label for="showMega" class="mobile-item">
          <Link to="men">Men</Link>  
          </label>
          <div class="mega-box">
            <div class="content">
              {/* <div class="row">
                <img src="/images/fossil1.jpg" alt=""/>
              </div> */}
{/*              
              <div class="row">
                <header>Watches</header>
                <ul class="mega-links">
                  <li><a href="#">Mechanic Watch</a></li>
                  <li><a href="#">Leather Watch</a></li>
                  <li><a href="#">Smart Watch</a></li>
                  <li><a href="#"> steel Watch</a></li>
                </ul>
              </div> */}
              
              <div class="row">
                <header>Hand Bags</header>
                <ul class="mega-links">
                  <li><a href="#">Tote Bag</a></li>
                  <li><a href="#">Office bag</a></li>
                  <li><a href="#">Leather Bag</a></li>
                  <li><a href="#">Travel bag</a></li>
                </ul>
              </div>
              <div class="row">
                <header>Wallets</header>
                <ul class="mega-links">
                  <li><a href="#">Phone Wallets</a></li>
                  <li><a href="#">Zip Wallets</a></li>
                  <li><a href="#">Privacy Seal</a></li>
                  <li><a href="#">Website design</a></li>
                </ul>
              </div>
              <div class="row">
                <img src="/images/men.jpg" alt=""/>
              </div>
            </div>
          </div>
        </li>
        <li>
          <a href="#" class="desktop-item">
          <Link to="sales">Sales</Link>
          </a>
          <input type="checkbox" id="showMega"/>
          <label for="showMega" class="mobile-item">
          <Link to="sales">Sales</Link>
          </label>
          <div class="mega-box">
            <div class="content">
             
              <div class="row">
                <header>Men Sale</header>
                <ul class="mega-links">
                  <li><a href="#">Graphics</a></li>
                  <li><a href="#">Vectors</a></li>
                  <li><a href="#">Business cards</a></li>
                  <li><a href="#">Custom logo</a></li>
                </ul>
              </div>
              <div class="row">
                <header>Women Sale </header>
                <ul class="mega-links">
                  <li><a href="#">Personal Email</a></li>
                  <li><a href="#">Business Email</a></li>
                  <li><a href="#">Mobile Email</a></li>
                  <li><a href="#">Web Marketing</a></li>
                </ul>
              </div>
              {/* <div class="row">
                <header>Security services</header>
                <ul class="mega-links">
                  <li><a href="#">Site Seal</a></li>
                  <li><a href="#">VPS Hosting</a></li>
                  <li><a href="#">Privacy Seal</a></li>
                  <li><a href="#">Website design</a></li>
                </ul>
              </div> */}
              <div class="row">
                <img src="/images/offer.png" alt=""/>
              </div>
            </div>
          </div>
        </li>
        <li>
          <a href="#" class="desktop-item">
          <Link to="f">Featured
          </Link></a>
          <input type="checkbox" id="showMega"/>
          <label for="showMega" class="mobile-item">
          <Link to="f">Featured
          </Link>
          </label>
          <div class="mega-box">
            <div class="content">
              <div class="row">
                <img src="/images/gift.png" alt=""/>
              </div>
             
              
                <div class="row">
                <img src="/images/gift2.png" alt=""/>
              </div>
            
              {/* <div class="row">
                <header>Email Services</header>
                <ul class="mega-links">
                  <li><a href="#">Personal Email</a></li>
                  <li><a href="#">Business Email</a></li>
                  <li><a href="#">Mobile Email</a></li>
                  <li><a href="#">Web Marketing</a></li>
                </ul>
              </div> */}
                <div class="row">
                <img src="/images/gift3.png" alt=""/>
              </div>
              <div class="row">
                <img src="/images/gift4.png" alt=""/>
              </div>
              {/* <div class="row">
                <header>Security services</header>
                <ul class="mega-links">
                  <li><a href="#">Site Seal</a></li>
                  <li><a href="#">VPS Hosting</a></li>
                  <li><a href="#">Privacy Seal</a></li>
                  <li><a href="#">Website design</a></li>
                </ul>
              </div> */}
            </div>
          </div>
        </li>
        <li><a href="#">
        <Link to="about">About Us</Link></a>
        </li>
        <li><a href="#">
        <Link to="c">Contact Us</Link></a></li>
      </ul>
      <label for="menu-btn" class="btn menu-btn"><i class="fas fa-bars"></i></label>
    </div>
  </nav>
    </div>
  )
}

export default Navbar

 

