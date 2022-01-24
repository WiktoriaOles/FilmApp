import styled from "styled-components";

export const Navbar = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 40px;

  width: 100%;
  height: 80px;

  background: rgba(18, 24, 41, 0.8);
  backdrop-filter: blur(40px);
`;

export const LogoContainer = styled.svg`
  height: 32px;
  width: 27.48px;
  left: 5.6px;
  top: 4px;
  border-radius: 0px;
  display: flex;
  justify-content: flex-start;
`;

export const HeadersButton = styled.button`
  width: 140px;
  height: 24px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.02em;
  transition: all 0.3s;

  display: flex;
  align-items: center;
  color: ${(props) => props.theme.text.primaryDark};
  background-color: transparent;
  border: none;
  &:hover {
    color: ${(props) => props.theme.text.primary};
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
`;
