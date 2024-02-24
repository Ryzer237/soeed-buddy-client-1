import React, { useState } from 'react'
import {UseNavigate} from "react"
import { startStopRecording, audioURL, blob } from './RecordAudio.mjs'
import axios from 'axios';

const App = () => {
  // fetch data from backend (as JSON)
  const fetchData = async () => {
    const resp = await axios.get("/api");
  }
  const[result,updateResult]=useState(false)
const [text,setText]=useState("Welcome to speech buddy");
const revist=()=>{
  let navigate=UseNavigate();
  let path='./index.js'
  navigate('/')
}
const [missStrings,setMissArr]=useState([])
const [misslen,setmisslen]=useState(0);
const [len,setlength]=useState(0)
  const handleParaGeneration = async () => {
    try {
      const response = await axios.get('/generatePara');
      console.log("Response: ", response.data)
      setText(response.data.text)
      setlength((response.data.text).length)
      setHide(true)
    } catch (error){
      console.log("Error generating text: ", error);
    }
  }
  const[correct,setCorrArr]=useState([])
  const[hide,setHide]=useState(false)
  const handleSentenceGeneration = async () => {
    try {
      const response = await axios.get('/generateChuck');
      setText(response.data.text)
      setlength((response.data.text).length)
      setHide(true)
      console.log("Response: ", response.data)
    } catch (error){
      console.log("Error generating text: ", error);
    }
  }
  const handleSentenceSearchGeneration = async () => {
    try {
      const response = await axios.get('/generateChuckSearch');
      setText(response.data.text)
      setlength((response.data.text).length)
      setHide(true)
      console.log("Response: ", response.data)
    } catch (error){
      console.log("Error generating text: ", error);
    }
  }
  const[change,setChange]=useState(false)
  const [load,setLoad]=useState("welcome")
  const[help,setcolur]=useState("green")
  const handlemouseover=()=>{
setcolur("red")
  }
  const [audiolen,setnewlen]=useState(0)
const handlemouseout=()=>{
  setcolur("blue")
}
  const handleTranscript = async () => {

    const formData = new FormData();
    formData.append('audio', blob, 'recording.webm');
    updateResult(true)
    // Send data to backend
    try {
      console.log(formData);
      const response = await axios.post('/transcribeAudio', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
      });
      // setTranscript(response.data.transcript); // Assuming backend sends transcript in data
      console.log("Backend Response: ",response.data)
      setMissArr(response.data.missedArr)
      setCorrArr(response.data.correctArr)
      setChange(true)
      setnewlen((response.data.correctArr).length)
      setmisslen((response.data.missedArr).length)
    } catch (error) {
      console.error('Error uploading audio:', error);
    }

    // reader.readAsArrayBuffer(audioURL); // Start reading Blob data
  }

  const handleRecording = () => {
    startStopRecording();
    // console.log("out in freedom of mjs")
  }
  return (

    <div style={{display:"flex",justifyContent:"center", marginTop:"50px", marginleft:"50px",height:"600px", backgroundcolor:"blue"}}>
 
    <div style={{backgroundColor:"PapayaWhip",width:"600px", boxShadow:" rgb(38, 57, 77) 0px 20px 30px -10px"}}><h1 style={{fontSize:"30px",display:"flex",justifyContent:"center",fontFamily:"Audrey" ,boxShadow: "rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px"}}>{text}</h1><div><br/><br/>
   
    <div style={{paddingLeft:"10px"}}>{!hide?<button  onClick={handleParaGeneration} style={{ width: "200px",
    fontSize: "16px",
    fontWeight: "600",
    color: "#fff",
    cursor: "pointer",
    margin: "20px",
    height: "55px",
    textAlign:"center",
    border: "none",
    backgroundSize: "300% 100%",

    borderRadius: "50px",
    mozTransition: "all .4s ease-in-out",
    oTransition: "all .4s ease-in-out",
    webkitTransition: "all .4s ease-in-out",
    transition: "all .4s ease-in-out ",  backgroundImage:" linear-gradient(to right, #25aae1, #40e495, #30dd8a, #2bb673)",
    boxShadow: "0 4px 15px 0 rgba(49, 196, 190, 0.75)"
}}>Generate Big Para</button>:<div style={{display:"flex",justifyContent:"center",boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px"}}>press start button to get recording started</div>}</div>  <br></br><br></br>
     <div style={{paddingLeft:"10px"}}>{!hide?<button  onClick={handleSentenceGeneration} style={{ width: "200px",
    fontSize: "16px",
    fontWeight: "600",
    color: "#fff",
    cursor: "pointer",
    margin: "20px",
    height: "55px",
    textAlign:"center",
    border: "none",
    backgroundSize: "300% 100%",

    borderRadius: "50px",
    mozTransition: "all .4s ease-in-out",
    oTransition: "all .4s ease-in-out",
    webkitTransition: "all .4s ease-in-out",
    transition: "all .4s ease-in-out ",  backgroundImage:" linear-gradient(to right, #25aae1, #40e495, #30dd8a, #2bb673)",
    boxShadow: "0 4px 15px 0 rgba(49, 196, 190, 0.75)"
}}>Generate small Sentence</button>:<div style={{display:"flex",justifyContent:"center" ,boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px"}}>The sentence  above is given to test your speaking skills</div>}</div><br></br><br></br></div>
     <div style={{paddingLeft:"10px"}}>{!hide? <button  onClick={handleSentenceSearchGeneration} style={{ width: "200px",
    fontSize: "16px",
    fontWeight: "600",
    color: "#fff",
    cursor: "pointer",
    margin: "20px",
    height: "55px",
    textAlign:"center",
    border: "none",
    backgroundSize: "300% 100%",

    borderRadius: "50px",
    mozTransition: "all .4s ease-in-out",
    oTransition: "all .4s ease-in-out",
    webkitTransition: "all .4s ease-in-out",
    transition: "all .4s ease-in-out ",  backgroundImage:" linear-gradient(to right, #25aae1, #40e495, #30dd8a, #2bb673)",
    boxShadow: "0 4px 15px 0 rgba(49, 196, 190, 0.75)"
}}>Generate small sentence with word in it</button>:null}</div><br></br><br></br>
    
     <div style={{display:"flex",justifyContent:"center"}}>{hide?<button  style={{borderRadius:"30%",backgroundColor:"green"}}onClick={handleRecording}> <img style={{height:"20px"}} src="https://imgs.search.brave.com/uYaQrGSaJ9HLiY2T61g5U4wu9vAd_vJM64EivUXDmSQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9h/L2E0L01pY3JvcGhv/bmVfKDQpLnBuZw"></img>  Start/Stop</button>:null}</div> <br></br><br></br>
      <div style={{display:"flex",justifyContent:"center"}}>{hide?<button onMouseOver={handlemouseover} style={{backgroundColor:"Lime"}} onMouseOut={handlemouseout} onClick={handleTranscript}>Transcript</button>:null
      }</div><br></br><br></br>
<div style={{display:"flex",justifyContent:"center"}}>{result?<h2>{result}</h2>:null}</div>
      <br></br>
      
      <div style={{display:"flex",justifyContent:"center", boxShadow: "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px"}}>{change?<h3 style={{fontFamily:"Audrey"}}>you guessed {audiolen}/{audiolen+misslen} words correct</h3>:null}</div></div>
   
    </div>
  )
}

export default App
