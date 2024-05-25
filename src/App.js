import { Outlet } from "react-router-dom"
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Header />
      </header>
      <Outlet />
    </div>
  );
}

export default App;
