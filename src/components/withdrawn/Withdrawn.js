import React, { Component } from 'react';
import { Consumer, Conxt } from '../../Context';
import Input from './input/Input';
import Table from './table/Table'
import WellEntry from '../library/input/WellEntry';
import WaterQuantityInfo from '../library/input/WaterQuantityInfo';
import InputButton from '../library/input/InputButton';
import NextPage from '../library/navigation/NextPage';
import { lookUpDetails } from '../../utils/API';


const intialState = {
    input: {
        reset: false,
        singleWell: true,
        wellRegistry: '',
        quantity: '',
        units: 'ac-ft',
        metered: true,
        howEstimated: '',
        comments: ''
    }
}

export default class Withdrawn extends Component {
    state = {
        currentPage: 'Withdrawn',
        add: false,
        update: false,
        delete: false,
        input: {
            reset: false,
            singleWell: true,
            wellRegistry: '',
            quantity: '',
            units: 'ac-ft',
            metered: true,
            howEstimated: '',
            comments: ''
        },
        table: {
            headers: ['', 'Well Registry', 'Quantity', 'Units', 'Metered/ Estimated', 'How Estimated', 'Comments'],
            tableName: 'Report Information'
        }
    }
    handleReset = () => {
        // this.setState({ input: intialState.input });
    };

    waterData = (stateKey, wtr) => {
        this.setState(prevState => ({
            input: {
                ...prevState.input,
                [stateKey]: wtr
            }
        }))
    }
    componentDidMount() {
        let value = this.context;
        this.setState({ table: {} })
        value.dispatch({
            type: "CURRENT_PAGE",
            payload: {
                currentPage: this.state.currentPage
            }
        })
    };

    onSelected = (e) => {
        return e.target.name === "singleWell" ? this.setState(prevState => ({
            input: {
                ...prevState.input,
                singleWell: !this.state.input.singleWell
            }
        })) : null;
    };

    submitInputToTable = () => {
        debugger
        this.setState(prevState => ({
            add: true,
            input: {
                ...prevState.input,
                reset: true
            }
        }), this.handleReset())

    }
    render() {
        return (
            <Consumer>
                {value => {
                    return (<React.Fragment>

                        <div className="row w-100">
                            <div className="col-md-5">
                                <div className="row">
                                    <span>Single Well</span>
                                    <input type="radio" name='singleWell' checked={!this.state.input.singleWell} onChange={this.onSelected} />
                                    <span>Multiple Wells</span>
                                    <input type="radio" name='singleWell' checked={this.state.input.singleWell} onChange={this.onSelected} />
                                </div>
                                <WellEntry waterData={this.waterData} parentState={this.state.input} />
                                <WaterQuantityInfo waterData={this.waterData} parentState={this.state.input} />
                                <InputButton submit={this.submitInputToTable} waterData={this.waterData} parentState={this.state} />
                            </div>
                            <div className="col-md-7"><Table parentData={this.state} backfill={value.lookUpDetails.reportDetails}/></div>
                        </div>
                        <NextPage data={this} action={"PAGES"} payload={{test:'test'}} next={"general"}/>
                    </React.Fragment>
                    )
                }}
            </Consumer>
        )
    }
};
Withdrawn.contextType = Conxt;