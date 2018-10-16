import React, { Component } from 'react';
import { connect } from 'react-redux';

class Name extends Component {

    render() {
        return (
            <div>
                {this.props.user || 'please login'}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    //OR return state
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(Name)