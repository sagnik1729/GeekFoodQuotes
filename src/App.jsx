import React from "react";
import Navbar from "./components/Navbar"
import QuoteContainer from "./components/QuoteContainer"
import Footer from "./components/Footer"
import quotes from './data/quotes.json'; 
// Importing the quotes data from a JSON file
// This file contains an array of quote objects with text and author properties
import "./App.css"

function App() {
  

  return (
    <div className="app">
      <Navbar />
      <main>
        <h1 className="page-title">Geek Foods Quotes</h1>
        <QuoteContainer initialQuotes={quotes} />
      </main>
      <Footer/>

    </div>
  )
}

export default App
