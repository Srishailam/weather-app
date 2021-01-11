import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Forecast from "./Forecast";
import Home from "./Home";
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
    <main>
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
    </main>
  )
}
