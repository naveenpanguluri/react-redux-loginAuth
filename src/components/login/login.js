import React, { Component } from 'react';
import '../styles.css';
import { connect } from 'react-redux';
import { addToken } from '../../actions/index';


const loginFormObj = [
  {
    name: 'username',
    type: 'text',
    label: 'Username',
    errorMsg: 'Please enter a valid Username.',
  
  },
  {
    name: 'password',
    type: 'password',
    label: 'Password',
    errorMsg: 'Input Password which contain min 8 letter password, with at least a symbol, upper and lower case letters and a number.',
  
  },
]


class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      validUsername: 'true',
      validPassword: 'true',
      token: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    let name = event.target.name;
    this.setState({
      [name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("username", this.state.username);
    console.log("password", this.state.password);

    var regUsername = /^[a-zA-Z0-9]+$/;
    var valUsername = regUsername.test(this.state.username);
    console.log("valUsername", valUsername);

    var regPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    var valPassword = regPassword.test(this.state.password);
    console.log("valPassword", valPassword);

    if (valUsername && valPassword){

      console.log("true...valid");
      this.setState({
        validUsername: true,
        validPassword: true
      });

      var token = "abcdefg123456";
      console.log("token", token);
      this.props.addToken(token);

      setTimeout(() => {
        this.setState({ token: this.props.state.LoginToken.token });
        localStorage.setItem('token', this.props.state.LoginToken.token);
        console.log("localstorage", localStorage.getItem('token'));
        this.props.history.push("/home");
      }, 3000);

    }else{

      console.log("false...invalid");
      this.setState({
        validUsername: false,
        validPassword: false
      });

    }

  }

  render() {
    console.log("token render..................", this.props.state.LoginToken.token);
    
    return (
      <div className="container">
      <h1 className="mt-5">Login</h1>

        <form className="my-5" onSubmit={this.handleSubmit}>

          {loginFormObj.map((loginForm, i) =>
            <div key={i} className="form-group">
              <label>{loginForm.label}:</label>
              <input type={loginForm.type} className="form-control" name={loginForm.name} value={this.state[loginForm.name]} onChange={this.handleChange} />
              <p className="m-0 r_clr fs_14">{this.state.validUsername ? '' : loginForm.errorMsg}</p>
            </div>
          )}

          <input type="submit" className="btn btn-primary" value="Login" />
        </form>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state: state
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToken: (token) => dispatch(addToken(token))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
