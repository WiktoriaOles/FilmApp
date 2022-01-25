import { ContentBox } from "./Dashboard.style";
import { Header } from "../../components/header";
import { TextSection } from "../../components/textSection";
import { Movie } from "../../components/Movie";
import { response } from "./Dashboard.mock";
import { MovieList } from "../../components/MovieList";
import { Background } from "../../components/Background";

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
