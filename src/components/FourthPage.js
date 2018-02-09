'use strict';

import React, {Component} from 'react'

export default class FourthPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            assetLocation: props.getField().assetLocation,
            disposalDate: props.getField().disposalDate,
            methodOfDisposal: props.getField().methodOfDisposal,
            userType: props.getField().userType,
            unitAffiliation: props.getField().unitAffiliation,
            cost: props.getField().cost,
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
            if (this.props.getField().cost != userInput.cost) { // only update store of something changed
                this.props.updateField({
                    ...userInput,
                    savedToCloud: false // use this to notify step4 that some changes took place and prompt the user to save again
                });  // Update store here (this is just an example, in reality you will do it via redux or flux)
            }
          isDataValid = true;
          } else {
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
          costVal: /[0-9]*$/.test(data.cost)         
      }
    }
  
    _validationErrors(val) {
      const errMsgs = {
        costValMsg: val.costVal ? '' : 'A valid cost is required'
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
        assetLocation: this.refs.assetLocation.value,
        disposalDate: this.refs.disposalDate.value,
        methodOfDisposal: this.refs.methodOfDisposal.value,
        userType: this.refs.userType.value,
        unitAffiliation: this.refs.unitAffiliation.value,
        cost: this.refs.cost.value
      };
    }
  
    render() {
      // explicit class assigning based on validation
      let notValidClasses = {};
  
      if (typeof this.state.costVal == 'undefined' || this.state.costVal) {
        notValidClasses.costCls = 'no-error col-md-8';
      }
      else {
        notValidClasses.costCls = 'has-error col-md-8';
        notValidClasses.costValGrpCls = 'val-err-tooltip';
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
                    Asset Location
                  </label>
                  <div className={notValidClasses.idCls}>
                      <input
                      ref="assetLocation"
                      autoComplete="off"
                      type="text"
                      placeholder=""
                      className="form-control"
                      required
                      defaultValue={this.state.id}
                      onBlur={this.validationCheck}/>
                      <div className={notValidClasses.idValGrpCls}>{this.state.idValMsg}</div>
                  </div>
                </div>
                <div className="form-group col-md-12 content form-block-holder">
                  <label className="control-label col-md-4">
                    Disposal Date
                  </label>
                  <div className={notValidClasses.idCls}>
                      <input
                      ref="disposalDate"
                      autoComplete="off"
                      type="date"
                      placeholder="MM-DD-YYYY"
                      className="form-control"
                      required
                      defaultValue={this.state.id}
                      onBlur={this.validationCheck} />
                      <div className={notValidClasses.idValGrpCls}>{this.state.idValMsg}</div>
                  </div>
                </div>
                <div className="form-group col-md-12 content form-block-holder">
                  <label className="control-label col-md-4">
                    Method Of Disposal
                  </label>
                  <div className={notValidClasses.idCls}>
                      <input
                      ref="methodOfDisposal"
                      autoComplete="off"
                      type="text"
                      placeholder=""
                      className="form-control"
                      required
                      defaultValue={this.state.id}
                      onBlur={this.validationCheck} />
                      <div className={notValidClasses.idValGrpCls}>{this.state.idValMsg}</div>
                  </div>
                </div>
                <div className="form-group col-md-12 content form-block-holder">
                  <label className="control-label col-md-4">
                    User Type
                  </label>
                  <div className={notValidClasses.idCls}>
                      <input
                      ref="userType"
                      autoComplete="off"
                      type="text"
                      placeholder=""
                      className="form-control"
                      required
                      defaultValue={this.state.id}
                      onBlur={this.validationCheck} />
                      <div className={notValidClasses.idValGrpCls}>{this.state.idValMsg}</div>
                  </div>
                </div>
                <div className="form-group col-md-12 content form-block-holder">
                  <label className="control-label col-md-4">
                    Unit Affiliation
                  </label>
                  <div className={notValidClasses.idCls}>
                      <input
                      ref="unitAffiliation"
                      autoComplete="off"
                      type="text"
                      placeholder=""
                      className="form-control"
                      required
                      defaultValue={this.state.id}
                      onBlur={this.validationCheck} />
                      <div className={notValidClasses.idValGrpCls}>{this.state.idValMsg}</div>
                  </div>
                </div>
                <div className="form-group col-md-12 content form-block-holder">
                  <label className="control-label col-md-4">
                    Cost
                  </label>
                  <div className={notValidClasses.costCls}>
                      <input
                      ref="cost"
                      autoComplete="off"
                      type="number"
                      placeholder=""
                      className="form-control"
                      required
                      defaultValue={this.state.cost}
                      onBlur={this.validationCheck} />
                      <div className={notValidClasses.costValGrpCls}>{this.state.costValMsg}</div>
                  </div>
                </div>
              </form>
          </div>
        </div>
      )
    }
  }