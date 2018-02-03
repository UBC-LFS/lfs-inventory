'use strict';


import React, {Component} from 'react'
import FirstPage from './FirstPage'
import SecondPage from './SecondPage'
import ThirdPage from './ThirdPage'
import FourthPage from './FourthPage'

var StepZilla = require('react-stepzilla').default

export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.store = {
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

  getStore() {
    return this.store;
  }

  updateStore(update) {
    this.store = {
      ...this.store,
      ...update,
    }
  }

  render() {
    const steps =
    [
      {name: 'FirstPage', component: <FirstPage getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
      {name: 'SecondPage', component: <SecondPage getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
      {name: 'ThirdPage', component: <ThirdPage getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
      {name: 'FourthPage', component: <FourthPage getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
       ]

    return (
      <div className='form-container'>
        <div className='step-progress'>
          <StepZilla
            steps={steps}
            preventEnterSubmission={true}
            nextTextOnFinalActionStep={"Submit"}
            hocValidationAppliedTo={[3]}
            startAtStep={window.sessionStorage.getItem('step') ? parseFloat(window.sessionStorage.getItem('step')) : 0}
            onStepChange={(step) => window.sessionStorage.setItem('step', step)}
           />
        </div>
      </div>
    )
  }
}