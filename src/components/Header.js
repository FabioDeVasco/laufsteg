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
	height: 600px;
`;

const Welcome = styled.div`
	display: flex;
	flex-direction: column;
	flex:6;
	width: 90%;
	text-transform: uppercase;
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
	      </Wrapper>
    );
  }
}

export default Header;
