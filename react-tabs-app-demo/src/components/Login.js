import React, { Component } from 'react'
import Success from './Success'
import LoginForm from './LoginForm'

class Login extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         password: '',
         showAlert: false,
         alertMessage: '',
         success: false
      }

      this.handleChangeUsername = this.handleChangeUsername.bind(this)
      this.handleChangePassword = this.handleChangePassword.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleReset = this.handleReset.bind(this)
    }
    
    handleChangeUsername(event) {
        this.setState({username: event.target.value})
    }

    handleChangePassword(event) {
        this.setState({password: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault()

        if (!this.state.username && this.state.password !== '') {
            this.setState({showAlert: true, alertMessage: 'Please enter a Username.'})
        } 
        else if (!this.state.password && this.state.username !== '') {
            this.setState({showAlert: true, alertMessage: 'Please enter a Password.'})
        } 
        else if (!this.state.username && !this.state.password) {
            this.setState({showAlert: true, alertMessage: 'Please enter a Username and Password.'})
        } 
        else {
            this.clearAlert()
            this.setState({success: true})
        }
    }

    clearAlert(event) {
        this.setState({showAlert: false, alertMessage: ''})
    }

    handleReset() {
        this.clearAlert()
        this.setState({username: '', password: '', success: false})
    }

    render() {
        return (
            <section className="content">
                <div style={{height: '40px'}}></div>
                <div className="columns is-centered">
                    <div className="column is-half">
                    
                    {this.state.success ? 
                        <Success reset={this.handleReset}/> : 
                        <LoginForm handleSubmit={this.handleSubmit}
                                   handleChangePassword={this.handleChangePassword}
                                   handleChangeUsername={this.handleChangeUsername}
                                   showAlert={this.state.showAlert}
                                   alertMessage={this.state.alertMessage}
                                   usernameVal={this.state.username}
                                   passwordVal={this.state.password}/>}
                    </div>
                </div>
            </section>
    
        )
    }
}

export default Login