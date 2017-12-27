import React, { Component } from 'react';
import styled from 'styled-components';
import SectionTitle from './common/SectionTitle';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
  background-color: #606060;
	height: 680px;
	padding-top: 4rem;
  `;

const ContactBody = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 9rem;
  margin-left: 6rem;
  margin-right: 6rem;
  `;

const LinkInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
  `;

const Filter = styled.div`
      display: flex;
      background-color: white;
      opacity: 0.7;
      padding: 50%;
      border: 2px solid;
      border-color: red;
      position: relative;
`;

const ContactForm = styled.div`
    font-size: 20px;
    color: black;
    position: relative;
  `;

const Insta = styled.div`
    display: flex;
    justify-content: center;
    background-image: url(${require('../assets/images/Instagrampic.png')});
    background-position: top;
    background-size: 100%;
    background-repeat: no-repeat;
    padding: 6rem;
    margin-bottom: 1.5rem;
    margin-right: 8rem;
    border: solid 3px;
    border-color: grey;
  `;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    font-size: 12pt;
    background-color: grey;
    padding: 3rem;
    margin-right: 8rem;
    text-align: center;
    border: solid 3px;
    border-color: grey;
  `;

const Mail = styled.div`
    background-image: url(${require('../assets/images/Mailbigpic.png')});
		background-color: white !important;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 4rem;
    border: 3px solid;
    border-color: grey;
    opacity: 0.9;
    ${/* filter: blur(1.5px); */ ''}

  `;

const Face = styled.div`
    display: flex;
    background-image: url(${require('../assets/images/Facebookpic.png')});
    background-position: top;
    background-size: 100%;
    background-repeat: no-repeat;
    padding: 4rem;
    margin-bottom: 1.5rem;
    margin-right: 8rem;
    border: solid 3px;
    border-color: grey;
  `;

class Contact extends Component {
  render() {
    return (
      <Wrapper>
        <SectionTitle title="Kontakt" />
        <ContactBody>
          <LinkInfoContainer>
            <Insta>
              <div>Instagram</div>
            </Insta>
            <Face>
              <div>facebook</div>
            </Face>
            <Info>
              <div>Telefon:</div>
              {' '}
              <div>07131  20 31 881</div>
              <br />
              <div>Biedermanngasse 4 </div>
              {' '}
              <div>74072 Heilbronn</div>
            </Info>
          </LinkInfoContainer>
          <LinkInfoContainer>
            <Mail>
              <ContactForm>
                <div className="field">
                  <label className="label">Name</label>
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
            </Mail>
          </LinkInfoContainer>
        </ContactBody>
      </Wrapper>
    );
  }
}

export default Contact;
