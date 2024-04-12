import React  , {useState} from 'react'

export default function TextForm(props) {
    const handleUppercase=()=>{
        // console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }
    const handleLowercase=()=>{
        // console.log("uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClear=()=>{
        // console.log("uppercase was clicked" + text);
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }
    const handleOnchange=(event)=>{
        console.log("Onchange");
        setText(event.target.value);
    }

// handling extra spaces
const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");
}
   

     // Declare a new state variable, which we'll call "text"
 const [text, setText] = useState('');
//  setText("new text");
    return (
        <>
    <div className='container' style={{ color:props.mode=== 'dark'?'white': '#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control"  value={text} onChange={handleOnchange} id="mybox" rows={8} defaultValue={""} />
            <button className="btn btn-primary mt-2 mx-1" onClick={handleUppercase}>Convert to uppercase</button>
            <button className="btn btn-primary mt-2 mx-1" onClick={handleLowercase}>Convert to lowercase</button>
            <button className="btn btn-primary mt-2 mx-1" onClick={handleClear}>Clear</button>
            <button className="btn btn-primary mt-2 mx-1" onClick={() => {navigator.clipboard.writeText(text);}}>Copy</button>
            <button className="btn btn-primary mt-2 mx-1" onClick={handleExtraSpaces}>Remove Spaces</button>

        </div>
    </div>
    <div className="container my-3"style={{ color:props.mode=== 'dark'?'white': '#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minute read </p>
        <h2>Preview</h2>
        <p>{text}</p>
       
                
    </div>
    </>
    )
}
