import React, { Component } from 'react';
import styled from 'styled-components';
import { Font, FONT_URL } from '../utils';

import SectionTitle from './common/SectionTitle';
import BackgroundImage from './common/BackgroundImage';
import Icon from './common/Icon';
import Location from './Location';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
  background-color: #606060;
	height: 620px;
	padding-top: 4rem;
  `;

const ContactBody = styled.div`
  display: flex;
  flex-direction: row;
	justify-content: space-between;
	align-items: stretch;
  margin-top: 7rem;
  margin-left: 6rem;
  margin-right: 6rem;
	margin-bottom: -5rem;
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
	justify-content: space-between;
	flex-basis: 50%;
`;

const ContactTile = styled.div`
  display: flex;
  flex-direction: row;
	justify-content: space-between;
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

const Insta = styled.div`
  display: flex;
	position: relative;
	flex-basis: 50%;
	z-index: 1;
	background-color: black;
	align-items: center;
	justify-content: center;
	align-items: center;
	border: solid 3px;
	border-color: white;
	margin-right: 1rem;
	margin-bottom: 1rem;
	cursor: pointer;


	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: -1;
		background-size: cover;
		background-image: url(${require('../assets/images/Instagrampic.png')});
		filter: blur(0.3px);
		opacity: 0.75;
	}

`;

const Face = styled.div`
display: flex;
position: relative;
flex-basis: 50%;
z-index: 1;
background-color: black;
align-items: center;
justify-content: center;
border: solid 3px;
border-color: white;
margin-right: 1rem;
margin-bottom: 1rem;
cursor: pointer;


&::before {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: -1;
	background-size: cover;
	background-image: url(${require('../assets/images/Facebookpic.png')});
	filter: blur(0.3px);
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

`;
const Info = styled.div`
  display: flex;
	position: relative;
  flex-direction: column;
  color: white;
  font-size: 12pt;
  background-color: grey;
  text-align: center;
	justify-content: center;
  border: solid 3px;
  border-color: withe;
	margin-right: 1rem;
	flex-basis: 50%;
	font-size: .9rem;
	letter-spacing: 1px;
	font-weight: bold;
	font-family: ${Font.SECONDARY};

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

const Form = styled.form`
	width: 500px;
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

class Contact extends Component {
  render() {
    return (
      <Wrapper>
        <SectionTitle title="Kontakt" />
        <ContactBody>
          <ContactDetails>
            <ContactTile>
              <Insta>
                <Icon className="fa fa-instagram fa-3x" color="#F5F5F5" />
              </Insta>
              <Face>
                <Icon className="fa fa-facebook-square fa-3x" color="#F5F5F5" />
              </Face>
            </ContactTile>
            <ContactTile>
              <Info>
                <Icon className="fa fa-phone fa-3x" color="white" />
                {' '}
                <div>+49 7131  20 31 881</div>
                {' '}
                <div>Innerhalb der Öffnungszeiten</div>
              </Info>
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
      </Wrapper>
    );
  }
}

export default Contact;
