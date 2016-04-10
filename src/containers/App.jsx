import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import '../css/style.css'


import SearchBar from '../components/SearchBar'
import FavoriteMenu from '../components/FavoriteMenu'
import HomeBar from '../components/HomeBar'
import { detectLocation } from '../actions'

class App extends Component {
    componentWillMount() {
        this.props.detectLocation()
    }

    render() {
        return <div>
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div class="navbar-header">
                        <a className="navbar-brand" href="#">Weather App</a>
                    </div>
                    <SearchBar />
                    <FavoriteMenu />
                </div>
            </nav>

            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-9">
                        {this.props.children}
                    </div>
                    <div className="col-xs-6 col-sm-3">
                        <HomeBar />
                    </div>
                </div>
            </div>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        home: state.home,
        favorites: state.favorites,
        currentCity: state.dashboard
    }
}

function mapDispatchToProps(dispatch) {
    return {
        detectLocation: bindActionCreators(detectLocation, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
