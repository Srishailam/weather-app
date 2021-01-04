import React from "react";

interface Props {
  temp: number | null;
  low: number;
  high: number;
  icon: string;
}

export default ({ temp, low, high, icon }: Props) => {
  const fmt = (degrees: number, entry?: string) => {
    return entry ? (
      <>
        {entry}: {Number.isNaN(degrees) ? "-" : degrees} °K
        <br />
      </>
    ) : (
      <div className="current">
        {Number.isNaN(degrees) ? "-" : degrees} °K
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
