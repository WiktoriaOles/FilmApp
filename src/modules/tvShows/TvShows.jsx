import {
  Background,
  Header,
  InfoBox,
  Movie,
  MovieList,
} from "../../components";
import { ContentBox } from "./TvShows.style";
import { response } from "../dashboard/Dashboard.mock";

const TvShows = () => (
  <Background>
    <Header />
    <ContentBox>
      <InfoBox title="TV Shows" number="8" />
      <MovieList
        movies={response.Search.map((movie) => (
          <Movie key={movie.imdbID} title={movie.Title} img={movie.Poster} />
        ))}
      ></MovieList>
    </ContentBox>
  </Background>
);

export default TvShows;
