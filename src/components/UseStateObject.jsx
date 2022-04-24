import React, { useState } from 'react'

const UseStateObject = () => {
    const obj = {id:1,name:"vinod",age:26};
    const [myObj, setMyObj] = useState(obj);
    const clicked = () =>{
        // setMyObj({name:"ritik"})
        setMyObj({...myObj,name:"ritik"})
    }
    
  return (
    <>
    <h1>{myObj.id} - {myObj.name} - {myObj.age}</h1>
    <button onClick={clicked}>update</button>
    </>
  )
}

export default UseStateObject