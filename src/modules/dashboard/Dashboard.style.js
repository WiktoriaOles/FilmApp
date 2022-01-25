import styled from "styled-components";
import bgsrc from "../../assets/Background.png";

export const ContentBox = styled.div`
  color: ${(props) => props.theme.text.primary};
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 50px 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Background = styled.div`
  height: 100%;
  width: 100%;
  background-image: url("${bgsrc}"),
    linear-gradient(
      ${(props) => props.theme.primary},
      ${(props) => props.theme.primary}
    );
  background-size: cover;
  z-index: -10;
`;
