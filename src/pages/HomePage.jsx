import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";

import { addNewHobby, setActiveHobby } from "../actions/hobby";

import HobbyList from "../components/Home/HobbyList";

HomePage.propTypes = {};

const randomNumber = () => {
  return 1000 + Math.trunc(Math.random() * 9000);
};

function HomePage(props) {
  // state => reducer => hobby in reducer => state of hobby is list and activeId => take hobby
  const hobbyList = useSelector((state) => state.hobby.list);
  const activeId = useSelector((state) => state.hobby.activeId);
  const dispatch = useDispatch();

  console.log(hobbyList);

  const handleAddHobbyClick = () => {
    // random hobby object : id + title

    const newId = randomNumber();

    const newHobby = {
      id: newId,
      title: `hobby ${newId}`,
    };

    //dispatch action to acc hobby

    const action = addNewHobby(newHobby);
    dispatch(action);
  };

  const handleHobbyClick = (hobby) => {
    const action = setActiveHobby(hobby);
    dispatch(action);
  };

  return (
    <div className="home-page">
      <h3>Redux Hook - Home page</h3>

      <button onClick={handleAddHobbyClick}>Random hobby</button>
      <HobbyList
        hobbyList={hobbyList}
        activeId={activeId}
        onHobbyClick={handleHobbyClick}
      ></HobbyList>
    </div>
  );
}

export default HomePage;
