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
  margin-top: 6rem;

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
    background-image: url(${require('../assets/images/Instagrampic.png')});
    background-position: top;
    background-size: 100%, 100%;
    background-repeat: no-repeat;
    padding-top: 10rem;
    padding-bottom: 10rem;
    padding-left: 3rem;
    padding-right: 3rem;
    margin-left: 2rem;
    margin-bottom: 1rem;
    margin-right: 2rem;

  `;

const Phone = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    color: white;
    letter-spacing: 4px;
    font-size: 20pt;
    line-height: 1.8rem;
    background-color: grey;
    padding-top: 3rem;
    padding-left: 3rem;
    padding-bottom: 2rem;
    padding-right: 3rem;
    margin-left: 2rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-right: 2rem;
  `;

const Mail = styled.div`
    display: flex;
    justify-content: center;
    background-image: url(${require('../assets/images/Mailpic.png')});
    background-position: top;
    background-size: 100%, 100%;
    background-repeat: no-repeat;
    padding-top: 15.5rem;
    padding-bottom: 15.5rem;
    padding-left: 10rem;
    padding-right: 10rem;
    margin-left: 2rem;
    margin-bottom: 1rem;
    margin-right: 2rem;
  `;

const Face = styled.div`
    display: flex;
    justify-content: center;
    background-image: url(${require('../assets/images/Facebookpic.png')});
    background-position: top;
    background-size: 100%, 100%;
    background-repeat: no-repeat;
    padding-top: 10rem;
    padding-bottom: 10rem;
    padding-left: 10rem;
    padding-right: 10rem;
    margin-left: 2rem;
    margin-bottom: 1rem;
    margin-right: 2rem;
    margin-top: -1rem;

  `;

const Direction = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    letter-spacing: 8px;
    font-size: 20pt;
    line-height: 1.8rem;
    background-color: grey;
    padding-top: 4rem;
    padding-left: 3rem;
    padding-bottom: 4rem;
    padding-right: 3rem;
    margin-left: 2rem;
    margin-top: -2rem;
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
              <div>Instagram</div>
            </Insta>
            <Phone>
              <div>Telefon:</div>
              {' '}
              <div>07131  20 31 881</div>
            </Phone>
          </InstaPhoneContainer>
          <MailContainer>
            <Mail>
              <div>E-Mail</div>
            </Mail>
          </MailContainer>
          <FaceDirectionContainer>
            <Face>
              <div>facebook</div>
            </Face>
            <Direction>
              <div>Biedermanngasse 4 </div>
              {' '}
              <div>74072 Heilbronn</div>
            </Direction>
          </FaceDirectionContainer>
        </ContactBody>
      </Wrapper>
    );
  }
}

export default Contact;
