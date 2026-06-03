import React from "react";
import { Link } from "react-router-dom";

function Add1() {
  return (
    <>
      <main id="main" className="main">

        <h2 style={{ textAlign: "center" }}>Add New Products</h2>
        <br />

        <section className="section">
          <div className="row">
            <div className="col-lg-6">

              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Products Information</h5>

                  <form>
                    <div className="row mb-3">
                      <label htmlFor="inputText" className="col-sm-2 col-form-label">Product Name</label>
                      <div className="col-sm-10">
                        <input type="text" className="form-control" placeholder="Enter Product Name" />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Product Category</label>
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
                      <label htmlFor="inputEmail" className="col-sm-2 col-form-label">SubCategory</label>
                      <div className="col-sm-10">
                        <select className="form-select">
                          <option>SubCategory</option>
                          <option value="1">Evening Gowns</option>
                          <option value="2">Signature Rings</option>
                          <option value="3">Premium Necklaces</option>
                          <option value="3">Luxury Watches</option>
                          <option value="3">Sun Glasses</option>
                          <option value="3">Fragrances</option>
                          <option value="3">Velvet Matte Lipsticks</option>
                          <option value="3">Hydrating Serums</option>
                        </select>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label htmlFor="inputText" className="col-sm-2 col-form-label">Brand</label>
                      <div className="col-sm-10">
                        <input type="text" className="form-control" placeholder="Enter Brand Name" />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label htmlFor="inputNumber" className="col-sm-2 col-form-label">Description</label>
                      <div className="col-sm-10">
                        <textarea className="form-control" rows="3" placeholder="Write Description"></textarea>
                      </div>
                    </div>

                  </form>

                  <hr />
                  <h5 className="card-title">Variants</h5>

                  <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Colors Options</label>
                    <div className="col-sm-10">

                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="colorBlack" />
                        <label className="form-check-label" htmlFor="colorBlack">Black</label>
                      </div>

                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="colorWhite" />
                        <label className="form-check-label" htmlFor="colorWhite">Dark Red</label>
                      </div>

                    </div>
                  </div>

                  <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Size Options</label>
                    <div className="col-sm-10">

                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="sizeM" />
                        <label className="form-check-label" htmlFor="sizeM">M</label>
                      </div>

                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="sizeL" />
                        <label className="form-check-label" htmlFor="sizeL">L</label>
                      </div>

                       <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="sizeL" />
                        <label className="form-check-label" htmlFor="sizeL">XL</label>
                      </div>

                       <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="sizeL" />
                        <label className="form-check-label" htmlFor="sizeL">XXL</label>
                      </div>

                       <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="sizeL" />
                        <label className="form-check-label" htmlFor="sizeL">S</label>
                      </div>

                    </div>
                  </div>

                  <div className="row mb-3">
                    <label htmlFor="inputNumber" className="col-sm-2 col-form-label">Main Image</label>
                    <div className="col-sm-10">
                      <input className="form-control" type="file" />
                    </div>
                  </div>

                </div>
              </div>

            </div>

            <div className="col-lg-6">

              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Pricing</h5>

                  <form>
                    <div className="row mb-3">
                      <label className="col-sm-2 col-form-label">Price</label>
                      <div className="col-sm-10">
                        <input type="text" className="form-control" placeholder="Enter Product Price" />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label className="col-sm-2 col-form-label">Discount Price</label>
                      <div className="col-sm-10">
                        <input type="text" className="form-control" placeholder="Enter Discount Product Price" />
                      </div>
                    </div>
                  </form>

                </div>
              </div>

            </div>
          </div>
        </section>

        <div className="col-sm-10">
          <button type="submit" className="btn btn-primary" style={{ marginLeft: "50%" }}>
            ADD PRODUCT
          </button>
        </div>

      </main>
    </>
  );
}

export default Add1;