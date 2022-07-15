
 getWeatherData = () => {
    let city = document.querySelector("#city").value
    console.log(city)
    axios.get(`https://api.weatherapi.com/v1/current.json?key=758db06783b94175a8b123828220607&q=${city}&aqi=noo`)
        .then(function (response) {
            // handle success
            const data = response.data;
            console.log(data);
            let myicon = data.current.condition.icon;
            document.getElementById('icon').src = myicon

            document.querySelector("#temp").innerText = data.current.temp_c + "°C";


            document.querySelector("#loc").innerText = data.location.name;


            document.querySelector("#feellike").innerText = "Feel Like" +":"+ data.current.feelslike_c +"°C";
            document.querySelector("#Precipitation").innerText = "Precipitation" +":" + data.current.precip_mm ;
            document.querySelector("#humidity").innerText = "Humidity" +":" + data.current.humidity + "%";
            document.querySelector("#wind").innerText = "Wind" +":" + data.current.wind_kph + "kph";
            document.querySelector("#visiblity").innerText = "Visiblity" +":" + data.current.vis_km + "km";
            
        }) 



}