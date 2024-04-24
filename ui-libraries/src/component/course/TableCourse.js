import React from "react";
import Table from "react-bootstrap/Table";
import Layout from "../Layout";
import { Link } from "react-router-dom";

const TableCourse = () => {
  return (
    <Layout>
      <h2 className="title">Courses</h2>
      <h3 className="subtitle">List of Course</h3>
      <Link to={"/course/add"} className="button is-primary mb-2">
        Add New
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Desc</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </Layout>
  );
};

export default TableCourse;
