import React from "react";
import { StateList, Coupon, recipes } from "../Data";
const List = () => {
  const line = [
    "I write, erase, rewrite",
    "Erase again, and then",
    "A poppy blooms.",
  ];

  // const rend = line.map((li, index) => (
  //   <div key={index}>
  //     <p>{li}</p>
  //     <hr />
  //   </div>
  // ));

  const myArray = [10, 20, 30, 40, 50]

const arr = myArray.forEach((el)=>{
    console.log(el)
    return (<h2>{el}</h2>)
})

  return (
    <article>
      <h1>Haiku by Tachibana Hokushi</h1>
      <br />
      {arr}
    </article>
  );

  // return (
  //   <div>
  //     <h1>Recipes</h1>
  //     {recipes.map(recipe =>
  //       <Output {...recipe} key={recipe.id} />
  //     )}
  //   </div>
  // );

  // const Output = ({id, name, ingredients}) => {

  //   return (
  //     <div>
  //       <h2>{name}</h2>
  //       <ul>
  //         {ingredients.map(ingredient =>
  //           <li key={ingredient}>
  //             {ingredient}
  //           </li>
  //         )}
  //       </ul>
  //     </div>
  //   );

  // }

  // const recipeList = recipes.map((re) => (
  //   <div key={re.id}>
  //     <h2>{re.name}</h2>
  //     <ul>
  //       {re.ingredients.map((ing) => (
  //         <li key={ing}>{ing}</li>
  //       ))}
  //     </ul>
  //   </div>
  // ));
  // return (
  //   <div>

  //     <button
  //       type="button"
  //       onClick={( ) => {
  //         recipes.push({
  //           id: "indian",
  //           name: "Kaddai paneer",
  //           ingredients: [
  //             "tomatoes",
  //             "blackpepper",
  //             "onion",
  //             "olives",
  //             "cream",
  //           ],
  //         });
  //       }}
  //     >
  //       ADD
  //     </button><br />{recipeList}
  //   </div>
  // );
};

export default List;
