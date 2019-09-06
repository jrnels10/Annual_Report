import React, { Component } from 'react';

export default class Table extends Component {
    state = {
        tableRows: []
    }
    headers = this.props.parentData.table.headers;
    parentState = this.props.parentData;
    trStyle = {borderBottom: '2px solid black'};

    render(){
        return(
            <React.Fragment>
                <div className="row">
                    <h6>{this.parentState.table.tableName}</h6>
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
                        {this.props.parentData.input.map((row, index) => {
                            <tr key={index}>
                                <td>{row.wellRegistry}</td>
                                <td>{row.wellRegistry}</td>
                            </tr>
                        })}
                    </tbody>
                    </table>
                </div>
            </React.Fragment>
        )
    }
}
