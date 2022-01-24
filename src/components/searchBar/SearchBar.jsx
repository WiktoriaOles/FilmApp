import { Box, Input } from "./SearchBar.style";
import { ReactComponent as LoupeIcon } from "../../assets/Loupe.svg";

const SearchBar = () => (
  <Box>
    <LoupeIcon />
    <Input placeholder="Search Movies or TV Shows"></Input>
  </Box>
);

export default SearchBar;
