import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Action from "../../redux/action/action";
import Table from "react-bootstrap/Table";

export const Home = () => {
  const dispatch = useDispatch();
  const headerData = useSelector((state) => state.reducer.headerData);
  const bodyData = useSelector((state) => state.reducer.bodyData);
  useEffect(() => {
    dispatch(Action());
  }, [dispatch]);
  return (
    <div>
      <Table striped bordered hover className="my-5">
        <thead>
          {headerData.map((item) => {
            return (
              <tr key={item.col1}>
                <th>{item.col1}</th>
                <th>{item.col2}</th>
                <th>{item.col3}</th>
                <th>{item.col4}</th>
                <th>Action</th>
              </tr>
            );
          })}
        </thead>
        <tbody>
          {bodyData.map((item) => {
            return (
              <tr key={item.col1}>
                <td>
                  <div className="h-100 d-flex align-center justify-content-center">
                    {item.col1}
                  </div>
                </td>
                <td>
                  <div className="h-100 d-flex align-center justify-content-center">
                    {item.col2}
                  </div>
                </td>
                <td>
                  <div className="h-100 d-flex align-center justify-content-center">
                    {item.col3}
                  </div>
                </td>
                <td>
                  <div className="h-100 d-flex align-center justify-content-center">
                    {item.col4}
                  </div>
                </td>
                <td>
                  <button className="btn btn-info">View</button>
                  <button className="btn btn-primary mx-2">Edit</button>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
