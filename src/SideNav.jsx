import React, { useState } from "react";
import "./index.css";

function SideNav() {
  const [sideNavWidth, setSideNavWidth] = useState(0);

  const openNav = () => {
    setSideNavWidth(220);
  };

  const closeNav = () => {
    setSideNavWidth(0);
  };

  return (
    <>
      <div>
        <div className="sidenav" style={{ width: sideNavWidth }}>
          <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
            &times;
          </a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
        </div>

        <div id="main" style={{ marginLeft: sideNavWidth }}>
          <span
            style={{ fontSize: "30px", cursor: "pointer" }}
            onClick={openNav}
          >
            &#9776;
          </span>
        </div>
      </div>
    </>
  );
}

export default SideNav;
