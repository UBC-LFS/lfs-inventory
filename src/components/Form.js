import React, {Component} from 'react'
import FieldInput from './FieldInput'

export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state={
        }
    }

    handleChange = e => {
        const {name, value} = e.target;
        // this.setState(() => ({
        //     [label]: value
        // }))
    }

    render() {
        const fields = [
            {'id':'id', 'label':'ID:'}, 
            {'id':'date', 'label': 'Date:'}, 
            {'id':'dateModified', 'label': 'Date Modified:'},
            {'id':'user', 'label': 'User:'},
            {'id':'assetName', 'label': 'Asset Name:'},
            {'id':'amountModelNumber', 'label': 'Asset Model Number:'},
            {'id':'modelYear', 'label': 'Model Year:'},
            {'id':'assetSpecs', 'label': 'Asset Specs:'},
            {'id':'assetSerialNumber', 'label': 'Asset Serial Number:'},
            {'id':'assetTag', 'label': 'Asset Tag:'},
            {'id':'assetOwner', 'label': 'Asset Owner:'},
            {'id':'speedChart', 'label': 'Speed Chart:'},
            {'id':'vendor', 'label': 'Vendor:'},
            {'id':'jvNumber', 'label': 'JV Number:'},
            {'id':'datePurchase', 'label': 'Date Purchased:'},
            {'id':'currentUser', 'label': 'Current User:'},
            {'id':'previousUser', 'label': 'Previous User:'},
            {'id':'assetLocation', 'label': 'Asset Location:'},
            {'id':'disposalDate', 'label': 'Disposal Date:'},
            {'id':'methodOfDisposal', 'label': 'Method of Disposal:'},
            {'id':'userType', 'label': 'User Type:'},
            {'id':'unitAffiliation', 'label': 'Unit Affiliation:'},
            {'id':'cost', 'label': 'Cost:'}];

        const listItems = fields.map((field, index) => {
            return <li key={index}>
                <FieldInput field={field.label} />
            </li>
        });
        return <div>
            <ul>
                {listItems}
            </ul>
        </div>;
    }

}