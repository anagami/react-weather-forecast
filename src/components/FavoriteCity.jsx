import React, { Component } from 'react'

export default class FavoriteCity extends Component {
    handleSetFavorite(e) {
        e.preventDefault();

        this.props.selectFavorite(this.props.id, 'id');
    }
    handleDeleteFavorite(e) {
        e.preventDefault();
        e.stopPropagation();

        this.props.deleteFavorite({id: this.props.id});
    }
    render() {
        let { name, country } = this.props;

        return <a className="list-group-item" onClick={::this.handleSetFavorite}>
            {name}({country})
            <span className="delete-icon pull-xs-right" onClick={::this.handleDeleteFavorite}></span>
        </a>
    }
}
