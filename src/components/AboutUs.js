import React, { Component } from 'react';
import styled from 'styled-components';
import SectionTitle from './common/SectionTitle';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
  height: 650px;
	padding-top: 8rem;
`;

const AboutBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 4rem;
	z-index: 2;
`;

const AboutPicture = styled.div`
  flex:1.5;
  background-image: url(${require('../assets/images/Aboutpic.jpg')});
  background-position: right;
  background-size: 100%;
  background-repeat: no-repeat;
  padding-top: 18rem;
  margin-right: 6rem;
  margin-top: 2rem;
`;

const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  flex:1.5;
  letter-spacing: 2px;
  font-size: 14pt;
  text-align: justify;
  margin-right: 6rem;
	margin-left: 6rem;
  margin-top: 2rem;
  line-height: 1.8rem;
`;

const GreyBackground = styled.div`
	position: relative;
	bottom: 0;
	left: 0;
	width: 100%;
	background-color: #606060;
	z-index: 1;
	height: 41%;

	@media (min-width: 480px) {
		height: 31%;
	}

	@media (min-width: 768px) {
		height: 32%;
	}

	@media (min-width: 992px) {
		height: 30%;
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
              Wir sind eine private Boutique die Ihre Produkte sorgfälltig auswählt um stehts unseren Kundenwünschen gerecht zu werden.
            </div>
            {' '}
            <br />
            <div>
              Bei uns finden Sie das Besondere aus Damenbekleidung, Taschen und Accessoires. Wir freuen uns über Ihren besuch.
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
