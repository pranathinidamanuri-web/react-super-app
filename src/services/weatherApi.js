const API_KEY ="7794c07bffedca33311e51af43821517"; // 🔥 replace this

export const getWeather = async (city = "Hyderabad") => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Weather API error:", error);
    throw error;
  }
};