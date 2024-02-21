import React from 'react'
import "../styles/Maincontent.css"
import "../styles/Slidebar.css"
import { recitation } from '../main'
import {useState,useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay} from '@fortawesome/free-solid-svg-icons';
import { faPause} from '@fortawesome/free-solid-svg-icons';



const Maincontent = ({surahnumber,surahname,ayats,surahnameEnlgish,ayatsEnglish}) => {

  const [isPlaying, setIsPlaying] = useState(false); 
  const [audio] = useState(new Audio()); 
  const [currentAyah, setCurrentAyah] = useState(null);
  const [ayahStates, setAyahStates] = useState({});
  const [previousAyah, setPreviousAyah] = useState(null);

 
 
 
 

  useEffect(() => {
    audio.onended = () => {
      setIsPlaying(false);
      setCurrentAyah(null);
    };
  }, [audio]);









  // console.log(ayats);
  const playaudio= (num)=>{  
    setCurrentAyah(num);
    setAyahStates(prevState => ({
      ...prevState,
      [num]: !prevState[num]
    }));
  
    
    if (num === previousAyah && isPlaying) {
    
    
      audio.pause();
      setIsPlaying(false);
     
      
    } else {
      audio.src = `${recitation}${num}.mp3`;
      audio.play();
      setIsPlaying(true);
     
    }
    setPreviousAyah(num);

  }





  return (
    <div className="main-container">
      <div className="topinfo">
       <h4> &#xFD3E;{surahnumber}&#xFD3F;</h4>
       <h2> {surahname}</h2>
       <h2  >&#xFD3E;{surahnameEnlgish}&#xFD3F;</h2>
      </div>
      <div className="main_boxes">
       
        {ayats.map((data,index)=>
        <div key={data.number}>
          <div className={`main_wrapper ${data.number === currentAyah ? 'main_wrapper_change' : ''}`}>
          <div className="ayatwrapper">
          <h3 className={`icon ${data.number === currentAyah ? 'icon_change' : ''}`}>&#xFD3E;{data.numberInSurah}&#xFD3F;</h3><h1 onClick={()=>playaudio(data.number)} className={`arabic ${data.number === currentAyah ? 'playing' : ''}`}>{data.text} </h1> 
         </div>
        <h3  className={`english ${data.number === currentAyah ? 'playing' : ''}`}>{ayatsEnglish[index].text}</h3>
        
         {data.sajda?<h5>Please perform sajda Here!</h5>:""}
       
         
         <FontAwesomeIcon className={`icon ${data.number === currentAyah ? 'icon_change' : ''}`} onClick={()=>playaudio(data.number)} style={{cursor:'pointer'}} icon={faPlay} />
       
          
      
         </div>
        
          </div>
    
        )}
     
      

      </div>
    </div>
  )
}

export default Maincontent
