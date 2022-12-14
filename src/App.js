import "./App.css";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from 'react'


function App() {
  const[Mode, setMode] = useState('light');

  const toggleMode = () => {
    if (Mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor = 'grey';
    }
    else {
        setMode('light');
        document.body.style.backgroundColor = 'white';
    }
};

  return (
    <>
      <Navbar title="TextUtils" mode={Mode} toogleMode={toggleMode}/>
      <div className="container my-3">
        <TextForm heading="Enter The text to Analyze Below" mode={Mode} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
