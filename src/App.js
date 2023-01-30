import "./App.css";
import Expense from "./components/data";

function App() {
  let total = 0;
  return (
    <>
      <div
        style={{
          textAlign: "center",
          width: "250px",
          margin: "auto",
        }}
      >
        <h3>Expense Tracker</h3>

        <div
          style={{
            width: "100%",
          }}
        >
          {Expense.map((item, i) => {
            return (
              <div
                onClick={(event) => {
                  alert("You clicked " + item.name + " - Php " + item.price);
                }}
              >
                <button
                  style={{
                    backgroundColor: "#00b4d8",
                    outline: "none",
                    height: "80px",
                    width: "250px",
                    borderRadius: "25px",
                    padding: "10px",
                    textAlign: "left",
                    marginBottom: "15px",
                  }}
                  key={i}
                >
                  <h2 style={{ fontSize: "15px" }}>{item.name}</h2>

                  <h3
                    style={{
                      marginLeft: "80%",
                    }}
                  >
                    {item.price}
                  </h3>
                </button>
              </div>
            );
          })}
        </div>

        <h4 style={{}}>
          Total :
          {Expense.map((sum) => {
            total += sum.price;
          })}
          <label style={{ fontWeight: "normal" }}>{total}</label>
        </h4>
      </div>
    </>
  );
}

export default App;
