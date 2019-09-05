import React, { Component } from 'react';
import { wellValidation } from './../../../utils/API';

const initialState = {
    metered: true,
    quantity: '',
    units: 'ac-ft',
    howEstimated: '',
    comments: ''
}

export default class WellQuantityInfo extends Component {
    constructor(props) {
        super(props);
        // Do not copy props into state
        this.state = {
            metered: true,
            quantity: '',
            units: 'ac-ft',
            howEstimated: '',
            comments: ''
        };
    }
    componentDidUpdate(prevProps) {
        if (this.props.parentState.reset !== prevProps.parentState.reset) {
            this.onHandleEvent(true, 'test')
        }
    };

    onHandleEvent = (reset, e) => {
        return reset ? this.setState(initialState) :
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
            <input type="text" value={this.state.quantity} name='quantity' onChange={this.onHandleEvent.bind(this, false)} onBlur={this.submitToParent.bind(this, "quantity")} placeholder="Water Quantity" />
            <select className="w-100 custom-select custom-select-sm"
                name="units"
                value={this.state.units}
                onBlur={this.submitToParent.bind(this, "units")}
                onChange={this.onSelected.bind(this)}>
                <option value="ac-ft">Acre-Feet</option>
                <option value="gal">Gallons</option>
            </select>
            <div className="row">
                <span>Metered</span>
                <input type="radio" name='metered' checked={this.state.metered} onBlur={this.submitToParent.bind(this, "metered")} onChange={this.onSelected.bind(this)} />
                <span>Estimated</span>
                <input type="radio" name='metered' checked={!this.state.metered} onBlur={this.submitToParent.bind(this, "metered")} onChange={this.onSelected.bind(this)} />
            </div>
            {!this.state.metered ? <div className="position-relative w-100">
                <textarea id="EstimationDetail" value={this.state.explainEstimated} name='howEstimated' onBlur={this.submitToParent.bind(this, "howEstimated")} onChange={this.onHandleEvent.bind(this, false)} maxLength="30" className="form-control" placeholder="Explain how you arrived at your estimation" />
            </div> : null}
            <div className="position-relative w-100">
                <textarea id="EstimationDetail" name='comments' value={this.state.comments} onBlur={this.submitToParent.bind(this, "comments")} onChange={this.onHandleEvent.bind(this, false)} maxLength="30" className="form-control" placeholder="Comments" />
            </div>
        </div>
    }
}

