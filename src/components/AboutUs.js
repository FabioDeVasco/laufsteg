import React, { Component } from 'react';
import styled from 'styled-components';



const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
  height: 800px;

  `;

const HeadContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 19rem;

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



  const AboutBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 2rem;

  `;

  const AboutPicture = styled.div`
  flex:1.5;
  background-image: url(${require('../assets/images/Aboutpic.jpg')});
  background-position: right;
  background-size: contain;
  background-repeat: no-repeat;
  padding-bottom: 16rem;
  padding-top: 16rem;
  margin-right: 2rem;
  margin-top: 6rem;
  


  `;

  const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex:1;
  letter-spacing: 3px;
  font-size: 14pt;
  text-align: justify;
  margin-left: 2rem;
  line-height: 1.8rem;
  margin-top: 2rem;
  `;



  class AboutUs extends Component {
    render() {
      return (
  	      <Wrapper>
            <HeadContainer>
              <HeadSpacer>{' '}</HeadSpacer>
              <TitelContainer>
                <Titel>
                  Über uns
                </Titel>
                <TitelUnderline>{' '}</TitelUnderline>
              </TitelContainer>
            </HeadContainer>
            <AboutBody>
              <AboutText>
                <div>Wir sind eine private Boutique die Ihre Produkte sorgfälltig auswählt um stehts unseren Kundenwünschen gerecht zu werden.</div>
                 {' '}
                <div>Bei uns finden Sie das Besondere aus Damenbekleidung, Taschen und Accessoires. Wir freuen uns über Ihren besuch.</div>
              </AboutText>
              <AboutPicture>

              </AboutPicture>
            </AboutBody>
          </Wrapper>
       );
     }
   }

   export default AboutUs;
