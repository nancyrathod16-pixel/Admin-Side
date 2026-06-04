import React from "react";

function Sidebar() {
  return (
    <>
      <aside id="sidebar" className="sidebar">

        <ul className="sidebar-nav" id="sidebar-nav">

          <li className="nav-item">
            <a className="nav-link" href="/dashboard">
              <i className="bi bi-grid"></i>
              <span>Dashboard</span>
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#components-nav"
              data-bs-toggle="collapse"
              href="#!"
            >
              <i className="bi bi-menu-button-wide"></i>
              <span>Products</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </a>

            <ul id="components-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
              <li>
                <a href="/add-new-pro">
                  <i className="bi bi-circle"></i>
                  <span>Add New Products</span>
                </a>
              </li>
              <li>
                <a href="/view-pro">
                  <i className="bi bi-circle"></i>
                  <span>View Products</span>
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#forms-nav"
              data-bs-toggle="collapse"
              href="#!"
            >
              <i className="bi bi-journal-text"></i>
              <span>Category</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </a>

            <ul id="forms-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
              <li>
                <a href="/add-new-category">
                  <i className="bi bi-circle"></i>
                  <span>Add New Category</span>
                </a>
              </li>
              <li>
                <a href="/view-category">
                  <i className="bi bi-circle"></i>
                  <span>View Category</span>
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#tables-nav"
              data-bs-toggle="collapse"
              href="#!"
            >
              <i className="bi bi-layout-text-window-reverse"></i>
              <span>Order</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </a>

            <ul id="tables-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
              <li>
                <a href="/add-order">
                  <i className="bi bi-circle"></i>
                  <span>Add Order</span>
                </a>
              </li>
              <li>
                <a href="/view-order">
                  <i className="bi bi-circle"></i>
                  <span>View Order</span>
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#charts-nav"
              data-bs-toggle="collapse"
              href="#!"
            >
              <i className="bi bi-people"></i>
              <span>User</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </a>

            <ul id="charts-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
              <li>
                <a href="/add-new-user">
                  <i className="bi bi-circle"></i>
                  <span>Add New User</span>
                </a>
              </li>
              <li>
                <a href="/view-user">
                  <i className="bi bi-circle"></i>
                  <span>View user</span>
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#country-nav"
              data-bs-toggle="collapse"
              href="#!"
            >
              <i className="bi bi-house-door-fill"></i>
              <span>Country</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </a>

            <ul id="country-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
              <li>
                <a href="/add-new-country">
                  <i className="bi bi-circle"></i>
                  <span>Add Country</span>
                </a>
              </li>
              <li>
                <a href="/view-country">
                  <i className="bi bi-circle"></i>
                  <span>View Country</span>
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#state-nav"
              data-bs-toggle="collapse"
              href="#!"
            >
              <i className="bi bi-gem"></i>
              <span>State</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </a>

            <ul id="state-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
              <li>
                <a href="/add-new-state">
                  <i className="bi bi-gem"></i>
                  <span>Add State</span>
                </a>
              </li>
              <li>
                <a href="/view-state">
                  <i className="bi bi-circle"></i>
                  <span>View State</span>
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#city-nav"
              data-bs-toggle="collapse"
              href="#!"
            >
              <i className="bi bi-arrows-angle-expand"></i>
              <span>City</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </a>

            <ul id="city-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
              <li>
                <a href="/add-new-city">
                  <i className="bi bi-circle"></i>
                  <span>Add City</span>
                </a>
              </li>
              <li>
                <a href="/view-city">
                  <i className="bi bi-circle"></i>
                  <span>View City</span>
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#area-nav"
              data-bs-toggle="collapse"
              href="#!"
            >
              <i className="bi bi-gem"></i>
              <span>Area</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </a>

            <ul id="area-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
              <li>
                <a href="/add-new-area">
                  <i className="bi bi-circle"></i>
                  <span>Add Area</span>
                </a>
              </li>
              <li>
                <a href="/view-area">
                  <i className="bi bi-circle"></i>
                  <span>View Area</span>
                </a>
              </li>
            </ul>
          </li>

        </ul>

      </aside>
    </>
  );
}

export default Sidebar;