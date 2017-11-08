import React, { Component } from 'react';
import styled from 'styled-components';



const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
  background-color: #606060;
  height: 600px;


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



  const BrandsBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 10rem;

  `;

  const BrandsLogo = styled.div`
  display: flex;
  justify-content: center;
  font-size: 20px;
  color: black;
  background-color: Grey;
  padding: 4rem;
  margin-left: : 2rem;
  margin-right: 2rem;
  margin-top: 1rem;
  margin-bottom: 3rem;

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
              <BrandsLogo src={require('../assets/images/brands/81hourslogo.png')}> Nike</BrandsLogo>
              <BrandsLogo> juvia</BrandsLogo>
              <BrandsLogo> adidas</BrandsLogo>
              <BrandsLogo> Nike</BrandsLogo>
              <BrandsLogo> Nike</BrandsLogo>
              <BrandsLogo> Nike</BrandsLogo>
            </BrandsBody>
            <BrandsBody>
              <BrandsLogo> Nike</BrandsLogo>
              <BrandsLogo> juvia</BrandsLogo>
              <BrandsLogo> adidas</BrandsLogo>
              <BrandsLogo> Nike</BrandsLogo>
              <BrandsLogo> Nike</BrandsLogo>
              <BrandsLogo> Nike</BrandsLogo>
            </BrandsBody>
          </Wrapper>
       );
     }
   }

   export default Brands;
