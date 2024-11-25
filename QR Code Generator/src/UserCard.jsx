import User from "./components/User"
import UserDetails from "./components/UserDetails"
const UserCard = () => {
  const userDetail = UserDetails;
  
  return(
    <User 
    name="James" 
    city="New York" 
    description = "Front End Developer"
    skills={['UI/UX', 'Front End Developement', 'CSS', 'JavaScript', 'React', 'Node']}
    online={true}
    profile="images/Vaishak.jpeg"
    />
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