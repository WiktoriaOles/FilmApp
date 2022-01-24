import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  margin-bottom: 50px;
`;

export const Div = styled.div`
  width: 60%;
  height: 60px;
  margin-top: 10px;
`;

export const BigText = styled.h1`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 64px;
  line-height: 80px;
  letter-spacing: -0.02em;
  color: ${(props) => props.theme.text.primary};
  margin-bottom: 10px;
`;

export const SmallText = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.text.primaryDark};
`;
