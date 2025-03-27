import React, { createContext, useState, useEffect } from "react";

// Create Context
export const ConnectionsContext = createContext();

// Context Provider
export const ConnectionsProvider = ({ children }) => {
  const [connections, setConnections] = useState([]);

  // Load connections from LocalStorage on first render
  useEffect(() => {
    const storedConnections = JSON.parse(localStorage.getItem("connections")) || [];
    setConnections(storedConnections);
  }, []);

  // Function to add/remove connections
  const toggleConnection = (person) => {
    let updatedConnections = [...connections];

    if (connections.some((conn) => conn.id === person.id)) {
      updatedConnections = updatedConnections.filter((conn) => conn.id !== person.id);
    } else {
      updatedConnections.push(person);
    }

    setConnections(updatedConnections);
    localStorage.setItem("connections", JSON.stringify(updatedConnections));
  };

  return (
    <ConnectionsContext.Provider value={{ connections, toggleConnection }}>
      {children}
    </ConnectionsContext.Provider>
  );
};
