import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
  background-color: #606060;
	height: 600px;


  `;

const HeadContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 12rem;

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

const ContactBody = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 9rem;



  `;

const InstaPhoneContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 33%;


  `;

const MailContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 33%;



  `;

const FaceDirectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 33%;


  `;

const SoNetworkText = styled.div`
    font-size: 40px;
    color: black;
    background-color: Black;
    justify-content: flex-end;

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


  const Instafilter = styled.div`
      display: flex;
      background-color: white;
      opacity: 0.7;
      background-position: top;
      padding-top: 10rem;
      padding-bottom: 8.75rem;
      padding-left:
      margin-top: -9rem;
      z-index: 2;
`;


const Phone = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    letter-spacing: 2px;
    font-size: 18pt;
    background-color: grey;
    padding: 4.2rem;
    margin: 2rem ;

  `;

const Mail = styled.div`
    display: flex;
    background-image: url(${require('../assets/images/Mailpic.png')});
    background-position: top;
    background-size: 100%, 100%;
    background-repeat: no-repeat;
    padding-top: 15.5rem;
    padding-bottom: 15.8rem;
    padding-left: 10rem;
    padding-right: 10rem;
    margin-left: 2rem;
    margin-bottom: 1rem;
    margin-right: 2rem;
  `;


const Face = styled.div`
    display: flex;
    background-image: url(${require('../assets/images/Facebookpic.png')});
    background-position: top;
    background-size: 100%, 100%;
    background-repeat: no-repeat;
    padding-top: 9rem;
    padding-bottom: 9rem;
    padding-left: 10rem;
    padding-right: 10rem;
    margin-left: 2rem;
    margin-bottom: 1rem;
    margin-right: 2rem;


  `;



const Direction = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    letter-spacing: 2px;
    font-size: 18pt;
    background-color: grey;
    padding-top: 7.2rem;
    padding-left: 3rem;
    padding-bottom: 7.2rem;
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
                <SoNetworkText>Instagram</SoNetworkText>
            </Insta>
            <Phone>
              <div>Telefon:</div>
              {' '}
              <div>07131  20 31 881</div>
            </Phone>
          </InstaPhoneContainer>
          <MailContainer>
            <Mail>
              <SoNetworkText>E-Mail</SoNetworkText>
            </Mail>
          </MailContainer>
          <FaceDirectionContainer>
            <Face>
              <SoNetworkText>facebook</SoNetworkText>
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
