import { useState } from "react"

const UserDetail = () => {
    const [userName, setUserName]=useState("Ram")
    const [userAge, setUserAge]=useState(21);
    const updateUserName = () =>{
        // setUserName("Sam")
        userName = "Ram"?setUserName("Sam"):setUserName("Ram")
    };
    const updateUserAge = () =>{
        // setUserAge(userAge+1)
        userAge = 25?setUserAge(25):setUserAge(21);
    };
  return (
    <>
        <h1>User Details</h1>
        <h3>{userName}</h3>
        <h3>{userAge}</h3>
        <button onClick={updateUserName}>Update UserName</button>
        <button onClick={updateUserAge}>Update Age</button>
    </>
  )
}

export default UserDetail
