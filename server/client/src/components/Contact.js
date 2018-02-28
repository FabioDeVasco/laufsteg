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
  background-color: white;
	height: 800px;

	@media (min-width: 480px) {
		background-color: #606060;
		height: 1000px;
		}

	@media (min-width: 768px) {
		height: 700px;
		}

	@media (min-width: 992px) {
		height: 700px;
		}
	}
  `;

const ContactBody = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-top: 3rem;
  margin-left: 1.5rem;
  margin-right: 1.5rem;


		@media (min-width: 480px) {
			margin-top: 6rem;
			margin-left: 2rem;
		  margin-right: 2rem;
			flex-direction: column-reverse;
		}

		@media (min-width: 768px) {
			margin-top: 6rem;
			margin-left: 4rem;
		  margin-right: 4rem;
			height: 400px;
			flex-direction: row;
		}

		@media (min-width: 992px) {
			margin-top: 5rem;
			margin-left: 6rem;
		  margin-right: 6rem;
			height: 400px;
			flex-direction: row;
		}
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
	flex-basis: 50%;
	height: 20rem;
	z-index: 1;

	@media (min-width: 480px) {
		height: 70rem;
	}

	@media (min-width: 768px) {
		height: 23.15rem;
	}

	@media (min-width: 992px) {
		height: 25rem;
	}

`;

const ContactTileUp = styled.div`
  display: flex;
  flex-direction: row;
	flex-basis: 50%;
	margin-bottom: 0.5rem;
	margin-top: 1rem;
	height: 100px;

	@media (min-width: 480px) {
		margin-top: 1rem;
		height: 300px;
	}

	@media (min-width: 768px) {
		margin-top: 0rem;
	}

	@media (min-width: 992px) {
		margin-top: 0rem;
	}
`;


const ContactTileDown = styled.div`
  display: flex;
  flex-direction: row;
	flex-basis: 50%;
	margin-top: 0.5rem;
	height: 100px;
	margin-bottom: 1rem;

	@media (min-width: 480px) {
		height: 300px;
		margin-bottom: 1rem;
	}

	@media (min-width: 768px) {
		margin-bottom: 0rem;
	}

	@media (min-width: 992px) {
		margin-bottom: 0rem;
	}
`;

const ContactForm = styled.form`
	display: flex;
	flex-direction: column;
	position: relative;
	width: 100%;
	padding: 2rem;
	border: 3px solid white;
	z-index: 1;
	background-color: black;
	text-align: left;
	margin-left: 0rem;
	height: 23rem;

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


			@media (min-width: 480px) {
				width: 100%;
				margin-left: 0rem;
				height: 60rem;
			}

			@media (min-width: 768px) {
				width: 50%;
				margin-left: 1rem;
				height: 23.15rem;
			}

			@media (min-width: 992px) {
				width: 50%;
				margin-left: 1rem;
				height: 25rem;
			}
`;

const InfoAdress = styled.div`
  display: flex;
	position: relative;
  flex-direction: column;
  text-align: center;
  border: solid 3px;
  border-color: white;
	margin-right: 1rem;
	flex-basis: 50%;

	&:hover {
    border-color: #908C8C;
		transition: border-color 0.75s;
	}
`;

const Address = styled.a`
	background-color: gray;
	color: white;
	height: 100%;
	position: absolute;
	bottom: 0;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	line-height: 1.2;
	font-size: .7rem;
	letter-spacing: 1px;
	font-weight: bold;
	font-family: ${Font.SECONDARY};

	@media (min-width: 480px) {
		font-size: .7rem;
		height: 35%;
	}

	@media (min-width: 768px) {
		font-size: .8rem;
		height: 27%;
	}

	@media (min-width: 992px) {
		font-size: .9rem;
		height: 25%;
	}
`;


