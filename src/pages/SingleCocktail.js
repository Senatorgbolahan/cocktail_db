import React, { useState,useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function SingleCocktail() {
  const {id} =useParams();
  const  [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  const URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`

  const getCocktail = async () =>{
    // setLoading(true);
      try {
        const response = await fetch(URL);
        const data = await response.json();
        // const {drinks} = data;
        if (data.drinks) {

          //destructure
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory:category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5,
          } = data.drinks[0];
          const ingredients= [strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5]

          const newCocktail = {name, image,info, category, glass,instructions, ingredients}
          setCocktail(newCocktail);
          
        } else {
          setCocktail(null)
          
        }
      } catch (error) {
        setLoading(false);
        
      }
  }

  useEffect(() => {
    setLoading(true)
    getCocktail();
  }, [id]);

  // if (loading) {
  //   return <h2 className="section-title">Loading...</h2>
  // }
  if (!cocktail) {
    return <h2 className="section-title">no cocktail to display</h2>
  }
  else{
    const {name, image, category, info, glass, instructions, ingredients} = cocktail;
    return(
      <section className="section cocktail-section">
        <Link to='/' className="btn btn-primary">back home</Link>
        <h2 className="section-title">{name}</h2>
        <div className="drink">
          <img src={image} alt= {name} />
          <div className="drink-info">
            <p>name: {name}</p>
            <p>category: {category}</p>
            <p>info: {info}</p>
            <p>glass: {glass}</p>
            <p>instructions: {instructions}</p>
            <p>ingredients: {" "}
              {ingredients.map((item, index)=>{
                return item ? <span key={index}>{item}</span> : null;
              })}
            </p>
          </div>
        </div>
      </section>
    )

  }
  
  // return <h1>single cocktail page : {id}</h1>;
}
