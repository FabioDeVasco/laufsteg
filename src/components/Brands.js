import React, { Component } from 'react';
import styled from 'styled-components';
import SectionTitle from './common/SectionTitle';


const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
  background-color: #606060;
  height: 550px;
	padding-top: 8rem;
  `;

  const BrandsConatiner = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3.5rem;
  margin-bottom: 4rem;
    `;


  const BrandsBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 5rem 6rem 2rem 6rem;
  `;

  const BrandsLogo = styled.img`
  display: flex;
  position:  static;
  height: 70px;
  `;



  class Brands extends Component {
    render() {
      return (
          <Wrapper>
            <SectionTitle title="Unsere Marken"/>
            <BrandsConatiner>
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
            </BrandsConatiner>
          </Wrapper>
       );
     }
   }

   export default Brands;
