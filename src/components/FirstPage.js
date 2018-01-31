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
        if (this.props.getFirstPageEntries().email != userInput.email || this.props.getFirstPageEntries().gender != userInput.gender) { // only update store of something changed
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
        // required: regex w3c uses in html5
        idVal: /[0-9]*$/.test(data.id), 
        /*
        dateVal: ,
        dateModifiedVal: ,
        userVal:
        */
    }
    }

    _validationErrors(val) {
    const errMsgs = {
        idValMsg: val.genderVal ? '' : 'A user input is required',
        dateValMsg: val.emailVal ? '' : 'A valid date  is required'
    }
    return errMsgs;
    }

    _grabUserInput() {
    return {
        id: this.refs.id.value,
        date: this.refs.date.value,
        dateModified: this.refs.id.dateModified,
        user: this.refs.date.user,
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
        <div className="firstPage">
        <div className="row">
            <form id="Form" className="form-horizontal">
            <div className="form-group">
                <label className="col-md-12 control-label">
                <h1>Step 3: Basic JavaScript Validation Example</h1>
                </label>
            </div>
            <div className="row content">
                <div className="col-md-12">
                This example component has a form that uses local standard basic JavaScript validation.
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
                    <div className={notValidClasses.genderValGrpCls}>{this.state.idValMsg}</div>
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
                    <div className={notValidClasses.emailValGrpCls}>{this.state.dateValMsg}</div>
                </div>
                </div>
            </form>
        </div>
        </div>
        )
    }
}