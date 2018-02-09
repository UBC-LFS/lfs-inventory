'use strict';


import React, {Component} from 'react'
import FirstPage from './FirstPage'
import SecondPage from './SecondPage'
import ThirdPage from './ThirdPage'
import FourthPage from './FourthPage'
import LastPage from './LastPage'


var StepZilla = require('react-stepzilla').default

export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };

    this.field = {
      id: '', 
      date: '', 
      dateModified: '', 
      user: '',

      assetName: '',
      assetModelNumber: '', 
      assetSpecs: '',
      assetSerialNumber: '',
      assetTag: '',
      assetOwner: '',

      modelYear: '',
      speedChart: '',
      vendor: '',
      jvNumber: '',
      datePurchased: '',
      currentUser: '',
      previousUser: '',

      assetLocation: '',
      disposalDate: '',
      methodOfDisposal: '',
      userType: '',
      unitAffiliation: '',
      cost: ''

    };
  }

  componentDidMount() {}

  componentWillUnmount() {}

  getField() {
    return this.field;
  }

  updateField(update) {
    this.field = {
      ...this.field,
      ...update,
    }
  }

  render() {
    const steps =
    [
      {name: 'Step 1', component: <FirstPage getField={() => (this.getField())} updateField={(u) => {this.updateField(u)}} />},
      {name: 'Step 2', component: <SecondPage getField={() => (this.getField())} updateField={(u) => {this.updateField(u)}} />},
      {name: 'Step 3', component: <ThirdPage getField={() => (this.getField())} updateField={(u) => {this.updateField(u)}} />},
      {name: 'Step 4', component: <FourthPage getField={() => (this.getField())} updateField={(u) => {this.updateField(u)}} />},
      {name: 'Thank You', component: <LastPage />},
       ]

    return (
      <div className='form-container'>
        <div className='step-progress'>
          <StepZilla
            steps={steps}
            preventEnterSubmission={true}
            prevBtnOnLastStep={false}
            nextTextOnFinalActionStep={"Submit"}
            startAtStep={window.sessionStorage.getItem('step') ? parseFloat(window.sessionStorage.getItem('step')) : 0}
            onStepChange={(step) => window.sessionStorage.setItem('step', step)}
           />
        </div>
      </div>
    )
  }
}