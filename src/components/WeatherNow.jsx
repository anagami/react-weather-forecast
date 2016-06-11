import React, { Component, PropTypes } from 'react';
import formatDate from 'simple-format-date';

export default class WeatherNow extends Component {
    static propTypes = {
        weather: PropTypes.object.isRequired
    }

    formatDateAndTime(date, format='<%= hh %>:<%= mm %> <%= DD %>/<%= MM %>/<%= YY %>') {
        return formatDate(new Date(date*1000), { template: format });
    }

    render() {
        let { name, weather: clouds, dt, wind, sys, main: general } = this.props.weather,
            { main, description, icon } = clouds[0],
            { pressure, humidity, temp_min, temp_max } = general,
            { sunrise, sunset } = sys,
            { speed, deg, gust } = wind;

        return <div>
            <h3>{ this.formatDateAndTime(dt) }</h3>
            <div className="list-group">
                <div className="list-group-item">
                    <h4 className="list-group-item-heading">Place</h4>
                    <p className="list-group-item-text">{name}</p>
                </div>
                <div className="list-group-item">
                    <h4 className="list-group-item-heading">General</h4>
                    <p className="list-group-item-text">
                        Temperature: {temp_min} - {temp_max}&#8451;,
                        humidity: {humidity}%,
                        pressure: {pressure}hPa
                    </p>
                </div>
                <div className="list-group-item">
                    <h4 className="list-group-item-heading">
                        {main}
                        <img src={`http://openweathermap.org/img/w/${icon}.png`} alt=""/>
                    </h4>
                    <p className="list-group-item-text">{description}</p>
                </div>
                <div className="list-group-item">
                    <h4 className="list-group-item-heading">Wind</h4>
                    <p className="list-group-item-text">
                        Speed: {speed} meter/sec, direction: {deg}&deg;
                    </p>
                </div>
                <div className="list-group-item">
                    <h4 className="list-group-item-heading">Sun</h4>
                    <p className="list-group-item-text">
                        Sunrise: { this.formatDateAndTime(sunrise, '<%= hh %>:<%= mm %>:<%= ss %>') }, sunset: { this.formatDateAndTime(sunset, '<%= hh %>:<%= mm %>:<%= ss %>') }
                    </p>
                </div>
            </div>
        </div>
    }
}
