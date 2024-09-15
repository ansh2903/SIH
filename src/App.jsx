import React, { useState } from "react";
import List from "./components/List/List";
import Chat from "./components/Chat/Chat";
import Navbar from "./components/NavBar/Navbar";
import Login from "./components/Login/Login";

const App = () => {
  const user = true;
  return (
    <>
      {user ? (
        <>
          <Navbar />
          <div className="container">
            <List />
            <Chat />
          </div>
        </>
      ) : (
        <Login />
      )}
    </>
  );
};

export default App;
