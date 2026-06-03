import React from "react";
import { Link } from "react-router-dom";

function AddUser() {
  return (
    <>
      <main id="main" className="main">

        <h2 className="text-center">Add New User</h2>
        <br />

        <section className="section">
          <div className="row">

            {/* LEFT SIDE */}
            <div className="col-lg-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Basic Information</h5>

                  <form>

                    <div className="row mb-3">
                      <label className="col-sm-4 col-form-label">Full Name</label>
                      <div className="col-sm-8">
                        <input type="text" className="form-control" placeholder="Enter Full Name" />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label className="col-sm-4 col-form-label">Email</label>
                      <div className="col-sm-8">
                        <input type="email" className="form-control" placeholder="Enter Email" />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label className="col-sm-4 col-form-label">Phone</label>
                      <div className="col-sm-8">
                        <input type="tel" className="form-control" placeholder="Enter Phone" />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label className="col-sm-4 col-form-label">Password</label>
                      <div className="col-sm-8">
                        <input type="password" className="form-control" placeholder="Enter Password" />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label className="col-sm-4 col-form-label">Confirm Password</label>
                      <div className="col-sm-8">
                        <input type="password" className="form-control" placeholder="Confirm Password" />
                      </div>
                    </div>

                  </form>

                  <hr />

                  <h5 className="card-title">Address Details</h5>

                  <div className="row mb-3">
                    <label className="col-sm-4 col-form-label">Country</label>
                    <div className="col-sm-8">
                      <select className="form-select">
                        <option>Select Country</option>
                        <option>India</option>
                        <option>USA</option>
                        <option>UK</option>
                        <option>Canada</option>
                        <option>Australia</option>
                        <option>UAE</option>
                      </select>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label className="col-sm-4 col-form-label">State / Region</label>
                    <div className="col-sm-8">
                      <select className="form-select">
                        <option>Select State</option>

                        <optgroup label="India">
                          <option>Gujarat</option>
                          <option>Maharashtra</option>
                          <option>Delhi</option>
                          <option>Rajasthan</option>
                        </optgroup>

                        <optgroup label="USA">
                          <option>California</option>
                          <option>Texas</option>
                          <option>New York</option>
                          <option>Florida</option>
                        </optgroup>

                        <optgroup label="UK">
                          <option>England</option>
                          <option>Scotland</option>
                          <option>Wales</option>
                        </optgroup>

                        <optgroup label="Canada">
                          <option>Ontario</option>
                          <option>Quebec</option>
                          <option>Alberta</option>
                        </optgroup>

                        <optgroup label="Australia">
                          <option>New South Wales</option>
                          <option>Victoria</option>
                          <option>Queensland</option>
                        </optgroup>

                        <optgroup label="UAE">
                          <option>Dubai</option>
                          <option>Abu Dhabi</option>
                          <option>Sharjah</option>
                        </optgroup>

                      </select>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label className="col-sm-4 col-form-label">City</label>
                    <div className="col-sm-8">
                      <select className="form-select">
                        <option>Select City</option>

                        <optgroup label="India - Gujarat">
                          <option>Surat</option>
                          <option>Ahmedabad</option>
                          <option>Vadodara</option>
                        </optgroup>

                        <optgroup label="India - Maharashtra">
                          <option>Mumbai</option>
                          <option>Pune</option>
                        </optgroup>

                        <optgroup label="USA - California">
                          <option>Los Angeles</option>
                          <option>San Francisco</option>
                        </optgroup>

                        <optgroup label="USA - Texas">
                          <option>Houston</option>
                          <option>Dallas</option>
                        </optgroup>

                        <optgroup label="UK - England">
                          <option>London</option>
                          <option>Manchester</option>
                        </optgroup>

                        <optgroup label="Canada - Ontario">
                          <option>Toronto</option>
                          <option>Ottawa</option>
                        </optgroup>

                        <optgroup label="Australia - New South Wales">
                          <option>Sydney</option>
                        </optgroup>

                        <optgroup label="UAE - Dubai">
                          <option>Dubai City</option>
                          <option>Jumeirah</option>
                        </optgroup>

                      </select>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label className="col-sm-4 col-form-label">Address</label>
                    <div className="col-sm-8">
                      <textarea className="form-control" rows="2" placeholder="Enter Address"></textarea>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="col-lg-6">
              <div className="card">
                <div className="card-body">

                  <h5 className="card-title">Account Details</h5>

                  <form>

                    <div className="row mb-3">
                      <label className="col-sm-4 col-form-label">Role</label>
                      <div className="col-sm-8">
                        <select className="form-select">
                          <option defaultValue>Select Role</option>
                          <option>Admin</option>
                          <option>Customer</option>
                          <option>Staff</option>
                        </select>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label className="col-sm-4 col-form-label">Status</label>
                      <div className="col-sm-8">
                        <div className="form-check form-switch">
                          <input className="form-check-input" type="checkbox" defaultChecked />
                          <label className="form-check-label">Active</label>
                        </div>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label className="col-sm-4 col-form-label">Profile Image</label>
                      <div className="col-sm-8">
                        <input type="file" className="form-control" />
                      </div>
                    </div>

                    <hr />

                    <h5 className="card-title">Additional Info</h5>

                    <div className="row mb-3">
                      <label className="col-sm-4 col-form-label">Date of Birth</label>
                      <div className="col-sm-8">
                        <input type="date" className="form-control" />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label className="col-sm-4 col-form-label">Gender</label>
                      <div className="col-sm-8">
                        <select className="form-select">
                          <option defaultValue>Select Gender</option>
                          <option>Male</option>
                          <option>Female</option>
                        </select>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label className="col-sm-4 col-form-label">Notes</label>
                      <div className="col-sm-8">
                        <textarea className="form-control" rows="2"></textarea>
                      </div>
                    </div>

                  </form>

                </div>
              </div>
            </div>

          </div>

          {/* BUTTON */}
          <div className="d-flex justify-content-between align-items-center mt-4 p-3 bg-light rounded">

            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" defaultChecked />
              <label className="form-check-label">Active</label>
            </div>

            <Link to="/view-user">
            <button className="btn btn-primary px-4">VIEW USER</button>
            </Link>

          </div>

        </section>

      </main>
    </>
  );
}

export default AddUser;