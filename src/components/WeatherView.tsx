import React from "react";
import ApiService from "../service/ApiService";
import {REGIONS} from "./App";

export interface WeatherViewProps {
    region: string;
}

export interface WeatherViewState {
    temp: number;
    temp_min: number;
    temp_max: number;
    wind_speed: number;
}

export class WeatherView extends React.Component<WeatherViewProps, WeatherViewState> {
    constructor(props: WeatherViewProps) {
        super(props);
        this.state = {
            temp: 0,
            temp_min: 0,
            temp_max: 0,
            wind_speed: 0
        };
        this.reloadSalaryList = this.reloadSalaryList.bind(this);
    }

    componentDidUpdate(prevProps: WeatherViewProps) {
        if ((this.props.region !== prevProps.region) && (REGIONS.find(item => item.name == this.props.region) != undefined)) {
            this.reloadSalaryList();
        }
    }

    reloadSalaryList() {
        ApiService.getByName(this.props.region)
            .then((res) => {
                let weather = res.data;
                this.setState({
                    temp: weather.main.temp,
                    temp_min: weather.main.temp_min,
                    temp_max: weather.main.temp_max,
                    wind_speed: weather.wind.speed
                })
            });
    }

    render() {
        const {temp, temp_min, temp_max, wind_speed} = this.state;
        return (
            <div>
                <div>
                    Температура: {temp}
                </div>
                <div>
                    Температура min: {temp_min}
                </div>
                <div>
                    Температура max: {temp_max}
                </div>
                <div>
                    Скорость ветра: {wind_speed}
                </div>
            </div>
        )
    }
}
