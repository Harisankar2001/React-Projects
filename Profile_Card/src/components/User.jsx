const UserDetails = ()=>{
    const userDetail = [
        {
            name:"James",
            city:"New York",
            description: "Front-End Developer",
            skills: ['UI/UX', 'Front End Developement', 'CSS', 'JavaScript', 'React', 'Node'],
            online:true,
            profile:"images/Vaishak.jpeg"
        },
        {
            name:"James",
            city:"New York",
            description: "Front-End Developer",
            skills: ['UI/UX', 'Front End Developement', 'CSS', 'JavaScript', 'React', 'Node'],
            online:true,
            profile:"images/Vaishak.jpeg"
        },
        {
            name:"James",
            city:"New York",
            description: "Front-End Developer",
            skills: ['UI/UX', 'Front End Developement', 'CSS', 'JavaScript', 'React', 'Node'],
            online:true,
            profile:"images/Vaishak.jpeg"
        }
    ]
    console.log(userDetail);
    return userDetail;

}


const User = (props) => {
  return (
    <div className="card-container">
      <span className={props.online?"pro online":"pro offline"}>{props.online?"ONLINE":"OFFLINE"}</span>
        <img src={props.profile} alt="User" className="img"/>
        <h3>{props.name}</h3>
        <h3>{props.city}</h3>
        <p>{props.description}</p>
        <div className="buttons">
            <button className="primary">Message</button>
            <button className="primary outline">Following</button>
        </div>
        <div className="skills">
            <h6>Skills</h6>
            <ul>
                {props.skills.map((skill, index) => (<li>{skill}</li>))}
            </ul>
        </div>
    </div>
  )
}

export default {User, UserDetails}
