import "./index.scss";
import Button from "./components/Button";
import Input from "./components/Input";
import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [inputVal, setInputVal] = useState("");
  return (
    <div className="app">
      <Navbar />
      <Input
        label="Email"
        type="password"
        value={inputVal}
        onChange={(e) => {
          setInputVal(e.target.value);
        }}
      />
      <Button
        size="m"
        onClick={() => {
          console.log("działa");
        }}
      >
        Załóż konto
      </Button>
    </div>
  );
}

export default App;
