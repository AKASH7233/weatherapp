const api = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const api_key = "863242cfb2b1d357e6093d9a4df19a4b";
const input = document.getElementById("inp");
const btn = document.querySelector(".main button");

async function weather(city){
    const response = await fetch(api + city + `&appid=${api_key}`);

    if(response.status == 404){
        document.getElementById("error").innerHTML = "Enter a Valid PlaceName !";
        document.querySelector("#content").style.display = "none";
    }
    else{
    var data = await response.json();
    console.log(data);
    document.getElementById("place").innerHTML = data.name;
    document.getElementById("deg").innerHTML = Math.round(data.main.temp) + `<sup>o</sup>` + `C`;
    document.getElementById("humi").innerHTML = data.main.humidity + `%`;
    document.getElementById("speed").innerHTML = data.wind.speed + `Km/h`;

    if(data.weather[0].main == "Clouds"){
        document.getElementById("image").src = "clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        document.getElementById("image").src = "clear.png"
    }
    else if(data.weather[0].main == "Rain"){
        document.getElementById("image").src = "rain.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        document.getElementById("image").src = "drizzle.png"
    }
    else if(data.weather[0].main == "Mist"){
        document.getElementById("image").src = "mist.png"
    }
    else{
        document.getElementById("image").src = "clear.png"
    }
    document.getElementById("error").style.display = "none";
    document.querySelector("#content").style.display = "block";
}
}
btn.addEventListener("click",()=>{
    weather(input.value);
}
)