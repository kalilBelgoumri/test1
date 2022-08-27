
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

  return (
    <div className="home">
      {data?.map((users) => (
        <p key={users.id}>{users.usernames}</p>
      ))}
    </div>
  );
}

export default Home;