const Label = styled.label.attrs({ className: 'label' })`
	color: white;
	letter-spacing: 1px;
	text-transform: uppercase;
	word-spacing: 1px;
	font-size: .7rem;
	letter-spacing: 1px;
	color: #F5F5F5;

	@media (min-width: 480px) {
		font-size: .7rem;
		word-spacing: 1px;
	}

	@media (min-width: 768px) {
		font-size: .8rem;
		word-spacing: 2px;
	}

	@media (min-width: 992px) {
		font-size: .9rem;
		word-spacing: 3px;
	}
`;
const Input = styled.input`
	font-size: .6rem;
	word-spacing: 1px;
	white-space: pre;
	padding-left: 2.25em;

@media (min-width: 480px) {
	font-size: .7rem;
	word-spacing: 1px;
		white-space: pre;
}

@media (min-width: 768px) {
	font-size: .8rem;
	word-spacing: 2px;
		white-space: pre;
}

@media (min-width: 992px) {
	font-size: 1rem;
	word-spacing: 3px;
		white-space: nowrap;
}

`;

const Textarea = styled.textarea`
	font-size: .6rem;
	word-spacing: 1px;
	padding-left: 2.25em;

@media (min-width: 480px) {
	font-size: .7rem;
	word-spacing: 1px;
}

@media (min-width: 768px) {
	font-size: .8rem;
	word-spacing: 2px;
}

@media (min-width: 992px) {
	font-size: 1rem;
	word-spacing: 3px;
}

`;

const EmailEnter = styled.div`
	display: flex;
	flex-direction: column;
	`;

	const Button = styled.button`
		font-size: .6rem;

	@media (min-width: 480px) {
		font-size: .7rem;
	}

	@media (min-width: 768px) {
		font-size: .8rem;
	}

	@media (min-width: 992px) {
		font-size: 1rem;
	}

	`;

const WhiteBackground = styled.div`
	position: relative;
	bottom: 0;
	left: 0;
	width: 100%;
	background-color: white;
	z-index: 0;
	height: 1%;

	@media (min-width: 480px) {
		height: 10%;
	}

	@media (min-width: 768px) {
		height: 46%;
	}

	@media (min-width: 992px) {
		height: 35%;
	}

`;

class Contact extends Component {
  render() {
    return (
      <Wrapper>
        <SectionTitle title="Kontakt" />
        <ContactBody>
          <ContactDetails>
            <ContactTileUp>
							<InfoAdress>
								<Location />
								<Address href="http://maps.google.com/?q=Biedermanngasse4,74072Heilbronn">
									Biedermanngasse 4<br />
									74072 Heilbronn
								</Address>
							</InfoAdress>
							<SocialMedia
                image={require('../assets/images/Instagrampic.png')}
                className="fa fa-instagram fa-3x"
                colorNormal="#F5F5F5"
                colorActive="#cd486b"
                href="https://www.instagram.com/laufsteg.heilbronn/"
              />
            </ContactTileUp>
            <ContactTileDown>
							<InfoCall
								className="fa fa-phone fa-3x"
								colorNormal="#F5F5F5"
								colorActive="#A99D73"
								href="tel:+4971312031881"
							/>
							<SocialMedia
                image={require('../assets/images/Facebookpic.png')}
                className="fa fa-facebook-square fa-3x"
                colorNormal="#F5F5F5"
                colorActive="#3b5998"
                href="https://de-de.facebook.com/Laufsteg-Heilbronn-361537650674287/"
              />
            </ContactTileDown>
          </ContactDetails>
          <ContactForm>
            <div className="field">
              <Label>Ihr Name</Label>
              <div className="control">
                <Input
                  className="input"
                  type="text"
                  placeholder="Geben Sie Ihren Namen ein"
                />
              </div>
            </div>

            <div className="field">
              <Label>Ihre Emailadresse</Label>
              <EmailEnter className="control has-icons-left has-icons-right">
                <Input
                  className="input"
                  type="email"
                  placeholder="Geben Sie Ihre Emailadresse ein"
                />
                {/* <span className="icon is-small is-left">
                  <i className="fa fa-envelope" />
                </span> */}
              </EmailEnter>
            </div>

            <div className="field">
              <Label>Ihre Nachricht</Label>
              <div className="control">
                <Textarea
                  className="textarea"
                  placeholder="Womit können wir Ihnen helfen?"
                />
              </div>
            </div>

            <div style={{ alignSelf: 'center' }} className="control">
              <Button className="button is-link">Absenden</Button>
            </div>
          </ContactForm>
        </ContactBody>
				<WhiteBackground />
      </Wrapper>
    );
  }
}

export default Contact;
