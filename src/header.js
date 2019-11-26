import React from 'react';
import './App.css';
import imgURL from './../src/logo.png';
import Nav from './nav';
import Condition from './condition';
import Forecast from './forecast';
import Footer from './footer';
import axios from 'axios';
import {format} from 'date-fns';
import {getWeather} from './utils/aixos';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            input:'',
            forecasts :[],
            limit:5,
            current:{},
            name:''
        }
    }

    changeLimit=limit=>{
        this.setState({limit});
    }

    handleInput=event=>{
        this.setState({input:event.target.value});
    }

    updateWeather=()=>{
        
    }

    hanleSearch=() =>{
        getWeather(this.state.input)
    }

    componentDidMount(){
        getWeather('brisbane')
        .then(response=>{
            console.log(response)
            const forecasts = response.data.data.forecast.slice(0,10).map(forecast =>{
                const date = new Date(forecast.time*1000);
                const day = format(date, 'EEE');
                const time = format(date, 'HH:mm');

                return{
                    day,
                    time,
                    high:forecast.maxCelsius,
                    low:forecast.minCelsius
                }
            })
            this.setState({forecasts})
            //forecasts:forecasts (第一个forecasts是上面的空array)
        });
        getWeather('brisbane')
        .then(response=>{
            const name = response.data.data.city;
            const current = response.data.data.current;
            this.setState({current})
            this.setState({name})
            
            this.setState({current})
            this.setState({name})
        });
    }


    render(){
        const header = "Weather Channel";
        return (
            <div className="weather-channel__container">
                <header>
                    <img className="header__logo" src={imgURL} alt="" />
                    <div className="header__title">{header}</div>
                </header>
                <div>
                    <Nav inputValue={this.state.input}
                    handleInput={this.handleInput}/>
                </div>
                <div>
                    <Condition 
                    current={this.state.current}
                    city={this.state.name}/>
                </div>
                <div>
                    <Forecast 
                    forecasts={this.state.forecasts.slice(0,this.state.limit)}
                    changeLimit={this.changeLimit}
                    limit={this.state.limit}/>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Header;