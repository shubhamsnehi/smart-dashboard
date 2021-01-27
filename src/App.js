import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SideNav from './components/SideNav/SideNav';
import Welcome from './components/Welcome/Welcome';
import Routes from './routes';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      appName: 'Mine App'
    }
  }

  render() {
    return (
      <div>
        <Header name={this.state.appName} />
        <div>
          <Welcome />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
