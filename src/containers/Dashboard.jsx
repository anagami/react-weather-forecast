import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import WeatherNow from '../components/WeatherNow';
import WeatherForecast from '../components/WeatherForecast';
import Loader from '../components/Loader';

import { getCurrentCityData } from '../reducers/currentCity';
import { searchInFavorites } from '../reducers/favorites';
import { getForecast } from '../actions/weather';
import { setFavoritesList, deleteFavorite } from '../actions/favorites';

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

    handlerClickFavorite(e) {
        e.preventDefault();

        if ( this.props.isFavorite ) {
            this.props.deleteFavorite( this.props.currentCity );
        } else {
            this.props.setFavoritesList( this.props.currentCity );
        }
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
        let { forecast, currentCity } = this.props;

        if ( this.state.tab == 'forecast' ) {
            if ( forecast ) {
                return <WeatherForecast weather={forecast} />
            } else {
                this.props.getForecast(currentCity.id);

                return <Loader />
            }
        }
    }
    render() {
        let {
                currentCity: {name, country, id},
                isFavorite,
                geo: {support: geo_support, enabled: geo_enabled}
            } = this.props;

        if ( !id ) {
            if ( !geo_support ) {
                return <div>
                    <p>Geolocation not support in your browser. Please use seacrh</p>
                </div>
            }


            if ( !geo_enabled ) {
                return <div>
                    <p>Geolocation disabled in your browser. Please use seacrh</p>
                </div>
            }

            return <div></div>
        }

        return <div>
            <p className="lead">
                {name}({country})
                <span className={'btn btn-sm m-l-2 ' + (isFavorite ? 'btn-danger' : 'btn-success')} onClick={::this.handlerClickFavorite}>
                    { isFavorite ? 'Remove from favorites' : 'Add to favorites' }
                </span>
            </p>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className={ 'nav-link' + (this.checkActiveTab('now')) } onClick={::this.handlerClickTab} href="#now">Now</a>
                </li>
                <li className="nav-item">
                    <a className={ 'nav-link' + (this.checkActiveTab('forecast')) } onClick={::this.handlerClickTab} href="#forecast">5 day Forecast</a>
                </li>
            </ul>
            <div className="p-t-2">
                { this.renderNowTab() }
                { this.renderForecastTab() }
            </div>
        </div>

    }
}

function mapStateToProps(state) {
    let cityData = getCurrentCityData(state.currentCity.id, state.weather),
        isFavorite = searchInFavorites(state.currentCity.id, state.favorites);

    return {
        now: cityData.now,
        forecast: cityData.forecast,
        currentCity: state.currentCity,
        isFavorite: isFavorite,
        geo: state.geo
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getForecast: bindActionCreators(getForecast, dispatch),
        setFavoritesList: bindActionCreators(setFavoritesList, dispatch),
        deleteFavorite: bindActionCreators(deleteFavorite, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
