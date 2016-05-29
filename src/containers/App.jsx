import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css'


import SearchBar from '../components/SearchBar';
import FavoritesBar from '../components/FavoritesBar';
import { detectLocation, getNow } from '../actions';
import { getFavoritesList, selectFavorite, deleteFavorite } from '../actions/favorites';

class App extends Component {
    componentWillMount() {
        this.props.getFavoritesList()
        this.props.detectLocation()
    }

    render() {
        let { favorites, home, dashboard, getNow } = this.props
        return <div>
            <nav className="navbar navbar-dark bg-primary navbar-fixed-top">
                <div className="container">
                    <div class="nav navbar-nav">
                        <span className="navbar-brand">
                            Weather App
                            <span className="logo-icon"></span>
                        </span>

                        <SearchBar onSubmit={getNow} />
                    </div>
                </div>
            </nav>

            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-9">
                        {this.props.children}
                    </div>
                    <div className="col-xs-6 col-sm-3">
                        <FavoritesBar favorites={favorites} selectFavorite={this.props.getNow} deleteFavorite={this.props.deleteFavorite} />
                    </div>
                </div>
            </div>
        </div>
    }
}


function mapStateToProps(state) {
    return {
        favorites: state.favorites
    }
}

function mapDispatchToProps(dispatch) {
    return {
        detectLocation: bindActionCreators(detectLocation, dispatch),
        getNow: bindActionCreators(getNow, dispatch),
        deleteFavorite: bindActionCreators(deleteFavorite, dispatch),
        getFavoritesList: bindActionCreators(getFavoritesList, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
