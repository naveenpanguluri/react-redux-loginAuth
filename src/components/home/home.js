import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../styles.css';

const homeFormObj = [
  {
    name: 'name',
    type: 'text',
    label: 'Name',
    errorMsg: 'Please enter a valid name.',
    validVal: 'validName'
  },
  {
    name: 'email',
    type: 'email',
    label: 'Email',
    errorMsg: 'Please enter a valid email address.',
    validVal: 'validEmail'
  },
  {
    name: 'phone',
    type: 'number',
    label: 'Phone',
    errorMsg: 'Please enter a valid phone number with exact 10 digits',
    validVal: 'validPhone'
  },
]

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      validEmail: 'true',
      validName: 'true',
      validPhone: 'true'
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, key){
    if(key === 'name'){

      this.setState({name: event.target.value});
      var regName = /^[a-zA-Z ]+$/;
      var valName = regName.test(event.target.value);
      console.log("valName", valName);

      if(valName === true){
        console.log("true...valid");
        this.setState({validName: true});
      }else{
        console.log("false...valid");
        this.setState({validName: false});
      }

    }else if (key === 'email') {

      this.setState({email: event.target.value});
      var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      var valEmail = regEmail.test(event.target.value);
      console.log("valEmail", valEmail);
      if(valEmail === true){
        console.log("true...valid");
        this.setState({validEmail: true});
      }else{
        console.log("false...valid");
        this.setState({validEmail: false});
      }

    }else if (key === 'phone'){

      this.setState({phone: event.target.value});
      var regPhone = /^\d{10}$/g;
      var valPhone = regPhone.test(event.target.value);
      console.log("valPhone", valPhone);
      if(valPhone === true){
        console.log("true...valid");
        this.setState({validPhone: true});
      }else{
        console.log("false...valid");
        this.setState({validPhone: false});
      }

    }
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("name", this.state.name);
    console.log("email", this.state.email);
    console.log("phone", this.state.phone);
  }

  render() {
    console.log("token home..................", this.props.state.LoginToken.token);
    return (
      <div className="container">
      <h1 className="mt-5">Home</h1>

        <form className="my-5" onSubmit={this.handleSubmit}>

          {homeFormObj.map((homeForm, i) =>
            <div key={i} className="form-group">
              <label>{homeForm.label}:</label>
              <input type={homeForm.type} className="form-control" name={homeForm.name} value={this.state[homeForm.name]} onChange={(e) => this.handleChange(e, homeForm.name)} />
              <p className="m-0 r_clr fs_14">{this.state[homeForm.validVal] ? '' : homeForm.errorMsg}</p>
            </div>
          )}

          <input type="submit" className="btn btn-primary" value="Submit" />
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

export default connect(mapStateToProps)(Home);
