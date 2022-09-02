import React from 'react'
import { Badwork, Boderleft, Bwimg, Con, Helpcon, Helptext, Main, Maincon, Money, Moneyimg, Paragrif, Sabab, TextRight, Work, Workimg } from './style'
import moneyimg from '../../assets/img/money.png'
import workimg from '../../assets/img/work.png'
import bwimg from '../../assets/img/bwimg.png'


const StatistikaPage = () => {
  return (
    <Maincon>
        <Main>
        <Boderleft>
        </Boderleft>
        <TextRight>
            <p>Statistika ma’lumotlariga qaraganda, dunyoda <br />
            <span>60%  ODAM O’ZI YOQTIRMAGAN</span> ishda ishlashga  <br />
              majbur bo‘lar ekan.</p>
        </TextRight>
        </Main>
        <Sabab>
            <h1>BUNING ASOSIY SABABLARI:</h1>
            <Con>
            <Money>
                <Moneyimg src={moneyimg}/>
                <h2>Daromadning <br /> kamligi</h2>
            </Money>
            <Work>
                <Workimg src={workimg}/>
                <h2>O‘g‘ir jismoniy <br /> mehnat</h2>
            </Work>
            <Badwork>
                <Bwimg src={bwimg}/>
                <h2>Noqulay ish <br /> sharoiti</h2>
            </Badwork>
            </Con>
        </Sabab>
        <Paragrif>
            <h3>Albatta, oramizda ko‘pchilikda <span>USHBU MUAMMO BOR</span> yoki <span>KAFOLATLANMAGAN <br />
             TA’LIM DARGOHLARINI BITIRIB</span>, bu muammolarga <span>DUCH KELISH EHTIMOLI</span> <br />
             mavjud. Hammamizda bir savol tug‘iladi: <br /> <br /> <span>BUNGA YECHIM BORMI?</span></h3>
        </Paragrif>
        <Helpcon>
            <Helptext>
                <h2>Albatta, bugun <span>ZAMONAVIY KASBLARNI O’RGANISH</span> orqali ushbu muammollarga <br />
                    barham berish mumkin. Lekin bugun zamonaviy kasblarni <span>O’RGANISH <br />
                    AYRIMLAR UCHUN QIMMATLIK</span> qiladi. <span>ARZON KURSLAR</span> esa <span>SIFATSIZ.</span><br />
                    Aynan yuqoridagi holatlarni bartaraf etish uchun <span>NAF IT ACADEMY</span> <br />
                    sizga <span>YORDAM BERADI.</span></h2>
            </Helptext>
        </Helpcon>
    </Maincon>
  )
}

export default StatistikaPage