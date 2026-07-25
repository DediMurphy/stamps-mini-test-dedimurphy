const API_KEY = process.env.OWM_API_KEY;
const CITY = "Jakarta,ID";
const BASE_URL = "https://api.openweathermap.org/data/2.5/forecast";

async function getForecast() {
  if (!API_KEY) {
    console.error("ERROR: Missing API key. Set the OWM_API_KEY environment variable " + "before running this script (see instructions at top of file).");
    process.exit(1);
  }

  const url = `${BASE_URL}?q=${encodeURIComponent(CITY)}&appid=${API_KEY}&units=metric&lang=en`;
  const response = await fetch(url);

  if (!response.ok) {
    console.error(`ERROR: OpenWeatherMap request failed (${response.status})`);
    process.exit(1);
  }

  const data = await response.json();
  const daily = {};

  for (const entry of data.list) {
    const [dateStr, timeStr] = entry.dt_txt.split(" ");

    if (timeStr === "12:00:00" || !(dateStr in daily)) {
      daily[dateStr] = {
        date: new Date(entry.dt_txt.replace(" ", "T") + "Z"),
        temp: entry.main.temp,
      };
    }
  }

  return daily;
}

function formatDate(date) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  const dayName = days[date.getUTCDay()];
  const day = date.getUTCDate();
  const month = months[date.getUTCMonth()];
  const year = date.getUTCFullYear();
  return `${dayName}, ${day} ${month} ${year}`;
}

async function main() {
  const daily = await getForecast();

  Object.values(daily)
    .slice(0, 5)
    .forEach((info) => {
      console.log(`${formatDate(info.date)}: ${info.temp.toFixed(1)}°C`);
    });
}

main();