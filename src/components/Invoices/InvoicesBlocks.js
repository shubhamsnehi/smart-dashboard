import './Invoices.css';
import React from 'react';

class InvoicesBlocks extends React.Component {

    constructor() {
        super();
        this.state = {
            invoices: '',
            loading: true
        }
        this.getNo = this.getNo.bind(this);
    }

    async getNo() {
        const url = 'http://localhost:3000/data';
        const response = await fetch(url);
        const data = await response.json();
        var tempArry = [];
        for (var i = 0; i < data.dashboard.invoices.length; i++) {
            // console.log(data.dashboard.invoices[i].name);
            tempArry[i] = data.dashboard.invoices[i];
        }
        this.setState({ invoices: tempArry, loading: false });
    }

    render() {
        this.getNo();
        return (
            <div>
                {this.state.loading ? <div>Loading...</div> : 
                    <div class="row">{this.state.invoices.map((item) =>
                        <div class="col-4 mb-4 hoa">
                            <div class="card border-left-primary shadow h-80 py-1">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2 row">
                                            <div class="col-12">
                                                <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Workspaces Name</div>
                                                <a href={'/invoices/'}>
                                                    <div class="h5 mb-0 font-weight-bold text-gray-800">
                                                        {item.name}
                                                    </div>
                                                <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Workspaces Address</div>
                                                <div class="h5 mb-0 font-weight-bold text-gray-800">
                                                    {item.address1}
                                                </div></a>
                                            </div>
                                            {/* <div class=" col-auto">
                                        <div class="text-xs font-weight text-primary text-uppercase mb-1">Shop Name</div>
                                        <div class="h5 mb-0 font-weight text-gray-800">Heyyyy</div>
                                    </div> */}
                                            {/* <div class=" col-auto">
                                        <div class="text-xs font-weight text-primary text-uppercase mb-1">Distributer</div>
                                        <div class="h5 mb-0 font-weight text-gray-800">Vijay Singh</div>
                                    </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    </div>
                }
            </div>
        );
    }
}

export default InvoicesBlocks;
