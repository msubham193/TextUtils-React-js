import React,{useState} from 'react'




function TextForm(props) {
    const handleUpClick = () => {
        console.log("Up Clicked")
        setText(text.toUpperCase())
    }
    const handleOnChange = (event) => {
        console.log("Up Clicked")
        setText(event.target.value)
    }
    const [text,setText]  = useState('Enter Text here');
    //  setText( )
    return (
        <>
       <h1>{props.heading}</h1>
      <div className="mb-3">
        <label for="myBox" className="form-label">Example textarea</label>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>

      <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
      </>
    )
}

export default TextForm
