import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Row, Col } from 'react-bootstrap';
import SideNav from '../SideNav/SideNav';

class Dropdown extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      country: '',
      city: [],
      statess: [],
      countryname: '',
    };
    this.random = this.random.bind(this);
    this.randomcity = this.randomcity.bind(this);
  }


  async componentDidMount() {
    const url = 'https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries%2Bstates%2Bcities.json';
    const response = await fetch(url);
    const data = await response.json();
    const tmpArray = [];
    //console.log(data.length);
    for (var i = 0; i < data.length; i++) {
      tmpArray.push(data[i])
    }
    //console.log(tmpArray);
    this.setState({ country: tmpArray, loading: false });
    var str = '<option>Select Nation</option>';
    for (i = 0; i < this.state.country.length; i++) {
      str = str + '<option>' + this.state.country[i].name + '</option>';
      document.getElementById('input').innerHTML = str;
    }
  }



  async random() {
    let a = document.getElementById('input').value;
    const url = 'https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries%2Bstates%2Bcities.json';
    const response = await fetch(url);
    const data = await response.json();
    const tmpArray = [];
    //console.log(data.length);
    for (var i = 0; i < data.length; i++) {
      //console.log(data[i].name);
      if (data[i].name == a) {
        //console.log(data[i].name);
        tmpArray.push(data[i])
      }
    }
    //console.log(tmpArray);
    var str = '<option>Select State</option>';
    this.setState({ statess: tmpArray, loading: false });
    for (i = 0; i < this.state.statess[0].states.length; i++) {
      str = str + '<option>' + this.state.statess[0].states[i].name + '</option>';
      document.getElementById('output').innerHTML = str;
    }
  }


  async randomcity() {
    let a = document.getElementById('input').value;
    let b = document.getElementById('output').value;


    const url = 'https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries%2Bstates%2Bcities.json';
    const response = await fetch(url);
    const data = await response.json();
    const tmpArray = [];
    //console.log(data.length);
    for (var i = 0; i < data.length; i++) {
      //console.log(data[i].name);
      if (data[i].name == a) {
        //console.log(data[i].states.length);
        for (var j = 0; j < data[i].states.length; j++) {
          if (data[i].states[j].name == b) {
            //  console.log(data[i].states[j].name);
            tmpArray.push(data[i].states[j])
          }
        }
      }
    }
    //console.log(tmpArray);
    var str = '<option>Select City</option>';
    this.setState({ city: tmpArray, loading: false });
    for (i = 0; i < this.state.city[0].cities.length; i++) {
      str = str + '<option>' + this.state.city[0].cities[i].name + '</option>';
      document.getElementById('city').innerHTML = str;
    }
    //console.log(this.state.city);
  }

  render() {
    return (
      <div id="content" class="d-flex flex-column">
        <div class="container-fluid">
          <Row className="justify-content-md-center">
            <Col lg="4">
              {this.state.loading ? <div>Loading...</div> :
                <div>
                  <Form>
                    <Form.Control id="input" as="select" className="form-control" onChange={this.random}>
                      <option>Select Nation</option>
                    </Form.Control>
                    <br />
                    <Form.Control id="output" as="select" onChange={this.randomcity}>
                      <option>Select State</option>
                    </Form.Control>
                    <br />
                    <Form.Control id="city" as="select">
                      <option>Select City</option>
                    </Form.Control>
                  </Form>
                </div>
              }
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Dropdown;
