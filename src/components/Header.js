import React, { Component } from 'react';
import styled from 'styled-components';
import { font } from '../utils';
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
	font-family: serif;



`;

const Opening = styled.div`
	font-size: 10pt;
	color: white;
	margin-top: 10rem;


`;

const Links = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: center;
	margin-top: 5rem;
	margin-bottom: 5rem;
`;

const Linksname = styled.div`
font-size: 10pt;
color: white;
margin-bottom: 2rem;

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


const Welcome= styled.div`
display: flex;
flex-direction: column;

`;

const Titel = styled.div`
	font-size: 24pt;
	color: white;
	justify-content: center;
	width: 95%;
	font-family: serif;
	margin-top: 1rem;

`;


const Wallpaper = styled.div`
background-image: url(${require('../assets/images/Wallpaperpic.png')});


`;

const Brand = styled.div`
border-color: white;
font-family: serif;
margin-top: 10rem;
`;

class Header extends Component {
	render() {
		return (
			<Wrapper>
				<Navi>
					<Opening>
						ÖFFNUNGSZEITEN MO.-SA. 10.00-18.00 UHR
					</Opening>
					<Links>
						<Linksname>KONTAKT</Linksname>
						<Linksname>ÜBER UNS</Linksname>
						<Linksname>UNSERE MARKEN</Linksname>
					</Links>
					<Event>
						<Eventname>
							NIGHTSHOPING
						</Eventname>
						<Eventdate>
							07.10.16
						</Eventdate>
					</Event>
				</Navi>
				<Welcome>
					<Titel> DAMENBEKLEIDUNG/ TASCHEN/ ACCESSOIRES </Titel>
					<Wallpaper>
						<Brand>
							LAUFSTEG
						</Brand>
					</Wallpaper>
				</Welcome>
			</Wrapper>
		);
	}
}

export default Header;
