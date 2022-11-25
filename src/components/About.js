import React from "react";
import Links from './Links'
function About(props) {
  const data =props.data;
  if(data.bio){
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{data.bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links data={data}/>
    </div>
  );}
  else {
    return (
      <div id="about">
        <h2>About Me</h2>
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
        {/* add your <Links /> component here */}
      </div>
  )}
}

export default About;
