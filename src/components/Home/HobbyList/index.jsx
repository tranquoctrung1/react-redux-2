import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./hobby.css";

HobbyList.propTypes = {
  hobbyList: PropTypes.array,
  activeId: PropTypes.number,
  onHobbyClick: PropTypes.func,
};

HobbyList.defaultProps = {
  hobbyList: [],
  activeId: null,
  onHobbyClick: null,
};

function HobbyList(props) {
  const { hobbyList, activeId, onHobbyClick } = props;

  const handleClick = (hobby) => {
    if (onHobbyClick) {
      onHobbyClick(hobby);
    }
  };

  return (
    <div className="hobby-list">
      {hobbyList.map((hobby) => (
        <li
          key={hobby.id}
          className={classNames({
            active: hobby.id === activeId ? true : false,
          })}
          onClick={() => handleClick(hobby)}
        >
          {hobby.title}
        </li>
      ))}
    </div>
  );
}

export default HobbyList;
