import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [createData, setCreateData] = useState({
    name: "",
    username: "",
    phone: "",
    email: "",
    address: "",
    company: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreateData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(
        `https://6643b4e76c6a65658708176f.mockapi.io/api/users/`,
        createData
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    navigate("/users");
  };
  return (
    <div className="m-2">
      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: "400px", margin: "auto" }}
      >
        <div className="form-group row">
          <label className="col-sm-3 col-form-label">ID:</label>
          <div className="col-sm-9">
            <input
              className="form-control"
              type="text"
              name="user_id"
              value={createData.user_id}
              onChange={handleChange}
            />
          </div>
        </div>
        <br />
        <div className="form-group row">
          <label className="col-sm-3 col-form-label">Name: </label>
          <div className="col-sm-9">
            <input
              className="form-control"
              type="text"
              name="name"
              value={createData.name}
              onChange={handleChange}
            />
          </div>
        </div>
        <br />
        <div className="form-group row">
          <label className="col-sm-3 col-form-label">Username:</label>
          <div className="col-sm-9">
            <input
              className="form-control"
              type="text"
              name="username"
              value={createData.username}
              onChange={handleChange}
            />
          </div>
        </div>
        <br />
        <div className="form-group row">
          <label className="col-sm-3 col-form-label">Email:</label>
          <div className="col-sm-9">
            <input
              className="form-control"
              type="text"
              name="email"
              value={createData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <br />
        <div className="form-group row">
          <label className="col-sm-3 col-form-label">Phone number:</label>
          <div className="col-sm-9">
            <input
              className="form-control"
              type="text"
              name="phone"
              value={createData.phone}
              onChange={handleChange}
            />
          </div>
        </div>
        <br />
        <div className="form-group row">
          <label className="col-sm-3 col-form-label">Address: </label>
          <div className="col-sm-9">
            <input
              className="form-control"
              type="text"
              name="address"
              value={createData.address}
              onChange={handleChange}
            />
          </div>
        </div>
        <br />
        <div className="form-group row">
          <label className="col-sm-3 col-form-label">Company:</label>
          <div className="col-sm-9">
            <input
              className="form-control"
              type="text"
              name="company"
              value={createData.company}
              onChange={handleChange}
            />
          </div>
        </div>
        <br />
        <div className="form-group row">
          <div className="col-sm-10">
            <button className="btn btn-success" type="submit">
              Create
            </button>
          </div>
        </div>  
      </form>
    </div>
  );
};

export default Create;
