import React, { Component } from 'react';
import { wellValidation } from './../../../utils/API';



export default class WellQuantityInfo extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        // Do not copy props into state
        this.state = {
            metered: true,
            quantity: '',
            unitValue: '',
            explainEstimated: '',
            comments: ''
        };
    }
    onHandleEvent = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    validateWell = async (wellNumber) => {
        await wellValidation(wellNumber).then(res => {
            return res.data === "Passed" ? this.props.wellList(this.state.wellNumber) : this.setState({ invalid: true });
        })
    }

    onSelected = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        return e.target.name === "metered" ? this.setState({ metered: !this.state.metered }) : null;
    }

    render() {
        return <div className='row w-100'>
            <input type="text" name='quantity' onChange={this.onHandleEvent.bind(this)} placeholder="Water Quantity" />
            <select className="w-100 custom-select custom-select-sm"
                name="unitValue"
                value={this.state.unitValue}
                onChange={this.onSelected.bind(this)}>
                <option>Acre-Feet</option>
                <option>Gallons</option>
            </select>
            <div className="row">
                <span>Metered</span>
                <input type="radio" name='metered' checked={this.state.metered} onChange={this.onSelected.bind(this)} />

                <span>Estimated</span>
                <input type="radio" name='metered' checked={!this.state.metered} onChange={this.onSelected.bind(this)} />
            </div>
            <div className="position-relative w-100">
                <textarea id="EstimationDetail" name='explainEstimated' onChange={this.onSelected.bind(this)} maxLength="30" className="form-control" placeholder="Explain how you arrived at your estimation" />
            </div>
            <div className="position-relative w-100">
                <textarea id="EstimationDetail" name='comments' onChange={this.onSelected.bind(this)} maxLength="30" className="form-control" placeholder="Comments" />
            </div>
        </div>
    }
}

