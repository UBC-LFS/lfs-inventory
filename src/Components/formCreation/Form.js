// Higher Order Component
import React from 'react';
import { withFormik } from 'formik';

import '../../css/helper.css';

// Inner form component which receives the form's state and updater methods as props
const InnerForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
}) => (
  <form className="form-body" onSubmit={handleSubmit}>
    <h1 className="form-header">LFS Inventory Form</h1>
    <div className="cbp-mc-column">
      <label htmlFor="id" style={{ display: 'block' }}>
        ID
        <span className="required">*</span>
      </label>
      <input
        type="text"
        name="id"
        placeholder= "Sample ID"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.id}
      />
      {touched.id && errors.id && <div type="text" className ="errors">{errors.id}</div>}
      
      <label htmlFor="user" style={{ display: 'block' }}>
        User
      </label>
      <input
        type="text"
        name="user"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.user}
      />
      {touched.user && errors.user && <div className ="errors">{errors.user}</div>}

      <label htmlFor="date" style={{ display: 'block' }}>
        Date
      </label>
      <input
        type="date"
        name="date"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.date}
      />
      {touched.date && errors.date && <div className ="errors">{errors.date}</div>}
      
      <label htmlFor="dateModified" style={{ display: 'block' }}>
        Date Modified
      </label>
      <input
        type="date"
        name="dateModified"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.dateModified}
      />
      {touched.dateModified && errors.dateModified && <div className ="errors">{errors.dateModified}</div>}

      <label htmlFor="assetName" style={{ display: 'block' }}>
        Asset Name
      </label>
      <input
        type="text"
        name="assetName"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.assetName}
      />
      {touched.assetName && errors.assetName && <div className ="errors">{errors.assetName}</div>}

      <label htmlFor="assetModelNumber" style={{ display: 'block' }}>
        Asset Model Number
      </label>
      <input
        type="text"
        name="assetModelNumber"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.assetModelNumber}
      />
      {touched.assetModelNumber && errors.assetModelNumber && <div className ="errors">{errors.assetModelNumber}</div>}
      
      <label htmlFor="assetSpecs" style={{ display: 'block' }}>
        Asset Specs
      </label>
      <input
        type="text"
        name="assetSpecs"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.assetSpecs}
      />
      {touched.assetSpecs && errors.assetSpecs && <div className ="errors">{errors.assetSpecs}</div>}
      
      <label htmlFor="assetSerialNumber" style={{ display: 'block' }}>
        Asset Serial Number
      </label>
      <input
        type="text"
        name="assetSerialNumber"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.assetSerialNumber}
      />
      {touched.assetSerialNumber && errors.assetSerialNumber && <div className ="errors">{errors.assetSerialNumber}</div>}
    </div>
    <div className="cbp-mc-column">
      <label htmlFor="assetTag" style={{ display: 'block' }}>
        Asset Tag
      </label>
      <input
        type="text"
        name="assetTag"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.assetTag}
      />
      {touched.assetTag && errors.assetTag && <div className ="errors">{errors.assetTag}</div>}
      
      <label htmlFor="assetOwner" style={{ display: 'block' }}>
        Asset Owner
      </label>
      <input
        type="text"
        name="assetOwner"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.assetOwner}
      />
      {touched.assetOwner && errors.assetOwner && <div className ="errors">{errors.assetOwner}</div>}
      
      <label htmlFor="modelYear" style={{ display: 'block' }}>
        Model Year
      </label>
      <input
        type="text"
        name="modelYear"
        placeholder= "e.g. 1995"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.modelYear}
      />
      {touched.modelYear && errors.modelYear && <div className ="errors">{errors.modelYear}</div>}
      
      <label htmlFor="speedChart" style={{ display: 'block' }}>
        Speed Chart
      </label>
      <input
        type="text"
        name="speedChart"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.speedChart}
      />
      {touched.speedChart && errors.speedChart && <div className ="errors">{errors.speedChart}</div>}
      
      <label htmlFor="vendor" style={{ display: 'block' }}>
        Vendor
      </label>
      <input
        type="text"
        name="vendor"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.vendor}
      />
      {touched.vendor && errors.vendor && <div className ="errors">{errors.vendor}</div>}
      
      <label htmlFor="jvNumber" style={{ display: 'block' }}>
        JV Number 
      </label>
      <input
        type="text"
        name="jvNumber"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.jvNumber}
      />
      {touched.jvNumber && errors.jvNumber && <div className ="errors">{errors.jvNumber}</div>}
      
      <label htmlFor="datePurchased" style={{ display: 'block' }}>
        Date Purchased
      </label>
      <input
        type="text"
        name="datePurchased"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.datePurchased}
      />
      {touched.datePurchased && errors.datePurchased && <div className ="errors">{errors.datePurchased}</div>}
      
      <label htmlFor="currentUser" style={{ display: 'block' }}>
        Current User
      </label>
      <input
        type="text"
        name="currentUser"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.currentUser}
      />
      {touched.currentUser && errors.currentUser && <div className ="errors">{errors.currentUser}</div>}
    </div>
    <div className="cbp-mc-column">
      <label htmlFor="previousUser" style={{ display: 'block' }}>
        Previous User
      </label>
      <input
        type="text"
        name="previousUser"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.previousUser}
      />
      {touched.previousUser && errors.previousUser && <div className ="errors">{errors.previousUser}</div>}
      
      <label htmlFor="assetLocation" style={{ display: 'block' }}>
        Asset Location
      </label>
      <input
        type="text"
        name="assetLocation"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.assetLocation}
      />
      {touched.assetLocation && errors.assetLocation && <div className ="errors">{errors.assetLocation}</div>}
      
      <label htmlFor="disposalDate" style={{ display: 'block' }}>
        Disposal Date
      </label>
      <input
        type="date"
        name="disposalDate"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.disposalDate}
      />
      {touched.disposalDate && errors.disposalDate && <div className ="errors">{errors.disposalDate}</div>}
      
      <label htmlFor="methodOfDisposal" style={{ display: 'block' }}>
        Method Of Disposal
      </label>
      <input
        type="text"
        name="methodOfDisposal"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.methodOfDisposal}
      />
      {touched.methodOfDisposal && errors.methodOfDisposal && <div className ="errors">{errors.methodOfDisposal}</div>}
      
      <label htmlFor="userType" style={{ display: 'block' }}>
        User Type
      </label>
      <input
        type="text"
        name="userType"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.userType}
      />
      {touched.userType && errors.userType && <div className ="errors">{errors.userType}</div>}
      
      <label htmlFor="unitAffiliation" style={{ display: 'block' }}>
        Unit Affiliation
      </label>
      <input
        type="text"
        name="unitAffiliation"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.unitAffiliation}
      />
      {touched.unitAffiliation && errors.unitAffiliation && <div className ="errors">{errors.unitAffiliation}</div>}
      
      <label htmlFor="cost" style={{ display: 'block' }}>
        Cost
      </label>
      <input
        type="number"
        name="cost"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.cost}
      />
      {touched.cost && errors.cost && <div className ="errors">{errors.cost}</div>}
    </div>
    
    <div className="cbp-mc-submit-wrap">
      <button  className="cbp-mc-submit" type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </div>
  </form>
);

