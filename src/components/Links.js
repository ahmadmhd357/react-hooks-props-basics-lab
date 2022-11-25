import React from 'react'

function Links(props){
   
const links=props.data.links

   return (
   <>
    <h3>Links</h3>
    <a href={links.github}>{links.github}</a>
    <a href={links.linkedin}>{links.linkedin}</a>
    </>
   )
}








export default Links