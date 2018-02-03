'use strict';

import React, { Component } from 'react';

export default class LastPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }
    
  componentDidMount() {}

  componentWillUnmount() {}

  // not required as this component has no forms or user entry
  // isValidated() {}
  render() {
    return (
      <div className="submit-page">
        <div className="row">
          <form id="Form" className="form-horizontal">
            <div className="form-group">
              <label className="col-md-12 control-label">
                <div>
                    <h1>Thanks You</h1>
                    <h2></h2>
                </div>
              </label>
              </div>
          </form>
        </div>
      </div>
    )
  }
}