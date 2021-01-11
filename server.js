const express = require("express");
const path = require("path");
const fetch = require("node-fetch");
const app = express();
app.use(express.static(path.join(__dirname, "build")));

require("dotenv").config({ path: __dirname + "/.env" });
const API_KEY = process.env["REACT_APP_OPENWEATHERMAP_API_KEY"];
const API_URL = "https://api.openweathermap.org/data/2.5/";

app.get("/api/current/:lat/:lon", async ({ params: { lat, lon } }, res) => {
  const url = `${API_URL}weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  const ret = await (await fetch(url)).json();
  const temp = ret.main.temp;
  const low = ret.main.temp_min;
  const high = ret.main.temp_max;
  const icon = ret.weather[0].icon;
  res.send({ temp, low, high, icon });
});

app.get("/api/forecast/:lat/:lon", async ({ params: { lat, lon } }, res) => {
  const url = `${API_URL}forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  const ret = await (await fetch(url)).json();
  if (ret.cod.toString() !== "200") {
    res.status(500).send({ error: "Unable to reach API" });
    return;
  }
  try {
    // find the daily lows/highs
    // also count how many times each weather icon is used per day
    let days = ret.list.reduce((acc, item) => {
      const day = item.dt_txt.slice(5, 10); // get the MM-DD part of the date
      const icon = item.weather[0].icon;
      acc[day] = acc[day] || { low: 1000, high: 0, icon_counts: {} };
      acc[day].icon_counts[icon] = acc[day].icon_counts[icon] + 1 || 0;
      if (item.main.temp_max > acc[day].high)
        acc[day].high = item.main.temp_max;
      if (item.main.temp_min < acc[day].low) acc[day].low = item.main.temp_min;
      return acc;
    }, {});
    days = Object.entries(days).map(([day, { low, high, icon_counts }]) => {
      // find the icon with the highest count
      const icon = Object.entries(icon_counts).reduce((count_a, count_b) =>
        count_a[1] < count_b[1] ? count_b : count_a
      )[0];
      return { low, high, icon };
    });
    res.send({ days });
  } catch (e) {
    res.status(500).send({ error: "Unable to process API request" });
  }
});

app.listen(process.env.PORT || 8080);
