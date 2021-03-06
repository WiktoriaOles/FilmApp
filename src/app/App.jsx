import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { store } from "./App.setup";
import { Dashboard, Movies, TvShows, Details, TvDetails } from "../modules";
import { theme } from "../config";

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tvShows" element={<TvShows />} />
          <Route path="/details" element={<Details />} />
          <Route path="/TvDetails" element={<TvDetails />} />
        </Routes>
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
);

export default App;
