
const apiKey = '414fb8006678a0a0b88413763ad54aa7'; 

function getWeather() {
    const cityName = document.getElementById('cityInput').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById('city').textContent = data.name;
            document.getElementById('temperature').textContent = `${Math.round(data.main.temp)}°C`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('city').textContent = 'City not found';
            document.getElementById('temperature').textContent = ''; 
        });
}