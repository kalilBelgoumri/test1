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
      usernames: "kalil",
      age: 43,
    },
  ];
  return <div>{data?.map((users) => console.log(users))}</div>;
}

export default Home;
