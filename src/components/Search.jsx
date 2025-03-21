import { useState } from "react";
import { useEffect } from "react";

export default function Search({ foodData, setFoodData }) {
  const URL = "https://api.spoonacular.com/recipes/complexSearch";
  const API_KEY = "479552e1afa64a50a1d8c1972abb7524";
  //const url = 'https://api.spoonacular.com/recipes/complexSearch?query=pizza&apiKey=479552e1afa64a50a1d8c1972abb7524';

  const [query, setQuery] = useState("pizza");

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results);
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
      {console.log(query)}
    </div>
  );
}
