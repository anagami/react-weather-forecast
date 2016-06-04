import React, { Component } from 'react'

export default class FavoriteCity extends Component {
    handleSetFavorite(e) {
        e.preventDefault();

        if ( !this.props.current ) {
            this.props.selectFavorite(this.props.id, 'id');
        }

    }
    handleDeleteFavorite(e) {
        e.preventDefault();
        e.stopPropagation();

        this.props.deleteFavorite({id: this.props.id});
    }
    render() {
        let { name, country,current } = this.props;

        return <a className={`list-group-item ${current ? "active" : ""}`} onClick={::this.handleSetFavorite}>
            {name}({country})
            <span className="delete-icon pull-xs-right" onClick={::this.handleDeleteFavorite}></span>
        </a>
    }
}
