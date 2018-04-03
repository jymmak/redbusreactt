export default function () {
  return {
    internet: {
      banks: [
        { name: 'bcp', text: '', image: 'assets/bcp.png', instructions: ['Selecciona la opción Pago de servicios > EMPRESAS > PAGOEFECTIVO > SOLES.', 'Ingresa tu código CIP: 9125682 y sigue los pasos.'], disclaimer: [] },
        { name: 'bbva', text: '', image: 'assets/bbva.png', instructions: ['Selecciona la opción Pago de servicios > De Instituciones y Empresas > Busca por nombre> PAGOEFECTIVO > PAGOEFECTIVOSOLES.', 'Ingresa tu código CIP: 9125682 y sigue los pasos.'], disclaimer: [] },
        { name: 'interbank', text: '', image: 'assets/interbank.png', instructions: ['Selecciona la opción Pago a Instituciones o Empresa > Empresa: PAGOEFECTIVO > Servicio: PAGOEFECTIVO', 'Ingresa tu código CIP: 9125682 y sigue los pasos.'], disclaimer: [] },
        { name: 'scotiabank', text: '', image: 'assets/scotiabank.png', instructions: ['Selecciona la opción Pagos > Otras Instituciones > Otros > Busca por Empresa/Servicio: PAGOEFECTIVO > Selecciona: PAGOEFECTIVO SOLES', 'Ingresa tu código CIP: 9125682 y sigue los pasos.'], disclaimer: [] },
        { name: 'banbif', text: '', image: 'assets/banbif.png', instructions: ['Selecciona la opción Pago de servicios > Busca por Empresa y escribe PAGOEFECTIVO > Selecciona la empresa PAGOEFECTIVO', 'Ingresa tu código CIP: 9125682 y sigue los pasos.'], disclaimer: [] }
      ],
      link: 'https://ubicanos.pagoefectivo.pe/#/?tienda=[idServicio]&moneda=1&monto=100.00&ubicame=true',
      buttonText: 'Ir a banca por internet'
    },
    cash: {
      banks: [
        { name: 'bcp', text: 'Agentes y Bodegas Agencias', image: 'assets/bcp.png', instructions: ['Indica que vas a realizar un pago a la empresa PAGOEFECTIVO. Indica el Código CIP: 9125682 y el importe a pagar en Soles.'], disclaimer: ['Agentes BCP: Brinda el código de empresa 02186.', 'Agencias BCP: Costo adicional: S/.1.00.'] },
        { name: 'bbva', text: 'Agentes y Bodegas Agencias', image: 'assets/bbva.png', instructions: ['Indica que vas a realizar un pago a la empresa PAGOEFECTIVO. Indica el Código CIP: 9125682 y el importe a pagar en Soles.'], disclaimer: [] },
        { name: 'interbank', text: 'Agentes y Bodegas Agencias', image: 'assets/interbank.png', instructions: ['Indica que vas a realizar un pago a la empresa PAGOEFECTIVO. Indica el Código CIP: 9125682 y el importe a pagar en Soles.'], disclaimer: ['Agentes Interbank: Brinda el siguiente código 2735001', 'Agencias Market de Interbank: Costo adicional S/. 2.00.'] },
        { name: 'banbif', text: 'Agencias', image: 'assets/banbif.png', instructions: ['Indica que vas a realizar un pago a la empresa PAGOEFECTIVO. Indica el Código CIP: 9125682 y el importe a pagar en Soles.'], disclaimer: [] },
        { name: 'fullcarga', text: 'Agentes y Bodegas Agencias', image: 'assets/logo-fullcarga.png', instructions: ['Indica que vas a realizar un pago a la empresa PAGOEFECTIVO. Indica el Código CIP: 9125682 y el importe a pagar en Soles.'], disclaimer: ['Encuentra a FullCarga en Bodegas, Farmacias, cabinas de Internet y Locutorios.'] },
        { name: 'scotiabank', text: 'Agencias', image: 'assets/scotiabank.png', instructions: ['Indica que vas a realizar un pago a la empresa PAGOEFECTIVO. Indica el Código CIP: 9125682 y el importe a pagar en Soles.'], disclaimer: [] },
        { name: 'western', text: 'Agentes y Bodegas Agencias', image: 'assets/logo-wu.svg', instructions: ['Indica que vas a realizar un pago a la empresa PAGOEFECTIVO. Indica el Código CIP: 9125682 y el importe a pagar en Soles.'], disclaimer: [] },
        { name: 'kasnet', text: 'Agentes', image: 'assets/logo-kasnet.png', instructions: ['Indica que vas a realizar un pago a la empresa PAGOEFECTIVO. Indica el Código CIP: 9125682 y el importe a pagar en Soles.'], disclaimer: [] }
      ],
      link: 'https://ubicanos.pagoefectivo.pe/#/?tienda=[idServicio]&moneda=1&monto=100.00&ubicame=true',
      buttonText: 'Encuentra tu punto de pago'
    }
  }
}