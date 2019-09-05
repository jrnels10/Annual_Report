import React, { Component } from 'react';
import { Consumer, Conxt } from './../../Context';
import { lookUpData } from './../../utils/API';
import NextPage from './../library/navigation/NextPage';


export default class General extends Component {
    state = {
        currentPage: 'General',
        pcc: '',
        email: '',
        name: '',
        title: '',
        pccValidate: false
    }
    componentDidMount() {
        let value = this.context;
        value.dispatch({
            type: "CURRENT_PAGE",
            payload: {
                currentPage: this.state.currentPage
            }
        })
    }

    onUpdate = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    validatePCC = async (dispatch) => {
        console.log("validate")
        await lookUpData(this.state.pcc).then(response => {
            console.log(response)
            this.setState({ pccValidate: true })
            dispatch({
                type: "LOOKUP_DATA",
                payload: {
                    lookupdata: response.data
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
        this.props.history.push('/details');
    };

    currentPage = (dispatch) => {
        dispatch({
            type: "CURRENT_PAGE",
            payload: {
                currentPage: this.state.currentPage
            }
        });
    }

    render() {
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;

                    return <div onLoad={this.currentPage.bind(this, dispatch)} className='row'>
                        <div className="input-group input-group-sm mb-3">
                            <span>PCC</span>
                            <input type="text" name='pcc' onChange={this.onUpdate.bind(this)} onBlur={this.validatePCC.bind(this, dispatch)} className="form-control w-100" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                            <span>Email</span>
                            <input type="text" name='email' onChange={this.onUpdate.bind(this)} className="form-control w-100" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                            <div className='col-6 p-0'>
                                <span>Name</span>
                                <input type="text" name='name' onChange={this.onUpdate.bind(this)} className="form-control float-left" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                            </div>
                            <div className='col-6 p-0 mb-3'>
                                <span>Title</span>
                                <input type="text" name='title' onChange={this.onUpdate.bind(this)} className="form-control float-right" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                            </div>
                            {this.state.pccValidate ?
                                <NextPage 
                                data={this} 
                                action={"FILER"} 
                                payload={{
                                    filer: {
                                        pcc: this.state.pcc,
                                        email: this.state.email,
                                        name: this.state.name,
                                        title: this.state.title
                                    }
                                }} next={"details"} />
                                : null
                            }
                        </div>

                    </div>

                }}
            </Consumer>
        )
    }
}
General.contextType = Conxt;
