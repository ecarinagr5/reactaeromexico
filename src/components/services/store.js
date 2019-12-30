import axios from 'axios';


const getFlight = data => {
    const url_base ='https://www.aeromexico.com/api/v1/checkin/flight-status';
    const url_final = `${url_base}?store=${data.store}&pos=${data.post}&flight=${data.flight}&date=${data.date}&origin=${data.origin}&origin=${data.destination}`;
    axios.get(url_final )
    .then(res => {
      console.log(res)
    })

    const respuesta = [
        {numerovuelo:"AM 304", leyenda:"Operado por Aerolitoral DBA", status:1, origen:"ACA", salida:'12:21',llegada:'14:39',destino:'MEX'},
        {numerovuelo:"AM 305", leyenda:"Operado por Aerolitoral", status:2, origen:"ZRH", salida:'12:21',llegada:'14:39',destino:'MEX'},
        {numerovuelo:"AM 305", leyenda:"Operado por Aerolitoral", status:3, origen:"ZLO", salida:'12:21',llegada:'14:39',destino:'ZRH'},
    ]

    const flag=0;
}

export default getFlight;