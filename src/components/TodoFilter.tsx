import { useState } from "react";

interface Props {
  total: number;
  onSelectFilter: (filter: "all" | "active" | "completed") => void;
  onClear: () => void;
}

const TodoFilter = ({ total, onSelectFilter, onClear }: Props) => {
  const [activeFilter, setActiveFilter] = useState<
    "all" | "active" | "completed"
  >("all");

  const handleFilterClick = (filter: "all" | "active" | "completed") => {
    setActiveFilter(filter);
    onSelectFilter(filter);
  };

  return (
    <div className="filters-container">
      <div className="quantity-task">{total} item left</div>
      {/* filter tn */}
      <div className="filters-container filter">
        <button
          className={`btn-filter ${
            activeFilter === "all" ? "active-filter" : ""
          }`}
          onClick={() => handleFilterClick("all")}
        >
          All
        </button>
        <button
          className={`btn-filter ${
            activeFilter === "active" ? "active-filter" : ""
          }`}
          value={0}
          onClick={() => handleFilterClick("active")}
        >
          Active
        </button>
        <button
          className={`btn-filter ${
            activeFilter === "completed" ? "active-filter" : ""
          }`}
          value={1}
          onClick={() => handleFilterClick("completed")}
        >
          Completed
        </button>
      </div>
      {/*  */}
      <div>
        <button className="clear-btn" onClick={onClear}>
          Clear Completed
        </button>
      </div>
    </div>
  );
};

export default TodoFilter;
