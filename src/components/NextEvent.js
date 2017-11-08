import React, { Component } from 'react';
import styled from 'styled-components';



const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 700px;
  `;

const HeadContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
	margin-top: 8rem;

  `;


const HeadSpacer = styled.div`
  display: flex;
  flex: 1;

  `;

const TitelContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1.5;

  `;

  const Titel = styled.div`
  	font-size: 30pt;
  	color: black;
  	margin-top: 5rem;
    margin-bottom: 1.5rem;
    margin-right: 2rem;
    letter-spacing: 15px;
    text-align: center;
    text-transform: uppercase;


  `;

  const TitelUnderline = styled.div`
    border-bottom: 3px solid;
    border-color: #ED024B;
    margin-left: 10rem;
    margin-top: -1.5rem;

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
  background-position: left;
  background-size: contain;
  background-repeat: no-repeat;
  padding-bottom: 20rem;
  padding-top: 20rem;
  margin-left: 3rem;


  `;

  const EventText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex:1.5;
  letter-spacing: 3px;
  font-size: 16pt;
  text-align: justify;
  margin-right: 6rem;
	margin-left: 6rem;
  margin-top: -6rem;
  line-height: 1.8rem;
  `;



  class NextEvent extends Component {
    render() {
      return (
  	      <Wrapper>
            <HeadContainer>
              <HeadSpacer>{' '}</HeadSpacer>
              <TitelContainer>
                <Titel>
                  Fashion meets Party
                </Titel>
                <TitelUnderline>{' '}</TitelUnderline>
              </TitelContainer>
            </HeadContainer>
            <EventBody>
              <EventPicture>

              </EventPicture>
              <EventText>
                <div>Zwei mal im Jahr veranstalten wir aus dem Laufsteg eine kleine Feier mit Drinks und Dips um euch die neue Kollektionen vorzustellen.</div>
                 {' '}
                <div>Wir möchten euch ganz herzlich einladen um an unserem nächsten Event teilzunehmen. Wir freuen uns auf euer Erscheinen und auf einen tollen Abend mit ganz viel Spaß.</div>
              </EventText>
            </EventBody>
          </Wrapper>
       );
     }
   }

   export default NextEvent;
