import React ,{useState} from "react";
import './css/Speaker.css';
import speaker from "../Data/speaker.json";
import speakerimage from '../img/zx9-speaker.jpg';

function Speaker() {

    const[SpeakerData,SetSpeakerData] = useState(speaker);
    const[count,setcount]=useState(0);
    function incrementCount(){
        setcount(count+1)
      };
      function decrementCount() {
        if(count >0){
            setcount(count-1)
        }
      };
    return(
        <div>
            <p className="headingspeaker">SPEAKERS</p>
            <div className="speakerflex">
                <speakerimagediv> 
                    <img src ={speakerimage} className="speaker" alt="no img"  />
                </speakerimagediv>
                <speakerinfodev>
                        <p className="pclass">NEW PRODUCT</p>
                        <h1>{SpeakerData.items.Name}</h1>
                        <p className="pclass2">{SpeakerData.items.Description}
                        </p>
                        <h2 className="doller">{SpeakerData.items.Price}</h2>
                        <button className="button1" onClick={decrementCount}>-</button>
                        <button className="button1" >{count}</button>
                        <button className="button1" onClick={incrementCount}>+</button>
                        <button className="button2" >ADD TO CART</button>
                </speakerinfodev>
            </div>
        </div>
    );
}

export default Speaker;