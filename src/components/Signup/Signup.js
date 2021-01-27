import './Signup.css';
import React from 'react';
import {PostData} from '../../services/PostData';
import {Redirect} from 'react-router-dom';

class Signup extends React.Component {


  constructor(props){
    super(props);
    this.state ={
      fname:'',
      lname:'',
      username: '',
      email: '',
      password: '',
      redirect: false    
    }
    this.signup = this.signup.bind(this);
    this.onChange = this.onChange.bind(this);

  }

  async signup(){
    PostData(this.state).then((result)=>{
      let responseJSON = result;
      if(responseJSON.userData){
        sessionStorage.setItem('userData', responseJSON);
        this.setState({
          redirect: true
          });
      }
      else{
        console.log('Login Error!!!!');
      }
    })
    // '{"fname":"Mahatma","lname":"Gandhi","username":"gandhiji","email":"mahatma@gmail.com","password":"123456"}'
    // } );

  //   const url ='http://localhost:3000/customers';

  //   console.log(this.state);
  //   const data = JSON.stringify(this.state);
  //   console.log(data);

  //   return new Promise((resolve, reject) =>{
  //   fetch(url,{
  //     method: 'POST',
  //     body: JSON.stringify(this.state)
  //   }).then((response) => response.json())
  //     .then((json) => {
  //       console.log('Response'+json);
  //       resolve(json);
  //     })
  //     .catch((error) => {
  //       reject(error);
  //     });
  // })
}

  onChange(e){
    this.setState({
    [e.target.name]: e.target.value
    });
  }


  render() {


    if(sessionStorage.getItem("userData")){
      return (<Redirect to='/login' />)
    }

    if (this.state.redirect){
      return (<Redirect to='/login' />)
    }

  return (
    <div class="row small-up-2 medium-up-3 large-up-4">
      <div class="column">
          <h2>Register Page</h2>
          <div class="row small-up-2 medium-up-4 large-up-4" style={{marginLeft:"50px"}}>
            <label>First Name</label>
            <input type="text" name="fname" placeholder="Name" onChange={this.onChange}/>
            <label>Last Name</label>
            <input type="text" name="lname" placeholder="Name" onChange={this.onChange}/>
            <label>Username</label>
            <input type="text" name="username" placeholder="Username" onChange={this.onChange}/>
            <label>Email</label>
            <input type="text" name="email" placeholder="Email" onChange={this.onChange}/>
            <label>Password</label>
            <input type="text" name="password" placeholder="Password" onChange={this.onChange}/>
            <input type="submit" value="Sign Up" onClick={this.signup} className="button"/>
            <a href="/login">Cancle</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
