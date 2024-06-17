import "bootstrap/dist/css/bootstrap.css";
import "./App.scss";
import Header from "./components/Header/Header";
import Photos from "./components/Photos/Photos";

function App() {
  return (
    <div className="App">
      <Header />
      <Photos />
    </div>
  );
}
export default App;
