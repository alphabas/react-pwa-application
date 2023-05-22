import { useEffect, useState } from "react";
import "./App.css";
import { getAllPockmonList } from "./api/pockemon";

function App() {
  const [pockemonData, setPockemonData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getAllPockmonList();
      // console.log("=<>>", data);
      setPockemonData(data?.results);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <div
        style={{
          marginTop: "40px",
          justifyContent: "space-around",
          display: "flex",
          flexWrap: "wrap",
          width: "90%",
          margin: "auto",
        }}
      >
        {pockemonData?.map((poke, i) => {
          return (
            <div key={i} style={{ width: "400px", height: "330px" }}>
              <div style={{ padding: "5px 10px" }}>
                <p style={{ fontWeight: "bold", textTransform: "capitalize" }}>
                  {poke.name}
                </p>
              </div>
              <img
                style={{
                  height: "300px",
                  width: "300px",
                  border: "2px solid #000000",
                  margin: "30px 10px",
                }}
                alt="pokemon"
                src={`https://img.pokemondb.net/artwork/large/${poke.name}.jpg`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
