import React, { useState, useEffect, useContext } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/connections.css";
import peopleData from "../data/people.json";
import PeopleCard from "../components/PeopleCard";
import { ConnectionsContext } from "../context/ConnectionsContext";

const Connections = () => {
  const {connections} = useContext(ConnectionsContext);
  return (
    <div>
      <Navbar />
      <div className="connections-container">
        <Sidebar />
        <div className="connections-content">
          <h2>My Connections</h2>
          <div className="connections-list">
            {connections.length > 0 ? (
              connections.map((person, index) => (
                <PeopleCard 
                  key={person.id} person={person}/>
              ))
            ) : (
              <p>No connections yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connections;