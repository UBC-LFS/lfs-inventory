import React from 'react';
import { Formik, Field } from 'formik';
import ProgressBar from '../progressbar/ProgressBar'
import '../../css/multistep.css';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const required = value => (value ? undefined : 'Required');

const Error = ({ name }) => (
  <Field
    name={name}
    render={({ form: { touched, errors } }) =>
      touched[name] && errors[name] ? <span className ="errors">{errors[name]}</span> : null
    }
  />
);

class Wizard extends React.Component {
  static Page = ({ children }) => children;

  constructor(props) {
    super(props)
    this.state = {
      page: 0,
      values: { id: '', user: '', date: '', dateModified: '', 
      assetName: '', assetModelNumber: '', assetSpecs: '', assetSerialNumber: '', assetTag: '', 
      assetOwner: '', modelYear: '', speedChart: '', vendor: '', jvNumber: '', datePurchased: '',
      currentUser: '', previousUser: '',  assetLocation: '', disposalDate: '',  methodOfDisposal: '',
      userType: '', unitAffiliation: '', cost: ''},
    }
  }


  next = values =>
    this.setState(state => ({
      page: Math.min(state.page + 1, this.props.children.length - 1),
      values,
    }));

  previous = () =>
    this.setState(state => ({
      page: Math.max(state.page - 1, 0),
    }));

  validate = values => {
    const activePage = React.Children.toArray(this.props.children)[
      this.state.page
    ];
    return activePage.props.validate ? activePage.props.validate(values) : {};
  };

  handleSubmit = (values, bag) => {
    const { children, onSubmit } = this.props;
    const { page } = this.state;
    const isLastPage = page === React.Children.count(children) - 1;
    if (isLastPage) {
      let FD = new FormData()
      for (let name in values) {
        FD.append(name, values[name])
      }
      const xhr = new XMLHttpRequest()
      xhr.open('POST', '/form') 
      xhr.send(FD)
      return onSubmit(values);
    } else {
      this.next(values);
      bag.setSubmitting(false);
    }
  };

  render() {
    const { children } = this.props;
    const { page, values } = this.state;
    const activePage = React.Children.toArray(children)[page];
    const isLastPage = page === React.Children.count(children) - 1;
    return (
      <Formik
        initialValues={values}
        enableReinitialize={false}
        validate={this.validate}
        onSubmit={this.handleSubmit}
        render={({ values, handleSubmit, isSubmitting, handleReset }) => (
          <form onSubmit={handleSubmit}>
            {activePage}
            <div className="action-button">
              {page > 0 && (
                <button className ="previous-button" type="button" onClick={this.previous}>
                  « Previous
                </button>
              )}

              {!isLastPage && <button className ="next-button" type="submit" onClick={this.props.onHandl}>Next »</button>}
              {isLastPage && (
                <button className ="submit action-button" type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              )}
            </div>
          </form>
        )}
      />
    );
  }
}

