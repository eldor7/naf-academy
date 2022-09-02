import styled from "styled-components";
import perfect from '../../assets/img/Group.svg'

export const Container  = styled.div`
background-color: #000;
height: 725px;
background-image: url(${perfect});
background-size: cover;

`

export const Navbar = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding-top: 30px;
border: 1px solid #000;

`

export const Logo = styled.img`
width: 129px;
height: 48px;
margin-left: 70px;
`

export const Navbarright = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-right: 115px;
width: 400px;
p{
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #FFFFFF;
    cursor: pointer;
}
`

export const Border = styled.div`
border: 1px solid #FFFFFF;
transform: rotate(90deg);
width: 20px;
`

export const Home = styled.div`
text-align: center;

`



export const Hometext = styled.div`
h5{
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 500;
    font-size: 60px;
    line-height: 73px;
    text-align: center;
    color: #FFAD3C;

}
span{
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 700;
    font-size: 110px;
    line-height: 136px;
    text-align: center;
    color: #FFFFFF;



}

button{
    width: 310px;
    height: 60px;
    left: 565px;
    top: 573px;
    background: linear-gradient(91.69deg, #E98700 0.82%, #FFAD3C 100%);
    border-radius: 60px;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    color: #0C0C0C;
    cursor: pointer;
   

}


`