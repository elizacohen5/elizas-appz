import { Outlet } from "react-router-dom"
import Header from "./Components/Header";

function App() {
  return (
    <div className="app">
      <header className="App-header">
       <Header />
      </header>
      <Outlet />
    </div>
  );
}

export default App;
