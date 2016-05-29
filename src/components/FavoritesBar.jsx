import React, { Component } from 'react'
import { connect } from 'react-redux'

import FavoriteCity from './FavoriteCity';

export default class FavoritesBar extends Component {
    renderList() {
        let { favorites } = this.props;

        return <div className="list-group">
            { favorites.map(city => <FavoriteCity {...city} key={city.id} selectFavorite={this.props.selectFavorite} deleteFavorite={this.props.deleteFavorite} />) }
        </div>
    }

    render() {
        return <div>
            <b>Favorites List</b>

            { !this.props.favorites.length &&
                <p>Save your favorites places</p>
            }
            { !!this.props.favorites.length && this.renderList() }
        </div>
    }
}
