import logo from "./logo.svg";
import "./App.css";
import Expensetracker from "./components/Expensetracker";

function App() {
  return (
    <>
      <div
        style={{
          width: "100%",
        }}
      >
        <div
          style={{
            width: "250px",
            margin: "auto",
            textAlign: "center",
          }}
        >
          <h3>Expense Tracker</h3>

          <Expensetracker
            name="Video Games"
            value={1000}
          ></Expensetracker>
          <Expensetracker
            name="Online Shopping"
            value={2000}
          ></Expensetracker>
          <Expensetracker
            name="Gym"
            value={800}
          ></Expensetracker>
          <Expensetracker
            name="Spotify"
            value={125}
          ></Expensetracker>
          <Expensetracker
            name="Car Maintenance"
            value={5000}
          ></Expensetracker>
          <Expensetracker
            name="Grocery"
            value={10000}
          ></Expensetracker>
          <Expensetracker
            name="Rent"
            value={5000}
          ></Expensetracker>
          <Expensetracker
            name="Travel"
            value={500}
          ></Expensetracker>
          <Expensetracker
            name="Insurance"
            value={1800}
          ></Expensetracker>
          <Expensetracker
            name="Emergency"
            value={1000}
          ></Expensetracker>

          <h4 style={{}}>
            Total : <label style={{ fontWeight: "normal" }}>27225</label>
          </h4>
        </div>
      </div>
    </>
  );
}

export default App;
