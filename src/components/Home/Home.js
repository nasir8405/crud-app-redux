import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import Action from "../../redux/action/action";
import { Link } from "react-router-dom";
import { EditUser } from "./EditUser";

export const Home = () => {
  const dispatch = useDispatch();
  const headerData = useSelector((state) => state.reducer.headerData);
  const bodyData = useSelector((state) => state.reducer.bodyData);
  const deleteUser = (id) => {
    dispatch(Action({ type: "DELETE_USER", payload: id }));
  };
  return (
    <div>
      {bodyData.length !== 0 ? (
        <Table striped bordered hover className="my-5">
          <thead>
            <tr>
              <th>{headerData.id}</th>
              <th>{headerData.col2}</th>
              <th>{headerData.col3}</th>
              <th>{headerData.col4}</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bodyData.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>
                    <div>{item.id}</div>
                  </td>
                  <td>
                    <div>{item.col2}</div>
                  </td>
                  <td>
                    <div>{item.col3}</div>
                  </td>
                  <td>
                    <div>{item.col4}</div>
                  </td>
                  <td>
                    <EditUser id={item.id} index={index} />
                    <Link to={`user/${item.id}`} className="btn btn-info m-2">
                      View
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteUser(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : (
        <div className="bg-secondary text-white w-50 m-auto p-2">
          Please Insert Value, Click on Above "ADD" Button
        </div>
      )}
    </div>
  );
};
