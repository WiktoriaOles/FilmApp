import {
  Background,
  Header,
  InfoBox,
  Movie,
  MovieList,
} from "../../components";
import { ContentBox } from "./Movies.style";
import { response } from "../dashboard/Dashboard.mock";

const Movies = () => (
  <Background>
    <Header />
    <ContentBox>
      <InfoBox title="Movies" number="8" />
      <MovieList
        movies={response.Search.map((movie) => (
          <Movie key={movie.imdbID} title={movie.Title} img={movie.Poster} />
        ))}
      ></MovieList>
    </ContentBox>
  </Background>
);

export default Movies;
