import Navbar from "./Navbar.js";
import data from "./data.js";
import Location from "./Location.js";

function App() {
  let location = data.map((item) => {
    return <Location key={item.title} item={item} />;
  });
  return (
    <div>
      <Navbar />
      <div className="bottom-section">
        <div className="location-list">{location}</div>
      </div>
    </div>
  );
}

export default App;
