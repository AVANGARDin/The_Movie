import React from 'react'
import { Link } from 'react-router-dom';
import "./GenreItem.css"

export default function GenreItem({ item }) {
  return (
    <Link to={`movie/genres/${item.id}/${item.name}`}>
      <div className="category__player">
        <video
          loop
          muted
          src={item.src}
          type="video/mp4"
          onPause={(e) => {
            e.target.currentTime = 0;
          }}
        ></video>
        <div
          className="category"
          onMouseOver={(e) => {
            e.target.closest(".category__player").childNodes[0].play();
          }}
          onMouseOut={(e) => {
            e.target.closest(".category__player").childNodes[0].pause();
          }}
        >
          {item.name}
        </div>
      </div>
    </Link>
  );
}
