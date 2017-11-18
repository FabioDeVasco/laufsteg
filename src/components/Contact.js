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
  margin-left: 6rem;
  margin-right: 6rem;

  `;

const LinkInfoContainer = styled.div`
    display: flex;
    flex-direction: column;

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
    position: relative;
  	left: 50%;
    top: 50%;

  `;

const Insta = styled.div`
    display: flex;
    justify-content: center;
    background-image: url(${require('../assets/images/Instagrampic.png')});
    background-position: top;
    background-size: 100%;
    background-repeat: no-repeat;
    padding: 6rem;
    margin-bottom: 1.5rem;
    margin-right: 8rem;
    border: solid 3px;
    border-color: grey;

  `;



const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    font-size: 12pt;
    background-color: grey;
    padding: 3rem;
    margin-right: 8rem;
    text-align: center;
    border: solid 3px;
    border-color: grey;
  `;

const Mail = styled.div`
    background-image: url(${require('../assets/images/Mailbigpic.png')});
    background-size: 100%;
    background-repeat: no-repeat;
    padding: 13.5rem 20rem 13.5rem 20rem;
    margin-bottom: 1rem;
    border: 3px solid;
    border-color: grey;
    opacity: 0.9;
    ${''/* filter: blur(1.5px); */}

  `;


const Face = styled.div`
    display: flex;
    background-image: url(${require('../assets/images/Facebookpic.png')});
    background-position: top;
    background-size: 100%;
    background-repeat: no-repeat;
    padding: 4rem;
    margin-bottom: 1.5rem;
    margin-right: 8rem;
    border: solid 3px;
    border-color: grey;

  `;



// const Direction = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     color: white;
//     letter-spacing: 2px;
//     font-size: 18pt;
//     background-color: grey;
//     padding-top: 7.2rem;
//     padding-left: 3rem;
//     padding-bottom: 7.2rem;
//     padding-right: 3rem;
//     margin-left: 2rem;
//     margin-top: -2rem;
//     margin-bottom: 1rem;
//     margin-right: 2rem;
//   `;

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
                <SoNetworkText>Instagram</SoNetworkText>
            </Insta>
            <Face>
              <SoNetworkText>facebook</SoNetworkText>
            </Face>
            <Info>
              <div>Telefon:</div>
              {' '}
              <div>07131  20 31 881</div>
              <br></br>
              <div>Biedermanngasse 4 </div>
              {' '}
              <div>74072 Heilbronn</div>
            </Info>
          </LinkInfoContainer>
          <LinkInfoContainer>
            <Mail>
            <SoNetworkText>E-Mail</SoNetworkText>
            </Mail>
          </LinkInfoContainer>
        </ContactBody>
      </Wrapper>
    );
  }
}

export default Contact;
