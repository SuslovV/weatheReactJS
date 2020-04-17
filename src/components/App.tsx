import React from 'react';
import {WeatherView} from "./WeatherView";

export const REGIONS = [
    {name: "Moscow,ru", zip: ""},
    {name: "Rome,it", zip: ""},
    {name: "London,uk", zip: ""}
];

interface IProps {
}

interface IState {
    region: string
}

export class App extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {region: ''};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event: React.FormEvent<HTMLInputElement>) {
        this.setState({region: event.currentTarget.value});
    }

    render() {
        const {region} = this.state;
        return (
            <div>
                <h1>Weather in333</h1>

                <form>
                    <input type="text" value={region} onChange={this.handleChange} list="regionList"/>
                    <datalist id="regionList">
                        {REGIONS.map((region, index) => (
                            <option value={region.name} key={index}/>
                        ))}
                    </datalist>
                </form>
                <WeatherView region={region}/>
            </div>
        )
    }
}
