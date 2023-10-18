import "./index.scss";
import Button from "./components/Button";
import Input from "./components/Input";
import { useState } from "react";
import NavbarIcon from "./components/NavbarIcon";

function App() {
  const [inputVal, setInputVal] = useState("");
  return (
    <div className="app">
      <Button
        size="m"
        onClick={() => {
          console.log("działa");
        }}
      >
        Załóż konto
      </Button>
      <Input
        label="Email"
        type="password"
        value={inputVal}
        onChange={(e) => {
          setInputVal(e.target.value);
        }}
      />
      <NavbarIcon />
    </div>
  );
}

export default App;
