import React from "react";

export default function Avatar({imgUrl}) {
  return (
    <img
      src={imgUrl}
      className="rounded-circle"
      height="50"
      alt="Avatar"
      loading="lazy"
    />
  );
}
