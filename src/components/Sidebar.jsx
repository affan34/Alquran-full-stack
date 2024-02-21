import React from 'react'
import "../styles/Slidebar.css"

import {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';
import { faXmark} from '@fortawesome/free-solid-svg-icons';
const Sidebar = ({data,loading}) => {

    const [disbled,setDisbled]=useState(false);
    const[tick,setTick] =useState(faBars);

  const disapper=()=>{
    setDisbled(prev=>!prev);
    {tick===faBars?setTick(faXmark):setTick(faBars)}
  }





  return (
    <>
    <FontAwesomeIcon onClick={disapper} className="bars" icon={tick} size="xl" />

{disbled? <div className="slidebar" >
      <button disabled={loading} onClick={()=>data(1)}className="button_slidebar">1. Al Fatiha</button>
      <button disabled={loading} onClick={()=>data(2)}className="button_slidebar">2. Al Baqarah</button>
      <button disabled={loading} onClick={()=>data(3)}className="button_slidebar">3. Al Imran</button>
      <button disabled={loading} onClick={()=>data(4)}className="button_slidebar">4. An-Nisa' </button>
      <button disabled={loading} onClick={()=>data(5)}className="button_slidebar">5. Al Ma'idah</button>
      <button disabled={loading} onClick={()=>data(6)}className="button_slidebar">6. Al An`am</button>
      <button disabled={loading} onClick={()=>data(7)}className="button_slidebar">7. Al A`raf</button>
      <button disabled={loading} onClick={()=>data(8)}className="button_slidebar">8. Al Anfal</button>
      <button disabled={loading} onClick={()=>data(9)}className="button_slidebar">9. Al Taubah</button>
      <button disabled={loading} onClick={()=>data(10)}className="button_slidebar">10. Yunus</button>
      <button disabled={loading} onClick={()=>data(11)}className="button_slidebar">11. Hud</button>
      <button disabled={loading} onClick={()=>data(12)}className="button_slidebar">12. Yusuf</button>
      <button disabled={loading} onClick={()=>data(13)}className="button_slidebar">13. Ar-Ra`d</button>
      <button disabled={loading} onClick={()=>data(14)}className="button_slidebar">14. Ibrahim</button>
      <button disabled={loading} onClick={()=>data(15)}className="button_slidebar">15. Al Hijr</button>
      <button disabled={loading} onClick={()=>data(16)}className="button_slidebar">16. An-Nahl</button>
      <button disabled={loading} onClick={()=>data(17)}className="button_slidebar">17. Al Isra</button>
      <button disabled={loading} onClick={()=>data(18)}className="button_slidebar">18. Al Kahf</button>
      <button disabled={loading} onClick={()=>data(19)}className="button_slidebar">19. Maryam</button>
      <button disabled={loading} onClick={()=>data(20)}className="button_slidebar">20. Ta Ha</button>
      <button disabled={loading} onClick={()=>data(21)}className="button_slidebar">21. Al Anbiya'</button>
      <button disabled={loading} onClick={()=>data(22)}className="button_slidebar">22. Al Hajj</button>
      <button disabled={loading} onClick={()=>data(23)}className="button_slidebar">23. Al Mu'minun</button>
      <button disabled={loading} onClick={()=>data(24)}className="button_slidebar">24. Al Fatiha</button>
      <button disabled={loading} onClick={()=>data(25)}className="button_slidebar">25. An-Nur</button>
      <button disabled={loading} onClick={()=>data(26)}className="button_slidebar">26. Al Furqan</button>
      <button disabled={loading} onClick={()=>data(27)}className="button_slidebar">27. Ash-Shu`ara'</button>
      <button disabled={loading} onClick={()=>data(28)}className="button_slidebar">28. An-Naml</button>
      <button disabled={loading} onClick={()=>data(29)}className="button_slidebar">29. Al Qasas</button>
      <button disabled={loading} onClick={()=>data(30)}className="button_slidebar">30. Al `Ankabut</button>
      <button disabled={loading} onClick={()=>data(31)}className="button_slidebar">31. Ar-Rum</button>
      <button disabled={loading} onClick={()=>data(32)}className="button_slidebar">32. Luqman</button>
      <button disabled={loading} onClick={()=>data(33)}className="button_slidebar">33. As-Sajdah</button>
      <button disabled={loading} onClick={()=>data(34)}className="button_slidebar">34. Al Ahzab</button>
      <button disabled={loading} onClick={()=>data(35)}className="button_slidebar">35. Saba'</button>
      <button disabled={loading} onClick={()=>data(36)}className="button_slidebar">36. Fatir</button>
      <button disabled={loading} onClick={()=>data(37)}className="button_slidebar">37. Ya Sin</button>
      <button disabled={loading} onClick={()=>data(38)}className="button_slidebar">38. As-Saffat</button>
      <button disabled={loading} onClick={()=>data(39)}className="button_slidebar">39. Sad</button>
      <button disabled={loading} onClick={()=>data(40)}className="button_slidebar">40. Az-Zumar</button>
      <button disabled={loading} onClick={()=>data(41)}className="button_slidebar">41. Ghafir</button>
      <button disabled={loading} onClick={()=>data(42)}className="button_slidebar">42. Fussilat</button>
      <button disabled={loading} onClick={()=>data(43)}className="button_slidebar">43. Ash-Shura</button>
      <button disabled={loading} onClick={()=>data(44)}className="button_slidebar">44. Az-Zukhruf</button>
      <button disabled={loading} onClick={()=>data(45)}className="button_slidebar">45. Ad-Dukhan</button>
      <button disabled={loading} onClick={()=>data(46)}className="button_slidebar">46. Al Jathiyah</button>
      <button disabled={loading} onClick={()=>data(47)}className="button_slidebar">47. Al Ahqaf</button>
      <button disabled={loading} onClick={()=>data(48)}className="button_slidebar">48. Muhammad</button>
      <button disabled={loading} onClick={()=>data(49)}className="button_slidebar">49. Al Fath</button>
      <button disabled={loading} onClick={()=>data(50)}className="button_slidebar">50. Al Hujurat</button>
      <button disabled={loading} onClick={()=>data(51)}className="button_slidebar">51. Qaf</button>
      <button disabled={loading} onClick={()=>data(52)}className="button_slidebar">52. Ad-Dhariyat</button>
      <button disabled={loading} onClick={()=>data(53)}className="button_slidebar">53. At-Tur</button>
      <button disabled={loading} onClick={()=>data(54)}className="button_slidebar">54. An-Najm</button>
      <button disabled={loading} onClick={()=>data(55)}className="button_slidebar">55. Al Qamar</button>
      <button disabled={loading} onClick={()=>data(56)}className="button_slidebar">56. Ar-Rahman</button>
      <button disabled={loading} onClick={()=>data(57)}className="button_slidebar">57. Al Waqi`ah</button>
      <button disabled={loading} onClick={()=>data(58)}className="button_slidebar">58. Al Hadid</button>
      <button disabled={loading} onClick={()=>data(59)}className="button_slidebar">59. Al Mujadilah</button>
      <button disabled={loading} onClick={()=>data(60)}className="button_slidebar">60. Al Hashr</button>
      <button disabled={loading} onClick={()=>data(61)}className="button_slidebar">61. Al Mumtahanah</button>
      <button disabled={loading} onClick={()=>data(62)}className="button_slidebar">62. As-Saff</button>
      <button disabled={loading} onClick={()=>data(63)}className="button_slidebar">63. Al Jumu`ah</button>
      <button disabled={loading} onClick={()=>data(64)}className="button_slidebar">64. Al Munafiqun</button>
      <button disabled={loading} onClick={()=>data(65)}className="button_slidebar">65. At-Taghabun</button>
      <button disabled={loading} onClick={()=>data(66)}className="button_slidebar">66. At-Talaq,</button>
      <button disabled={loading} onClick={()=>data(67)}className="button_slidebar">67. At-Tahrim</button>
      <button disabled={loading} onClick={()=>data(68)}className="button_slidebar">68. Al Mulk</button>
      <button disabled={loading} onClick={()=>data(69)}className="button_slidebar">69. Al Qalam</button>
      <button disabled={loading} onClick={()=>data(70)}className="button_slidebar">70. Al Haqqah</button>
      <button disabled={loading} onClick={()=>data(71)}className="button_slidebar">71. Al Ma`arij</button>
      <button disabled={loading} onClick={()=>data(72)}className="button_slidebar">72. Nuh</button>
      <button disabled={loading} onClick={()=>data(73)}className="button_slidebar">73. Al Jinn</button>
      <button disabled={loading} onClick={()=>data(74)}className="button_slidebar">74. Al Muzammil</button>
      <button disabled={loading} onClick={()=>data(75)}className="button_slidebar">75. Al Mudathir</button>
      <button disabled={loading} onClick={()=>data(76)}className="button_slidebar">76. Al Qiyamah</button>
      <button disabled={loading} onClick={()=>data(77)}className="button_slidebar">77. Al Insane</button>
      <button disabled={loading} onClick={()=>data(78)}className="button_slidebar">78. Al Mursalat</button>
      <button disabled={loading} onClick={()=>data(79)}className="button_slidebar">79. An-Naba'</button>
      <button disabled={loading} onClick={()=>data(80)}className="button_slidebar">80. An-Nazi`at</button>
      <button disabled={loading} onClick={()=>data(81)}className="button_slidebar">81. `Abasa</button>
      <button disabled={loading} onClick={()=>data(82)}className="button_slidebar">82. At-Takwir</button>
      <button disabled={loading} onClick={()=>data(83)}className="button_slidebar">83. Al Infitar</button>
      <button disabled={loading} onClick={()=>data(84)}className="button_slidebar">84. Al Mutaffifeen</button>
      <button disabled={loading} onClick={()=>data(85)}className="button_slidebar">85. Al Inshiqaq</button>
      <button disabled={loading} onClick={()=>data(86)}className="button_slidebar">86. Al Buruj</button>
      <button disabled={loading} onClick={()=>data(87)}className="button_slidebar">87. At-Tariq</button>
      <button disabled={loading} onClick={()=>data(88)}className="button_slidebar">88. Al A`la</button>
      <button disabled={loading} onClick={()=>data(89)}className="button_slidebar">89. Al Ghashiya</button>
      <button disabled={loading} onClick={()=>data(90)}className="button_slidebar">90. Al Fajr</button>
      <button disabled={loading} onClick={()=>data(91)}className="button_slidebar">91. Al Balad</button>
      <button disabled={loading} onClick={()=>data(92)}className="button_slidebar">92. Ash-Shams</button>
      <button disabled={loading} onClick={()=>data(93)}className="button_slidebar">93. Al Layl</button>
      <button disabled={loading} onClick={()=>data(94)}className="button_slidebar">94. Ad-Duha</button>
      <button disabled={loading} onClick={()=>data(95)}className="button_slidebar">95. Ash-Sharh</button>
      <button disabled={loading} onClick={()=>data(96)}className="button_slidebar">96. At-Tin</button>
      <button disabled={loading} onClick={()=>data(97)}className="button_slidebar">97. Al `Alaq</button>
      <button disabled={loading} onClick={()=>data(98)}className="button_slidebar">98. Al qadr</button>
      <button disabled={loading} onClick={()=>data(99)}className="button_slidebar">99. Al Bayyinah</button>
      <button disabled={loading} onClick={()=>data(100)}className="button_slidebar">100. Az-Zalzala</button>
      <button disabled={loading} onClick={()=>data(101)}className="button_slidebar">101. Al `Adiyat</button>
      <button disabled={loading} onClick={()=>data(102)}className="button_slidebar">102. Al Qari`ah</button>
      <button disabled={loading} onClick={()=>data(103)}className="button_slidebar">103. At-Takathur</button>
      <button disabled={loading} onClick={()=>data(104)}className="button_slidebar">104. Al Asr</button>
      <button disabled={loading} onClick={()=>data(105)}className="button_slidebar">105. Al Humazah</button>
      <button disabled={loading} onClick={()=>data(106)}className="button_slidebar">106. Al Fil</button>
      <button disabled={loading} onClick={()=>data(107)}className="button_slidebar">107. Al Quraish</button>
      <button disabled={loading} onClick={()=>data(108)}className="button_slidebar">108. Al Ma`un</button>
      <button disabled={loading} onClick={()=>data(109)}className="button_slidebar">109. Al Kafirun</button>
      <button disabled={loading} onClick={()=>data(110)}className="button_slidebar">110. An-Nasr</button>
      <button disabled={loading} onClick={()=>data(111)}className="button_slidebar">111. Al Masad</button>
      <button disabled={loading} onClick={()=>data(112)}className="button_slidebar">112. Al Ikhlas</button>
      <button disabled={loading} onClick={()=>data(113)}className="button_slidebar">113. Al Falaq</button>
      <button disabled={loading} onClick={()=>data(114)}className="button_slidebar">114. An-Nas</button>
     
    </div>:null}


   
    </>
  )
}

export default Sidebar
