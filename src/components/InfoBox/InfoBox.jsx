import { SearchBar } from "../searchBar";
import { Box, SmallText, BigText } from "./InfoBox.style";

const InfoBox = (props) => (
  <Box>
    <SmallText>TtoV</SmallText>
    <BigText>{props.title}</BigText>
    <SearchBar />
    <SmallText>{props.number} items</SmallText>
  </Box>
);

export default InfoBox;
