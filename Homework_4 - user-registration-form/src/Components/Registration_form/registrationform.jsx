
import { useState } from "react";
import UsersRegistered from "../Users_registered/usersregistered";

const RegistrationForm = () =>{

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [registeredUsers, setRegisteredUsers] = useState([]);

    


    const handleChangefullName = (event) => {
        setFullName(event.target.value);
      };
      const handleChangeEmail = (event) => {
        setEmail(event.target.value);
      };
      const handleChangePassword= (event) => {
        setPassword(event.target.value);
      };
      const handleFormSubmit = (event) =>{
        event.preventDefault();

        const newUser = {fullName, email, password};
        setRegisteredUsers([...registeredUsers, newUser]);
        setFullName('');
        setEmail('');
        setPassword('');
        console.log(registeredUsers)
      }


    return   (
            <div>
                <h1>User Registration Form</h1>
                <form onSubmit={handleFormSubmit}>

                    <label htmlFor="fullName">Full Name:</label>
                    <input type="text" id="fullName" value = {fullName} onChange={handleChangefullName}/><br/>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" value = {email} onChange={handleChangeEmail}/><br/>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" value = {password} onChange={handleChangePassword}/><br/>
                    <button type="submit">Submit</button>
                </form>
                
                    <UsersRegistered registeredUsers={registeredUsers} setRegisteredUsers={setRegisteredUsers} />   
        
             </div>
             )
}

export default RegistrationForm;