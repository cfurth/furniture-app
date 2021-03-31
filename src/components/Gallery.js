import React from 'react';
import ItemGrid from './ItemGrid.js';
import AppHeader from './AppHeader.js';
import './Gallery.css';


export default function ImgMediaCard() {

  return (
    <div>
      <AppHeader />
      <h1 className="Gallery-header">Gallery</h1>
      <ItemGrid />
    </div>
  );
}