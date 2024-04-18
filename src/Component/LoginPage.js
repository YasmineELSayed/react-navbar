import React, { Component } from 'react';
import "./LoginPage.css";
import logo1 from "../Images/logo1.png"
class LoginPage extends Component {
  render() {
    return (
      <div className="login">
       <div className="image-container">
      <img src={logo1} alt="Index InfoTech" className="left-aligned-image"

      />
        </div>
        <form>
        <div className="text_area" >
            <input 
              type="text"
              id="Company"
              name="Company"
              placeholder='Company' style={{ margin:'20px'}}
              className="text_input"  
            />
          </div>
          <div className="text_area">
            <input
              type="text"
              id="username"
              name="username"
              placeholder='Username' style={{ margin:'20px'}}
              className="text_input"
            />
          </div>
          <div className="text_area">
            <input
              type="password"
              id="password"
              name="password"
              placeholder='Password' style={{ margin:'20px'}}
             className="text_input"
            />
          </div>
          <input
            type="submit"
            value="Login"
            className="btn"
          />
        <a className="link" href="/Reset">Reset Password</a>
        </form>
      </div>
    )
  }
}    
export default LoginPage;