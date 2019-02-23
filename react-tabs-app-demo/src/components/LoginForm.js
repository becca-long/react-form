import React from 'react'

const LoginForm = ({handleSubmit, handleChangePassword, handleChangeUsername, showAlert, alertMessage, usernameVal, passwordVal}) => {
  return (
    <div className="box">
        <h1 className="title">Login</h1>
            {showAlert ? <div className="notification is-danger">
                <button className="delete"></button>
                {alertMessage}
                </div> : null}
        <form>
            <div className="field">
                <label className="label">Username</label>
                <div className="control">
                    <input placeholder="Username" 
                           type="text" 
                           id="usernameInput" 
                           className="input is-medium" 
                           value={usernameVal}
                           onChange={(event) => handleChangeUsername(event)}/>
                </div>
            </div>
            <div className="field">
                <label className="label">Password</label>
                <div className="control">
                    <input placeholder="Password" 
                           type="password" 
                           className="input is-medium" 
                           value={passwordVal}
                           onChange={(event) => handleChangePassword(event)}/>
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <button className="button is-primary is-medium" 
                                                type="submit"
                                                onClick={(event) => handleSubmit(event)}>
                                        Login
                    </button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default LoginForm
