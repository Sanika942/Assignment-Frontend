import React from "react";

const SortProject = ({ setSortKey }) => {
  const columns = ["projectName", "status", "priority", "startDate", "endDate"];

  const handleSort = (e) => {
    const selectedCol = e.target.value;
    setSortKey(selectedCol);
  };

  return (
    <div className="mb-3">
      <select className="form-select" onChange={handleSort}>
        <option value="">Sort by...</option>
        {columns.map((col) => (
          <option key={col} value={col}>
            {col}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortProject;
