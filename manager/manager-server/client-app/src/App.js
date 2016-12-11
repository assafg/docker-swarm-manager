import React, {Component} from 'react';
import {Link} from 'react-router';
import classNames from 'classnames';

import './App.css';

class App extends Component {
  render() {
    const { location } = this.props;
    return (
      <div>
        <nav className="navbar navbar-dark navbar-fixed-top bg-inverse">
          <a className="navbar-brand" href="#">Swarm Manager</a>
        </nav>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3 col-md-2 sidebar">
              <ul className="nav nav-sidebar">
                <li
                  className={classNames({active: location.pathname === '/overview'})}
                >
                  <Link to="overview">Overview</Link>
                </li>
                <li
                  className={classNames({active: location.pathname === '/actions'})}
                >
                  <Link to="actions">Actions</Link>
                </li>
              </ul>
            </div>
            <div className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 main">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
