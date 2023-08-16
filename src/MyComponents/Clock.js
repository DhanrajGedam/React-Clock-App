import React, {useState} from 'react'

export default function Clock() {
    let time = new Date().toLocaleTimeString();
    const[Ctime, Newtime] = useState(time);
    const UpdatedTime = ()=>{
        time = new Date().toLocaleTimeString();
        Newtime(time)
    };

    setInterval(UpdatedTime,1000);

  return (
    <div>
      <h1> The Time is -   {Ctime} </h1>
    </div>
  )
} 
