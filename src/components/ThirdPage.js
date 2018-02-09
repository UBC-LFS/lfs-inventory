'use strict';

import React, {Component} from 'react'

export default class ThirdPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modelYear: props.getField().modelYear,
            speedChart: props.getField().speedChart,
            vendor: props.getField().vendor,
            jvNumber: props.getField().jvNumber,
            datePurchased: props.getField().datePurchased,
            currentUser: props.getField().currentUser,
            previousUser: props.getField().previousUser
        };
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
            if (this.props.getField().modelYear != userInput.modelYear) { // only update store of something changed
                this.props.updateField({   
                  ...userInput,
                });
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
          modelYearVal:/(?:(?:19|20)[0-9]{2})/.test(data.modelYear)         
      }
    }
  
    _validationErrors(val) {
      const errMsgs = {
        modelYearValMsg: val.modelYearVal ? '' : 'A valid year is required'
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
        modelYear: this.refs.modelYear.value,
        speedChart: this.refs.speedChart.value,
        vendor: this.refs.vendor.value,
        jvNumber: this.refs.jvNumber.value,
        datePurchased: this.refs.datePurchased.value,
        currentUser: this.refs.currentUser.value,
        previousUser: this.refs.previousUser.value,
      };
    }
  
    render() {
      // explicit class assigning based on validation
      let notValidClasses = {};
  
      if (typeof this.state.modelYearVal == 'undefined' || this.state.modelYearVal) {
        notValidClasses.modelYearCls = 'no-error col-md-8';
      }
      else {
        notValidClasses.modelYearCls = 'has-error col-md-8';
        notValidClasses.modelYearValGrpCls = 'val-err-tooltip';
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
                    Model Year
                  </label>
                  <div className={notValidClasses.modelYearCls}>
                      <input
                      ref="modelYear"
                      autoComplete="off"
                      type="number"
                      placeholder="YYYY"
                      className="form-control"
                      required
                      defaultValue={this.state.modelYear}
                      onBlur={this.validationCheck}/>
                      <div className={notValidClasses.modelYearValGrpCls}>{this.state.modelYearValMsg}</div>
                  </div>
                </div>
                <div className="form-group col-md-12 content form-block-holder">
                  <label className="control-label col-md-4">
                    Speed Chart
                  </label>
                  <div className={notValidClasses.dateCls}>
                      <input
                      ref="speedChart"
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
                    Vendor
                  </label>
                  <div className={notValidClasses.dateCls}>
                      <input
                      ref="vendor"
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
                    JV Number
                  </label>
                  <div className={notValidClasses.dateCls}>
                      <input
                      ref="jvNumber"
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
                    Date Purchased
                  </label>
                  <div className={notValidClasses.dateCls}>
                      <input
                      ref="datePurchased"
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
                <div className="form-group col-md-12 content form-block-holder">
                  <label className="control-label col-md-4">
                    Current User
                  </label>
                  <div className={notValidClasses.dateCls}>
                      <input
                      ref="currentUser"
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
                    Previous User
                  </label>
                  <div className={notValidClasses.dateCls}>
                      <input
                      ref="previousUser"
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