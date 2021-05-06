const fetch = require("node-fetch");
//modulo de node-fetch para emular el fetch de windows que viene en el cliente

const getCountryData = async()=>{

    try {
        
        const key = process.env.KEY;
        //gracias API de openweathermap
        const countryObj = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Santiago,CL&appid=${key}`);
        const jsonCountry = await countryObj.json()

        const ciudad = jsonCountry.name;
        const temperaturaK = jsonCountry.main.temp;
        const temperaturaC = Math.round(temperaturaK-273.15);
        const tempActual =`en la ciudad de ${ciudad} hay ${temperaturaC}°C`;
        return tempActual;
        
        
    } catch (error) {
        console.log(error);
    }
}



module.exports = getCountryData;