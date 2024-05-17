import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Users = ({ setId }) => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [deleteData, setDeleteData] = useState([]);

  useEffect(() => {
    getData();
  }, [deleteData]);
  const getData = async () => {
    await axios
      .get("https://6643b4e76c6a65658708176f.mockapi.io/api/users")
      .then((res) => setUsers(res.data))
      .catch((error) => console.log(error));
  };
  const handleEdit = (id) => {
    setId(id);
    navigate(`/edit/${id}`);
  };
  const handleDelete = async (id) => {
    await axios
      .delete(`https://6643b4e76c6a65658708176f.mockapi.io/api/users/${id}`)
      .then(() => {
        setUsers(users.filter((user) => user.id !== id));
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <table className="table table-warning">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">email</th>
            <th scope="col">Phone</th>
            <th scope="col">Address</th>
            <th scope="col">Company</th>
            <th scope="col" className="text-center" colSpan={2}>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((ele, i) => {
            return (
              <tr key={i}>
                <th scope="row">{ele.id}</th>
                <td>{ele.name}</td>
                <td>{ele.username}</td>
                <td>{ele.email}</td>
                <td>{ele.phone}</td>
                <td>{ele.address}</td>
                <td>{ele.company}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      handleEdit(ele.id);
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      handleDelete(ele.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button
        className="btn btn-danger mb-5"
        onClick={() => navigate("/create")}
      >
        Create
      </button>
    </div>
  );
};

export default Users;
