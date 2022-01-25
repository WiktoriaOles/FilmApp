import { ContentBox } from "./Dashboard.style";
import {
  Header,
  TextSection,
  Movie,
  MovieList,
  Background,
} from "../../components";
import { response } from "./Dashboard.mock";

const Dashboard = () => (
  <Background>
    <Header />
    <ContentBox>
      <TextSection />
      <MovieList
        movies={response.Search.map((movie) => (
          <Movie key={movie.imdbID} title={movie.Title} img={movie.Poster} />
        ))}
      ></MovieList>
    </ContentBox>
  </Background>
);

export default Dashboard;
