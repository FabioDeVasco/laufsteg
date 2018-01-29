import React, { Component } from 'react';
import styled from 'styled-components';
import { Font, FONT_URL } from '../utils';

import SectionTitle from './common/SectionTitle';
import Icon from './common/Icon';
import Location from './contactComponents/Location';
import SocialMedia from './contactComponents/SocialMedia';
import InfoCall from './contactComponents/InfoCall';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
  background-color: #606060;
	height: 800px;
	${''/* padding-top: 4rem; */}
  `;

const ContactBody = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 7rem;
  margin-left: 6rem;
  margin-right: 6rem;
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
	flex-basis: 50%;

`;

const ContactTile = styled.div`
  display: flex;
  flex-direction: row;
	flex-basis: 50%;

`;

const ContactForm = styled.form`
	display: flex;
	flex-direction: column;
	position: relative;
	width: 550px;
	padding: 2rem;
	border: 3px solid white;
	z-index: 1;
	background-color: black;
	text-align: left;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: -1;
		background-size: cover;
		background-image: url(${require('../assets/images/Mailbigpic.png')});
		filter: blur(0.8px);
		opacity: 0.75;
	}
`;

const InfoAdress = styled.div`
  display: flex;
	position: relative;
  flex-direction: column;
  color: white;
  font-size: 12pt;
  background-color: grey;
  text-align: center;
  border: solid 3px;
  border-color: withe;
	margin-right: 1rem;
	flex-basis: 50%;
	line-height: 1.2;
	font-size: .9rem;
	letter-spacing: 1px;
	font-weight: bold;

	&:hover {
    border-color: #908C8C;
		transition: border-color 0.75s;
	}
`;

const Address = styled.div`
	background-color: gray;
	height: 50px;
	position: absolute;
	bottom: 0;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	line-height: 1.2;
	font-size: .9rem;
	letter-spacing: 1px;
	font-weight: bold;
	font-family: ${Font.SECONDARY};
`;


const Label = styled.label.attrs({ className: 'label' })`
	color: white;
	letter-spacing: 1px;
	text-transform: uppercase;
	word-spacing: 3px;
	font-size: .8rem;
	letter-spacing: 1px;
	color: #F5F5F5;
`;

const WhiteBackground = styled.div`
	position: relative;
	bottom: 0;
	left: 0;
	width: 100%;
	background-color: white;
	z-index: -1;
	height: 41%;

	@media (min-width: 480px) {
		height: 31%;
	}

	@media (min-width: 768px) {
		height: 32%;
	}

	@media (min-width: 992px) {
		height: 15%;
	}

`;

class Contact extends Component {
  render() {
    return (
      <Wrapper>
        <SectionTitle title="Kontakt" />
        <ContactBody>
          <ContactDetails>
            <ContactTile>
              <SocialMedia
                image={require('../assets/images/Instagrampic.png')}
                className="fa fa-instagram fa-3x"
                colorNormal="#F5F5F5"
                colorActive="#cd486b"
                href="https://www.instagram.com/laufsteg.heilbronn/"
              />
              <SocialMedia
                image={require('../assets/images/Facebookpic.png')}
                className="fa fa-facebook-square fa-3x"
                colorNormal="#F5F5F5"
                colorActive="#3b5998"
                href="https://de-de.facebook.com/Laufsteg-Heilbronn-361537650674287/"
              />
            </ContactTile>
            <ContactTile>
              <InfoCall
                className="fa fa-phone fa-3x"
                colorNormal="#F5F5F5"
                colorActive="#A99D73"
                href="tel:+4971312031881"
              />
              <InfoAdress>
                <Location />
                <Address>
                  Biedermanngasse 4<br />
                  74072 Heilbronn
                </Address>
              </InfoAdress>
            </ContactTile>
          </ContactDetails>
          <ContactForm>
            <div className="field">
              <Label>Ihr Name</Label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Geben Sie Ihren Namen ein"
                />
              </div>
            </div>

            <div className="field">
              <Label>Ihre Emailadresse</Label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="email"
                  placeholder="Geben Sie Ihre Emailadresse ein"
                />
                <span className="icon is-small is-left">
                  <i className="fa fa-envelope" />
                </span>
              </div>
            </div>

            <div className="field">
              <Label>Ihre Nachricht</Label>
              <div className="control">
                <textarea
                  className="textarea"
                  placeholder="Womit können wir Ihnen helfen?"
                />
              </div>
            </div>

            <div style={{ alignSelf: 'center' }} className="control">
              <button className="button is-link">Absenden</button>
            </div>
          </ContactForm>
        </ContactBody>
				<WhiteBackground />
      </Wrapper>
    );
  }
}

export default Contact;
