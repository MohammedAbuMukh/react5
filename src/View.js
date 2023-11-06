import React from "react";
import mockData from "./data";

const View = ({ selectedDatabase }) => {
  const data = selectedDatabase === "Cassandra" ? mockData.cassandraData : mockData.oracleData;

  return (
    <div>
      <h2>View Screen</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default View;
