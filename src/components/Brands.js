import React, { Component } from 'react';
import styled from 'styled-components';
import SectionTitle from './common/SectionTitle';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
  background-color: #606060;
  ${/* height: 650px; */ ''}
	position: relative;

	padding: 8rem 1rem 2rem 1rem;

	@media (min-width: 480px) {
		padding: 8rem 1.25rem 2rem 1.25rem;
	}

	@media (min-width: 768px) {
		padding: 8rem 1.5rem 2rem 1.5rem;
	}

	@media (min-width: 992px) {
		padding: 8rem 2rem 2rem 2rem;
	}
`;

const WhiteBackground = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	background-color: white;
	z-index: 1;

	height: 100%;

	@media (min-width: 480px) {
		height: 52%;
	}

	@media (min-width: 768px) {
		height: 40%;
	}

	@media (min-width: 992px) {
		height: 40%;
	}

`;

const Logos = styled.div`
  display: flex;
  flex-direction: row;
	flex-wrap: wrap;
  margin-top: 3.5rem;
  margin-bottom: 2rem;
	max-width: 1024px;
	align-self: center;
	justify-content: center;
`;

const Logo = styled.img`
	padding: 1rem;
	z-index: 2;
	width: 100px;
	height: 100%;

	@media (min-width: 480px) {
		width: 120px;
	}

	@media (min-width: 768px) {
		width: 140px;
	}

	@media (min-width: 992px) {
		width: 200px;
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
            src={require('../assets/images/brands/custommade.png')}
            alt="BrandsLogo"
          />

          <Logo
            src={require('../assets/images/brands/rockrevival.png')}
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
