import { Card, Img, Title } from "./Movie.style";

const Movie = (props) => (
  <Card>
    <Img src={props.img} />
    <Title>{props.title}</Title>
  </Card>
);

export default Movie;
