import { Background, Header, Baner, Rating } from "../../components";
import {
  ContentBox,
  InfoContainer,
  Img,
  Tag,
  Value,
  InfoText,
} from "./TvDetails.style";
import { response } from "./TvDetail.mock";

const TvDetails = () => (
  <Background>
    <Header />
    <ContentBox>
      <Baner img={response.Poster} title={response.Title} type="Tv Shows" />
      <InfoContainer>
        <Img src={response.Poster}></Img>
        <InfoText>
          <p>{response.Plot}</p>
          <Rating value={response.imdbRating} />
          <Tag>Type</Tag>
          <Value>{response.Type}</Value>
          <Tag>First air date</Tag>
          <Value>{response.Released}</Value>
          <Tag>No. of Seasons</Tag>
          <Value>{response.totalSeasons}</Value>
          <Tag>Episode run Time</Tag>
          <Value>{response.Runtime}</Value>
          <Tag>Genes</Tag>
          <Value>{response.Genre}</Value>
        </InfoText>
      </InfoContainer>
    </ContentBox>
  </Background>
);

export default TvDetails;
