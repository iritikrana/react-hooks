import React, { useState } from 'react'

const UseSHook = () => {
    const [myName, setMyName] = useState("vinod");
    const clicked = () => {
        if (myName === "vinod") {
            setMyName("thapa")
        } else {
            setMyName("vinod")
        }

    }
  return (
    <>
    <div className="App">
       <h1>{myName}</h1>
       <button onClick={clicked}>click</button>
    </div>
    </>
  )
}

export default UseSHook