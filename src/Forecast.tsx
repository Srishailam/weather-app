import React, { useState, useEffect } from "react";
import Weather from "./Weather";
import useFetch from "./useFetch";
import { Title } from "./Styled/SharedStyles";

interface Day {
  low: number;
  high: number;
  icon: string;
}
interface State {
  days: Day[];
}

type Props = {
  degreeType: string,
  handleDegreeClick: Function
}

export default ({degreeType, handleDegreeClick}: Props) => {
  const [{ days }, setWeather] = useState<State>({
    days: [],
  });

  const {response, error} = useFetch('forecast', setWeather, {});
  if (!response){
    return <div>Loading...</div>
  }

  let weathers: JSX.Element[] = [];
  if (days) {
    weathers = days.map(({ low, high, icon }, i) => (
      <Weather marginTop={false} key={i} temp={null} low={low} high={high} icon={icon} degreeType={degreeType} handleDegreeClick={handleDegreeClick}/>
    ));
  }
  return (
    <div className="Forecast">
      <Title>next 5 days</Title>
      <div>Unit: {degreeType}</div>
      {weathers}
    </div>
  );
};
