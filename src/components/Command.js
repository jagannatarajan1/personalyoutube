import React from "react";

const Command = () => {
  const commmandData = [
    {
      name: "Jagan",
      message: "How do I reset my password?",
      img: "https://avatars.githubusercontent.com/u/98205478?s=400&u=f810b95ea38207843f7d0ab71a0f6f43ae129fdc&v=4",
      replies: [
        {
          name: "SupportBot",
          message:
            "You can reset your password via the 'Forgot Password' link on the login page.",
          img: "https://xsgames.co/randomusers/avatar.php?g=pixel",
          replies: [],
        },
      ],
    },
    {
      name: "Bob",
      message: "Can someone explain the difference between React and Angular?",
      img: "https://xsgames.co/randomusers/avatar.php?g=male",
      replies: [
        {
          name: "DevGuru",
          message:
            "React is a library for building UIs, while Angular is a full-fledged framework. React uses a virtual DOM, and Angular uses a real DOM.",
          img: "https://xsgames.co/randomusers/avatar.php?g=pixel",
          replies: [],
        },
        {
          name: "TechieJoe",
          message:
            "React has a component-based architecture and offers flexibility. Angular has more built-in features like dependency injection.",
          img: "https://xsgames.co/randomusers/avatar.php?g=male",
          replies: [],
        },
      ],
    },
    {
      name: "Charlie",
      message: "Check out this new feature I added to our project!",
      img: "https://xsgames.co/randomusers/avatar.php?g=male",
      replies: [
        {
          name: "Dana",
          message: "This looks fantastic! Great work!",
          replies: [],
          img: "https://xsgames.co/randomusers/avatar.php?g=female",
        },
        {
          name: "Eve",
          message: "Could you explain how this integrates with the backend?",
          img: "https://xsgames.co/randomusers/avatar.php?g=female",
          replies: [
            {
              name: "Charlie",
              message:
                "Sure! I used a REST API endpoint to fetch data and updated the UI dynamically.",
              img: "https://xsgames.co/randomusers/avatar.php?g=male",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      name: "Frank",
      message:
        "What are the best practices for optimizing a React application?",
      img: "https://xsgames.co/randomusers/avatar.php?g=male",
      replies: [
        {
          name: "GeekGirl",
          message:
            "Use memoization techniques like `React.memo` and `useMemo`, and avoid unnecessary re-renders.",
          img: "https://xsgames.co/randomusers/avatar.php?g=female",
          replies: [
            {
              name: "Frank",
              message: "Thanks! What about lazy loading?",
              img: "https://xsgames.co/randomusers/avatar.php?g=male",
              replies: [
                {
                  name: "GeekGirl",
                  message:
                    "Yes, use `React.lazy` for code-splitting and load components only when needed.",
                  img: "https://xsgames.co/randomusers/avatar.php?g=female",
                  replies: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Grace",
      message: "The server is down! Can someone investigate?",
      img: "https://xsgames.co/randomusers/avatar.php?g=male",
      replies: [
        {
          name: "SysAdmin",
          message: "On it! Checking the logs now.",
          img: "https://xsgames.co/randomusers/avatar.php?g=male",
          replies: [
            {
              name: "Grace",
              message: "Thanks! Let me know if you need help.",
              img: "https://xsgames.co/randomusers/avatar.php?g=male",
              replies: [],
            },
          ],
        },
      ],
    },
  ];

  const Commandcontainer = ({ data }) => {
    const { name, message, replies, img } = data;
    return (
      <div className="text-white flex p-4 gap-x-7 bg-lightBlack rounded-md  border-l-white">
        <div>
          <img className="w-12 rounded-full" src={img} alt="imageofme" />
        </div>
        <div className="">
          <p className="font-semibold">@{name}</p>
          <p className="pt-3">{message}</p>
          {replies.length > 0 && (
            <div className="">
              <Commandlist data={replies} />
            </div>
          )}
        </div>
      </div>
    );
  };

  const Commandlist = ({ data }) => {
    return (
      <>
        {data.map((element, i) => (
          <Commandcontainer data={element} key={i} />
        ))}
      </>
    );
  };

  return (
    <div className="mt-2 text-white ">
      <p>Comments</p>
      <Commandlist data={commmandData} />
    </div>
  );
};

export default Command;
