import styled from "styled-components";
import bgsrc from "../../assets/Background.png";

export const BackgroundImg = styled.div`
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-image: url("${bgsrc}"),
    linear-gradient(
      ${(props) => props.theme.primary},
      ${(props) => props.theme.primary}
    );
  background-size: cover;
`;
