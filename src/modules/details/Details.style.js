import styled from "styled-components";
import theme from "../../config/theme";

export const ContentBox = styled.div`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 30px 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const InfoContainer = styled.div`
display: flex;
padding: 80px;
width: 100%
height: 500px;
`;

export const Img = styled.img`
  width: 50%;
  border-radius: 24px;
  margin-right: 10%;
`;

export const InfoText = styled.div`
  color: ${(props) => theme.text.primaryDark};
  font-weight: normal;
  font-size: 20px;
  line-height: 32px;
  padding-right: 80px;
`;

export const Tag = styled.p`
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  margin-top: 40px;
  margin-bottom: -10px;
`;

export const Value = styled.p`
  color: ${(props) => theme.text.primary};
  text-transform: capitalize;
`;
