import React, { useEffect, useState } from "react";
import { Col, Row, Table } from "react-bootstrap";

const ManageOrder = () => {
  const [orders, setOrders] = useState([]);
  const [control, setControl] = useState(false);
  const [status, setStatus] = useState("");

  const handleStatus = (e) => {
    setStatus(e.target.value);
  };
  console.log(status);
  useEffect(() => {
    fetch("http://localhost:5000/allOrders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/deleteOrder/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          setControl(!control);
        }
      });
    console.log(id);
  };

  // set status.
  const handleUpdate = (id) => {
    fetch(`http://localhost:5000/updateStatus/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ status }),
    });

    console.log(id);
  };
  return (
    <div>
      <h1>All orders {orders.length}</h1>
      <div>
        {orders?.map((pd, index) => (
          <Row>
            <Col xs={6} md={4}>
              {pd.image}
            </Col>
            <Col xs={6} md={4}>
              {pd.type}
            </Col>
            <Col xs={6} md={4}>
              <input
                onChange={handleStatus}
                type="text"
                defaultValue={pd.status}
              />
              <button
              onClick={() => handleDelete(pd?._id)}
              className="btn bg-danger p-2"
            >
              Delete
            </button>
            <button
              onClick={() => handleUpdate(pd._id)}
              className="btn bg-success p-2"
            >
              Update
            </button>
            </Col>
            
          </Row>
        ))}
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Image Link</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        {orders?.map((pd, index) => (
          <tbody>
            <tr>
              <td>{index}</td>
              <td>{pd.type}</td>
              <td>{pd.image}</td>
              <td>
                <input
                  onChange={handleStatus}
                  type="text"
                  defaultValue={pd.status}
                />
              </td>
              <button
                onClick={() => handleDelete(pd?._id)}
                className="btn bg-danger p-2"
              >
                Delete
              </button>
              <button
                onClick={() => handleUpdate(pd._id)}
                className="btn bg-success p-2"
              >
                Update
              </button>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default ManageOrder;
