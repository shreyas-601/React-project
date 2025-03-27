import React, { useContext } from "react";
import { ConnectionsContext } from "../context/ConnectionsContext";
import "../styles/peoplecard.css";

const PeopleCard = ({ person }) => {
  const { connections, toggleConnection } = useContext(ConnectionsContext);
  const isConnected = connections.some((conn) => conn.id === person.id);

  return (
    <div className="people-card">
      <img src={person.photo} alt={person.name} />
      <h4>{person.name}</h4>
      <button 
        onClick={() => toggleConnection(person)} 
        className={isConnected ? "disconnect-btn" : "connect-btn"}
      >
        {isConnected ? "Disconnect" : "Connect"}
      </button>
    </div>
  );
};

export default PeopleCard;
