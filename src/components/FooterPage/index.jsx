import React from 'react'
import { About, CNScon, Footercon, Footerimg, Footerleft, Inst, Logo, Meta, Telegram, Youtube } from './style'
import logo from '../../assets/img/logo.png'
import footerimg from '../../assets/img/map.png'
import inst from '../../assets/img/inst.png'
import youtube from '../../assets/img/youtube.png'
import telegram from '../../assets/img/telegram.png'
import meta from '../../assets/img/meta.png'





const FooterPage = () => {
  return (

    <Footercon>
      <Footerleft>
          <Logo src={logo}/>
          <About>
          <label htmlFor="">Adres</label>
          <span>Toshkent, Chilonzor tumani, Shirin chorraxasi</span>
          <label htmlFor="">Telefon nomer</label>
          <span>+99895 111 35 37</span>
          <label htmlFor="">Ijtimoiy tarmoqlar</label>
          </About>
          <CNScon>
            <Inst src={inst}/>
            <Youtube src={youtube}/>
            <Telegram src={telegram}/>
            <Meta src={meta}/>
          </CNScon>
      </Footerleft>
      <Footerimg src={footerimg}/>
    </Footercon>




  )
}

export default FooterPage