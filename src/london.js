async function londonData() {
  try {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=86798aad821bb8c4ee2887a3873485ff"
    );

    const data = await response.json();

    const temperature = await data.main.temp;

    const icon = await data.weather[0].icon;

    return { temperature, icon };
  } catch (error) {
    
  }
}

export async function showLondonData() {
  try{
    const data = await londonData();

  const icon = document.getElementById("londonIcon");
  icon.src = `./icons/${data.icon}.png`;

  const temperature = document.getElementById("londonTemp");
  temperature.textContent = Math.floor(data.temperature) + "°C";
  }
  catch (error){
  }
}
