import React from 'react';
import './Css/footer.css';
import logo2 from './Assets/Images/logo2.png';

const Footer = () => (

  <footer>
    <div className='container'>
      <div className='row'>
        <div className=' col-xl-4 d-flex- justify-content-center align-items-center'>
          <p className='d-inline-block  m-3 align-middle'>Instrucciones vía</p>
          <button type="button" class="btn btn-outline-warning">
            <i className="fas fa-print"></i>
          </button>
        </div>

        <div className='col-xl-4 d-flex- justify-content-center align-items-center'>
          <p className='d-inline-block  m-2 align-middle'>Ayuda:</p>
          <a className='d-inline-block  m-3 align-middle yellow' href ='mailto:contacto@redbus.pe' target='_top'><strong>contacto@redbus.pe</strong></a>
        </div>


        <div className='col-xl-4  d-flex- justify-content-center align-items-center'>
          <p className='d-inline-block  m-2 align-middle'>Pago vía</p>
          <img className='logo2' src={logo2} alt='logo'></img>

        </div>
      </div>
    </div>
  </footer>

)

export default Footer;  