import React, { Component } from 'react';
import { Consumer } from './../../Context';
// import axios from 'axios'


export default class General extends Component {
    state = {
        pcc: '',
        email: '',
        name: '',
        title: ''
    }
   

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    validatePCC=()=>{
        console.log("validate")

    }

    render() {
        return (
            <Consumer>
                {value => {
                    return <div className='row'>
                        <div className="input-group input-group-sm mb-3">
                            <span>PCC</span>
                            <input type="text" name='pcc' onChange={this.onChange.bind(this)} onBlur={this.validatePCC}  className="form-control w-100" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                            <span>Email</span>
                            <input type="text" name='email' onChange={this.onChange.bind(this)} className="form-control w-100" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                            <div className='col-6 p-0'>
                                <span>Name</span>
                                <input type="text" name='name' onChange={this.onChange.bind(this)} className="form-control float-left" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                            </div>
                            <div className='col-6 p-0'>
                                <span>Title</span>
                                <input type="text" name='title' onChange={this.onChange.bind(this)} className="form-control float-right" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                            </div>
                            <button className='btn btn-primary float-right'>Next</button>
                        </div>

                    </div>
                }}
            </Consumer>
        )
    }
}