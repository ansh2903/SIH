import React, { useEffect, useRef, useState } from "react";
import EmojiPicker, { Emoji } from "emoji-picker-react";
import "./Chat.css";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  console.log(text);

  const endRef = useRef(null);
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="chat">
      <div className="top">
        <div className="chatUser">
          <img src="./src/assets/user.png" alt="usder_pfp" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Lorem, ipsum dolor sit amet</p>
          </div>
          <div className="icons">
            <img src="./src/assets/info.png" alt="info" />
          </div>
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./src/assets/user.png" alt="user_pfp" />
          <div className="text">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
              dolor culpa quaerat ad suscipit explicabo architecto nostrum ullam
              cum ex qui consequuntur, eos odio reiciendis non ab assumenda
              repudiandae. Odit!
            </p>
            <span>1 min ago.</span>
          </div>
        </div>
        <div className="message own">
          <div className="text">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
              dolor culpa quaerat ad suscipit explicabo architecto nostrum ullam
              cum ex qui consequuntur, eos odio reiciendis non ab assumenda
              repudiandae. Odit!
            </p>
            <span>1 min ago.</span>
          </div>
        </div>
        <div className="message">
          <img src="./src/assets/user.png" alt="user_pfp" />
          <div className="text">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
              dolor culpa quaerat ad suscipit explicabo architecto nostrum ullam
              cum ex qui consequuntur, eos odio reiciendis non ab assumenda
              repudiandae. Odit!
            </p>
            <span>1 min ago.</span>
          </div>
        </div>
        <div className="message own">
          <div className="text">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
              dolor culpa quaerat ad suscipit explicabo architecto nostrum ullam
              cum ex qui consequuntur, eos odio reiciendis non ab assumenda
              repudiandae. Odit!
            </p>
            <span>1 min ago.</span>
          </div>
        </div>
        <div className="message">
          <img src="./src/assets/user.png" alt="user_pfp" />
          <div className="text">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
              dolor culpa quaerat ad suscipit explicabo architecto nostrum ullam
              cum ex qui consequuntur, eos odio reiciendis non ab assumenda
              repudiandae. Odit!
            </p>
            <span>1 min ago.</span>
          </div>
        </div>
        <div className="message own">
          <div className="text">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
              dolor culpa quaerat ad suscipit explicabo architecto nostrum ullam
              cum ex qui consequuntur, eos odio reiciendis non ab assumenda
              repudiandae. Odit!
            </p>
            <span>1 min ago.</span>
          </div>
        </div>
        <div className="message">
          <img src="./src/assets/user.png" alt="user_pfp" />
          <div className="text">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
              dolor culpa quaerat ad suscipit explicabo architecto nostrum ullam
              cum ex qui consequuntur, eos odio reiciendis non ab assumenda
              repudiandae. Odit!
            </p>
            <span>1 min ago.</span>
          </div>
        </div>
        <div className="message">
          <img src="./src/assets/user.png" alt="user_pfp" />
          <div className="text">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
              dolor culpa quaerat ad suscipit explicabo architecto nostrum ullam
              cum ex qui consequuntur, eos odio reiciendis non ab assumenda
              repudiandae. Odit!
            </p>
            <span>1 min ago.</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./src/assets/camera.png" alt="camera_pfp" />
          <img src="./src/assets/paper-pin.png" alt="camera_pfp" />
        </div>
        <input
          type="text"
          placeholder="Type your message.."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img
            src="./src/assets/happy.png"
            alt="emoji_pfp"
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton">send</button>
      </div>
    </div>
  );
};

export default Chat;
