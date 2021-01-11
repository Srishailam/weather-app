import React, { useState, useEffect } from "react";
import Weather from "./Weather";
import API from "./API";

export default () => {
  const [{ temp, low, high, icon }, setWeather] = useState({
    temp: NaN,
    low: NaN,
    high: NaN,
    icon: "01d",
  });

  useEffect(() => {
    API("current", setWeather);
  }, []);

  return (
    <div className="Home">
      <div className="title">Weather</div>
      <div>Unit: K</div>
      <Weather temp={temp} low={low} high={high} icon={icon} />
    </div>
  );
};
