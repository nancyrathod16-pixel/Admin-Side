import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/category.css";

function AddCategory() {
  return (
    <>
      <main id="main" className="main">

        <h2 style={{ textAlign: "center" }}>Add New Category</h2>
        <br />

        <section className="section">
          <div className="row">
            <div className="col-lg-12">

              {/* CATEGORY INFO */}
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Category Information</h5>

                  <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Category Name</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" placeholder="Enter Category Name" />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Category Code</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" placeholder="Enter Category Code" />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Parent Category</label>
                    <div className="col-sm-10">
                      <select className="form-select">
                        <option>Select Product Category</option>
                        <option value="1">Fashion</option>
                        <option value="2">High jewellery</option>
                        <option value="3">Fine jewellery</option>
                        <option value="3">Watches</option>
                        <option value="3">Eyewear</option>
                        <option value="3">Fragrances</option>
                        <option value="3">Makeups</option>
                        <option value="3">Skincare</option>
                      </select>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Description</label>
                    <div className="col-sm-10">
                      <textarea className="form-control" rows="3"></textarea>
                    </div>
                  </div>

                </div>
              </div>

              {/* IMAGE */}
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Category Image</h5>

                  <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Upload</label>
                    <div className="col-sm-10">
                      <input className="form-control" type="file" />
                    </div>
                  </div>
                </div>
              </div>

              {/* ATTRIBUTES */}
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Attributes</h5>

                  <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Colors</label>
                    <div className="col-sm-10">
                      <input type="checkbox" /> Black
                      <input type="checkbox" /> Gold
                      <input type="checkbox" /> White
                      <input type="checkbox" /> Charcoal
                      <input type="checkbox" /> Dark Red
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Sizes</label>
                    <div className="col-sm-10">
                      <input type="checkbox" /> M
                      <input type="checkbox" /> L
                      <input type="checkbox" /> XL
                      <input type="checkbox" /> XXL
                      <input type="checkbox" /> 3XL
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
                <Link to="/view-category">
                <button className="btn btn-primary px-5">VIEW CATEGORY</button>
                </Link>
            </div>

            </div>
          </div>
        </section>

      </main>
    </>
  );
}

export default AddCategory;