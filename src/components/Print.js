import React, { Component } from 'react';


const printPage = () => {
  const notPrint = ['printArea', 'printArea1'];
  document.getElementsByClassName('printArea').style.display = 'none';
  window.print();
  document.getElementsByClassName('printArea').style.display = 'block';
}

class Print extends Component {

  render() {
    return (
      <div className="col-md-4 col-6 d-flex justify-content-center align-items-center">
        <p className="d-inline-block m-3 align-middle text-secondary">Instrucciones vía</p>
        <button onClick={() => window.print()} type="button" className="btn btn-outline-warning">
          <i className="fas fa-print"></i></button>
      </div>
    )
  }
}

export default Print;