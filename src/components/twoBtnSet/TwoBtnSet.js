import React, { Component } from 'react';
import { Consumer } from '../../Context';

export default class TwoBtnSet extends Component {
    render() {
        return(
            <Consumer>
                {value => {
                    return <div className="twobtnset">
                        <button className="btn btn-primary">Add</button>
                        <button className="btn btn-danger">Cancel</button>
                    </div>
                }}
            </Consumer>
        )
    }
}