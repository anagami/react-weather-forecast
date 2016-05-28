import React, { Component } from 'react'
import { connect } from 'react-redux'


class HomeBar extends Component {
    render() {
        if ( !this.props.home )
            return <b>Empty</b>

        return <div>
            <b>HomeBar</b>
            {this.props.home.name}
        </div>
    }
}

function mapStateToProps(state) {
    return {
        home: state.home
    }
}

export default connect(mapStateToProps)(HomeBar)
