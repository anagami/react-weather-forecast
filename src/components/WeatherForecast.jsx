import React, { Component } from 'react';
import formatDate from 'simple-format-date';

export default class WeatherForecast extends Component {
    renderRow(data) {
        let { dt, main: general, weather: clouds, wind } = data,
            { description, icon } = clouds[0],
            { pressure, humidity, temp_min, temp_max } = general,
            { speed } = wind;

        return <tr key={dt}>
            <td>{formatDate(new Date(dt*1000), { template: '<%= hh %>:<%= mm %> <%= DD %>/<%= MM %>/<%= YY %>' })}</td>
            <td className="text-xs-center" className="text-xs-center">{temp_min} - {temp_max}</td>
            <td className="text-xs-center">
                <img src={`http://openweathermap.org/img/w/${icon}.png`} alt={description} title={description} />
            </td>
            <td className="text-xs-center">{speed}</td>
            <td className="text-xs-center">{humidity}</td>
            <td className="text-xs-center">{pressure}</td>
        </tr>
    }
    renderRows() {
        let { weather } = this.props;

        return weather.list.map(data => {
            return this.renderRow(data);
        })
    }
    render() {
        return <div>
            <table className="table table-striped table-bordered table-valign-middle">
              <thead>
                <tr>
                  <th>Date</th>
                  <th className="text-xs-center">Temperature, &#8451;</th>
                  <th className="text-xs-center">Clouds</th>
                  <th className="text-xs-center">Wind, m/sec</th>
                  <th className="text-xs-center">Humidity, %</th>
                  <th className="text-xs-center">Pressure, hPa</th>
                </tr>
              </thead>
              <tbody>
                  {this.renderRows()}
              </tbody>
            </table>
        </div>
    }
}
