import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }
    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");
    }
    const handleTiClick= ()=>{
        let newText = text.split(" ").map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join(" ");
        setText(newText);
        props.showAlert("Converted to togglecase!", "success");
    }
    const handleCamClick = ()=>{
        let newText = text.split(" ").map((word, index) => {
            if(index === 0){
                return word.toLowerCase();
            } else {
                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            }
        }).join("");
        setText(newText);
        props.showAlert("Converted to camelcase!", "success");
    }
    const handleClearClick = ()=>{
        
        let newText =(" ");
        setText(newText)
        props.showAlert("Clear text!", "success");
    }
    const handleOnChange = (event)=>{
        // console.log("Onchanged");
        setText(event.target.value);
    }
   
    const [text, setText] = useState('');
    //text = "new text"; //wrong way to change the state
    // setText("new text"); //Correct way to change to state
  return (
    <>
    
      <div className='container'style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading} </h1>
        <div className="mb-3">
            <textarea className="form-control" value= {text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleTiClick}>Convert to Titlecase</button>
        <button className="btn btn-primary mx-1" onClick={handleCamClick}>Convert to Camelcase</button>

        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
      </div>
      <div className='container my-3'style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>Your text summary</h1>
        <p>{text.trim() === "" ? 0 : text.trim().split(/\s+/).length} words and {text.trim().length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>  
    
  )
}



