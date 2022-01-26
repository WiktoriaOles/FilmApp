import { Background, Header, Baner, Rating } from "../../components";
import {
  ContentBox,
  InfoContainer,
  Img,
  Tag,
  Value,
  InfoText,
} from "./Details.style";
import { response } from "./Detail.mock";

const Details = () => (
  <Background>
    <Header />
    <ContentBox>
      <Baner img={response.Poster} title={response.Title} type="Movies" />
      <InfoContainer>
        <Img src={response.Poster}></Img>
        <InfoText>
          <p>{response.Plot}</p>
          <Rating value={response.imdbRating} />

          <Tag>Type</Tag>
          <Value>{response.Type}</Value>
          <Tag>Relase Date</Tag>
          <Value>{response.Released}</Value>
          <Tag>Run Time</Tag>
          <Value>{response.Runtime}</Value>
          <Tag>Genes</Tag>
          <Value>{response.Genre}</Value>
        </InfoText>
      </InfoContainer>
    </ContentBox>
  </Background>
);

export default Details;
