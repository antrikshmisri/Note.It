import React from "react";
import Header from "./header";
import Note from "./note";
import Footer from "./footer";
import notes from "../notes";
import Container from "./container";
function App() {
  return (
    <div>
      <Header />
      <Container>
        {notes.map((note) => (
          <Note key={note.key} title={note.title} desc={note.content} />
        ))}
      </Container>
      <Footer />
    </div>
  );
}

export default App;
