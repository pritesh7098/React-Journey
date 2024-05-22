import React, { useState } from "react";
import products from "./products";

function App() {
  const [value, changeValue] = useState(true);

  return (
    <div>
      <products name="pritesh " />
    </div>
  );
}

export default App;
