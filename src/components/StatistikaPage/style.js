import styled from "styled-components";
import helpimg from '../../assets/img/san.png'

export const Maincon = styled.div`
background-color: #000;
height: 1234px;
`

export const Main = styled.div`
display: flex;
align-items: center;

`


export const Boderleft = styled.div`
border-right: 2px solid #FFAD3C;
height: 250px;
margin-left: 300px;
margin-top: 180px;
`

export const TextRight = styled.div`
display: flex;
align-items: center;
justify-content: left;
padding-left: 80px;
border: 1px solid #fff;
margin-top: 100px;
height: 170px;
margin-left: 100px;
background-color: #fff;
width: 100%;
p{
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 27px;
    line-height: 29px;
    text-align: center;
    
}
span{
    color: #FDAA38;
}
`

export const Sabab = styled.div`
text-align: center;
h1{
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: #FFFFFF;
}

`

export const Con = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-left: 150px;
margin-right: 150px;
margin-top: 100px;
color: #FFFFFF;
h2{
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    color: #FFFFFF;
}

`


export const Money = styled.div`
background: #0D0D0D;
border: 2px solid #FEAB38;
width: 350px;
height: 300px;
h2{
    padding-top:  25px;
}
`

export const Moneyimg = styled.img`
padding-top: 60px;
`

export const Work = styled.div`
background: #0D0D0D;
border: 2px solid #FEAB38;
width: 350px;
height: 300px;
h2{
    padding-top: 8px;
}
`

export const Workimg = styled.img`
padding-top: 30px;
`


export const Badwork = styled.div`
background: #0D0D0D;
border: 2px solid #FEAB38;
width: 350px;
height: 300px;
`

export const Bwimg = styled.img`
width: 240px;
height: 195px;

`

export const Paragrif = styled.div`
padding-top: 100px;
h3{
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    color: #FFFFFF;
}
span{
    color: yellow;
}
`

export const Helpcon = styled.div`
background: url(${helpimg});
height: 386px;
background-position: center;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
margin-top: 80px;
`

export const Helptext = styled.div`
height: 216px;
text-align: center;
margin-top: 50px;
background: rgba(0, 0, 0, 0.8);
width: 1033px;
color: #fff;
span{
    color: yellow;
}
`