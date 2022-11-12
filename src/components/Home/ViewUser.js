import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Table from "react-bootstrap/Table";
export const ViewUser = () => {
  const headerData = useSelector((state) => state.reducer.headerData);
  const bodyData = useSelector((state) => state.reducer.bodyData);
  const params = useParams();
  const user = bodyData.find((item) => {
    return params.id === item.id;
  });
  return (
    <div className="container my-5">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>{headerData.id}</th>
            <th>{headerData.col2}</th>
            <th>{headerData.col3}</th>
            <th>{headerData.col4}</th>
            <th>{headerData.col5}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user.id}</td>
            <td>{user.col2}</td>
            <td>{user.col3}</td>
            <td>{user.col4}</td>
            <td>{user.col5}</td>
          </tr>
        </tbody>
      </Table>
      <div>
        <Link to="/" className="btn btn-secondary">
          Home
        </Link>
      </div>
    </div>
  );
};
