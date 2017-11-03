import React, { Component } from 'react';
import styled from 'styled-components';



const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
  background-color: #606060;


  `;

const HeadContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

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
    text-align: right;
    text-transform: uppercase;


  `;

  const TitelUnderline = styled.div`
    border-bottom: 3px solid;
    border-color: #ED024B;
    margin-left: 10rem;
    margin-top: -1.5rem;

    `;



  const ContactBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  `;




  class Contact extends Component {
    render() {
      return (
          <Wrapper>
            <HeadContainer>
              <HeadSpacer>{' '}</HeadSpacer>
              <TitelContainer>
                <Titel>
                  Kontakt
                </Titel>
                <TitelUnderline>{' '}</TitelUnderline>
              </TitelContainer>
            </HeadContainer>
            <ContactBody>
              <div>Hier is Body</div>
            </ContactBody>
          </Wrapper>
       );
     }
   }

   export default Contact;
