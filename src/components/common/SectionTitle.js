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
`;

const Text = styled.div`
  font-size: 26pt;
  color: black;
  letter-spacing: 15px;
  text-align: center;
  text-transform: uppercase;
  padding-right: 4rem;
  margin-bottom: .4rem;
`;

const Border = styled.div`
  border-bottom: 3px solid;
  border-color: #ED024B;
  width: 500px;
  align-self: flex-end;
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
