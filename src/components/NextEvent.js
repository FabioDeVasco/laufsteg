import React, { Component } from 'react';
import styled from 'styled-components';
import SectionTitle from './common/SectionTitle';
import Icon from './common/Icon'

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
  `;

const EventPicture = styled.div`
  flex:1;
  background-image: url(${require('../assets/images/Eventpic.png')});
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
  padding-bottom: 18rem;
  padding-top: 18rem;
  margin-left: 6rem;
	margin-top: 2rem;
	border: 3px solid;
	border-color: white;
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
          <EventPicture />
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
              <Icon className="fa fa-facebook-square fa-2x" color="#606060" />
              <Icon className="fa fa-instagram fa-2x" color="#606060" />
            </IconContainer>
          </EventText>
        </EventBody>
      </Wrapper>
    );
  }
}

export default NextEvent;
