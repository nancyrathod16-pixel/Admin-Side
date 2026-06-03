import React from "react";
import { Link } from "react-router-dom";

// ✅ image imports
import f1 from "../assets/img/f1.webp";
import h2 from "../assets/img/h2.jpeg";
import wa1 from "../assets/img/wa1.jpeg";
import skin from "../assets/img/sk.jpg";
import glasses from "../assets/img/glasses.jpg";
import perfume from "../assets/img/per.webp";
import pro4 from "../assets/img/pro4.jpg";
import fi1 from "../assets/img/fi1.jpg";
import pro6 from "../assets/img/pro6.jpg";
import h5 from "../assets/img/h5.jpg";

function ViewCategory() {
  return (
    <>
      <main id="main" className="main">

        <div className="pagetitle">
  <Link to="/add-new-category" style={{ textDecoration: "none", color: "inherit" }}>
    <h1 style={{ textAlign: "center" }}>VIEW CATEGORY</h1>
  </Link>
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

                    <a href="/add-new-category">
                      <button type="button" className="btn btn-primary">ADD CATEGORY</button>
                    </a>

                  </div>
                </div>

                <table className="table datatable text-center align-middle">
                  <thead className="table-dark">
                    <tr>
                      <th>ID</th>
                      <th>IMAGE</th>
                      <th>CATEGORY NAME</th>
                      <th>CATEGORY CODE</th>
                      <th>PARENT CATEGORY</th>
                      <th>DESCRIPTION</th>
                      <th>STATUS</th>
                      <th>FEATURED</th>
                      <th>ACTIONS</th>
                    </tr>
                  </thead>

                  <tbody>

                    <tr>
                      <td>1</td>
                      <td><img src={f1} width="50" className="rounded" /></td>
                      <td>Fashion</td>
                      <td>FASH-001</td>
                      <td>-</td>
                      <td>Luxury clothing collection</td>
                      <td><span className="badge bg-success">Active</span></td>
                      <td><span className="badge bg-warning text-dark">Yes</span></td>
                      <td>
                        <i className="bi bi-pencil-square text-primary me-2"></i>
                        <i className="bi bi-eye text-success me-2"></i>
                        <i className="bi bi-trash text-danger"></i>
                      </td>
                    </tr>

                    <tr>
                      <td>2</td>
                      <td><img src={h2} width="50" className="rounded" /></td>
                      <td>High Jewellery</td>
                      <td>HJ-002</td>
                      <td>Jewellery</td>
                      <td>Premium diamond jewellery</td>
                      <td><span className="badge bg-success">Active</span></td>
                      <td><span className="badge bg-warning text-dark">Yes</span></td>
                      <td>
                        <i className="bi bi-pencil-square text-primary me-2"></i>
                        <i className="bi bi-eye text-success me-2"></i>
                        <i className="bi bi-trash text-danger"></i>
                      </td>
                    </tr>

                    <tr>
                      <td>3</td>
                      <td><img src={wa1} width="50" className="rounded" /></td>
                      <td>Watches</td>
                      <td>WATCH-003</td>
                      <td>-</td>
                      <td>Luxury watches collection</td>
                      <td><span className="badge bg-danger">Inactive</span></td>
                      <td><span className="badge bg-secondary">No</span></td>
                      <td>
                        <i className="bi bi-pencil-square text-primary me-2"></i>
                        <i className="bi bi-eye text-success me-2"></i>
                        <i className="bi bi-trash text-danger"></i>
                      </td>
                    </tr>

                    <tr>
                      <td>4</td>
                      <td><img src={skin} width="50" className="rounded" /></td>
                      <td>Beauty</td>
                      <td>BEAUTY-004</td>
                      <td>-</td>
                      <td>Makeup & skincare products</td>
                      <td><span className="badge bg-success">Active</span></td>
                      <td><span className="badge bg-secondary">No</span></td>
                      <td>
                        <i className="bi bi-pencil-square text-primary me-2"></i>
                        <i className="bi bi-eye text-success me-2"></i>
                        <i className="bi bi-trash text-danger"></i>
                      </td>
                    </tr>

                    <tr>
                      <td>5</td>
                      <td><img src={glasses} width="50" className="rounded" /></td>
                      <td>Eyewear</td>
                      <td>EYE-005</td>
                      <td>Fashion</td>
                      <td>Premium sunglasses & frames</td>
                      <td><span className="badge bg-success">Active</span></td>
                      <td><span className="badge bg-warning text-dark">Yes</span></td>
                      <td>
                        <i className="bi bi-pencil-square text-primary me-2"></i>
                        <i className="bi bi-eye text-success me-2"></i>
                        <i className="bi bi-trash text-danger"></i>
                      </td>
                    </tr>

                    <tr>
                      <td>6</td>
                      <td><img src={perfume} width="50" className="rounded" /></td>
                      <td>Fragrances</td>
                      <td>FRAG-006</td>
                      <td>Beauty</td>
                      <td>Luxury perfumes collection</td>
                      <td><span className="badge bg-danger">Inactive</span></td>
                      <td><span className="badge bg-secondary">No</span></td>
                      <td>
                        <i className="bi bi-pencil-square text-primary me-2"></i>
                        <i className="bi bi-eye text-success me-2"></i>
                        <i className="bi bi-trash text-danger"></i>
                      </td>
                    </tr>

                    <tr>
                      <td>7</td>
                      <td><img src={skin} width="50" className="rounded" /></td>
                      <td>Skincare</td>
                      <td>SKIN-007</td>
                      <td>Beauty</td>
                      <td>Premium skincare products</td>
                      <td><span className="badge bg-success">Active</span></td>
                      <td><span className="badge bg-secondary">No</span></td>
                      <td>
                        <i className="bi bi-pencil-square text-primary me-2"></i>
                        <i className="bi bi-eye text-success me-2"></i>
                        <i className="bi bi-trash text-danger"></i>
                      </td>
                    </tr>

                    <tr>
                      <td>8</td>
                      <td><img src={pro4} width="50" className="rounded" /></td>
                      <td>Makeups</td>
                      <td>MAKE-008</td>
                      <td>Beauty</td>
                      <td>Luxury makeup collection</td>
                      <td><span className="badge bg-success">Active</span></td>
                      <td><span className="badge bg-warning text-dark">Yes</span></td>
                      <td>
                        <i className="bi bi-pencil-square text-primary me-2"></i>
                        <i className="bi bi-eye text-success me-2"></i>
                        <i className="bi bi-trash text-danger"></i>
                      </td>
                    </tr>

                    <tr>
                      <td>9</td>
                      <td><img src={fi1} width="50" className="rounded" /></td>
                      <td>Fine Jewellery</td>
                      <td>RING-009</td>
                      <td>Jewellery</td>
                      <td>Exclusive rings collection</td>
                      <td><span className="badge bg-success">Active</span></td>
                      <td><span className="badge bg-secondary">No</span></td>
                      <td>
                        <i className="bi bi-pencil-square text-primary me-2"></i>
                        <i className="bi bi-eye text-success me-2"></i>
                        <i className="bi bi-trash text-danger"></i>
                      </td>
                    </tr>

                    <tr>
                      <td>10</td>
                      <td><img src={pro6} width="50" className="rounded" /></td>
                      <td>Fashion</td>
                      <td>BAG-010</td>
                      <td>Fashion</td>
                      <td>Luxury handbags collection</td>
                      <td><span className="badge bg-success">Active</span></td>
                      <td><span className="badge bg-warning text-dark">Yes</span></td>
                      <td>
                        <i className="bi bi-pencil-square text-primary me-2"></i>
                        <i className="bi bi-eye text-success me-2"></i>
                        <i className="bi bi-trash text-danger"></i>
                      </td>
                    </tr>

                    <tr>
                      <td>11</td>
                      <td><img src={skin} width="50" className="rounded" /></td>
                      <td>Velvate Matte Lipsticks</td>
                      <td>Skin-011</td>
                      <td>Skincare</td>
                      <td>Premium Skincare collection</td>
                      <td><span className="badge bg-danger">Inactive</span></td>
                      <td><span className="badge bg-secondary">No</span></td>
                      <td>
                        <i className="bi bi-pencil-square text-primary me-2"></i>
                        <i className="bi bi-eye text-success me-2"></i>
                        <i className="bi bi-trash text-danger"></i>
                      </td>
                    </tr>

                    <tr>
                      <td>12</td>
                      <td><img src={h5} width="50" className="rounded" /></td>
                      <td>Necklace</td>
                      <td>High-012</td>
                      <td>High Jewellery</td>
                      <td>Luxury accessories collection</td>
                      <td><span className="badge bg-success">Active</span></td>
                      <td><span className="badge bg-secondary">No</span></td>
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

export default ViewCategory;