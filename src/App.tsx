import React from 'react';
import './App.css';
import {humidity, pressure, stan, temperature} from "./2.Pattern-Observer/weather-station";
import WeatherDataForm from "./Components/FormWeatherData/WeatherData";

function App() {
    const updateValues = stan.setMeasurements()
    return (
        <div className="App">
            <div>{temperature.display()}</div>
            <div>{humidity.display()}</div>
            <div>{pressure.display()}</div>
            <WeatherDataForm updateValues={updateValues}/>
        </div>
    );
}

export default App;
