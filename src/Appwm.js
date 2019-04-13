import React, { Component } from 'react';

import { connect } from 'react-redux';
import { updateUser, apiRequest } from './actions/user-action';
import { bindActionCreators } from 'redux';

class Appwm extends Component {

    onUpdateUser = (event) => this.props.onUpdateUser(event.target.value)

    componentDidMount() {
        setTimeout(() => {
            this.props.onApiRequest()
        }, 1500)
    }

    render() {
        console.log(this.props)

        return (
            <div>
                <header>Appwm</header>
                <div>
                    <p>state.user: { this.props.user }</p>
                    <input onChange={ this.onUpdateUser } />
                </div>
            </div>
        )
    }
}
/**
 * Receive the state of the store and then we can use that state to decide what 
 * props we want to provide for that component
 */
const mapStateToProps = (state, props) => ({
    products: state.products,
    user: state.user,
    userPlusedProp: `${state.user} - ${props.appwmProp}`
})   // "()" the parentheses are to automatically return this object!


/**
 * Allow us to dispatch actions from our components easily so we don't need to 
 * mess with using dispatch in the components themselves. We can call functions 
 * that will automatically dispatch actions to the store
 */
/*
const mapActionsToProps = (dispatch, props) => {
    console.log(props)
    return bindActionCreators({
        onUpdateUser: updateUser
    }, dispatch)
}*/
const mapActionsToProps = {
    onUpdateUser: updateUser,
    onApiRequest: apiRequest
}

/*
const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
    console.log(propsFromState, propsFromDispatch, ownProps)
    return {}
}
*/

// export default connect(mapStateToProps, mapActionsToProps, mergeProps)(Appwm)
export default connect(mapStateToProps, mapActionsToProps)(Appwm)