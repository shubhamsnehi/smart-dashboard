import React from "react";
import './Welcome.css';
import Routes from '../../routes';
import SideNav from '../SideNav/SideNav';
import { Redirect } from 'react-router-dom';

class Welcome extends React.Component {

  constructor() {
    super();
    this.state = {
      redirect: ''
    }
  }

  render() {
    if (sessionStorage.getItem("userData")) {
      return (
        <div id="wrapper">
          <SideNav />
          <Routes />
        </div>
      );
    }

    if (this.state.redirect) {
      return (
        <div id="wrapper">
          <SideNav />
          <Routes />
        </div>
      );
    }
    return (
      <div>
        <Routes />
      </div>
    );
  }
}

export default Welcome;
