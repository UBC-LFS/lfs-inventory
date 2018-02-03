'use strict';

import React, {Component} from 'react'

export default class SecondPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
          assetName: props.getStore().assetName,
          assetModelNumber: props.getStore().assetModelNumber,
          assetSpecs: props.getStore().assetSpecs,
          assetSerialNumber: props.getStore().assetSerialNumber,
          assetTag: props.getStore().assetTag,
          assetOwner: props.getStore().assetOwner
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
          if (this.props.getStore().assetName != userInput.assetName || this.props.getStore().assetModelNumber != userInput.assetModelNumber) { // only update store of something changed
              this.props.updateStore({
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
        //required: regex w3c uses in html5
        //assetName validation: 
        assetNameVal: /[a-z]*$/.test(data.assetName),
        //assetModelNumber validation: 
        assetModelNumberVal: /[0-9]*$/.test(data.assetModelNumber),
        /*
        //assetSpecs validation: 
        assetSpecsVal: ,
        //assetSerialNumber validation: 
        assetSerialNumberVal: ,
        //assetTag validation: 
        assetTagVal: ,
        //assetOwner validation: 
        assetOwnerVal: 
        */
    }
  }

  _validationErrors(val) {
    const errMsgs = {
      assetNameValMsg: val.assetNameVal ? '' : 'A asset name input is required',
      assetModelNumberValMsg: val.assetModelNumberVal ? '' : 'A valid asset number is required',
      /*
      assetSpecsValMsg: val.idVal ? '' : 'A user input is required',
      assetSerialNumberValMsg: val.dateVal ? '' : 'A valid date is required',
      assetTagValMsg: val.idVal ? '' : 'A user input is required',
      assetOwnerValMsg: val.dateVal ? '' : 'A valid date is required'
      */
    }

    return errMsgs;
  }

  _grabUserInput() {
    return {
      assetName: this.refs.assetName.value,
      assetModelNumber: this.refs.assetModelNumber.value,
      assetSpecs: this.refs.assetSpecs.value,
      assetSerialNumber: this.refs.assetSerialNumber.value,
      assetTag: this.refs.assetTag.value,
      assetOwner: this.refs.assetOwner.value,
    };
  }

  render() {
    // explicit class assigning based on validation
    let notValidClasses = {};

    if (typeof this.state.assetNameVal == 'undefined' || this.state.assetNameVal) {
      notValidClasses.assetNameCls = 'no-error col-md-8';
    }
    else {
      notValidClasses.assetNameCls = 'has-error col-md-8';
      notValidClasses.assetNameValGrpCls = 'val-err-tooltip';
    }

    if (typeof this.state.assetModelNumberVal == 'undefined' || this.state.assetModelNumberVal) {
      notValidClasses.assetModelNumberCls = 'no-error col-md-8';
    }
    else {
      notValidClasses.assetModelNumberCls = 'has-error col-md-8';
      notValidClasses.assetModelNumberValGrpCls = 'val-err-tooltip';
    }

    return (
      <div className="form-page">
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
                  Asset Name
                </label>
                <div className={notValidClasses.assetNameCls}>
                    <input
                    ref="assetName"
                    autoComplete="off"
                    type="text"
                    placeholder=""
                    className="form-control"
                    required
                    defaultValue={this.state.assetName}
                    onBlur={this.validationCheck}/>
                    <div className={notValidClasses.assetNameValGrpCls}>{this.state.assetNameValMsg}</div>
                </div>
              </div>
              <div className="form-group col-md-12 content form-block-holder">
                <label className="control-label col-md-4">
                  Asset Model Number
                </label>
                <div className={notValidClasses.dateCls}>
                    <input
                    ref="assetModelNumber"
                    autoComplete="off"
                    type="number"
                    placeholder=""
                    className="form-control"
                    required
                    defaultValue={this.state.date}
                    onBlur={this.validationCheck} />
                    <div className={notValidClasses.dateValGrpCls}>{this.state.dateValMsg}</div>
                </div>
              </div>
              <div className="form-group col-md-12 content form-block-holder">
                <label className="control-label col-md-4">
                  Asset Specs
                </label>
                <div className={notValidClasses.dateCls}>
                    <input
                    ref="assetSpecs"
                    autoComplete="off"
                    type="text"
                    placeholder=""
                    className="form-control"
                    required
                    defaultValue={this.state.date}
                    onBlur={this.validationCheck} />
                    <div className={notValidClasses.dateValGrpCls}>{this.state.dateValMsg}</div>
                </div>
              </div>
              <div className="form-group col-md-12 content form-block-holder">
                <label className="control-label col-md-4">
                  Asset Serial Number
                </label>
                <div className={notValidClasses.dateCls}>
                    <input
                    ref="assetSerialNumber"
                    autoComplete="off"
                    type="text"
                    placeholder=""
                    className="form-control"
                    required
                    defaultValue={this.state.date}
                    onBlur={this.validationCheck} />
                    <div className={notValidClasses.dateValGrpCls}>{this.state.dateValMsg}</div>
                </div>
              </div>
              <div className="form-group col-md-12 content form-block-holder">
                <label className="control-label col-md-4">
                  Asset Tag
                </label>
                <div className={notValidClasses.dateCls}>
                    <input
                    ref="assetTag"
                    autoComplete="off"
                    type="text"
                    placeholder=""
                    className="form-control"
                    required
                    defaultValue={this.state.date}
                    onBlur={this.validationCheck} />
                    <div className={notValidClasses.dateValGrpCls}>{this.state.dateValMsg}</div>
                </div>
              </div>
              <div className="form-group col-md-12 content form-block-holder">
                <label className="control-label col-md-4">
                  Asset Owner
                </label>
                <div className={notValidClasses.dateCls}>
                    <input
                    ref="assetOwner"
                    autoComplete="off"
                    type="text"
                    placeholder=""
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