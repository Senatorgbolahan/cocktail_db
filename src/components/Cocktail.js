import React from "react";
import { Link } from "react-router-dom";

export default function Cocktail({id, name, image, info, glass}) {
  
  return(
    <article className="cocktail">
      <div className="img-container">
        <img src= {image} alt= {name} className="container" />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h3>{glass}</h3>
        <p>{info}</p>
        <Link to = {`/cocktail/${id}`} className="btn btn-primary btn-details">details</Link>
      </div>
    </article>
  )
}
