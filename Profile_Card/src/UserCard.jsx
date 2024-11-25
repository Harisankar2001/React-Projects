import User from "./components/User"
const UserCard = () => {
  return (
    <>
       <User 
        name="James" 
        city="New York" 
        description = "Front End Developer"
        skills={['UI/UX', 'Front End Developement', 'CSS', 'JavaScript', 'React', 'Node']}
        online={true}
        profile="images/Vaishak.jpeg"/>
         <User 
        name="James" 
        city="New York" 
        description = "Front End Developer"
        skills={['UI/UX', 'Front End Developement', 'CSS', 'JavaScript', 'React', 'Node']}
        online={true}
        profile="images/Vaishak.jpeg"/>
         <User 
        name="James" 
        city="New York" 
        description = "Front End Developer"
        skills={['UI/UX', 'Front End Developement', 'CSS', 'JavaScript', 'React', 'Node']}
        online={true}
        profile="images/Vaishak.jpeg"/>
    </>
  )
}

export default UserCard
{/* <User 
    name="James" 
    city="New York" 
    description = "Front End Developer"
    skills={['UI/UX', 'Front End Developement', 'CSS', 'JavaScript', 'React', 'Node']}
    online={true}
    profile="images/Vaishak.jpeg"
    /> */}