// Wrap form using withFormik HoC
const InventoryForm = withFormik({
  // Transform outer props into form values
  mapPropsToValues: props => ({ id: '', user: '', date: '', dateModified: '', 
  assetName: '', assetModelNumber: '', assetSpecs: '', assetSerialNumber: '', assetTag: '', 
  assetOwner: '', modelYear: '', speedChart: '', vendor: '', jvNumber: '', datePurchased: '',
  currentUser: '', previousUser: '',  assetLocation: '', disposalDate: '',  methodOfDisposal: '',
  userType: '', unitAffiliation: '', cost: ''}),
  // Validation checks
  validate: (values, props) => {
    const errors = {};
    if (!values.id) {
      errors.id = 'Required';
    } 
    if (
      !/(?:(?:19|20)[0-9]{2})/.test(values.modelYear)
    ) {
      errors.modelYear = 'Invalid year';
    }
    return errors;
  },
  // Submission handler
  handleSubmit: (
    values,
    {
      props,
      setSubmitting,
      setErrors /* setValues, setStatus, and other goodies */,
    }
  ) => { 
    let FD = new FormData()
    for (let name in values) {
      FD.append(name, values[name])
    }
    const xhr = new XMLHttpRequest()
    xhr.open('POST', 'api/form') 
    xhr.send(FD)
    setSubmitting(false)
  },
})(InnerForm);

const Basic = () => (
  <div>
    <InventoryForm />
  </div>
);

export default Basic;