const Multi = (props) => (
  <div className="Multi">
    <Wizard
      onSubmit={(values, actions) => {
        sleep(300).then(() => {
          window.alert(JSON.stringify(values, null, 2));
        });
      }}
      onHandlePrev={props.onHandlePrev}
      onHandleNext={props.onHandleNext}
    > 
      <Wizard.Page>
        <div>
          <label htmlFor="id" style={{ display: 'block' }}>
            ID
            <span className="required">*</span>
          </label>
          <Field
            component="input"
            type="text"
            name="id"
            placeholder= "Sample ID"
            validate={required}
          />
          <Error name="id" />
        </div>
        <div>
          <label htmlFor="user" style={{ display: 'block' }}>
            User
          </label>
          <Field
            component="input"
            name="user"
            type="text"
          />
          <Error name="user" />
        </div>
        <div>
          <label htmlFor="date" style={{ display: 'block' }}>
            Date
          </label>
          <Field
            component="input"
            type="date"
            name="date"
          />
          <Error name="date" />
        </div>
        <div>
          <label htmlFor="dateModified" style={{ display: 'block' }}>
            Date Modified
          </label>
          <Field
            component="input"
            type="date"
            name="dateModified"
          />
          <Error name="dateModified" />
        </div>
      </Wizard.Page>

      <Wizard.Page>
        <div>
          <label htmlFor="assetName" style={{ display: 'block' }}>
            Asset Name
          </label>
          <Field
            component="input"
            type="text"
            name="assetName"
            validate={required}
          />
          <Error name="assetName" />
        </div>
        <div>
          <label htmlFor="assetModelNumber" style={{ display: 'block' }}>
            Asset Model Number
          </label>
          <Field
            component="input"
            type="text"
            name="assetModelNumber"
          />
          <Error name="assetModelNumber" />
        </div>
        <div>
          <label htmlFor="assetSpecs" style={{ display: 'block' }}>
            Asset Specs
          </label>
          <Field
            component="input"
            type="text"
            name="assetSpecs"
          />
          <Error name="assetSpecs" />
        </div>
        <div>
          <label htmlFor="assetSerialNumber" style={{ display: 'block' }}>
            Asset Serial Number
          </label>
          <Field
            component="input"
            type="text"
            name="assetSerialNumber"
          />
          <Error name="assetSerialNumber" />
        </div>
        <div>
          <label htmlFor="assetTag" style={{ display: 'block' }}>
            Asset Tag
          </label>
          <Field
            component="input"
            type="text"
            name="assetTag"
          />
          <Error name="assetTag" />
        </div>
        <div>
          <label htmlFor="assetOwner" style={{ display: 'block' }}>
            Asset Owner
          </label>
          <Field
            component="input"
            type="text"
            name="assetOwner"
          />
          <Error name="assetOwner" />
        </div>
      </Wizard.Page>
      
      <Wizard.Page
        validate={values => {
          const errors = {};
          if (values.modelYear && !/(?:(?:19|20)[0-9]{2})/.test(values.modelYear)) {
            errors.modelYear = 'Please enter a valid year';
          }
          return errors;
        }} 
      >
        <div>
          <label htmlFor="modelYear" style={{ display: 'block' }}>
            Model Year
          </label>
          <Field
            component="input"
            type="text"
            name="modelYear"
            placeholder= "e.g. 1995"
          />
          <Error name="modelYear" />
        </div>
        <div>
          <label htmlFor="speedChart" style={{ display: 'block' }}>
            Speed Chart
          </label>
          <Field
            component="input"
            type="text"
            name="speedChart"
          />
          <Error name="speedChart" />
        </div>
        <div>
          <label htmlFor="vendor" style={{ display: 'block' }}>
            Vendor
          </label>
          <Field
            component="input"
            type="text"
            name="vendor"
          />
          <Error name="vendor" />
        </div>
        <div>
          <label htmlFor="jvNumber" style={{ display: 'block' }}>
            JV Number 
          </label>
          <Field
            component="input"
            type="text"
            name="jvNumber"
          />
          <Error name="jvNumber" />
        </div>
        <div>
          <label htmlFor="datePurchased" style={{ display: 'block' }}>
            Date Purchased
          </label>
          <Field
            component="input"
            type="date"
            name="datePurchased"
          />
          <Error name="datePurchased" />
        </div>
      </Wizard.Page>

      <Wizard.Page>
        <div>
          <label htmlFor="currentUser" style={{ display: 'block' }}>
            Current User
          </label>
          <Field
            component="input"
            type="text"
            name="currentUser"
          />
          <Error name="currentUser" />
        </div>
        <div>
          <label htmlFor="previousUser" style={{ display: 'block' }}>
            Previous User
          </label>
          <Field
            component="input"
            type="text"
            name="previousUser"
          />
          <Error name="previousUser" />
        </div>
        <div>
          <label htmlFor="assetLocation" style={{ display: 'block' }}>
            Asset Location
          </label>
          <Field
            component="input"
            type="text"
            name="assetLocation"
          />
          <Error name="assetLocation" />
        </div>
        <div>
          <label htmlFor="disposalDate" style={{ display: 'block' }}>
            Disposal Date
          </label>
          <Field
            component="input"
            type="date"
            name="disposalDate"
          />
          <Error name="disposalDate" />
        </div>
        <div>
          <label htmlFor="methodOfDisposal" style={{ display: 'block' }}>
            Method Of Disposal
          </label>
          <Field
            component="input"
            type="text"
            name="methodOfDisposal"
          />
          <Error name="methodOfDisposal" />
        </div>
      </Wizard.Page>

      <Wizard.Page>
        <div>
          <label htmlFor="userType" style={{ display: 'block' }}>
            User Type
          </label>
          <Field
            component="input"
            type="text"
            name="userType"
          />
          <Error name="userType" />
        </div>
        <div>
          <label htmlFor="unitAffiliation" style={{ display: 'block' }}>
            Unit Affiliation
          </label>
          <Field 
            component="input"
            type="text"
            name="unitAffiliation"
          />
          <Error name="unitAffiliation" />
        </div>
        <div>
          <label htmlFor="cost" style={{ display: 'block' }}>
            Cost
          </label>
          <Field 
            component="input"
            type="number"
            name="cost"
          />
          <Error name="cost" />
        </div>
      </Wizard.Page>
    </Wizard>
  </div>
);

export default Multi