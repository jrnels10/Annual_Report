import React, { Component } from 'react'

export default class Navigation extends Component {

    render() {
        return (
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a>Withdrawn |</a>
                </li>
                <li className="nav-item">
                    <a>Received |</a>
                </li>
                <li className="nav-item">
                    <a>Summary</a>
                </li>
            </ul>
        )
    }
}
