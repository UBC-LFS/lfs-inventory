import React, {Component} from 'react'

export default class FieldInput extends Component {
    constructor(props) {
        super(props)
        this.state={
        }
    }

    render() {
        return <div>
            <label>{this.props.field}</label>
            <input></input>
        </div>;
    }

}