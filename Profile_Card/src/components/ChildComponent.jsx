import PropTypes from "prop-types";

const ChildComponent = (props) => {
  return (
    <div>
      {props.children}
    </div>
  )
}

ChildComponent.prototypes = {
    children: PropTypes.array
}

export default ChildComponent
