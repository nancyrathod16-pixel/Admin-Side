import React from "react";
import { Link } from "react-router-dom";

import inFlag from "../assets/img/in.webp";
import usFlag from "../assets/img/usa.png";
import ukFlag from "../assets/img/uk.png";
import canFlag from "../assets/img/can.svg";
import ausFlag from "../assets/img/aus.png";
import gerFlag from "../assets/img/ger.png";
import fraFlag from "../assets/img/fra.png";
import japFlag from "../assets/img/jap.png";
import chFlag from "../assets/img/ch.png";
import uaFlag from "../assets/img/ua.png";
import sinFlag from "../assets/img/sin.png";
import brazilFlag from "../assets/img/brazil.png";

function ViewCountry() {
  return (
    <main id="main" className="main">

       <div className="pagetitle">
        <h1 style={{ textAlign: "center" }}>
        <a href="/add-new-country">ADD NEW country</a>
        </h1>
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

                  <a href="/add-new-country">
                    <button className="btn btn-primary">ADD COUNTRY</button>
                  </a>

                </div>
              </div>

              <table className="table datatable text-center align-middle">
                <thead className="table-dark">
                  <tr>
                    <th>ID</th>
                    <th>FLAG</th>
                    <th>COUNTRY NAME</th>
                    <th>CODE</th>
                    <th>CURRENCY</th>
                    <th>PHONE CODE</th>
                    <th>STATUS</th>
                    <th>ACTIONS</th>
                  </tr>
                </thead>

                <tbody>

                  <tr>
                    <td>1</td>
                    <td><img src={inFlag} width="40" alt="" /></td>
                    <td>India</td>
                    <td>IN</td>
                    <td>INR</td>
                    <td>+91</td>
                    <td><span className="badge bg-success">Active</span></td>
                    <td>
                      <i className="bi bi-eye text-success me-2"></i>
                      <i className="bi bi-pencil-square text-primary me-2"></i>
                      <i className="bi bi-trash text-danger"></i>
                    </td>
                  </tr>

                  <tr>
                    <td>2</td>
                    <td><img src={usFlag} width="40" alt="" /></td>
                    <td>United States</td>
                    <td>US</td>
                    <td>USD</td>
                    <td>+1</td>
                    <td><span className="badge bg-success">Active</span></td>
                    <td>
                      <i className="bi bi-eye text-success me-2"></i>
                      <i className="bi bi-pencil-square text-primary me-2"></i>
                      <i className="bi bi-trash text-danger"></i>
                    </td>
                  </tr>

                  <tr>
                    <td>3</td>
                    <td><img src={ukFlag} width="40" alt="" /></td>
                    <td>United Kingdom</td>
                    <td>UK</td>
                    <td>GBP</td>
                    <td>+44</td>
                    <td><span className="badge bg-success">Active</span></td>
                    <td>
                      <i className="bi bi-eye text-success me-2"></i>
                      <i className="bi bi-pencil-square text-primary me-2"></i>
                      <i className="bi bi-trash text-danger"></i>
                    </td>
                  </tr>

                  <tr>
                    <td>4</td>
                    <td><img src={canFlag} width="40" alt="" /></td>
                    <td>Canada</td>
                    <td>CA</td>
                    <td>CAD</td>
                    <td>+1</td>
                    <td><span className="badge bg-secondary">Inactive</span></td>
                    <td>
                      <i className="bi bi-eye text-success me-2"></i>
                      <i className="bi bi-pencil-square text-primary me-2"></i>
                      <i className="bi bi-trash text-danger"></i>
                    </td>
                  </tr>

                  <tr>
                    <td>5</td>
                    <td><img src={ausFlag} width="40" alt="" /></td>
                    <td>Australia</td>
                    <td>AU</td>
                    <td>AUD</td>
                    <td>+61</td>
                    <td><span className="badge bg-success">Active</span></td>
                    <td>
                      <i className="bi bi-eye text-success me-2"></i>
                      <i className="bi bi-pencil-square text-primary me-2"></i>
                      <i className="bi bi-trash text-danger"></i>
                    </td>
                  </tr>

                  <tr>
                    <td>6</td>
                    <td><img src={gerFlag} width="40" alt="" /></td>
                    <td>Germany</td>
                    <td>DE</td>
                    <td>EUR</td>
                    <td>+49</td>
                    <td><span className="badge bg-success">Active</span></td>
                    <td>
                      <i className="bi bi-eye text-success me-2"></i>
                      <i className="bi bi-pencil-square text-primary me-2"></i>
                      <i className="bi bi-trash text-danger"></i>
                    </td>
                  </tr>

                  <tr>
                    <td>7</td>
                    <td><img src={fraFlag} width="40" alt="" /></td>
                    <td>France</td>
                    <td>FR</td>
                    <td>EUR</td>
                    <td>+33</td>
                    <td><span className="badge bg-secondary">Inactive</span></td>
                    <td>
                      <i className="bi bi-eye text-success me-2"></i>
                      <i className="bi bi-pencil-square text-primary me-2"></i>
                      <i className="bi bi-trash text-danger"></i>
                    </td>
                  </tr>

                  <tr>
                    <td>8</td>
                    <td><img src={japFlag} width="40" alt="" /></td>
                    <td>Japan</td>
                    <td>JP</td>
                    <td>JPY</td>
                    <td>+81</td>
                    <td><span className="badge bg-success">Active</span></td>
                    <td>
                      <i className="bi bi-eye text-success me-2"></i>
                      <i className="bi bi-pencil-square text-primary me-2"></i>
                      <i className="bi bi-trash text-danger"></i>
                    </td>
                  </tr>

                  <tr>
                    <td>9</td>
                    <td><img src={chFlag} width="40" alt="" /></td>
                    <td>China</td>
                    <td>CN</td>
                    <td>CNY</td>
                    <td>+86</td>
                    <td><span className="badge bg-success">Active</span></td>
                    <td>
                      <i className="bi bi-eye text-success me-2"></i>
                      <i className="bi bi-pencil-square text-primary me-2"></i>
                      <i className="bi bi-trash text-danger"></i>
                    </td>
                  </tr>

                  <tr>
                    <td>10</td>
                    <td><img src={uaFlag} width="40" alt="" /></td>
                    <td>UAE</td>
                    <td>AE</td>
                    <td>AED</td>
                    <td>+971</td>
                    <td><span className="badge bg-success">Active</span></td>
                    <td>
                      <i className="bi bi-eye text-success me-2"></i>
                      <i className="bi bi-pencil-square text-primary me-2"></i>
                      <i className="bi bi-trash text-danger"></i>
                    </td>
                  </tr>

                  <tr>
                    <td>11</td>
                    <td><img src={sinFlag} width="40" alt="" /></td>
                    <td>Singapore</td>
                    <td>SG</td>
                    <td>SGD</td>
                    <td>+65</td>
                    <td><span className="badge bg-secondary">Inactive</span></td>
                    <td>
                      <i className="bi bi-eye text-success me-2"></i>
                      <i className="bi bi-pencil-square text-primary me-2"></i>
                      <i className="bi bi-trash text-danger"></i>
                    </td>
                  </tr>

                  <tr>
                    <td>12</td>
                    <td><img src={brazilFlag} width="40" alt="" /></td>
                    <td>Brazil</td>
                    <td>BR</td>
                    <td>BRL</td>
                    <td>+55</td>
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
  );
}

export default ViewCountry;