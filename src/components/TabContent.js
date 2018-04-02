import React from 'react'
import Pay from './Pay'
import Banks from './Banks'

const TabContent = ({ paymentCode, content, selectedBank, setSelectedBank}) => (
  <div className="tab-pane show active">
    <div id="payment-info" className="d-flex flex-row">
      <Pay code={pay} />
     
    </div>
    <p className="mt-3">Selecciona dónde quieres pagar:</p>
    <Banks banks={content.banks} setSelectedBank={setSelectedBank} selectedBank={selectedBank}/>
    <div className="instructions mt-3">
      <p>Puedes pagar desde la Web o App móvil del Banco</p>
      <h6 className="subtitle">Instrucciones de pago</h6>
      {selectedBank.instructions.map((p, i) =>
        <p key={i}>{p}</p>
      )}
      {/* {console.log} */}
      {selectedBank.disclaimer !== [] ? selectedBank.disclaimer.map(text => <p>{text}</p>) : null}
    </div>
    <a
      id="btn-payment"
      className="btn w-100 text-white"
      href={content.link}
    >
      <img src="assets/icon-arrow.svg" width="24" alt="Go to"/> &nbsp;
      {content.buttonText}
    </a>
  </div>
)
export default TabContent