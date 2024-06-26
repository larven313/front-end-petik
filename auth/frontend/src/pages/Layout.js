import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Layout = ({ children }) => {
  return (
    <div>
      <React.Fragment>
        <Navbar />
        <div class="columns mt-6" style={{ minHeight: "100vh" }}>
          <div class="column is-2">
            <Sidebar />
          </div>
          <div class="column has-background-light">
            <main className="mt-5">{children}</main>
          </div>
        </div>
      </React.Fragment>
    </div>
  );
};

export default Layout;
