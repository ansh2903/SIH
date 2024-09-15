import React, { useState } from "react";
import "./ChatList.css";

const ChatList = () => {
  const [addMode, setMode] = useState(false);
  return (
    <div className="chatList">
      <div className="search">
        <div className="searchBar">
          <img src="./src/assets/search.png" alt="" />
          <input type="text" placeholder="search" />
        </div>
        <img
          src={
            addMode ? "./src/assets/minus-sign.png" : "./src/assets/plus.png"
          }
          alt=""
          onClick={() => setMode((prev) => !prev)}
        />
      </div>
      <div className="items">
        <img src="./src/assets/user.png" alt="user_pfp" />
        <div className="texts">
          <span>James Clear</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="items">
        <img src="./src/assets/user.png" alt="user_pfp" />
        <div className="texts">
          <span>James Clear</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="items">
        <img src="./src/assets/user.png" alt="user_pfp" />
        <div className="texts">
          <span>James Clear</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="items">
        <img src="./src/assets/user.png" alt="user_pfp" />
        <div className="texts">
          <span>James Clear</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="items">
        <img src="./src/assets/user.png" alt="user_pfp" />
        <div className="texts">
          <span>James Clear</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="items">
        <img src="./src/assets/user.png" alt="user_pfp" />
        <div className="texts">
          <span>James Clear</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="items">
        <img src="./src/assets/user.png" alt="user_pfp" />
        <div className="texts">
          <span>James Clear</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="items">
        <img src="./src/assets/user.png" alt="user_pfp" />
        <div className="texts">
          <span>James Clear</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
