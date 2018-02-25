import React, { Component } from 'react';
import styled from 'styled-components';
import { Font, FONT_URL } from '../utils';
import Navigation from './headerComponents/Navigation.js';
import Brand from './headerComponents/Brand.js';
import Opening from './headerComponents/Opening.js';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-color: #606060;
	height: 500px;
	z-index: -1;

	@media (min-width: 480px) {
		height: 600px;
	}

	@media (min-width: 768px) {
		height: 700px;
	}

	@media (min-width: 992px) {
		height: 800px;
	}
`;

const Welcome = styled.div`
	display: flex;
	flex-direction: column-reverse;
	flex:6;
	width: 100%;
	text-transform: uppercase;
	z-index: 1;
	align-items: center;

	@media (min-width: 992px) {
		flex-direction: row;
	}

`;

const Titel = styled.div`
	display: flex;
	font-size: 8.5pt;
	color: white;
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;
	letter-spacing: 0px;
	align-self: center;
	margin-left: 0rem;
	text-transform: uppercase;

	@media (min-width: 480px) {
		font-size: 9pt;
		letter-spacing: 4px;
		padding-top: 0.75rem;
		padding-bottom: 0.75rem;
	}

	@media (min-width: 768px) {
		font-size: 12pt;
		letter-spacing: 6px;
		padding-top: 1rem;
		padding-bottom: 1rem;
	}

	@media (min-width: 992px) {
		margin-left: 1rem;
		font-size: 16pt;
		letter-spacing: 9px;
		padding-top: 1rem;
		padding-bottom: 1rem;
	}

	@media (min-width: 1035px) {
		margin-left: 10rem;
	}
`;

const WallpaperContainer = styled.div`
	position: relative;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: -1;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: -1;
		background-size: cover;
		background-image: url(${require('../assets/images/Wallpaperpic.png')});
		background-position: center;
	}
`;

// const WhiteBackground = styled.div`
// 	position: absolute;
// 	bottom: 0;
// 	left: 0;
// 	width: 100%;
// 	background-color: white;
// 	z-index: -1;
// 	height: 40%;
//
// 	@media (min-width: 480px) {
// 		height: 38%;
// 	}
//
// 	@media (min-width: 768px) {
// 		height: 40%;
// 	}
//
// 	@media (min-width: 968px) {
// 		height: 31%;
// 	}
// 	@media (min-width: 992px) {
// 		height: 12%;
// 	}
//
// `;

class Header extends Component {
  render() {
    return (
	      <Wrapper>
					<Titel id="header"> Damenbekleidung/ Taschen/ Accessoires </Titel>
	        <Welcome>
	          <Navigation eventDate= "07.10.2016"/>
	          <WallpaperContainer>
						<Brand/>
						<Opening OpenWeek= "10.00-18.00 Uhr" OpenWeekEnd="10.00-17.00 Uhr" />
	          </WallpaperContainer>
	        </Welcome>
					{/* <WhiteBackground/> */}
	      </Wrapper>

    );
  }
}

export default Header;
