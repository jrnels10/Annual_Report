import React, { Component } from 'react';
import { Consumer, Conxt } from './../../Context';
import { lookUpDetails } from './../../utils/API';
import Questions from './Questions';


import './details.css'


export default class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 'details',
            withdrawn: false,
            received: false
        };

    }


    onUpdate = (e) => {
        this.setState({ [e.target.name]: !this.state[e.target.name] })
    }

    async componentDidMount() {
        let value = this.context;
        await lookUpDetails(value.lookupdata.ProgramCertificateConveyanceNumber).then(response => {
            value.dispatch({
                type: "CURRENT_PAGE",
                payload: {
                    currentPage: this.state.currentPage
                }
            })
            value.dispatch({
                type: "LOOKUP_DATA_DETAILS",
                payload: {
                    lookupdatadetails: response.data
                }
            });
        })
    }

    submitPages = (dispatch) => {
        dispatch({
            type: "PAGES",
            payload: {
                pages: this.state
            }
        });
        this.props.history.push('/withdrawn');
    }

    render() {
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;

                    const { Name, WaterRightFacilityName, ADEQName, Address, City, State, ProgramCertificateConveyanceNumber, Zip } = value.lookupdata;

                    const title = this.state.ownerInfo ? this.state.ownerInfo.ProgramCertificateConveyanceNumber : '';
                    return <div className='row'>
                        <div className='col-6 owner-details'>
                            <table className="table-sm table-striped">
                                <tbody>
                                    <tr>
                                        <th scope="row">Name</th>
                                        <td>{WaterRightFacilityName}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">ADEQ #</th>
                                        <td>{ADEQName}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">CWS #</th>
                                        <td>{ProgramCertificateConveyanceNumber}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Owner</th>
                                        <td>{Name}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Address</th>
                                        <td>{Address}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">City</th>
                                        <td>{City}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">State</th>
                                        <td>{State}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Zip</th>
                                        <td>{Zip}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='col-6 question-details '>
                            <Questions data={this.state} update={this.onUpdate} value={value} />
                        </div>
                        <button className='btn btn-primary float-right' onClick={this.submitPages.bind(this, dispatch)}>Next</button>

                    </div>

                }}
            </Consumer>
        )
    }
}
Details.contextType = Conxt;