import React, { useState } from 'react';

export default function App() {
  const [isNavbarOpen, setNavbarOpen] = useState(false);

  const navStyle = {
    backgroundColor: "limegreen",
    height: "728px",
    
    width: isNavbarOpen ? "200px" : "36px",
    float: "left",
    transition: 'width 0.4s',
  };

  const imageStyle = {
    
    width: '30px',
    height: '30px',
    marginBottom: '25px',
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <nav
          className="col"
          style={navStyle}
          onMouseEnter={() => setNavbarOpen(true)}
          onMouseLeave={() => setNavbarOpen(false)}
        >
          <div className="position-sticky">
            <ul className="nav" style={{ listStyle: 'none', padding: 0 }}>
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  <img src="/icons8-home.svg" alt="Bootstrap" style={imageStyle} />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <img src="/icons8-home.svg" alt="Bootstrap" style={imageStyle} />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <img src="/icons8-home.svg" alt="Bootstrap" style={imageStyle} />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  <img src="/icons8-home.svg" alt="Bootstrap" style={imageStyle} />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  <img src="/icons8-home.svg" alt="Bootstrap" style={imageStyle} />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  <img src="/icons8-home.svg" alt="Bootstrap" style={imageStyle} />
                </a>
              </li>
            </ul>
          </div>
        </nav>
        {/* <main className="col-md-9 ms-sm-auto col-lg-10 px-4">
          <h1>Mediveda</h1>
        </main> */}
      </div>
    </div>
  );
}
