import React, { useState } from 'react';
import copy from "copy-to-clipboard";  


export default function TextForm(prop) {
  const [text, setText] = useState('');

  const handleUpClick = () => {
    setText(text.toUpperCase())
  }

  const handleloClick = () => {
    setText(text.toLowerCase())
  }

  const handleCopyClick = () => {
    document.getElementById("myBox").select();
    copy(text)
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  return (
    <>
    <div>
      <h1>{prop.heading}</h1>
      <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
      <button className= "btn btn-primary mx-2" onClick={handleloClick}> Convert to Lowercase</button>
      <button className= "btn btn-primary mx-2" onClick={handleCopyClick}> Copy To ClickBoard </button>
    </div>
    <div className="container my-3">

      <h2>Your Text Summery</h2>
      <p>{text === '' ? 0 : text.split(" ").length} Of Words -- {text.length} Of Character </p>
      <p>{text === '' ? 0 : 0.008 * text.split(" ").length} Of Minute To Read </p>

      <h2>Priview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
