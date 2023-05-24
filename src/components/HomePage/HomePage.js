import React from "react";
import "./index.css";

function index(props) {
  return (
    <div className="main-container">
      <div className="aside">
        <p>
          {" "}
          <i className="fa-solid fa-truck"></i> My Moves
        </p>
        <p>
          {" "}
          <i className="fa-solid fa-user"></i> Profile{" "}
        </p>
        <p>
          {" "}
          <i className="fa-solid fa-clipboard-question"></i> Get Quotes
        </p>
        <p>
          {" "}
          <i className="fa-light fa-right-from-bracket"></i> Logout
        </p>
      </div>

      <div className="container">
        <h1>My Moves</h1>

        <div className="moves-card-data1">
          <h2>To</h2>
          <p>{props.customer[0]?.moving_to}</p>

          <h2>From</h2>
          <p>{props.customer[0]?.moving_from}</p>
          <div className="card1_details">
            <p>{props.customer[0]?.total_items}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
