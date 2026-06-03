import React from "react";
import { Link } from "react-router-dom";
import '../assets/css/city.css';

function ViewCity() {
  return (
    <>
      <main id="main" className="main">

        <div className="pagetitle">
          <h1 style={{ textAlign: "center" }}>VIEW CITY</h1>
        </div>

        <section className="section">
          <div className="row">
            <div className="col-lg-12">

              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap">

                    <div>
                      <h1 className="card-title mb-0">View Country</h1>
                      <small className="text-muted">Manage all countries</small>
                    </div>

                    <Link to="/add-new-city">
                      <button className="btn btn-primary">ADD CITY</button>
                    </Link>

                  </div>
                </div>

                {/* Table */}
                <table className="table datatable text-center align-middle">
                  <thead className="table-dark">
                    <tr>
                      <th>ID</th>
                      <th>CITY NAME</th>
                      <th>STATE / REGION</th>
                      <th>COUNTRY</th>
                      <th>ZIP / PIN CODE</th>
                      <th>TIME ZONE</th>
                      <th>STATUS</th>
                      <th>ACTIONS</th>
                    </tr>
                  </thead>

                  <tbody>

                    <tr>
                      <td>1</td>
                      <td>Surat</td>
                      <td>Gujarat</td>
                      <td>India</td>
                      <td>395007</td>
                      <td>IST</td>
                      <td><span className="badge bg-success">Active</span></td>
                      <td>
                        <i className="bi bi-eye text-success me-2"></i>
                        <i className="bi bi-pencil-square text-primary me-2"></i>
                        <i className="bi bi-trash text-danger"></i>
                      </td>
                    </tr>

                    <tr>
                      <td>2</td>
                      <td>Mumbai</td>
                      <td>Maharashtra</td>
                      <td>India</td>
                      <td>400001</td>
                      <td>IST</td>
                      <td><span className="badge bg-success">Active</span></td>
                      <td>
                        <i className="bi bi-eye text-success me-2"></i>
                        <i className="bi bi-pencil-square text-primary me-2"></i>
                        <i className="bi bi-trash text-danger"></i>
                      </td>
                    </tr>

                    <tr>
                      <td>3</td>
                      <td>Delhi</td>
                      <td>Delhi</td>
                      <td>India</td>
                      <td>110001</td>
                      <td>IST</td>
                      <td><span className="badge bg-success">Active</span></td>
                      <td>
                        <i className="bi bi-eye text-success me-2"></i>
                        <i className="bi bi-pencil-square text-primary me-2"></i>
                        <i className="bi bi-trash text-danger"></i>
                      </td>
                    </tr>

                    <tr>
                      <td>4</td>
                      <td>Bangalore</td>
                      <td>Karnataka</td>
                      <td>India</td>
                      <td>560001</td>
                      <td>IST</td>
                      <td><span className="badge bg-secondary">Inactive</span></td>
                      <td>
                        <i className="bi bi-eye text-success me-2"></i>
                        <i className="bi bi-pencil-square text-primary me-2"></i>
                        <i className="bi bi-trash text-danger"></i>
                      </td>
                    </tr>

                    <tr>
                      <td>5</td>
                      <td>New York</td>
                      <td>New York</td>
                      <td>USA</td>
                      <td>10001</td>
                      <td>EST</td>
                      <td><span className="badge bg-success">Active</span></td>
                      <td>
                        <i className="bi bi-eye text-success me-2"></i>
                        <i className="bi bi-pencil-square text-primary me-2"></i>
                        <i className="bi bi-trash text-danger"></i>
                      </td>
                    </tr>

                    <tr>
                      <td>6</td>
                      <td>Los Angeles</td>
                      <td>California</td>
                      <td>USA</td>
                      <td>90001</td>
                      <td>PST</td>
                      <td><span className="badge bg-success">Active</span></td>
                      <td>
                        <i className="bi bi-eye text-success me-2"></i>
                        <i className="bi bi-pencil-square text-primary me-2"></i>
                        <i className="bi bi-trash text-danger"></i>
                      </td>
                    </tr>

                    <tr>
                      <td>7</td>
                      <td>London</td>
                      <td>England</td>
                      <td>UK</td>
                      <td>EC1A</td>
                      <td>GMT</td>
                      <td><span className="badge bg-success">Active</span></td>
                      <td>
                        <i className="bi bi-eye text-success me-2"></i>
                        <i className="bi bi-pencil-square text-primary me-2"></i>
                        <i className="bi bi-trash text-danger"></i>
                      </td>
                    </tr>

                    <tr>
                      <td>8</td>
                      <td>Dubai</td>
                      <td>Dubai</td>
                      <td>UAE</td>
                      <td>00000</td>
                      <td>GST</td>
                      <td><span className="badge bg-success">Active</span></td>
                      <td>
                        <i className="bi bi-eye text-success me-2"></i>
                        <i className="bi bi-pencil-square text-primary me-2"></i>
                        <i className="bi bi-trash text-danger"></i>
                      </td>
                    </tr>

                    <tr>
                      <td>9</td>
                      <td>Tokyo</td>
                      <td>Tokyo</td>
                      <td>Japan</td>
                      <td>100-0001</td>
                      <td>JST</td>
                      <td><span className="badge bg-secondary">Inactive</span></td>
                      <td>
                        <i className="bi bi-eye text-success me-2"></i>
                        <i className="bi bi-pencil-square text-primary me-2"></i>
                        <i className="bi bi-trash text-danger"></i>
                      </td>
                    </tr>

                    <tr>
                      <td>10</td>
                      <td>Sydney</td>
                      <td>New South Wales</td>
                      <td>Australia</td>
                      <td>2000</td>
                      <td>AEST</td>
                      <td><span className="badge bg-success">Active</span></td>
                      <td>
                        <i className="bi bi-eye text-success me-2"></i>
                        <i className="bi bi-pencil-square text-primary me-2"></i>
                        <i className="bi bi-trash text-danger"></i>
                      </td>
                    </tr>

                    <tr>
                      <td>11</td>
                      <td>Toronto</td>
                      <td>Ontario</td>
                      <td>Canada</td>
                      <td>M5H</td>
                      <td>EST</td>
                      <td><span className="badge bg-success">Active</span></td>
                      <td>
                        <i className="bi bi-eye text-success me-2"></i>
                        <i className="bi bi-pencil-square text-primary me-2"></i>
                        <i className="bi bi-trash text-danger"></i>
                      </td>
                    </tr>

                    <tr>
                      <td>12</td>
                      <td>Singapore</td>
                      <td>Central Region</td>
                      <td>Singapore</td>
                      <td>018989</td>
                      <td>SGT</td>
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
        </section>

      </main>
    </>
  );
}

export default ViewCity;