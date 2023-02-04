import React from "react";
import { Button } from "react-bootstrap";

const WeatherButton = ({ cities, selected, handleLocation }) => {
  console.log("cities?", cities);
  return (
    <div className="button-container">
      <Button
        variant={`${selected === "" ? "outline-warning" : "warning"}`}
        onClick={()=>handleLocation("current")}
      >
        Current Location
      </Button>
      {cities.map((item) => (
        <Button
          variant={`${selected === item ? "outline-warning" : "warning"}`}
          onClick={()=>handleLocation(item)}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
