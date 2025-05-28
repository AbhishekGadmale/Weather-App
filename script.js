const apiKey = "accf5499d51f131e49e75957f6cf57c0"; // Your API key

function getWeather() {
  const city = document.getElementById("cityInput").value;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      if (data.cod === 200) {
        const temp = data.main.temp;
        const condition = data.weather[0].description;
        const humidity = data.main.humidity;

        document.getElementById("weatherResult").innerHTML = `
          <h3>${city.toUpperCase()}</h3>
          <p>🌡️ Temp: ${temp}°C</p>
          <p>🌧️ Condition: ${condition}</p>
          <p>💧 Humidity: ${humidity}%</p>
        `;
      } else {
        document.getElementById("weatherResult").innerHTML = "❌ City not found!";
      }
    })
    .catch(error => {
      document.getElementById("weatherResult").innerHTML = "❌ Error fetching weather!";
    });
}
