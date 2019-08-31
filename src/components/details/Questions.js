import React, { Component } from 'react';

export default class Questions extends Component {
    render() {
        return <div className='w-100'>
            <div className='w-100'>

                <span>Withdrawn?</span>
                <input type="checkbox" name='withdrawn' onChange={this.props.update.bind(this)} />
            </div>
            <div className='w-100'>

                <span>Received?</span>
                <input type="checkbox" name='received' onChange={this.props.update.bind(this)} />
            </div>
        </div>
    }
}