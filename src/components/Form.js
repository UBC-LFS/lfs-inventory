import React, {Component} from 'react'
import FieldInput from './FieldInput'
import FirstPage from './FirstPage'
import SecondPage from './SecondPage'
import ThirdPage from './ThirdPage'
import FourthPage from './FourthPage'
import FifthPage from './FifthPage'

export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state={
            step: 0
        }
    }

    handleChange = e => {
        const {name, value} = e.target;
        // this.setState(() => ({
        //     [label]: value
        // }))
    }

    nextStep() {
        this.setState({
          step : this.state.step + 1
        })
    }

    previousStep() {
        this.setState({
          step : this.state.step - 1
        })
    }

    render() {
        const fieldsOne = [
            {'id':'id', 'label':'ID:'}, 
            {'id':'date', 'label': 'Date:'}, 
            {'id':'dateModified', 'label': 'Date Modified:'},
            {'id':'user', 'label': 'User:'}
        ];

        const fieldsTwo = [
            {'id':'assetName', 'label': 'Asset Name:'},
            {'id':'assetModelNumber', 'label': 'Asset Model Number:'},
            {'id':'assetSpecs', 'label': 'Asset Specs:'},
            {'id':'assetSerialNumber', 'label': 'Asset Serial Number:'},
            {'id':'assetTag', 'label': 'Asset Tag:'},
            {'id':'assetOwner', 'label': 'Asset Owner:'}
        ];

        const fieldsThree = [
            {'id':'modelYear', 'label': 'Model Year:'},
            {'id':'vendor', 'label': 'Vendor:'},
            {'id':'jvNumber', 'label': 'JV Number:'},
            {'id':'speedChart', 'label': 'Speed Chart:'}
        ];

        const fieldsFour = [
            {'id':'assetLocation', 'label': 'Asset Location:'},
            {'id':'datePurchase', 'label': 'Date Purchased:'},
            {'id':'currentUser', 'label': 'Current User:'},
            {'id':'previousUser', 'label': 'Previous User:'}
        ];

        const fieldsFive = [
            {'id':'methodOfDisposal', 'label': 'Method of Disposal:'},
            {'id':'disposalDate', 'label': 'Disposal Date:'},
            {'id':'unitAffiliation', 'label': 'Unit Affiliation:'},
            {'id':'userType', 'label': 'User Type:'},
            {'id':'cost', 'label': 'Cost:'}
        ]

        const listItemsOne = fieldsOne.map((field, index) => {
            return <li key={index}>
                <FirstPage field = {field.label}
                nextStep={this.nextStep}
                previousStep={this.previousStep}
                saveValues={this.saveValues}/>
            </li>
        });

        const listItemsTwo = fieldsTwo.map((field, index) => {
            return <li key={index}>
                <SecondPage field = {field.label}
                nextStep={this.nextStep}
                previousStep={this.previousStep}
                saveValues={this.saveValues}/>
            </li>
        });

        const listItemsThree = fieldsThree.map((field, index) => {
            return <li key={index}>
                <ThirdPage field = {field.label}
                nextStep={this.nextStep}
                previousStep={this.previousStep}
                saveValues={this.saveValues}/>
            </li>
        });

        const listItemsFour = fieldsFour.map((field, index) => {
            return <li key={index}>
                <FourthPage field = {field.label}
                nextStep={this.nextStep}
                previousStep={this.previousStep}
                saveValues={this.saveValues}/>
            </li>
        });

        const listItemsFive = fieldsFive.map((field, index) => {
            return <li key={index}>
                <FifthPage field = {field.label}
                nextStep={this.nextStep}
                previousStep={this.previousStep}
                saveValues={this.saveValues}/>
            </li>
        });

        /*
        const listItems = fields.map((field, index) => {
            return <li key={index}>
                <SecondPage field = {field.label}
                nextStep={this.nextStep}
                previousStep={this.previousStep}
                saveValues={this.saveValues}/>
            </li>
        });
        */
        return <div>
            <ul>
                {listItemsOne}
                {listItemsTwo}
                {listItemsThree}
                {listItemsFour}
                {listItemsFive}
            </ul>
        </div>;
    }

}