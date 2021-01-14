import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Forecast from "./Forecast";
import Home from "./Home";

const MainContainer = styled.main`
  flex: 1;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: 0.25px;
  margin: 40px;
  padding: 80px 0;
`;
export default () => {
  const [degreeType, setDegreeType] = useState('F');

  const onDegreeTypeClick = () => {
    if (degreeType === "F") {
      setDegreeType("C");
    } else {
      setDegreeType("F");
    }
  }
  return (
    <MainContainer>
      <Switch>
        <Route 
          path="/" 
          exact
          render={  (props) => ( 
            <Home {...props} degreeType={degreeType} handleDegreeClick={onDegreeTypeClick}/>
          )}
          />
        <Route 
          path="/forecast"
          render={  (props) => ( 
            <Forecast {...props} degreeType={degreeType} handleDegreeClick={onDegreeTypeClick}/>
          )}
          />
      </Switch>
    </MainContainer>
  )
}
