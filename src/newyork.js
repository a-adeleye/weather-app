async function newYorkData() {
  try {
    const response = await fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=new%20york&units=metric&APPID=86798aad821bb8c4ee2887a3873485ff"
    );

    const data = await response.json();

    const temperature = await data.main.temp;

    const icon = await data.weather[0].icon;

    return { temperature, icon };
  } catch (error) {
    console.log(error);
  }
}

export async function showNewYorkData() {
  const data = await newYorkData();

  const icon = document.getElementById("newYorkIcon");
  icon.src = `../src/icons/${data.icon}.png`;

  const temperature = document.getElementById("newYorkTemp");
  temperature.textContent = Math.floor(data.temperature) + "°C";
}
