import React, { Component, PropTypes } from 'react';

import FavoriteCity from './FavoriteCity';

export default class FavoritesBar extends Component {
    static propTypes = {
        favorites: PropTypes.array,
        currentCity: PropTypes.object,
        deleteFavorite: PropTypes.func.isRequired,
        selectFavorite: PropTypes.func.isRequired
    }

    renderList() {
        let { favorites, currentCity } = this.props;

        return favorites.map(city => <FavoriteCity {...city} key={city.id} selectFavorite={this.props.selectFavorite} deleteFavorite={this.props.deleteFavorite} current={currentCity.id == city.id} />)
    }

    render() {
        return <div>
            <b>Favorites List</b>

            { !this.props.favorites.length &&
                <p>Save your favorites places</p>
            }
            <div className="list-group">
            { !!this.props.favorites.length && this.renderList() }
            </div>
        </div>
    }
}
