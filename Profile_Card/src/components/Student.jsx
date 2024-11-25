import React from 'react'
import PropTypes from "prop-types";

const Student = (props) => {
  return (
    <div className='student'>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>isMarried</th>
        </tr>
        </thead>
        
        <tbody>
          <tr>
              <td>{props.name}</td>
              <td>{props.age}</td>
              <td>{props.isMarried?"Yes":"No"}</td>
          </tr>
        </tbody>
      </table>

    </div>
  )
}

export default Student

Student.proptypes = {
  name:PropTypes.string,
  age:PropTypes.number,
  isMarried:PropTypes.bool
}

Student.defaultProps = {
  name:"No Name",
  age:0,
  isMarried:false
}