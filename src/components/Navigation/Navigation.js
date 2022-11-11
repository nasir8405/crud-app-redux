import React from "react";
import { Link } from "react-router-dom";
import { AddUser } from "../Home/AddUser";

export const Navigation = () => {
  return (
    <div>
      <div className="bg-dark">
        <div className="container text-white d-flex p-2 justify-content-between">
          <Link to="/" className="text-decoration-none text-light">
            <h3>CRUD APP</h3>
          </Link>
          <AddUser />
        </div>
      </div>
    </div>
  );
};
