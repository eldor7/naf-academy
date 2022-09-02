import React from 'react'
import { Conimg, Conleft, Conright, Conrightt, Contact, Leftimg, Rightcon, Seilcon, Seilleft, Themcon } from './styled'
import leftimg  from '../../assets/img/kkkk.png'
import conimg from '../../assets/img/aaa.png'




const SeilPage = () => {
  return (
    <Seilcon>
        <Themcon>
            <h1>REAL IMKONIYATLAR TAQDIM ETUVCHI <span>CHEGIRMALAR</span></h1>
            <p>Agar doʻstingiz <span>sizning tavsiyangizga</span> koʻra bizning oʻquv markazimizda taʼlim olsa, bizdagi istalgan<br />
              kursning dastlabki oyi uchun <span>50% chegirmani</span> qoʻlga kiritasiz! </p>
        </Themcon>
        <Seilleft>
            <Leftimg src={leftimg}/>
            <Rightcon>
                <h1>DO’STING BILAN KEL <br /><br /> <span>50%</span> </h1>
                <p>Chegirma bizdan</p>
            </Rightcon>
        </Seilleft>
        <Contact>
            <Conleft>
                <h1>NAF IT ACADEMY <br /><span>BILAN BOG’LANISH</span></h1>
                <Conimg src={conimg}/>
            </Conleft>
            <Conright>
                <h4>Kontaktlaringizni qoldiring va biz sizga<br /> yaqin orada bog’lanamiz</h4>
                <Conrightt>
                    <p>O’z ma’lumotlaringizni qoldiring</p>
                    <label htmlFor="">Ism</label>
                    <input type="text" />
                    <label htmlFor="">Telefon <span>(Ko’rsatilishi shart)</span></label>
                    <input type="number" />
                    <label htmlFor="">Xabaringizni qoldiring</label>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <button>Xabar qoldirish</button>
                    <input type="checkbox" name="" id="checkboxx" />
                    <label htmlFor="" id='chekboxt' >Men shaxsiy ma'lumotlarni qayta ishlashga <br /> rozilik beraman va <span>maxfiylik siyosatiga</span> roziman</label>
                </Conrightt>
            </Conright>
        </Contact>
    </Seilcon>
  )
}

export default SeilPage