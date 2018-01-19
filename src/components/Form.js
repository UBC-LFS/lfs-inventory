import React, {Component} from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state={
            id: '',
            date: '', 
            dateModified: '',
            user: '',
            assetName: '', 
            assetModelNumber: '',
            modelYear: '',
            assetSpecs: '',
            assetSerialNumber: '',
            assetTag: '',
            assetOwner: '',
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
        }

        this.setid = this.setid.bind(this)
        this.setDate = this.setDate.bind(this)
        this.setDateModified = this.setDateModified.bind(this)
        this.setUser = this.setUser.bind(this)
        this.setAssetName = this.setAssetName.bind(this)
        this.setAssetModelNumber = this.setAssetModelNumber.bind(this)
        this.setModelYear = this.setModelYear.bind(this)
        this.setAssetSpecs = this.setAssetSpecs.bind(this)
        this.setAssetSerialNumber = this.setAssetSerialNumber.bind(this)
        this.setAssetTag = this.setAssetTag.bind(this)
        this.setAssetOwner = this.setAssetOwner.bind(this)
        this.setSpeedChart = this.setSpeedChart.bind(this)
        this.setVendor = this.setVendor.bind(this)
        this.setJVNumber = this.setJVNumber.bind(this)
        this.setDatePurchased = this.setDatePurchased.bind(this)
        this.setCurrentUser = this.setCurrentUser.bind(this)
        this.setPreviousUser = this.setPreviousUser.bind(this)
        this.setAssetLocation = this.setAssetLocation.bind(this)
        this.setDisposalDate = this.setDisposalDate.bind(this)
        this.setMethodOfDisposal = this.setMethodOfDisposal.bind(this)
        this.setUserType = this.setUserType.bind(this)
        this.setUnitAffiliation = this.setUnitAffiliation.bind(this)
        this.setCost = this.setCost.bind(this)
    }

    setid (event) {
        this.setState({ id: event.target.value })
    }

    setDate (event) {
        this.setState({ date: event.target.value })
    }

    setDateModified () {
        this.setState({ date: new Date().toJSON().slice(0, 10).toString() })
    }

    setUser (event) {
        this.setState({ user: event.target.value })
    }

    setAssetName (event) {
        this.setState({ assetName: event.target.value })
    }

    setAssetModelNumber (event) {
        this.setState({ assetModelNumber: event.target.value })
    }

    setModelYear (event) {
        this.setState({ modelYear: event.target.value })
    }

    setAssetSpecs (event) {
        this.setState({ assetSpecs: event.target.value })
    }

    setAssetSerialNumber (event) {
        this.setState({ assetSerialNumber: event.target.value })
    }

    setAssetTag (event) {
        this.setState({ assetTag: event.target.value })
    }

    setAssetOwner (event) {
        this.setState({ assetOwner: event.target.value })
    }

    setSpeedChart (event) {
        this.setState({ speedChart: event.target.value })
    }

    setVendor (event) {
        this.setState({ vendor: event.target.value })
    }

    setJVNumber (event) {
        this.setState({ jvNumber: event.target.value })
    }

    setDatePurchased (event) {
        this.setState({ datePurchased: event.target.value })
    }

    setCurrentUser (event) {
        this.setState({ currentUser: event.target.value })
    }

    setPreviousUser (event) {
        this.setState({ previousUser: event.target.value })
    }

    setAssetLocation (event) {
        this.setState({ assetLocation: event.target.value })
    }

    setDisposalDate (event) {
        this.setState({ disposalDate: event.target.value })
    }

    setMethodOfDisposal (event) {
        this.setState({ methodOfDisposal: event.target.value })
    }

    setUserType (event) {
        this.setState({ userType: event.target.value })
    }

    setUnitAffiliation (event) {
        this.setState({ unitAffiliation: event.target.value })
    }

    setCost(event) {
        this.setState({ cost: event.target.value })
    }

    render() {
        return (
            <div>
                <div className= 'form'>
                    <form onSubmit={this.props.handleSubmit(this.state)}>
                        <div>
                            <label>ID:&nbsp;</label>
                            <input type='text' id='id' value={this.state.id} onChange={this.setid} required/>
                        </div>
                        <div>
                            <label>Date (yyyy-mm-dd):&nbsp;</label>
                            <input type='date' id='date' value={this.state.date} onChange={this.setDate} required/>
                        </div>
                        <div>
                            <label>User:&nbsp;</label>
                            <input type='text' id='user' value={this.state.user} onChange={this.setUser} required/>
                        </div>
                        <div>
                            <label>Asset Name:&nbsp;</label>
                            <input type='text' id='assetName' value={this.state.assetName} onChange={this.setAssetName} required/>
                        </div>
                        <div>
                            <label>Asset Model Number:&nbsp;</label>
                            <input type='number' id='assetModelNumber' value={this.state.assetModelNumber} onChange={this.setAssetModelNumber} required/>
                        </div>
                        <div>
                            <label>Model Year:&nbsp;</label>
                            <input type='number' id='modelYear' value={this.state.modelYear} onChange={this.setModelYear} required/>
                        </div>
                        <div>
                            <label>Asset Specs:&nbsp;</label>
                            <input type='text' id='assetSpecs' value={this.state.assetSpecs} onChange={this.setAssetSpecs} required/>
                        </div>
                        <div>
                            <label>Asset Serial Number:&nbsp;</label>
                            <input type='number' id='assetSerialNumber' value={this.state.assetSerialNumber} onChange={this.setAssetSerialNumber} required/>
                        </div>
                        <div>
                            <label>Asset Tag:&nbsp;</label>
                            <input type='text' id='assetTag' value={this.state.assetTag} onChange={this.setAssetTag} required/>
                        </div>
                        <div>
                            <label>Asset Owner:&nbsp;</label>
                            <input type='text' id='assetOwner' value={this.state.assetOwner} onChange={this.setAssetOwner} required/>
                        </div>
                        <div>
                            <label>Speed Chart:&nbsp;</label>
                            <input type='text' id='speedChart' value={this.state.speedChart} onChange={this.setSpeedChart} required/>
                        </div>
                        <div>
                            <label>Vendor:&nbsp;</label>
                            <input type='text' id='vendor' value={this.state.vendor} onChange={this.setVendor} required/>
                        </div>
                        <div>
                            <label>JV Number:&nbsp;</label>
                            <input type='number' id='jvNumber' value={this.state.jvNumber} onChange={this.setJVNumber} required/>
                        </div>
                        <div>
                            <label>Date Purchased (yyyy-mm-dd):&nbsp;</label>
                            <input type='date' id='datePurchased' value={this.state.datePurchased} onChange={this.setDatePurchased} required/>
                        </div>
                        <div>
                            <label>Current User:&nbsp;</label>
                            <input type='text' id='currentUser' value={this.state.currentUser} onChange={this.setCurrentUser} required/>
                        </div>
                        <div>
                            <label>Previous User:&nbsp;</label>
                            <input type='text' id='previousUser' value={this.state.previousUser} onChange={this.setPreviousUser} required/>
                        </div>
                        <div>
                            <label>Asset Location:&nbsp;</label>
                            <input type='text' id='assetLocation' value={this.state.assetLocation} onChange={this.setAssetLocation} required/>
                        </div>
                        <div>
                            <label>Disposal Date (yyyy-mm-dd):&nbsp;</label>
                            <input type='date' id='disposalDate' value={this.state.disposalDate} onChange={this.setDisposalDate} required/>
                        </div>
                        <div>
                            <label>Method of Disposal:&nbsp;</label>
                            <input type='text' id='methodOfDisposal' value={this.state.methodOfDisposal} onChange={this.setMethodOfDisposal} required/>
                        </div>
                        <div>
                            <label>User Type:&nbsp;</label>
                            <input type='text' id='userType' value={this.state.userType} onChange={this.setUserType} required/>
                        </div>
                        <div>
                            <label>Unit Affiliation:&nbsp;</label>
                            <input type='text' id='unitAffiliation' value={this.state.unitAffiliation} onChange={this.setUnitAffiliation} required/>
                        </div>
                        <div>
                            <label>Cost:&nbsp;</label>
                            <input type='number' id='cost' value={this.state.cost} onChange={this.setCost} required/>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                        <br /><br />
                        <input className='btn' type='submit' value='Submit' />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
   
}