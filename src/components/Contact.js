import React, { Component } from 'react';
import styled from 'styled-components';
import SectionTitle from './common/SectionTitle';
import BackgroundImage from './common/BackgroundImage'

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
  background-color: #606060;
	${''/* height: 680px; */}
	padding-top: 4rem;
  `;

const ContactBody = styled.div`
  display: flex;
  flex-direction: row;
	justify-content: space-between;
	align-items: stretch;
  margin-top: 9rem;
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
	position: relative;
	width: 550px;
	padding: 2rem;
	border: 3px solid white;
	z-index: 1;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: -1;
		background-size: cover;
		background-image: url('http://666a658c624a3c03a6b2-25cda059d975d2f318c03e90bcf17c40.r92.cf1.rackcdn.com/unsplash_527bf56961712_1.JPG');
		filter: blur(1.5px);
	}
`;

const Insta = styled.div`
  display: flex;
  background-image: url(${require('../assets/images/Instagrampic.png')});
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  flex-basis: 50%;
  border: solid 3px;
  border-color: white;
	margin-right: 1rem;
	margin-bottom: 1rem;
`;

const Face = styled.div`
  display: flex;
  background-image: url(${require('../assets/images/Facebookpic.png')});
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  flex-basis: 50%;
  border: solid 3px;
  border-color: white;
	margin-right: 1rem;
	margin-bottom: 1rem;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  font-size: 12pt;
  background-color: grey;
  text-align: center;
  border: solid 3px;
  border-color: withe;
	margin-right: 1rem;
	flex-basis: 50%;
`;

const Form = styled.form`
	width: 500px;
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
              <div>Instagram</div>
            </Insta>
						<Face>
              <div>facebook</div>
            </Face>
          </ContactTile>
					<ContactTile>
						<Info>
              <div>Telefon:</div>
              {' '}
              <div>07131  20 31 881</div>
            </Info>
						<Info>
              <div>Adresse:</div>
              {' '}
              <div>Biedermanngasse 4 </div>
              {' '}
              <div>74072 Heilbronn</div>
            </Info>
					</ContactTile>
					</ContactDetails>
          <ContactForm>
            <div className="field">
              <label className="label">Name</label>
							<div>hello</div>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Text input"
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Email</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="email"
                  placeholder="Email input"
                  value="hello@"
                />
                <span className="icon is-small is-left">
                  <i className="fa fa-envelope" />
                </span>
              </div>
            </div>

            <div className="field">
              <label className="label">Message</label>
              <div className="control">
                <textarea className="textarea" placeholder="Textarea" />
              </div>
            </div>

            <div className="control">
              <button className="button is-link">Submit</button>
            </div>
          </ContactForm>
        </ContactBody>
      </Wrapper>
    );
  }
}

export default Contact;
