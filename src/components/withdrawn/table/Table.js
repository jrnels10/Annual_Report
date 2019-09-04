import React, { Component } from 'react';

export default class Table extends Component {
    headers = ['Well Registry', 'Quantity', 'Units', 'Metered/Estimated', 'How Estimated', 'Comments'];
    numCol = this.headers.map((item) => ({item: ("col-md- " + item.length)}));
    render(){
        return(
            <React.Fragment>
                <div className="row">
                    <h6>Report Information</h6>
                <hr/>
                </div>
                <div className="row">
                    {this.headers.map((value, index) => (
                        <p className='col-md-' key={index}>{value}</p>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
