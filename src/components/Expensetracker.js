import { useState } from "react";

function Expensetracker({name = "N/A", value = "N/A"}) {


  return (
    <>
      <div
        style={{
          textAlign: "center",
          width: "100%",
          marginBottom: 15,
        }}
        onClick={(event) => {
            alert("You clicked " + name + " - Php " + value);
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
              textAlign: 'left',
            }}
            type="submit"
          >
            <h2 style={{fontSize: '15px'}}>{name}</h2>
          
            <h3 style={{
                marginLeft: '80%'
            }}>
            {value}</h3>
          </button>

      </div>
    </>
  );
}

export default Expensetracker;
