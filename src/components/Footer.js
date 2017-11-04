import React, { Component } from 'react';
import styled from 'styled-components';




const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
  background-color: #606060;
  color: white;

  `;


  const Intro = styled.div`
  	display: flex;
  	flex-direction: row;
  	justify-content: center;


    `;

    const IntroSpacer = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: center;
      border-bottom: 3px solid;
      border-color: red;
      margin-top: 1rem;
      padding-top: 2rem;
      padding-bottom: 2rem;


      `;

    const IntroTitel = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: center;
      padding-top: 2rem;
      font-size: 20pt;
      color: white;
      text-transform: uppercase;
      margin-bottom: 1rem;

      `;


      const Impressumbox = styled.div`
          display: flex;
          flex-direction: row;
          justify-content: center;
          margin-top: 3rem;
          margin-bottom: 3rem;


          `;

    const ImpressumPart = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 10rem;
        margin-right: 10rem;


        `;

    const ImpressumTitel = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #ED024B;
        text-transform: uppercase;


        `;

    const ImpressumText = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex:1;
        letter-spacing: 3px;
        font-size: 16pt;
        text-align: justify;
        margin-left: 2rem;
        line-height: 1.8rem;
        color: white;
        background-color: red;
        padding-left: 10rem;
        padding-right: 10rem;
        margin-left: -12rem;
        margin-right: -12rem;


        `;



  class Footer extends Component {
    render() {
      return (
  	      <Wrapper>
            <Intro>
              <IntroSpacer></IntroSpacer>
              <IntroTitel>Impressum Laufsteg</IntroTitel>
              <IntroSpacer></IntroSpacer>
            </Intro>
            <Impressumbox>
              <ImpressumPart>
                <ImpressumTitel>
                  Sitz
                </ImpressumTitel>
                <ImpressumText>
                  <p>Sitz der Gesellschaft: Heilbronn</p>
                 {' '}
                 <div>Geschäftsführende Gesellschafterin: Fatma Öztoprak</div>
                </ImpressumText>
              </ImpressumPart>
              <ImpressumPart>
                <ImpressumTitel>
                  Kontakt
                </ImpressumTitel>
                <ImpressumText>
                  hier steht Kontakt
                </ImpressumText>
              </ImpressumPart>
              <ImpressumPart>
                <ImpressumTitel>
                  Verantwortung
                </ImpressumTitel>
                <ImpressumText>
                  hier steht verantwortung
                </ImpressumText>
              </ImpressumPart>
            </Impressumbox>
          </Wrapper>
      );
    }
  }

  export default Footer;
