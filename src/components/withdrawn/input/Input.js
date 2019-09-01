import React, { Component } from 'react';
import { Consumer } from '../../../Context';
// import './input.css';

export default class Input extends Component {
    onUpdate = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render(){
        return (
            <Consumer>
                {value => {

                    return (
                    <React.Fragment>
                        <h6>Add a new Record</h6>
                        <hr/>
                        <div className="container">
                        <div className="row">
                            <label className="col-md-7">
                                <input type="radio"></input>
                                Single Well Reading
                            </label>
                            <label className="col-md-5">
                                <input type="radio"></input>
                                Well Groups
                            </label>
                        </div>
                        <div className="row">
                            <input type="text" style={fullwidth} placeholder="Well # 55-XXXXXX" onChange={this.onUpdate.bind(this)}></input>
                            <input type="text" style={fullwidth} placeholder="Water Quantity" onChange={this.onUpdate.bind(this)}></input>
                        </div>
                        <div className="row">
                        <select className="text-center" style={fullwidth} onChange={this.onUpdate.bind(this)}>
                            <option value="Acre Feet">Acre Feet</option>
                            <option value="Gallons">Gallons</option>
                        </select>
                        </div>
                        <div className="row">
                            <label className="col-md-7">
                                <input type="radio"></input>
                                Metered
                            </label>
                            <label className="col-md-5">
                                <input type="radio"></input>
                                Estimated
                            </label>
                        </div>
                        <div className="row">
                            <textarea style={fullwidth} placeholder="Comments"></textarea>
                        </div>
                        <div className="row">
                            <div className='col-md-6'>
                                <button className="btn btn-primary btn-md" style={{width: '100%', marginTop: '10px'}}>Add</button>
                            </div>
                            <div className='col-md-6'>
                                <button className="btn btn-danger btn-md" style={{width: '100%', marginTop: '10px'}}>Cancel</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4"></div>
                    </React.Fragment>)
                }}
            </Consumer>
        )
    }
}

const fullwidth = {
    width: '100%'
}