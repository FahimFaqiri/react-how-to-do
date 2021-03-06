import React from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";
import { Nav, Header, Footer } from "./components";

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <div className="App">
            <Nav />
            <Header />
            <Footer />
          </div>
        </>
      </ThemeProvider>
    );
  }
}

export default App;
