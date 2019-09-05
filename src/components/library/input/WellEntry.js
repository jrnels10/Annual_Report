import React, { Component } from 'react';
import { wellValidation } from './../../../utils/API';

const intialState = {
    invalid: false,
    wellNumber: ''
}

export default class WellEntry extends Component {
    constructor(props) {
        console.log(props)
        super(props);
        // Do not copy props into state
        this.state = {
            invalid: false,
            wellNumber: ''
        };
    }
    componentDidUpdate(prevProps) {
        if (this.props.parentState.reset !== prevProps.parentState.reset) {
            this.onHandleEvent(true,'test')
        }
    };

    onHandleEvent = (reset, e) => {
        return reset ? this.setState({ invalid: false, wellNumber: ''}) :
            this.setState({ invalid: false, wellNumber: e.target.value });
    };
    validateWell = async (wellNumber) => {
        await wellValidation(wellNumber).then(res => {
            return res.data === "Passed" ? this.props.waterData('wellRegistry', this.state.wellNumber) : this.setState({ invalid: true });
        })
    };

    render() {
        console.log(this.props)
        // const { reset } = this.props.parentState;
        // this.handleReset(reset);
        return <div className='row w-100'>
            <input type="text" value={this.state.wellNumber} onChange={this.onHandleEvent.bind(this, false)} placeholder="Well # 55-XXXXXX" onBlur={this.validateWell.bind(this, this.state.wellNumber)} />
            {this.state.invalid ? <span>{this.state.wellNumber} is an invalid well number</span> : null}
        </div>
    }
}

