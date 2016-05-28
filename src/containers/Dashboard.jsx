import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import WeatherNow from '../components/WeatherNow';
import WeatherForecast from '../components/WeatherForecast';
import WeatherMap from '../components/WeatherMap';
import Loader from '../components/Loader';

import { getCurrentCityData } from '../reducers/currentCity';
import { getForecast } from '../actions';

class Dashboard extends Component {
    state = {
        tab: 'now'
    }

    checkActiveTab(tabName) {
        return this.state.tab == tabName ? ' active' : '';
    }

    handlerClickTab(e) {
        e.preventDefault();

        let currentTab = e.target.getAttribute('href').replace(/#/, '');

        this.setState({
            tab: currentTab
        });
    }

    renderNowTab() {
        let { now } = this.props;

        if ( this.state.tab == 'now' ) {
            if ( now ) {
                return <WeatherNow weather={now} />
            } else {
                return <Loader />
            }
        }

    }
    renderForecastTab() {
        let { forecast, currentCityId } = this.props;

        if ( this.state.tab == 'forecast' ) {
            if ( forecast ) {
                return <WeatherForecast weather={forecast} />
            } else {
                this.props.getForecast(currentCityId);

                return <Loader />
            }
        }
    }
    renderMapTab() {
        let { map } = this.props;

        if ( this.state.tab == 'map' ) {
            if ( map ) {
                return <WeatherMap weather={map} />
            } else {
                return <Loader />
            }
        }
    }
    render() {
        return <div>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className={ 'nav-link' + (this.checkActiveTab('now')) } onClick={::this.handlerClickTab} href="#now">Now</a>
                </li>
                <li className="nav-item">
                    <a className={ 'nav-link' + (this.checkActiveTab('forecast')) } onClick={::this.handlerClickTab} href="#forecast">5 day Forecast</a>
                </li>
                <li className="nav-item">
                    <a className={ 'nav-link' + (this.checkActiveTab('map')) } onClick={::this.handlerClickTab} href="#map">Map</a>
                </li>
            </ul>
            <div className="p-t-2">
                { this.renderNowTab() }
                { this.renderForecastTab() }
                { this.renderMapTab() }
            </div>
        </div>

    }
}

function mapStateToProps(state) {
    let cityData = getCurrentCityData(state.currentCity, state.weather);

    return {
        now: cityData.now,
        forecast: cityData.forecast,
        map: cityData.map,
        currentCityId: state.currentCity
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getForecast: bindActionCreators(getForecast, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

