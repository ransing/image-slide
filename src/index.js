import React from "react";
import ReactDOM from "react-dom";
import Carousel from "./Carousel/Carousel";
import { LazyImageProvider } from "./LazyImage/LazyImageContext";
import LazyImage from "./LazyImage/LazyImage";
import "./index.css";

const images = [
  "/img/1.jpeg",
  "/img/2.jpeg",
  "/img/3.jpeg",
  "/img/4.jpeg",
  "/img/5.jpeg",
];

const App = () => (
  <LazyImageProvider>
    <Carousel>
      {images.map((image, i) => (
        <LazyImage aspectRatio={[10, 7]} src={image} key={i} />
      ))}
    </Carousel>
  </LazyImageProvider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
