import React, { Component, PropTypes } from 'react';

export default class FavoriteCity extends Component {
    static propTypes = {
        country: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        current: PropTypes.bool.isRequired,
        deleteFavorite: PropTypes.func.isRequired,
        selectFavorite: PropTypes.func.isRequired
    }

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
