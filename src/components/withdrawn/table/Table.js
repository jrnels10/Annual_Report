import React, { Component } from 'react';

export default class Table extends Component {
    headers = this.props.headers;
    trStyle = {borderBottom: '2px solid black'};
    render(){
        return(
            <React.Fragment>
                <div className="row">
                    <h6>{this.props.tableName}</h6>
                <hr/>
                </div>
                <div className="row">
                <table className="w-100">
                    <thead>
                        <tr>
                        {this.headers.map((value, index) => (
                        <th key={index} style={this.trStyle} className="text-center">{value}</th>
                        ))}
                        </tr>
                    </thead>
                    <tbody>
                        {}
                    </tbody>
                    </table>
                </div>
            </React.Fragment>
        )
    }
}
