import React from 'react';
import './Css/header.css';
import logo1 from './Assets/Images/logorb1.png';
import logo2 from './Assets/Images/lrb.png';

const Header = () => (

  <header>
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-4">
          <img className='logo1' src={logo1} alt='logo1'></img>
          <img className='logo2' src={logo2} alt='logo2'></img>
        </div>
        <div className="col-4">
          <div class="dropdown">
            <button class="btn btn-danger dropdown-toggle language-button" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Idioma</button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="https://jymmak.github.io/redbusreactt/">Español</a>
              <a class="dropdown-item" href="https://jymmak.github.io/redb/">Inglés</a>

            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
)


export default Header;