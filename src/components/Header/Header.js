import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Navbar } from 'react-bootstrap';
import SideNav from '../SideNav/SideNav';
import Routes from '../../routes';

class Header extends React.Component {

  render() {
    return (
      <div>
        <Navbar className="bg-primary text-light">
          <Navbar.Brand className="text-light h2" href="#home">My Dashboard</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="text-light">
              Designed By : <a href="#login" className="text-light"> Shubham </a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
