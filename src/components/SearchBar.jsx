import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return <form className="navbar-form navbar-left search-form">
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Enter new entry..." />

                <span className="input-group-btn">
                    <button type="button" className="btn btn-primary" type="button">Search</button>
                </span>
            </div>
        </form>
    }
}
