import {
  Navbar,
  LogoContainer,
  HeadersButton,
  ButtonsWrapper,
} from "./Header.style";
import { ReactComponent as Logo } from "../../assets/Logo.svg";

const Header = () => (
  <Navbar>
    <LogoContainer>
      <Logo />
    </LogoContainer>
    <ButtonsWrapper>
      <HeadersButton>Movies</HeadersButton>
      <HeadersButton>TV Shows</HeadersButton>
      <HeadersButton>Suggest me →</HeadersButton>
    </ButtonsWrapper>
  </Navbar>
);

export default Header;
