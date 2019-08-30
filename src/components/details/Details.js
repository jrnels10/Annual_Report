import React, { Component } from 'react';
import { Consumer, Conxt } from './../../Context';
import { lookUpDetails } from './../../utils/API';
import Questions from './Questions';


import './details.css'


export default class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ownerInfo: {
                ADEQName: "AZ0408038",
                Address: "5998 W CHINO DRIVE",
                AddressLine2: null,
                Amended: "https://docushare.azwater.gov/docushare/dsweb/Get/CWSDoc-9706/3859d7d0-e1f4-4fac-b82e-68a50e79815e.pdf",
                City: "GOLDEN VALLEY",
                Customer: "Y",
                Delivered: "Y",
                DesignatedAdequateWaterSupply: null,
                Diverted: "Y",
                Name: "VALLEY PIONEERS WATER CO",
                ProgramCertificateConveyanceNumber: "91-000326.0000",
                Received: null,
                State: "AZ",
                Storage: "Y",
                Treatment: "Y",
                WaterRightFacilityId: 5154800,
                WaterRightFacilityName: "VALLEY PIONEERS WC, INC",
                Well: "Y",
                Zip: "86413"
            },
            withdrawn:false
        };

    }


    onUpdate = (e) => {
        this.setState({ [e.target.name]: ![this.state.e.target.name] })
    }

    async componentDidMount() {
        let value = this.context;
        await lookUpDetails(this.state.ownerInfo.ProgramCertificateConveyanceNumber).then(response => {
            value.dispatch({
                type: "LOOKUP_DATA_DETAILS",
                payload: {
                    lookupdatadetails: response.data
                }
            })
        })
    }

    submitFiler = (dispatch) => {
        dispatch({
            type: "FILER",
            payload: {
                filer: {
                    pcc: this.state.pcc,
                    email: this.state.email,
                    name: this.state.name,
                    title: this.state.title
                }
            }
        });
        this.props.history.push('/withdrawn');
    }

    render() {
        return (
            <Consumer>
                {value => {
                    const { Name, WaterRightFacilityName, ADEQName, Address, AddressLine2, City, State, ProgramCertificateConveyanceNumber, Zip } = this.state.ownerInfo

                    const title = this.state.ownerInfo ? this.state.ownerInfo.ProgramCertificateConveyanceNumber : '';
                    return <div className='row'>
                        <div className='col-12 pcc-span bg-dark text-white'>{title}</div>
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
                            <Questions data={this.state} update={this.onUpdate} value={value}/>
                        </div>

                    </div>

                }}
            </Consumer>
        )
    }
}
Details.contextType = Conxt;