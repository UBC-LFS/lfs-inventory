import React, {Component} from 'react'

export default class SecondPage extends Component {
    constructor() {
        super()
        this.state={
            assetName: '',
            assetModelNumber: '', 
            assetSpecs: '',
            assetSerialNumber: '',
            assetTag: '',
            assetOwner: ''
        }
    this.handleAssetNameChange = this.handleAssetNameChange.bind(this);
    this.handleAssetModelChange = this.handleAssetModelChange.bind(this);
    this.handleAssetSpecsChange = this.handleAssetSpecsChange.bind(this);
    this.handleAssetSerialChange = this.handleAssetSerialChange.bind(this);
    this.handleAssetTagChange = this.handleAssetTagChange.bind(this);
    this.handleAssetOwnerChange = this.handleAssetOwnerChange.bind(this);
    }

    handleAssetNameChange (event) {
        this.setState({assetName: event.target.value})
    }

    handleAssetModelChange (event) {
        this.setState({assetModelNumber: event.target.value})
    }

    handleAssetSpecsChange (event) {
        this.setState({assetSpecs: event.target.value})
    }

    handleAssetSerialChange (event) {
        this.setState({assetSerialNumber: event.target.value})
    }

    handleAssetTagChange (event) {
        this.setState({assetTag: event.target.value})
    }
    handleAssetOwnerChange (event) {
        this.setState({assetOwner: event.target.value})
    }

    render() {
        return (
      <div>
        <div className='row'>
          <div className='six columns'>
            <label>Asset Name</label>
            <input
              className='u-full-width'
              placeholder=''
              type='text'
              onChange={this.handleEmailChanged}
              value={this.state.email}
              autoFocus
            />
          </div>
        </div>
        <div className='row'>
          <div className='six columns'>
            <label>Asset Model Number</label>
            <input
              className='u-full-width'
              placeholder=''
              type='number'
              onChange={this.handleEmailConfirmChanged}
              value={this.state.emailConfirm}
            />
          </div>
        </div>
        <div className='row'>
          <div className='six columns'>
            <label>Asset Specs</label>
            <input
              className='u-full-width'
              placeholder=''
              type='text'
              onChange={this.handleEmailConfirmChanged}
              value={this.state.emailConfirm}
            />
          </div>
        </div>
         <div className='row'>
           <div className='six columns'>
             <label>Asset Serial Number</label>
             <input
               className='u-full-width'
               placeholder=''
               type='number'
               onChange={this.handleEmailConfirmChanged}
               value={this.state.emailConfirm}
             />
           </div>
         </div>
          <div className='row'>
            <div className='six columns'>
              <label>Asset Tag</label>
              <input
                className='u-full-width'
                placeholder=''
                type='text'
                onChange={this.handleEmailConfirmChanged}
                value={this.state.emailConfirm}
              />
            </div>
          </div>
           <div className='row'>
             <div className='six columns'>
               <label>Asset Ownder</label>
               <input
                 className='u-full-width'
                 placeholder=''
                 type='text'
                 onChange={this.handleEmailConfirmChanged}
                 value={this.state.emailConfirm}
               />
             </div>
           </div>
        </div>
        )
    }
}