import React, { Component } from 'react';
import { Consumer, Conxt } from '../../../Context';


// The NextPage component takes four props from its parent..
// prop 1: data={this}, to access navigation to next page.
// prop 2: action={"action in context"}.
// prop 3: payload={object}
// prop 4: next={"the next page"}
export default class NextPage extends Component {
    constructor(props) {
        super(props);
        // Do not copy props into state
        this.state = {
            complete: false
        };
    }
    onHandleEvent = (e) => {
        this.setState({ invalid: false, wellNumber: e.target.value })
    }
    submitDataToGlobal = (dispatch, action, payload, next) => {
        dispatch({
            type: action,
            payload: payload
        });
        this.props.data.props.history.push(`/${next}`);
    }

    render() {
        return (
            <Consumer>
                {value => {
                    const { action, payload, next } = this.props;
                    const { dispatch } = value;
                    return <div className='row w-100 m-0 position-relative'>
                        <div className='col-7 float-right'></div>
                        <div className='col-5 float-right'>

                            <button
                                className='btn btn-primary float-right'
                                onClick={this.submitDataToGlobal.bind(this, dispatch, action, payload, next)}>
                                Next
                            </button>
                            <button className='btn btn-danger float-right'>Back</button>
                        </div>
                    </div>
                }}
            </Consumer>
        )
    }
}

