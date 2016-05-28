import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css'


import SearchBar from '../components/SearchBar';
import FavoriteMenu from '../components/FavoriteMenu';
import HomeBar from '../components/HomeBar';
import { detectLocation } from '../actions';

class App extends Component {
    componentWillMount() {
        this.props.detectLocation()
    }

    render() {
        let { favorites, home, dashboard, getWeather } = this.props
        return <div>
            <nav className="navbar navbar-dark bg-primary navbar-fixed-top">
                <div className="container">
                    <div class="nav navbar-nav">
                        <a className="navbar-brand" href="#">Weather App</a>

                        <SearchBar onSubmit={getWeather} />
                        <FavoriteMenu items={favorites} />
                    </div>
                </div>
            </nav>

            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-9">
                        {this.props.children}
                    </div>
                    <div className="col-xs-6 col-sm-3">
                        <HomeBar city={home} />
                    </div>
                </div>
            </div>
        </div>
    }
}




function mapStateToProps(state) {
    return {
        // home: state.home,
        // dashboard: state.dashboard,
        // favorites: state.favorites
    }
}

function mapDispatchToProps(dispatch) {
    return {
        detectLocation: bindActionCreators(detectLocation, dispatch),
        // getWeather: bindActionCreators(getWeather, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
