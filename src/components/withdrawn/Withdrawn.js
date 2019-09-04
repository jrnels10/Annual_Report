import React, { Component } from 'react';
import { Consumer,Conxt } from '../../Context';
import Input from './input/Input';
import Table from './table/Table'
import WellEntry from '../library/input/WellEntry';
import WaterQuantityInfo from '../library/input/WaterQuantityInfo';

export default class Withdrawn extends Component {
    state = {
<<<<<<< HEAD
=======
        currentPage:'Withdrawn',
        add:false,
        update:false,
        delete:false,
        input: {
            wellRegistry: '',
            quantity: '',
            units: 'ac-ft',
            meteredEstimated: 'Metered',
            howEstimated: '',
            comments: ''
        },
        table: {}
    }
    wellList = (wells) => {
        this.setState(prevState => ({
            input: {
                ...prevState.input,
                wellRegistry: wells
            }
        }))
    }
    componentDidMount() {
        let value = this.context;
        this.setState({table:{}})
        value.dispatch({
            type: "CURRENT_PAGE",
            payload: {
                currentPage: this.state.currentPage
            }
        })
    }
>>>>>>> a4b5330003c0cac17eb0114c116d83f9e94196f1

    };
    headers = ['', 'Well Registry', 'Quantity', 'Units', 'Metered/ Estimated', 'How Estimated', 'Comments'];
    render() {
        return (
            <Consumer>
                {value => {
                    console.log(value)
                    return (
                        <div className="row w-100">
                            <div className="col-md-5">
                                <div className="container">
                                    <div className="row">
                                        <label className="col-md-7">
                                            <input type="radio"></input>
                                            Single Well Reading
                                        </label>
                                        <label className="col-md-5">
                                            <input type="radio"></input>
                                            Well Groups
                                        </label>
                                    </div>
                                    <WellEntry wellList={this.wellList} parentState={this.state.input} />
                                    <WaterQuantityInfo />
                                </div>
                            </div>
                            <div className="col-md-7"><Table headers={this.headers} tableName={'Report Information'}/></div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
};
Withdrawn.contextType = Conxt;