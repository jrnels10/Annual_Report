import React, { Component } from 'react';
import { Consumer, Conxt } from './../../Context';
import { lookUpDetails } from './../../utils/API';


export default class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };

    }


    onUpdate = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    async componentDidMount() {
        let value = this.context;
        this.setState({ ownerInfo: value.lookupdata })
        await lookUpDetails(value.filer.pcc).then(response => {
            console.log(response)
            // this.setState({ pccValidate: true })
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
                    const { dispatch } = value;
                    return <div className='row'>
                    </div>

                }}
            </Consumer>
        )
    }
}
Details.contextType = Conxt;