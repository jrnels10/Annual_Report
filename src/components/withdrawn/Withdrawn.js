import React, { Component } from 'react';
import { Consumer } from '../../Context';
import Input from './input/Input';
import Table from './table/Table'

export default class Withdrawn extends Component {
    headers = ['', 'Well Registry', 'Quantity', 'Units', 'Metered/ Estimated', 'How Estimated', 'Comments'];
    myTest = () => console.log("hey wut");
    render() {
        return (
            <Consumer>
                {value => {

                    return (
                        <div className="row w-100">
                            <div className="col-md-5"><Input onchange={this.myTest}/></div>
                            <div className="col-md-7"><Table headers={this.headers} tableName={'Report Information'}/></div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}