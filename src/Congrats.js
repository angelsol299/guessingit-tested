import React from "react";
import PropTypes from "prop-types";
/**
 * Functional react component for congras message
 * @function
 * @paaram {object}  props - React props.
 * @returns {JSX.Element} - Rendered component (or null if sucess props is false)
 */

const Congrats = props => {
  if (props.success) {
    return (
      <div data-test="component-congrats" className="alert alert-success">
        <span data-test="congrats-message">
          Congratulations! You have guessed the word!!
        </span>
      </div>
    );
  } else {
    return <div data-test="component-congrats" />;
  }
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
};

export default Congrats;
