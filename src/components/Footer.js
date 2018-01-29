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
`;

const Intro = styled.div`
  	display: flex;
  	flex-direction: row;
  	justify-content: center;
		background-color: white;
		padding-bottom: 2rem;
  `;
//
// const IntroSpacer = styled.div`
//       display: flex;
//       border-top: 1px solid;
//       border-color: black;
//       margin-top: 3.5rem;
//       margin-left: 1rem;
//       margin-right:1rem;
//       padding-top: 2rem;
//       width: 28rem;
//     `;

// const IntroTitel = styled.div`
//       display: flex;
//       flex-direction: row;
//       justify-content: center;
//       margin-top: 1rem;
//       padding-top: 2rem;
//       font-size: 18pt;
//       color: black;
//       text-transform: uppercase;
//       margin-bottom: 1rem;
//     `;
//
// const Brand = styled.div`
//       	border-color: black;
//       	border: 1px solid ;
//       	border-radius: 6px;
//       	font-size: 20pt;
//       	letter-spacing: 3px;
//       	color: black;
//       	padding: 0.5rem 2rem 0.5rem 2rem;
//       	position: relative;
//       	margin-top: 2rem;
//         margin-bottom: 2rem;
// 				text-transform: uppercase;
//       `;

const ImpressumBox = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 2rem;
        margin-bottom: 2rem;
				margin-left: 1.5rem;
				margin-right: 1.5rem;

				@media (min-width: 480px) {
				margin-left: 2rem;
				margin-right: 2rem;

				}

				@media (min-width: 768px) {
				margin-left: 4rem;
				margin-right: 4rem;
				flex-direction: row;
				}

				@media (min-width: 992px) {
				margin-left: 6rem;
				margin-right: 6rem;
				}
      `;

const ImpressumPart = styled.div`
        display: flex;
        flex-direction: column;
        margin-left: 0.5rem;
        margin-right: 0.5rem;

				@media (min-width: 480px) {
					margin-left: 0.5rem;
					margin-right: 0.5rem;
				}

				@media (min-width: 768px) {
					margin-left: 0.3rem;
					margin-right: 0.3rem;
				}
				@media (min-width: 890px) {
					margin-left: 1rem;
	        margin-right: 1rem;
				}

				@media (min-width: 992px) {
					margin-left: 1.5rem;
	        margin-right: 1.5rem;
				}
      `;

const ImpressumTitel = styled.div`
        display: flex;
        color: #ED024B;
        text-transform: uppercase;
        align-self: center;
        margin-bottom: 0.25rem;
				margin-top: 1.5rem;
				font-size: 10pt;


				@media (min-width: 480px) {
					  align-self: center;
						font-size: 11pt;
						margin-bottom: 0.25rem;
						margin-top: 1.5rem;
				}

				@media (min-width: 768px) {
					  align-self: baseline;
						font-size: 12pt;
						margin-bottom: 1rem;
				}

				@media (min-width: 992px) {
					align-self: baseline;
					font-size: 13pt;
					margin-bottom: 1rem;
				}
      `;

const ImpressumText = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 9pt;
        text-align: center;
        line-height: 1.8rem;
        color: black;
				font-family: ${Font.SECONDARY};
				white-space: pre;


				@media (min-width: 480px) {
					font-size: 10pt;
					text-align: center;
				}

				@media (min-width: 768px) {
					font-size: 10pt;
					text-align: justify;
					line-height: 1.5rem;
				}

				@media (min-width: 890px) {
					font-size: 10pt;
					text-align: justify;


				}

				@media (min-width: 992px) {
					font-size: 12pt;
					text-align: justify;
					white-space: pre;


				}
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
				cursor: pointer;
				&:hover {
			    color: black;
					transition: color 0.75s;
			  }
        `;

const ImpressumLinkDesignBox = styled.div`
        display: flex;
        flex-direction: row;
        margin-left: 0rem;
        margin-right: 0rem;
        margin-bottom: 0.5rem;
				margin-top: 0.5rem;

				@media (min-width: 480px) {
					margin-right: 0rem;
					margin-left: 0rem;
				}

				@media (min-width: 768px) {
					margin-right: 6rem;
					margin-left: 6rem;
				}

				@media (min-width: 992px) {
					margin-right: 8rem;
					margin-left: 6rem;
				}

      `;

const ImpressumLinkBox = styled.div`
        display: flex;
        color:  #ED024B;

				cursor: pointer;
				&:hover {
			    color: black;
					transition: color 0.75s;
			  }

      `;

const End = styled.div`
			  	display: flex;
					background-color: #C8C8C8;
					margin-top: 1rem;
					font-size: 10pt;
					justify-content: center;

					@media (min-width: 480px) {
						font-size: 11pt;
						justify-content: center;
					}

					@media (min-width: 768px) {
						font-size: 12pt;
						justify-content: flex-end;
					}

					@media (min-width: 992px) {
						font-size: 12pt;
						justify-content: flex-end;
					}

			  `;

class Footer extends Component {
  scrollToTop() {
    scroll.scrollToTop();
  }

  render() {
    return (
      <Wrapper>
        <Intro>
          <ImpressumIconArrow onClick={this.scrollToTop}>
            <i className="fa fa-chevron-up fa-2x" aria-hidden="true" />
          </ImpressumIconArrow>
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
              <div>Umsatzsteuer-Ident.-Nr.: DE 2985584</div>
              {' '}
              <div>Inhaltlich Verantwortlicher: Fatma Öztoprak</div>
            </ImpressumText>
          </ImpressumPart>
        </ImpressumBox>
        <ImpressumIconBox>
          <IconContainer>
            <Icon
              className="fa fa-facebook-square fa-1x"
              colorNormal="black"
              colorActive="#ED024B"
              href="https://de-de.facebook.com/Laufsteg-Heilbronn-361537650674287/"
            />
            <Icon
              className="fa fa-instagram fa-1x"
              colorNormal="black"
              colorActive="#ED024B"
              href="https://www.instagram.com/laufsteg.heilbronn/"
            />
            <Icon
              className="fa fa-envelope-o fa-1x"
              colorNormal="black"
              colorActive="#ED024B"
              href="mailto:laufsteg.heilbronn@t-online.de"
            />
            <Icon
              className="fa fa-phone fa-1x"
              colorNormal="black"
              colorActive="#ED024B"
              href="tel:+4971312031881"
            />
          </IconContainer>
        </ImpressumIconBox>
        <End>
          <ImpressumLinkDesignBox>
            <ImpressumLinkBox>
              Impressum
            </ImpressumLinkBox>
          </ImpressumLinkDesignBox>
        </End>
      </Wrapper>
    );
  }
}

export default Footer;
