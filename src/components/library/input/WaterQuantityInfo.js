import React, { Component } from 'react';
import { wellValidation } from './../../../utils/API';



export default class WellQuantityInfo extends Component {
    constructor(props) {
        super(props);
        // Do not copy props into state
        this.state = {
            metered: true,
            quantity: '',
            units: '',
            explainEstimated: '',
            comments: ''
        };
    }
    onHandleEvent = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }


    onSelected = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        return e.target.name === "metered" ? this.setState({ metered: !this.state.metered }) : null;
    }

    submitToParent = (keyTerm, e) => {
        this.props.waterData(keyTerm, this.state[keyTerm])
    }

    render() {
        return <div className='row w-100'>
            <input type="text" name='quantity' onChange={this.onHandleEvent.bind(this)} onBlur={this.submitToParent.bind(this, "quantity")} placeholder="Water Quantity" />
            <select className="w-100 custom-select custom-select-sm"
                name="units"
                value={this.state.unitValue}
                onBlur={this.submitToParent.bind(this, "units")}
                onChange={this.onSelected.bind(this)}>                    
                <option>Acre-Feet</option>
                <option>Gallons</option>
            </select>
            <div className="row">
                <span>Metered</span>
                <input type="radio" name='metered' checked={!this.state.metered} onBlur={this.submitToParent.bind(this, "metered")} onChange={this.onSelected.bind(this)} />
                <span>Estimated</span>
                <input type="radio" name='metered' checked={this.state.metered} onBlur={this.submitToParent.bind(this, "metered")} onChange={this.onSelected.bind(this)} />
            </div>
            <div className="position-relative w-100">
                <textarea id="EstimationDetail" name='howEstimated' onBlur={this.submitToParent.bind(this, "howEstimated")} onChange={this.onSelected.bind(this)} maxLength="30" className="form-control" placeholder="Explain how you arrived at your estimation" />
            </div>
            <div className="position-relative w-100">
                <textarea id="EstimationDetail" name='comments' onBlur={this.submitToParent.bind(this, "comments")} onChange={this.onSelected.bind(this)} maxLength="30" className="form-control" placeholder="Comments" />
            </div>
        </div>
    }
}

