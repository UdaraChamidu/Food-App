export default function FoodItem({ food }) {
  return (
    <div>
      <img src={food.image} alt="" />
      <h3>{food.title}</h3>
      <button>View Recipe</button>
    </div>
  );
}
