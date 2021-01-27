import './Footer.css';
import React from 'react';

class Footer extends React.Component {

  render() {
  return (
    <footer class="sticky-footer bg-white">
        <div class="container my-auto">
          <div class="copyright text-center my-auto">
            <span>Copyright &copy; <a href="https://aiocdawacs.com/" target="_blank" rel="noopener noreferrer">AIOCD AWACS</a> 2021</span>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;