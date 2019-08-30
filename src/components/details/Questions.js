import React, { Component } from 'react';

export default class Questions extends Component {
    render() {
        return <input type="checkbox" name='withdrawn' onChange={this.props.update.bind(this)} />
    }
}