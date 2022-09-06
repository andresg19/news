import React from "react";
import "./Carousel.modules.css";

export default function Carousel() {
  return (
    <div class="slider">
      <ul>
        <li>
          <img src="./bannerbands.jpg" width="100%" alt="" />
        </li>
        <li>
          <img src="./bannerdos.jpg" width="100%" alt="" />
        </li>
        <li>
          <img src="./bannertres.jpg" width="100%" alt="" />
        </li>
      </ul>
    </div>
  );
}