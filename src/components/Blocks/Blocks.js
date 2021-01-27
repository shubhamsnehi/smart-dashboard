import './Blocks.css';
import React from 'react';

class Blocks extends React.Component {

  constructor() {
    super();
    this.state = {
      invoices: '',
      workspaces: '',
      companions: '',
      orders: ''
    }
    this.getNo = this.getNo.bind(this);
  }

  async getNo() {
    const url = 'http://localhost:3000/data';
    const response = await fetch(url);
    const data = await response.json();
    var inv = data.dashboard.invoices.length;
    var wrk = data.dashboard.workspaces.length;
    var com = data.dashboard.companions.length;
    var ord = data.dashboard.orders.length;
    this.setState({
      invoices: inv,
      workspaces: wrk,
      companions: com,
      orders: 'null'
    });
  }

  render() {
    this.getNo();
    return (
      <div class="row">
        <div class="col-xl-3 col-md-6 mb-4 hoa" onclick="window.location='newdistributor.php'">
          <div class="card border-left-primary shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Total Invoices</div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">{this.state.invoices}</div>
                </div>
                {/* <div class="col-auto">
                <i class="fas fa-user-plus fa-2x text-gray-300"></i>
              </div> */}
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-md-6 mb-4 hoa" onclick="window.location='newdistributor.php'">
          <div class="card border-left-success shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-success text-uppercase mb-1">Total Companinons</div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">{this.state.companions}</div>
                </div>
                {/* <div class="col-auto">
                <i class="fas fa-user-plus fa-2x text-gray-300"></i>
              </div> */}
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-md-6 mb-4 hoa" onclick="window.location='newdistributor.php'">
          <div class="card border-left-warning shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">Total Workspaces</div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">{this.state.workspaces}</div>
                </div>
                {/* <div class="col-auto">
                <i class="fas fa-user-plus fa-2x text-gray-300"></i>
              </div> */}
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-md-6 mb-4 hoa" onclick="window.location='newdistributor.php'">
          <div class="card border-left-danger shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-danger text-uppercase mb-1">Total Orders</div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">{this.state.ord}</div>
                </div>
                {/* <div class="col-auto">
                <i class="fas fa-user-plus fa-2x text-gray-300"></i>
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Blocks;
