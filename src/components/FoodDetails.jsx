import { useEffect } from "react";
import { useState } from "react";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const URL = `https://api.spoonacular.com/recipes/${foodId}/imformation`;
  const API_KEY = "479552e1afa64a50a1d8c1972abb7524";
  // https://api.spoonacular.com/recipes/716429/information?includeNutrition=false
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      Food Details : {foodId}
      {food.title}
      <img src={food.image} alt="" />
    </div>
  );
}
