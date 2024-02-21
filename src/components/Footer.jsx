import React from 'react'
import "../styles/Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart} from '@fortawesome/free-solid-svg-icons';
import { faUpLong} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const backTotop=()=>{

    window.scrollTo({top:0 , behavior:'smooth'});
  }






  return (
    <>
    <div className="footer">
     Read, study, and learn The Noble Quran.
     <p>Al-Quran is a Sadaqah Jariyah. We hope to make it easy for everyone to read, study, and learn The Noble Quran. The Noble Quran has many names including Al-Quran Al-Kareem, Al-Ketab, Al-Furqan, Al-Maw'itha, Al-Thikr, and Al-Noor.
    </p>
    <div className="footer1">Made with <FontAwesomeIcon icon={faHeart} style={{color: "black",}} /> by <a href="https://affanrashid.netlify.app">Affan Rashid</a></div>
    <FontAwesomeIcon className="top" onClick={backTotop} icon={faUpLong} />
    </div>
    
   
    </>
    
  )
}

export default Footer
