
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import toast, { Toaster } from "react-hot-toast"
import axios from "axios";
import LoadingBar from 'react-top-loading-bar';
import {useEffect,useState} from "react";
import PreLoader from './components/Preloader';

export function App() {
  const [progress, setProgress] = useState(0)
  useEffect(()=>{
    axios.interceptors.request.use(
      config => {
        setProgress(40);
        setTimeout(()=>{
          setProgress(100);
        },500);
        return config
      },
      error => {
        Promise.reject(error)
      }
    )
    axios.interceptors.response.use(
      config => {
        setProgress(0);
        return config
      },
      error => {
        Promise.reject(error)
      }
    )
  },[]);



  return (
    <>
     <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
       <PreLoader/>
      <Header/>
      <Home/>
    <Footer/>
    </>
  
  
  )
}
