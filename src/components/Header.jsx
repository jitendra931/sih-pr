import { useState } from 'react';
import logoPic from '../assets/images/logo.png';
import './Header.css';
import { DropDownService } from './DropDownService';


export function Header() {

  const [DropDown , setDropDown] = useState(false);

  return (
    <header className="main-header">
      <div className='logo-sec'>
        <img src={logoPic} className='logo-pic' alt="Logo" />
        <span className="logo">TechYatries</span>
      </div>

      <nav className="navbar">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li className="dropdown"
              onMouseEnter={()=>setDropDown(true)}
              onMouseLeave={()=>setDropDown(false)}
          >
            <a href="#" className='service'>Services</a>
            {DropDown &&
            (<DropDownService/>
          )}
          </li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      <div className="right-section">
        <div className="search-box">
          <input type="text" placeholder="Search..." />
          <button>
            <i className="search-icon hgi hgi-stroke hgi-search-01"></i>
          </button>
        </div>

        <div className="auth-buttons">
          <button className="signin-btn">Sign In</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </div>
    </header>
  );
}
