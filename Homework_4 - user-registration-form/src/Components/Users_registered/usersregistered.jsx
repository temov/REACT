import { useState } from "react";

const UsersRegistered = (props)=>{

   const{ registeredUsers, setRegisteredUsers } = props;

   console.log(props);

    const removeUsers = ()=>{

        setRegisteredUsers([]);


    }
    return (
        <div>
          <h2>Registered Users</h2>
          {registeredUsers.length > 0 ? (
            <ul>
              {registeredUsers.map((user, index) => (
                <li key={index}>{user.fullName}</li>
              ))}
            </ul>
          ) : (
            <p>No users registered.</p>
          )}
          <button onClick={removeUsers}>Remove Users</button>
        </div>
      );
    }
    

   


export default UsersRegistered;