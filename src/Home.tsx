import React, { useState, useEffect } from "react";
import Weather from "./Weather";
import API from "./API";
type Props = {
  degreeType: string,
  handleDegreeClick: Function
}
export default ({degreeType, handleDegreeClick}: Props) => {
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
      <div>Unit: {degreeType}</div>
      <Weather temp={temp} low={low} high={high} icon={icon} degreeType={degreeType} handleDegreeClick={handleDegreeClick}/>
    </div>
  );
};
