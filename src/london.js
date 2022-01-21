async function londonData() {
  try {
    const response = await fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=86798aad821bb8c4ee2887a3873485ff"
    );

    const data = await response.json();

    const temperature = await data.main.temp;

    const icon = await data.weather[0].icon;

    return { temperature, icon };
  } catch (error) {
    console.log(error);
  }
}

export async function showLondonData() {
  const data = await londonData();

  const icon = document.getElementById("londonIcon");
  icon.src = `../src/icons/${data.icon}.png`;

  const temperature = document.getElementById("londonTemp");
  temperature.textContent = Math.floor(data.temperature) + "°C";
}
