import React from 'react';
import { Redirect } from 'react-router-dom';


class SideNav extends React.Component{

constructor(){
  super();
    this.state = {loading: true,
    person: '',
    datar:'',
    show : false,
    errmsg:'',
    login:'login'
    };
    this.logout = this.logout.bind(this);
  } 
  

  async componentDidMount() {
    const url = 'http://localhost:3000/data';
    const response = await fetch(url);
    const data = await response.json();
    //console.log(Object.keys(data.dashboard));
    var sidecontent = Object.keys(data.dashboard);
    this.setState({person: sidecontent, loading: false});
  }

  logout(){
    sessionStorage.setItem("userData","");
    sessionStorage.clear();
    this.setState({redirect:true});
  }


  render() {
    
    if (this.state.redirect){
      return (<Redirect to="/login" />);
    }

    return(
      <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion pl-2" id="accordionSidebar">
        <hr class="sidebar-divider"/>
        <div class="sidebar-heading">
          Interface
          <button type="button" className="btn btn-light" onClick={this.logout}>Logout</button>
        </div>
        {this.state.loading ? <div>Loading...</div> : <div>{this.state.person.map((item) => 
        <li class="nav-item">
          <a class="nav-link collapsed text-uppercase" href={"/"+item} aria-expanded="true" aria-controls="collapseTwo">
            <i class="fas fa-fw fa-user"></i>
            <span>{item}</span>
          </a>
        </li>
        )}</div>
        }
      </ul>
    );
  }
}

export default SideNav;