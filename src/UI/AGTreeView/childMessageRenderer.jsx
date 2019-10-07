import React, { Component } from 'react';
import Text from "../Text";



export default class ChildMessageRenderer extends Component {
	state = {
		hideForm: true
	};
	onClick = () => {
		console.count();
		this.setState({
			hideForm: !this.state.hideForm
        });
    };

	render() {
        const { hideForm } = this.state

		return (
			<span>
				<button  onClick={this.onClick} className="btn btn-info">
					Expand
				</button>
                {!hideForm && <FormContent />}
			</span>
		);
	}
}


//render form insice a cell
const FormContent= () =>{
    return (
        <>
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>
            <hr/>

            <label htmlFor="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" required/>

            <label htmlFor="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required/>

            <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
            <input type="password" placeholder="Repeat Password" name="psw-repeat" required/>
            <hr/>

            <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
            <button type="submit" >Register</button>

            <div >
                <p>Already have an account? <a href="#">Sign in</a>.</p>
            </div>
        </>
    )
  }