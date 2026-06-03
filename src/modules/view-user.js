import React from "react";
import { Link } from "react-router-dom";

import w1 from "../assets/img/w1.jpg";
import w2 from "../assets/img/w2.webp";
import w4 from "../assets/img/w4.jpg";
import w5 from "../assets/img/w5.jpg";
import user4 from "../assets/img/user4.jpg";
import user5 from "../assets/img/user5.jpg";
import user6 from "../assets/img/us.avif";

function ViewUsers() {
  return (
    <>
      <main id="main" className="main">

        <div className="pagetitle">
        <h1 style={{ textAlign: "center" }}>
        <a href="/add-new-user">ADD NEW USER</a>
        </h1>
        </div>

        <section className="section">
          <div className="row">
            <div className="col-lg-12">

              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap">

                    <div>
                      <h1 className="card-title mb-0">View Products</h1>
                      <small className="text-muted">Manage all Your Products</small>
                    </div>

                    <a href="/add-new-user">
                      <button type="button" className="btn btn-primary">ADD USER</button>
                    </a>

                  </div>
                </div>

                <table className="table datatable text-center align-middle">
                  <thead className="table-dark">
                    <tr>
                      <th>ID</th>
                      <th>PROFILE</th>
                      <th>NAME</th>
                      <th>ROLE</th>
                      <th>EMAIL</th>
                      <th>PHONE</th>
                      <th>STATUS</th>
                      <th>VERIFICATION</th>
                      <th>ACTIONS</th>
                    </tr>
                  </thead>

                  <tbody>

                    <tr>
                      <td>201</td>
                      <td><img src={w1} width="50" /></td>
                      <td>John Smith</td>
                      <td>Admin</td>
                      <td>john@example.com</td>
                      <td>+91 9876543210</td>
                      <td><span className="badge bg-success">Active</span></td>
                      <td><span className="badge bg-warning text-dark">Verified</span></td>
                      <td>
                        <i className="bi bi-pencil-square text-primary me-2"></i>
                        <i className="bi bi-eye text-success me-2"></i>
                        <i className="bi bi-trash text-danger"></i>
                      </td>
                    </tr>

                    <tr>
                      <td>202</td>
                      <td><img src={w2} width="50" /></td>
                      <td>Priya Sharma</td>
                      <td>Customer</td>
                      <td>priya@gmail.com</td>
                      <td>+91 9123456780</td>
                      <td><span className="badge bg-success">Active</span></td>
                      <td><span className="badge bg-warning text-dark">Verified</span></td>
                      <td>
                        <i className="bi bi-pencil-square text-primary me-2"></i>
                        <i className="bi bi-eye text-success me-2"></i>
                        <i className="bi bi-trash text-danger"></i>
                      </td>
                    </tr>

                    <tr>
                      <td>203</td>
                      <td><img src={w4} width="50" /></td>
                      <td>Rahul Mehta</td>
                      <td>Manager</td>
                      <td>rahul@gmail.com</td>
                      <td>+91 9988776655</td>
                      <td><span className="badge bg-danger">Inactive</span></td>
                      <td><span className="badge bg-secondary">Not Verified</span></td>
                      <td>
                        <i className="bi bi-pencil-square text-primary me-2"></i>
                        <i className="bi bi-eye text-success me-2"></i>
                        <i className="bi bi-trash text-danger"></i>
                      </td>
                    </tr>

                    <tr>
                      <td>204</td>
                      <td><img src={w5} width="50" /></td>
                      <td>Anjali Patel</td>
                      <td>Customer</td>
                      <td>anjali@gmail.com</td>
                      <td>+91 9090909090</td>
                      <td><span className="badge bg-success">Active</span></td>
                      <td><span className="badge bg-warning text-dark">Verified</span></td>
                      <td>
                        <i className="bi bi-pencil-square text-primary me-2"></i>
                        <i className="bi bi-eye text-success me-2"></i>
                        <i className="bi bi-trash text-danger"></i>
                      </td>
                    </tr>

                    <tr>
                      <td>205</td>
                      <td><img src={user4} width="50" /></td>
                      <td>David Roy</td>
                      <td>Staff</td>
                      <td>david@gmail.com</td>
                      <td>+91 8888888888</td>
                      <td><span className="badge bg-success">Active</span></td>
                      <td><span className="badge bg-secondary">Not Verified</span></td>
                      <td>
                        <i className="bi bi-pencil-square text-primary me-2"></i>
                        <i className="bi bi-eye text-success me-2"></i>
                        <i className="bi bi-trash text-danger"></i>
                      </td>
                    </tr>

                    <tr>
                      <td>206</td>
                      <td><img src={user5} width="50" /></td>
                      <td>Jhon Kim</td>
                      <td>Customer</td>
                      <td>Jhon@gmail.com</td>
                      <td>+91 7777777777</td>
                      <td><span className="badge bg-success">Active</span></td>
                      <td><span className="badge bg-warning text-dark">Verified</span></td>
                      <td>
                        <i className="bi bi-pencil-square text-primary me-2"></i>
                        <i className="bi bi-eye text-success me-2"></i>
                        <i className="bi bi-trash text-danger"></i>
                      </td>
                    </tr>

                    <tr>
                      <td>207</td>
                      <td><img src={user6} width="50" /></td>
                      <td>Prakriti Verma</td>
                      <td>Staff</td>
                      <td>Prakriti@gmail.com</td>
                      <td>+91 7666666666</td>
                      <td><span className="badge bg-danger">Inactive</span></td>
                      <td><span className="badge bg-secondary">Not Verified</span></td>
                      <td>
                        <i className="bi bi-pencil-square text-primary me-2"></i>
                        <i className="bi bi-eye text-success me-2"></i>
                        <i className="bi bi-trash text-danger"></i>
                      </td>
                    </tr>

                    <tr>
                      <td>208</td>
                      <td><img src={w2} width="50" /></td>
                      <td>Sneha Iyer</td>
                      <td>Manager</td>
                      <td>sneha@gmail.com</td>
                      <td>+91 7555555555</td>
                      <td><span className="badge bg-success">Active</span></td>
                      <td><span className="badge bg-warning text-dark">Verified</span></td>
                      <td>
                        <i className="bi bi-pencil-square text-primary me-2"></i>
                        <i className="bi bi-eye text-success me-2"></i>
                        <i className="bi bi-trash text-danger"></i>
                      </td>
                    </tr>

                    <tr>
                      <td>209</td>
                      <td><img src={user4} width="50" /></td>
                      <td>Rohan Shah</td>
                      <td>Customer</td>
                      <td>rohan@gmail.com</td>
                      <td>+91 7444444444</td>
                      <td><span className="badge bg-success">Active</span></td>
                      <td><span className="badge bg-secondary">Not Verified</span></td>
                      <td>
                        <i className="bi bi-pencil-square text-primary me-2"></i>
                        <i className="bi bi-eye text-success me-2"></i>
                        <i className="bi bi-trash text-danger"></i>
                      </td>
                    </tr>

                    <tr>
                      <td>210</td>
                      <td><img src={w4} width="50" /></td>
                      <td>Karan Malhotra</td>
                      <td>Admin</td>
                      <td>karan@gmail.com</td>
                      <td>+91 7333333333</td>
                      <td><span className="badge bg-success">Active</span></td>
                      <td><span className="badge bg-warning text-dark">Verified</span></td>
                      <td>
                        <i className="bi bi-pencil-square text-primary me-2"></i>
                        <i className="bi bi-eye text-success me-2"></i>
                        <i className="bi bi-trash text-danger"></i>
                      </td>
                    </tr>

                    <tr>
                      <td>211</td>
                      <td><img src={w1} width="50" /></td>
                      <td>Pooja Desai</td>
                      <td>Customer</td>
                      <td>pooja@gmail.com</td>
                      <td>+91 7222222222</td>
                      <td><span className="badge bg-success">Active</span></td>
                      <td><span className="badge bg-warning text-dark">Verified</span></td>
                      <td>
                        <i className="bi bi-pencil-square text-primary me-2"></i>
                        <i className="bi bi-eye text-success me-2"></i>
                        <i className="bi bi-trash text-danger"></i>
                      </td>
                    </tr>

                    <tr>
                      <td>212</td>
                      <td><img src={w5} width="50" /></td>
                      <td>Arjun Nair</td>
                      <td>Staff</td>
                      <td>arjun@gmail.com</td>
                      <td>+91 7111111111</td>
                      <td><span className="badge bg-danger">Inactive</span></td>
                      <td><span className="badge bg-secondary">Not Verified</span></td>
                      <td>
                        <i className="bi bi-pencil-square text-primary me-2"></i>
                        <i className="bi bi-eye text-success me-2"></i>
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

export default ViewUsers;