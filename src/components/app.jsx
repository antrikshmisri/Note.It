import React from "react"
import Header from "./header"
import Note from "./note"
import Footer from "./footer"
function App() {
    return (<div>
        <Header />
        <Note title="Wash Dishes" desc="Wash dishes at 7:00 in the evening"/>
        <Note title="Study" desc="Study at 8:00 in the evening"/>
        <Footer />
    </div>);
}

export default App