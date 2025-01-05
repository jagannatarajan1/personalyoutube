import React, { useEffect, useState } from "react";
import LiveChat from "./LiveChat";
import { useDispatch, useSelector } from "react-redux";
import { toggleLivechat } from "../utils/livechatSlice";
import { myIMG } from "../utils/contants";

const LiveContainer = () => {
  const dispatch = useDispatch();
  const [newMessage, setNewMessage] = useState("");
  const livecommments = useSelector((store) => store.livechat);
  const comments = [
    {
      name: "Jagan",
      comment: "This stream is awesome! 😎",
      img: { myIMG },
    },
    {
      name: "Bot",
      comment: "Don't forget to like and subscribe! 👍",
      img: "https://xsgames.co/randomusers/avatar.php?g=pixel",
    },
    {
      name: "Bob",
      comment: "Can anyone recommend more channels like this? 🤔",
      img: "https://xsgames.co/randomusers/avatar.php?g=male",
    },
    {
      name: "DevGuru",
      comment: "Amazing content as always! Keep it up! 🙌",
      img: "https://xsgames.co/randomusers/avatar.php?g=pixel",
    },
    {
      name: "TechieJoe",
      comment: "Just joined! What are we talking about today? 🤩",
      img: "https://xsgames.co/randomusers/avatar.php?g=male",
    },
    {
      name: "Charlie",
      comment: "I love the energy of this stream! 🔥",
      img: "https://xsgames.co/randomusers/avatar.php?g=male",
    },
    {
      name: "Dana",
      comment: "Wow, this is so insightful! 😲",
      img: "https://xsgames.co/randomusers/avatar.php?g=female",
    },
    {
      name: "Eve",
      comment: "Can you do a live Q&A session soon? 🙋‍♀️",
      img: "https://xsgames.co/randomusers/avatar.php?g=female",
    },
    {
      name: "Charlie",
      comment: "Just subscribed! Looking forward to more streams! 🔔",
      img: "https://xsgames.co/randomusers/avatar.php?g=male",
    },
    {
      name: "Alice",
      comment: "This stream is fire! 🔥🔥",
      img: "https://xsgames.co/randomusers/avatar.php?g=female",
    },
    {
      name: "Frank",
      comment: "Loving the vibes! 💯",
      img: "https://xsgames.co/randomusers/avatar.php?g=male",
    },
    {
      name: "Sarah",
      comment: "Who else is watching this on mute? 😂",
      img: "https://xsgames.co/randomusers/avatar.php?g=female",
    },
    {
      name: "Mike",
      comment: "This channel is growing so fast! 🚀",
      img: "https://xsgames.co/randomusers/avatar.php?g=male",
    },
    {
      name: "Lara",
      comment: "I'm learning so much from this stream! 🙏",
      img: "https://xsgames.co/randomusers/avatar.php?g=female",
    },
    {
      name: "Chris",
      comment: "Can you give a shoutout to my channel? 😜",
      img: "https://xsgames.co/randomusers/avatar.php?g=male",
    },
  ];
  const handleAddNewMessage = (e) => {
    e.preventDefault();
    dispatch(
      toggleLivechat({ name: "Jagan", comment: newMessage, img: myIMG })
    );
    setNewMessage("");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const randomComment =
        comments[Math.floor(Math.random() * comments.length)];
      // setchat((prevChat) => [...prevChat, randomComment]);
      dispatch(toggleLivechat(randomComment));
      console.log(randomComment);
    }, 1000);

    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, []);
  //   console.log(chat);
  return (
    <>
      <div className="ml-2 border border-lightBlack   w-full h-[580px] rounded-lg bg-black overflow-y-scroll flex flex-col-reverse">
        <div className="flex flex-col">
          {livecommments.length > 0 &&
            livecommments.map((ele, i) => (
              <LiveChat data={ele} key={i}></LiveChat>
            ))}
        </div>
      </div>
      <form className="flex justify-between items-center w-full ml-2">
        <input
          type="text"
          placeholder="Enter your message"
          className="p-2 my-2 border-b-2 w-full mr-2 outline-none rounded-md bg-black text-white"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button
          className="px-4 py-2 border rounded-lg bg-slate-200"
          onClick={handleAddNewMessage}
        >
          Send
        </button>
      </form>
    </>
  );
};

export default LiveContainer;
