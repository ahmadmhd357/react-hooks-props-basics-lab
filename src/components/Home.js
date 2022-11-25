import React from "react";

function Home(props) {
  // console.log(props)
  const data = props.data;
  return (
    <div id="home">
      <h1 style={{ color: props.color }}>
        {data.name} is a Web Developer from {data.city}
      </h1>
    </div>
  );
}

export default Home;
