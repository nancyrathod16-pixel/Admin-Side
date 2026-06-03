import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/state.css";

function State() {
  return (
    <>
      <main id="main" className="main">

        <h2 style={{ textAlign: "center" }}>Add New State</h2>
        <br />

        <section className="section">
          <div className="row">
            <div className="col-lg-12">

              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">State Information</h5>

                  <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Country</label>
                    <div className="col-sm-10">
                      <select className="form-select">
                        <option defaultValue>Select Country</option>
                        <option value="1">India</option>
                        <option value="2">USA</option>
                        <option value="3">Canada</option>
                      </select>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">State Name</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" placeholder="Enter State Name" />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">State Code</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" placeholder="Enter State Code (e.g. GJ)" />
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

             <div className="text-center">
                             <Link to="/view-state">
                             <button className="btn btn-primary px-5">VIEW STATE</button>
                             </Link>
                         </div>

            </div>
          </div>
        </section>

      </main>
    </>
  );
}

export default State;