import React, { Component } from 'react';
import styled from 'styled-components';
//import fonts from '../utils';



const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	background-color: #606060;
	height: 600px;

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
	font-size: 9pt;
	color: white;
	margin-top: 4rem;

`;

const Links = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	margin-top: 5rem;
	margin-bottom: 7rem;

`;

const Linksname = styled.div`
	font-size: 9pt;
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
	font-size: 9pt;
	color: #ED024B;
`;

const Eventdate = styled.div`
	font-size: 9pt;
	color: white;
`;

const Welcome = styled.div`
	display: flex;
	flex-direction: column;
	flex:6;
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

const Wallpaper = styled.img`
	width: 100%;
`;

const WallpaperContainer = styled.div`
	position: relative;
`;

const Brand = styled.div`
	border-color: white;
	border: 4px solid ;
	border-radius: 10px;
	font-size: 46pt;
	letter-spacing: 4px;
	color: white;
	padding: 1rem 2rem 1rem 2rem;
	position: absolute;
	top: 8%;
	left: 50%;
	transform: translateX(-50%);

`;


const Welcometitel = styled.div`
	font-size: 48pt;
	letter-spacing: 2px;
	color: white;
	position: absolute;
	top: 80%;
	left: 50%;
	transform: translateX(-50%);
	text-transform: none;
	${''/* font-family: ${Font.SECONDARY}; */}
	font-style: italic;
`;

class Header extends Component {
  render() {
    return (
	      <Wrapper>
	        <Navi>
	          <Opening>
	            <div>Öffnungszeiten</div>
	            {' '}
	            <div>Mo.-Fr.</div>
	            {' '}
	            <div>10.00-18.00 Uhr</div>
							{' '}
	            <div>Sa.</div>
	            {' '}
	            <div>10.00-17.00 Uhr</div>
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
	          <Titel id="header"> Damenbekleidung/ Taschen/ Accessoires </Titel>
	          <WallpaperContainer>
							<Wallpaper src={require('../assets/images/Wallpaperpic.png')} alt="wallpaper" />
							<Brand>Laufsteg</Brand>
							<Welcometitel>Willkommen</Welcometitel>
	          </WallpaperContainer>
	        </Welcome>
	      </Wrapper>
    );
  }
}

export default Header;
