import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="rounded-full px-4 py-2 text-sm bg-amber-100 placeholder:text-stone-400 w-29 sm:w-68 sm:focus:w-72 focus:outline-none focus:ring focus:ring-amber-500 focus:ring-opacity-50  transition-all duration-300"
      />
    </form>
  );
}

export default SearchOrder;
