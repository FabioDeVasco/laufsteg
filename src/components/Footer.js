import React, { Component } from 'react';
import styled from 'styled-components';




const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
  background-color: #DDDDDD;
  margin-top: 20rem;
  `;


  const Intro = styled.div`
  	display: flex;
  	flex-direction: row;
  	justify-content: center;


    `;

    const IntroSpacer = styled.div`
      display: flex;
      border-top: 1px solid;
      border-color: black;
      margin-top: 3.5rem;
      margin-left: 1rem;
      margin-right:1rem;
      padding-top: 2rem;
      width: 28rem;


      `;

    const IntroTitel = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin-top: 1rem;
      padding-top: 2rem;
      font-size: 18pt;
      color: black;
      text-transform: uppercase;
      margin-bottom: 1rem;

      `;


    const ImpressumBox = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: 2rem;
        margin-bottom: 2rem;

      `;

    const ImpressumPart = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 2rem;
        margin-right: 2rem;

        `;

    const ImpressumTitel = styled.div`
        display: flex;
        flex-direction: row;
        color: #ED024B;
        text-transform: uppercase;
        text-align: left;
        margin-bottom: 1rem;

        `;

    const ImpressumText = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 12pt;
        text-align: justify;
        line-height: 1.8rem;
        color: black;


        `;

      const ImpressumIconBox = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;

        `;

      const ImpressumIconPart = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;

        `;

      const ImpressumIcon = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
        color: black;
        margin-left: 0.8rem;
        margin-right: 0.8rem;
        `;

      const ImpressumIconArrow = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
        color: #ED024B;
        margin-top: 2rem;

        `;
        const ImpressumDesignBox = styled.div`
          display: flex;
          flex-direction: column;
          justify-content:flex-end;
          font-style: italic;
          color: black;
          text-align: right;
          `;


  class Footer extends Component {
    render() {
      return (
  	      <Wrapper>
            <Intro>
              <IntroSpacer>{' '}</IntroSpacer>
              <IntroTitel>Impressum Laufsteg</IntroTitel>
              <IntroSpacer>{' '}</IntroSpacer>
            </Intro>
            <ImpressumBox>
              <ImpressumPart>
                <ImpressumTitel>
                  Gesellschaft
                </ImpressumTitel>
                <ImpressumText>
                  <div>Sitz der Gesellschaft: Heilbronn</div>
                 {' '}
                  <div>Geschäftsführende Gesellschafterin: Fatma Öztoprak</div>
                </ImpressumText>
              </ImpressumPart>
              <ImpressumPart>
                <ImpressumTitel>
                  Kontakt
                </ImpressumTitel>
                <ImpressumText>
                  <div>Anschrift:  Biedermanngasse 4, 74072 Heilbronn</div>
                  {' '}
                  <div>Telefon:    07131 203 18 81</div>
                  {' '}
                  <div>E-Mail:   laufsteg.heilbronn@t-online.de</div>
                </ImpressumText>
              </ImpressumPart>
              <ImpressumPart>
                <ImpressumTitel>
                  Handelsregister
                </ImpressumTitel>
                <ImpressumText>
                  <div>Handelsregister: AG Stuttgart HRB 1234</div>
                  {' '}
                  <div>Umsatzsteuer-Ident.-Nr.: DE XXXXXXXX</div>
                  {' '}
                  <div>Inhaltlich Verantwortlicher: Fatma Öztoprak</div>
                </ImpressumText>
              </ImpressumPart>
            </ImpressumBox>
            <ImpressumIconBox>
              <ImpressumIconPart>
                <ImpressumIcon>
                  <i className="fa fa-facebook-square fa-1x" aria-hidden="true"></i>
                </ImpressumIcon>
                <ImpressumIcon>
                  <i class="fa fa-instagram fa-1x" aria-hidden="true"></i>
                </ImpressumIcon>
                <ImpressumIcon>
                  <i class="fa fa-envelope-o fa-1x" aria-hidden="true"></i>
                </ImpressumIcon>
                <ImpressumIcon>
                  <i class="fa fa-phone fa-1x" aria-hidden="true"></i>
                </ImpressumIcon>
              </ImpressumIconPart>
              <ImpressumIconPart>
                <ImpressumIconArrow>
                  <i class="fa fa-chevron-up fa-2x" aria-hidden="true"></i>
                </ImpressumIconArrow>
              </ImpressumIconPart>
            </ImpressumIconBox>
            <ImpressumDesignBox>
              Design @ Zackteck
            </ImpressumDesignBox>
          </Wrapper>
      );
    }
  }

  export default Footer;
