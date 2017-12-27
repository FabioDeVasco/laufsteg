import React, { Component } from 'react';
import styled from 'styled-components';
import SectionTitle from './common/SectionTitle';


const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
  height: 800px;
	padding-top: 19rem;
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



  class AboutUs extends Component {
    render() {
      return (
  	      <Wrapper>
            <SectionTitle title="Über uns"/>
            <AboutBody>
              <AboutText>
                <div>Wir sind eine private Boutique die Ihre Produkte sorgfälltig auswählt um stehts unseren Kundenwünschen gerecht zu werden.</div>
                 {' '}
                <br></br>
                <div>Bei uns finden Sie das Besondere aus Damenbekleidung, Taschen und Accessoires. Wir freuen uns über Ihren besuch.</div>
              </AboutText>
              <AboutPicture/>
            </AboutBody>
          </Wrapper>
       );
     }
   }

   export default AboutUs;
