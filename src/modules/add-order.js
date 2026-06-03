import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import '../assets/css/order.css'

function AddOrder() {

  useEffect(() => {

    const toggle = document.getElementById("statusToggle");
    const text = document.getElementById("statusText");

    if (toggle) {
      toggle.addEventListener("change", function () {
        if (this.checked) {
          if (text) {
            text.textContent = "Active";
            text.classList.remove("inactive");
            text.classList.add("active");
          }
        } else {
          if (text) {
            text.textContent = "Inactive";
            text.classList.remove("active");
            text.classList.add("inactive");
          }
        }
      });
    }

    function updateTotals() {
      let subtotal = 0;

      document.querySelectorAll("#productTable tr").forEach(row => {
        let price = parseFloat(row.querySelector(".price")?.innerText) || 0;
        let qty = parseInt(row.querySelector(".qty")?.value) || 0;

        let total = price * qty;

        if (row.querySelector(".total")) {
          row.querySelector(".total").innerText = "$" + total.toFixed(2);
        }

        subtotal += total;
      });

      let shipping = 20;
      let discount = 500;

      let grandTotal = subtotal + shipping - discount;

      const subtotalEl = document.getElementById("subtotal");
      const grandTotalEl = document.getElementById("grandTotal");

      if (subtotalEl) subtotalEl.innerText = "$" + subtotal.toFixed(2);
      if (grandTotalEl) grandTotalEl.innerText = "$" + grandTotal.toFixed(2);
    }

    document.querySelectorAll(".qty").forEach(input => {
      input.addEventListener("input", updateTotals);
    });

    updateTotals();

  }, []);

  return (
    <>
      <main id="main" className="main">

        <h2 className="text-center">Add New Order</h2>
        <br />

        <section className="section">
          <div className="row g-3">

            {/* LEFT FORM */}
            <div className="col-lg-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Customer Information</h5>

                  <form>

                    <div className="row mb-3">
                      <label className="col-sm-4 col-form-label">Customer Name</label>
                      <div className="col-sm-8">
                        <input type="text" className="form-control" placeholder="Enter Name" />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label className="col-sm-4 col-form-label">Phone</label>
                      <div className="col-sm-8">
                        <input type="tel" className="form-control" placeholder="Enter Phone" />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label className="col-sm-4 col-form-label">Email</label>
                      <div className="col-sm-8">
                        <input type="email" className="form-control" placeholder="Enter Email" />
                      </div>
                    </div>

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
                        </select>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label className="col-sm-4 col-form-label">Address</label>
                      <div className="col-sm-8">
                        <textarea className="form-control" rows="2"></textarea>
                      </div>
                    </div>

                  </form>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="col-lg-6">
              <div className="card">
                <div className="card-body">

                  <h5 className="card-title">Order Details</h5>

                  <table className="table align-middle">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                      </tr>
                    </thead>

                    <tbody id="productTable">
                      <tr>
                        <td>Luxury Handbag</td>
                        <td className="price">1200</td>
                        <td><input type="number" defaultValue="2" className="form-control qty" /></td>
                        <td className="total">0</td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="mt-3">
                    <div className="d-flex justify-content-between">
                      <span>Subtotal</span>
                      <span id="subtotal">$0</span>
                    </div>

                    <div className="d-flex justify-content-between">
                      <span>Shipping Cost</span>
                      <span>$20</span>
                    </div>

                    <div className="d-flex justify-content-between">
                      <span>Discount</span>
                      <span className="text-danger">-$500</span>
                    </div>

                    <hr />

                    <div className="d-flex justify-content-between fw-bold">
                      <span>Grand Total</span>
                      <span id="grandTotal">$0</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>

          <div className="d-flex justify-content-between align-items-center mt-4 p-3 bg-light rounded">
            <div className="d-flex align-items-center">
              <span className="me-2 fw-semibold">Status</span>

              <div className="form-check form-switch m-0">
                <input className="form-check-input" type="checkbox" id="statusToggle" defaultChecked />
                <label className="form-check-label ms-2">Active</label>
              </div>
            </div>

            <Link to="/view-order">
            <button className="btn btn-primary px-4">VIEW ORDER</button>
            </Link>
          </div>

        </section>

      </main>
    </>
  );
}

export default AddOrder;