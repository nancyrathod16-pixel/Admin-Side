import React from "react";

function ViewState() {
  return (
    <main id="main" className="main">


      <section className="section">
        <div className="row">
          <div className="col-lg-12">

            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap">

                </div>
              </div>

              <div className="pagetitle">
                <h1 style={{ textAlign: "center" }}>View State</h1>
              </div>

              <section className="section">
                <div className="row">
                  <div className="col-lg-12">

                    <div className="card">
                      <div className="card-body">

                        <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap">

                          <div>
                            <h1 className="card-title mb-0">View State</h1>
                            <small className="text-muted">Manage all states</small>
                          </div>

                          <a href="add-new-state">
                            <button className="btn btn-primary">ADD STATE</button>
                          </a>

                        </div>

                        <table className="table datatable text-center align-middle">
                          <thead className="table-dark">
                            <tr>
                              <th>ID</th>
                              <th>COUNTRY</th>
                              <th>STATE NAME</th>
                              <th>STATE CODE</th>
                              <th>STATUS</th>
                              <th>ACTIONS</th>
                            </tr>
                          </thead>

                          <tbody>

                            <tr>
                              <td>1</td>
                              <td>India</td>
                              <td>Gujarat</td>
                              <td>GJ</td>
                              <td><span className="badge bg-success">Active</span></td>
                              <td>
                                <i className="bi bi-eye text-success me-2"></i>
                                <i className="bi bi-pencil-square text-primary me-2"></i>
                                <i className="bi bi-trash text-danger"></i>
                              </td>
                            </tr>

                            <tr>
                              <td>2</td>
                              <td>India</td>
                              <td>Maharashtra</td>
                              <td>MH</td>
                              <td><span className="badge bg-success">Active</span></td>
                              <td>
                                <i className="bi bi-eye text-success me-2"></i>
                                <i className="bi bi-pencil-square text-primary me-2"></i>
                                <i className="bi bi-trash text-danger"></i>
                              </td>
                            </tr>

                            <tr>
                              <td>3</td>
                              <td>India</td>
                              <td>Rajasthan</td>
                              <td>RJ</td>
                              <td><span className="badge bg-success">Active</span></td>
                              <td>
                                <i className="bi bi-eye text-success me-2"></i>
                                <i className="bi bi-pencil-square text-primary me-2"></i>
                                <i className="bi bi-trash text-danger"></i>
                              </td>
                            </tr>

                            <tr>
                              <td>4</td>
                              <td>India</td>
                              <td>Tamil Nadu</td>
                              <td>TN</td>
                              <td><span className="badge bg-success">Active</span></td>
                              <td>
                                <i className="bi bi-eye text-success me-2"></i>
                                <i className="bi bi-pencil-square text-primary me-2"></i>
                                <i className="bi bi-trash text-danger"></i>
                              </td>
                            </tr>

                            <tr>
                              <td>5</td>
                              <td>India</td>
                              <td>Karnataka</td>
                              <td>KA</td>
                              <td><span className="badge bg-success">Active</span></td>
                              <td>
                                <i className="bi bi-eye text-success me-2"></i>
                                <i className="bi bi-pencil-square text-primary me-2"></i>
                                <i className="bi bi-trash text-danger"></i>
                              </td>
                            </tr>

                            <tr>
                              <td>6</td>
                              <td>India</td>
                              <td>Punjab</td>
                              <td>PB</td>
                              <td><span className="badge bg-secondary">Inactive</span></td>
                              <td>
                                <i className="bi bi-eye text-success me-2"></i>
                                <i className="bi bi-pencil-square text-primary me-2"></i>
                                <i className="bi bi-trash text-danger"></i>
                              </td>
                            </tr>

                            <tr>
                              <td>7</td>
                              <td>USA</td>
                              <td>California</td>
                              <td>CA</td>
                              <td><span className="badge bg-success">Active</span></td>
                              <td>
                                <i className="bi bi-eye text-success me-2"></i>
                                <i className="bi bi-pencil-square text-primary me-2"></i>
                                <i className="bi bi-trash text-danger"></i>
                              </td>
                            </tr>

                            <tr>
                              <td>8</td>
                              <td>USA</td>
                              <td>Texas</td>
                              <td>TX</td>
                              <td><span className="badge bg-secondary">Inactive</span></td>
                              <td>
                                <i className="bi bi-eye text-success me-2"></i>
                                <i className="bi bi-pencil-square text-primary me-2"></i>
                                <i className="bi bi-trash text-danger"></i>
                              </td>
                            </tr>

                            <tr>
                              <td>9</td>
                              <td>USA</td>
                              <td>Florida</td>
                              <td>FL</td>
                              <td><span className="badge bg-success">Active</span></td>
                              <td>
                                <i className="bi bi-eye text-success me-2"></i>
                                <i className="bi bi-pencil-square text-primary me-2"></i>
                                <i className="bi bi-trash text-danger"></i>
                              </td>
                            </tr>

                            <tr>
                              <td>10</td>
                              <td>Canada</td>
                              <td>Ontario</td>
                              <td>ON</td>
                              <td><span className="badge bg-success">Active</span></td>
                              <td>
                                <i className="bi bi-eye text-success me-2"></i>
                                <i className="bi bi-pencil-square text-primary me-2"></i>
                                <i className="bi bi-trash text-danger"></i>
                              </td>
                            </tr>

                            <tr>
                              <td>11</td>
                              <td>Canada</td>
                              <td>Quebec</td>
                              <td>QC</td>
                              <td><span className="badge bg-success">Active</span></td>
                              <td>
                                <i className="bi bi-eye text-success me-2"></i>
                                <i className="bi bi-pencil-square text-primary me-2"></i>
                                <i className="bi bi-trash text-danger"></i>
                              </td>
                            </tr>

                            <tr>
                              <td>12</td>
                              <td>Australia</td>
                              <td>New South Wales</td>
                              <td>NSW</td>
                              <td><span className="badge bg-success">Active</span></td>
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
                </div>
              </section>

            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

export default ViewState;