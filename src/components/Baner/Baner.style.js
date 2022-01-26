import styled from "styled-components";
import theme from "../../config/theme";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-style: normal;
  color: ${(props) => theme.text.primary};
`;
export const Poster = styled.div`
  height: 500px;
  width: 100%;
  background: linear-gradient(
      180deg,
      rgba(54, 44, 146, 0.4) 0%,
      rgba(18, 98, 151, 0.4) 100%
    ),
    url(${(props) => props.img});
  background-repeat: no-repeat;
  border-radius: 40px;
  background-size: cover;
  animation: MOVE-BG 30s linear infinite;
  animation-direction: alternate-reverse;
  @keyframes MOVE-BG {
    0% {
      background-position: center top;
    }
    100% {
      background-position: center bottom;
    }
  }
`;

export const TextBox = styled.div`
  margin-top: -50px;
  margin-left: 80px;
  background: rgba(32, 40, 62, 0.6);
  backdrop-filter: blur(24px);
  border-radius: 24px;

  width: 30%;
  padding: 30px 50px;
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  p {
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    color: #beb7fb;
  }
`;
