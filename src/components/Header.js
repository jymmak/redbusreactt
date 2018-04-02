import React from 'react';
import './Css/header.css';
import logo from './Assets/Images/logo.png';





const Header = () => (

  <header>
    <div className="container">
      <div className="row">
        <div className="col-md-7 offset-md-1">
          <img className='logo' src={logo} alt='logo'></img>
        </div>
     
      </div>
    </div>
  </header>

)


export default Header;