'use strict';

import React, {Component} from 'react'

export default class FirstPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.getFirstPageEntries().id,
            date: props.getFirstPageEntries().date,
            dateModified: props.getFirstPageEntries().dateModified,
            user: props.getFirstPageEntries().user
        };
    // this flag enables onBlur validation as user fills forms
        this._validateOnDemand = true; 
    
        this.validationCheck = this.validationCheck.bind(this);
        this.isValidated = this.isValidated.bind(this);
    }

componentDidMount() {}

componentWillUnmount() {}

isValidated() {
    const userInput = this._grabUserInput(); // grab user entered vals
    const validateNewInput = this._validateData(userInput); // run the new input against the validator
    let isDataValid = false;

    // if full validation passes then save to store and pass as valid
    if (Object.keys(validateNewInput).every((k) => { return validateNewInput[k] === true })) {
        if (this.props.getFirstPageEntries().id != userInput.id || this.props.getFirstPageEntries().date != userInput.date) { // only update store of something changed
            this.props.updateFirstPageEntries({
                ...userInput,
                savedToCloud: false // use this to notify step4 that some changes took place and prompt the user to save again
            });  // Update store here (this is just an example, in reality you will do it via redux or flux)
        }

        isDataValid = true;
    }
    else {
        // if anything fails then update the UI validation state but NOT the UI Data State
        this.setState(Object.assign(userInput, validateNewInput, this._validationErrors(validateNewInput)));
    }

    return isDataValid;
}

validationCheck() {
    if (!this._validateOnDemand)
    return;

    const userInput = this._grabUserInput(); // grab user entered vals
    const validateNewInput = this._validateData(userInput); // run the new input against the validator

    this.setState(Object.assign(userInput, validateNewInput, this._validationErrors(validateNewInput)));
}

_validateData(data) {
    return  {
        //equired: regex w3c uses in html5
        idVal: /[0-9]*$/.test(data.id),
        //MM-DD-YY date format
        dateVal:/^(((0[13-9]|1[012])[-/]?(0[1-9]|[12][0-9]|30)|(0[13578]|1[02])[-/]?31|02[-/]?(0[1-9]|1[0-9]|2[0-8]))[-/]?[0-9]{4}|02[-/]?29[-/]?([0-9]{2}(([2468][048]|[02468][48])|[13579][26])|([13579][26]|[02468][048]|0[0-9]|1[0-6])00))$/.test(data.date)
        /*
        dateModifiedVal: ,
        userVal:
        */
    }
}

_validationErrors(val) {
    const errMsgs = {
        idValMsg: val.idVal ? '' : 'A user input is required',
        dateValMsg: val.dateVal ? '' : 'A valid date  is required'
    }

    return errMsgs;
}

_grabUserInput() {
    return {
        id: this.refs.id.value,
        date: this.refs.date.value,
        dateModified: this.refs.dateModified.value,
        user: this.refs.user.value,
    };
}

render() {
        // explicit class assigning based on validation
    let notValidClasses = {};

    if (typeof this.state.idVal == 'undefined' || this.state.idVal) {
        notValidClasses.idCls = 'no-error col-md-8';
    }
    else {
        notValidClasses.idCls = 'has-error col-md-8';
        notValidClasses.idValGrpCls = 'val-err-tooltip';
    }

    if (typeof this.state.dateVal == 'undefined' || this.state.dateVal) {
        notValidClasses.dateCls = 'no-error col-md-8';
    }
    else {
        notValidClasses.dateCls = 'has-error col-md-8';
        notValidClasses.dateValGrpCls = 'val-err-tooltip';
    }

    return (
        <div className="first-page">
        <div className="form-row">
            <form id="Form" className="form-horizontal">
            <div className="form-group">
                <label className="col-md-12 control-label-title">
                <h1>Inventory Form</h1>
                </label>
            </div>
            <div className="row">
                <div className="col-md-12 control-label">
                </div>
            </div>
            <div className="form-group col-md-12 content form-block-holder">
                <label className="control-label col-md-4"> 
                    ID
                </label>
                <div className={notValidClasses.idCls}>
                    <input
                    ref="id"
                    autoComplete="off"
                    type="number"
                    placeholder="123"
                    className="form-control"
                    required
                    defaultValue={this.state.id}
                    onBlur={this.validationCheck}/>
                    <div className={notValidClasses.idValGrpCls}>{this.state.idValMsg}</div>
                </div>
                </div>
                <div className="form-group col-md-12 content form-block-holder">
                <label className="control-label col-md-4">
                    Date
                </label>
                <div className={notValidClasses.dateCls}>
                    <input
                    ref="date"
                    autoComplete="off"
                    type="date"
                    placeholder="MM-DD-YY"
                    className="form-control"
                    required
                    defaultValue={this.state.date}
                    onBlur={this.validationCheck} />
                    <div className={notValidClasses.dateValGrpCls}>{this.state.dateValMsg}</div>
                </div>
                </div>
            </form>
        </div>
        </div>
        )
    }
}