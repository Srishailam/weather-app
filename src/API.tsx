import React from "react";

export default (name: string, setState: React.Dispatch<any>) => {
  navigator.geolocation.getCurrentPosition(
    ({ coords: { latitude: lat, longitude: lon } }) => {
      fetch(`/api/${name}/${lat}/${lon}`)
        .then((res) => res.json())
        .then((res) => {
          setState(res);
        });
    }
  );
};
