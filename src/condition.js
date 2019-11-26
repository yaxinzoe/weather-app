import React from 'react';
import './App.css';
import imgURL1 from './../src/icon-umberella.png';
import imgURL2 from './../src/icon-wind.png';
import imgURL3 from './../src/icon-compass.png';


function Condition(props){
        const air="Clear";

        return(
            <section className="weather-condition">
            <div className="weather-condition__location">{props.city.name}</div>
            <div style={{textAlign: 'center', fontSize: '14px'}}>{air}</div>
            <div className="weather-condition__temp">{props.current.maxCelsius} c</div>
            <div className="weather-condition__desc">
                <div>
                    <img src={imgURL1} alt="umberella" /> <span className="citem">{props.current.humidity}%</span>
                </div>
                <div>
                    <img src={imgURL2} alt="wind" /> <span className="citem">{props.current.windSpeed} km/h</span>
                </div>
                <div>
                    <img src={imgURL3} alt="compass" /> <span className="citem">{props.current.windDirection}</span>
                </div>
            </div>
            </section>
        );
    }

export default Condition;