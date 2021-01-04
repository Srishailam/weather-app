import React, { useState, useEffect } from "react";
import Weather from "./Weather";
import API from "./API";

interface Day {
  low: number;
  high: number;
  icon: string;
}
interface State {
  days: Day[];
}

export default () => {
  const [{ days }, setWeather] = useState<State>({
    days: [],
  });

  useEffect(() => {
    API("forecast", setWeather);
  }, []);

  let weathers: JSX.Element[] = [];
  if (days) {
    weathers = days.map(({ low, high, icon }, i) => (
      <Weather key={i} temp={null} low={low} high={high} icon={icon} />
    ));
  }
  return (
    <div className="Forecast">
      <div className="title">next 5 days</div>
      <div>Unit: K</div>
      {weathers}
    </div>
  );
};
