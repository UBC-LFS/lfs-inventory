'use strict';

import React, { Component } from 'react';

export default class LastPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
     
    };
  }

  render() {
    return (
      <div className="submit-page">
        <div className="row">
          <form id="Form" className="form-horizontal">
            <div className="form-group">
                <div>
                  <label className="col-md-12 control-label-thankyou">
                    <h2> Thank you for your submission</h2>
                   </label>
                </div>
              </div>
          </form>
        </div>
      </div>
    )
  }
}