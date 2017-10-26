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


`;

const Opening = styled.div`
	font-size: 10pt;
	color: white;
	margin-top: 5rem;
	justify-content: center;
`;

const Links = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: center;

`;

const Linksname = styled.div`
font-size: 10pt;
color: white;

`;

const Event = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: center;

`;

const Eventname = styled.div`
font-size: 10pt;
color: #ED024B;

`;

const Eventdate = styled.div`
font-size: 10pt;
color: white;

`;


const Titel = styled.div`
	font-size: 24pt;
	color: white;
	justify-content: center;

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
				<Titel> DAMENBEKLEIDUNG/ TASCHEN/ ACCESSOIRES </Titel>
			</Wrapper>
		);
	}
}

export default Header;
