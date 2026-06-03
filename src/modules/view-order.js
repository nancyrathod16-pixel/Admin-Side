import React from "react";
import { Link } from "react-router-dom";

function ViewOrders() {
  return (
    <>
      <main id="main" className="main">

        <div className="pagetitle">
          <h1 style={{ textAlign: "center" }}>View Products</h1>
        </div>

        <section className="section">
          <div className="row">
            <div className="col-lg-12">

              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap">

                    <div>
                      <h1 className="card-title mb-0">View Orders</h1>
                      <small className="text-muted">Manage all orders</small>
                    </div>

                    <Link to="/add-order">
                      <button className="btn btn-primary">ADD ORDER</button>
                    </Link>

                  </div>
                </div>

                <table className="table datatable text-center align-middle">
                  <thead className="table-dark">
                    <tr>
                      <th>ORDER ID</th>
                      <th>CUSTOMER</th>
                      <th>DATE</th>
                      <th>TOTAL</th>
                      <th>PAYMENT</th>
                      <th>STATUS</th>
                      <th>ACTIONS</th>
                    </tr>
                  </thead>

                  <tbody>

                    <tr>
                      <td>#1001</td>
                      <td>Nancy Rathod</td>
                      <td>25 Mar 2026</td>
                      <td>$9,075</td>
                      <td><span className="badge bg-success">Paid</span></td>
                      <td><span className="badge bg-primary">Processing</span></td>
                      <td>
                        <i className="bi bi-eye text-success me-2"></i>
                        <i className="bi bi-pencil-square text-primary me-2"></i>
                        <i className="bi bi-trash text-danger"></i>
                      </td>
                    </tr>

                    <tr>
                      <td>#1002</td>
                      <td>Rahul Sharma</td>
                      <td>24 Mar 2026</td>
                      <td>$5,200</td>
                      <td><span className="badge bg-warning text-dark">Pending</span></td>
                      <td><span className="badge bg-secondary">Shipped</span></td>
                      <td>
                        <i className="bi bi-eye text-success me-2"></i>
                        <i className="bi bi-pencil-square text-primary me-2"></i>
                        <i className="bi bi-trash text-danger"></i>
                      </td>
                    </tr>

                    <tr>
                      <td>#1003</td>
                      <td>Amit Patel</td>
                      <td>23 Mar 2026</td>
                      <td>$2,500</td>
                      <td><span className="badge bg-danger">Failed</span></td>
                      <td><span className="badge bg-danger">Cancelled</span></td>
                      <td>
                        <i className="bi bi-eye text-success me-2"></i>
                        <i className="bi bi-pencil-square text-primary me-2"></i>
                        <i className="bi bi-trash text-danger"></i>
                      </td>
                    </tr>

                    <tr>
                      <td>#1004</td>
                      <td>Priya Mehta</td>
                      <td>22 Mar 2026</td>
                      <td>$7,500</td>
                      <td><span className="badge bg-success">Paid</span></td>
                      <td><span className="badge bg-success">Delivered</span></td>
                      <td>
                        <i className="bi bi-eye text-success me-2"></i>
                        <i className="bi bi-pencil-square text-primary me-2"></i>
                        <i className="bi bi-trash text-danger"></i>
                      </td>
                    </tr>

                    <tr>
                      <td>#1005</td>
                      <td>Krisha Patel</td>
                      <td>12 Apr 2026</td>
                      <td>$8,500</td>
                      <td><span className="badge bg-success">Paid</span></td>
                      <td><span className="badge bg-success">Delivered</span></td>
                      <td>
                        <i className="bi bi-eye text-success me-2"></i>
                        <i className="bi bi-pencil-square text-primary me-2"></i>
                        <i className="bi bi-trash text-danger"></i>
                      </td>
                    </tr>

                    <tr>
                      <td>#1006</td>
                      <td>Rahul Sharma</td>
                      <td>10 Apr 2026</td>
                      <td>$3,200</td>
                      <td><span className="badge bg-warning text-dark">Pending</span></td>
                      <td><span className="badge bg-primary">Processing</span></td>
                      <td>
                        <i className="bi bi-eye text-success me-2"></i>
                        <i className="bi bi-pencil-square text-primary me-2"></i>
                        <i className="bi bi-trash text-danger"></i>
                      </td>
                    </tr>

                    <tr>
                      <td>#1007</td>
                      <td>Amit Patel</td>
                      <td>09 Apr 2026</td>
                      <td>$5,750</td>
                      <td><span className="badge bg-success">Paid</span></td>
                      <td><span className="badge bg-secondary">Shipped</span></td>
                      <td>
                        <i className="bi bi-eye text-success me-2"></i>
                        <i className="bi bi-pencil-square text-primary me-2"></i>
                        <i className="bi bi-trash text-danger"></i>
                      </td>
                    </tr>

                    <tr>
                      <td>#1008</td>
                      <td>Neha Verma</td>
                      <td>08 Apr 2026</td>
                      <td>$1,950</td>
                      <td><span className="badge bg-danger">Failed</span></td>
                      <td><span className="badge bg-danger">Cancelled</span></td>
                      <td>
                        <i className="bi bi-eye text-success me-2"></i>
                        <i className="bi bi-pencil-square text-primary me-2"></i>
                        <i className="bi bi-trash text-danger"></i>
                      </td>
                    </tr>

                    <tr>
                      <td>#1009</td>
                      <td>Arjun Singh</td>
                      <td>07 Apr 2026</td>
                      <td>$6,400</td>
                      <td><span className="badge bg-success">Paid</span></td>
                      <td><span className="badge bg-success">Delivered</span></td>
                      <td>
                        <i className="bi bi-eye text-success me-2"></i>
                        <i className="bi bi-pencil-square text-primary me-2"></i>
                        <i className="bi bi-trash text-danger"></i>
                      </td>
                    </tr>

                    <tr>
                      <td>#1010</td>
                      <td>Simran Kaur</td>
                      <td>06 Apr 2026</td>
                      <td>$2,800</td>
                      <td><span className="badge bg-warning text-dark">Pending</span></td>
                      <td><span className="badge bg-primary">Processing</span></td>
                      <td>
                        <i className="bi bi-eye text-success me-2"></i>
                        <i className="bi bi-pencil-square text-primary me-2"></i>
                        <i className="bi bi-trash text-danger"></i>
                      </td>
                    </tr>

                    <tr>
                      <td>#1011</td>
                      <td>Vikram Desai</td>
                      <td>05 Apr 2026</td>
                      <td>$9,200</td>
                      <td><span className="badge bg-success">Paid</span></td>
                      <td><span className="badge bg-secondary">Shipped</span></td>
                      <td>
                        <i className="bi bi-eye text-success me-2"></i>
                        <i className="bi bi-pencil-square text-primary me-2"></i>
                        <i className="bi bi-trash text-danger"></i>
                      </td>
                    </tr>

                    <tr>
                      <td>#1012</td>
                      <td>Ananya Gupta</td>
                      <td>04 Apr 2026</td>
                      <td>$4,600</td>
                      <td><span className="badge bg-success">Paid</span></td>
                      <td><span className="badge bg-success">Delivered</span></td>
                      <td>
                        <i className="bi bi-eye text-success me-2"></i>
                        <i className="bi bi-pencil-square text-primary me-2"></i>
                        <i className="bi bi-trash text-danger"></i>
                      </td>
                    </tr>

                  </tbody>
                </table>

              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}

export default ViewOrders;