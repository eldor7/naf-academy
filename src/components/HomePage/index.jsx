import React from 'react'
import { Border, Container, Home,Hometext, Logo, Navbar, Navbarright } from './style'
import logo from '../../assets/img/logo.png'




const HomePage = () => {
  return (
     
    <Container>
        <Navbar>
            <Logo src={logo}/>
            <Navbarright>
                <p>Kurslar</p>
                <Border/>
                <p>Ochiq Darslar</p>
                <Border/>
                <p>Biz bilan aloqa</p>
            </Navbarright>
        </Navbar>
        <Home>
                <Hometext>
                    <h5>Zamonaviy kasblarni <br /> oʻrganib hayotingni<br/><span>180° ga</span> <br /> oʻzgartir</h5> <br />
                          <button>Ro’yhatdan o’tish</button>
                </Hometext>
            </Home>
    </Container>



  )
}

export default HomePage