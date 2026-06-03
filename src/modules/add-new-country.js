import React from "react";
import '../assets/css/country.css';
import { Link } from "react-router-dom";

function AddCountry() {
  return (
    <main id="main" className="main">

      <h2 style={{ textAlign: "center" }}>Add New Country</h2>
      <br />

      <section className="section">
        <div className="row">
          <div className="col-lg-12">

            {/* COUNTRY INFO */}
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Country Information</h5>

                <div className="row mb-3">
                  <label className="col-sm-2 col-form-label">Country Name</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" placeholder="Enter Country Name" />
                  </div>
                </div>

                <div className="row mb-3">
                  <label className="col-sm-2 col-form-label">Country Code</label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Country Code (e.g. IN, US)"
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <label className="col-sm-2 col-form-label">Currency</label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Currency (e.g. INR, USD)"
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <label className="col-sm-2 col-form-label">Phone Code</label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Phone Code (e.g. +91)"
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <label className="col-sm-2 col-form-label">Description</label>
                  <div className="col-sm-10">
                    <textarea
                      className="form-control"
                      rows="3"
                      placeholder="Write short description..."
                    ></textarea>
                  </div>
                </div>

              </div>
            </div>

            {/* FLAG IMAGE */}
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Country Flag</h5>

                <div className="row mb-3">
                  <label className="col-sm-2 col-form-label">Upload Flag</label>
                  <div className="col-sm-10">
                    <input className="form-control" type="file" />
                  </div>
                </div>
              </div>
            </div>

            {/* SETTINGS */}
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Settings</h5>

                <div className="status-container">
                  <span className="label">Status:</span>

                  <label className="switch">
                    <input type="checkbox" id="statusToggle" defaultChecked />
                    <span className="slider"></span>
                  </label>

                  <span id="statusText" className="active">Active</span>
                </div>

              </div>
            </div>

            {/* BUTTON */}
           <div className="text-center">
                <Link to="/view-country">
                <button className="btn btn-primary px-5">VIEW COUNTRY</button>
                </Link>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}

export default AddCountry;