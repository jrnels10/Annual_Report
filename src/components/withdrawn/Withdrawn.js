import React, { Component } from 'react';
import { Consumer } from '../../Context';

export default class Withdrawn extends Component {

    onUpdate = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;

                    return <div className="row">
                        <div className="col-md-6">
                            <h6>Add a new Record</h6>
                            <hr/>
                            <div className="row">
                                <label className="col-md-6">
                                    <input type="radio"></input>
                                    Single Well Reading
                                </label>
                                <label className="col-md-6">
                                    <input type="radio"></input>
                                    Well Groups
                                </label>
                            </div>
                            <div className="row">
                                <input type="text" placeholder="Well # 55-XXXXXX" onChange={this.onUpdate.bind(this)}></input>
                            </div>
                            <div className="row">
                                <input type="text" placeholder="Water Quantity" onChange={this.onUpdate.bind(this)}></input>
                            </div>
                            <div className="row">
                            <select className="text-center col-md-7" onChange={this.onUpdate.bind(this)}>
                                <option value="Acre Feet">Acre Feet</option>
                                <option value="Gallons">Gallons</option>
                            </select>
                            </div>
                            <div className="row">
                            <label className="col-md-6">
                                    <input type="radio"></input>
                                    Metered
                                </label>
                                <label className="col-md-6">
                                    <input type="radio"></input>
                                    Estimated
                                </label>
                            </div>
                            <div className="row col-md-12">
                                <textarea placeholder="Comments"></textarea>
                            </div>
                        </div>
                        <div class="col-md-4"></div>
                    </div>
                }}
            </Consumer>
        )
    }
}