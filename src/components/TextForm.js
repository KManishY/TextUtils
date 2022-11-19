import React , { useState } from "react";


export default function TextForm(props) {
    
    const handleUpClick = () =>{
        console.log("Text entered for upperCase");
        setText(text.toUpperCase())
        text.length>0?props.showAlert("Text converted to upper case","success"):props.showAlert("Please type something","warning")
    }

    const handleOnChange = (event) =>{
        console.log("On change ");
        setText(event.target.value)
    }

    const handleDownClick = () => {
        setText(text.toLowerCase());
        text.length>0?props.showAlert("Text converted to lower case","success"):props.showAlert("Please type something","warning")
    }

    const handleClearClick = () => {
        setText("");
    }

    const handleCopyClick = () => {
      let text = document.getElementById("textBox");
      text.select();
      navigator.clipboard.writeText(text.value);

    }

    const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));

    }

    const [text, setText] = useState("");

    
  return (
    <>
    <div className="container" style={{color:props.mode=="light"?"black":"white"}}>
      <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="textBox"
          value={text}
          placeholder = "Write your text here ......"
          onChange = {handleOnChange}
          rows="8"
          style={{backgroundColor:props.mode=="light"?"white":"#b2b2b2",color:props.mode=="light"?"black":"white"}} >

          </textarea>
        <button className="btn btn-outline-primary my-3" onClick={handleUpClick}>Convert To UpperCase</button>
        <button className="btn btn-outline-warning my-3 mx-2" onClick={handleDownClick}>Convert To LowerCase</button>
        <button className="btn btn-outline-danger my-3 mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-outline-info my-3 mx-2" onClick={handleCopyClick}>Copy Text</button>
        <button className="btn btn-outline-danger my-3" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>
    </div>
    <div className="container" style={{color:props.mode=="light"?"black":"white"}}>
        <h3>Your Text Summary</h3>
        <p> <b> {text.split(" ").length-1}</b> words and <b>{text.length}</b> characters</p>
        <h3>Preview</h3>
        <p>{text.length==0?"Enter something above for preview":text}</p>
    </div>
    </>
  );
}
