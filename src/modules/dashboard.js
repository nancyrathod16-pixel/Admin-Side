import React from "react";
import "../assets/css/dashboard.css";

function Dashboard() {
  return (
    <main id="main" className="main">

      {/* PAGE TITLE */}
      <div className="pagetitle">
        <h1 style={{ textAlign: "center" }}>Dashboard</h1>
      </div>

      <section className="section dashboard">

        {/* TOP CARDS */}
        <div className="row">

          {/* USERS */}
          <div className="col-lg-3 col-md-6">
            <div className="card info-card bg-primary text-white">
              <div className="card-body">
                <h5 className="card-title">Users</h5>
                <h3>1,245</h3>
                <p>Active Users</p>
              </div>
            </div>
          </div>

          {/* ORDERS */}
          <div className="col-lg-3 col-md-6">
            <div className="card info-card bg-success text-white">
              <div className="card-body">
                <h5 className="card-title">Orders</h5>
                <h3>856</h3>
                <p>Completed Orders</p>
              </div>
            </div>
          </div>

          {/* PRODUCTS */}
          <div className="col-lg-3 col-md-6">
            <div className="card info-card bg-warning text-dark">
              <div className="card-body">
                <h5 className="card-title">Products</h5>
                <h3>320</h3>
                <p>Available Products</p>
              </div>
            </div>
          </div>

          {/* REVENUE */}
          <div className="col-lg-3 col-md-6">
            <div className="card info-card bg-danger text-white">
              <div className="card-body">
                <h5 className="card-title">Revenue</h5>
                <h3>$24,500</h3>
                <p>This Month</p>
              </div>
            </div>
          </div>

        </div>

        {/* TABLE + SIDE */}
        <div className="row mt-4">

          {/* RECENT ORDERS */}
          <div className="col-lg-8">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Recent Orders</h5>

                <table className="table table-striped text-center">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Customer</th>
                      <th>Product</th>
                      <th>Total</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#1001</td>
                      <td>Nancy</td>
                      <td>Handbag</td>
                      <td>$1200</td>
                      <td><span className="badge bg-success">Paid</span></td>
                    </tr>
                    <tr>
                      <td>#1002</td>
                      <td>Rahul</td>
                      <td>Watch</td>
                      <td>$3000</td>
                      <td><span className="badge bg-warning text-dark">Pending</span></td>
                    </tr>
                    <tr>
                      <td>#1003</td>
                      <td>Priya</td>
                      <td>Perfume</td>
                      <td>$850</td>
                      <td><span className="badge bg-danger">Failed</span></td>
                    </tr>
                  </tbody>
                </table>

              </div>
            </div>
          </div>

          {/* TOP PRODUCTS */}
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Top Products</h5>

                <ul className="list-group">
                  <li className="list-group-item d-flex justify-content-between">
                    Luxury Handbag <span>$2500</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    Diamond Necklace <span>$5200</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    Luxury Watch <span>$7500</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    Perfume Set <span>$8500</span>
                  </li>
                </ul>

              </div>
            </div>
          </div>

        </div>

      </section>
    </main>
  );
}

export default Dashboard;