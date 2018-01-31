import React, {Component} from 'react'

export default class FourthPage extends Component {
    constructor(props) {
        super(props)
        this.state={
        }
    }

    render() {
        return (
            <div>
            <div className='row'>
                <div className='six columns'>
                <label>Your email</label>
                <input
                    className='u-full-width required'
                    placeholder='test@mailbox.com'
                    type='email'
                    onChange={this.handleEmailChanged}
                    value={this.state.email}
                    autoFocus
                />
                </div>
            </div>
            <div className='row'>
                <div className='six columns'>
                <label>Confirm email</label>
                <input
                    className='u-full-width'
                    placeholder='Confirm email'
                    type='email'
                    onChange={this.handleEmailConfirmChanged}
                    value={this.state.emailConfirm}
                />
                </div>
            </div>
            </div>
        )
    }
}