import React from 'react';
import styled, { css } from "styled-components";


// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file



const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;

  @media (min-width: 1280px) {
    .header {
      width: 1280px;
    }
  }
`;

const HeaderSpan = styled.span`
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;


${props =>
  props.date &&
  css`
    margin-left: 25px;
    flex: 1;
  `};

${props =>
  props.temp &&
  css`
    text-align: right;
    margin-right: 25px;
    flex: 1;
  `};
`;

const HeaderH1 = styled.h1`
  font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;

`;


const Header = () => {
  return (
    <HeaderDiv>
      <HeaderSpan date>SMARCH 32, 2018</HeaderSpan>
      <HeaderH1>Lambda Times</HeaderH1>
      <HeaderSpan temp> 98°</HeaderSpan>
    </HeaderDiv>
  )
}

export default Header