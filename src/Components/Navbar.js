import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {
  Link
} from 'react-router-dom';

export class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark shadow-lg" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)' }}>
          <div className="container-fluid">
            <Link className="navbar-brand fw-bold fs-4 d-flex align-items-center" to="/">
              <span role="img" aria-label="newspaper" className="me-2" style={{ fontSize: '1.5rem' }}>{"\ud83d\udcf0"}</span>
              <span style={{ background: 'linear-gradient(90deg, #e94560, #f5a623)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>NewsMonkey</span>
            </Link>
            <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link px-3 nav-link-custom" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link px-3 nav-link-custom" to="/business">Business</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link px-3 nav-link-custom" to="/entertainment">Entertainment</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link px-3 nav-link-custom" to="/general">General</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link px-3 nav-link-custom" to="/health">Health</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link px-3 nav-link-custom" to="/science">Science</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link px-3 nav-link-custom" to="/sports">Sports</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link px-3 nav-link-custom" to="/technology">Technology</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    )
  }
}

export default Navbar;
