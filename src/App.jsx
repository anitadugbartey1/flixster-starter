import React from "react";
import MovieList from "./components/MovieList";
import "./App.css"; 
import Header from "./Header";
import Footer from "./Footer";



function App() {
  return (
    <div className="app">
      <Header>
      </Header>
      <main>
        <MovieList/>
        
      </main>
      <Footer>

      </Footer>
    </div>
  );
}

export default App;
