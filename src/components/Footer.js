import React, { Component } from 'react';
import styled from 'styled-components';
import { Font, FONT_URL } from '../utils';
import Icon from './common/Icon';
import * as Scroll from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';

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

const Brand = styled.div`
      	border-color: black;
      	border: 1px solid ;
      	border-radius: 6px;
      	font-size: 20pt;
      	letter-spacing: 3px;
      	color: black;
      	padding: 0.5rem 2rem 0.5rem 2rem;
      	position: relative;
      	margin-top: 2rem;
        margin-bottom: 2rem;
				text-transform: uppercase;
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
				font-family: ${Font.SECONDARY};
      `;

const ImpressumIconBox = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
      `;

const IconContainer = styled.div`
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
				cursor: pointer;
      `;

const ImpressumIconArrow = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
        color: #ED024B;
        margin-top: 2rem;
				cursor: pointer;
				&:hover {
			    color: black;
			  }
        `;

const ImpressumLinkDesignBox = styled.div`
        display: flex;
        flex-direction: row;
        margin-left: 6rem;
        margin-right: 6rem;
        margin-bottom: 2rem
      `;

const ImpressumLinkBox = styled.div`
        display: flex;
        color:  #ED024B;

				cursor: pointer;
				&:hover {
			    color: black;
			  }

      `;

// const ImpressumDesignBox = styled.div`
//         display: flex;
//         justify-content: flex-end;
//         font-style: italic;
//         color: black;
//         width: 50%;
//       `;

class Footer extends Component {
  scrollToTop() {
    scroll.scrollToTop();
  }

  render() {
    return (
      <Wrapper>
        <Intro>
          <Brand>Laufsteg</Brand>
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
          <IconContainer>
            <Icon className="fa fa-facebook-square fa-1x" colorNormal="black" colorActive="#ED024B"/>
            <Icon className="fa fa-instagram fa-1x" colorNormal="black" colorActive="#ED024B"/>
            <Icon className="fa fa-envelope-o fa-1x" colorNormal="black" colorActive="#ED024B"/>
            <Icon className="fa fa-phone fa-1x" colorNormal="black" colorActive="#ED024B"/>
          </IconContainer>
          <IconContainer>
            <ImpressumIconArrow onClick={this.scrollToTop}>
              <i className="fa fa-chevron-up fa-2x" aria-hidden="true" />
            </ImpressumIconArrow>
          </IconContainer>
        </ImpressumIconBox>
        <ImpressumLinkDesignBox>
          <ImpressumLinkBox>
            Impressum
          </ImpressumLinkBox>
        </ImpressumLinkDesignBox>
      </Wrapper>
    );
  }
}

export default Footer;
