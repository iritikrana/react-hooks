//------------------------------------- basic todolist with use State hook 

import React, { useState } from 'react'

const UseSHook2 = () => {
  const bioData = [
    {id:0,name:"vinod",age:26},
    {id:1,name:"thapa",age:27},
    {id:2,name:"smith",age:23}
  ]
     const [myInput, setMyInput] = useState(bioData);
    const clearArray = () =>{
      setMyInput([]);
    }

  return (
    <>
    <h1>Todo List</h1>  
         {myInput.map((currElem)=>{<h1 key={currElem.id}> {currElem.name} - {currElem.age}</h1>})} 
     
    </>
  )
}

export default UseSHook2