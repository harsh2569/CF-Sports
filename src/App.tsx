import React from "react";

import { Footer, Header } from "./components";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
