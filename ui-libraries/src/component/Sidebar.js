import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <aside class="menu">
        <p class="menu-label">Administration</p>
        <ul class="menu-list">
          <li>
            <NavLink to={"/dashboard"}>Dashboard</NavLink>
          </li>
          <li>
            <NavLink to={"/table-course"}>Course</NavLink>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
