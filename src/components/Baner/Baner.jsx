import { Poster, TextBox, Container } from "./Baner.style.js";

const Baner = (props) => (
  <Container>
    <Poster img={props.img} />
    <TextBox>
      <p>TtoV / {props.type}</p>
      {props.title}
    </TextBox>
  </Container>
);

export default Baner;
