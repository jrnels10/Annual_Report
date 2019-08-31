import React, { Component } from 'react';
const Context = React.createContext();
export const Conxt = Context;;
const reducer = (state, action) => {
    switch (action.type) {
        case 'CURRENT_PAGE':
            // debugger
            return {
                ...state,
                currentPage: action.payload.currentPage
            }
        case 'LOOKUP_DATA':
            return {
                ...state,
                lookupdata: action.payload.lookupdata
            }
        case 'LOOKUP_DATA_DETAILS':
            return {
                ...state,
                lookupdatadetails: action.payload.lookupdatadetails
            }
        case 'FILER':
            return {
                ...state,
                filer: action.payload.filer
            }
        default:
            return state;
    }
}

export class Provider extends Component {
    state = {
        lookupdata: {
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
        currentPage: '',
        lookupdatadetails: '',
        filer: '',
        dispatch: action => this.setState(state => reducer(state, action))
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}
export const Consumer = Context.Consumer;

