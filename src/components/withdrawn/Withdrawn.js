import React, { Component } from 'react';
import { Consumer } from '../../Context';

export default class Withdrawn extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;

                    return <div className="row">
                        <div className="col-md-4">
                            <h6>Add a new Record</h6>
                            <hr/>
                            <div className="row">
                                <label>
                                    <input type="radio"></input>
                                    Single Well Reading
                                </label>
                            </div>
                            <input type="text" placeholder="Well # 55-XXXXXX"></input>
                        </div>
                        <div class="col-md-4"></div>
                    </div>
                }}
            </Consumer>
        )
    }
}