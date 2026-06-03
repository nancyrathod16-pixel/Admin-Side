import React from "react";

import pro6 from "../assets/img/pro6.jpg";
import h1 from "../assets/img/h1.jpeg";
import wa1 from "../assets/img/wa1.jpeg";
import f3 from "../assets/img/f3.webp";
import h7 from "../assets/img/h7.jpg";
import glasses from "../assets/img/glasses.jpg";
import perfume from "../assets/img/per.webp";
import pro4 from "../assets/img/pro4.jpg";
import h4 from "../assets/img/h4.jpg";
import skin from "../assets/img/sk.jpg";
import dia1 from "../assets/img/diamond1.webp"
import dia2 from "../assets/img/diamond4.jpg"


function ViewProducts() {
  return (
    <>
      <main id="main" className="main">

        <div className="pagetitle">
          <h1 style={{ textAlign: "center" }}>View Products</h1>
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

                    <a href="/add-new-pro">
                      <button type="button" className="btn btn-primary">ADD PRODUCT</button>
                    </a>

                  </div>
                </div>

                <table className="table datatable text-center align-middle">
                  <thead className="table-dark">
                    <tr>
                      <th>ID</th>
                      <th>IMAGE</th>
                      <th>PRODUCT NAME</th>
                      <th>CATEGORIES</th>
                      <th>PRICE</th>
                      <th>STOCK</th>
                      <th>STATUS</th>
                      <th>FEATURED</th>
                      <th>ACTIONS</th>
                    </tr>
                  </thead>

                  <tbody>

                    <tr>
                      <td>101</td>
                      <td><img src={pro6} width="50" className="rounded" /></td>
                      <td>Luxury Handbag</td>
                      <td>Fashion</td>
                      <td>$2,500</td>
                      <td>10</td>
                      <td><span className="badge bg-success">Active</span></td>
                      <td><span className="badge bg-warning text-dark">Yes</span></td>
                      <td>
                        <i className="bi bi-pencil-square text-primary me-2"></i>
                        <i className="bi bi-eye text-success me-2"></i>
                        <i className="bi bi-trash text-danger"></i>
                      </td>
                    </tr>

                    <tr>
                      <td>102</td>
                      <td><img src={h1} width="50" className="rounded" /></td>
                      <td>Diamond Necklace</td>
                      <td>High Jewellery</td>
                      <td>$5,200</td>
                      <td>5</td>
                      <td><span className="badge bg-success">Active</span></td>
                      <td><span className="badge bg-warning text-dark">Yes</span></td>
                      <td>
                        <i className="bi bi-pencil-square text-primary me-2"></i>
                        <i className="bi bi-eye text-success me-2"></i>
                        <i className="bi bi-trash text-danger"></i>
                      </td>
                    </tr>

                    <tr>
                      <td>103</td>
                      <td><img src={wa1} width="50" className="rounded" /></td>
                      <td>Luxury Watch</td>
                      <td>Watches</td>
                      <td>$7,500</td>
                      <td>8</td>
                      <td><span className="badge bg-danger">Inactive</span></td>
                      <td><span className="badge bg-secondary">No</span></td>
                      <td>
                        <i className="bi bi-pencil-square text-primary me-2"></i>
                        <i className="bi bi-eye text-success me-2"></i>
                        <i className="bi bi-trash text-danger"></i>
                      </td>
                    </tr>

                    <tr>
                      <td>104</td>
                      <td><img src={f3} width="50" className="rounded" /></td>
                      <td>Coat</td>
                      <td>Fashion</td>
                      <td>$5,000</td>
                      <td>20</td>
                      <td><span className="badge bg-success">Active</span></td>
                      <td><span className="badge bg-secondary">No</span></td>
                      <td>
                        <i className="bi bi-pencil-square text-primary me-2"></i>
                        <i className="bi bi-eye text-success me-2"></i>
                        <i className="bi bi-trash text-danger"></i>
                      </td>
                    </tr>

                    <tr>
                      <td>105</td>
                      <td><img src={h7} width="50" /></td>
                      <td>Gold Bracelet</td>
                      <td>Fine Jewellery</td>
                      <td>$4,500</td>
                      <td>12</td>
                      <td><span className="badge bg-success">Active</span></td>
                      <td><span className="badge bg-warning text-dark">Yes</span></td>
                      <td>
                        <i className="bi bi-pencil-square text-primary me-2"></i>
                        <i className="bi bi-eye text-success me-2"></i>
                        <i className="bi bi-trash text-danger"></i>
                      </td>
                    </tr>

                    <tr>
                      <td>106</td>
                      <td><img src={glasses} width="50" /></td>
                      <td>Luxury Sunglasses</td>
                      <td>Eyewear</td>
                      <td>$1,500</td>
                      <td>25</td>
                      <td><span className="badge bg-success">Active</span></td>
                      <td><span className="badge bg-secondary">No</span></td>
                      <td>
                        <i className="bi bi-pencil-square text-primary me-2"></i>
                        <i className="bi bi-eye text-success me-2"></i>
                        <i className="bi bi-trash text-danger"></i>
                      </td>
                    </tr>

                    <tr>
                      <td>107</td>
                      <td><img src={perfume} width="50" /></td>
                      <td>Perfume Set</td>
                      <td>Fragrance</td>
                      <td>$8,500</td>
                      <td>30</td>
                      <td><span className="badge bg-success">Active</span></td>
                      <td><span className="badge bg-warning text-dark">Yes</span></td>
                      <td>
                        <i className="bi bi-pencil-square text-primary me-2"></i>
                        <i className="bi bi-eye text-success me-2"></i>
                        <i className="bi bi-trash text-danger"></i>
                      </td>
                    </tr>

                    <tr>
                      <td>108</td>
                      <td><img src={pro4} width="50" /></td>
                      <td>Makeup Kit</td>
                      <td>Makeups</td>
                      <td>$1,200</td>
                      <td>18</td>
                      <td><span className="badge bg-danger">Inactive</span></td>
                      <td><span className="badge bg-secondary">No</span></td>
                      <td>
                        <i className="bi bi-pencil-square text-primary me-2"></i>
                        <i className="bi bi-eye text-success me-2"></i>
                        <i className="bi bi-trash text-danger"></i>
                      </td>
                    </tr>

                    <tr>
                      <td>109</td>
                      <td><img src={h4} width="50" /></td>
                      <td>Evening Coat</td>
                      <td>Fashion</td>
                      <td>$6,000</td>
                      <td>40</td>
                      <td><span className="badge bg-success">Active</span></td>
                      <td><span className="badge bg-secondary">No</span></td>
                      <td>
                        <i className="bi bi-pencil-square text-primary me-2"></i>
                        <i className="bi bi-eye text-success me-2"></i>
                        <i className="bi bi-trash text-danger"></i>
                      </td>
                    </tr>

                    <tr>
                      <td>110</td>
                      <td><img src={dia1} width="50"/></td>
                      <td>Diamond Ring</td>
                      <td>High Jewellery</td>
                      <td>$2,000</td>
                      <td>3</td>
                      <td><span className="badge bg-success">Active</span></td>
                      <td><span className="badge bg-warning text-dark">Yes</span></td>
                      <td>
                        <i className="bi bi-pencil-square text-primary me-2"></i>
                        <i className="bi bi-eye text-success me-2"></i>
                        <i className="bi bi-trash text-danger"></i>
                      </td>
                    </tr>

                    <tr>
                      <td>111</td>
                      <td><img src={skin} width="50" /></td>
                      <td>Sun cream</td>
                      <td>Skincare</td>
                      <td>$9,000</td>
                      <td>22</td>
                      <td><span className="badge bg-success">Active</span></td>
                      <td><span className="badge bg-secondary">No</span></td>
                      <td>
                        <i className="bi bi-pencil-square text-primary me-2"></i>
                        <i className="bi bi-eye text-success me-2"></i>
                        <i className="bi bi-trash text-danger"></i>
                      </td>
                    </tr>

                    <tr>
                      <td>112</td>
                      <td><img src={dia2}width="50" /></td>
                      <td>Diamond Necklace</td>
                      <td>Fine Jewellery</td>
                      <td>₹4,500</td>
                      <td>35</td>
                      <td><span className="badge bg-success">Active</span></td>
                      <td><span className="badge bg-warning text-dark">Yes</span></td>
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

export default ViewProducts;