import React, {useState} from 'react'

const UseStateArray = () => {
    const myBioData = [
        {id:1,name:"vinod",age:28},
        {id:2,name:"ritik",age:22},
        {id:3,name:"georgia",age:24}
    ]
    const [myArr, setMyArr] = useState(myBioData);
    const clicked = () =>{
        console.log("clicked chalda hai");
        setMyArr([]);
    }
    
  return (
    <>
    <h1>data below</h1>
    {myArr.map((currElem)=>{
        <h2>{currElem.id} - {currElem.name} - {currElem.age}</h2>
    })}
    <button onClick={clicked}>clear</button>
    {/* {myBioData.map((currElem)=>{
        <h2>{currElem.id} - {currElem.name} - {currElem.age}</h2>
    })}
    */}
    
    </>
  )
}

export default UseStateArray