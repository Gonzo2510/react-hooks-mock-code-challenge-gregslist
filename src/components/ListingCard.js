import React, { useState} from "react";

function ListingCard({ id, description, image, location, handleDelete}) {
  const [favorite, setFavorite] = useState(false)
  
  function handleLike() {
    setFavorite(!favorite)
  }

  function onDeleteClick() {
    handleDelete(id)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button className="emoji-button favorite active" onClick={handleLike}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleLike}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={onDeleteClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
