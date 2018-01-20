import React, { Component } from 'react';
import styled from 'styled-components';
import SectionTitle from './common/SectionTitle';
import Icon from './common/Icon'
import Flyer from './nextEventComponents/Flyer';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 800px;
	padding-top: 8rem;
`;

const EventBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
	margin-top: 3rem;
	@media (max-width: 700px) {
    flex-direction: column;
  }
  `;

const EventText = styled.div`
  display: flex;
  flex-direction: column;
  flex:1.5;
  letter-spacing: 2px;
  font-size: 14pt;
  text-align: justify;
  margin-right: 6rem;
	margin-left: 8rem;
  margin-top: 2rem;
  line-height: 1.8rem;

	@media (max-width: 900px) {
    margin-right: 3rem;}
	@media (max-width: 1120px) {
    font-size: 12pt;
		margin-left: 3rem;}
	@media (max-width: 700px) {
	  font-size: 12pt;
		margin-left: 2rem;}
  @media (max-width: 520px) {
    font-size: 11pt;
    letter-spacing: 1px;
	  margin-left: 1rem;}
  @media (max-width: 370px) {
    font-size: 10pt;
    letter-spacing: 0px;}
  @media (max-width: 300px) {
    font-size: 9pt;
	}
  `;

const IconContainer = styled.div`
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin-top: 2rem;
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
              Zwei mal im Jahr veranstalten wir aus dem Laufsteg eine kleine Feier mit Drinks und Dips um euch die neue Kollektionen vorzustellen.
            </div>
            {' '}
            <br />
            <div>
              Wir möchten euch ganz herzlich einladen um an unserem nächsten Event teilzunehmen. Wir freuen uns auf euer Erscheinen und auf einen tollen Abend mit ganz viel Spaß.
            </div>
            {' '}
            <br />
            <div>
              Auf unseren sozialen Netzwerken könnt ihr Fotos von unseren Events und vieles mehr finden. Schaut einfach vorbei!
            </div>
            <IconContainer>
              <Icon className="fa fa-facebook-square fa-2x" colorNormal="#606060" colorActive="#3b5998" href="https://de-de.facebook.com/Laufsteg-Heilbronn-361537650674287/"/>
              <Icon className="fa fa-instagram fa-2x" colorNormal="#606060" colorActive="#cd486b" href="https://www.instagram.com/laufsteg.heilbronn/"/>
            </IconContainer>
          </EventText>
        </EventBody>
      </Wrapper>
    );
  }
}

export default NextEvent;
