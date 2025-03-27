import React, { useMemo } from "react";
import "../styles/sidebar.css";
import PeopleCard from "./PeopleCard";
import usersData from "../data/users.json";

const Sidebar = React.memo(() => {
  console.log("Sidebar rendered!");
  const peopleList = useMemo(() => {
    return usersData.map((person) => (
      <MemoizedPeopleCard key={person.id} person={person} />
    ));
  }, [usersData]);
  return (
    <div className="sidebar">
      <h3>People You May Know</h3>
      {peopleList}
    </div>
  );
});

const MemoizedPeopleCard = React.memo(PeopleCard);

export default Sidebar;
