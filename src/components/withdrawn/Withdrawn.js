import React, { Component } from 'react';
import { Consumer } from '../../Context';
import Input from './input/Input';
import Table from './table/Table'

export default class Withdrawn extends Component {

    render() {
        return (
            <Consumer>
                {value => {

                    return (
                        <div className="row">
                            <div className="col-md-6"><Input/></div>
                            <div className="col-md-6"><Table/></div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}