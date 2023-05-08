import "./App.css";
import { useState } from "react";
import { Nav } from "./components/Nav/Nav";
import { ProductsSection } from "./components/ProductsSection/ProductsSection";
import { MyContext } from "./MyContext";

function App() {
  const [isAdmin, setIsAdmin] = useState(true);

  return (
    <MyContext.Provider value={{setIsAdmin}}>
      <div className="App">
        isAdmin: {isAdmin ? "true" : "false"}
        <Nav />
        <ProductsSection />
      </div>
    </MyContext.Provider>
  );
}

export default App;
