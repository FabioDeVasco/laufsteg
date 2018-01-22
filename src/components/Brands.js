import React, { Component } from 'react';
import styled from 'styled-components';
import SectionTitle from './common/SectionTitle';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
  background-color: #606060;
	position: relative;

	padding-top: 8rem;
`;

const WhiteBackground = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	background-color: white;
	z-index: 1;

	height: 41%;

	@media (min-width: 480px) {
		height: 31%;
	}

	@media (min-width: 768px) {
		height: 30%;
	}

	@media (min-width: 950px) {
		height: 34%;
	}
	@media (min-width: 992px) {
		height: 38%;
	}

`;

const Logos = styled.div`
  display: flex;
  flex-direction: row;
	flex-wrap: wrap;
  margin-top: 1rem;
  margin-bottom: 1rem;
	padding-left: 1.5rem;
	padding-right: 1.5rem;
	align-self: center;
	justify-content: center;
	justify-content: space-between;


	@media (min-width: 480px) {
		margin-top: 2.5rem;
	  margin-bottom: 1rem;
		padding-left: 2rem;
		padding-right: 2rem;
	}

	@media (min-width: 768px) {
		margin-top: 2.5rem;
	  margin-bottom: 2rem;
		padding-left: 4rem;
		padding-right: 4rem;
	}

	@media (min-width: 992px) {
		margin-top: 3.5rem;
	  margin-bottom: 4rem;
		padding-left: 6rem;
		padding-right: 6rem;
	}
`;

const Logo = styled.img`
	padding: 0rem;
	z-index: 2;
	width: 90px;
	height: 100%;

	@media (min-width: 480px) {
		width: 120px;
		padding: 0.5rem;
	}

	@media (min-width: 768px) {
		width: 140px;
		padding: 1rem;
	}

	@media (min-width: 992px) {
		width: 200px;
		padding: 1rem;
	}
`;

class Brands extends Component {
  render() {
    return (
      <Wrapper>
        <WhiteBackground />
        <SectionTitle title="Unsere Marken" />
        <Logos>
          <Logo
            src={require('../assets/images/brands/rosemunde.png')}
            alt="BrandsLogo"
          />
          <Logo
            src={require('../assets/images/brands/codello.png')}
            alt="BrandsLogo"
          />
          <Logo
            src={require('../assets/images/brands/voluspa.png')}
            alt="BrandsLogo"
          />
          <Logo
            src={require('../assets/images/brands/maze.png')}
            alt="BrandsLogo"
          />

          <Logo
            src={require('../assets/images/brands/bbelt.png')}
            alt="BrandsLogo"
          />

          <Logo
            src={require('../assets/images/brands/rockrevival.png')}
            alt="BrandsLogo"
          />

          <Logo
            src={require('../assets/images/brands/custommade.png')}
            alt="BrandsLogo"
          />

          <Logo
            src={require('../assets/images/brands/gestuz.png')}
            alt="BrandsLogo"
          />

          <Logo
            src={require('../assets/images/brands/bomboogie.png')}
            alt="BrandsLogo"
          />

          <Logo
            src={require('../assets/images/brands/rabens.png')}
            alt="BrandsLogo"
          />

          <Logo
            src={require('../assets/images/brands/delicatelove.png')}
            alt="BrandsLogo"
          />

          <Logo
            src={require('../assets/images/brands/81hours.png')}
            alt="BrandsLogo"
          />

          <Logo
            src={require('../assets/images/brands/campomaggi.png')}
            alt="BrandsLogo"
          />

          <Logo
            src={require('../assets/images/brands/juvia.png')}
            alt="BrandsLogo"
          />

          <Logo
            src={require('../assets/images/brands/lovestories.png')}
            alt="BrandsLogo"
          />

          <Logo
            src={require('../assets/images/brands/ragandbone.png')}
            alt="BrandsLogo"
          />

        </Logos>
      </Wrapper>
    );
  }
}

export default Brands;
