import React from "react";

const usersList = ({ usersList, selectUser, deleteUsers }) => {
  return (
    <ul className="allUsers">
      {
        usersList.map(user => (
          <li className="usersData" key={user.id}>

            <div className="fisrtUser">
              <h3><i class="fa-solid fa-user"></i> Name: {user.first_name} {user.last_name}</h3>
              <div><i class="fa-solid fa-lock"></i> Password: {user.password}</div>
              <div><i class="fa-solid fa-cake-candles"></i> Date of Birth: {user.birthday}</div>
              <div><i class="fa-solid fa-envelope"></i> Email: {user.email} </div>
            </div>

            <div className="twoBoton">
              <button className="userButton" onClick={() => selectUser(user)}><i className="fa-sharp fa-solid fa-pencil"></i></button>
              <button className="userButton" onClick={() => deleteUsers(user.id)}><i className="fa-sharp fa-solid fa-trash"></i> </button>
            </div>
            
          </li>
        )
        )}
    </ul>
  );
};

export default usersList;

{/* 

*/}