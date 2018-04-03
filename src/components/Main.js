import React from 'react'
import MainTab from '../containers/MainTab'
import MainContent from '../containers/MainContent'
import './Css/main.css';
import logo from './Assets/Images/logo.png';


const Main = () => {
  return (
    <section className="container px-0">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <img className='logo' src={logo} alt='logo'></img>
          </div>
        </div>
      </div>
      <MainTab />
      <div className="tab-content p-3">
        <MainContent />
      </div>
    </section>
  )

}

export default Main