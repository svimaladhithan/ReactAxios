import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    await axios
      .get("https://6643b4e76c6a65658708176f.mockapi.io/api/users")
      .then((res) => setUsers(res.data))
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {users.map((element, index) => {
          return (
            <div key={index}>
              <div className="col">
                <div className="card">
                  <div className="card-header">
                    <h1>{element.user_id}</h1>
                    <h1>{element.name}</h1>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{element.username}</h5>
                    <h6 className="card-title">{element.email}</h6>
                    <h6 className="card-title">{element.phone}</h6>
                    <p className="card-text">{element.address}</p>
                    <p className="card-text">Company:{element.company}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
