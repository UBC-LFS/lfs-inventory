import React, { Component } from 'react';
import FirstPage from './FirstPage'
import SecondPage from './SecondPage'
import ThirdPage from './ThirdPage'


export default class Example extends Component {
    constructor(props) {
      super(props);
      this.state = {};
  
      this.fields = {
        
      };
    }

    getFields() {
        return this.fields;
    }

    updateFields(update) {
        this.sampleStore = {
          ...this.sampleStore,
          ...update,
        }
      }

    render() {
        const steps =
        [
            {name: 'FirstPage', component: <FirstPage getFields={() => (this.getFields())} updateFields={(u) => {this.updateFields(u)}} />}
        ]

        return (
            <div className='example'>
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