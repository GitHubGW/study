import React, { useState } from "react";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "https://i.ibb.co/VxhktXN/webstacks-Wb-OR54pzv-LM-unsplash.jpg",
  },
  {
    original: "https://i.ibb.co/VxhktXN/webstacks-Wb-OR54pzv-LM-unsplash.jpg",
  },
  {
    original: "https://i.ibb.co/VxhktXN/webstacks-Wb-OR54pzv-LM-unsplash.jpg",
  },
];

export default function App() {
  return <ImageGallery items={images} />;
}
