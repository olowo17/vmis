import React from "react";

const Searchbar = ({ placeholder = "Enter your search", onSearch }) => {
  const handleSearch = (event) => {
    event.preventDefault();
    const query = event.target.searchBar.value.trim();
    if (onSearch) {
      onSearch(query);
    }
  };
  return (
    <section className="flex justify-center items-center p-4 bg-gray-100 w-full">
      <form
        className="flex gap-2 bg-white shadow-md rounded-lg p-4 w-full sm:w-96"
        onSubmit={handleSearch}
      >
        <input
          id="searchBar"
          type="text"
          name="searchBar"
          placeholder={placeholder}
          className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          id="search-Btn"
          className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <i className="fa-solid fa-magnifying-glass mr-2"></i> Search
        </button>
      </form>
    </section>
  );
};

export default Searchbar;
