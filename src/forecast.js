import React from 'react';
import './App.css';
import ForecastTwo from './forecastTwo';
import axios from 'axios';
import {format} from 'date-fns';
import Hearder from './header';
// class Forecast extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             clocks:['10:00','13:00','16:00']
//         }
//     }

//     // handleClock(i){
//     //     const clocks = [...this.state.clocks];
//     //     clocks[i] = ['10:00']
//     //     this.setState({clocks});
//     // }

//     renderClocks=(index)=>{
//         return <ForecastTwo content={this.state.clocks[index]} />
//     }

//     render(){
//         const itemOne="5 items";
//         const itemTwo="10 items";

//         return(
//             <section className="weather-forecast">
//                 <div className="forecast__switch">
//                     <button className="forecast__switch_0 switch-active">{itemOne}</button>
//                     <button className="forecast__switch_1">{itemTwo}</button>
//                 </div>
//                 <div>
//                     {this.renderClocks(0)}
//                 </div>
//                 <div>
//                     {this.renderClocks(1)}
//                 </div>
//                 <div>
//                     {this.renderClocks(2)}
//                 </div>
//             </section>
//         )
//     }
// }
class Forecast extends React.Component{

    //fetch data
    
    // handleClock(i){
    //     const clocks = [...this.state.clocks];
    //     clocks[i] = ['10:00']
    //     this.setState({clocks});
    // }

    // renderClocks=(index)=>{
    //     return <ForecastTwo content={this.state.clocks[index]} />
    // }

    render(){
        const itemOne="5 items";
        const itemTwo="10 items";

        return(
            <section className="weather-forecast">
                <div className="forecast__switch">
                    <button 
                    className={`forecast__switch_0 ${this.props.limit === 5 ?'swicth-active' :''}`}
                    onclick={()=>this.props.changeLimit(5)} 
                    >
                    {itemOne}
                    </button>
                    <button 
                    className={`forecast__switch_1 ${this.props.limit === 10 ?'swicth-active' :''}`}
                    onclick={()=>this.props.changeLimit(10)} 
                    >
                    {itemTwo}
                    </button>
                </div>
                {/* <div>
                    {this.renderClocks(0)}
                </div>
                <div>
                    {this.renderClocks(1)}
                </div>
                <div>
                    {this.renderClocks(2)}
                </div> */}
                {this.props.forecasts.map(forecast =>(
                    <ForecastTwo
                    key={forecast.day + forecast.time}
                    day={forecast.day}
                    high={forecast.high}
                    low={forecast.low}
                    time={forecast.time}
                    />
                ))}
            </section>
        )
    }
}


export default Forecast;