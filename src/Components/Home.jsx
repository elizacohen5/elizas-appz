import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <main>
        <h1>This will be the Dashboard component</h1>
        <ul>
          <li>
            {/* dynamically link each list item to the details page for that item. Use the 
            Canvas react-router lesson for help */}
            <NavLink to="/details">Details</NavLink>
          </li>
        </ul>
      </main>
    </>
  );
}

export default Home;
