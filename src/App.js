import HomePage from "./components/HomePage/HomePage";
import "./App.css";
import FetchData from "./fetchData/FetchData";
import { useEffect, useState } from "react";

function App() {
  const [fetchedData, setData] = useState([]);

  useEffect(() => {
    // console.log(fetchedData);
    // eslint-disable-next-line
  }, [fetchedData]);

  function changeData(fetchedData) {
    setData(fetchedData);
  }

  return (
    <div className="App">
      <FetchData fetchData={changeData} />
      <HomePage customer={fetchedData} />
    </div>
  );
}

export default App;
