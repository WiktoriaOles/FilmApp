import { Container, BigText, SmallText, Div } from "./TextSection.style";
import { SearchBar } from "../../components/searchBar";

const TextSection = () => (
  <Container>
    <BigText>TtoV</BigText>
    <SmallText>
      List of movies and TV Shows, I, Pramod Poudel have watched till date.
      <br />
      Explore what I have watched and also feel free to make a suggestion. 😉
    </SmallText>
    <Div>
      <SearchBar />
    </Div>
  </Container>
);

export default TextSection;
