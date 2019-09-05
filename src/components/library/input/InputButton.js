import React, { Component } from 'react';



export default class InputButton extends Component {
    constructor(props) {
        super(props);
        // Do not copy props into state
        this.state = {
            complete: false
        };
    }
    onHandleEvent = (e) => {
        this.setState({ invalid:false, wellNumber: e.target.value })
    }


    render() {
        console.log(this.props)

        return <div className='row w-100'>
            <button className='btn btn-danger'>Cancel</button>
            <button className='btn btn-primary' onClick={this.props.submit}>{this.props.parentState.update?"Update":"Add"}</button>
        </div>
    }
}

