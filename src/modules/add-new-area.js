import React from "react";
import { Link } from "react-router-dom";
import '../assets/css/area.css'

function AddArea() {
  return (
    <>
      <main id="main" className="main">

        <h2 style={{ textAlign: "center" }}>ADD NEW AREA</h2>
        <br />

        <section className="section">
          <div className="row">
            <div className="col-lg-12">

              {/* AREA INFO */}
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Area Information</h5>

                  {/* COUNTRY */}
                  <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Country</label>
                    <div className="col-sm-10">
                      <select className="form-select">
                        <option defaultValue>Select Country</option>
                        <option>India</option>
                        <option>USA</option>
                        <option>UK</option>
                        <option>UAE</option>
                        <option>Canada</option>
                      </select>
                    </div>
                  </div>

                  {/* STATE */}
                  <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">State / Region</label>
                    <div className="col-sm-10">
                      <select className="form-select">
                        <option defaultValue>Select State</option>
                        <option>Gujarat</option>
                        <option>Maharashtra</option>
                        <option>California</option>
                        <option>Ontario</option>
                      </select>
                    </div>
                  </div>

                  {/* CITY */}
                  <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">City</label>
                    <div className="col-sm-10">
                      <select className="form-select">
                        <option defaultValue>Select City</option>
                        <option>Surat</option>
                        <option>Mumbai</option>
                        <option>New York</option>
                        <option>Toronto</option>
                      </select>
                    </div>
                  </div>

                  {/* AREA NAME */}
                  <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Area Name</label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Area Name (e.g. Adajan)"
                      />
                    </div>
                  </div>

                  {/* AREA CODE */}
                  <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Area Code</label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Area Code"
                      />
                    </div>
                  </div>

                  {/* PIN CODE */}
                  <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">ZIP / PIN Code</label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter ZIP / PIN Code"
                      />
                    </div>
                  </div>

                  {/* DESCRIPTION */}
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
                <Link to="/view-area" className="btn btn-primary px-5">
             VIEW AREA
             </Link>
        </div>

            </div>
          </div>
        </section>

      </main>
    </>
  );
}

export default AddArea;