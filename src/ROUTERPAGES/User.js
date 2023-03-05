import React, { useState } from "react";

const User = () => {
  const [edit, setEdit] = useState("click edit button to set your message");

  const getNameMail = (key) => {
    return sessionStorage.getItem(key)
      ? JSON.parse(sessionStorage.getItem(key))
      : [];
  };

  const userName = getNameMail("User")[0].name;
  const userMail = getNameMail("User")[0].email;

  const deleteHandler = () => {
    let answer = prompt("Are you sure delete this user ? y/n");
    if (answer === "y") {
      localStorage.removeItem("User");
      alert("User Deleted !");
    } else {
      alert("User not delete.....");
    }
  };

  const editHandler = () => {
    setEdit(prompt("Enter your message"));
  };

  return (
    <div className="userCartMainDiv">
      <h1>User Profile</h1>
      <div className="userCart">
        <img src="./img/profile1.png" alt="userPic" />
        <h2>{userName}</h2>
        <h4>{userMail}</h4>
        <h4>{edit}</h4>
        <div className="buttons">
          <button onClick={editHandler}>
            <i className="far fa-edit fa-2x"></i>
          </button>
          <button onClick={deleteHandler}>
            <i className="far fa-trash-alt fa-2x"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default User;
