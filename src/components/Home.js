import React from "react";

function Home() {
  const data = [
    {
      id: 1,
      usernames: "kalil",
      age: 43,
    },
    {
      id: 2,
      usernames: "sabah",
      age: 43,
    },
  ];
  return <div>{data?.map((users) => console.log(users.usernames))}</div>;
}

export default Home;
