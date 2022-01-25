import styled from "styled-components";

export const Box = styled.div`
  font-family: Poppins;
  display: flex;
  flex-direction: column;
  width: 35%;
`;

export const SmallText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.text.primaryDark};
  margin-top: 50px;
  margin-bottom: 0;
`;

export const BigText = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 64px;
  line-height: 80px;
  letter-spacing: -0.02em;
  color: ${(props) => props.theme.text.primary};
  margin: 10px 0;
`;
