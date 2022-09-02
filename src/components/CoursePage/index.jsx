import React from 'react'
import { Comimg, Compyuter, Coursecon, Design, Designimg, Marketing, Marketingimg, Webcon, Webdesign, Webdesignimg, Webdev, Webdevimg, Webdown } from './style'
import webdevimg from '../../assets/img/webdev.png'
import marketingimg from '../../assets/img/marketing.png'
import designimg from '../../assets/img/design.png'
import webdesignimg from '../../assets/img/webd.png'
import comimg from '../../assets/img/com.png'



const CoursePage = () => {
  return (

    <Coursecon>
        <h1>AKTUAL KURSLAR</h1>
        <Webcon>
            <Webdev>
                <h2>Web dasturlash</h2>
                <span><p>9oy</p>
                <p>Oflayn</p>
                <p>108dars + amaliyot</p></span> 
                
                <Webdevimg src={webdevimg}/>
            </Webdev>
            <Marketing>
                <h2>Digital Marketing</h2>
                <span><p>3oy</p>
                <p>Oflayn</p>
                <p>36dars + amaliyot</p></span>
               <Marketingimg src={marketingimg}/>
            </Marketing>
            <Design>
            <h2>Grafik Dizayn</h2>
                <span><p>4oy</p>
                <p>Oflayn</p>
                <p>48dars + amaliyot</p></span>
                <Designimg src={designimg}/>
            </Design>
        </Webcon>
        <Webdown>
            <Webdesign>
            <h2>Web Dizayn</h2>
                <span><p>4oy</p>
                <p>Oflayn</p>
                <p>48dars + amaliyot</p></span>
                <Webdesignimg src={webdesignimg}/>
            </Webdesign>
            <Compyuter>
            <h2>Komputer savodxonligi</h2>
                <span><p>2oy</p>
                <p>Oflayn</p>
                <p>48dars + amaliyot</p></span>
                <Comimg src={comimg}/>
            </Compyuter>
        </Webdown>
        <button>Ochiq darslarni ko’rish</button>
    </Coursecon>


  )
}

export default CoursePage