
import './Login.css';
import React from 'react';
// import {PostData} from '../../services/PostData';
import {Redirect} from 'react-router-dom';
import {Form, Container, Row, Col, Card} from 'react-bootstrap';
import Button from 'react-bootstrap/button';

class Login extends React.Component{

  constructor(props){
    super(props);
    this.state ={
      username: '',
      password: '',
      redirect: false,
      email: '',
          erremail: '',
          errpassword: '',
          bdremail: '',
          bdrpassword: ''
    }
    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
    this.submit = this.submit.bind(this);
  }

    validateemail(email){
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(email == ''){
            this.setState({erremail:'Email is required', bdremail:'red'});
        }
        else if(!reg.test(email)){
            this.setState({erremail:'Enter valid email', bdremail:'red'});
            return true;
        }
        else{
          this.setState({bdremail:'gray'})
      }
    }
    validatepass(password){
        if(password == ''){
            this.setState({errpassword:'Password is required', bdrpassword:'red'});
            return true;
        }
        else if(password.length < 4){
            this.setState({errpassword:'Password must greater than 4', bdrpassword:'red'});
            return true;
        }
        else{
          this.setState({bdrpassword:'gray'})
      }
    }


    valid(){
    var password = document.getElementById('password');
    var email = document.getElementById('email');

    if( this.validateemail(email.value) || this.validatepass(password.value)){
        return true;
    }
    else{
      return false;
    }
    }

    submit() {
    // this.setState({errpassword: '',
    // erremail: '',
    // bdrpassword:'gray'
    // });

    // if(!this.valid()){
      this.login();
    // }
    }

  async login(){

    var pass = ""+document.getElementById('password').value;
    var usr = document.getElementById('email').value;
    const url ='http://localhost:3000/data';
    const response = await fetch(url);
    const data = await response.json();
    if(usr === data.dashboard.user.username && pass === '123'){
      sessionStorage.setItem('userData', data);
      console.log("Logged In");
        this.setState({redirect: true});
    // console.log(data.dashboard.user.username);
    // console.log(usr,pass);
    //for (let i = 0; i < data.length; i++) {
      // console.log("username",data[i].dashboard.username);
      // if(data[i].das == usr && data[i].password == pass)  {
      //   sessionStorage.setItem('userData', data);
      //   this.setState({redirect: true});
      // }    
      // else{
      //   console.log('Login Errrrrr');
      // }
    }
  }

  onChange(e){
    this.setState({
    [e.target.name]: e.target.value
    });
  }

  render(){

    if(sessionStorage.getItem("userData")){
      return (<Redirect to='/home' />)
    }

    if (this.state.redirect){
      return (<Redirect to='/home' />)
    }

    const mystyle = {
      color: "red",
      fontSize: "10px",
      fontFamily: "Arial"
    };

    
  return (        
<div>
    <Container>
        <Row className="justify-content-md-center">
            <Col md={{ span: 7 }}>
              <Form>
                  <Card className="p-5 mr-5 ml-5 mt-2 text-left">
                      <Card.Title className="text-center h1">Login Form TES2536503 <hr/></Card.Title> 
                      <Form.Group>
                          <Form.Label>Email address</Form.Label>
                          <Form.Control style={{borderColor: this.state.bdremail}} type="email" id="email" onChange={this.onChange} placeholder="Enter email" />
                          <p style={mystyle}>{this.state.erremail}</p>
                      </Form.Group>
                      <Form.Group>
                          <Form.Label>Password</Form.Label>
                          <Form.Control style={{borderColor: this.state.bdrpassword}} type="password" id='password' onChange={this.onChange} placeholder="Enter Password" />
                          <p style={mystyle}>{this.state.errpassword}</p>
                      </Form.Group>
                      <Button  onClick={this.submit} variant="primary" type="button">
                          Submit
                      </Button>
                      <p>Didn't have account? <a href="/register">Register</a></p>
                  </Card>
              </Form>
            </Col>
        </Row>
    </Container>   
</div>
);
}
}

export default Login;
