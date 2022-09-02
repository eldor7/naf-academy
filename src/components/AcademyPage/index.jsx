import React from 'react'
import { Academycon, Border, Borderr, Down, Job, Jobimg, Online, Onlineimg, Price, Priceimg, Sertificat, Sfimg, Takliflar, Teach, Teacher, Teacherimg, Teachimg } from './style'
import priceimg from '../../assets/img/price.png'
import teacherimg from '../../assets/img/teacher.png'
import teachimg from '../../assets/img/teach.png'
import onlineimg from '../../assets/img/compyuter.png'
import jobimg from '../../assets/img/file.png'
import sfimg from '../../assets/img/text.png'


const AcademyPage = () => {
  return (
    <Academycon>
      <h1>NIMA UCHUN <span>NAF IT ACADEMY?</span></h1>
      <Takliflar>
        <Price>
        <Priceimg src={priceimg} />
          <h2>Hamyonbop narx. </h2> 
          <Borderr/>
          <p>Kurslarning narxlari hamyonbop va <br />
           chegirmalarga boy qilib belgilangan. <br />
           <span>Chegirmalar haqida pastda batafsil tanishasiz!</span></p>
        </Price>
        <Teacher>
        <Teacherimg src={teacherimg} />
          <h2>Malakali murabbiylar</h2> 
          <Border/>
          <p>O‘z sohasida kamida 3 <span>yillik tajriba</span> va <span>real <br />
           keyslarga</span> ega ustozlar ta’lim beradi. </p>
        </Teacher>
        <Teach>
        <Teachimg src={teachimg} />
          <h2>Sifatli ta'lim</h2>
          <Border/>
          <p>Ustozlarimiz malakali mutaxassislarni <br />
           yetishtirib chiqarish uchun <span>o‘z bilimlarini <br />
            qizg‘anishmaydi.</span> Buni o‘quvchilarimiz <br />
             natijalarida ham ko‘rishingiz mumkin.</p>
        </Teach>
      </Takliflar>
      <Down>
        <Online>
          <Onlineimg src={onlineimg}/>
          <h2>Online ta’lim olish <br />imkoniyati</h2>
          <Border/>
          <p>Sizning ortiqcha vaqtingiz va pulingizni <br />
           tejash maqsadida <span>sifatli online ta’lim</span> <br />
           berishni ham yo‘lga qo‘yganmiz.</p>
        </Online>
        <Job>
          <Jobimg src={jobimg}/>
          <h2>Ishga joylashish <br />imkoniyati</h2>
          <Border/>
           <p>Biz faqat ta’lim bermaymiz, balki <br />
            o‘quvchilarimizga <span>ish topishiga ham</span> <br />
            yordam beramiz.</p>
        </Job>
        <Sertificat>
          <Sfimg src={sfimg} />
          <h2>Sertifikat olish <br /> imkoni</h2>
          <Border/>
          <p>Kurslarni bitirganingizdan so‘ng sizga <br />
          <span>mutaxassislik sertifikatlari</span> beriladi va siz bu <br />
            sertifikat orqali ishga joylashishingiz <br />
           osonlashadi.</p>
        </Sertificat>
      </Down>
      <button>Ro’yhatdan o’tish</button>
    </Academycon>
  )
}

export default AcademyPage