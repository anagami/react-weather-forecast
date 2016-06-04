import React, { Component } from 'react';

export default class SearchBar extends Component {
    state = {
        query: ''
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.onSubmit(this.state.query, 'name');
        this.setState({
            query: ''
        });
    }

    handleInputChange(e) {
        this.setState({
            query: e.target.value
        });
    }

    render() {
        return <form className="navbar-form navbar-left search-form" onSubmit={::this.handleSubmit}>
            <div className="input-group">
                <input type="text" className="form-control" onChange={::this.handleInputChange} placeholder="Search city, zip or place" />

                <span className="input-group-btn">
                    <button type="button" className="btn btn-secondary-outline" type="submit">Search</button>
                </span>
            </div>
        </form>
    }
}
