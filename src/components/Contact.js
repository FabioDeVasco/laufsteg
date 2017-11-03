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



  const InstaPhoneContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

  `;


  const MailContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

  `;


  const FaceDirectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

  `;

  const Insta = styled.div`
    display: flex;
    justify-content: center;
    background-color: red;
    padding-top: 3rem;
    padding-left: 3rem;
    margin-left: 2rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-right: 2rem;
  `;

  const Phone = styled.div`
    display: flex;
    justify-content: center;
    background-color: grey;
    padding-top: 3rem;
    padding-left: 3rem;
    margin-left: 2rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-right: 2rem;
  `;

  const Mail = styled.div`
    display: flex;
    justify-content: center;
    background-color: yellow;
    padding-top: 3rem;
    padding-left: 3rem;
    margin-left: 2rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-right: 2rem;
  `;

  const Face = styled.div`
    display: flex;
    justify-content: center;
    background-color: Blue;
    padding-top: 3rem;
    padding-left: 3rem;
    margin-left: 2rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-right: 2rem;
  `;


  const Direction = styled.div`
    display: flex;
    justify-content: center;
    background-color: grey;
    padding-top: 3rem;
    padding-left: 3rem;
    margin-left: 2rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-right: 2rem;
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
              <InstaPhoneContainer>
                <Insta>
                  <div>Hier is Instagram</div>
                </Insta>
                <Phone>
                  <div>Hier is Phone</div>
                </Phone>
              </InstaPhoneContainer>
              <MailContainer>
                <Mail>
                  <div>Hier is Mail</div>
                </Mail>
              </MailContainer>
              <FaceDirectionContainer>
                <Face>
                  <div>Hier is Face</div>
                </Face>
                <Direction>
                  <div>Hier is Direction</div>
                </Direction>
              </FaceDirectionContainer>
            </ContactBody>
          </Wrapper>
       );
     }
   }

   export default Contact;
