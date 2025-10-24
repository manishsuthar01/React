import React, { useState } from "react";

const Pagination = () => {
  const data = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`); // 50 items
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Calculate items for current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Total pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold">Pagination Example</h2>

      <ul className="my-3">
        {currentItems.map((item, index) => (
          <li key={index} className="p-2 border-b">
            {item}
          </li>
        ))}
      </ul>

      {/* Pagination controls */}
      <div className="flex gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`px-3 py-1 border ${
              currentPage === i + 1 ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
