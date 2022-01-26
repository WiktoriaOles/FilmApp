import { Box } from "./Rating.style";
import { ReactComponent as Star } from "../../assets/Star.svg";

const Rating = (props) => (
  <Box>
    <Star />
    <p>{props.value}</p>
  </Box>
);

export default Rating;
