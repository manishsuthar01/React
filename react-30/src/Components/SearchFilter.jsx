import React, { useState } from "react";

const SearchFilter = (props) => {
  const [query, setQuery] = useState("");
  const [data] = useState(props.item);
  const [filter, setFilter] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    // filter on the latest value, not on stale query
    const result = data.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    setFilter(result);
  };

  return (
    <div className="flex flex-col items-center justify-center p-20">
      <input
        className="bg-white border p-3 mb-4"
        type="text"
        placeholder="search..."
        value={query}
        onChange={handleChange}
      />
 
      <ul className="bg-white w-48 max-h-full overflow-y-auto text-black">
        { query!=="" &&  filter.map((item, index) => (
          <li key={index} className="p-2 hover:bg-gray-200">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFilter;
