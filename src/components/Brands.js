import React, { Component } from 'react';
import styled from 'styled-components';



const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
  background-color: #606060;
  height: 750px;


  `;

const HeadContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 30rem;
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



  const BrandsBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 10rem;

  `;

  const BrandsLogo = styled.img`
  display: flex;
  position: relative;
  height: 85px;
  margin-left: 2.5rem;
  margin-right: 2.5rem;

  `;







  class Brands extends Component {
    render() {
      return (
          <Wrapper>
            <HeadContainer>
              <HeadSpacer>{' '}</HeadSpacer>
              <TitelContainer>
                <Titel>
                  Unsere Marken
                </Titel>
                <TitelUnderline>{' '}</TitelUnderline>
              </TitelContainer>
            </HeadContainer>
            <BrandsBody>
              <BrandsLogo src={require('../assets/images/brands/rosemundelogo.png')} alt="BrandsLogo"></BrandsLogo>
              <BrandsLogo src={require('../assets/images/brands/codello.png')} alt="BrandsLogo"></BrandsLogo>
              <BrandsLogo src={require('../assets/images/brands/voluspalogo.png')} alt="BrandsLogo"></BrandsLogo>
              <BrandsLogo src={require('../assets/images/brands/mazelogo.png')} alt="BrandsLogo"></BrandsLogo>
            </BrandsBody>
            <BrandsBody>
              <BrandsLogo src={require('../assets/images/brands/bbeltlogo.png')} alt="BrandsLogo"></BrandsLogo>
              <BrandsLogo src={require('../assets/images/brands/custommadelogo.png')} alt="BrandsLogo"></BrandsLogo>
              <BrandsLogo src={require('../assets/images/brands/rockrevivallogo.png')} alt="BrandsLogo"></BrandsLogo>
              <BrandsLogo src={require('../assets/images/brands/gestuzlogo.png')} alt="BrandsLogo"></BrandsLogo>
            </BrandsBody>
            <BrandsBody>
                <BrandsLogo src={require('../assets/images/brands/bomboogielogo.png')} alt="BrandsLogo"></BrandsLogo>
              <BrandsLogo src={require('../assets/images/brands/rabenslogo.png')} alt="BrandsLogo"></BrandsLogo>
              <BrandsLogo src={require('../assets/images/brands/DELICATELOVElogo.png')} alt="BrandsLogo"></BrandsLogo>
              <BrandsLogo src={require('../assets/images/brands/81hourslogo.png')} alt="BrandsLogo"></BrandsLogo>
            </BrandsBody>
            <BrandsBody>
              <BrandsLogo src={require('../assets/images/brands/campomaggilogo.png')} alt="BrandsLogo"></BrandsLogo>
              <BrandsLogo src={require('../assets/images/brands/juvialogo.png')} alt="BrandsLogo"></BrandsLogo>
              <BrandsLogo src={require('../assets/images/brands/lovestorieslogo.png')} alt="BrandsLogo"></BrandsLogo>
              <BrandsLogo src={require('../assets/images/brands/ragandbonelogo.png')} alt="BrandsLogo"></BrandsLogo>
            </BrandsBody>
          </Wrapper>
       );
     }
   }

   export default Brands;
