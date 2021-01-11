import React from "react";

interface Props {
  temp: number | null;
  low: number;
  high: number;
  icon: string;
  handleDegreeClick: Function;
  degreeType: string;
}

export default ({ temp, low, high, icon, degreeType, handleDegreeClick}: Props) => {

  const DegreeToggle = () => {
    return (
      <>
      <span className={`degree ${degreeType === "F" ? "active" : ""}`} onClick={() => { handleDegreeClick();}}>°F</span>
      <span> / </span>
      <span className={`degree ${degreeType === "C" ? "active" : ""}`} onClick={() => { handleDegreeClick();}}>°C</span>
      </>
    )
  }
  const fmt = (degrees: number, entry?: string) => {
    const fahrenheit = degrees ? Math.round( (degrees - 273.15) * 9/5 + 32 ) : degrees;
    const celsius = degrees ? Math.round((degrees - 273.15)) : degrees;
    const formattedValue = degreeType === "F" ? fahrenheit : celsius ;
    return entry ? (
      <>
        {entry}: {Number.isNaN(formattedValue) ? "-" : formattedValue}
        <br />
      </>
    ) : (
      <div className="current">
        {Number.isNaN(formattedValue) ? "-" : formattedValue} <DegreeToggle />
        <br />
      </div>
    );
  };
  return (
    <div className="Weather">
      <div className="info">
        {temp !== null ? fmt(temp) : ""}
        {fmt(low, "L")}
        {fmt(high, "H")}
      </div>
      <div className="graphic">
        <img alt="" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
        <div />
      </div>
    </div>
  );
};
