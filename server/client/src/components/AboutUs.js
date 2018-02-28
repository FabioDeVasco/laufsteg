import React, { Component } from 'react';
import styled from 'styled-components';
import SectionTitle from './common/SectionTitle';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
  height: 500px;
	@media (min-width: 480px) {
		height: 800px;
	}
`;

const AboutBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 1rem;
	z-index: 2;

	@media (min-width: 480px) {
		margin-top: 2rem;
	}

	@media (min-width: 768px) {
		margin-top: 3rem;
		flex-direction: row;
	}

	@media (min-width: 992px) {
		margin-top: 3rem;
	}
`;

const AboutPicture = styled.div`
	display: flex;
  flex-direction: column;
  position: relative;
  height: 300px;
  flex:1.5;
  z-index: 1;
  border: 3px solid white;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  margin-top: 2rem;


  @media (min-width: 480px) {
    margin-left: 2rem;
    margin-right: 2rem;
    height: 500px;
  }

  @media (min-width: 768px) {
    margin-right: 4rem;
    height: 500px;
    width: 320px;
  }

  @media (min-width: 992px) {
    margin-right: 6rem;
    height: 500px;
    width: 700px;
  }

  &::before {
  	content: "";
  	position: absolute;
  	top: 0;
  	left: 0;
  	right: 0;
  	bottom: 0;
  	z-index: -1;
  	background-size: cover;
  	background-image: url(${require('../assets/images/Aboutpic.jpg')});
    background-position: center;
  }
`;

const AboutText = styled.div`
display: flex;
flex-direction: column;
flex:1.5;
letter-spacing: 2px;
font-size: 9pt;
text-align: justify;
margin-right: 1.5rem;
margin-left: 1.5rem;
margin-top: 2rem;
margin-bottom: 2rem;
line-height: 1rem;
white-space: normal;


@media (min-width: 480px) {
	font-size: 10pt;
	text-align: center;
	margin-right: 2rem;
	margin-left: 2rem;
	line-height: 1.2rem;
	margin-bottom: 2rem;

}

@media (min-width: 768px) {
	font-size: 10pt;
	text-align: justify;
	line-height: 1.5rem;
	margin-right: 4rem;
	margin-left: 4rem;
	line-height: 1.3rem;
}

@media (min-width: 890px) {
	font-size: 10pt;
	text-align: justify;
	margin-right: 4rem;
	margin-left: 4rem;
	line-height: 1.5rem;
}

@media (min-width: 995px) {
	font-size: 12pt;
	text-align: justify;
	margin-right: 6rem;
	margin-left: 6rem;
	line-height: 1.6rem;
}
`;

const GreyBackground = styled.div`
	position: relative;
	bottom: 0;
	left: 0;
	width: 100%;
	background-color: white;
	z-index: 1;
	height: 1%;

	@media (min-width: 480px) {
		height: 18%;
		background-color: white;
	}

	@media (min-width: 768px) {
		height: 39%;
		background-color: #606060;
	}

	@media (min-width: 992px) {
		height: 45%;
		background-color: #606060;
	}

`;

class AboutUs extends Component {
  render() {
    return (
      <Wrapper>
        <SectionTitle title="Über uns" />
        <AboutBody>
          <AboutText>
            <div>
              Wir sind eine private Boutique, die ihre Produkte sorgfältig auswählt, um stets unseren Kundenwünschen gerecht zu werden.
            </div>
            {' '}
            <br />
            <div>
              Bei uns finden Sie das Besondere aus Damenbekleidung, Taschen und Accessoires. Wir freuen uns auf Ihren Besuch.
            </div>
          </AboutText>
          <AboutPicture />
        </AboutBody>
				<GreyBackground />
      </Wrapper>
    );
  }
}

export default AboutUs;
