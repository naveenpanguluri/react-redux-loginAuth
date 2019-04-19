import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

import Login from '../src/components/login/login';
import Home from '../src/components/home/home';
import { connect } from 'react-redux';


class App extends Component {
  render() {
    console.log("app token render..................", this.props.state.LoginToken.token);

    return (
      <div className="">

        <Router>
          <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              <li><Link to={'/login'} className="nav-link"> Login </Link></li>
              <li><Link to={'/home'} className="nav-link">Home</Link></li>
            </ul>
            </nav>
            <hr />

            <Switch>
              <Route path='/login' exact component={Login} />
              {
                this.props.state.LoginToken.token ?
                  <Route path='/home' component={Home} />
                  : null
              }
              <Redirect to={{ pathname: '/login' }} />
            </Switch>


          </div>
        </Router>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state: state
  };
}

export default connect(mapStateToProps)(App);
