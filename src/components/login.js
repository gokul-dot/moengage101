import React, { Component } from "react";
import '/Users/gokul.reddy/Downloads/login-signup-react-bootstrap-main/src/login.css'
export default class Login extends Component {
    render() {
        return (
        <div className="auth-wrapper">
          <div className="auth-inner">
            <form>
                <h3><img className="img-size-f" src={require('/Users/gokul.reddy/Downloads/login-signup-react-bootstrap-main/src/e4d86a77d7b0ba23a56cb823dc23208f48cc9d9e-200x200.webp')} /></h3>

                <div className="mb-3">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                    />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                    />
                </div>
                <div className="mb-3">
                    <div className="custom-control custom-checkbox">
                        {/* <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                        /> */}
                        {/* <label className="custom-control-label" htmlFor="customCheck1">Remember me</label> */}
                    </div>
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
            </div>
            </div>

        );
    }
}


