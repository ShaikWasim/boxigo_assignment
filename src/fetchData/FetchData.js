import React, { useEffect } from "react";

function FetchData(props) {
  useEffect(() => {
    fetchApi();
    // eslint-disable-next-line
  }, []);

  async function fetchApi() {
    const fetchData = await fetch("http://test.api.boxigo.in/sample-data/");
    const fetchedData = await fetchData.json();
    return new Promise((resolve, reject) => {
      if (fetchData.statusText === "OK") {
        resolve(props.fetchData(fetchedData.Customer_Estimate_Flow));
      } else {
        reject(alert("Error"));
      }
    });
  }
  return <></>;
}
export default FetchData;
