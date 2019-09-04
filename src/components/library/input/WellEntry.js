import React, { Component } from 'react';
import { wellValidation } from './../../../utils/API';



export default class WellEntry extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        // Do not copy props into state
        this.state = {
            invalid: false
        };
    }
    onHandleEvent = (e) => {
        this.setState({ invalid:false, wellNumber: e.target.value })
    }
    validateWell = async (wellNumber) => {
        await wellValidation(wellNumber).then(res => {
            return res.data === "Passed" ? this.props.wellList(this.state.wellNumber) : this.setState({invalid:true});
        })
    }

    render() {
        return <div className='row w-100'>
            <input type="text" onChange={this.onHandleEvent.bind(this)} placeholder="Well # 55-XXXXXX" onBlur={this.validateWell.bind(this, this.state.wellNumber)} />
            {this.state.invalid ? <span>{this.state.wellNumber} is an invalid well number</span> : null}
        </div>
    }
}

