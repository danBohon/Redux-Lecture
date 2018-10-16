import React, { Component } from 'react';
import Login from './Login';
import {loginUser} from '../../ducks/reducer';
import { connect } from 'react-redux';
import MyNewComp from './MyNewComp';


class Content extends Component {
    render() {
        console.log(this.props)
        const {user, loginUser} = this.props
        return (
            <div className='content'>
                <div>
                {user ? `${user} is super cool` : <Login loginUser={loginUser}/>}
                <MyNewComp/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = {
    loginUser: loginUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)