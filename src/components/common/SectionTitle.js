import React, { Component } from 'react';
import styled from 'styled-components';
import { Font, FONT_URL } from '../../utils';

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 5rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 520px) {
    width: 100%;
    justify-content: center;}

`;

const Text = styled.div`
  font-size: 26pt;
  color: black;
  letter-spacing: 15px;
  text-align: center;
  text-transform: uppercase;
  padding-right: 4rem;
  margin-bottom: .4rem;

  @media (max-width: 800px) {
    font-size: 20pt;}
  @media (max-width: 700px) {
    font-size: 18pt;
    letter-spacing: 10px;
    padding-right: 1rem;}
  @media (max-width: 520px) {
    font-size: 16pt;
    letter-spacing: 5px;
    padding-right: 0rem;}
  @media (max-width: 370px) {
    font-size: 14pt;
    letter-spacing: 3px;}
  @media (max-width: 300px) {
    font-size: 14pt;
    letter-spacing: 1px;
    }
`;

const Border = styled.div`
  border-bottom: 3px solid;
  border-color: #ED024B;
  width: 80%;
  align-self: flex-end;
  @media (max-width: 520px) {
    width: 60%;
    border-bottom: 2px solid;
    border-color: #ED024B;
  }
`;

const SectionTitle = ({ title }) => {
  return (
    <Wrapper>
      <Content>
        <Text>{title}</Text>
        <Border />
      </Content>
    </Wrapper>
  );
};

export default SectionTitle;
