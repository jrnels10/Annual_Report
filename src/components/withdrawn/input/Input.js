import React, { Component } from 'react';
import { Consumer } from '../../../Context';
import TwoBtnSet from '../../twoBtnSet/TwoBtnSet'

export default class Input extends Component {
    render(){
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;

                    return <div className="row">
                    <div className="col-md-6">
                        <h6>Add a new Record</h6>
                        <hr/>
                        <div className="container">
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
                        <div className="row col-md-8">
                            <input type="text" placeholder="Well # 55-XXXXXX" onChange={this.onUpdate.bind(this)}></input>
                        </div>
                        <div className="row col-md-8">
                            <input type="text" placeholder="Water Quantity" onChange={this.onUpdate.bind(this)}></input>
                        </div>
                        <div className="row col-md-12">
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
                        <div className="row"><TwoBtnSet data={{btnText: "Update"}}/></div>
                    </div>
                    <div className="col-md-4"></div>
                </div>
                        </div>
                }}
            </Consumer>
        )
    }
}