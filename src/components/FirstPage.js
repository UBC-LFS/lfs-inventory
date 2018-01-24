import React, {Component} from 'react'

export default class FirstPage extends Component {
    constructor(props) {
        super(props)
        this.state={
        }
    }

    saveAndContinue(event) {
        event.preventDefault()

        var data = {
            id: this.refs.id.getDOMNode().value,
            user: this.refs.user.getDOMNode().value
        }
        this.props.saveValues(data)
        this.props.nextStep()
    }

    render() {
        return <div>
            <label>{this.props.field}</label>
            <input></input>
        </div>;
    }

}