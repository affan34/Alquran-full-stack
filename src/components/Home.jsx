import React from 'react'
import "../styles/Homepage.css"
import {useState,useEffect} from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Maincontent from './Maincontent';
import Sidebar from '../components/Sidebar';
import { server } from '../main';


const Home = () => {
  const [surahnumber,setSurahnumber]=useState("")
  const [surahname,setSurahname]=useState("");
  const [surahnameEnglish,setSurahnameEnglish]=useState("");
  const [ayat,setAyat]=useState([]);
  const [ayatEnglish,setAyatEnglish]=useState([]);
  const [rakah,setRakah]=useState(1);
  const [refresh,setRefresh]=useState(false);
  const[loading,setLoading] =useState(false);






  const change =(value)=>{
    setRakah(value);
    // console.log("hello working")
    // console.log(rakah)
    setRefresh(prev=>!prev);
  }


  useEffect(async()=>{
    setLoading(true);
  
    await axios.get(`${server}/${rakah}//editions/quran-uthmani,en.asad,en.pickthall`).then((res)=>{
      // toast.success("Enjoy reading quran")
      // console.log(res.data)
      // console.log(res.data.data[0].name);
      setSurahname(res.data.data[0].name)
      setSurahnameEnglish(res.data.data[0].englishName)
     setSurahnumber(res.data.data[0].number)
     setAyat(res.data.data[0].ayahs)    
     setAyatEnglish(res.data.data[1].ayahs) 
     setLoading(false);
     
    }).catch((e)=>{
      // toast.error("error");
    })
   
},[refresh]);


// console.log(ayat)
// console.log(ayatEnglish)













  return (
  <>
  <Maincontent surahnumber={surahnumber} surahname={surahname} surahnameEnlgish={surahnameEnglish} ayats={ayat} ayatsEnglish={ayatEnglish}   />
<Sidebar data={change} surahnumber={surahnumber} surahname={surahname} loading={loading}/>
</>

  )
}

export default Home
