import PropTypes from "prop-types"

const MultiTypeComponent = (props) => {
  return (
    <div>
      <p>The value is:{props.value}</p>
    </div>
  )
}

export default MultiTypeComponent

MultiTypeComponent.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]).isRequired
}
