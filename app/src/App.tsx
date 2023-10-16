import "./App.scss";

function Avatar() {
  return (
    <div className="avatar">
      <div className="avatar__username">hello!</div>
      <div className="avatar__other">other!</div>
    </div>
  );
}

function App() {
  return (
    <div className="app__foo">
      <Avatar />
    </div>
  );
}

export default App;
