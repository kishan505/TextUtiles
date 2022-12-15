import "./App.css";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from 'react'
import Alert from "./Components/Alert";


function App() {
  const[Mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
        msg: message,
        type: type
    })
    setTimeout(() =>{
      setAlert(null)
    },1500);
  }

  const toggleMode = () => {
    if (Mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor = '#17233d';
        showAlert("Dark mode has been enable", "success")
    }
    else {
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been enable", "success")
    }
  };

  return (
    <>
      <Navbar title="TextUtils" mode={Mode} toogleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter The text to Analyze Below" mode={Mode} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
