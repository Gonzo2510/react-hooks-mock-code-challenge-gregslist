import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ items, setItems}) {

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(response => response.json())
    .then(listings => setItems(listings.map(listing => {
      return(
        <ListingCard 
          key={listing.id} 
          id={listing.id} 
          description={listing.description} 
          image={listing.image} 
          location={listing.location}
          handleDelete={handleDelete} 
        />
      )
    })))
  }, [handleDelete])

  function handleDelete(index) {
    fetch(`http://localhost:6001/listings/${index}`, {
      method : 'DELETE'
    })
  }

  return (
    <main>
      <ul className="cards">
        {items}
      </ul>
    </main>
  );
}

export default ListingsContainer;
