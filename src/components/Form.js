// Higher Order Component
import React from 'react';
import { withFormik } from 'formik';

import '../css/helper.css';

// Our inner form component which receives our form's state and updater methods as props
const InnerForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
}) => (
  <form onSubmit={handleSubmit}>
   <h1 class="form-header">LFS Inventory Form</h1>
    <label htmlFor="id" style={{ display: 'block' }}>
      ID
      <span class="required">*</span>
    </label>
    <input
      type="text"
      name="id"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.id}
    />
    {touched.id && errors.id && <div type="text" className ="errors">{errors.id}</div>}
    
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
    
    <button type="submit" disabled={isSubmitting}>
      Submit
    </button>
  </form>
);

// Wrap our form with the using withFormik HoC
const InventoryForm = withFormik({
  // Transform outer props into form values
  mapPropsToValues: props => ({ id: '', date: '' }),
  // Add a custom validation function (this can be async too!)
  validate: (values, props) => {
    const errors = {};
    if (!values.id) {
      errors.id = 'Required';
    } 
    // else if (
    //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    // ) {
    //   errors.email = 'Invalid email address';
    // }
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
    errors => {
      setSubmitting(false);
    } 
    let FD = new FormData()
    for (let name in values) {
      FD.append(name, values[name])
    }
    const xhr = new XMLHttpRequest()
    xhr.open('POST', 'api/form') 
    xhr.send(FD)
    setSubmitting(false);
  },
})(InnerForm);

// Use <MyForm /> anywhere
const Basic = () => (
  <div>
    <InventoryForm />
  </div>
);

export default Basic;
