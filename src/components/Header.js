import React, { Component } from 'react';
import styled from 'styled-components';
import { Font, FONT_URL } from '../utils';
import Navigation from './headerComponents/Navigation.js';
import Brand from './headerComponents/Brand.js';
import AccentTitle from './headerComponents/AccentTitle.js';

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	background-color: #606060;
	height: 800px;
`;

const Welcome = styled.div`
	display: flex;
	flex-direction: column;
	flex:6;
	width: 90%;
	text-transform: uppercase;
	z-index: 2;
`;

const Titel = styled.div`
	font-size: 16pt;
	color: white;
	padding-top: 1.5rem;
	padding-bottom: 1.5rem;
	letter-spacing: 9px;
`;

const Wallpaper = styled.img`
	width: 100%;
`;

const WallpaperContainer = styled.div`
	position: relative;
`;

const WhiteBackground = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	background-color: white;
	z-index: 1;
	height: 40%;

	@media (min-width: 480px) {
		height: 38%;
	}

	@media (min-width: 768px) {
		height: 40%;
	}

	@media (min-width: 968px) {
		height: 31%;
	}
	@media (min-width: 992px) {
		height: 12%;
	}

`;

class Header extends Component {
  render() {
    return (
	      <Wrapper>
				<Navigation eventDate= "07.10.2016"/>
	        <Welcome>
	          <Titel id="header"> Damenbekleidung/ Taschen/ Accessoires </Titel>
	          <WallpaperContainer>
							<Wallpaper src={require('../assets/images/Wallpaperpic.png')} alt="wallpaper" />
						<Brand/>
						<AccentTitle title= "Willkommen" />
	          </WallpaperContainer>
	        </Welcome>
					{/* <WhiteBackground/> */}
	      </Wrapper>

    );
  }
}

export default Header;
