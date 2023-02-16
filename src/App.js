import React from "react";
import Navbar from "./Components/Navbar";
import Center from "./Components/Center";
import Products from "./Components/Products";
import "./App.css";
import Flex from "../src/components2/Flex.jsx";


function App() {
  return (
    <>
      <Navbar />
      <main>
        <Center />
        <Products />
      </main>
     <Flex/>
    </>
  );
}

export default App;
