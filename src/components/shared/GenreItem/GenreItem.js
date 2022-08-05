import React from 'react'
import "./GenreItem.css"

export default function GenreItem({ item }) {
  return (
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
  );
}
