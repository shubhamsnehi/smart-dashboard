import { Redirect } from 'react-router-dom';
import React from 'react';
import './Home.css';
import SideNav from '../SideNav/SideNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from '../Welcome/Welcome';
import { Route, Switch } from 'react-router-dom';
import Blocks from '../Blocks/Blocks'
class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      name: ''
    }
    this.logout = this.logout.bind(this);
  }

  async componentWillMount() {
    if (sessionStorage.getItem("userData")) {
      // console.log(sessionStorage);
      // this.setState({name: });
    }
    else {
      this.setState({ redirect: true });
    }
  }

  logout() {
    sessionStorage.setItem("userData", "");
    sessionStorage.clear();
    this.setState({ redirect: true });
  }

  render() {

    if (this.state.redirect) {
      return (<Redirect to={'/login'} />)
    }

    return (
      <div id="content-wrapper">
        <div class="container-fluid">

          {/* <!-- Page Heading --> */}
          <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">AWACS</h1>
          </div>

          {/* <!-- Content Row --> */}
          <Blocks />
        </div>
      </div>
    );
  }
}

export default Home;
