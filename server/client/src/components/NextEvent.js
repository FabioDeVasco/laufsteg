import React, { Component } from 'react';
import styled from 'styled-components';
import SectionTitle from './common/SectionTitle';
import Icon from './common/Icon'
import Flyer from './nextEventComponents/Flyer';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 900px;

	@media (min-width: 480px) {
		height: 800px;
	}
`;

const EventBody = styled.div`
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

const EventText = styled.div`
  display: flex;
  flex-direction: column;
  flex:1.5;
  letter-spacing: 2px;
  font-size: 9pt;
  text-align: justify;
  margin-right: 1.5rem;
	margin-left: 1.5rem;
  margin-top: 2rem;
  line-height: 1rem;
	white-space: normal;


	@media (min-width: 480px) {
		font-size: 10pt;
		text-align: center;
		margin-right: 2rem;
		margin-left: 2rem;
		line-height: 1.2rem;

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

const IconContainer = styled.div`
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin-top: 0.1rem;

		@media (min-width: 768px) {
			margin-top: 1rem;
		}

		@media (min-width: 1030px) {
			margin-top: 2rem;
		}

	`;

	const GreyBackground = styled.div`
		position: relative;
		bottom: 0;
		left: 0;
		width: 100%;
		background-color: white;
		z-index: 1;
		height: 12%;

		@media (min-width: 480px) {
			height: 7%;
			background-color: #606060;
			margin-top: 2rem;
		}

		@media (min-width: 768px) {
			height: 21%;
			background-color: #606060;
		}

		@media (min-width: 992px) {
			height: 15%;
			background-color: #606060;
		}

	`;


class NextEvent extends Component {
  render() {
    return (
      <Wrapper>
        <SectionTitle title="Fashion meets Party" />
        <EventBody>
          <Flyer eventDate="07.10.16" dayName="Freitag" time="18:00 /22:00 Uhr" dj="Jordi /Mata" reference="Creme 21 - Südklang"/>
          <EventText>
            <div>
              Zweimal im Jahr veranstalten wir aus dem Laufsteg eine kleine Feier mit Drinks und Dips, um euch die neuen Kollektionen vorzustellen.
            </div>
            {' '}
            <br />
            <div>
              Wir möchten Sie herzlich einladen an unserem nächsten Event teilzunehmen und freuen uns auf Ihr Erscheinen sowie auf einen gelungenen, modereichen Abend.
            </div>
            {' '}
            <br />
            <div>
              Auf unseren sozialen Netzwerken können Sie Fotos von unseren aktuellen Kollektionen, Events und vieles mehr finden. Schauen Sie gerne vorbei!
            </div>
            <IconContainer>
              <Icon className="fa fa-facebook-square fa-2x" colorNormal="#606060" colorActive="#3b5998" href="https://de-de.facebook.com/Laufsteg-Heilbronn-361537650674287/"/>
              <Icon className="fa fa-instagram fa-2x" colorNormal="#606060" colorActive="#cd486b" href="https://www.instagram.com/laufsteg.heilbronn/"/>
            </IconContainer>
          </EventText>
        </EventBody>
				<GreyBackground />
      </Wrapper>
    );
  }
}

export default NextEvent;
