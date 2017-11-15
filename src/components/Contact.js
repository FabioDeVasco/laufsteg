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

const LinkInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 33%;


  `;
  const Filter = styled.div`
      display: flex;
      background-color: white;
      opacity: 0.7;
      padding: 50%;
      border: 2px solid;
      border-color: red;
      position: relative;

`;

const SoNetworkText = styled.div`
    font-size: 20px;
    color: black;
    justify-content: flex-end;

  `;

const Insta = styled.div`
    display: flex;
    justify-content: center;
    background-image: url(${require('../assets/images/Instagrampic.png')});
    background-position: top;
    background-size: 100%, 100%;
    background-repeat: no-repeat;
    padding: 6rem;
    margin-left: 3rem;
    margin-bottom: 1rem;
    margin-right: 3rem;
    border: solid 3px;
    border-color: grey;

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
          <LinkInfoContainer>
            <Insta>
                <Filter>
                <SoNetworkText>Instagram</SoNetworkText>
                </Filter>
            </Insta>
            <Phone>
              <div>Telefon:</div>
              {' '}
              <div>07131  20 31 881</div>
            </Phone>
          </LinkInfoContainer>
          <LinkInfoContainer>
            <Mail>
              <SoNetworkText>E-Mail</SoNetworkText>
            </Mail>
          </LinkInfoContainer>
          <LinkInfoContainer>
            <Face>
              <SoNetworkText>facebook</SoNetworkText>
            </Face>
            <Direction>
              <div>Biedermanngasse 4 </div>
              {' '}
              <div>74072 Heilbronn</div>
            </Direction>
          </LinkInfoContainer>
        </ContactBody>
      </Wrapper>
    );
  }
}

export default Contact;
