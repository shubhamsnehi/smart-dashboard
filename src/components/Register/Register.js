import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Container, Row, Col, Card} from 'react-bootstrap';
import Button from 'react-bootstrap/button';
import SideNav from '../SideNav/SideNav';

class Register extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
          title: '', 
          fname:'',
          lname: '',
          email: '',
          password: '',
          cpassword:'', 
          errtitle:'' ,         
          errfname:'',
          errlname: '',
          erremail: '',
          errpassword: '',
          errcpassword:'',
          bdrtitle:'',          
          bdrfname:'',
          bdrlname: '',
          bdremail: '',
          bdrpassword: '',
          bdrcpassword:''
        };
        this.validateemail=this.validateemail.bind(this);
      }


        validatetitle(title){
            if(title == '' || title == 'Select'){
                this.setState({errtitle:'Title is required', bdrtitle:'red'})
            }
            else{
                this.setState({bdrtitle:'gray',errtitle:''})
            }
        }

        validatefname(fname){
            if(fname == ''){
                this.setState({errfname:'First Name is required', bdrfname:'red'})
            }
            else if(Number(fname)){
                this.setState({errfname:'Please enter valid Name', bdrfname:'red'})
            }
            else{
                this.setState({bdrfname:'gray',errfname:''})
            }
        }

        validatelname(lname){
            if(lname == ''){
                this.setState({errlname:'Last Name is required', bdrlname:'red'})
            }
            else if(Number(lname)){
                this.setState({errfname:'Please enter valid Name', bdrlname:'red'})
            }
            else{
                this.setState({bdrlname:'gray',errlname:''})
            }
        }
         
        validateemail(email){
            let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if(email == ''){
                this.setState({erremail:'Email is required', bdremail:'red'})
            }
            else if(!reg.test(email)){
                this.setState({erremail:'Enter valid email', bdremail:'red'})
            }
            else{
                this.setState({bdremail:'gray',erremail:''})
            }
        }

        validatepass(password){
            if(password == ''){
                this.setState({errpassword:'Password is required', bdrpassword:'red'})
            }
            else if(password.length < 4){
                this.setState({errpassword:'Password must greater than 4', bdrpassword:'red'})
            }
            else{
                this.setState({bdrpassword:'gray',errpassword:''})
            }
        }

        validatecpass(cpassword,password){
            console.log(cpassword.length);
            if(password.length == '' && cpassword.length == ''){
                    this.setState({errcpassword:'Confirm password is required', bdrcpassword:'red'})
            }
            else if( cpassword !== password){
                this.setState({errcpassword:'Password does not match', bdrcpassword:'red'})
            }
            else{
                this.setState({bdrcpassword:'gray',errcpassword:''})
            }
        }
    
    
      valid(){
        var title = document.getElementById('title');
        var fname = document.getElementById('fname');
        var lname = document.getElementById('lname');
        var password = document.getElementById('password');
        var cpassword = document.getElementById('cpassword');
        var email = document.getElementById('email');

        if( this.validatefname(fname.value) || this.validatelname(lname.value) ||  this.validateemail(email.value) || 
        this.validatepass(password.value) || this.validatecpass(cpassword.value,password.value) || this.validatetitle(title.value)){
            return true;
        }
        else{
          return false;
        }
      }
    
      submit() {
        this.setState({errpassword: '',
        errfname:'',
        errlname: '',
        erremail: '',
        errcpassword:'',
        borderclr: ''
    })

        if(this.valid()){
          alert('submited')
        }
      }
    

    render() {
        const mystyle = {
            color: "red",
            fontSize: "10px",
            fontFamily: "Arial"
          };
    
          
        return (        
            <div id="wrapper">
            <SideNav/>
            <div id="content-wrapper" class="d-flex flex-column">
              <div class="container-fluid">
              
          <Container>
              <Row className="justify-content-md-center">
                  <Col md={{ span: 10 }}>
                    <Form>
                        <Card className="m-5 p-5 text-left">
                            <Card.Title className="text-center h1">Register Form<hr/></Card.Title> 
                            <Row>
                                <Col xs lg="2">
                                    <Form.Group>
                                        <Form.Label>Title</Form.Label>
                                        <Form.Control style={{borderColor: this.state.bdrtitle}} onChange={(event) =>{this.validatetitle(event)}} id="title" as="select">
                                          <option>Select</option>
                                          <option>Mr</option>
                                          <option>Mrs</option>
                                          <option>Miss</option>
                                          <option>Ms</option>
                                        </Form.Control>
                                        <p style={mystyle}>{this.state.errtitle}</p>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control style={{borderColor: this.state.bdrfname}} type="text" id='fname' onChange={(event) =>{this.validatefname(event)}} placeholder="Enter First Name" />
                                        <p style={mystyle}>{this.state.errfname}</p>
                                    </Form.Group> 
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control style={{borderColor: this.state.bdrlname}} type="text" id='lname' onChange={(event) =>{this.validatelname(event)}} placeholder="Enter Last Name" />
                                        <p style={mystyle}>{this.state.errlname}</p>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control style={{borderColor: this.state.bdremail}} type="email" id="email" onChange={(event) =>{this.validateemail(event)}} placeholder="Enter email" />
                                        <p style={mystyle}>{this.state.erremail}</p>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control style={{borderColor: this.state.bdrpassword}} type="password" id='password' onChange={(event) =>{this.validatepass(event)}} placeholder="Enter Password" />
                                        <p style={mystyle}>{this.state.errpassword}</p>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control style={{borderColor: this.state.bdrcpassword}} type="password" id='cpassword'  placeholder="Re-Enter Password" />
                                        <p style={mystyle}>{this.state.errcpassword}</p>
                                    </Form.Group>
                                </Col>
                            </Row>
                             <Button type="button" variant="primary" onClick={() => this.submit()} >
                                Submit
                            </Button>
                            <p><a href="/login">Cancel</a></p>
                        </Card>
                    </Form>
                </Col>
              </Row>
          </Container>
            
              </div>
            </div>
          </div>
    );
  }
}

export default Register;