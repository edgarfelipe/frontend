import React from 'react';

const brands = [
  'Prada', 'Dior', 'Gucci', 'LV', 'Loewe', 'Saint Laurent', 
  'Maison Alaia', 'Valentino', 'Cult Gaia', 'Celine', 
  'Balenciaga', 'Jacquemus', 'MIU MIU'
];

function Gallery() {
  return (
    <div className="gallery">
      {brands.map((brand, index) => (
        <div key={index} className="brand">
          <img src={`/images/${brand.toLowerCase()}.jpg`} alt={brand} />
          <p>{brand}</p>
        </div>
      ))}
    </div>
  );
}

export default Gallery;
