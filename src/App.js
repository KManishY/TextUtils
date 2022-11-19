import './App.css';
import About from './components/About ';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';

import {
 Routes,
 Route,
 
} from "react-router-dom";


function App() {

  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(()=>{
      setAlert(null)
    },2000)
  }

  const [mode,setMode] = useState("light");
  const [modeText,setModeText] = useState("Dark Mode");
  const toggleMode = () => {
    if(mode == "light")
    {
      setMode("dark");
      setModeText("Light Mode");
      document.body.style.background = "#042743";
      showAlert("Dark Mode has been enabled","success");
    }
    else {
      setMode("light")
      setModeText("Dark Mode");
      document.body.style.background = "none";
      showAlert("Light Mode has been enabled","success");
    }
  }

  return (
    <>
    <Navbar title="TextUtils" about="/about.html" mode={mode} modeText={modeText} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">

<Routes>
  <Route path='/About' elements={<About/>}/>
  <Route path='/' elements={<TextForm/>}/>
</Routes>

    {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <TextForm showAlert={showAlert} heading = "Text Analyzer" mode={mode}/>
          </Route>
    </Switch>
       */}
    </div>
    </>
  );
}

export default App;


