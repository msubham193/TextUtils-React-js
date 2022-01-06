import React,{useState} from 'react'




function TextForm(props) {
    const handleUpClick = () => {
        console.log("Up Clicked")
        setText(text.toUpperCase())
    }
    const handleLowClick = () => {
  
        setText(text.toLowerCase())
    }
    const handleOnChange = (event) => {
        console.log("Up Clicked")
        setText(event.target.value)
    }
    const [text,setText]  = useState('Enter Text here');
    //  setText( )
    return (
        <>
        <div className="container">
       <h1>{props.heading}</h1>
      <div className="mb-3">
        <label for="myBox" className="form-label">Example textarea</label>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
     

      <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-4" onClick={handleLowClick}>Convert to Lowercase</button>
     
       </div>
       <div className="container my-3">

         <h1>Your text summary</h1>
         
        <p>{text.split(" ").length} words and {text.length} characters </p>
        <p>{0.008 * text.split(" ").length} Minutes to Read </p>



       </div>
     
      </>
    )
}

export default TextForm
