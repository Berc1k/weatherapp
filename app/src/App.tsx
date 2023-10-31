import "./index.scss";
import Button from "./components/Button";

function App() {
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
    </div>
  );
}

export default App;
