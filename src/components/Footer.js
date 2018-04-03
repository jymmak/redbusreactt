import React from 'react';
import './Css/footer.css';
import logo2 from './Assets/Images/logo2.png';
import Print from './Print'


const Footer = () => (
  <footer className="footer">
    <div className="row d-flex col-lg-12   d-flex justify-content-center align-items-center">
    
      <div className="col-md-3  d-flex justify-content-center align-items-center">
        <Print />
      </div>

      <div className="col-md-3 ">
        <p><span className="text-secondary">Ayuda: </span><a className="text-warning font-weight-bold" href="cont">contacto@redbus.pe</a></p>
      </div>

      <div className="col-md-3 ">
        <figure>
          <p className="d-inline-block text-secondary">Pago vía</p>
          <img className='logo2' src={logo2} alt='logo'></img>
        </figure>
      </div>

    </div>
  </footer>

)

export default Footer;  