import React, { Component } from 'react';
import styled from 'styled-components';

// import { Color } from '../utils';



const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	background-color: #606060

`;

const Navi = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	text-transform: uppercase;
	letter-spacing: 2px;
	flex: 1;

`;

const Opening = styled.div`
	font-size: 10pt;
	color: white;
	margin-top: 1rem;

`;

const Links = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	margin-top: 7rem;
	margin-bottom: 7rem;

`;

const Linksname = styled.div`
	font-size: 10pt;
	color: white;
	margin-bottom: 1rem;
	margin-top: 1em;
	padding-left: 2rem;
	padding-right: 2rem;

`;

const Event = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: center;
	margin-bottom: 5rem;
`;

const Eventname = styled.div`
	font-size: 10pt;
	color: #ED024B;
`;

const Eventdate = styled.div`
	font-size: 10pt;
	color: white;
`;

const Welcome = styled.div`
	display: flex;
	flex-direction: column;
	flex:6;
	justify-content: center;
	width: 90%;
	text-transform: uppercase;
`;

const Titel = styled.div`
	font-size: 20pt;
	color: white;
	padding-top: 0.5rem;
	padding-bottom: 1rem;
	letter-spacing: 10px;
`;

const Wallpaper = styled.div`
background-image: url(${require('../assets/images/Wallpaperpic.png')});
background-position: 100%;
background-size: 100%, 100%;
background-repeat: no-repeat;
height: 90%;
`;

const Brand = styled.div`
border-color: white;
border: 4px solid ;
border-radius: 10px;
font-size: 48pt;
letter-spacing: 4px;
color: white;
margin-top: 2rem;
margin-bottom: 30rem;
margin-left: 20rem;
margin-right: 20rem;
padding-left: 1rem;
padding-right: 1rem;
padding-top: 1rem;
padding-bottom: 1rem;
`;

class Header extends Component {
  render() {
    return (
	      <Wrapper>
	        <Navi>
	          <Opening>
	            <div>Öffnungszeiten</div>
	            {' '}
	            <div>Mo.-Sa.</div>
	            {' '}
	            <div>10.00-18.00 Uhr</div>
	          </Opening>
	          <Links>
	            <Linksname>Kontakt</Linksname>
	            <Linksname>Über uns</Linksname>
	            <Linksname>Unsere Marken</Linksname>
	          </Links>
	          <Event>
	            <Eventname>
	              Nightshopping
	            </Eventname>
	            <Eventdate>
	              07.10.16
	            </Eventdate>
	          </Event>
	        </Navi>
	        <Welcome>
	          <Titel> Damenbekleidung/ Taschen/ Accessoires </Titel>
	          <Wallpaper>
	            <Brand>
	              Laufsteg
	            </Brand>
	          </Wallpaper>
	        </Welcome>
	      </Wrapper>
    );
  }
}

export default Header;
