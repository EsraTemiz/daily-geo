import React, { useState } from 'react'

const Question = ({question,answer}) => {
  const [showanswer,setShowanswer]=useState(false);
  const upDateAnswer=()=>{
    setShowanswer(!showanswer)
  }
  return (
    <div className='border m-2 p-4 rounded shadow '>
        <div className='flex mr-2'>
        
     <p>{question}</p>
     <button onClick={upDateAnswer} className={`border p-1 ml-2 rounded bg-emerald-400 hover:bg-blue-400
      `}>cevabı göster</button>
        </div>
        <div className='m-2'>{showanswer ?<div className='border-2 border-dotted bg-blue-400'>{answer}</div>: showanswer}</div>
       
    </div>
  );
}

export default Question;

