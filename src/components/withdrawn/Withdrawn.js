import React, { Component } from 'react';
import { Consumer } from '../../Context';
import Input from './input/Input'

export default class Withdrawn extends Component {

    onUpdate = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;

                    return <Input/>
                }}
            </Consumer>
        )
    }
}