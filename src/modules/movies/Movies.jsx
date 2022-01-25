import { Header } from "../../components/header";
import { InfoBox } from "../../components/InfoBox";
import { Background } from "../../components/Background";
import { ContentBox } from "./Movies.style";
import { Movie } from "../../components/Movie";
import { response } from "../dashboard/Dashboard.mock";
import { MovieList } from "../../components/MovieList";

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
