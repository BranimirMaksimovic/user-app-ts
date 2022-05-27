import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import DeleteUser from "./components/pages/DeleteUser";
import Home from "./components/pages/Home";
import NewUser from "./components/pages/NewUser";
import UpdateUser from "./components/pages/UpdateUser";
import User from "./components/pages/User";
import data from "./data/data.json";
import { NewUserType, UserType } from "./types";

function App() {
  let [users, setUsers] = useState<UserType[]>(data.users);

  let navigate = useNavigate();
  const availableGenders = new Set([...data.users.map(({ gender }) => gender)]);
  const findUser = (id: number) => users.find((user) => user.id === id);

  const deleteUser = (id: number) => {
    let newUsers = users.filter((user) => user.id !== id);

    setUsers(newUsers);
    navigate("/", { replace: true });
  };

  const updateUser = (updatedUser: UserType) => {
    let itemIndex = users.findIndex((user) => user.id === updatedUser.id);
    let tempUsers = users;
    tempUsers.splice(itemIndex, 1, updatedUser);
    setUsers(tempUsers);
    navigate("/", { replace: true });
  };

  const newUser = (newUser: NewUserType) => {
    let lastUser = users[users.length - 1];
    let newUserId = lastUser.id + 1;
    let newUsers = [...users, { id: newUserId, ...newUser }];
    setUsers(newUsers);
    console.log(newUsers);
    navigate("/", { replace: true });
  };

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home users={users} />} />
          <Route path="users">
            <Route path=":userId" element={<User findUser={findUser} />} />
            <Route
              path="delete/:userId"
              element={
                <DeleteUser findUser={findUser} deleteUser={deleteUser} />
              }
            />
            <Route
              path="update/:userId"
              element={
                <UpdateUser
                  findUser={findUser}
                  updateUser={updateUser}
                  availableGenders={availableGenders}
                />
              }
            />
            <Route
              path="create"
              element={
                <NewUser
                  newUser={newUser}
                  availableGenders={availableGenders}
                />
              }
            />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
