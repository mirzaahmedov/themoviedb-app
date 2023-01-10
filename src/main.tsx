import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import SaveProvider from "./context/saved";
import APIProvider from "./api/Provider";
import Home from "./pages/Home/Home";
import Movie from "./pages/Movie/Movie";
import Layout from "./pages/layout/Layout";
import "./index.css";

import theme from "./theme/default";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <APIProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <SaveProvider>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="movie/:id" element={<Movie />} />
              </Route>
            </Routes>
          </SaveProvider>
        </BrowserRouter>
      </ThemeProvider>
    </APIProvider>
  </StrictMode>
);
