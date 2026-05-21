import {createTheme, type PaletteOptions, ThemeProvider} from "@mui/material";
import {NavbarContent} from "./components/Navbar.tsx";
import React, {useState} from "react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home.tsx";
import {Projects} from "./pages/Projects.tsx";
import {Contact} from "./pages/Contact.tsx";

export default function App() {

  const lightPalette: PaletteOptions = {
    mode: "light",
    primary: {
      main: "#ba170b",
      light: "#42a5f5",
      dark: "#1565c0",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#9c27b0",
      light: "#ba68c8",
      dark: "#7b1fa2",
      contrastText: "#ffffff",
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
    text: {
      primary: "#111111",
      secondary: "#555555",
    },
  };

  const darkPalette: PaletteOptions = {
    mode: "dark",
    primary: {
      main: "#ba170b",
      light: "#e3f2fd",
      dark: "#42a5f5",
      contrastText: "#000000",
    },
    secondary: {
      main: "#ce93d8",
      light: "#f3e5f5",
      dark: "#ab47bc",
      contrastText: "#000000",
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    text: {
      primary: "#ffffff",
      secondary: "#bbbbbb",
    },
  };

  const lightTheme = createTheme({
    palette: lightPalette,
    typography: {
      fontFamily: "Cambria"
    }
  });

  const darkTheme = createTheme({
    palette: darkPalette,
    typography: {
      fontFamily: "Cambria",
    }
  });

  const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [darkMode, setDarkMode] = useState<boolean>(isDarkMode);
  
  return (
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <NavbarContent darkMode={darkMode} setDarkMode={setDarkMode} />
        </BrowserRouter>
      </ThemeProvider>
  )
}