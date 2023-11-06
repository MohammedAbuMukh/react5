import React, { useState } from "react";

const Load = ({ selectedDatabase }) => {
  const [newData, setNewData] = useState("");

  const handleInsert = () => {
    // Implement the code to insert data into the selected database here
  };

  return (
    <div>
      <h2>Load Screen</h2>
      <div>
        <label>New Data:</label>
        <input
          type="text"
          value={newData}
          onChange={(e) => setNewData(e.target.value)}
        />
      </div>
      <button onClick={handleInsert}>Insert Data</button>
    </div>
  );
};

export default Load;
