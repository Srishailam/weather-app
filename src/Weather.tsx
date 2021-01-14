import React from "react";
import styled from "styled-components";

interface Props {
  temp: number | null;
  low: number;
  high: number;
  icon: string;
  handleDegreeClick: Function;
  degreeType: string;
  marginTop: any;
}

const WeatherContainer = styled.div<{marginTop: any}>`
  display: flex;
  justify-content: space-between;
  width: 400px;
  flex-direction: row;
  color: ${ (props) => props.theme.colors['color-vroom-black']};
  background-color: ${ (props) => props.theme.colors['color-vroom-white']};
  padding: 16px;
  margin: 5px auto;
  text-align: center;
  .info {
    .current {
      font-size: 30px;
      color: ${ (props) => props.theme.colors['color-vroom-red']};
    }
    flex: 1;
    display: inline-block;
  }
  .graphic {
    flex: 1;
    display: inline-block;
    background-color: #3ff;
    height: 48px;
    margin-top: ${ (props) => {
      if(props.marginTop){
        return "20px"
      }
    }};
    img {
      width: 50px;
      top: -6px;
      position: relative;
    }
    div {
      margin-top: -16px;
      border-bottom: 10px solid #18af18;
    }
  }
  .degree {
    color: #a9b2d27d;
    cursor: pointer;
  }
  .degree.active{
    color: cornflowerblue;
    pointer-events: none;
    cursor: none;
  }
`;
export default ({ marginTop, temp, low, high, icon, degreeType, handleDegreeClick}: Props) => {

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
    <WeatherContainer marginTop={marginTop}>
      <div className="info">
        {temp !== null ? fmt(temp) : ""}
        {fmt(low, "L")}
        {fmt(high, "H")}
      </div>
      <div className="graphic">
        <img alt="" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
        <div />
      </div>
    </WeatherContainer>
  );
};
