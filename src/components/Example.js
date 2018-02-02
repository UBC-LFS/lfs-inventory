'use strict';


import React, {Component} from 'react'
import FirstPage from './FirstPage'

/*
import SecondPage from './SecondPage'
import ThirdPage from './ThirdPage'
import FourthPage from './FourthPage'
import FifthPage from './FifthPage'
import FifthPage from './FifthPage'
import LastPage from './LastPage'
*/

var StepZilla = require('react-stepzilla').default

export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.firstPageEntries = {
      id: '', 
      date: '', 
      dateModified: '', 
      user: ''
    };

    this.secondPageEntries = {
      assetName: '',
      assetModelNumber: '', 
      assetSpecs: '',
      assetSerialNumber: '',
      assetTag: '',
      assetOwner: ''

    };

    this.thirdPageEntries = {

    };

    this.forthPageEntries = {

    };

    this.fifthPageEntries = {

    };
  }

  componentDidMount() {}

  componentWillUnmount() {}

  getFirstPageEntries() {
    return this.firstPageEntries;
  }

  getSecondPageEntries() {
    return this.firstPageEntries;
  }

  getThirdPageEntries() {
    return this.firstPageEntries;
  }

  getFourthPageEntries() {
    return this.firstPageEntries;
  }

  getFifthPageEntries() {
    return this.firstPageEntries;
  }

  updateFirstPageEntries(update) {
    this.firstPageEntries = {
      ...this.firstPageEntries,
      ...update,
    }
  }

  render() {
    const steps =
    [
      {name: 'FirstPage', component: <FirstPage getFirstPageEntries={() => (this.getFirstPageEntries())} updateFirstPageEntries={(u) => {this.updateFirstPageEntries(u)}} />},
      //{name: 'SecondPage', component: <SecondPage getStore={() => (this.getSecondPageEntries())} updateStore={(u) => {this.updateStore(u)}} />},
      /*
      {name: 'ThirdPage', component: <ThirdPage getStore={() => (this.getThirdPageEntries())} updateStore={(u) => {this.updateStore(u)}} />},
      {name: 'FourthPage', component: <FourthPage getStore={() => (this.getFourthPageEntries())} updateStore={(u) => {this.updateStore(u)}} />},
      {name: 'FifthPage', component: <FifthPage getStore={() => (this.getFifthPageEntries())} updateStore={(u) => {this.updateStore(u)}} />}
      */
    ]

    return (
      <div className='form-container'>
        <div className='step-progress'>
          <StepZilla
            steps={steps}
            preventEnterSubmission={true}
            nextTextOnFinalActionStep={"Save"}
            hocValidationAppliedTo={[3]}
            startAtStep={window.sessionStorage.getItem('step') ? parseFloat(window.sessionStorage.getItem('step')) : 0}
            onStepChange={(step) => window.sessionStorage.setItem('step', step)}
           />
        </div>
      </div>
    )
  }
}