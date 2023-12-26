import logo from "./logo.svg";
import "./App.scss";
import Fibonacci from "./components/fibonacci";

function App() {
  return (
    <>
      <div id="header-image" className="parallax fibonacci-bg"></div>
      <div id="container-main">
        <div id="container-components">
          <Fibonacci />
        </div>
      </div>
    </>
  );
}

export default App;
