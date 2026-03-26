
const API_KEY = "0528d09488fa47a7b663956921b8441d";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(position);
    fetch(url).then(response => response.json())
    .then(data => {
        const city = data.name;
        const weather = data.weather[0].main;
        const temp = data.main.temp;
        console.log(`현재 ${city} 날씨는 ${weather}입니다.`);
        const span1 = document.querySelector("#weather span:first-child");
        const span2 = document.querySelector("#weather span:last-child");
        span1.innerText = `현재 ${city} 날씨는`;
        span2.innerText = `${weather}입니다. 기온이 ${temp}도 이므로 감기 조심하세요`;
    });
}
function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);