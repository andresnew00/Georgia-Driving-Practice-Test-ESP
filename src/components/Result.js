import React from "react";
import PropTypes from "prop-types";
import { CSSTransitionGroup } from "react-transition-group";

function Result(props) {
  return (
    <CSSTransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      {props.totalScore > 75 ? (
        <div>
          Tu puntuacion es <strong>{props.totalScore} / 100 </strong>!
          APROBASTE!
        </div>
      ) : (
        <div>
          Tu puntuacion es <strong>{props.totalScore} / 100 </strong> Intenta de
          nuevo!
        </div>
      )}
    </CSSTransitionGroup>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired,
};

export default Result;
