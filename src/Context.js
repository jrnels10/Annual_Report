import React, { Component } from 'react';
const Context = React.createContext();
export const Conxt=Context;;
const reducer = (state, action) => {
    switch (action.type) {
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
                filer:action.payload.filer
            }
        default:
            return state;
    }
}

export class Provider extends Component {
    state = {
        lookupdata:'',
        lookupdatadetails: '',
        filer:'',
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

